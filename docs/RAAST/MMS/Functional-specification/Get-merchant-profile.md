

# Get Merchant Profile


## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Backoffice** | • Backoffice User Logs In. <br /> • Backend User enters Merchant ID to get merchant profile. |
| **Backend Services** | • Authenticates Token and forwards call with Client ID. <br /> • Requests Title Fetch with Merchant IDs to Acquiring Services (RAAST). |
| **Acquiring Services (RAAST)** | • Validates the API Parameters. <br /> • In case parameters are missing, it will return the rejection with “Invalid Params” to Backend Services. <br /> • In case of valid API params, it will check and validate if Merchant ID already exists: <br /> • If Merchant ID exists, it will Get the merchant profile and return “OK” response to Backend Services. <br /> • In case Merchant ID does not exist, it will return rejection to the API Gateway. |
| **Backoffice** | • Backend Services receives the relevant response from Acquiring Services (RAAST) and replies to the Backoffice User. <br /> • Response with Details is shown on the UI. |


<div style={{ textAlign: 'center'}}>
  ![Get Merchant Profile - Sequence Diagram](/img/get-merchant-pr-ff.png)
</div>
