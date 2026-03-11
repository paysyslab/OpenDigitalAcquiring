# Register Merchant - (Onboarded Merchants)

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **User (Splash Screen)** | • Splash Screen appears with two options: **Sign In** and **Register**. <br /> • User selects **Register**. |
| **User (Terms & Conditions)** | • User is directed to the registration flow. <br /> • Displays Terms & Conditions; User must **Accept** to proceed. |
| **User (Identity Details)** | • User inputs **Title** (Dropdown), **Name**, and **CNIC**. <br /> • User clicks **'Continue'**. <br /> • **Backend Check (`checkcustomer`):** <br /> &nbsp;&nbsp;o Validates CNIC format. <br /> &nbsp;&nbsp;o If CNIC exists: Throws error "Customer Already Exists, please try to Login". <br /> &nbsp;&nbsp;o If CNIC is new: Proceeds to the next step. |
| **User (Mobile Entry)** | • User enters **Mobile Number** (Format: 3xx-123xxxx). <br /> • User clicks **'Continue'**. |
| **OTP Generation & Dispatch** | • **App Service:** Generates and stores OTP; calls **Open Connect**. <br /> • **Open Connect:** <br /> &nbsp;&nbsp;o Validates request and token. <br /> &nbsp;&nbsp;o Queues the notification and calls the **SMS Gateway API**. <br /> • **SMS Gateway:** Delivers the OTP to the user's mobile device. |
| **OTP Verification** | • OTP is auto-fetched on the mobile device. <br /> • **App Service:** <br /> &nbsp;&nbsp;o Validates the verification request. <br /> &nbsp;&nbsp;o Verifies OTP; on success, performs **Device Binding**. <br /> • User is taken to the next screen. |
| **User (PIN Setup)** | • User inputs a **4-Digit Login PIN** and re-types it to confirm. <br /> • User clicks **'Continue'**. |
| **PIN Storage & Finalization** | • **App Service (`Set PIN` Method):** <br /> &nbsp;&nbsp;o Validates PIN format. <br /> &nbsp;&nbsp;o Checks against history (must not match the **Last 5 PINs**). <br /> • **Outcome:** <br /> &nbsp;&nbsp;o Stores the new PIN. <br /> &nbsp;&nbsp;o Responds with Success to the app. |
| **App / UI** | • App displays a **Success Message**. <br /> • Automatically routes the merchant to the **Login Page**. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/ma-r.png)
</div>