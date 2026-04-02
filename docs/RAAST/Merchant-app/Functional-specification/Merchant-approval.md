# Backoffice Approval of Merchants

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **MMS Backoffice (Maker)** | • Application lands in the Backoffice after Tracking ID generation. <br /> • **Maker** processes the application and moves it to the Banker stage. <br /> • Banker initiates the **PMD (Mobile Number)** verification service. |
| **MMS Services & OC** | • Request is routed through MMS Services to **MMS Open Connect (OC)**. <br /> • OC validates the request and calls the PMD service for CNIC-Mobile mapping. |
| **PMD (3rd Party)** | • **Verification:** Validates if the Mobile Number is registered against the provided CNIC. <br /> • **Response:** Returns success if records match perfectly. |
| **MMS OC & Services** | • Receives success from PMD and forwards the status to the MMS Services. |
| **MMS Backoffice (UI)** | • **Success:** PMD status is shown as "Verified" on the screen. <br /> • **Error:** If failure occurs, the application is blocked and status shows "Not Verified". |
| **MMS Backoffice (Banker)** | • Once PMD is verified, the Banker calls the **Account Opening** method via MMS OC. |
| **MMS OC** | • Validates the request. <br /> • Calls **ACQUIRING BANK Account Opening API** for real-time merchant account creation. |
| **Acquiring Bank Services** | • **Account Provisioning:** Stores merchant details and creates a profile. <br /> • **Response:** Returns the newly generated **IBAN/Account Number**. |
| **MMS OC & Services** | • **Data Binding:** Stores the IBAN against the Merchant's Tracking ID. <br /> • **Synchronization:** Forwards the account details to the App Services. <br /> • **Failure Case:** If API fails, status shows "Account Not Created/IBAN Not Assigned". |
| **MMS Backoffice (Approver)** | • Screen displays "Account Successfully Created". <br /> • Application moves to the **Final Approver** stage. <br /> • Approver clicks **Approve**, and the merchant is officially onboarded. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/ma-a-ff.png)
</div>