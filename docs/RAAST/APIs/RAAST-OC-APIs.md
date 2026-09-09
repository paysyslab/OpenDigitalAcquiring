# APIs Exposed by RAAST OC

The following APIs are exposed by RAAST Open Connect and are called by the Acquiring Bank systems:

| Method Name | Purpose |
|---|---|
| Register Merchant | Register merchant information using identification number on SBP's CAS. |
| Register Merchant's Alias | Register merchant alias information (Till Code) on SBP's CAS. |
| Register Merchant's Account | Register merchant account information on SBP's CAS. |
| Link Account to Alias | Link merchant account with its alias on SBP's CAS. |
| De-Link Account to Alias | Delink merchant account from its alias on SBP's CAS. |
| One-Step Delete | Remove merchant's complete profile (identification, alias, and account) from SBP's CAS. |
| Update Alias Status | Update alias status: Active→Suspend, Active→Delete, Suspend→Active. |
| Get Default Account By Alias | Resolve customer alias to default IBAN from SBP CAS. Returns masked IBAN and unique RTP ID in response. |
| Generate SQRC | Generate a Static QR code string (EMVCo standard) for a given Till Code. |
| Generate DQRC | Generate a Dynamic QR code for a specific transaction amount with unique RTP ID. |
| Generate Bulk QR | Generate QR code strings in bulk from an uploaded file. |
| Title Fetch (IBAN) | Fetch account holder name for a given IBAN and BIC via RAAST CAS. |
| RTP Request (`pain.13`) | Send Request to Pay message to RAAST SBP for RTP Now / RTP Later. |
