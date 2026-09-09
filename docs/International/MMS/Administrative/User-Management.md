# User Management

## Add User — Field Specifications

| Term / Field | Description |
|---|---|
| Login ID | Unique identifier (email or username). No spaces. Cannot be changed after creation. |
| Full Name | 3-100 characters, alphabets and spaces only. Required. |
| Email | RFC 5322 validated, unique across active users. Used for OTP delivery. |
| Mobile Phone | Validated per market format. Used for OTP and security alerts. |
| Role Assignment | Multi-select from approved active roles. Permissions are additive. |
| Status | Active (can log in) or Inactive (access blocked). Default: Active. |
| Start / End Date | Optional. Defines the valid date range for user access. |

## Add User — Functional Flow

| Actors | Process Description |
|---|---|
| AdminMaker / UserMaker | Navigates to User Management and clicks Add User. Enters: Login ID, Full Name, Email, Mobile, Role(s), Status, optional Start/End Dates. Reviews and submits for Checker approval. |
| Checker — Approval | Reviews the complete user profile and role assignments. Approves — user account created; system generates temporary password and dispatches to user's registered email. User must change temporary password on first login (system-enforced). |
| Checker — Rejection | Logs into back-office portal; navigates to pending approval queue. Selects the application and reviews all submitted details. Rejects with mandatory rejection remarks. Request returned to Maker for correction and re-submission. |

## Login — Sequence Diagram (Successful Flow and Account Lockout)

![Login success and account lockout sequence diagram](/img/diagrams/user-management-login.svg)

### Positive Flow — Successful Login

- User authenticated; JWT session token issued; dashboard rendered based on assigned roles.
- Failed-attempt counter reset; login event logged in audit trail.

### Negative Flow — Account Lockout

- **N1** — Invalid credentials: 401 Unauthorized displayed; failed-attempt counter incremented.
- **N2** — After 5th consecutive failed attempt: Account LOCKED for 30 minutes (configurable).
- **N3** — Lockout notification dispatched to user's registered email via NotifySvc.
- **N4** — Account INACTIVE or SUSPENDED: 423 Locked; user directed to contact administrator.

## Forgot Password — Sequence Diagram

![Forgot Password sequence diagram](/img/diagrams/user-management-forgot-password.svg)

### Positive Flow

- OTP validated; password updated; active sessions invalidated; user redirected to login.

### Negative Flows

- **N1** — Login ID not found: 404 Not Found; user advised to contact administrator.
- **N2** — OTP expired: 400 ValidationError (`OTP_EXPIRED`); user must request new OTP.
- **N3** — OTP already used: 400 ValidationError (`OTP_ALREADY_USED`).
- **N4** — Password fails policy: 400 ValidationError; requirements displayed to user.
