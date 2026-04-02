# Change Password User Journey

The Change Password User Journey outlines the process by which a user can change their password in the system. This process includes user authentication to verify identity, entering the new password, and updating the system securely. This is an essential function to ensure the user’s account security and protect sensitive information.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP User**             | Logs into the **MMP UI**                            | User navigates to the profile settings page to change the password.          |
| **MMP User**             | Selects **Change Password**                          | User is prompted to enter the **current password** to verify identity.       |
| **MMP User**             | Enters the **current password**                      | System checks if the entered password matches the stored one.                |
| **System**               | Validates the current password                       | If the password is correct, the system allows the user to proceed.           |
| **MMP User**             | Enters **new password** and **confirm password**     | User enters the new password and confirms it by re-entering it.              |
| **System**               | Validates the new password                           | The system checks that the new password meets the required complexity criteria (e.g., length, special characters). |
| **System**               | Updates the password in the system                   | The new password is stored securely, and the change is recorded.             |
| **MMP User**             | Receives confirmation message                        | User receives a notification that the password has been successfully changed. |
| **System**               | Logs the password change activity                    | The password change event is logged for audit and security purposes.         |
