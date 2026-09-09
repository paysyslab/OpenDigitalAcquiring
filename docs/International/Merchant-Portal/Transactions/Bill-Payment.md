# Bill Payment

## Sequence Diagram — Bill Payment

![Bill Payment sequence diagram](/img/diagrams/bill-payment.svg)

## Positive Flow

- Merchant wallet debited; payment routed to the biller system.
- MMP records the transaction; merchant receives a receipt notification.
- 39 billers available across 7 categories: Electricity/Water (8), Fees/Taxes (6), Insurance (6), Telecoms (6), Other (9), Schools/Universities (2), TV Channels (2).

## Negative Flows

- **N1** — Bill Inquiry FAIL (invalid reference): WSO2 returns `INVALID_REFERENCE`; merchant corrects and re-tries.
- **N2** — Sender validation FAIL (balance / limit / PIN): Error shown; no payment submitted.
- **N3** — Bill Payment execution FAIL: Core Wallet failure; transaction FAILED; merchant notified; no debit applied.
