# Bulk Merchant Onboarding

Bulk Merchant Onboarding in the RAAST P2M acquiring ecosystem enables financial institutions acquiring platforms to onboard multiple merchants simultaneously instead of processing individual onboarding requests. This capability is particularly useful for large merchant portfolios such as retail chains, aggregators, franchises, government entities, utilities, or enterprise merchant networks.

The objective is to streamline onboarding while maintaining compliance with SBP RAAST regulations, ensuring KYC validation, QR alias generation, merchant account linkage, and readiness for instant payment acceptance via RAAST P2M cases.


**Download bulk onboarding file**

<a href="/static/file/bulk-merchant-onboarding-template.xlsx" download >
  <button class="button button--secondary button--med"> <img src="https://cdn-icons-png.flaticon.com/16/724/724933.png" width="12" /> &nbsp; Download</button> 
</a>

## Objectives

- Reduce onboarding turnaround time for large merchant batches.
- Enable scalable merchant acquisition aligned with RAAST P2M adoption.
- Ensure standardized KYC, AML, and merchant validation processes.
- Minimize manual operational effort while maintaining regulatory compliance.
- Provide automated QR/EAN generation and account linking for payment acceptance.

## Bulk Upload Initiation

**File Upload**

The operations user uploads the merchant batch file into the acquiring platform:
- System validates file format, structure, and schema.
- Mandatory fields are checked.
- Duplicate merchant detection is performed.
- Invalid records are flagged before processing.

If any discrepancies are identified in the data provided within the bulk file, a return file will be automatically downloaded, with the corresponding issues clearly indicated in the final column.

**Outcome:**

- Valid records proceed to onboarding workflow.
- Invalid records are returned with error details for correction.


## Approval Workflow (Configurable BPM)

Bulk onboarding typically follows a configurable approval hierarchy such as:
- Maker: Upload and initial verification.
- Checker: KYC/document validation.
- Banker/Operations: Account linkage confirmation.
- Approver: Final authorization for activation.

The workflow can be adjusted based on institution policy:
- Some institutions use only Maker-Checker.
- Others implement full multi-level approvals for risk mitigation.

### Initial Submission (Maker Stage)

The Merchant onboarding flow is initiated by the Maker user who uploads the bulk merchant onboarding file.

If validation errors occur, affected records are flagged immediately and returned for correction before moving further in the workflow.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/bulk-merchant-onboarding-img1.png)
</div>


### Validation of Submission (Checker Stage)

Once initial submission is done, the onboarding phase moves to compliance verification.

Approved cases are sent to the Banker with optional comments.

Rejected cases are sent back to the Maker with detailed reasons for correction.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/bulk-merchant-onboarding-img2.png)
</div>


### Account Validation (Banker Stage)

This stage ensures that merchant settlement details are correct before enabling payments.

Once approved by checker, the cases are sent to the Approver.

Rejected ones are sent back to Checker.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/bulk-merchant-onboarding-img3.png)
</div>


## Approval and Authorization (Approver Stage)

After compliance and financial validation, the onboarding requests move to the approval stage.

After approval at this stage merchant is onboarded.

Rejected ones are sent back to Banker.

Typically, approval hierarchy includes:

- Maker
- Checker.
- Banker.
- Approver.

However, BPM workflows remain configurable:

- Some institutions may implement only Maker–Checker.
- Others may require full multi-level approvals depending on merchant risk profile.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/bulk-merchant-onboarding-img4.png)
</div>
