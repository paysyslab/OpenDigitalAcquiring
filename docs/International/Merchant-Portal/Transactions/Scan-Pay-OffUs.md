# Scan and Pay — Off-Us QR Payment

Customer is with a different bank/scheme. Alias resolution happens at Central Bank level; payment is routed via Open Connect to the acquiring PI backend.

## Sequence Diagram — Scan & Pay (Off-Us QR)

![Scan and Pay Off-Us sequence diagram](/img/diagrams/scan-pay-offus.svg)

## Positive Flow (Off-Us)

- Alias resolved at the Central Bank; no direct call to the acquiring PI Backend during alias lookup.
- MMP authorises the merchant; MDR Tag applied; reservation confirmed via Core Wallet.
- Payment execution via WSO2/AMDOCS: MDR Group applied; Net + Fee amounts settled.
- Transaction callback delivered to MMP; merchant notified.
- Settlement via the inter-bank settlement schedule (timeline may differ from On-Us same-day settlement).

## Negative Flows

- **N1** — MMP authorisation FAIL (merchant inactive, limit exceeded): `merchantStatus: REJECTED`; payment rejected at Central Bank level.
- **N2** — Reservation FAIL (Core Wallet): Reservation rejected; payment rolled back; customer notified.
- **N3** — Central Bank timeout: Transaction marked pending; inquiry required.
