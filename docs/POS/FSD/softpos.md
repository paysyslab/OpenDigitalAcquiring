# SoftPOS Payment

This is a form of merchant-initiated payment where the merchant can initiate a SoftPOS payment from the application.

## Functional Flow

| Requester | Action(s) / Process Description |
|---|---|
| Merchant App | Merchant selects the SoftPOS option. |
| App Service | Merchant is validated. SDK initialization token is sent to the merchant app. `GetToken` (session token) and `GetDeviceInfo` are called to retrieve device information. |
| Merchant App | The token is used to initialize the SDK. Merchant app initializes the SDK with the provided token. |
| SDK | SoftPOS transaction is initiated to SDK. SDK validates the request (terminal) and processes it. SDK receives the request for SoftPOS and sends an ISO8583 message to POS Acquiring Services. |
| POS Acquiring Service | Generates RRN and STAN. Validates the merchant and transaction request. Sends an echo message to the scheme every 30 seconds to maintain connectivity. Sends ISO8583 message to the relevant scheme. |
| Scheme | Validates the card, PIN, and balance. Sends ISO8583 message to the issuer for card verification. |
| Issuer | Responds back to the scheme with the ISO8583 message. |
| Scheme | Responds back to POS Acquiring Service. |
| POS Acquiring Service | Sends POS acquiring response back to SDK. POS acquiring responds with ISO8583 field 39 containing the response code for transaction status. |
| SDK | Sends response back to the merchant app with the response code. Based on the response code, the transaction is either initiated or fails. |
| Merchant App | Notifies the merchant of the transaction status. |
| SDK | If timeout occurs, the reversal process is triggered. |

## Process Flow — Sequence Diagram

```mermaid
sequenceDiagram
    participant M as Merchant App
    participant AS as App Service
    participant SDK as SDK
    participant POS as POS Acquiring Service
    participant S as Scheme
    participant I as Issuer

    M->>AS: Merchant selects SoftPOS option
    AS->>AS: Validate Merchant & Send Token
    AS-->>M: Send Initialization Token (GetToken, GetDeviceInfo)
    M->>M: Token used to initialize SDK
    M->>SDK: Initialize SDK with Token
    SDK->>SDK: Initiate SoftPOS transaction
    SDK->>POS: ISO.8583 request
    POS->>POS: Generate RRN & STAN, Validate Merchant/Transaction, Echo message every 30s
    POS->>S: ISO.8583 request
    S->>S: Validate Card, PIN, Balance
    S->>I: ISO.8583 request
    I-->>S: Card Validation Response (ISO8583 message)
    S-->>POS: Success Response
    POS->>POS: Map Response Code 0200 (Sale)
    POS-->>SDK: Success Response
    SDK->>SDK: Initiate Transaction
    SDK->>SDK: Transaction Successful
    SDK->>SDK: If Timeout Occurs, Trigger Reversal Process
    SDK->>POS: Send Reversal Request if Timeout
    POS-->>SDK: Reversal Response
    SDK-->>M: Transaction Completed / Failed
```

See also: [mPOS Payment](./mpos), [Card Acquiring Introduction](../Intro).
