# Request to Pay Now Payments

A payment method that allows a merchant to request an immediate payment from the customer, which is processed in real-time through RAAST, either for On-Us or Off-Us transactions.


## RTP Now On-us Transaction

Request to Pay onus is where both the customer and merchant are from the same acquiring bank, allowing for immediate settlement within the bank's network.

### Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects **RTP Now generate** option. <br /> • System generates an RTP Now request towards Acquiring Services. |
| **Acquiring Services** | • Receives the RTP Now request. <br /> • Initiates **Title Fetch (IBAN)** request to **RAAST OC**. |
| **RAAST OC** | • Sends Title Fetch request to Acquiring Bank CBS / RAAST. |
| **Acquiring Bank CBS** | • Shares Success Response back to RAAST OC for the Title Fetch Request. |
| **RAAST OC** | • **Validation:** Receives and validates the response from CBS. <br /> • **Response:** Returns the **Unique RTP ID** and Account Title to Acquiring Services. |
| **Acquiring Services** | • **Payload Generation:** Generates RTP-Now Payload with the Unique RTP ID. <br /> • **Initiation:** Sends the official RTP-Now request to **RAAST OC**. |
| **RAAST OC** | • **Pre-Processing:** Receives request and acknowledges back to Acquiring Services. <br /> • **Routing Logic:** <br /> &nbsp;&nbsp;o Validates the request and checks both IBANs (On-Us). <br /> &nbsp;&nbsp;o Creates **pain.13** (Request to Pay) message. <br /> • **Callback:** Calls the Method (RTP request) Callback API to the **Backend App**. |
| **Backend App** | • Receives and validates the RTP Request. <br /> • Ensures the customer is eligible to receive the request on digital channels. <br /> • Sends push notification/alert to the **Customer**. |
| **Customer** | • Receives the RTP Now notification. <br /> • Reviews and approves the request. <br /> • Performs transaction authentication. <br /> • Initiates the **RTP Now payment request**. |
| **Backend App** | • Receives payment request and calls Method (RTP Now) to **RAAST OC**. |
| **RAAST OC** | • Validates the request and verifies the **RTP ID**. <br /> • Initiates the **Funds Transfer (FT)** call to the Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Validation:** Checks Customer Limits and Status. <br /> • **Initial Settlement:** <br /> &nbsp;&nbsp;o **Debit:** Customer Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Payable GL Account. <br /> • Returns FT response to RAAST OC. |
| **Customer** | • Receives the **Payment Successful** message via the Mobile App. |
| **RAAST OC** | • Logs the successful transaction via **SAF** (Store and Forward). <br /> • Notifies the Backend App and calls `Notify Merchant` for **Acquiring Services**. |
| **Acquiring Services** | • Verifies Merchant Status and RTP ID. <br /> • Sends acknowledgement back to RAAST OC. |
| **RAAST OC** | • Sends `PaymentNotificationOnUs` to Acquiring Services. |
| **Acquiring Services** | • **Settlement Processing:** <br /> &nbsp;&nbsp;o Calculates Net Payment (**CreditAdviceOnUs**). <br /> &nbsp;&nbsp;o Debits the Merchant Payable Account. <br /> • Forwards `CreditAdviceOnUs` to RAAST OC. |
| **RAAST OC** | • Sends the final Funds Transfer Request (`strfundtransferdeposit`) to Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Final Credit:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Account. <br /> • Returns final response to RAAST OC. |
| **RAAST OC** | • Receives response and sends `CreditAdviceOnUs` success message to Acquiring Services. |
| **Acquiring Services** | • Notifies the Merchant that the payment has been processed successfully. |
| **Merchant** | • Receives the final confirmation of funds credit. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/QRos-pm-mp-ff.png)
</div>


## RTP Now Off-us Transaction

Request to pay offus is where the customer and merchant are from different acquiring banks, requiring the transaction to be processed via the RAAST network for interbank settlement.

### Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects **RTP-Now generate** option. <br /> • Initiates the RTP-Now request towards Acquiring Services. |
| **Acquiring Services** | • Receives the RTP-Now request. <br /> • Initiates **Title Fetch (IBAN/Alias)** request to **RAAST OC**. |
| **RAAST OC** | • Receives Title Fetch request. <br /> • Sends **TF-CAS** (Title Fetch Central Alias Management System) request to **RAAST SBP**. |
| **RAAST SBP** | • **Orchestration:** Acknowledges request to RAAST OC. <br /> • Forwards Title Fetch Request to the **Issuer/Other Bank CBS**. |
| **Issuer/Other Bank CBS** | • Receives fetch request from RAAST SBP. <br /> • Returns Success Response (Account Title) back to RAAST SBP. |
| **RAAST SBP** | • Forwards the account title success response back to **RAAST OC**. |
| **RAAST OC** | • Validates response from RAAST SBP. <br /> • Responds to Acquiring Services with the **Unique RTP ID** and Account Title. |
| **Acquiring Services** | • Generates RTP-Now Payload with the Unique RTP ID. <br /> • Initiates the final RTP-Now request to **RAAST OC**. |
| **RAAST OC** | • Receives request and sends **pain.13** (Request to Pay) to **RAAST SBP**. |
| **RAAST SBP** | • **Validation:** Checks RTP ID uniqueness and stores the record. <br /> • **Response:** Returns HTTP 200 Acknowledgement to RAAST OC. |
| **RAAST OC** | • Receives storage confirmation and notifies **Acquiring Services**. |
| **Issuer** | • **Discovery:** Fetches RTP-Now request (`get-mx`) from RAAST SBP. <br /> • **Customer Action:** Customer reviews and approves the request. <br /> • **Execution:** Sends **pacs.008** (RTP-Now) to RAAST SBP. |
| **RAAST SBP** | • Receives **pacs.008** and cross-references it against the **pain.13**. <br /> • Fetches **pacs.002 (ACSP)** via `get-mx`. <br /> • Sends acknowledgement of ACSP to the Issuer. |
| **Issuer** | • Receives final acknowledgements and processes the customer's **Debit Authorization**. |
| **RAAST OC** | • Fetches **pacs.14** (Authorization) from RAAST SBP. <br /> • Identifies sender BIC as **Non-Acquiring Bank** (Off-Us). <br /> • Validates RTP ID and initiates "Notify Merchant" to **Acquiring Services**. |
| **Acquiring Services** | • Checks Merchant Status and RTP ID. <br /> • Triggers notification to the **Merchant** and sends success back to RAAST OC. |
| **RAAST OC** | • Fetches **CB.pacs.008** from RAAST SBP. <br /> • **Inter-Bank Settlement (Step 1):** <br /> &nbsp;&nbsp;o Initiates FT Call to Acquiring Bank CBS (GL to GL). <br /> &nbsp;&nbsp;o **Debit:** RAAST GL / **Credit:** Merchant Payable GL. |
| **Acquiring Bank CBS** | • Processes GL transfer and sends response to RAAST OC. |
| **RAAST OC** | • Logs transaction and initiates `MerchantandPaymentNotificationOffUs` to **Acquiring Services**. |
| **Acquiring Services** | • **Calculation:** Calculates Net Amount (Deducting FED + MDR). <br /> • **Instruction:** Initiates `CreditAdviceOffUs` request to RAAST OC. |
| **RAAST OC** | • Sends final Funds Transfer Request (`strfundtransfer`) to Acquiring Bank CBS. |
| **Acquiring Bank CBS** | • **Final Settlement:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL. <br /> &nbsp;&nbsp;o **Credit:** Merchant Account. |
| **RAAST OC** | • Sends `creditAdviceOffUs` success confirmation to Acquiring Services. |
| **Acquiring Services** | • Receives success and sends the final **Payment Successful** notification to the Merchant. |
| **Merchant** | • Receives final notification: **"Payment Processed Successfully."** |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/RTP-n-ofs-mp-ff.png)
</div>