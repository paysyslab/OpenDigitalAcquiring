# SQRC Generation

## Merchant Details

The **SQRC Generation** screen allows the merchant to generate a Static QR Code (SQRC) against a selected merchant terminal.

The screen displays merchant context including:
- Type  
- Merchant  
- Doing Business As  
- MID  
- Contact Number  
- Merchant Status  

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – SQRC img](/img/mp/sqrc-gen-1.png)
</div>

A **Select Terminals** button is available to initiate QR generation.

## Select Terminals Modal

When the merchant clicks **Select Terminals**, a modal opens titled:

**Select Terminals for Merchant Name**

The modal displays the following columns:

- Select  
- Merchant  
- MID  
- Terminal  
- Multi-Use (toggle)  
- Amount  

At the bottom of the modal, the following actions are available:

- **Generate QR**  
- **Download QR**  

Both buttons remain disabled until eligibility conditions are met.



## QR Generation Logic

### Multi-Use Toggle Enabled

When the **Multi-Use** toggle is turned ON:

- The QR is generated **without amount**  
- The Amount field is disabled
- **Generate QR** becomes enabled  
- After QR is generated, **Download QR** becomes enabled  

### Multi-Use Toggle Disabled

When the **Multi-Use** toggle is turned OFF:

- The QR is generated **with amount**  
- The Amount field becomes mandatory  
- After a valid amount is entered, **Generate QR** becomes enabled  
- After QR is generated, **Download QR** becomes enabled  

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – SQRC img](/img/mp/sqrc-gen-2.png)
</div>