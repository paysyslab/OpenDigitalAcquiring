# Appendix — Market Configuration Notes

| Term / Field | Description |
|---|---|
| Owner MSISDN Format | Varies by market. Togo: 8-digit (+228 9XXXXXXX). Other markets: different national formats. |
| Portal Branding / Name | Merchant-facing portal branded per market as agreed between Axian and the bank. |
| Enabled Transaction Channels | Not all transaction types under [Transactions via Merchant Portal](./Merchant-Portal/Transactions/Scan-Pay-OnUs) are necessarily enabled in every deployment. Channel enablement configurable at Merchant Type level in MMP. |
| Identifier Pool (8-digit / 7-digit) | Predefined Reference Numbers and Short Codes provided by each market business team and uploaded into MMP before go-live. Pool exhaustion triggers an automated alert. |
| MDR Default Structures | Market-specific: percentage defaults, fixed minimums, and slab structures per merchant category agreed during commercial negotiations. |
| Compliance Screening Providers | Provider selection, screening intensity, and block-vs.-manual-review thresholds configured per market based on local regulatory requirements. |
| Notifier Limit per Merchant | Maximum number of notifiers configurable per merchant — set by the bank per deployment. Configurable within MMP system parameters. |
| Sequence Diagram Legend | Blue actor boxes: system participants. Green-highlighted sections: Positive/Happy Path steps. Red-highlighted sections: Negative/Error/Decline steps. |
