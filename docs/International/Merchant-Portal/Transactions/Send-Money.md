# Outgoing Payments — Send Money

Merchant/agent initiates an outgoing transfer to a recipient identified by mobile number or alias.

- **On-Us**: same network — immediate credit, no MDR on outgoing.
- **Off-Us**: external bank — routed via WSO2 to IPS/PI-RAC; inter-bank routing applies.

| Term / Field | Description |
|---|---|
| Send Money by Number | Recipient identified by MSISDN. Alias lookup via WSO2 to IPS/PI-RAC (not Core Wallet). On-Us: immediate debit/credit. No fee on outgoing (confirmed per business rules). MMP records transaction; merchant notified. |
| Send Money by Alias (External Bank) | Recipient identified by alias (IBAN, account number, or registered alias). Same alias lookup flow as by-number. On-Us and Off-Us flows supported. |

## Negative Flows

- **N1** — Alias lookup FAIL (MSISDN not found): 404 Not Found; merchant advised recipient not registered.
- **N2** — Sender validation FAIL (limit/balance/PIN): Error shown; merchant may retry.
- **N3** — Core Wallet FAIL: Returns FAILED status; no funds moved; transaction recorded as FAILED in MMP.
