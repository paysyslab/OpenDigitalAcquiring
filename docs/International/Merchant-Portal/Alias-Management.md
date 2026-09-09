# Alias Management

An account alias is an identifier allowing merchants to receive transfers without providing their full account number. The mapping is stored in a centralized alias directory — the single source of truth for all payment routing.

| Term / Field | Description |
|---|---|
| SHID (Payment Address) | Unique 36-character random key used in QR codes and digital payment requests. System-generated; merchant cannot manually specify the SHID value. |
| MBNO (Mobile Number) | Merchant MSISDN linked to acceptance account. OTP sent to MSISDN for ownership verification before alias activation. Format per market (e.g., +228 9XXXXXXX for Togo). |
| MCOD (Merchant Account Identifier) | Unique 2-10 digit code supporting USSD payments. Must be unique per participant. SHID also auto-generated alongside MCOD. |

## Sequence Diagram — Alias Creation (PI-RAC Verification)

![Alias Creation sequence diagram](/img/diagrams/alias-management-creation.svg)

### Positive Flow

- Alias created with status `ACTIVE`; immediately resolvable in the centralized alias directory for payment routing.
- MMP uses TxId as TillId; generates an EMVCo-compliant QRC string; QRC available for download.
- Two callbacks from IPS: CallBack1 (ALIAS Registration result) and CallBack2 (ALIAS details).

### Negative Flows

- **N1** — PI-RAC verification FAIL (mandatory fields missing): 400 ValidationError; specific fields identified.
- **N2** — Alias uniqueness check FAIL: 409 Conflict (`ALIAS_ALREADY_EXISTS`); merchant must choose a different value.
- **N3** — MBNO OTP expired: 400 ValidationError (`OTP_EXPIRED`); merchant requests new OTP.
- **N4** — Merchant account INACTIVE or SUSPENDED: 422 (`MERCHANT_NOT_ACTIVE`); alias creation blocked.
