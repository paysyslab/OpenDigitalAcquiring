# Request to Pay Later Payment

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant** | • Selects the **RTP-Later** option. <br /> • Initiates the request toward Acquiring Services. |
| **Acquiring Services** | • Receives the request. <br /> • Initiates a **Title Fetch (IBAN/Alias)** request to RAAST OC. |
| **RAAST OC & SBP** | • RAAST OC sends the Title Fetch (**TF-CAS**) request to RAAST SBP. <br /> • SBP acknowledges the request and forwards it to the **Acquiring Bank CBS**. |
| **Acquiring Bank CBS** | • Receives the Title Fetch request and responds with the **Account Title** success response to RAAST SBP. |
| **RAAST OC** | • Receives and validates the success response from SBP. <br /> • Responds to Acquiring Services with the **Unique RTP ID** and Account Title. |
| **Acquiring Services** | • Generates the RTP-Later payload using the Unique RTP ID. <br /> • Initiates the final RTP-Later request to RAAST OC. |
| **RAAST OC & SBP** | • RAAST OC sends the **pain.13** (Request for Payment) message to RAAST SBP. <br /> • SBP validates the request, checks RTP ID uniqueness, stores the ID, and sends a **200 OK** acknowledgement. |
| **Issuer (Customer Bank)** | • Issuer fetches the RTP-Later request (`get-mx`) from RAAST SBP. <br /> • **Customer Action:** Customer approves the request and initiates the payment. <br /> • **Execution:** Issuer sends **pacs.008** (Credit Transfer) to RAAST SBP. |
| **RAAST SBP** | • Matches the `pacs.008` against the original `pain.13`. <br /> • Fetches and shares the **pacs.002 (ACSP)** acknowledgement with the Issuer. |
| **Issuer** | • Receives acknowledgements and processes the customer's **Debit Authorization**. |
| **RAAST OC** | • Fetches **pacs.14** from SBP and identifies the transaction as **Off-Us** (different BIC). <br /> • Initiates the **Notify Merchant** call to Acquiring Services and validates the RTP ID. |
| **Acquiring Services** | • Receives notification, checks Merchant status, and notifies the Merchant (In-App). <br /> • Sends a success response back to RAAST OC. |
| **Settlement (RAAST OC)** | • Fetches the final **pacs.008** from SBP. <br /> • **Clearing:** Initiates Fund Transfer to Acquiring Bank CBS. <br /> &nbsp;&nbsp;o **Debit:** RAAST GL Account. <br /> &nbsp;&nbsp;o **Credit:** Merchant Payable GL Account. |
| **Netting (Acquiring Services)**| • Receives payment notification from RAAST OC. <br /> • **Deductions:** Calculates the Net Amount after applying **FED + MDR**. <br /> • Initiates the `CreditAdviceOffUs` request to RAAST OC. |
| **Final Credit (CBS)** | • RAAST OC sends the final Fund Transfer request to CBS. <br /> • **Merchant Account Credit:** <br /> &nbsp;&nbsp;o **Debit:** Merchant Payable GL. <br /> &nbsp;&nbsp;o **Credit:** Actual Merchant Account. |
| **Completion** | • Acquiring Services receives success confirmation from RAAST OC. <br /> • Sends the **Payment Successful** notification to the Merchant. |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/RTP-l-ofs-ma-ff.png)
</div>