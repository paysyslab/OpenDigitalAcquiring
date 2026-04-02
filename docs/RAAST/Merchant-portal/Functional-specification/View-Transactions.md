# View Transactions

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant Portal** | • The Merchant Portal sends a `Get Transaction Request` to Merchant Portal Services. <br /> • Includes the **Merchant ID** as a mandatory parameter. |
| **Merchant Portal Services** | • **Authentication:** Authenticates the request using the provided token. <br /> • **Forwarding:** Forwards the call to Acquiring Services (RAAST) along with the **Client ID**. |
| **Acquiring Services (RAAST)** | • **Validation:** <br /> &nbsp;&nbsp;o Validates API parameters and ensures the Merchant ID is valid. <br /> • **Lookup:** <br /> &nbsp;&nbsp;o Checks for any transactions associated with the Merchant ID. <br /> • **Conditional Logic:** <br /> &nbsp;&nbsp;o **If Transactions Exist:** Retrieves transactions and their statuses; sends data to Merchant Portal Services. <br /> &nbsp;&nbsp;o **If No Transactions Found:** Returns an error indicating "Transactions don't exist". |
| **Merchant Portal / UI** | • **Success State:** Displays the list of transactions and their current status. <br /> • **Error State:** Displays the message "Transactions don't exist" if the response returns a null/error state. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/vmt-mp-ff.png)
</div>
