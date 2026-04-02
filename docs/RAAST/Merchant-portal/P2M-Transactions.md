# P2M Transactions

## Overview

The **P2M Transactions** module provides a consolidated view of all Person-to-Merchant (P2M) payment transactions received by the merchant.

This screen enables merchants to:

- Monitor incoming payments  
- Review transaction-level details  
- Analyze settlement and MDR information  
- Apply filters for transaction tracking  



## Transaction Listing Grid

The screen displays transactions in a tabular format with the following columns:

- Payment Date
- Transaction ID  
- Sender Name  
- Sender IBAN  
- Transaction Amount  
- MDR (Rate)

Each row represents an individual P2M transaction processed against the merchant’s terminal.



## Column Description

### Payment Date
Displays the date and time when the transaction was completed.

### Transaction ID
Unique system-generated identifier for the P2M transaction.

### Sender Name
Name of the payer initiating the payment.

### Sender IBAN
IBAN of the payer’s bank account used for the transaction.

### Transaction Amount
Total transaction amount received from the customer.

### MDR (Rate)
Merchant Discount Rate applicable to the transaction.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – Dashboard](/img/mp/P2M-trans-1.png)
</div>


## Filtering Capability

A **Filter** button is available at the top-right of the screen.

Using filters, merchants can:

- Search by Merchant Name
- Filter transactions by date range  
- Search by Transaction ID  
- Filter by Terminal ID
- Search by STAN
- Search by RRN
- Search by Transaction ID 

This allows targeted analysis and reconciliation.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – Dashboard](/img/mp/P2M-trans-fil-1.png)
</div>

## Empty State Handling

If no transactions are available, the grid displays: No rows

This indicates that no P2M transactions have been recorded for the selected criteria.
 