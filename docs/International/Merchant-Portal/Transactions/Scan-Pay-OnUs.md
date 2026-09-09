# Scan and Pay — On-Us QR Payment

Customer scans merchant QR code to pay within the same acquirer/bank. QR encodes merchant alias (SHID or MCOD), merchant name, and optional fixed amount.

## Sequence Diagram — Scan & Pay (On-Us QR)

![Scan and Pay On-Us sequence diagram](/img/diagrams/scan-pay-onus.svg)

## Positive Flow (On-Us)

- Customer wallet debited; merchant wallet credited (pending settlement at end-of-day).
- Transaction recorded in MMP with Primary TxnID; MDR applied per MDR Tag.
- Notifications dispatched to: merchant, all registered notifiers, customer.

## Negative Flows

- **N1** — Customer insufficient funds: Core Wallet returns `INSUFFICIENT_BALANCE`; transaction marked FAILED.
- **N2** — Merchant daily limit exceeded: MMP business rules engine blocks request; returns `DAILY_LIMIT_EXCEEDED`.
- **N3** — Merchant INACTIVE/SUSPENDED: MMP validation fails; returns `MERCHANT_NOT_ACTIVE`.
- **N4** — Network timeout: Retry logic up to 3 attempts; if persistent, transaction marked PENDING for manual reconciliation.
- **N5** — Invalid/expired QR: MMP alias validation fails; returns `ALIAS_INVALID` or `ALIAS_NOT_FOUND`.
