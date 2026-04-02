# Add Handler User Journey

The **Add Handler User Journey** defines the steps involved in adding a new handler in the system. Handlers are responsible for managing payment accounts and interacting with third-party services. This journey involves inputting the handler’s details, validating the required data, and ensuring the correct permissions are assigned.

## Journey Table

| **Step**                | **Action**                                           | **Outcome / Response**                                                       |
|-------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| **MMP Admin**            | Logs into the **MMP UI**                            | Admin navigates to the **Handler Management** section.                       |
| **MMP Admin**            | Clicks on **Add Handler**                            | Admin is directed to the form for adding a new handler.                      |
| **MMP Admin**            | Enters **Handler Name**, **Owner's Phone Number**, and **Other Information** | Admin enters the required handler information, such as handler name, owner's phone number, and relevant details. |
| **System**               | Validates Owner's Phone Number and other details | The system checks that the owner's phone number is valid and not previously registered. |
| **MMP Admin**            | Selects **Handler Permissions**                      | Admin assigns permissions for the handler, such as wallet access, payment processing, etc. |
| **System**               | Fetches **KYC data** from third-party provider (if applicable) | The system verifies the handler’s identity through a third-party KYC service. |
| **MMP Admin**            | Submits handler details                              | The handler data is submitted for review.                                    |
| **MMP Checker**          | Reviews handler details                             | The checker verifies all information and approves or rejects the handler.     |
| **MMP Checker**          | Approves the handler                                 | The handler is added to the system, and relevant permissions are assigned.    |
| **System**               | Sends confirmation and logs the event                | A confirmation is sent to the admin, and the event is logged for audit purposes. |

**Note:** The Handler Add process is dependent on the configured BPM process.