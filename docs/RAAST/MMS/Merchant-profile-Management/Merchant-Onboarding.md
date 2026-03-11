# Merchant Onboarding

## Approval Workflow
Merchant onboarding follows a standardized 4-level hierarchical approval structure, :
1.	Maker
2.	Checker
3.	Banker
4.	Approver
A merchant must pass all four stages to be fully onboarded.


## Why 4-Level Process is Required:

**Risk Mitigation:** With multiple checkpoints throughout the onboarding process, the likelihood of errors, fraud, or non-compliance is reduced. Each level provides an additional layer of oversight, ensuring that merchants meet all required standards before being approved.

**Regulatory Compliance:** Financial institutions and payment processors are required to adhere to stringent regulatory KYC. A multi-step approval process ensures that every necessary check is in place before a merchant can begin processing payments.

**Data Accuracy:** With each level of approval, the process ensures that the merchant data is accurate, verified, and aligned with the requirements of the acquiring bank or financial institution. This is especially important for ensuring smooth and secure transactions.

**Accountability and Transparency:** Having multiple levels of review means that responsibility for each step is clearly delineated. This reduces the chances of oversight and creates a clear trail of accountability, which is vital for audits and compliance reviews.

## Configurable Merchant Onboarding Steps:

**Customizable Approval Flow:**

The process can be tailored to include only the specific roles that are necessary for each scenario. For instance, if a simpler approval flow is acceptable, the system can be configured to restrict the approval process to just the Maker and Checker roles.

**Flexible Role Configuration:**

The system can be configured to either include all four approval levels (Maker, Checker, Banker, and Approver) for a more rigorous process or limit the steps to fewer roles. For example, an organization may choose to bypass the Banker and Approver steps for specific merchant categories, simplifying the process while maintaining compliance.

### 1. Maker Stage

The Maker will enter the merchant's information, including their personal and business details, which are gathered from them.

**Enter Merchant Information**  
  The Maker enters the required merchant information, including personal and business details such as:
  - Merchant Name
  - Doing Business As (DBA) Name
  - CNIC/NTN
  - Nature of Business
  - Contact Details, etc.


<div style={{ textAlign: 'center'}}>
  ![Merchant info](/img/Merchant-onboarding-1.png)
</div>


**Enter Bank Information**  
  The Maker provides the merchant’s banking details, including:
  - IBAN
  - Branch Code
  - Payee Name
  - Account Title


<div style={{ textAlign: 'center'}}>
  ![Merchant info](/img/Merchant-onboarding-2.png)
</div>


**Add Additional Merchant Details**  
  The Maker enters further details like:
  - Expected Monthly Revenue
  - Settlement Type (Instant/Non-Instant)
  - MDR (Merchant Discount Rate) Type and Value
  - Business Address
  - Logo


<div style={{ textAlign: 'center'}}>
  ![Merchant info](/img/Merchant-onboarding-3.png)
</div>


Once the merchant's information is complete, it is submitted and forwarded to the Checker Stage.


### 2. Checker Stage

**Review Merchant Information**  
  The Checker reviews the merchant details entered by the Maker. If the information is correct, the Checker proceeds to approval. If errors are found, the Checker may reject the application with comments.


<div style={{ textAlign: 'center'}}>
  ![Checker review](/img/Merchant-onboarding-checker-2.png)
</div>



<div style={{ textAlign: 'center'}}>
  ![Checker review](/img/Merchant-onboarding-checker-3.png)
</div>


**Approval Decision**  
  The Checker can either approve or reject the merchant application.
  - **If Approved**: The merchant moves to the Banker Stage.
  - **If Rejected**: The merchant is returned to the Maker’s Returned Merchants List for corrections.


<div style={{ textAlign: 'center'}}>
  ![Checker review](/img/Merchant-onboarding-checker-4.png)
</div>



<div style={{ textAlign: 'center'}}>
  ![Checker review](/img/Merchant-onboarding-checker-5.png)
</div>



<div style={{ textAlign: 'center'}}>
  ![Checker review](/img/Merchant-onboarding-checker-6.png)
</div>


### 3. Banker Stage

**Review Merchant Information**  
  The Banker reviews all the details provided in the application.

**Approval Decision**  
  The Banker can approve or reject the application.
  - **If Approved**: The merchant moves to the Approver Stage.
  - **If Rejected**: The merchant is sent back to the Checker Returned Merchants List.

### 4. Approver Stage

**Approval Decision**  
  The Approver can either approve or reject the application.
  - **If Approved**: The merchant is fully onboarded and activated in the system.
  - **If Rejected**: The merchant application is returned to the Banker Returned Merchants List for further action.


## Title Fetch

**Purpose:** The Title Fetch call is primarily used for verifying the merchant's bank account details with the State Bank of Pakistan (SBP) during onboarding.

**Process:**

When a merchant is being onboarded, the Title Fetch call is made to SBP to ensure that the bank account information provided by the merchant (such as IBAN, account number) is valid and registered with SBP.

This ensures that the merchant’s financial information is accurate, preventing fraudulent activities and ensuring that transactions are routed through the correct banking channels.

**Outcome:**

If the verification is successful, it confirms that the merchant's bank account is valid.

If there is an issue (e.g., incorrect bank details, unregistered account), the Title Fetch call will return an error or fail the verification process, preventing further progression of the onboarding.

## CAS Registration

Purpose: The CAS call is used to store and verify the merchant’s details in the SBP database. This is where crucial information such as the merchant's DBA (Doing Business As) name, Merchant ID (MID), IBAN, and other key identifiers are stored.

**Process:**

After successful merchant onboarding, the CAS call is made to submit the merchant's details to the SBP database.

This step ensures that the merchant’s details are securely stored in SBP's central repository, allowing for easier validation and auditing of transactions later.

CAS helps in associating the merchant’s identity with their financial institution in the SBP system, linking it with their merchant ID, bank details, and operational information (like DBA and IBAN).

**Outcome:**

Upon success, the merchant’s details are stored and registered in the SBP database, which enables smoother operation for financial transactions.

In case of failure (for example, if the merchant details do not match SBP’s database or if the submission fails), the onboarding process may be halted or flagged for review.

## Summary of Approval Movement

| Stage   | Approves → Next Stage | Rejects → Back To      |
|---------|-----------------------|------------------------|
| Maker   | Sends to Checker       | N/A                    |
| Checker | Sends to Banker        | Maker Returned List    |
| Banker  | Sends to Approver      | Checker Returned List  |
| Approver| Fully Onboards Merchant | Banker Returned List   |