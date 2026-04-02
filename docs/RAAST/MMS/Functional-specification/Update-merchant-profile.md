# Merchant Profile Updation

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :----- | :------ |
| **Backoffice** | • Backoffice User Logs In. <br /> • User uploads the Bulk Merchants Files to system. |
| **Backend Services** | • Backend Services verify the users whose profile is to be updated using the Update or U Parameter in the action column. <br /> • Backend Services requests Title Fetch with Merchant IDs to Acquiring Services (RAAST). |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Acquiring Services (RAAST) validates the API Parameters. <br /> • In case parameters are missing, it will return the rejection with “Invalid Params” to Backend Services. <br /> • In case of valid API params, it will check and validate if Merchant ID already exists. <br /> • If Merchant ID exists, it will proceed further with profile updates (BIC/IBAN, Title fetch, etc.). <br /> • If Merchant ID does not exist, it will return rejection. |
| **Backoffice Services** | • Backoffice Services receives the relevant response from Acquiring Services (RAAST) and stores the status/response to be shown to the Backoffice user. |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/Bulk-merchant-up-ff.png)
</div>


## Negative Cases

### Invalid Parameter Values 

| **Requester Action(s)** | **Process Description** |
| : | : |
| **Backoffice** | • Backoffice submits a batch file containing merchant profile data for updating. |
| **Backoffice Services** | • Backoffice Services picks the row containing the update parameter. <br /> • Backoffice Services authenticates the request and forwards it to Acquiring Services (RAAST) with an authentication token and client ID. <br /> • Backoffice Services sends the UpdateMerchantProfile request with MerchantID to Acquiring Services (RAAST). <br /> • Backoffice Services informs Backoffice of the invalid parameter’s rejection. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Acquiring Services (RAAST) responds with a success message to Backoffice Services. <br /> • If the parameters are invalid, Acquiring Services (RAAST) sends a rejection for invalid parameters back to Backoffice Services. |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/Bulk-merchant-up-nc-ff-1.png)
</div>




### Mandatory Parameter Missing 

| **Requester Action(s)** | **Process Description** |
| : | : |
| **Backoffice** | • Backoffice submits a batch file containing merchant profile data for updating. |
| **Backoffice Services** | • Backoffice Services picks the row containing the update parameter. <br /> • Backoffice Services authenticates the request and forwards it to Acquiring Services (RAAST) with an authentication token and client ID. <br /> • Backoffice Services informs Backoffice of the missing mandatory parameter rejection. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Acquiring Services (RAAST) responds with a success message to Backoffice Services. <br /> • If a mandatory parameter is missing in the request, Acquiring Services (RAAST) sends a rejection for the missing parameter back to Backoffice Services. |


<div style={{ textAlign: 'center'}}>
  ![Mandatory Parameter Missing Sequence Diagram](/img/Bulk-merchant-up-nc-ff-2.png)
</div>



### Merchant Does Not Exist

| **Requester Action(s)** | **Process Description** |
| : | : |
| **Backoffice** | • Backoffice submits a batch file containing merchant profile data for updating. |
| **Backoffice Services** | • Backoffice Services picks the row containing the update parameter. <br /> • Backoffice Services authenticates the request and forwards it to Acquiring Services (RAAST) with an authentication token and client ID. <br /> • Backoffice Services then sends the UpdateMerchantProfile request with MerchantID to Acquiring Services (RAAST). <br /> • Backoffice Services informs Backoffice about the rejection. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Acquiring Services (RAAST) responds with a success message to Backoffice Services for the authentication step. <br /> • If the provided MerchantID does not exist in the system, Acquiring Services (RAAST) sends a rejection message stating that the merchant ID does not exist. |


<div style={{ textAlign: 'center'}}>
  ![Merchant Does Not Exist Sequence Diagram](/img/Bulk-merchant-up-nc-ff-3.png)
</div>



### Merchant Account Title Does Not Match 

| **Requester Action(s)** | **Process Description** |
| : | : |
| **Backoffice** | • Backoffice submits a batch file to update the IBAN or account title for a merchant profile. |
| **Backoffice Services** | • Backoffice Services picks the row containing the update parameter. <br /> • Backoffice Services authenticates the request and forwards it to Acquiring Services (RAAST) with the necessary token and client ID. <br /> • Backoffice Services sends the UpdateMerchantProfile request with MerchantID, IBAN, and Title to Acquiring Services (RAAST). <br /> • Backoffice Services informs Backoffice of the rejection due to the account title mismatch. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Acquiring Services (RAAST) responds with a success message for the authentication step. <br /> • Acquiring Services (RAAST) requests the account title from Raast CAS Services for the provided IBAN and BIC. <br /> • If the returned account title does not match the title provided in the request, Acquiring Services (RAAST) rejects the request with an account title mismatch message. |
| **Raast CAS Services** | • Raast CAS Services returns the account title. |


<div style={{ textAlign: 'center'}}>
  ![Merchant Account Title Mismatch Sequence Diagram](/img/Bulk-merchant-up-nc-ff-4.png)
</div>



### Title Fetch Failed – Invalid IBAN 

