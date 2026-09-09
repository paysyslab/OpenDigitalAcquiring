# APIs Exposed by Bank

The following APIs must be exposed by the Acquiring Bank and are called by RAAST OC as callback APIs:

| Method Name | Purpose |
|---|---|
| Fund Transfer | For debiting customer account and crediting Merchant Payable GL Account (On-Us transactions). |
| Credit Posting (Advice) | To credit funds into merchant account for customer-initiated payments. MMS calculates net amount and credits merchant. |
| Notify Merchant & Payment Notification | Called by OC on receiving `pain.014`/ACSP to notify merchant that RTP is accepted. Also called on `pacs.008` for merchant-initiated payments — MMS calculates net and credits merchant. |
| Customer Account Information | API to get list of all customer accounts — used during Merchant App ETB registration. |
| PMD API | Pakistan Mobile Database API to verify customer mobile number against CNIC. |
| Customer Account Opening API | Allows NTB customers to open an account with the Bank during Merchant App onboarding. |
| NADRA BVS API | NADRA Biometric Verification System API for identity verification. |
| Merchant Account Verification | Verify if a merchant account exists in CBS using CNIC — used during ETB onboarding in Merchant App. |
