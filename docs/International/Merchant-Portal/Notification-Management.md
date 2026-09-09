# Notification Management (Merchant Portal)

Merchants configure additional MSISDNs and email addresses for receiving payment and account event notifications, within a bank-defined limit per merchant type.

## Sequence Diagram — Add Notifier

![Add Notifier sequence diagram](/img/diagrams/notification-management-add-notifier.svg)

### Positive Flow

- Notifier mapping stored; NotifySvc dispatches notifications to the configured MSISDN on all future transaction events.
- Usage counter updated (`countUsed` / `maxN` displayed to merchant).

### Negative Flows

- **N1** — Feature disabled for merchantType + channel: 403 `NotAvailable`.
- **N2** — Handler lacks `CAN_MANAGE_NOTIFIERS` permission: 403 `AccessDenied`.
- **N3** — Invalid MSISDN format (not 8-digit numeric): 400 ValidationError (`INVALID_MSISDN`).
- **N4** — Max notifiers reached (count >= N): 409 LimitExceeded (`MAX_NOTIFIERS_REACHED`).
- **N5** — Duplicate notifier: 409 Duplicate (`NOTIFIER_ALREADY_EXISTS`).
- **N6** — `notifierMsisdn` equals `ownerMsisdn` (when enforced): 400 ValidationError (`NOTIFIER_EQUALS_OWNER`).
