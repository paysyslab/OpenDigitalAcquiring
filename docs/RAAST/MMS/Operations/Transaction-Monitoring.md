# Transaction Monitoring

The Transaction Monitoring screen provides real-time and historical views of P2M transactions. Operators can monitor transaction status and drill down into individual transaction details.

| Requester | Action(s) / Process Description |
|---|---|
| Backoffice User | Logs in. Navigates to Transaction Monitoring. Applies filters: Date Range, Merchant ID, Aggregator, Transaction Type, Transaction Status. |
| Backoffice Services | Queries transaction database with applied filters. Returns matching records. |
| Backoffice Portal | Displays transaction list with key fields. |

## Fields Available in Transaction Monitoring

| Field | Description |
|---|---|
| Transaction Date & Time | Date and time of transaction initiation. |
| Transaction Type | SQRC / DQRC / RTP Now / RTP Later |
| Transaction Status | Authorization Status + Payment Status (Settlement Status) |
| From Account | Customer payer account number |
| From Account Title | Customer payer name |
| Merchant Account | Merchant receiving account |
| Merchant Account Title | Merchant name |
| Merchant DBA | Merchant display/trade name |
| Merchant Category (MCC) | Merchant Category Code |
| Channel | Mobile App / Merchant Portal / Aggregator |
| RTP ID | Unique transaction identifier |
| Amount | Transaction amount |

See also: [Transaction Status Model](../../Transactions/Transaction-Status-Model).
