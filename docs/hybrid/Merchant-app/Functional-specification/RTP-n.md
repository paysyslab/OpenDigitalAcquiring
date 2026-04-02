# Request to Pay Now Payment

## Functional Flow


| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects **RTP-Now** generate option. <br /> • System initiates the request towards Acquiring Services. |
| **Acquiring Services** | • Receives request and initiates **Title Fetch (IBAN/Alias)** via **RAAST OC**. |
| **RAAST OC** | • Sends **TF-CAS** (Title Fetch) request to **RAAST SBP**. |
| **RAAST SBP** | • Acknowledges RAAST OC and forwards the Title Fetch request to the **Acquiring Bank/FBL CBS**. |
| **ACQUIRING BANK CBS** | • Processes the request and returns the Success Response (Account Title) to RAAST SBP. |
| **RAAST SBP** | • Forwards the title success response back to **RAAST OC**. |
| **RAAST OC** | • Validates the response and returns a **Unique RTP ID** and Title to Acquiring Services. |
| **Acquiring Services** | • Generates the RTP-Now Payload with the Unique ID and initiates the final request to **RAAST OC**. |
| **RAAST OC** | • Receives request and sends the **pain.13** (Request for Payment) to **RAAST SBP**. |
| **RAAST SBP** | • **Validation:** Checks RTP ID uniqueness and stores it. <br /> • Returns HTTP 200 Acknowledgement to RAAST OC. |
| **RAAST OC** | • Confirms storage to Acquiring Services. |
| **Issuer (Customer Bank)** | • Fetches the RTP-Now request (`get-mx`) from RAAST SBP. <br /> • **Customer Action:** Customer approves the request and initiates payment. <br /> • **Execution:** Sends **pacs.008** (Credit Transfer) to RAAST SBP. |
| **RAAST SBP** | • Matches **pacs.008** against **pain.13**. <br /> • Fetches **pacs.002 (ACSP)** and acknowledges receipt to the Issuer. |
| **Issuer** | • Processes the customer's **Debit Authorization**. |
| **RAAST OC** | • Fetches **pacs.14** from RAAST SBP. <br /> • Identifies the non-Acquiring Bank BIC (Off-Us). <br /> • Initiates "Notify Merchant" call to **Acquiring Services**. |
| **Acquiring Services** | • Verifies Merchant Status and RTP ID. <br /> • Notifies the Merchant and sends success back to RAAST OC. |
| **RAAST OC (Settlement)** | • Fetches **CB.pacs.008** from RAAST SBP. <br /> • **Clearing:** Initiates Fund Transfer to **ACQUIRING BANK CBS** (GL to GL). <br /> &nbsp;&nbsp;o **Debit:** RAAST GL <br /> &nbsp;&nbsp;o **Credit:** Merchant Payable GL. |
| **ACQUIRING BANK CBS** | • Processes GL transfer and returns response to RAAST OC. |
| **RAAST OC** | • Logs the transaction and sends `MerchantandPaymentNotificationOffUs` to Acquiring Services. |
| **Acquiring Services** | • **Calculations:** Calculates Net Amount (Deducting FED + MDR). <br /> • Initiates `CreditAdviceOffUs` request to RAAST OC. |
| **RAAST OC** | • Sends the final Funds Transfer instruction to **ACQUIRING BANK CBS**. |
| **ACQUIRING BANK CBS** | • **Final Credit:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL. <br /> &nbsp;&nbsp;o **Credit:** Merchant Account. |
| **RAAST OC** | • Returns Success confirmation to Acquiring Services. |
| **Acquiring Services** | • Sends the final **Payment Successful** notification to the Merchant. |
| **Merchant** | • Receives final confirmation: **"Payment Processed Successfully."** |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/RTP-n-ofs-ma-ff.png)
</div>