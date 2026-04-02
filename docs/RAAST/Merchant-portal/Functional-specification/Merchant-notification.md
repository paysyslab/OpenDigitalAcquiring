# Merchant Notification

## Functional Flow


| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Acquiring Services (RAAST)** | • The payment transaction is successfully processed. <br /> • Initiates a `NotifyMerchant` request to Merchant Portal Services. |
| **Merchant Portal Services** | • **Processing:** <br /> &nbsp;&nbsp;o Receives `NotifyMerchant` request with the MerchantID. <br /> &nbsp;&nbsp;o Extracts merchant details based on the MerchantID. <br /> • **Communication:** <br /> &nbsp;&nbsp;o Dispatches an In-App Notification to the Merchant Portal. |
| **Merchant Portal** | • The Merchant Portal displays the successful transaction status on the screen in real-time. |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/pn-ff.png)
</div>

## Negative Case

### Payment Declined

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Acquiring Services (RAAST)** | • The payment transaction is declined (e.g., insufficient funds, account restrictions). <br /> • Sends a `NotifyMerchant` request to Merchant Portal Services. <br /> • **Payload:** Includes the MerchantID and the specific **Reason Code** for the decline. |
| **Merchant Portal Services** | • **Processing:** Extracts merchant details via the MerchantID. <br /> • **Communication:** Sends an In-App Notification containing the decline details and the specific failure reason. |
| **Merchant Portal** | • Displays the transaction status as **Declined**. <br /> • Shows the specific reason (e.g., "Insufficient Funds") so the merchant can assist the customer or identify the issue. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/pn-ff-nc.png)
</div>