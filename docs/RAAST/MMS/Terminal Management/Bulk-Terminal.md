# Bulk Terminal Creation

Bulk Terminal Onboarding in a RAAST P2M Acquiring environment refers to the capability of onboarding multiple terminals onboarding in a single batch process instead of onboarding each terminal individually.

## Objectives

Primary goals include:

- Accelerate merchant terminal onboarding at scale.
- Reduce manual operational overhead
- Ensure regulatory and scheme compliance.
- Maintain standardized merchant data and KYC integrity.

## Process Flow

### Step 1 – Bulk Data Preparation

Merchant or terminal data is compiled in a predefined structured file (typically XLS/CSV or API batch payload) containing:

- Merchant identifiers.
- Terminal details.
- Location information.
- Settlement account details.
- KYC references.
- QR/alias requirements.
- Device type or acceptance channel.

**Download bulk onboarding file**

<a href="/OpenDigitalAcquiring/file/bulk-terminal-template.xlsx" download >
  <button class="button button--secondary button--med"> <img src="https://cdn-icons-png.flaticon.com/16/724/724933.png" width="12" /> &nbsp; Download</button> 
  
</a>  



### Step 2 – File Upload

The acquiring portal or integration API accepts:

- Bulk merchant onboarding file upload.
- Batch submission through partner systems.
- Validation acknowledgment response.

Pre-validation includes:
- Mandatory field checks.
- Duplicate merchant detection.
- Format validation.
- Compliance checks.

If any discrepancies are identified in the data provided within the bulk file, a return file will be automatically downloaded, with the corresponding issues clearly indicated in the final column.

### Step 3 – BPM Approval Workflow

Bulk onboarding typically follows a configurable Maker–Checker workflow, ensuring governance and auditability.

Typical approval stages:

**Maker:**

- Upload bulk terminal onboarding file.
- Validate file structure and mandatory fields.
- Ensure merchant details completeness.
- Attach supporting documentation (KYC, settlement account info).
- Provide onboarding remarks.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/bulk-merchant-terminal-img1.png)
</div>


**Checker:**

- Validate merchant legitimacy.
- Verify KYC completeness.
- Confirm settlement account mapping.
- Ensure merchant category compliance.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/bulk-merchant-terminal-img2.png)
</div>


## Terminal ID Provisioning

After approval:

- Terminal IDs or QR aliases are generated.
- RAAST directory registration is triggered.
- Settlement routing configured.
- Terminal/device linkage completed.



