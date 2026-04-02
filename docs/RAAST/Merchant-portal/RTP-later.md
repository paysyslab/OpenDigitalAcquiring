# RTP later

## Merchant Details

The **RTP later** module allows the merchant to initiate a Request-to-Pay that is scheduled or payable at a later stage.

The main screen displays merchant context including:

- Type  
- Merchant  
- Doing Business As  
- MID  
- Contact Number  
- Merchant Status  

A **Select Terminals** button is available to initiate the RTP later process.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP later img](/img/mp/RTP-now-img-1.png)
</div>

## Select Terminals Modal

When the merchant clicks **Select Terminals**, a modal opens titled:

**Select Terminals for Merchant Name**

The modal displays the following columns:

- Merchant  
- MID  
- Terminal  
- RTP later  

Under the **RTP later** column, an **RTP later** button is available for each terminal.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP later img](/img/mp/RTP-now-img-2.png)
</div>

## RTP later Request Modal

Upon clicking **RTP later**, the RTP later configuration modal is displayed.

### Header Information

- Title: **RTP later Request**  
- Terminal ID (displayed for reference)


## Step 1: Select Fetch Type

The merchant must select the beneficiary identification method:

- **Alias Fetch**
- **Title Fetch**

Only one option can be selected at a time.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP later img](/img/mp/rtp-later-1.png)
</div>

## If Alias Fetch is Selected

### Input Field:
- **Mobile Number**
  - 11-digit mobile number (RAAST ID)
  - Mandatory field

### Action Button:
- **Request Alias**
  - Enabled only after valid mobile number entry
  - Fetches beneficiary details from the system

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP later img](/img/mp/rtp-later-3.png)
</div>

## If Title Fetch is Selected

### Input Field:
- **IBAN**
  - 24-character IBAN
  - Mandatory field

### Action Button:
- **Request Title**
  - Enabled only after valid IBAN entry
  - Fetches beneficiary account title

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP later img](/img/mp/rtp-later-2.png)
</div>

## Post Fetch Flow

Once beneficiary details are successfully fetched:

- Merchant proceeds to enter:
  - Transaction amount

- The system validates all inputs.

- Upon confirmation:
  - RTP later request is generated
  - Request is stored in the system
  - Beneficiary receives payment request notification
  - Status is available under RTP later Transactions
  - Expiry time will be setup automatically to 40d



