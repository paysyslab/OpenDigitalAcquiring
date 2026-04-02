# Request to Pay later Payments

A payment method that allows a merchant to request payment from a customer, which can be processed at a later time using RAAST for settlement, either for On-Us or Off-Us transactions.

## RTP Later On-us Transaction

A deferred payment request initiated by the merchant, where both the customer and merchant are from the same acquiring bank, with a specified payment due date for later settlement within the bank’s network.


### Functional Flow


| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects **RTP-Later** generate option. <br /> • System initiates an RTP-Later request towards Acquiring Services. |
| **Acquiring Services** | • Receives the RTP-Later request. <br /> • Initiates **Title Fetch (IBAN)** request to **RAAST OC**. |
| **RAAST OC** | • Forwards Title Fetch request to Acquiring Bank CBS or RAAST. |
| **Acquiring Bank CBS** | • Responds with the Success Response for the Title Fetch Request. |
| **RAAST OC** | • **Validation:** Validates response from CBS. <br /> • **Response:** Returns **Unique RTP ID** and Title to Acquiring Services. |
| **Acquiring Services** | • **Payload Generation:** Generates RTP-Later Payload with the unique ID. <br /> • **Initiation:** Sends the official RTP-Later request to **RAAST OC**. |
| **RAAST OC** | • Receives request and acknowledges back to Acquiring Services. <br /> • **Routing:** <br /> &nbsp;&nbsp;o Validates Sender/Receiver IBANs (On-Us). <br /> &nbsp;&nbsp;o Creates **pain.13** (Request to Pay) message. <br /> • **Callback:** Triggers the RTP Request Callback API to the **Backend App**. |
| **Backend App** | • Validates the request and customer eligibility. <br /> • Sends push notification/alert to the **Customer**. |
| **Customer** | • Receives the RTP notification. <br /> • Reviews and **Accepts/Approves** the request. <br /> • Performs transaction authentication. <br /> • Initiates the **RTP-Later payment request**. |
| **Backend App** | • Receives payment request and calls Method (RTP Later) to **RAAST OC**. |
| **RAAST OC** | • Validates the request and the **RTP ID**. <br /> • Initiates the **Funds Transfer (FT)** call to the Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Validation:** Checks Customer Limits and Status. <br /> • **Step 1 Settlement:** <br /> &nbsp;&nbsp;o **Debit:** Customer Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Payable GL Account. <br /> • Returns FT response to RAAST OC. |
| **Customer** | • Receives the **Payment Successful** message via the banking app. |
| **RAAST OC** | • Logs the transaction via **SAF** (Store and Forward). <br /> • Sends success message to Backend App and calls `Notify Merchant` for **Acquiring Services**. |
| **Acquiring Services** | • Verifies Merchant Status and RTP ID. <br /> • Sends acknowledgement back to RAAST OC. |
| **RAAST OC** | • Sends `PaymentNotificationOnUs` to Acquiring Services. |
| **Acquiring Services** | • **Final Settlement Calculation:** <br /> &nbsp;&nbsp;o Calculates Net Payment (**CreditAdviceOnUs**). <br /> &nbsp;&nbsp;o Debits the Merchant Payable GL Account. <br /> • Forwards `CreditAdviceOnUs` to RAAST OC. |
| **RAAST OC** | • Sends the final Funds Transfer Request to Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Final Credit:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Account. <br /> • Returns response to RAAST OC. |
| **RAAST OC** | • Sends the final `CreditAdviceOnUs` success message to Acquiring Services. |
| **Acquiring Services** | • Notifies the merchant that the payment was processed successfully. |
| **Merchant** | • Receives final confirmation: **"Payment Processed Successfully."** |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/RTP-l-os-ff.png)
</div>


## RTP Later Off-us Transaction

### Functional Flow


| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects **RTP-Later** generate option. <br /> • Initiates the RTP-Later request towards Acquiring Services. |
| **Acquiring Services** | • Receives the RTP-Later request. <br /> • Initiates **Title Fetch (IBAN/Alias)** request to **RAAST OC**. |
| **RAAST OC** | • Receives Title Fetch request. <br /> • Sends the **TF-CAS** request to **RAAST SBP**. |
| **RAAST SBP** | • **Orchestration:** Acknowledges receipt to RAAST OC. <br /> • Forwards Title Fetch Request to the **Acquiring Bank/Issuer CBS**. |
| **Acquiring Bank CBS** | • Processes Title Fetch and returns Success Response (Account Title) to RAAST SBP. |
| **RAAST SBP** | • Forwards the Success Response back to **RAAST OC**. |
| **RAAST OC** | • Validates response and returns the **Unique RTP ID** and Title to Acquiring Services. |
| **Acquiring Services** | • Generates RTP-Later Payload with the unique ID. <br /> • Initiates the official RTP-Later request to **RAAST OC**. |
| **RAAST OC** | • Receives request and sends **pain.13** (Request for Payment) to **RAAST SBP**. |
| **RAAST SBP** | • **Validation:** Checks RTP ID uniqueness and stores the record. <br /> • Returns HTTP 200 Acknowledgement to RAAST OC. |
| **RAAST OC** | • Receives storage confirmation and shares the acknowledgement with **Acquiring Services**. |
| **Issuer** | • **Retrieval:** Fetches RTP-Later request (`get-mx`) from RAAST SBP. <br /> • **Customer Action:** Customer reviews and **Approves** the request. <br /> • **Initiation:** Sends **pacs.008** (RTP-Later Payment) to RAAST SBP. |
| **RAAST SBP** | • Validates **pacs.008** against the original **pain.13**. <br /> • Fetches **pacs.002 (ACSP)** and acknowledges receipt to the Issuer. |
| **Issuer** | • Receives final acknowledgements and processes the **Debit Authorization**. |
| **RAAST OC** | • Fetches **pacs.14** from RAAST SBP. <br /> • Identifies non-Acquiring Bank BIC (Off-Us). <br /> • Initiates "Notify Merchant" call to **Acquiring Services** and validates RTP ID. |
| **Acquiring Services** | • Verifies Merchant Status and RTP ID. <br /> • Notifies the Merchant and sends success back to RAAST OC. |
| **Merchant** | • Receives real-time **In-App notification** of the payment initiation. |
| **RAAST OC** | • Fetches **CB.pacs.008** from RAAST SBP. <br /> • **Clearing:** Initiates Fund Transfer to **Acquiring Bank CBS** (GL to GL). <br /> &nbsp;&nbsp;o Entry: Debit RAAST GL / Credit Merchant Payable GL. |
| **Acquiring Bank CBS** | • Processes GL transfer and returns response to RAAST OC. |
| **RAAST OC** | • Logs transaction and initiates `MerchantandPaymentNotificationOffUs` to **Acquiring Services**. |
| **Acquiring Services** | • **Settlement Calculation:** Calculates Net Amount (Deducting FED + MDR). <br /> • Initiates `CreditAdviceOffUs` request to RAAST OC. |
| **RAAST OC** | • Sends final Fund Transfer Request (`strfundtransfer`) to Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Final Settlement:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Account. |
| **RAAST OC** | • Confirms success of `creditAdviceOffUs` to Acquiring Services. |
| **Acquiring Services** | • Sends final **Payment Successful** notification to the Merchant. |
| **Merchant** | • Receives final confirmation: **"Payment Processed Successfully."** |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/RTP-l-ofs-mp-ff.png)
</div>