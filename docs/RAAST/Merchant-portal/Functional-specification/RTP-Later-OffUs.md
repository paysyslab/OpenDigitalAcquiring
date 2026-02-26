# Request To Pay Later On-us Transaction

## Functional Flow


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