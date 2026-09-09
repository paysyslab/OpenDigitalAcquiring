# Modify Merchant / Upgrade / Change Status / Bulk Operations

| Term / Field | Description |
|---|---|
| Modify Merchant | Standard Maker-Checker workflow. Request Locking activated on submission. Core identity fields locked post-approval. MDR recalculation applied immediately on approval. Full old vs. new audit log captured. |
| Account Upgrade (C0 to C1 to C2) | Tier transitions supported: C0 to C1, C1 to C2, C0 to C2 (direct). Triggers re-evaluation of KYC, limits, MDR, and channel access. Additional KYC/documents for higher tier required before approval. API: `POST /qsc_update/{identifier}`. |
| Change Account Status | Activate, Suspend, or Close. `PATCH /accounts/v2/upgrade-kyc/{MSISDN}`. Success: 204 No Content. Failure: 400 Bad Request. All status changes logged with reason. Suspended merchants cannot process transactions. |
| Bulk Merchant Onboarding | Excel/CSV template upload — one row per merchant. Row-level validation: format, mandatory fields, duplicate detection. Validation report: total rows, valid rows, invalid rows with specific error reasons. Checker approves batch; default tills and aliases auto-created per merchant. |
| Bulk QR Generation | EMVCo TLV-compliant QR codes generated in bulk. Mode: With Branding or Without Branding. Output: PDF (one QR per page) or PNG files. QR encodes SHID, MCOD, or MBNO alias. |
