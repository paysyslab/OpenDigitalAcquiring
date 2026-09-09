# Merchant Profile Management

| Term / Field | Description |
|---|---|
| C0 - Individual (Basic) | Single individual under personal identity. Lowest KYC and transaction limits. Upgradeable to C1 or C2. |
| C1 - Limited KYC | Informal/semi-formal micro-merchants. Intermediate KYC and limits. Upgradeable to C2. |
| C2 - Full KYC | Formally registered SMEs and corporates. Full KYC and documents. Highest limits. C0 to C2 direct upgrade supported. |
| Parent / Chain Merchant | Master entity receiving settlements on behalf of child merchants (franchise, retail chain, aggregator). |
| Child Merchant | Operates independently for acceptance; settles through a parent merchant. |
| KYC Field Types | Numeric (0-9 only), AlphaNumeric (no special chars), AlphaNumericString (with special chars), Email (RFC 5322), Phone (market format), Date (DD/MM/YYYY), Boolean (True/False). |
| KYC Group | Named collection of KYC fields required together for a specific merchant type and risk tier. Automatically enforced during onboarding. |
| MCC (Merchant Category Code) | 4-digit code driving MDR calculation, reporting, and payment scheme compliance. |

See also: [Parent / Chain Merchant Onboarding](./Onboarding/Parent-Chain-Merchant-Onboarding), [Individual / Sole Proprietor Onboarding](./Onboarding/Individual-Sole-Proprietor-Onboarding), [Modify Merchant / Upgrade / Bulk Operations](./Onboarding/Modify-Upgrade-Bulk-Operations).
