# Request To Pay Now Off-us Transaction

## Functional Flow

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