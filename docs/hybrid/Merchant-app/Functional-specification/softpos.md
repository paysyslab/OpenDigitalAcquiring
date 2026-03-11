# SoftPOS Payment 

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant App** | • **Initiation:** Merchant selects the **SoftPOS** option within the application. |
| **App Service** | • **Validation:** Merchant credentials and profile are validated. <br /> • **Provisioning:** App Service sends an **SDK Initialization Token** to the Merchant App. <br /> • **Device Audit:** Calls `GetToken` (Session Token) and `GetDeviceInfo` to capture hardware metadata. |
| **Merchant App** | • **SDK Setup:** Uses the provided token to initialize the SoftPOS SDK. |
| **SDK** | • **Transaction Start:** Initiates the SoftPOS transaction logic. <br /> • **Security:** Validates the terminal environment and processes the request. <br /> • **Messaging:** Generates and sends an **ISO8583 message** to the POS Acquiring Services. |
| **POS Acquiring Service** | • **Tracking:** Generates **RRN** (Retrieval Reference Number) and **STAN** (System Trace Audit Number). <br /> • **Heartbeat:** Sends an **Echo Message** to the scheme every 30 seconds to maintain an active link. <br /> • **Routing:** Forwards the ISO8583 message to the relevant card scheme. |
| **Scheme** | • **Check:** Validates the Card, PIN, and available Balance. <br /> • **Verification:** Forwards the ISO8583 message to the **Issuer Bank** for final card verification. |
| **Issuer** | • **Authorization:** Validates the transaction and responds back to the Scheme with an ISO8583 message. |
| **Scheme** | • Relays the Issuer's response back to the **POS Acquiring Service**. |
| **POS Acquiring Service** | • **Status Capture:** Forwards the response back to the SDK. <br /> • **Field 39:** The response includes **ISO8583 Field 39**, which contains the specific result code for the transaction. |
| **SDK** | • **Final Relay:** Sends the final response back to the Merchant App. <br /> • **Outcome:** Based on the response code, the transaction is marked as Success or Failure. |
| **Merchant App** | • **Notification:** Displays the final transaction status to the Merchant. |
| **SDK (Exception)** | • **Reversal Logic:** If a **timeout** occurs at any point during the handshake, the SDK automatically triggers the **Reversal Process** to prevent mismatched balances. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/hybrid/softpos/ff-sp1.png)
</div>