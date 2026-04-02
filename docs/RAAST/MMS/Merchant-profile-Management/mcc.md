# Merchant KYC (Know Your Customer)

## Definition

**Merchant KYC** (Know Your Customer) is a crucial part of the merchant onboarding process, ensuring that the merchant is compliant with regulatory standards and that their identity and financial details are verified. This process helps prevent fraudulent activities and ensures that all merchants meet the necessary criteria before being allowed to process transactions.

## KYC Verification Process

The **Merchant KYC process** involves the collection and verification of various merchant details, which are used to validate the business’s legitimacy. This includes personal identification, business registration, and financial information, all of which are cross-checked for accuracy and compliance.

### Key KYC Verification Steps:

1. **Identity Verification**:
   - **Action**: The merchant provides personal details, which are verified using government-issued IDs or official documents.
   - **Details**: Name, date of birth, government-issued identification number (e.g., passport, national ID).

2. **Business Verification**:
   - **Action**: Verification of the merchant’s business registration and operational legitimacy.
   - **Details**: Business registration number, business name, legal documents (e.g., certificate of incorporation, business license).

3. **Address Verification**:
   - **Action**: The merchant must provide proof of business address.
   - **Details**: Utility bills, lease agreements, or other official documents to confirm the business address.

4. **Financial Information**:
   - **Action**: Validation of the merchant’s financial details, ensuring that their bank account information is correct and operational.
   - **Details**: IBAN, account title, payee name, bank statements.

### System Support for KYC

- Our system supports **automated verification** of KYC data, ensuring that all required documents are submitted in the correct format and meet the regulatory standards.
- **Real-Time KYC Processing**: Documents are validated in real-time, and any discrepancies or missing data trigger immediate alerts to the merchant or admin for resolution.
- **Secure Storage**: All KYC documents are stored securely with encryption, ensuring that sensitive information remains confidential and compliant with data protection regulations.

---

# Merchant Type Mapping

## Definition

**Merchant Type Mapping** involves categorizing merchants into specific types based on their business model, industry, and transaction needs. Our system supports **flexible Merchant Type Mapping**, allowing businesses to configure merchant categories according to their operational structure, risk levels, and industry standards.

## How Merchant Types are Configured in the System

Our system supports **configurable Merchant Types**, ensuring flexibility in the way merchants are categorized. The merchant types define which features and compliance checks are required based on the merchant’s business needs and regulatory requirements.

### Configurable Merchant Types

| **Merchant Type**       | **Description**                                         | **Required KYC Level**                             | **Transaction Limits**                            |
|-------------------------|---------------------------------------------------------|---------------------------------------------------|--------------------------------------------------|
| **Individual**           | Sole proprietors or small business owners.              | Basic KYC with personal identification.           | Lower transaction limits, subject to approval.   |
| **Light KYC**            | Semi-formal businesses with moderate checks.            | Simplified KYC with geo-tagging.                  | Moderate transaction limits.                    |
| **Company**              | Registered business entities with full legal structure. | Full KYC with business registration documents.    | Higher transaction limits, complex limits.       |
| **Government-Verified**  | Businesses that require government-level verification. | Full KYC and government authorization.            | High transaction limits with additional security checks. |
| **Corporate**            | Large-scale corporations with complex operations.      | Enhanced KYC with tax registration and audits.    | Very high transaction limits, customized processing rules. |

### System Support for Merchant Type Mapping

1. **Customizable Merchant Types**:
   - The system allows the creation of custom merchant types, which can be tailored to fit the specific needs of your business. For example, businesses may define a **"Non-profit"** merchant type or a **"Franchise"** merchant type, each with its own rules and transaction limits.

2. **Configurable KYC Levels**:
   - Based on the merchant type, the system determines the level of KYC verification required. **Basic KYC** might be sufficient for **individuals**, while **full KYC** and **government verification** might be required for **corporate** or **government-verified** merchants.

3. **Transaction Limits Based on Merchant Type**:
   - **Lower-risk merchant types** (e.g., **individuals**) are assigned lower transaction limits, while **high-risk** or **large-scale businesses** (e.g., **corporates**) are assigned higher transaction limits and more stringent processing rules.

4. **MCC (Merchant Category Code) Mapping**:
   - The system automatically associates each merchant type with the appropriate **MCC**, which is used for categorizing merchant businesses into specific sectors. This helps streamline financial processing, compliance checks, and transaction routing.

---

# System Support for MCC (Merchant Category Code)

Our system supports the **Merchant Category Code (MCC)** mapping process, which ensures that each merchant is categorized correctly for payment processing. The MCC is a 4-digit code that identifies the type of goods or services provided by a merchant.

- **Automated MCC Assignment**: Based on the merchant type, the system automatically assigns an appropriate **MCC** to each merchant.
- **Custom MCC Mapping**: Merchants can be manually mapped to specific MCCs if their business falls into a unique or undefined category.
- **Global Compatibility**: The MCC system is compatible with international payment processors and regulatory bodies, ensuring smooth cross-border transactions.

---

# MCC Examples

| **Merchant Type**       | **MCC** | **Description**                                         |
|-------------------------|---------|---------------------------------------------------------|
| **Retail & Daily Essentials** | 5411    | Small neighborhood or grocery stores selling daily goods. |
| **Food & Beverage**     | 5812    | Restaurants and foodservice businesses.                 |
| **Telecom Services**    | 4814    | Mobile phone and data service providers.                |
| **Health & Pharma**     | 5912    | Pharmacies and health-related products.                 |
| **E-Commerce**          | 5999    | Online merchants selling various goods or services.     |

