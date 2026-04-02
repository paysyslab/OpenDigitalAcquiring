# Soundbox Devices – Functional Overview

## Objective

The **Soundbox Devices** module provides a centralized inventory listing and monitoring interface for all onboarded Soundbox devices. It enables operational users to track device lifecycle status, view device attributes, and monitor assignment readiness.

This module serves as the operational visibility layer for devices created via the Soundbox Inventory onboarding process.


## Device Listing & Monitoring

The system shall display all onboarded Soundbox devices in a structured tabular format.

### Displayed Attributes

Each device record shall include the following fields:

- Creation Date  
- Device Serial Number  
- Device IMEI  
- Device Brand  
- Device Model  
- Device Status  
- Updated On  

These attributes provide full traceability of each physical device in the system.

### Supported Statuses (as per lifecycle design):

- **FRESH**  
  Indicates device is:
  - Approved in inventory
  - Not yet assigned to any Merchant TID
  - Available for tagging

- **Additional statuses**
  - Active
  - Pending Tagging Approval
  - Inactive
  - Rejected

<br />


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sb-dev-img1.png)
</div>
