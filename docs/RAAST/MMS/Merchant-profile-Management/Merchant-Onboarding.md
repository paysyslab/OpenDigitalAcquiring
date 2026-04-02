# Merchant Onboarding Process

The Merchant Onboarding Process is essential for integrating new merchants into the system. This process follows a 4-level hierarchical approval structure designed to ensure that the merchant meets all required standards for regulatory compliance, data accuracy, and risk mitigation. The process is highly **configurable**, allowing flexibility for various business environments.

## Approval Workflow

Merchant onboarding follows a **4-level hierarchical approval structure**, ensuring the process is thorough and accurate. The stages include:

1. **Maker**
2. **Checker**
3. **Banker**
4. **Approver**

Each stage plays a crucial role in ensuring the merchant’s information is validated and verified before final approval.

### Approval Flow Table:

| **Stage**      | **Approves → Next Stage**   | **Rejects → Back To**               |
|----------------|-----------------------------|-------------------------------------|
| **Maker**      | Sends to Checker            | N/A                                 |
| **Checker**    | Sends to Banker             | Maker Returned List                |
| **Banker**     | Sends to Approver           | Checker Returned List              |
| **Approver**   | Fully Onboards Merchant     | Banker Returned List               |


### Why 4-Level Process is Required:

- **Risk Mitigation**: Multiple approval points reduce fraud and errors, ensuring all data is verified.
- **Regulatory Compliance**: Ensures compliance with **KYC** regulations.
- **Data Accuracy**: Guarantees the accuracy and verification of merchant data.
- **Accountability and Transparency**: Creates a clear audit trail, ensuring transparency throughout the process.


## Configurable Merchant Onboarding Steps

### Customizable Approval Flow
The approval flow can be tailored to include only the necessary roles. For example, a simpler approval flow may only involve the **Maker** and **Checker** roles.

### Flexible Role Configuration
The system allows configuration of four approval levels for a detailed process or fewer levels for specific merchant categories. For example, **Banker** and **Approver** roles can be bypassed for specific types of merchants.


## Onboarding Stages

### 1. Maker Stage

**Enter Merchant Information**
- **Action**: The Maker enters the required merchant details, including personal and business information.
- **Details**:
  - Merchant Name
  - Doing Business As (DBA) Name
  - CNIC/NTN
  - Nature of Business
  - Contact Details

**Enter Bank Information**
- **Action**: The Maker provides the merchant’s banking details.
- **Details**:
  - IBAN
  - Branch Code
  - Payee Name
  - Account Title

**Add Additional Merchant Details**
- **Action**: The Maker adds more information such as:
  - Expected Monthly Revenue
  - Settlement Type (Instant/Non-Instant)
  - MDR (Merchant Discount Rate) Type and Value
  - Business Address
  - Logo

Once the information is completed, it’s submitted for review by the **Checker**.


### 2. Checker Stage

**Review Merchant Information**
- **Action**: The Checker reviews the details entered by the Maker.
- **Outcome**:
  - **If Approved**: The merchant moves to the **Banker Stage**.
  - **If Rejected**: The merchant application is returned to the **Maker’s Returned Merchants List** for corrections.


### 3. Banker Stage

**Review Merchant Information**
- **Action**: The Banker reviews the application details.

**Approval Decision**
- **Action**: The Banker approves or rejects the application.
- **Outcome**:
  - **If Approved**: The merchant moves to the **Approver Stage**.
  - **If Rejected**: The merchant is sent back to the **Checker Returned Merchants List**.


### 4. Approver Stage

**Approval Decision**
- **Action**: The Approver makes the final decision.
- **Outcome**:
  - **If Approved**: The merchant is fully onboarded and activated in the system.
  - **If Rejected**: The merchant is returned to the **Banker** for further action.


## Title Fetch and CAS Registration

#### Title Fetch

- **Purpose**: Verifies the merchant’s bank account details.
- **Process**: 
  - When a merchant is being onboarded, a **Title Fetch** is performed to validate the **bank account** information (IBAN/account number).
- **Outcome**:
  - **Success**: Confirms that the merchant’s account is valid.
  - **Failure**: If the account details are incorrect or unregistered, the onboarding process halts.

#### CAS Registration

- **Purpose**: Submits merchant details to a **Regulated Financial Entity** for verification and storage.
- **Process**:
  - After successful merchant onboarding, the CAS call submits key merchant details (e.g., **DBA Name**, **Merchant ID (MID)**, **IBAN**, and other key identifiers) to the central database.
  - This process helps validate and store the merchant’s information in a central system, ensuring that the merchant’s financial institution is correctly linked to their business identity.
- **Outcome**:
  - **Success**: The merchant’s details are securely stored in the system.
  - **Failure**: If the merchant’s details do not match the central database or submission fails, the onboarding process is halted for review.


### Summary of Approval Movement

| **Stage**      | **Approves → Next Stage**   | **Rejects → Back To**               |
|----------------|-----------------------------|-------------------------------------|
| **Maker**      | Sends to Checker            | N/A                                 |
| **Checker**    | Sends to Banker             | Maker Returned List                |
| **Banker**     | Sends to Approver           | Checker Returned List              |
| **Approver**   | Fully Onboards Merchant     | Banker Returned List               |

