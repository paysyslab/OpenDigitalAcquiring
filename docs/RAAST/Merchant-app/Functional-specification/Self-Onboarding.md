# Self-Merchant Onboarding

## Functional Flow


| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant (Logged In)** | • User attempts to access financial features. <br /> • System displays a popup: "Are you an existing ACQUIRING BANK account holder?". <br /> • Merchant selects **'Yes'**. |
| **App Service** | • Validates the request. <br /> • Initiates a **Merchant Account Verification** request via **Open Connect**. |
| **Open Connect (OC)** | • Validates the request and token. <br /> • Forwards the verification request to **CBS Services** using the Merchant's **CNIC** and account identifier. |
| **Acquiring Bank Services** | • Validates request and merchant identity. <br /> • **Lookup:** Searches for accounts tied to the CNIC. <br /> • Returns the list of available merchant account(s) to Open Connect. |
| **Open Connect (OC)** | • Receives the account list and forwards the response to the App Services. |
| **App Services** | • **Success:** Forwards the list of accounts to the frontend. <br /> • **Failure:** If no accounts are found, returns an error message to the user. |
| **Merchant App (UI)** | • Displays account(s) on screen. <br /> • For multiple accounts, provides a **Radio Button** selection. <br /> • Merchant selects the preferred account and submits. |
| **App Services (Finalization)** | • **Data Persistence:** Stores the selected Account Number/IBAN against the merchant profile. <br /> • **Upgrade:** Marks the customer status as **Verified/Upgraded**. <br /> • Returns a Success response. |
| **Merchant App** | • Displays success confirmation. <br /> • **Requirement:** Notifies the merchant that financial features will be enabled upon **re-login**. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/etb-ob-ff.png)
</div>