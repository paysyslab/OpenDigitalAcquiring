# T+N Deferred Settlement

Adds a Non-Instant settlement option that defers a merchant's transactions to a batch settled **N** days after the transaction date, as an alternative to Instant or Same-Day Batch settlement.

## Scope

- Extend the onboarding and settings forms to capture the deferred days value (N).
- Implement a scheduled job that runs daily to identify transactions ready for settlement, where the current date equals transaction date + N.
- Process identified transactions via RAAST OC and CBS, and generate a T+N batch report.

## Key Business Rules

- Deferred days (N) must fall within a bank-approved range (e.g. 1–7 days).
- Changes to N apply only to future transactions; each transaction's settlement date is fixed at transaction date + N at the time it is processed.
- SAF and retry handling mirror the [Same-Day Batch Settlement](./Same-Day-Batch-Settlement) logic — failed or timed-out settlements are parked in SAF, retried per existing P2M rules, and marked Rejected on final failure.

## Testing

- Validate N entry and the computed settlement date (transaction date + N).
- Simulate multi-day transactions and verify the scheduled job picks up only transactions whose settlement date equals the current date.
- Check reporting accuracy for T+N batches.
- Verify manual payout file generation for the fallback case where CBS integration is absent.

## Definition of Done

- UI changes for capturing N are complete on onboarding and settings screens.
- The T+N scheduling logic and batch processing are functional and tested.
- T+N batch reports are accessible on the Merchant Portal and Backoffice.
- Fallback manual payout file generation is implemented for non-integrated CBS scenarios.
