# DQRC Off-us Transaction

## Functional Flow

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