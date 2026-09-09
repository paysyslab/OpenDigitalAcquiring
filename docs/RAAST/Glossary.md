# Glossary & Definitions

This section defines key terms, acronyms, and concepts used throughout the RAAST P2M Acquiring documentation.

## Backoffice Roles

The Backoffice Portal supports a dual-control Maker-Checker-Banker workflow:

| Role | Responsibilities |
|---|---|
| Maker | Initiates all requests — any addition or modification to merchant data must be submitted for review. |
| Checker | Reviews and either approves (forwarded to Banker) or rejects (returned to Maker with reason) all changes. |
| Banker | Final approver for specific actions such as NTB merchant account creation. |

## Merchant Hierarchy Model

The Backoffice Portal supports a hierarchical merchant structure:

**Aggregator → Merchant (Parent / Child) → Terminal (Till)**

| Level | Description |
|---|---|
| Aggregator | Can have one or more Merchants mapped under it. |
| Parent Merchant | Receives settlements on behalf of linked Child Merchants. Supports franchise/multi-branch models. |
| Child Merchant | Operates independently for payment acceptance but settles through Parent Merchant. |
| Terminal (Till) | Lowest level. Represents the point of transaction. Each Till has a unique Till Code. |

Supported Merchant–Till mapping scenarios: One Merchant → One Till; One Merchant → Multiple Tills; Multiple Merchants → Multiple Tills (under an Aggregator).

See also: [Merchant Hierarchy](./MMS/Merchant-Hierarchy/Introduction), [Parent Merchant](./MMS/Merchant-Hierarchy/Parent-Merchant), [Child Merchant](./MMS/Merchant-Hierarchy/child-merchant).

## Terms

- **Maker–Checker Flow** — A dual-control process where one user (Maker) initiates a change, and another user (Checker) independently reviews and approves or rejects it. Reduces fraud and ensures compliance.
- **Request Locking** — A record is locked once a Maker submits a request, preventing parallel modifications until the Checker acts. Ensures data consistency.
- **Correlation ID** — A unique identifier propagated across all systems for a single request, enabling end-to-end traceability and audit log correlation.
- **Admin Maker / Backoffice User** — Authorized to initiate and prepare changes but cannot make them effective independently. Creates users/roles, configures merchant types, submits for Checker approval.
- **Admin Checker** — Authorized to review, approve, or reject changes submitted by the Admin Maker. Validates correctness and triggers final activation.
- **Positive Flow** — A sequence representing the ideal, fully successful execution of a process.
- **Negative Flow** — A sequence representing controlled failure scenarios to ensure predictable error handling.
- **MMP (Merchant Management Platform)** — The central system maintaining merchant identity, KYC, limits, pricing, hierarchy, and lifecycle data.
- **Open Connect (RAAST OC)** — The integration and orchestration layer routing, validating, and securing communication between MMP, CBS, RAAST SBP, and external services.
- **Acquiring Bank / MSP Bank** — The financial institution acting as the merchant's acquiring bank. Merchant account always resides at the Acquiring Bank.
- **Issuer Bank** — The financial institution from which the customer initiates the payment. In Off-Us transactions, routes through RAAST SBP.
- **On-Us Transaction** — Customer and Merchant hold accounts at the same Acquiring Bank. Does not route through RAAST SBP.
- **Off-Us Transaction** — Customer holds an account at a different bank. Routes through RAAST SBP using ISO 20022 messages.
- **ETB (Existing-to-Bank)** — Merchant already holds an account with the Acquiring Bank at time of onboarding.
- **NTB (New-to-Bank)** — Merchant does not hold an account with the Acquiring Bank. Account is created during onboarding via PMD and NADRA BVS verification.
- **SQRC (Static QR Code)** — Fixed, multi-use QR code assigned to a merchant Till. Does not expire. Amount entered by customer.
- **DQRC (Dynamic QR Code)** — One-time QR per transaction. Contains unique RTP ID registered at RAAST SBP. Max expiry: 3 hours. Pre-defined amount.
- **RTP Now** — Merchant-initiated Request to Pay expecting immediate customer payment.
- **RTP Later** — Merchant-initiated Request to Pay with deferred payment, maximum 40-day expiry. For bulk billing (schools, utilities).
- **RTP ID** — Unique identifier for each RTP/DQRC transaction, registered at RAAST SBP via `pain.13`.
- **pain.13** — ISO 20022 message to register an RTP or DQRC at RAAST SBP.
- **pacs.008** — ISO 20022 message used by the Issuer Bank to initiate a credit transfer to RAAST SBP.
- **pacs.002 / ACSP** — ISO 20022 acknowledgement message from RAAST SBP confirming processing status.
- **pacs.14 / ACSP get-mx** — ISO 20022 message fetched by RAAST OC to receive notification of an incoming Off-Us payment.
- **CAS (Central Addressing Scheme)** — SBP's central registry where merchant profiles, aliases, accounts, and till codes are registered.
- **Aggregator** — Groups multiple merchants under one umbrella. Sits at the top of merchant hierarchy.
- **Parent Merchant** — Master merchant receiving settlement on behalf of Child Merchants.
- **Child Merchant** — Accepts payments independently but settles through Parent Merchant.
- **Terminal / Till** — Lowest level in the hierarchy. Unique Till Code used in QR payment processing.
- **MCC (Merchant Category Code)** — 4-digit code classifying merchant business type.
- **MDR (Merchant Discount Rate)** — Configurable fee: Percentage-Based, Fixed, or Slab-Based.
- **DBA Name (Doing Business As)** — Trade/display name of the merchant on QR codes and payment screens.
- **CBS (Core Banking System)** — Bank's core financial system for account management, fund transfers, and balance management.
- **Title Fetch (TF)** — Pre-payment/pre-registration step to retrieve account holder name via IBAN or Alias.
- **BIC (Bank Identifier Code)** — Identifies the bank. Used by RAAST OC to determine On-Us vs Off-Us.
- **SAF (Store and Forward)** — Stores transaction temporarily and forwards when connectivity restores.
- **PMD (Pakistan Mobile Database)** — Validates mobile number against CNIC in national database.
- **NADRA BVS** — National Database biometric/identity verification used during NTB onboarding.
- **Merchant Portal** — Web-based self-service interface for QR generation, transaction inquiry, and profile management.
- **Backoffice Portal** — Internal portal for Maker/Checker/Banker to manage merchant onboarding, updates, and monitoring.
- **Merchant App** — Mobile application for merchant self-onboarding, account linking, and QR-based payment acceptance.
- **Handler** — A trusted individual (cashier, manager) assigned by merchant with configurable portal access permissions.
- **NotifySvc** — Notification service for SMS/email alerts on transaction events. Non-blocking.
