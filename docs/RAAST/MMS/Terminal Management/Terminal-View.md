# Terminal

## Overview
The Terminal View functionality provides a centralized interface within the Terminal Management module that allows authorized back-office users to monitor, search, and manage merchant terminals. It offers visibility into terminal assignments, merchant details, terminal counts, and operational status to support acquiring operations, merchant onboarding, and terminal lifecycle management.

This functionality ensures operational transparency, streamlined terminal allocation, and efficient monitoring of merchant-terminal relationships.

## Terminal Listing View

The terminal view screen displays a structured tabular listing of merchants along with their associated terminal information. Each record represents a merchant entity with linked terminal data.

### Key Information Displayed:

- **Created On**
  - Displays the timestamp when the merchant or terminal record was created.
  - Supports audit tracking and onboarding timeline verification.

- **Merchant ID (MID)**
  - Unique identifier assigned to each merchant.
  - Used for terminal mapping, transaction routing, and settlement association.

- **Merchant Name**
  - Registered business or individual merchant name.
  - Helps identify terminal ownership.

- **CNIC / NTN**
  - Merchant identification number for regulatory compliance.
  - Used for KYC, AML, and reporting purposes.

- **Mobile Number**
  - Registered contact number of the merchant.
  - Supports communication and merchant verification.

- **Number of Terminals**
  - Indicates the total number of terminals mapped to the merchant.
  - Helps track terminal deployment and merchant scale.

- **Merchant Status**
  - Displays operational status such as:
    - Active
    - Inactive
    - Suspended (if applicable)
  - Used for operational decision-making.

- **Action Column**
  - Provides operational controls such as:
    - **Add Terminal** – Assign new terminal to merchant.
    - **Update Terminal** – Modify existing terminal details.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/trm-view-img1.png)
</div>
