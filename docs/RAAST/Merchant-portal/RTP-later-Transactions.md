# Bulk RTP Later Transactions

## Overview

The **RTP Later Transactions** screen provides visibility into all scheduled Request-to-Pay (RTP Later) transactions initiated through bulk upload or individual requests.

This module allows merchants to:

- Monitor scheduled RTP payment requests  
- Track file-based bulk RTP submissions  
- Review transaction processing status  
- Access actions related to uploaded RTP files  



## Transaction Listing Grid

The screen displays bulk RTP transactions in a tabular format with the following columns:

- Creation Date  
- File Name  
- TID (Terminal ID)  
- Status  
- Action  

Each entry represents a bulk RTP request submission.



## Filter Options

### Select MID
Allows merchant selection when multiple Merchant IDs exist.

### Select TID
Filters transactions based on specific terminal selection.

These filters help isolate RTP requests for reconciliation and monitoring.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – Dashboard](/img/mp/rtp-later-trans-1.png)
</div>

## Column Description

### Creation Date
Date when the RTP bulk request file was uploaded.

### File Name
Name of the uploaded RTP request file.

### TID (Terminal ID)
Terminal associated with the RTP request batch.

### Status
Displays processing state such as:

- Uploaded  
- Processing  
- Completed  
- Failed  

### Action
Provides available actions such as:

- Viewing details  
- Downloading report  
- Checking processing results  

(Exact actions depend on system configuration.)



## Empty State Handling

If no RTP Later transactions exist, the screen displays:

**No rows**

This indicates that no RTP Later bulk transactions are currently available.



## Key Characteristics

- Supports bulk RTP scheduling visibility  
- Terminal-based filtering capability  
- File tracking and audit visibility  
- Status monitoring for payment requests  
- Supports operational reconciliation workflows  