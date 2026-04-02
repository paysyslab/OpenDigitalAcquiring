# DQRC Payment

## Functional Flow


| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • **DQRC Generation:** Merchant selects the DQRC generate option. <br /> • A request is generated to create the DQRC string. |
| **Acquiring Services** | • Receives the request and initiates the DQRC call to **RAAST OC**. |
| **RAAST OC** | • Validates the request. <br /> • Creates a **pain.13** (Request to Pay) message with a **Unique RTP ID**. <br /> • Shares the `pain.13` message with **RAAST SBP**. |
| **RAAST SBP** | • **Validation:** Checks the uniqueness of the RTP ID and stores it. <br /> • Responds with **HTTP 200 Acknowledgement** to RAAST OC. |
| **RAAST OC** | • Receives acknowledgement that RTP is stored. <br /> • Confirms the status to Acquiring Services. |
| **Issuer (Customer Bank)** | • **Scanning:** Issuer scans the DQRC string. <br /> • **Validation:** Validates the string. <br /> • **Payment Initiation:** Sends a payment request (**CB.pacs.008**) to RAAST SBP. |
| **RAAST SBP** | • Receives `pacs.008` and acknowledges the Issuer (HTTP 200). <br /> • Fetches **ACSP (pacs.002)** status and confirms receipt to the Issuer. |
| **Issuer** | • Receives the acknowledgements (`pacs.008` & `pacs.002`). <br /> • Processes the **Debit Authorization** for the customer. |
| **RAAST OC** | • Fetches status from RAAST SBP. <br /> • **Off-Us Detection:** Identifies that the Sender BIC is **Non-ACQUIRING BANK**. <br /> • Initiates a "Notify Merchant" call to Acquiring Services. |
| **Acquiring Services** | • Receives notification. <br /> • **Validation:** Checks Merchant Status and RTP ID. <br /> • Sends a success response back to RAAST OC. <br /> • **Notification:** Merchant receives an In-App Notification. |
| **RAAST OC (Settlement)** | • Fetches the **CB.pacs.008** from RAAST SBP. <br /> • **Clearing Call:** Initiates Fund Transfer to **ACQUIRING BANK CBS** (GL to GL). <br /> &nbsp;&nbsp;o **Debit:** RAAST GL Account <br /> &nbsp;&nbsp;o **Credit:** Merchant Payable GL Account |
| **ACQUIRING BANK CBS** | • Processes the GL transfer and sends the response back to RAAST OC. |
| **RAAST OC** | • Logs the transaction on success. <br /> • Sends `MerchantandPaymentNotificationOffUs` request to Acquiring Services. |
| **Acquiring Services** | • Acknowledges the notification request. <br /> • **Netting:** Calculates the Net Amount for the merchant (Deducting **FED + MDR**). <br /> • Initiates `CreditAdviceOffUs` request to RAAST OC. |
| **RAAST OC** | • Sends the final Fund Transfer Request to **ACQUIRING BANK CBS**. |
| **ACQUIRING BANK CBS** | • **Final Credit:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL Account <br /> &nbsp;&nbsp;o **Credit:** Merchant Actual Account <br /> • Sends success response to RAAST OC. |
| **RAAST OC** | • Receives success response. <br /> • Sends `CreditAdviceOffUs` success status to Acquiring Services. |
| **Acquiring Services** | • Sends the **Payment Successful Notification** to the Merchant. |
| **Merchant** | • Receives the final confirmation: **"Payment Processed Successfully"**. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/ma-dqrc-ff.png)
</div>
