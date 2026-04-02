# Delete Handler User Journey

The Delete Handler User Journey outlines the process of removing an existing handler from the system. This includes verifying the handler's details, ensuring proper authorization, and following the approval flow to permanently delete the handler's account and related data.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP Admin**            | Logs into the **MMP UI**                            | Admin navigates to the **Handler Management** section.                       |
| **MMP Admin**            | Searches for the handler to delete                   | Admin finds the specific handler by searching using **Owner's Phone Number** or other criteria. |
| **MMP Admin**            | Selects the handler to delete                        | The handler's profile is opened for review.                                  |
| **MMP Admin**            | Verifies the handler details                         | Admin confirms that the handler to be deleted is the correct one.            |
| **System**               | Ensures **Handler’s Data Compliance**                | The system checks if the handler’s data can be deleted according to policies. |
| **MMP Admin**            | Submits the **Delete Request**                       | The deletion request is submitted for **Checker review**.                    |
| **MMP Checker**          | Reviews the delete request                           | The checker confirms if the handler can be safely deleted.                   |
| **MMP Checker**          | Approves or rejects the deletion                     | If approved, the handler is deleted; if rejected, the request is returned for review. |
| **System**               | Deletes the handler and logs the event               | The handler is removed from the system, and the deletion event is logged for audit purposes. |

**Note:** The Handler Delete process is dependent on the configured BPM process.