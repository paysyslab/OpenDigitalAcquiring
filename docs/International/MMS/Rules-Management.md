# Rules Management

| Term / Field | Description |
|---|---|
| Rule Types | Transaction Limit \| Velocity \| Amount Threshold \| Channel Restriction \| MCC Restriction \| Time-Based. |
| Trigger Conditions | Logical conditions: amount > X, count > Y in Z minutes, Off-Us from restricted MCC. |
| Actions on Trigger | Block transaction \| Flag for review \| Send real-time alert \| Apply surcharge \| Reduce limit. |
| Risk Rules and Alerts | Dispatched via NotifySvc in real-time when rules fire. Alert payload: Merchant ID, Transaction ID, Rule triggered, Amount, Channel, Timestamp. All alerts audit-logged. |
