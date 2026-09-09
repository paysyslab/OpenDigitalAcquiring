# Assumptions

The following assumptions and boundary conditions apply to the RAAST P2M Acquiring Functional Specification:

| # | Assumption |
|---|---|
| 1 | The API Gateway will only allow traffic from whitelisted IP addresses for each Client/Aggregator. |
| 2 | In case an Aggregator exhausts the Authentication API with consecutive failed attempts, the Aggregator will be blocked. The Acquiring Bank Ops team will handle the re-enablement process. |
| 3 | Merchant ID is unique and permanent — once assigned and registered on RAAST CAS, it cannot be changed or updated. |
| 4 | The Merchant's account always resides with the Acquiring Bank (MSP Bank). Merchant accounts at other banks are out of scope. |
| 5 | All financial transactions require successful Merchant Status check (Active/Approved) and Merchant Limit check before processing. |
| 6 | Dynamic QRC is a one-time payable QR code with a maximum expiry of 3 hours from generation. |
| 7 | RTP Later has a maximum expiry duration of 40 days from the date of RTP creation. |
| 8 | The Title Fetch step is mandatory during merchant profile creation and any update that changes IBAN or BIC. |
| 9 | Failure on any step in the CAS registration sequence (CreateMerchantProfile → ActivateCustomerProfile → RegisterMerchantAccount → CreateMerchantAlias → LinkAliasToAccount) will result in termination of that merchant's profile creation. |
| 10 | During Bulk Merchant Onboarding, failure for one merchant row does not affect processing of other rows. |
| 11 | Merchant Portal IDs are created automatically during Bulk Merchant Onboarding. |
| 12 | All Backoffice operations (Create, Update, Delete) must pass through Maker-Checker workflow. No unilateral changes are permitted. |
| 13 | All system actions must be recorded in the Audit Log with User ID, Timestamp, Action, Entity, Old Values, New Values, and Result. |
| 14 | Static QR can be scanned and paid by any Bank/EMI app that supports the RAAST QR standard (EMVCo). |
| 15 | SAF (Store and Forward) mechanism is used for On-Us transaction logging after successful fund transfer. No transaction is lost during temporary outages. |
| 16 | POS (SoftPOS/mPOS) acquiring flows are out of scope for this document and will be covered under a separate FSD. |
| 17 | Soundbox payment notification device integration is out of scope for this document. |
| 18 | The MDR (Merchant Discount Rate) model — Percentage, Fixed, or Slab-Based — is configurable per merchant and is applied at time of Credit Advice processing. |
| 19 | PMD and NADRA BVS verifications are mandatory for NTB merchant onboarding via Merchant App. |
| 20 | Notification delivery (SMS/Email) via NotifySvc is non-blocking — transaction processing continues regardless of notification delivery status. |
| 21 | Handler access to Merchant Portal is limited to permissions explicitly assigned by the merchant. Handlers cannot modify their own permissions. |
| 22 | Sequence diagrams referenced throughout this documentation are illustrative of the functional flows described in the corresponding FSD. |
