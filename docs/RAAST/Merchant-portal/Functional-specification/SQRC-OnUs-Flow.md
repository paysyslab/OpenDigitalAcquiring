# SQRC Payments

A type of QR code used for payments where the information, including the merchant's details and amount, is pre-encoded, allowing multiple payments to be made by scanning the same code and has no expiry.

## SQRC On-us Transaction
Static QR code onus is where both the customer and merchant belong to the same acquiring bank, ensuring the transaction is processed internally within the bank.

### Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Channel (Mobile App)** | • Customer scans the Static QR and sends the payment request. |
| **Mobile App Backend** | • Backend services receive the request. <br /> • Forwards the request to **RAAST OC**. |
| **RAAST OC** | • **Validation:** Performs technical validation on the received request. <br /> • **Routing Logic:** <br /> &nbsp;&nbsp;o Checks Sender and Receiver IBANs. <br /> &nbsp;&nbsp;o Identifies transaction as **On-Us** (both accounts within the same bank). <br /> • **Forwarding:** Sends request to **Acquiring Services (RAAST)**. |
| **Acquiring Services (RAAST)** | • **Merchant Verification:** <br /> &nbsp;&nbsp;o Checks Merchant status (must be Approved/Active). <br /> &nbsp;&nbsp;o Verifies Merchant account details. <br /> • **Compliance:** Checks Merchant transaction limits. <br /> • **Response:** Responds back to **RAAST OC**. |
| **RAAST OC** | • Receives success response from Acquiring Services. <br /> • **Settlement Initiation:** Sends Fund Transfer request to the **CBS** (Core Banking System). |
| **CBS** | • **Account Validation:** Checks sender’s account status and transaction limits. <br /> • **Accounting Entries:** <br /> &nbsp;&nbsp;o **Debit:** Customer/Sender account. <br /> &nbsp;&nbsp;o **Credit:** Merchant payable account. <br /> • **Confirmation:** Responds back to **RAAST OC** with a success message. |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/QRos-pm-mp-ff.png)
</div>

### Negative Cases

#### IBAN Mismatch - Payment Rejected (Customer & Merchant Accounts Not from Acquiring Bank)

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Channel (Mobile App)** | • The customer scans the merchant’s QR code via their mobile app to initiate the payment. <br /> • Customer enters the payment amount and approves the transaction. <br /> • The customer is notified via the app that the payment has failed due to an IBAN mismatch (i.e., accounts are not both from Acquiring Bank). |
| **Mobile App Services** | • The mobile app processes the payment request and sends it to RAAST OC (the payment gateway). <br /> • The mobile app receives the failure notification from RAAST OC. |
| **RAAST OC** | • RAAST OC checks if both the customer's and merchant's IBANs are from Acquiring Bank. <br /> • RAAST OC detects that either the customer’s or merchant’s IBAN is not from Acquiring Bank. <br /> • RAAST OC sends a payment rejection response to Mobile App Services indicating "IBAN Mismatch". |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/qr-os-nc-1.png)
</div>


#### Payment Declined - Payment Declined by Merchant or Bank

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Channel (Mobile App)** | • The customer scans the merchant’s QR code via their mobile app to initiate the payment. <br /> • The customer enters the payment amount and confirms the transaction. <br /> • Customer is notified on their mobile app that the payment has been declined due to a merchant account issue. The message includes details like "Merchant Account Inactive" or "Exceeds Transaction Limits". |
| **Mobile App Services** | • The mobile app processes the payment request and sends it to RAAST OC for further validation. <br /> • Mobile App Services processes the failure notification and prepares to inform the customer. |
| **RAAST OC** | • RAAST OC checks if both the customer's and merchant's IBANs are valid and belong to Acquiring Bank. <br /> • The IBANs are validated successfully, so the payment request is forwarded to Acquiring Services (RAAST) for merchant validation. <br /> • RAAST OC receives the decline message from Acquiring Services and forwards it to Mobile App Services. |
| **Acquiring Services (RAAST)** | • Acquiring Services checks the merchant's account status, ensuring it is active and within the allowed transaction limits. <br /> • If the merchant’s account is inactive or

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/qr-os-nc-2.png)
</div>


## SQRC Off-us Transaction

Static QR code offus is where the customer and merchant are from different acquiring banks, requiring the transaction to be processed through the RAAST network for interbank settlement.

### Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Customer** | • Scans the merchant’s QR code using their mobile banking app. <br /> • Enters the payment amount and approves the transaction. <br /> • Receives a final notification confirming successful processing or detailing issues. |
| **Issuer** | • **Payment Initiation:** Processes request and sends **PACS.008** to RAAST. <br /> • **Authorization:** Processes debit authorization and sends **PACS.002/ACSP** to confirm. <br /> • **Notification:** Informs the customer via the banking app about the final payment status. |
| **RAAST** | • **Validation:** Validates the request and places a hold on the funds. <br /> • **Routing:** Forwards the payment request to **RAAST OC**. <br /> • **Authorization Processing:** Upon success from Acquiring Services, posts **PACS.002 (AUTH)**. <br /> • **Settlement:** Updates position accounts and generates **PACS.002 (ACSP)** to notify the Issuer and RAAST OC. |
| **RAAST OC** | • **Status Check:** Requests `MerchantAccountStatus` from Acquiring Services to verify validity. <br /> • **Notification:** Sends `MerchantandPaymentNotificationOffUs` to Acquiring Services for settlement processing. |
| **Acquiring Services (RAAST)** | • **Calculation:** Calculates the net settlement amount for the merchant. <br /> • **Settlement:** Credits the merchant's account according to the settlement flow. <br /> • **Merchant Alert:** Sends a payment notification to the merchant. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sqrc-ofs-ff.png)
</div>


### Negative Case

#### Payment Declined

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Customer** | • The customer scans the merchant’s QR code using their mobile banking app to initiate the payment. <br /> • The customer enters the payment amount and confirms the transaction. <br /> • The customer receives a notification from their mobile banking app, informing them that the payment was declined due to insufficient funds. |
| **Issuer** | • The Issuer (Customer's Bank) processes the payment request and checks the available balance in the customer’s account. <br /> • The Issuer detects that the customer has insufficient funds in their account to complete the payment. |
| **Raast** | • The Issuer declines the payment due to insufficient funds and sends a decline message to RAAST, with the specific reason. <br /> • The Issuer updates the status and notifies RAAST about the decline. |
| **Raast OC** | • RAAST OC processes the decline notification and forwards it to Acquiring Services (RAAST). |
| **Acquiring Services (RAAST)** | • Acquiring Services receives the decline response and updates the merchant about the payment failure. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/sqrc-ofs-ff-nc.png)
</div>


