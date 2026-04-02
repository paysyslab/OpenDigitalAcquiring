# View Merchant Details

The View Merchant screen allows Back Office users to view all merchants that have successfully completed the full onboarding workflow and are now active in the system.

### Available Fields
The View Merchants page displays a list of all onboarded merchants in a tabular format, providing essential information for each merchant. The table includes the following columns:

- **Created On**: The date when the merchant was created in the system.
- **Acquirer**: The payment method assigned to the merchant.
- **Merchant (Registered Name)**: The legal name of the merchant.
- **Doing Business As (DBA)**: The name under which the merchant operates.
- **MID**: Merchant Identifier.
- **CNIC / NTN**: The merchant’s CNIC or NTN number.
- **Contact Number**: The merchant's primary phone number.
- **City**: The city where the merchant is based.
- **Payee Name**: The name of the payee for settlement purposes.
- **Payee Address**: The payee’s address.
- **Email**: The merchant's registered email address.
- **Branch Code**: The code of the branch where the merchant’s bank account is held.
- **Bank BIC**: The Bank Identifier Code for the merchant’s bank.
- **IBAN**: The merchant’s International Bank Account Number.
- **Monthly Revenue**: The merchant’s expected monthly transaction volume or revenue.
- **View Terminal(s)**: Detailed information about the terminals assigned to a merchant.
- **Status**: The current status of the merchant (active, inactive, etc.).
- **Portal Access**: Whether the merchant has been granted access to the Merchant Portal.
- **Action**: Available actions, such as updating the merchant or granting portal access.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/view-merchant-1.png)
</div>



<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/view-merchant-2.png)
</div>


### Available Actions
Each row of the merchant list has two action buttons available:

1. **Update Merchant**  
   - Opens the merchant’s profile in an editable mode.  
   - Fields that can be updated include mobile number, email, address, bank information (IBAN, Branch Code), and MDR details (depending on permissions).
   - Once the changes are made, clicking Submit updates the merchant profile.
   - [**Click here**](http://localhost:3000/OpenDigitalAcquiring/docs/RAAST/MMS/Merchant-profile-Management/Update-merchant) for further details on update merchant.

2. **Grant Portal Access / Reset 2FA**  
   - **Grant Portal Access**: If the merchant has not yet been granted access to the Merchant Portal, this action generates portal credentials and assigns default portal roles.  
   - **Reset 2FA**: If the merchant has access, this option allows resetting the two-factor authentication (2FA) method (e.g., SMS OTP or Authenticator app). This is useful in cases such as a device change, loss of access, or reactivation request.