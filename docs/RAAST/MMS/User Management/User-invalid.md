# Invalid ID/Password Login Flow (Account Lockout)

The Invalid ID/Password Login Flow outlines the steps taken when a user attempts to log in with incorrect credentials. The system tracks invalid login attempts and, after a predefined number of failed attempts, locks the user account for security purposes. This process helps protect against unauthorized access and ensures that users follow security best practices.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP User**             | Enters **Invalid Username** or **Password**          | The system detects that the credentials are incorrect.                       |
| **System**               | Displays an error message                            | The system prompts the user with "Invalid Username or Password" message.     |
| **MMP User**             | Attempts to log in again                             | The user enters new credentials.                                              |
| **System**               | Validates the new credentials                        | The system checks if the new username and password are valid.                |
| **System**               | Tracks failed attempts                               | Each failed login attempt is logged in the system for audit purposes.        |
| **System**               | Locks account after a predefined number of attempts  | If too many failed attempts occur (e.g., 5), the user account is locked.     |
| **MMP User**             | Receives **Account Lockout Message**                 | The system sends a notification stating the account is temporarily locked.   |
| **System**               | Prevents further login attempts                      | The system denies login until the account lockout period expires.            |
| **MMP User**             | User unlocks account (via OTP or admin intervention) | The system sends an OTP to the registered contact method or an admin unlocks the account. |
| **System**               | Grants access after successful unlock                | The user can log in again with valid credentials.                             |
