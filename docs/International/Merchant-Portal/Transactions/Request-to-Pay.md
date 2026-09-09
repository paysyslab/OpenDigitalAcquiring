# Request to Pay (RTP)

RTP is **ON-NET ONLY** — available only for same-network customers. Merchant initiates; customer accepts or declines. Three callback scenarios are supported.

## Sequence Diagram — Request to Pay (RTP)

![Request to Pay sequence diagram](/img/diagrams/request-to-pay.svg)

## Positive Flow — B-Party Accepts (Scenario 1)

- Two callbacks received: `SENDS-FUNDS` (SUCCEED, ACSC) then `INSIDE-PAYMENT-DEMAND` (SUCCEED, ACSC).
- Middleware forwards callbacks to LKS Portal; transaction marked SUCCESS.
- MMP records transaction; merchant notified via NotifySvc.

## Negative Flows

- **Scenario 2 — B-Party / Central Bank REJECTS**: One callback `INSIDE-PAYMENT-DEMAND` (FAILED, RJCT, codeRaison). Transaction marked FAILED; merchant shown rejection reason.
- **Scenario 3 — No callback (TIMEOUT)**: LKS Portal initiates a payment-request status inquiry via Middleware to IPS. Transaction remains PENDING until resolution; merchant advised to retry or contact support.
