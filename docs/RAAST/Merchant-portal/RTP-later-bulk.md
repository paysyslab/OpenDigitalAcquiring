# RTP Later Bulk Import

## Screen Overview

The **RTP Later Bulk Import** module enables merchants to initiate multiple Request-to-Pay (RTP Later) transactions simultaneously through a bulk upload mechanism. This feature is designed for scheduled collections, deferred payment requests, or mass billing scenarios.

The screen provides structured options to select merchant identifiers and upload transaction files.

**Download bulk onboarding file**

<a href="/static/files/BULK-RTP.txt" download >
  <button class="button button--secondary button--med"> <img src="https://cdn-icons-png.flaticon.com/16/724/724933.png" width="12" /> &nbsp; Download</button> 
</a>

## Merchant Selection

### Select MID (Merchant ID)

- Dropdown displaying available Merchant IDs  
- Includes merchant name and parent identifier if applicable  
- Mandatory selection before file upload  

This ensures transactions are mapped to the correct merchant wallet.



### Select TID (Terminal ID)

- Dropdown displaying terminal identifiers linked with selected MID  
- Mandatory for transaction routing and reconciliation  

This ensures RTP requests are tied to the correct terminal.



## File Upload Section

### Upload Area

The system provides a drag-and-drop or browse-file interface:

- Accepts only `.txt` files  
- MIME type: `text/plain`  
- Maximum allowed size: 5MB  
- Single file upload per submission  



### Upload Methods

#### Drag & Drop

- User drags file into upload area  
- System validates format and size immediately  

#### Browse Files Button

- Opens local file explorer  
- User selects file manually  



## File Validation Rules

Before processing, the system validates:

- File format and extension  
- File size compliance  
- Record structure consistency  
- Mandatory transaction fields  
- Merchant and terminal mapping integrity  

If validation fails, appropriate error feedback is displayed.



## Transaction Processing Flow

After successful validation:

- RTP Later requests are generated for each record  
- Requests are scheduled as per defined expiry timelines  
- Status becomes available in RTP Later transaction monitoring  



<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP later bulk img](/img/mp/rtp-later-bulk-1.png)
</div>