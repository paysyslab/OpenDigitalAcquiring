# RTP Now

## Merchant Details

The **RTP Now** module allows the merchant to initiate an immediate Request-to-Pay where payment is expected instantly once the customer approves the request.

The main screen displays merchant details including:

- Type  
- Merchant  
- Doing Business As  
- MID  
- Contact Number  
- Merchant Status  

A **Select Terminals** button is available to initiate the RTP Now flow.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP now img](/img/mp/RTP-now-img-1.png)
</div>

## Select Terminals Modal

When the merchant clicks **Select Terminals**, a modal appears titled:

**Select Terminals for Merchant Name**

The modal includes:

- Merchant  
- MID  
- Terminal  
- RTP Now  

Each terminal has an **RTP NOW** button to start the request.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP now img](/img/mp/RTP-now-img-2.png)
</div>

## RTP Now Request Modal

Clicking **RTP NOW** opens the request configuration modal.

### Header Information

- Title: **RTP Now Request**  
- Terminal ID displayed for reference



## Select Fetch Type

Merchant selects how the payer will be identified:

- **Alias Fetch**
- **Title Fetch**

Only one option can be active.

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP now img](/img/mp/RTP-now-img-3.png)
</div>

## Alias Fetch Flow

### Input Field

- Mobile Number (RAAST ID)

### Action

- **Request Alias** becomes enabled after valid entry  
- System fetches payer details for confirmation

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP now img](/img/mp/RTP-now-img-4.png)
</div>

## Title Fetch Flow

### Input Field

- IBAN (24 characters, mandatory)

### Action

- **Request Title** becomes enabled after valid entry  
- System fetches account title for verification

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – RTP now img](/img/mp/RTP-now-img-5.png)
</div>

## Payment Request Completion

After successful beneficiary verification:

- Merchant enters payment amount  
- Optional remarks may be added if configured  
- System validates inputs and generates RTP Now request  
- Expiry time will be setup automatically to 180m

The request is immediately sent to the payer and transaction status becomes available for monitoring in RTP transactions.











