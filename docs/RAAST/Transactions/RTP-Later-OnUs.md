# Request to Pay – Later (RTP Later) — On-Us Transaction

RTP Later is a merchant-initiated deferred payment request.

- Expects deferred payment from the customer — not immediate.
- Maximum expiry: 40 days from RTP creation.
- Primarily applicable for bulk billing scenarios: schools, utilities, subscription services.
- Flow is identical to RTP Now except the payment is deferred.

## Positive Flow

| Requester | Action(s) / Process Description |
|---|---|
| Merchant | Selects RTP Later generate option. RTP Later request initiated. |
| Acquiring Services | Initiates Title Fetch (IBAN) to RAAST OC. |
| RAAST OC | Sends Title Fetch to Acquiring Bank CBS/RAAST. |
| CBS | Returns Title Fetch success. |
| RAAST OC | Returns RTP ID and Title to Acquiring Services. |
| Acquiring Services | Generates RTP Later payload. Initiates RTP Later request to RAAST OC. |
| RAAST OC | Validates. Checks sender and receiver IBAN. Creates `pain.13`. Calls RTP Request Callback API to Backend App. |
| Backend App | Receives RTP Request. Validates. Sends notification to customer. |
| Customer | Receives notification. Reviews request. Accepts. At chosen time (within 40-day window): authenticates and initiates payment. |
| Backend App | Receives payment. Calls RAAST OC. |
| RAAST OC | Validates. Initiates FT to CBS. |
| CBS | Checks limits. Debits customer. Credits Merchant Payable GL. |
| RAAST OC | Success. Notifies Acquiring Services. |
| Acquiring Services | Calculates net. Credit Advice OnUs. Debits Payable GL. Credits Merchant Account. |
| Merchant | Notified: Payment Successful. |

### Sequence Diagram — RTP Later On-Us (Positive)

```mermaid
sequenceDiagram
    participant M as Merchant
    participant AS as Acquiring Services
    participant OC as RAAST OC
    participant CBS as CBS
    participant BA as Backend App
    participant C as Customer

    M->>AS: Selects RTP Later Generate Option
    AS->>OC: Initiates Title Fetch (IBAN)
    OC->>CBS: Sends Title Fetch to Acquiring Bank CBS/RAAST
    CBS-->>OC: Returns Title Fetch Success
    OC-->>AS: Returns RTP ID and Title
    AS->>AS: Generates RTP Later Payload
    AS->>OC: Initiates RTP Later Request
    OC->>OC: Validates, Checks Sender/Receiver IBAN & Creates pain.13
    OC->>BA: Calls RTP Request Callback API
    BA->>C: Sends Notification to Customer
    C->>C: Receives & Reviews Notification
    C->>BA: Initiates Payment (within 40-day window)
    BA->>OC: Receives Payment, Calls RAAST OC
    OC->>OC: Validates Request
    OC->>CBS: Initiates FT to CBS
    CBS->>CBS: Checks Limits, Debits Customer & Credits Merchant Payable GL
    CBS-->>OC: FT Success Response
    OC->>AS: Success. Notifies Acquiring Services
    AS->>AS: Calculates Net, Generates CreditAdviceOnUs, Debits Payable GL & Credits Merchant Account
    AS-->>M: Notified: Payment Successful
```

## Negative Cases

### RTP Expired (40-Day Window Exceeded)

| Requester | Action(s) / Process Description |
|---|---|
| RAAST OC / RAAST SBP | RTP ID has passed 40-day expiry. RTP status updated to Expired. Merchant notified. |

### Customer Rejects

| Requester | Action(s) / Process Description |
|---|---|
| Backend App | Customer rejects RTP. Rejection forwarded to RAAST OC. Merchant notified. |

### Sequence Diagram — RTP Later On-Us (Negative)

```mermaid
sequenceDiagram
    participant M as Merchant
    participant AS as Acquiring Services
    participant OC as RAAST OC
    participant BA as Backend App
    participant C as Customer

    M->>AS: Selects RTP Later Generate Option
    AS->>OC: Initiates Title Fetch (IBAN)
    OC-->>AS: Returns RTP ID and Title
    AS->>OC: Initiates RTP Later Request
    OC->>BA: Calls RTP Request Callback API
    BA->>C: Sends Notification to Customer

    alt Case 1: RTP Past 40-Day Expiry
        OC->>OC: System detects RTP ID has passed 40-day expiry
        OC->>OC: Update RTP Status to Expired
        OC->>AS: Notify Acquiring Services (Expired)
        AS-->>M: Notified: Payment Failed (RTP Expired)
    else Case 2: Customer Rejects RTP
        C->>C: Reviews Request & Selects Reject
        C->>BA: Sends Explicit Rejection
        BA->>OC: Rejection Forwarded to RAAST OC
        OC->>AS: Notify Acquiring Services (Rejected)
        AS-->>M: Notified: Payment Failed (Customer Rejected)
    end
```
