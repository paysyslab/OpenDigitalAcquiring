# Login Merchant - (Onboarded Merchants)

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **User Opens App** | • Splash Screen appears followed by the Login page. <br /> • **Primary Options:** <br /> &nbsp;&nbsp;o **Sign In** <br /> &nbsp;&nbsp;o **Register** |
| **User Presses 'Sign In'** | • User is directed to the Sign In screen. <br /> • **Required Credentials:** <br /> &nbsp;&nbsp;o **Mobile Number** <br /> &nbsp;&nbsp;o **Login PIN** <br /> • User enters details and the `api/v1/authenticate` method is called. |
| **App Service (Authentication)** | • **Credential Validation:** <br /> &nbsp;&nbsp;o Checks Mobile Number and PIN against the database. <br /> • **Success Case:** <br /> &nbsp;&nbsp;o Responds with a success message. <br /> &nbsp;&nbsp;o User is granted access to the App dashboard. <br /> • **Failure Case:** <br /> &nbsp;&nbsp;o Returns Error: **"Provided Details are Invalid"**. |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/ma-l-ff.png)
</div>