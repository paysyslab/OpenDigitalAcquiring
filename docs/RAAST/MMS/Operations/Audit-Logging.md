# Audit Logging

All system actions — user logins, merchant creations/modifications, role changes, transaction events — are recorded in the Audit Log with the following fields:

| Field | Description |
|---|---|
| User ID | ID of the user who performed the action. |
| Action Performed | Create / Modify / Delete / Approve / Reject / Login |
| Entity Type | Merchant / User / Role / Aggregator / Till |
| Entity ID | The ID of the affected record. |
| Old Values | Previous values before modification. |
| New Values | New values after modification. |
| Timestamp | Date and time of the action. |
| IP Address | Source IP address of the request. |
| Result | Success / Failure with reason. |

Every Maker-Checker workflow across Role, Aggregator, User, Merchant, Till, and Bulk operations writes to this log at each step (submission, approval, rejection).
