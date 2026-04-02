# Login User Journey

The Login User Journey outlines the steps taken by a user to log into the system. This process includes entering credentials, validation of those credentials, and access control management. The journey ensures that only authorized users can access the system while logging all activities for audit and compliance.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP User**             | Navigates to the **MMP Portal**                      | User is directed to the login screen.                                         |
| **MMP User**             | Enters **Username** and **Password**                 | User submits their login credentials.                                         |
| **System**               | Validates the entered credentials                    | The system checks that the username exists and the password is correct.       |
| **System**               | Checks if the user is active and credentials are valid | If the user is active and credentials are valid, they are granted access.    |
| **System**               | Logs the login attempt                               | The system records the login event in the audit log.                          |
| **MMP User**             | Accesses the **Dashboard**                           | If validation is successful, the user is granted access to the dashboard.    |
| **MMP User**             | Receives **two-factor authentication (if applicable)** | If enabled, the system sends a code via email/SMS for secondary validation.   |
| **System**               | Completes login                                      | Upon successful second-factor validation (if applicable), the user gains full access. |
| **MMP User**             | Views the main portal                               | User accesses the portal, where they can perform tasks according to their role. |
