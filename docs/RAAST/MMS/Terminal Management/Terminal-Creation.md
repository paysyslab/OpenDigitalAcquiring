import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

# Add New Terminal

## Overview
The **Terminal Creation** functionality enables authorized back-office users to onboard and configure new payment terminals within the acquiring ecosystem. This functionality ensures that terminals are properly linked to merchant records, configured with accurate operational details, and activated in a controlled manner to support secure payment processing.


## Purpose of Terminal Creation

The primary objectives of terminal creation include:

- Enabling merchants to accept digital payments.
- Mapping terminal information to merchant profiles.
- Supporting transaction routing, settlement configuration, and reporting.
- Maintaining compliance with regulatory and operational standards.

## Terminal Creation Screen – Field Details

The terminal creation screen captures essential merchant contact, identification, and operational information required for terminal onboarding.

### Merchant Identification Details

**Name (Mandatory)**
- Name of the merchant or terminal owner.
- Used for identification, reporting, and customer-facing transaction details.

**CNIC**
- Merchant identification number for regulatory compliance.
- Supports KYC verification, AML checks, and audit traceability.

Contact Information

**Contact Number (Mandatory)**
- Primary merchant contact number.
- Used for operational communication, support coordination, and alerts.

**Email (Mandatory)**
- Official merchant email address.
- Used for onboarding communication, transaction notifications, and compliance correspondence.

### Location Details

**Address Line 1 (Mandatory)**
- Primary terminal deployment location.
- Required for regulatory documentation and operational tracking.

**Address Line 2 (Optional)**
- Additional address details such as shop floor, building, or unit number.

**City (Mandatory Dropdown)**
- City of terminal deployment.
- Used for geographic reporting, regional compliance, and operational segmentation.

Terminal Operational Configuration

**Status (Mandatory Dropdown)**
Defines the operational state of the terminal:

Typical values include:
- Active
- Inactive
- Suspended
- Pending Approval

This controls whether the terminal can process transactions.

**Payment Method (Mandatory Dropdown)**
Specifies the payment acceptance capability configured for the terminal. Examples may include:

- Card-based payments (POS / MPOS / SoftPOS)
- QR payments (RAAST)
- Hybrid acceptance modes

In this case QR Payemnts (RAAST). 

This determines transaction routing logic and settlement handling.


## Terminal Creation Workflow

#### Step 1: Data Entry
- User enters merchant identification, contact, and location details.
- Terminal operational configuration is selected.

#### Step 2: Validation
System validates:

- Mandatory field completion.
- Correct format of CNIC, phone, and email.
- Duplicate terminal or merchant checks.
- Compliance rules.

#### Step 3: Record Creation
Upon successful validation:

- Terminal record is created in the system.
- Terminal is linked to merchant profile.
- Configuration is saved.

#### Step 4: Activation (Conditional)
Depending on workflow:

- Terminal may be activated immediately. or
- Routed to approval workflow (Maker–Checker).

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/trm-create-img1.png)
</div>
</Zoom>