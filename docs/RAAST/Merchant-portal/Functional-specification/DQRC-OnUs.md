# DQRC Payments

A type of QR code that generates unique transaction details (such as amount, merchant information, and transaction ID) for each payment, allowing for secure and real-time payments to be processed.

## DQRC On-us Transaction
A payment flow where both the customer and merchant belong to the same acquiring bank, and the payment is processed immediately through a dynamic QR code that is generated for each transaction.

### Functional Flow


| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects **DQRC generate** option. <br /> • System generates a request for the DQRC string. |
| **Acquiring Services** | • Receives the request for Dynamic QRC. <br /> • Initiates the DQRC request to **RAAST OC**. |
| **RAAST OC** | • Receives and validates the DQRC request. <br /> • Creates **pain.13** message with the Unique **RTP ID** from the channel. <br /> • Shares the **pain.13** message with **RAAST SBP**. |
| **RAAST SBP** | • **Validation:** Checks request and ensures RTP ID uniqueness. <br /> • **Storage:** Stores the RTP ID. <br /> • **Response:** Sends HTTP 200 Acknowledgement back to RAAST OC. |
| **RAAST OC** | • Receives acknowledgement that the RTP is successfully stored in RAAST SBP. |
| **Acquiring Bank App (Customer)** | • Customer scans the DQRC image. <br /> • App validates the string and calls the payment request to **RAAST OC**. |
| **RAAST OC** | • Identifies the BIC code belongs to the Acquiring Bank (On-Us). <br /> • Verifies the **RTP ID** against the DQRC. <br /> • Initiates the **Funds Transfer (FT)** call to the Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Validation:** Checks Customer Limits and Status. <br /> • **Accounting:** <br /> &nbsp;&nbsp;o **Debit:** Customer Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Payable GL Account. <br /> • Sends FT response back to RAAST OC. |
| **RAAST OC** | • **Logging:** Logs transaction via SAF (Store and Forward) upon success. <br /> • **Notifications:** <br /> &nbsp;&nbsp;o Sends Success Message to the Customer App. <br /> &nbsp;&nbsp;o Sends `Notify Merchant` request to Acquiring Services. |
| **Acquiring Bank App** | • Receives and displays the Payment Success Message to the customer. |
| **Acquiring Services** | • **Verification:** Receives notification, checks Merchant Status and RTP ID. <br /> • **Ack:** Sends acknowledgement message back to RAAST OC. |
| **RAAST OC** | • Sends `PaymentNotificationOnUs` to Acquiring Services. |
| **Acquiring Services** | • **Settlement Calculation:** Calculates net payment (**CreditAdviceOnUs**). <br /> • **Entry:** Debits the Merchant Payable GL Account. <br /> • Forwards `CreditAdviceOnUs` to RAAST OC. |
| **RAAST OC** | • Sends the final Funds Transfer Request to the Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Final Settlement:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Account. <br /> • Sends FT Response back to RAAST OC. |
| **RAAST OC** | • Receives CBS response and sends `CreditAdviceOnUs` success message to Acquiring Services. |
| **Acquiring Services** | • Receives final confirmation and notifies the merchant of successful processing. |
| **Merchant** | • Receives final notification: **"Payment Processed Successfully."** |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/dqrc-os-ff.png)
</div>



## DQRC Off-us Transaction

A payment flow where the customer and merchant belong to different acquiring banks, and the payment is processed through RAAST using a dynamic QR code for interbank settlement.

### Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects **DQRC generate** option. <br /> • System generates a request for the DQRC string. |
| **Acquiring Services** | • Receives the Dynamic QRC request. <br /> • Initiates the DQRC request to **RAAST OC**. |
| **RAAST OC** | • Validates the request. <br /> • Creates **pain.13** (Request for Payment) with a Unique **RTP ID**. <br /> • Shares the **pain.13** with **RAAST SBP**. |
| **RAAST SBP** | • **Validation:** Checks the request and RTP ID uniqueness. <br /> • **Storage:** Stores the RTP ID. <br /> • **Ack:** Returns HTTP 200 Acknowledgement to RAAST OC. |
| **RAAST OC** | • Receives the storage acknowledgement from RAAST SBP. <br /> • Forwards the acknowledgement to **Acquiring Services**. |
| **Issuer** | • Customer scans the DQRC via the Issuer's app. <br /> • Validates the string. <br /> • Sends payment request to RAAST SBP (**CB.pacs.008**). |
| **RAAST SBP** | • Receives **pacs.008** and acknowledges to Issuer (HTTP 200). <br /> • Fetches **pacs.002 (ACSP)** via `get-mx`. <br /> • Sends **pacs.002** acknowledgement to the Issuer. |
| **Issuer** | • Receives acknowledgements for **pacs.008** and **pacs.002**. <br /> • Processes the debit authorization on the customer's account. |
| **RAAST SBP** | • Fetches **pacs.14** (Authorization) via `get-mx` from RAAST OC. <br /> • Sends acknowledgement back to RAAST OC. |
| **RAAST OC** | • Identifies sender BIC as **Non-Acquiring Bank** (Off-Us). <br /> • Initiates "Notify Merchant" call to **Acquiring Services**. |
| **Acquiring Services** | • Receives notification from RAAST OC. <br /> • **Verification:** Checks Merchant Status and RTP ID. <br /> • Triggers In-App notification to the **Merchant**. |
| **Merchant** | • Receives real-time In-App notification of the payment initiation. |
| **Acquiring Services** | • Sends success response back to **RAAST OC**. |
| **RAAST OC** | • Fetches **CB.pacs.008** from RAAST SBP. <br /> • **Inter-Bank Settlement:** <br /> &nbsp;&nbsp;o Initiates Fund Transfer to **Acquiring Bank CBS**. <br /> &nbsp;&nbsp;o Entry: GL to GL Transfer (Debit RAAST GL / Credit Merchant Payable GL). |
| **Acquiring Bank CBS** | • Receives FT request. <br /> • **Debit:** RAAST GL Account. <br /> • **Credit:** Merchant Payable GL Account. <br /> • Returns FT response to RAAST OC. |
| **RAAST OC** | • Logs transaction upon success. <br /> • Initiates `MerchantandPaymentNotificationOffUs` to **Acquiring Services**. |
| **Acquiring Services** | • Receives notification and acknowledges to RAAST OC. <br /> • **Settlement Calculation:** Calculates Net Amount (Fee/FED/MDR deduction). <br /> • Initiates `CreditAdviceOffUs` to RAAST OC. |
| **RAAST OC** | • Forwards the final Fund Transfer Request to **Acquiring Bank CBS**. |
| **Acquiring Bank CBS** | • **Final Credit:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Account. <br /> • Returns final response to RAAST OC. |
| **RAAST OC** | • Receives response and sends `creditAdviceOffUs` success to **Acquiring Services**. |
| **Acquiring Services** | • Receives success confirmation and sends the final **Payment Successful** notification. |
| **Merchant** | • Receives final confirmation: **"Payment Processed Successfully."** |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/DQRC-ofs-mp-ff.png)
</div>