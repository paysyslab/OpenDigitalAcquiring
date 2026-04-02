# Forgot Password User Journey

The Forgot Password User Journey outlines the process by which a user who has forgotten their password can reset it. This involves verifying the user’s identity via email or SMS, sending a reset link, and allowing the user to set a new password. This process is designed to ensure that only the rightful user can regain access to their account.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP User**             | Clicks on **Forgot Password** link                   | User is redirected to the password recovery page.                            |
| **MMP User**             | Enters **Email Address** or **Mobile Number**        | User enters the contact information associated with their account.           |
| **System**               | Sends **Password Reset Link**                        | The system sends a one-time password (OTP) or reset link to the user's email or mobile. |
| **MMP User**             | Receives the reset link or OTP                       | User receives a reset link or OTP via email/SMS.                             |
| **MMP User**             | Clicks the reset link or enters OTP                  | User is redirected to the password reset page or enters OTP.                 |
| **MMP User**             | Enters the **new password** and **confirm password** | User enters a new password and confirms it.                                  |
| **System**               | Validates the new password                           | The system checks that the new password meets the required complexity and matches the confirmation. |
| **System**               | Updates the password in the system                   | The new password is saved securely in the system.                            |
| **MMP User**             | Receives **Password Reset Success** message          | User receives a notification that their password has been successfully reset. |
| **System**               | Logs the password reset activity                     | The reset event is logged for audit and security purposes.                   |