| **Requester Action(s)** | **Process Description** |
| : | : |
| **Backoffice** | • Backoffice submits a batch file to update the IBAN or account title for a merchant profile. |
| **Backoffice Services** | • Backoffice Services picks the row containing the update parameter. <br /> • Backoffice Services sends the UpdateMerchantProfile request with MerchantID, IBAN, and Title to Acquiring Services (RAAST). <br /> • Backoffice Services forwards the rejection to Backoffice. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Backoffice Services authenticates the request and forwards it to Acquiring Services (RAAST) with the necessary token and client ID. <br /> • Acquiring Services (RAAST) requests the account title from Raast CAS Services for the provided IBAN and BIC. <br /> • Acquiring Services (RAAST) rejects the request with an Invalid IBAN message and sends this response to Backoffice Services. |
| **Raast CAS Services** | • Acquiring Services (RAAST) responds with a success message for the authentication step. <br /> • Raast CAS Services detects the IBAN as invalid and returns an error to Acquiring Services (RAAST). |


<div style={{ textAlign: 'center'}}>
  ![Invalid IBAN Sequence Diagram](/img/Bulk-merchant-up-nc-ff-5.png)
</div>



### Title Fetch Failed – Other Restriction on Account 

| **Requester Action(s)** | **Process Description** |
| : | : |
| **Backoffice** | • Backoffice submits a batch file to update the IBAN or account title for a merchant profile. |
| **Backoffice Services** | • Backoffice Services picks the row containing the update parameter. <br /> • Backoffice Services authenticates the request and forwards it to Acquiring Services (RAAST) with the necessary token and client ID. <br /> • Backoffice Services sends the UpdateMerchantProfile request with MerchantID, IBAN, and Title to Acquiring Services (RAAST). <br /> • Backoffice Services forwards the rejection to Backoffice. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Acquiring Services (RAAST) responds with a success message for the authentication step. <br /> • Acquiring Services (RAAST) requests the account title from Raast CAS Services for the provided IBAN and BIC. <br /> • Acquiring Services (RAAST) rejects the request with a restriction on account message and sends this response to Backoffice Services. |
| **Raast CAS Services** | • Raast CAS Services identifies another restriction on the account and returns an error to Acquiring Services (RAAST). |


<div style={{ textAlign: 'center'}}>
  ![Account Restriction Sequence Diagram](/img/Bulk-merchant-up-nc-ff-6.png)
</div>



### Title Fetch Failed – Timeout from Bank 

| **Requester Action(s)** | **Process Description** |
| : | : |
| **Backoffice** | • Backoffice submits a batch file to update the IBAN or account title for a merchant profile. <br /> • Backoffice Services informs Backoffice about the rejection. |
| **Backoffice Services** | • Backoffice Services picks the row containing the update parameter. <br /> • Backoffice Services authenticates the request and forwards it to Acquiring Services (RAAST) with the necessary token and client ID. <br /> • Backoffice Services sends the UpdateMerchantProfile request with MerchantID, IBAN, and Title to Acquiring Services (RAAST). |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • Acquiring Services (RAAST) responds with a success message for the authentication step. <br /> • Acquiring Services (RAAST) requests the account title from OC CAS Services for the provided IBAN and BIC. <br /> • The error propagates back through OC CAS Services to Acquiring Services (RAAST). <br /> • Acquiring Services (RAAST) rejects the request due to a timeout from the bank and sends the rejection to Backoffice Services. |
| **OC CAS Services** | • OC CAS Services forwards the title fetch request to RAAST OC, which then sends it to RAAST (the bank). |
| **RAAST OC** | • A timeout occurs at the bank, and RAAST responds with an error to RAAST OC. |


<div style={{ textAlign: 'center'}}>
  ![Timeout from Bank Sequence Diagram](/img/Bulk-merchant-up-nc-ff-7.png)
</div>


### Business Logic Fail – Fee Higher than Maximum Threshold 

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Backoffice User** | • **Login:** Backoffice User logs into the portal. <br /> • **File Upload:** User uploads the Bulk Merchant File containing profile updates to the system. |
| **Backend Services** | • **Action Verification:** System scans the action column for the "Update" or "U" parameter to identify profiles requiring modification. <br /> • **Initiation:** Backend Services trigger a **Title Fetch** request with Merchant IDs to the Acquiring Services (RAAST). |
| **Acquiring Services & RAAST CAS** | • **Parameter Validation:** Validates API parameters. If any are missing, returns "Invalid Params" rejection to Backend Services. <br /> • **Merchant Verification:** Checks if the Merchant ID exists in the system. <br /> • **Execution:** <br /> &nbsp;&nbsp;o **If Exists:** Proceeds with profile updates (BIC/IBAN updates, Title Fetch, etc.). <br /> &nbsp;&nbsp;o **If Not Found:** Returns a rejection response. |
| **Backoffice Services** | • **Response Handling:** Receives the final status from Acquiring Services (RAAST). <br /> • **Logging:** Stores the status/response in the database to be displayed on the Backoffice User’s dashboard. |


<div style={{ textAlign: 'center'}}>
  ![Update Merchant Profile - Business Logic Fail - Fee Higher than Maximum Threshold](/img/Bulk-merchant-up-nc-ff-8.png)
</div>
