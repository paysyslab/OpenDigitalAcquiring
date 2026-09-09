# Merchant Till Management

On merchant creation, a default till is auto-created by the system. Merchants can add additional tills for multiple acceptance points.

| Term / Field | Description |
|---|---|
| Till Name | Unique per merchant (e.g., Main Counter, Kiosk #1, Online). |
| Till Type | POS Terminal \| Counter \| Mobile \| Online \| Agent Kiosk \| USSD. |
| Till Code | System-assigned unique code; used for till-code-based payments via USSD and Super App. |
| Daily Till Limit | Cannot exceed the merchant's overall daily limit. |
| Add Merchant Till | Maker-Checker workflow. Till Code assigned on approval. Till immediately active. |
| Modify Merchant Till | Update name, location, type, or daily limit. Changes effective immediately on approval. |
| Delete Merchant Till | Soft-delete; records retained for audit. Cannot delete a till with pending transactions. |
