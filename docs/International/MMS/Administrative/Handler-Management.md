# Handler Management

Allows merchants to assign controlled portal access to trusted individuals (handlers) acting on behalf of the merchant within bank-defined permissions.

## Add Handler — Functional Flow

| Actors | Process Description |
|---|---|
| AdminMaker / UserMaker | Navigates to Handler Management and clicks Add Handler. Enters: Handler Name, MSISDN (8-digit), Email, Linked Merchant, Handler Type (Agent / Merchant Staff / Portal User). Selects channel permissions defining accessible portal functions. Submits for Checker approval. |
| Checker — Approval | Reviews handler profile, linked merchant, and permission scope. Approves — handler account created; credentials (username + temporary password) dispatched via NotifySvc. Handler can now log into the merchant portal with assigned permissions. |
| Checker — Rejection | Logs into back-office portal; navigates to pending approval queue. Selects the application and reviews all submitted details. Rejects with mandatory rejection remarks. Request returned to Maker for correction and re-submission. |

### Sequence Diagram — Add Handler

![Add Handler sequence diagram](/img/diagrams/handler-management-add-handler.svg)

## Positive Flow

- Handler account created and linked to merchant. MMP stores merchant-handler mapping.
- Temporary credentials dispatched via NotifySvc; handler must change password on first login.

## Negative Flows

- **N1** — Invalid MSISDN format (not 8-digit): Returns 400 ValidationError (`INVALID_MSISDN`).
- **N2** — Merchant not ACTIVE: Returns 422 (`MERCHANT_NOT_ACTIVE`); handler creation blocked.
- **N3** — Checker rejects: Handler record remains REJECTED; Maker notified with rejection reason.
