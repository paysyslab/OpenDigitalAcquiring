# Static QRC (SQRC) — Off-Us Transaction

This is the flow when the Customer is from a different bank and the Merchant is at the Acquiring Bank.

## Positive Flow

| Requester | Action(s) / Process Description |
|---|---|
| Customer | Scans merchant's QR code using their mobile banking app. Enters amount. Approves transaction. |
| Issuer Bank | Processes payment request. Sends `pacs.008` message to RAAST SBP for payment initiation. |
| RAAST SBP | Validates payment request. Places hold on funds. Forwards to RAAST OC. |
| RAAST OC | Sends Merchant Inquiry (Off-Us) to Acquiring Services to check merchant account status. |
| Acquiring Services (RAAST) | Validates merchant account and status. Responds with success. |
| RAAST OC | Posts `pacs.002 AUTH` to RAAST SBP. |
| RAAST SBP | Marks payment as authorized. Updates position accounts. Generates `pacs.002 ACSP` for participants. |
| RAAST OC | Pulls `pacs.002 ACSP`. Initiates Fund Transfer (GL to GL) to CBS. |
| CBS | Debits RAAST GL Account. Credits Merchant Payable GL Account. Responds to RAAST OC. |
| RAAST OC | On successful payment, initiates Payment Notification (Off-Us) to Acquiring Services. |
| Acquiring Services | Responds with acknowledgement. Calculates fee and net amount (MDR + FED). Sends Credit Advice (Off-Us) to RAAST OC. |
| RAAST OC | Receives Credit Advice. Initiates FT to CBS (STR Fund Transfer Deposits). |
| CBS | Debits Merchant Payable GL Account (less MDR + FED). Credits Merchant Account (net amount). Responds to RAAST OC. |
| RAAST OC | Receives success. Responds to Acquiring Services. |
| Acquiring Services | Notifies merchant of successful payment via in-app notification. |
| Issuer Bank | Informs customer of payment success via their banking app. |

### Sequence Diagram — SQRC Off-Us (Positive)

```mermaid
sequenceDiagram
    participant C as Customer
    participant IB as Issuer Bank
    participant SBP as RAAST SBP
    participant OC as RAAST OC
    participant AS as Acquiring Services
    participant CBS as CBS

    C->>IB: Scan SQRC + Initiate Payment
    IB->>SBP: pacs.008 Payment Initiation
    SBP->>OC: Forward to RAAST OC
    OC->>AS: Merchant Inquiry (Off-Us)
    AS-->>OC: Merchant Valid
    OC->>SBP: Post pacs.002 AUTH
    SBP->>SBP: Mark Authorized + Update Position Accounts
    SBP-->>IB: pacs.002 ACSP
    OC->>SBP: Pull pacs.002 ACSP
    OC->>CBS: FT Request (GL to GL)
    CBS->>CBS: Debit RAAST GL, Credit Payable GL
    CBS-->>OC: FT Response
    OC->>AS: Merchant & Payment Notification (Off-Us)
    AS->>AS: Calculate Net (MDR + FED)
    AS-->>OC: Credit Advice OffUs
    OC->>CBS: FT Request (Payable GL to Merchant)
    CBS->>CBS: Debit, Credit
    CBS-->>OC: FT Response Success
    OC-->>IB: Payment Success Notification
    IB-->>C: Payment Success
```

## Negative Cases

### Payment Declined (Off-Us)

| Requester | Action(s) / Process Description |
|---|---|
| Acquiring Services (RAAST) | Merchant account inactive or limit exceeded. Returns decline reason to RAAST OC. |
| RAAST OC | Returns decline to RAAST SBP. |
| RAAST SBP | Sends `pacs.002 RJCT` to Issuer. |
| Issuer Bank | Notifies customer of failed payment with reason. |

### Sequence Diagram — SQRC Off-Us (Negative)

```mermaid
sequenceDiagram
    participant C as Customer
    participant IB as Issuer Bank
    participant SBP as RAAST SBP
    participant OC as RAAST OC
    participant AS as Acquiring Services
    participant CBS as CBS

    C->>IB: Scan SQRC + Initiate Payment
    IB->>SBP: pacs.008 Payment Initiation
    SBP->>OC: Forward to RAAST OC
    OC->>AS: Merchant Inquiry (Off-Us)
    AS->>AS: Merchant inactive / limit exceeded
    AS-->>OC: Reject with reason
    OC-->>SBP: Return decline reason
    SBP->>IB: pacs.002 RJCT
    IB-->>C: Notify customer of failed payment
```
