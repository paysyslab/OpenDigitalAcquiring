# DQRC Generation

## Merchant Details

The **DQRC Generation** screen allows the merchant to generate a Dynamic QR Code (DQRC) against a selected merchant terminal.

The screen displays merchant context including:

- Type  
- Merchant  
- Doing Business As  
- MID  
- Contact Number  
- Merchant Status  

A **Select Terminals** button is available to initiate Dynamic QR generation.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – DQRC img](/img/mp/dqrc-gen-1.png)
</div>

## Select Terminals Modal

When the merchant clicks **Select Terminals**, a modal opens titled:

**Select Terminals for Merchant Name**

The modal displays the following columns:

- Merchant  
- MID  
- Terminal  
- Action  

Under the **Action** column, a **Generate QR** button is available for each terminal.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – DQRC img](/img/mp/dqrc-gen-2.png)
</div>

## Generate QR Modal

Upon clicking Generate QR, a Dynamic QR configuration modal is displayed with the following fields:

### 1. Amount  
- Field Type: Numeric input  
- Label: Amount
- Mandatory: Yes  

### 2. DQRC Expiry (Minutes)  
- Field Type: Numeric input  
- Label: DQRC Expiry (Minutes)
- Mandatory: Yes  
- Defines the validity duration of the generated Dynamic QR.

### 3. Generate QR Button  
- Enabled only when:
  - Valid Amount is entered  
  - Valid Expiry time (in minutes) is entered  


<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – DQRC img](/img/mp/dqrc-gen-3.png)
</div>

## DQRC Generation Logic

- The merchant selects a terminal.
- The merchant enters:
  - Transaction amount  
  - Expiry time (in minutes)
- Upon clicking **Generate QR**:
  - A Dynamic QR is generated for the entered amount.
  - The QR remains valid only for the configured expiry duration.
  - After expiry, the QR becomes invalid and cannot be used for payment.

