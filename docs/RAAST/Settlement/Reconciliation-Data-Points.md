# Reconciliation Data Points

At end-of-day, the Reconciliation Engine matches the following data sources to produce a complete reconciliation report:

| Data Source | Key Fields Matched |
|---|---|
| RAAST Switch Settlement File | UTR, Transaction Amount, Merchant IBAN, Timestamp |
| OC Transaction Log | OC Transaction ID, CBS Ref (Leg 1 + Leg 2), Status, MDR Amount |
| MMS Transaction Ledger | MMS TXN ID, MID, MDR + FED breakdown, Net Amount, Final Status |
| CBS Account Statement (Payable) | Dr/Cr entries on Merchant Payable A/C matching OC CBS Refs |
| CBS Account Statement (Settlement) | Cr entries on Merchant Settlement A/C for Leg 2 postings |

See also: [Transaction Status Model](../Transactions/Transaction-Status-Model), [MDR & FED Calculation Detail](./MDR-FED-Calculation).
