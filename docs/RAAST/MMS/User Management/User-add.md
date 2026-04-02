# Add User Journey

The Add User Journey outlines the step-by-step process for adding a new user to the system. This involves logging in, filling in user details, defining roles and permissions, and going through an approval process via the BPM **Maker-Checker-Banker-Approver** flow which is **configurable** based on business needs. The journey ensures that all required fields are filled out, the user's access is configured properly, and that appropriate checks are conducted for security and compliance purposes.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP Maker**            | Logs into the MMP UI and navigates to **User Management** | User is granted access to the **User Management** section.                    |
| **MMP Maker**            | Clicks on **"Add User"**                              | A form appears to enter user details.                                          |
| **MMP Maker**            | Enters **User Name**, **User ID**, **Aggregator**, **Other Information**, and **Role** | Form fields are populated for the new user, including role selection.          |
| **MMP Maker**            | Reviews user information                             | The Maker confirms that the information entered is correct and complete.       |
| **MMP Maker**            | Submits user details for **Checker review**          | User information is sent for approval.                                        |
| **MMP Checker**          | Logs into the MMP UI and navigates to **Checker Inbox** | The Checker accesses pending user approval requests.                          |
| **MMP Checker**          | Reviews the user details                             | The Checker validates the provided details for accuracy and completeness.      |
| **MMP Checker**          | Approves the user                                    | The user is activated, and a system-generated OTP is sent for the first-time login. |
| **MMP Checker**          | Rejects the user request                             | The request is returned to the Maker with rejection remarks for corrections.   |
| **System**               | Sends system-generated OTP for **first-time login**  | The new user receives an OTP via email or SMS.                                |
| **MMP Maker**            | New user sets up password after OTP validation       | User is prompted to set a password following the password policy.             |
| **System**               | Logs the user's activity                            | The user’s creation process is logged in the system for compliance and audit purposes. |
