# Registration for ETB Merchants

## Overview
This functionality enables an **already onboarded in MMS** or **existing to bank (ETB) Merchant,** to register on the Merchant App by verifying their mobile number via OTP, setting a login PIN, accepting Terms & Conditions, and submitting basic profile details.

## Terms & Conditions Screen
The merchant reviews and accepts the app Terms & Conditions before registration completion.

### Display
- Terms & Conditions content in a scrollable view.

### Input
**Consent checkbox**
- “I have read and agree to the terms and conditions” checkbox.

### Action
**AGREE**
- Continues only after the checkbox is selected.

<div style={{ width : '30%' }}>
  ![OpenConnect – RAAST Integration Architecture](/img/Registration/1.png)
</div>

## Register Screen
The merchant enters profile details to complete registration.

### Tabs
**Login / Register**
- Merchant selects the **Register** tab to proceed with registration inputs.

### Inputs
**Name**
- Text input for merchant name.

**Email**
- Text input for merchant email.

**CNIC / NTN Selection**
- Toggle selection between **CNIC** and **NTN**.

**CNIC/NTN Number**
- A single input field to enter the selected identifier value.

### Action
**GET STARTED**
- Submits the registration details and completes the registration flow.

<div style={{ width : '30%' }}>
  ![OpenConnect – RAAST Integration Architecture](/img/Registration/2.png)
</div>

## Mobile Number Screen
The merchant initiates registration by entering their mobile number.

### Input
**Mobile number**
- A single input field for entering the merchant’s mobile number.

### Action
**VERIFY**
- On tap, the app proceeds to OTP verification for the entered mobile number.



<div style={{ width : '30%' }}>
  ![OpenConnect – RAAST Integration Architecture](/img/Registration/3.png)
</div>


## OTP Verification Screen
The merchant verifies ownership of the mobile number by entering a 6-digit OTP received via SMS.

### Display
- Instructional text indicating a **6-digit code** has been sent via **SMS** to the masked mobile number.

### Input
**Enter your OTP**
- 6 input boxes for OTP entry.

### Timer
- A countdown timer is shown (e.g., `00:30`) for OTP validity / resend availability.

### Action
**Resend on SMS**
- Triggers OTP resend to the same mobile number.

**VERIFY**
- Validates the entered OTP and continues to the next step on success.

<div style={{ width : '30%' }}>
  ![OpenConnect – RAAST Integration Architecture](/img/Registration/4.png)
</div>

## Login PIN Screen
The merchant sets a login PIN for future sign-in.

### Input
**Enter PIN**
- 4-digit PIN entry.

**Re-Enter PIN**
- 4-digit PIN confirmation entry.

### Action
**CONTINUE**
- Proceeds to the next step after PIN and confirmation are entered.

<div style={{ width : '30%' }}>
  ![OpenConnect – RAAST Integration Architecture](/img/Registration/5.png)
</div>