# MDR & FED Calculation Detail

## Calculation Logic

The MDR/FED Engine in MMS performs the following calculation for every transaction:

| Step | Formula | Example (PKR 10,000 txn, 1.2% MDR, 13% FED on MDR) |
|---|---|---|
| Gross Transaction Amount | As received from payer | PKR 10,000.00 |
| Gross MDR | Gross Amount × MDR Rate | PKR 10,000 × 1.2% = PKR 120.00 |
| MDR Cap / Floor Check | If Gross MDR > MDR Cap → use Cap; if < Floor → use Floor | Assume no cap/floor breach → PKR 120.00 |
| FED on MDR | Gross MDR × FED Rate | PKR 120.00 × 13% = PKR 15.60 |
| Total Deduction | Gross MDR + FED on MDR | PKR 120.00 + PKR 15.60 = PKR 135.60 |
| Net Merchant Amount | Gross Amount – Total Deduction | PKR 10,000.00 – PKR 135.60 = PKR 9,864.40 |
| Bank MDR Revenue | Gross MDR (net of any issuer/switch sharing) | Per sharing model configuration |

The MDR model itself — Percentage, Fixed, or Slab-Based — is configurable per merchant; see [MDR Profile](../MMS/MDR/MDR-Profile) and [Add MDR](../MMS/MDR/MDR-add).

## Revenue Retention in Merchant Payable Account

After Leg 2 posting, the Merchant Payable Account retains the MDR + FED amount. This is the Bank's revenue. A scheduled sweep process (configurable: daily, weekly) moves the accumulated MDR/FED balance from the Merchant Payable Account to the Bank's Revenue / Income Account as per internal accounting policies.
