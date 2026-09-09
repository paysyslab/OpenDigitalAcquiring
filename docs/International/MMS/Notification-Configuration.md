# Notification Configuration

| Term / Field | Description |
|---|---|
| Event Types | Transaction Success/Failure/Pending, Merchant Onboarded, Status Changed, Limit Breached, Compliance Alert, Password Reset, Account Lockout, Settlement Completed, Rule Triggered. |
| Channels | SMS \| Email \| Push Notification \| In-App. Multiple channels per event. |
| Dynamic Placeholders | `{MerchantName}` `{Amount}` `{TxnID}` `{Date}` `{Status}` `{Channel}` `{LimitType}` `{RuleName}` `{SettlementAmount}` |
| Permission Control | Role-based control over template create/modify/activate/approve. Template approval follows Maker-Checker workflow. |
| Logging | Full send-log: timestamp, recipient, channel, event, delivery status, retry count, failure reason. |

See also: [Notification Management (Merchant Portal)](../Merchant-Portal/Notification-Management) for the merchant-facing notifier configuration.
