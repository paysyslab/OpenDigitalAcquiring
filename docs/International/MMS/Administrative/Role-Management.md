# Role Management

Allows administrators to manage roles and permission groups for backoffice users. Permissions are additive across multiple roles. All role changes follow the Maker-Checker workflow.

## Add Role — Functional Flow

| Actors | Process Description |
|---|---|
| AdminMaker / UserMaker | Logs into dashboard portal (access limited to Role Management, Aggregator Management, User Management). Navigates to Role Management and clicks Add Role. Defines: Role Name (unique, case-insensitive), Description, Remarks. Selects page-level permissions per module: View only \| View and Add \| View, Add, Modify \| View, Add, Modify, Delete. Reviews and submits for Checker approval. |
| Checker — Approval | Navigates to pending approval queue; selects the submitted role application. Reviews role name, description, and permission scope for completeness and business alignment. Approves — role becomes Active and immediately available for user assignment. *Note: a user may hold multiple roles simultaneously; permissions are additive.* |
| Checker — Rejection | Logs into back-office portal; navigates to pending approval queue. Selects the application and reviews all submitted details. Rejects with mandatory rejection remarks. Request returned to Maker for correction and re-submission. |

### Sequence Diagram — Add Role

![Add Role sequence diagram](/img/diagrams/role-management-add-role.svg)

## Positive Flow — Approval

- Role status transitions from `PENDING_APPROVAL` to `ACTIVE`.
- Role immediately available for assignment to users in User Management.
- Approval event logged: Checker User ID, timestamp, role ID.

## Negative Flow — Rejection

- Checker selects Reject and enters mandatory rejection remarks.
- Role status transitions from `PENDING_APPROVAL` to `REJECTED`.
- Record unlocked; AdminMaker notified via NotifySvc with rejection reason.
- AdminMaker may revise and re-submit — a new Maker-Checker cycle begins.

## Modify Role — Functional Flow

| Actors | Process Description |
|---|---|
| AdminMaker / UserMaker | Navigates to Role Management — list of active roles displayed. Selects the role to modify; clicks Edit. Updates Description, Remarks, and/or module permissions as required. Reviews changes (old vs. new summary shown) and submits for Checker approval. |
| Checker — Approval | Reviews the original and updated role definitions side-by-side. Approves — updated permissions apply immediately to all users holding this role. |
| Checker — Rejection | Logs into back-office portal; navigates to pending approval queue. Selects the application and reviews all submitted details. Rejects with mandatory rejection remarks. Request returned to Maker for correction and re-submission. |
