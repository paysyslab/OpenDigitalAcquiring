# Soundbox Inventory Management

## Objective

The Soundbox Inventory module enables controlled onboarding, approval, and assignment of Soundbox devices to merchant terminals (TIDs) under a Maker–Checker governance model. The functionality ensures device traceability, controlled deployment, and operational integrity across the acquiring ecosystem.

## Device Onboarding 

### Soundbox Onboardinging (Maker Level)

#### Single Entry

The system shall allow authorized **Maker** users to onboard Soundbox devices individually through the Soundbox Inventory module.

**Mandatory Device Attributes:**
- Device Serial Number  
- IMEI  
- Brand Name  
- Device Model  

<br />


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sb-m-img1.png)
</div>


#### Bulk Entry

- The user chooses the Bulk Import option to upload multiple devices.
- Upload File: Users are prompted to upload an Excel file that contains the details for multiple soundboxes. The spreadsheet should follow the predefined template, which likely includes fields like Device Serial Number, Brand Name, IMEI, and Device Model.
- Validate and Process: The system validates the information in the file and processes it to register all the devices in the inventory.

<br />


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sb-m-img2.png)
</div>


### Checker Approval

The system shall enforce Maker–Checker control for device onboarding.

#### Soundbox Onboarding Decision:
- View device details submitted by Maker.
- Approve device → Status changes to **Approved / Active**.
- Reject device → Status changes to **Rejected**.
- Capture mandatory rejection reason.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sb-c-img1.png)
</div>


## Soundbox Tagging to Merchant Terminal (TID)

### Tagging Initiation (Maker Level)

The system shall allow authorized Maker users to initiate Soundbox tagging from the **Terminal Management** module.

#### Maker Capabilities:
- Maker shall be able to:
  - Search and select Merchant Terminal (via MID, TID, Merchant Name, etc.).
  - Select an Approved and untagged Soundbox from inventory.
  - Submit a tagging request.


<br />


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/vt-img1.png)
</div>


<br />


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sb-tag-img1.png)
</div>


<br />


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sb-tag-img2.png)
</div>


### Checker Approval 

The system shall route tagging requests to Checker for approval before effective assignment.

#### Soundbox Tagging Decision:
- Review:
  - Merchant details.
  - TID details.
  - Soundbox Serial/IMEI.
  - Current device assignment status.
- Approve → Effective tagging is executed.
- Reject → Tagging request is declined with reason.

<br />


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sb-c-img1.png)
</div>
