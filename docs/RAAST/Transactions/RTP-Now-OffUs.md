# Request to Pay – Now (RTP Now) — Off-Us Transaction

Customer is from a different bank.

## Positive Flow

| Requester | Action(s) / Process Description |
|---|---|
| Merchant | Selects RTP Now. Requests initiated to Acquiring Services. |
| Acquiring Services | Initiates Title Fetch (IBAN) to RAAST OC. |
| RAAST OC | Sends Title Fetch `TF-CAS` request to RAAST SBP. |
| RAAST SBP | Receives `TF-CAS`. Shares acknowledgement. Sends Title Fetch to Issuer CBS. |
| Issuer CBS | Returns Title Fetch success. |
| RAAST SBP | Returns success to RAAST OC. |
| RAAST OC | Returns RTP ID and Title to Acquiring Services. |
| Acquiring Services | Generates RTP Now payload. Initiates to RAAST OC. |
| RAAST OC | Sends `pain.13` to RAAST SBP. |
| RAAST SBP | Validates. Stores RTP ID. Returns acknowledgement. |
| Issuer | Fetches RTP Now request get-mx from RAAST SBP. Validates. Presents to customer. |
| Customer | Reviews. Approves. Authenticates. Initiates payment. Sends `pacs.008` to RAAST SBP. |
| RAAST SBP | Receives `pacs.008`. Processes. Sends `pacs.14` (ACSP) to RAAST OC. |
| RAAST OC | Receives `pacs.14`. Identifies Off-Us. Initiates Fund Transfer to CBS. |
| CBS | Debits RAAST GL. Credits Merchant Payable GL. |
| RAAST OC | Initiates Merchant and Payment Notification OffUs to Acquiring Services. |
| Acquiring Services | Calculates net. Sends Credit Advice OffUs. |
| CBS | Debits Merchant Payable GL. Credits Merchant Account. |
| Acquiring Services | Notifies merchant: Payment Successful. |

### Sequence Diagram — RTP Now Off-Us (Positive)

```mermaid
sequenceDiagram
    participant M as Merchant
    participant AS as Acquiring Services
    participant OC as RAAST OC
    participant SBP as RAAST SBP
    participant I as Issuer
    participant CBS as CBS

    M->>AS: RTP Now Request
    AS->>OC: Title Fetch (IBAN/Alias)
    OC->>SBP: TF-CAS Request to RAAST SBP
    SBP->>I: Title Fetch to Issuer CBS
    I-->>SBP: Account Title Response
    SBP-->>OC: Title + RTP ID
    OC-->>AS: RTP ID + Title
    AS->>OC: pain.13 - RTP Now Request
    OC->>SBP: pain.13 to RAAST SBP
    SBP-->>OC: HTTP 200
    SBP->>I: Fetch RTP Request get-mx
    I->>I: Customer Approves + Initiates Payment
    I->>SBP: pacs.008 Payment
    SBP->>OC: pacs.14 (ACSP) - Notify OC
    OC->>CBS: FT Request (GL to GL)
    CBS-->>OC: FT Response
    OC->>AS: MerchantAndPaymentNotificationOffUs
    AS->>AS: Calculate Net + Credit Advice
    AS->>CBS: FT Payable to Merchant Account
    CBS-->>AS: FT Response Success
    AS-->>M: Payment Processed Successfully
```

## Negative Cases

### Customer Rejects / Payment Declined

| Requester | Action(s) / Process Description |
|---|---|
| Issuer / RAAST SBP | Customer rejects or payment declined (insufficient funds). `pacs.002 RJCT` sent. Merchant notified of failure with reason. |

### Sequence Diagram — RTP Now Off-Us (Negative)

```mermaid
sequenceDiagram
    participant M as Merchant
    participant AS as Acquiring Services
    participant OC as RAAST OC
    participant SBP as RAAST SBP
    participant I as Issuer
    participant CBS as CBS

    M->>AS: RTP Now Request
    AS->>OC: Title Fetch (IBAN/Alias)
    OC->>SBP: TF-CAS Request to RAAST SBP
    SBP-->>OC: Title + RTP ID
    OC-->>AS: RTP ID + Title
    AS->>OC: pain.13 - RTP Now Request
    OC->>SBP: pain.13 to RAAST SBP
    SBP->>I: Fetch RTP Request get-mx

    alt Case 1: Customer Rejects RTP
        I->>I: Customer Reviews & Rejects RTP
        I->>SBP: pacs.002 RJCT (Rejected)
    else Case 2: Payment Declined (e.g. Insufficient Funds)
        I->>I: Customer Approves Payment
        I->>SBP: Check Balance / Debit Request
        SBP-->>I: Decline (Insufficient Funds)
        SBP->>SBP: pacs.002 RJCT (Declined)
    end
    SBP->>OC: pacs.002 RJCT - Notify OC
    OC->>AS: MerchantAndPaymentNotificationOffUs (Failed + Reason)
    AS-->>M: Payment Failed (Notified with Reason)
```
