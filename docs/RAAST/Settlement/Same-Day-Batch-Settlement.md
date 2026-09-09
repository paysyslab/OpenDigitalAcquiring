# Same-Day Batch Settlement

Adds a Non-Instant settlement option that groups a merchant's transactions for the day and settles them as a single batch at a configurable cut-off time, as an alternative to Instant settlement.

## Scope

- Add UI fields for cut-off time in the merchant onboarding form and in settlement settings.
- Implement a batch job that aggregates all non-settled transactions for the merchant up to the configured cut-off time and processes them via RAAST OpenConnect (OC) and CBS (Credit Inquiry and `Pacs.008`).
- Generate a batch report (transaction IDs, amounts, settlement statuses, timestamps) and expose it on both the Merchant Portal and Bank/MMS Backoffice.

## Key Business Rules

- Transactions timestamped after the cut-off roll into the next day's batch.
- Settlement type changes made mid-day honour existing transactions: those already processed remain Instant, and the new batch logic applies only from the point of the change onward.
- Settlement failures are parked in the Suspense/Retry (SAF) queue and follow the existing P2M retry logic; final failures are marked Rejected in the batch report.

## Testing

- Validate cut-off time entry on the onboarding and settings forms, including rejection of invalid values.
- Validate batch creation timing by simulating transactions before and after the cut-off and confirming correct batch inclusion.
- Validate processing through RAAST OC and CBS, including status updates on success.
- Validate reporting accuracy — batch totals, statuses and timestamps against underlying transaction data.
- Validate retry handling by forcing a settlement failure (e.g. simulated CBS downtime) and confirming SAF queuing, retry, and final status.

## Definition of Done

- Cut-off time UI fields are live on onboarding and settings screens.
- The Same-Day batch job is functional and tested end to end.
- Batch reports are accessible on the Merchant Portal and Backoffice.
- The feature complies with the settlement business rules above.
