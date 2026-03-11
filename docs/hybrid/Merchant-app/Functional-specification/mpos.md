# mPOS Payment

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant App** | • **Initiation:** Merchant initiates the mPOS transaction toward the App Service. |
| **App Service** | • **Validation:** Validates merchant information. <br /> • **Sale API:** Executes a Sale API call, sending transaction data to the mPOS Service. |
| **mPOS Service** | • **Message Conversion:** Converts transaction data into an **ISO8583 standard message**. <br /> • **Transmission:** Sends the ISO8583 message to the POS Acquiring Service. |
| **POS Acquiring Service** | • **Identifiers:** Generates **RRN** (Retrieval Reference Number) and **STAN** (System Trace Audit Number). <br /> • **Validation:** Validates the merchant and transaction request. <br /> • **Maintenance:** Sends an **Echo Message** to the scheme every 30 seconds to maintain connectivity. <br /> • **Forwarding:** Sends the ISO8583 message to the relevant card scheme (Visa/Mastercard/PayPak). |
| **Scheme** | • **Verification:** Validates Card, PIN, and Balance. <br /> • **Routing:** Sends the ISO8583 message to the Issuer for card verification. |
| **Issuer** | • **Authorization:** Validates the card and sends the response back to the scheme via ISO8583 message. |
| **Scheme** | • Receives the response from the Issuer and responds back to the POS Acquiring Service. |
| **POS Acquiring Service** | • **Response Processing:** Sends the response back to the mPOS Service. <br /> • **Status Mapping:** Includes **ISO8583 Field 39**, which contains the response code for the transaction status. |
| **mPOS Service** | • **Relay:** Sends the response back to the App Service using the ISO8583 response code. <br /> • **Logic:** Determines if the transaction is successful or failed based on the code. |
| **App Service** | • Forwards the ISO8583 response code back to the Merchant App. |
| **Merchant App** | • **Notification:** Notifies the merchant of the final status (Successful or Failed). |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/hybrid/mpos/ff-mpos1.png)
</div>
