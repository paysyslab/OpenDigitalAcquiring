# Modify Handler User Journey

The Modify Handler User Journey outlines the steps taken to modify an existing handler’s details in the system. This process includes reviewing the current handler’s information, making necessary updates, and following the approval flow to ensure the changes are accurate and authorized.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP Admin**            | Logs into the **MMP UI**                            | Admin navigates to the **Handler Management** section.                       |
| **MMP Admin**            | Searches for the handler to modify                   | Admin finds the specific handler by searching using **Owner's Phone Number** or other criteria. |
| **MMP Admin**            | Selects the handler to modify                        | The handler's profile is opened for review and modification.                 |
| **MMP Admin**            | Modifies **Handler Name**, **Owner's Phone Number**, or other details | Admin updates the required fields as needed.                                 |
| **System**               | Validates the **Owner's Phone Number** and other updated details | The system checks that the new phone number or other fields are valid.      |
| **MMP Admin**            | Updates **Handler Permissions** (if necessary)       | Admin modifies the permissions to reflect new roles or access rights.       |
| **MMP Admin**            | Submits the changes for **Checker review**           | The modified handler details are submitted for approval.                    |
| **MMP Checker**          | Reviews the modified handler details                 | The checker reviews the updates and ensures that the changes are accurate.   |
| **MMP Checker**          | Approves or rejects the changes                      | The changes are either approved and saved or rejected for revision.         |
| **System**               | Logs the modification event                          | The system logs the modification in the audit trail for compliance and security purposes. |

**Note:** The Handler Modify process is dependent on the configured BPM process.