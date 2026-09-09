# Aggregator Management

Allows administrators to add or modify aggregators. By default the system provisions one aggregator; additional aggregators are onboarded as needed. Aggregators are selected during merchant onboarding.

## Add Aggregator — Functional Flow

| Actors | Process Description |
|---|---|
| AdminMaker / UserMaker | Navigates to Aggregator Management and clicks Add Aggregator. Enters: Aggregator Name, Contact Person, Email, Phone, Business Address, MDR linkage, settlement parameters. Reviews and submits for Checker approval. |
| Checker — Approval | Reviews aggregator profile and MDR/settlement configuration. Approves — aggregator becomes Active and selectable during merchant onboarding. |
| Checker — Rejection | Logs into back-office portal; navigates to pending approval queue. Selects the application and reviews all submitted details. Rejects with mandatory rejection remarks. Request returned to Maker for correction and re-submission. |

See also: [Parent / Chain Merchant Onboarding](../Onboarding/Parent-Chain-Merchant-Onboarding) — Aggregator selection is Step 1 of merchant onboarding.
