# Transaction History and Balance Inquiry

| Term / Field | Description |
|---|---|
| Transaction History — Phase 1 | Merchant accesses a searchable log of historical transactions. Filters: date range, type, channel, status (Pending/Settled/Failed/Reversed), amount range. Pagination: configurable records per page. Export: CSV / Excel. Export action logged in audit trail. |
| Transaction History — Phase 2 (RTT) | Real-Time Transaction (RTT) functionality broadcasts transaction information to MMP via a callback mechanism. MMP receives transaction events asynchronously and updates merchant history without requiring a query. Provides near-instant transaction visibility in the portal. |
| Balance Inquiry | Merchant/agent queries current account/wallet balance. Response: current balance, available balance (net of holds), last transaction date/time. |
| Account Status Inquiry | Merchant/agent queries current account status (Active, Suspended, Locked, Closed). Response includes status and, where applicable, the reason and expected resolution timeline. |
| Wallet-to-Wallet Transfer | Transfer of funds between two wallet accounts within the platform. Immediate credit; no inter-bank routing required. |
| Wallet-to-Bank (Scheduled Payments) | Transfer from merchant/agent wallet to an external bank account. Support for scheduling future-dated one-time or recurring payments (daily/weekly/monthly). |
