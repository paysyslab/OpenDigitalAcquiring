# Request to Pay – Later (RTP Later) — Off-Us Transaction

## Positive Flow

| Requester | Action(s) / Process Description |
|---|---|
| Merchant | Selects RTP Later. |
| Acquiring Services | Initiates Title Fetch to RAAST OC. |
| RAAST OC | Sends `TF-CAS` to RAAST SBP. |
| RAAST SBP | Fetches from Issuer CBS. Returns title. |
| RAAST OC | Returns RTP ID and Title to Acquiring Services. |
| Acquiring Services | Generates RTP Later payload. Initiates to RAAST OC. |
| RAAST OC | Sends `pain.13` to RAAST SBP. |
| RAAST SBP | Validates. Stores RTP ID. Returns acknowledgement. |
| Issuer | Fetches RTP Later request get-mx. Presents to customer. |
| Customer | Reviews. Accepts. At chosen time within 40-day window: initiates payment. Sends `pacs.008`. |
| RAAST SBP | Processes `pacs.008`. Sends `pacs.14` to RAAST OC. |
| RAAST OC | Initiates Fund Transfer to CBS. |
| CBS | Debits RAAST GL. Credits Merchant Payable GL. |
| RAAST OC | Merchant and Payment Notification OffUs to Acquiring Services. |
| Acquiring Services | Calculates net. Credit Advice OffUs. CBS debits Payable GL. Credits Merchant Account. |
| Acquiring Services | Notifies merchant: Payment Successful. |

### Sequence Diagram — RTP Later Off-Us (Positive)

```mermaid
sequenceDiagram
    participant M as Merchant
    participant AS as Acquiring Services
    participant OC as RAAST OC
    participant SBP as RAAST SBP
    participant CBS as Acquiring Bank CBS
    participant I as Issuer
    participant C as Customer

    M->>AS: Merchant selects RTP-L generate option
    AS->>OC: Request for RTP Later
    OC->>SBP: Request TF (IBAN/Alias) for RTP
    SBP->>CBS: TF request CAS / Title Fetch Request
    CBS-->>SBP: Title Fetch Response
    SBP-->>OC: Title fetched successfully
    OC-->>AS: Response (RTP ID / Title)
    AS->>AS: Generate RTP-L payload with unique RTP ID
    AS->>OC: Initiate RTP-Later request
    OC->>SBP: Send pain.013 request
    SBP->>SBP: Validate, check uniqueness, store RTP ID
    SBP-->>OC: Ack (HTTP 200)
    OC-->>AS: Ack (HTTP 200)
    SBP->>I: Fetch RTP request (get-mx)
    I-->>SBP: Ack (HTTP 200)
    I->>I: Reviews & accepts at chosen time within 40-day window
    I->>SBP: Send pacs.008 (RTP Later)
    SBP->>SBP: Checks pacs.008 against pain.13
    SBP-->>I: Ack (HTTP 200)
    SBP->>OC: Fetch pacs.002 (ACSP)
    I->>I: Process Debit Authorization
    OC->>SBP: Fetch pain.014 (ACSP)
    SBP-->>OC: HTTP 200
    OC->>OC: Identify BIC is of other bank, initiate notify merchant
    OC->>AS: Call Notify Merchant
    AS->>AS: Notify merchant, check status + RTP ID
    AS-->>OC: Success Response
    OC->>SBP: Fetch (CB.pacs.008) get-mx
    SBP-->>OC: HTTP 200
    OC->>OC: Initiate FT call
    OC->>CBS: Fund Transfer Request (GL to GL Transfer)
    CBS->>CBS: Debit RAAST GL account, Credit Merchant Payable GL Acc
    CBS-->>OC: Fund Transfer response
    OC->>OC: On success, log transaction & initiate notify merchant offus
    OC->>AS: MerchantAndPaymentNotificationOffUs Request
    AS-->>OC: HTTP 200
    AS->>AS: Calculate Net Amount for Merchant (MDR+FED)
    AS->>OC: Credit Advise Offus Request
    OC->>CBS: Fund Transfer Request
    CBS->>CBS: Debit Merchant Payable GL Acc, Credit Merchant Account
    CBS-->>OC: Fund Transfer Response
    OC-->>AS: CreditAdviseOffus Success
    AS-->>M: Payment Completed / Notify Merchant Payment processed successfully
```

## Negative Cases

### RTP Expired / Payment Declined

| Requester | Action(s) / Process Description |
|---|---|
| RAAST SBP / Issuer | RTP expired or payment declined. `pacs.002 RJCT`. Merchant notified with reason. |

### Sequence Diagram — RTP Later Off-Us (Negative)

```mermaid
sequenceDiagram
    participant M as Merchant
    participant AS as Acquiring Services
    participant OC as RAAST OC
    participant SBP as RAAST SBP
    participant CBS as Acquiring Bank CBS
    participant I as Issuer

    M->>AS: Request for RTP Later
    AS->>OC: Request TF (IBAN/Alias) for RTP
    OC->>SBP: TF request CAS
    SBP->>CBS: Title Fetch Request
    CBS-->>SBP: Title Fetch Response
    SBP-->>OC: Title fetched successfully
    OC-->>AS: Response (RTP ID / Title)
    AS->>OC: Initiate RTP-Later request
    OC->>SBP: Send pain.013 request
    SBP-->>OC: Ack (HTTP 200)
    OC-->>AS: Ack (HTTP 200)

    alt Case 1: Customer Declines Payment / Insufficient Funds
        SBP->>I: Fetch RTP request (get-mx)
        I->>I: Customer reviews & rejects OR system declines (no funds)
        I->>SBP: Send pacs.002 RJCT (Declined)
        SBP-->>I: Ack (HTTP 200)
    else Case 2: RTP Passed 40-Day Expiry Window
        SBP->>SBP: System detects 40-day window expired without customer action
        SBP->>SBP: Generate pacs.002 RJCT internally (Expired)
    end
    SBP->>OC: Fetch pacs.002 RJCT
    OC->>OC: Identify transaction failure status & parse decline reason code
    OC->>AS: MerchantAndPaymentNotificationOffUs Request (Failed)
    AS-->>M: Payment Failed (Notified with Reason)
```
