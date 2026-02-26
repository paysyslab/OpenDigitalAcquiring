# SQRC Off-us Transaction

## Functional Flow

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


## Negative Case

### 5.2.3: Functional Flow (Negative Case - Payment Declined) - Functional Flow

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
