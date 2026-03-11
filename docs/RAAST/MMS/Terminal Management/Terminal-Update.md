# Update Terminal

## Overview
The **Update Terminal** functionality allows authorized back-office users to modify existing terminal details associated with a merchant. This capability ensures that terminal records remain accurate, up to date, and aligned with operational, regulatory, and business requirements.

Terminal updates may be required due to merchant profile changes, terminal reconfiguration, operational adjustments, or compliance updates. The system provides a controlled mechanism to edit terminal details while maintaining auditability and operational integrity.

## Terminal Update Screen – Field Details

The update screen displays existing terminal information pre-populated for editing. Users may modify permitted fields based on role and system controls.

#### Merchant Identification Details

**Name**
- Merchant or terminal owner name.
- Used for identification, reporting, and customer transaction references.

**CNIC**
- Merchant identification number used for compliance tracking.
- Typically restricted from frequent modification unless required for correction.



#### Contact Information

**Contact Number**
- Updated contact number for operational communication and alerts.

**Email**
- Updated merchant email for notifications, reporting, and onboarding communications.



#### Location Details

**Address Line 1**
- Primary terminal deployment address.
- Used for operational tracking and regulatory reporting.

**Address Line 2**
- Additional location details if applicable.

**City**
- Geographic location of terminal deployment.
- Supports regional reporting and operational segmentation.



#### Terminal Configuration Details

**Status**
Indicates operational state of the terminal. Typical values include:

- Active – Terminal can process transactions;
- Inactive – Temporarily disabled;
- Suspended – Disabled due to compliance or operational reasons;
- Pending Approval – Awaiting verification or approval.

Status changes directly impact transaction acceptance capability.

**Payment Method**
Specifies configured payment acceptance mode, such as:

- Card-based acquiring;
- QR payments (e.g., Raast QR);
- Wallet-based payments;
- Hybrid acceptance modes.

Changes affect transaction routing and settlement configuration.

**Need Soundbox**
Indicates whether a payment confirmation soundbox device is required:

- Yes – Soundbox provisioning required;
- No – No soundbox association needed.

This supports device inventory planning and merchant experience optimization.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/upd-trm-img1.png)
</div>
