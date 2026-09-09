# Transactions

This section catalogs every RAAST P2M payment transaction flow supported by the Acquiring Platform. Each payment type includes both **On-Us** (payer and merchant at the same Acquiring Bank) and **Off-Us** (payer at a different bank) scenarios, with positive and negative flows for each.

## On-Us vs Off-Us Routing

| Type | Description |
|---|---|
| On-Us Transaction | Both payer (customer) and merchant are customers of the same Acquiring Bank. No RAAST interbank routing is required. The transaction is processed entirely within the bank's internal systems. |
| Off-Us Transaction | Payer is a customer of a different bank. The payment travels from the payer's bank through the RAAST switch to the Acquiring Bank's Open Connect, which receives and processes the inbound credit. |

## Payment Types

| Type | Description |
|---|---|
| [Static QRC (SQRC)](./SQRC-OnUs) | Customer-initiated push payment via a fixed, multi-use QR code assigned to a merchant Till. Does not expire. |
| [Dynamic QRC (DQRC)](./DQRC-OnUs) | Merchant-initiated, one-time QR per transaction. Registered at RAAST SBP via `pain.13`. Maximum expiry: 3 hours. |
| [Request to Pay – Now (RTP Now)](./RTP-Now-OnUs) | Merchant-initiated request expecting immediate customer payment. |
| [Request to Pay – Later (RTP Later)](./RTP-Later-OnUs) | Merchant-initiated deferred payment request, maximum 40-day expiry. Used for bulk billing (schools, utilities). |

## Related

- [Notify Merchant and Payment](./Notify-Merchant-Payment)
- [Transaction Status Model](./Transaction-Status-Model)
