# Merchant Portal — Access and Login

- Merchant/agent login using registered MSISDN or portal username + password.
- Account lockout after 5 consecutive failed login attempts (30-minute lockout; configurable).
- **Change Password**: authenticated merchant updates password via Account Settings.
- **Forgot Password**: OTP-based self-service password reset via registered mobile or email.
- **Session timeout**: 30 minutes of inactivity (configurable); session auto-terminated.
- All login events (success, failure, lockout) logged in audit trail.

See also: [User Management — Login](../MMS/Administrative/User-Management) for the equivalent backoffice login and forgot-password sequence diagrams.
