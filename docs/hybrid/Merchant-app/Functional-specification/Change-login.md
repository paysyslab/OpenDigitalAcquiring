# Change/Forgot Login

## Change Login Pin - Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **User (Navigation)** | • **Login:** User logs into the App. <br /> • **Menu Selection:** User clicks the Hamburger menu and selects **Settings**. |
| **User (Selection)** | • User clicks on the **Change Login PIN** option. |
| **User (Input)** | • User is prompted to enter: <br /> &nbsp;&nbsp;o **Current PIN** <br /> &nbsp;&nbsp;o **New PIN** (Entered twice for confirmation) <br /> • User clicks **Continue**. |
| **App Service (Validation)** | • Mobile App calls the `SetPIN` Method. <br /> • **History Check:** Validates that the New PIN does not match the **Last 5 PINs** (Password History). <br /> • **Security Action:** App Service **disables the user's fingerprint/biometric login** in the database to enforce security. |
| **App / UI** | • **Success:** User is shown the "PIN Changed Successfully" screen. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/cp-ff.png)
</div>

## Forgot Login Pin - Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **User (Initiation)** | • User is on the Login Screen. <br /> • User clicks the **Forgot Login PIN** button. |
| **User (Identity Verification)** | • User is asked to provide: <br /> &nbsp;&nbsp;o **CNIC** <br /> &nbsp;&nbsp;o **Mobile Number** <br /> &nbsp;&nbsp;o **Date of Birth (DOB)** <br /> • User clicks **Confirm**. <br /> • *Note:* If details match, proceed. If incorrect, show "Account Not Found". |
| **App Service (Backend)** | • Calls `ForgotPIN` method to verify credentials. <br /> • **If Verified:** <br /> &nbsp;&nbsp;o Calls `/registration/forgotpass/`. <br /> &nbsp;&nbsp;o **Security:** Disables user's fingerprint/biometrics in the database. <br /> &nbsp;&nbsp;o **OTP Generation:** Generates a One-Time Login OTP and sets it as the user's **Temporary PIN**. |
| **Gateway (Communication)** | • **SMS/Email Gateway:** Sends the OTP (Temporary PIN) to the user's registered mobile number/email. |
| **User (Temporary Login)** | • User enters the **PIN received via OTP** into the login field. <br /> • App calls `authenticate` method to verify the temporary credential. |
| **User (PIN Reset)** | • Upon successful login, user is forced to change the PIN. <br /> • User enters: <br /> &nbsp;&nbsp;o **Old PIN** (The OTP received). <br /> &nbsp;&nbsp;o **New PIN** (and confirms it). <br /> • User clicks **Submit**. |
| **App Service (Finalization)** | • Calls `SetLoginPIN` method. <br /> • Sets the New PIN as default. <br /> • Shows **Success Message** to the user. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/fp-ff.png)
</div>