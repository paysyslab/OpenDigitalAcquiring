# Parent / Chain Merchant Onboarding

A Parent Merchant is a master entity receiving settlements on behalf of linked child merchants (franchise, retail chain, aggregator-linked model). Onboarding is a 6-step process.

| Term / Field | Description |
|---|---|
| Step 1 — Identity and Type | Select Aggregator (dropdown), Merchant Type (filtered to Parent-eligible types), Identity Document Type and Number (validated for uniqueness), optional NTN. |
| Step 2 — Business Details | Legal Business Name (3-100 chars), Industry Type, MCC (4-digit), Full Business Address, Contact Person (Name, Email, Phone), Authorized Signatory details. |
| Step 3 — Settlement Account | Settlement Type (Individual Pay or Central Pay), Bank Account Details (account holder, number, bank, branch), Settlement Frequency (Daily/Weekly/Monthly), Settlement Threshold. |
| Step 4 — Payment Methods and MDR | On-Us and Off-Us acceptance (both enabled by default), MDR Application (auto-applied per merchant type + MCC; manual override allowed by Admin), Fee Responsibility (merchant or customer). |
| Step 5 — Limits and Risk | Daily Transaction Limit, Monthly Transaction Limit, Daily Transaction Count (all auto-assigned per merchant type; modifiable by Admin), Risk Profile (auto-assigned). |
| Step 6 — Documents and Compliance | Dynamic document requirements per Merchant Type + KYC Group. Upload: PDF, JPG, PNG, max 10MB. Automated AML, OFAC, PEP, Blacklist screening on submission. |

## Sequence Diagram — Parent Merchant Onboarding

![Parent Merchant Onboarding sequence diagram](/img/diagrams/parent-chain-merchant-onboarding.svg)

## Positive Flow — Approval

- Merchant status transitions `PENDING_APPROVAL` to `ACTIVE`. Default till auto-created.
- 8-digit Reference Number and 7-digit Short Code assigned from the Identifier Pool. If pool exhausted: activation **BLOCKED**; automated alert raised to administrator.
- Aliases created: SHID (36-char unique key), MBNO (market-format MSISDN), MCOD (unique 2-10 digit code).
- Merchant wallet activated in Core Wallet. Credentials and till code dispatched via NotifySvc (SMS + email).

## Negative Flows

- **N1** — MSISDN already registered as merchant: Eligibility check fails; onboarding blocked with `MSISDN_ALREADY_MERCHANT`.
- **N2** — Compliance screening FAIL: Merchant flagged for compliance team review or outright rejection by Checker.
- **N3** — Identifier Pool exhausted: Approval triggers `BLOCKED` state; system alert raised; manual pool replenishment required.
- **N4** — Checker rejection: Application returned to Maker with rejection remarks; merchant record unlocked.
- **N5** — Missing mandatory documents: System prevents submission until all required documents are uploaded.
