# View User Journey

The View User Journey defines the steps involved in reviewing an existing user’s details within the system. This process allows the configured BPM flow **Admin-Checker-Banker-Approver** or relevant user to inspect user data, role assignments, permissions, and other attributes related to the user’s profile. The journey ensures that the user’s data is accurate and up-to-date.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP Maker**            | Logs into the MMP UI and navigates to **User Management** | User is granted access to the **User Management** section.                    |
| **MMP Maker**            | Searches or filters for the specific user            | The system retrieves and displays the user’s profile information.             |
| **MMP Maker**            | Selects the user to view details                     | The selected user's details are displayed for review.                         |
| **MMP Maker**            | Reviews the user's details                          | The Maker checks the information, including role, permissions, and activity log. |
| **MMP Maker**            | Confirms or updates information (if applicable)     | The Maker can either leave the data unchanged or proceed with updates.        |
| **MMP Maker**            | Submits any changes (if required)                    | Any modifications are submitted for **Checker review** (if applicable).      |
| **MMP Checker**          | Logs into the MMP UI and navigates to **Checker Inbox** | The Checker accesses any pending user modification requests.                  |
| **MMP Checker**          | Reviews the submitted changes or details            | The Checker ensures all data is accurate and reviews changes made by the Maker. |
| **MMP Checker**          | Approves or rejects any changes                      | The user profile is updated or reverted based on the decision.                |
| **System**               | Logs the action performed                           | The system logs the activity for audit and compliance purposes.               |
