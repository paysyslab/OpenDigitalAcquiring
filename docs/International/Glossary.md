# MMP Definitions

Key terms, roles, hierarchy concepts, and MDR models used throughout the Merchant Management Platform (MMP).

| Term / Field | Description |
|---|---|
| Request Locking | Merchant or configuration record locked once a Maker submits a request, preventing parallel modifications until the Checker approves or rejects. |
| Maker-Checker Flow | Dual-control BPM: Maker initiates, Checker independently approves/rejects. Configurable per merchant type — operators can bypass approval for specific merchant type creation. |
| Correlation ID | Unique identifier propagated across all systems per request, enabling end-to-end traceability across MMP, Open Connect, Core Wallet, and external services. |
| AdminMaker / UserMaker | Authorized to initiate changes but cannot make them effective without Checker approval. |
| Admin Checker / UserChecker | Authorized to review, approve, or reject Maker changes. Does not initiate changes. |
| Core Wallet | Maintains merchant accounts, balances, and settlement. Assigns 8-digit Reference Number and 7-digit Short Code from the market-provided Identifier Pool. |
| Parent Merchant | Master entity receiving settlements on behalf of child merchants (franchise/chain model). |
| Child Merchant | Operates independently for acceptance but settles through a parent merchant. |
| Aggregator | Groups multiple merchants under one umbrella for payment acceptance without direct bank accounts. |
| MDR (Merchant Discount Rate) | Configurable per-payment fee. Models: Percentage-Based, Fixed, Slab-Based, MCC-Based, Threshold-Based. MDR Tag generated per configuration. |
| SHID | Payment Address alias — unique 36-character key used in QR codes and digital payment requests. |
| MBNO | Mobile Number alias — merchant MSISDN linked to acceptance account. |
| MCOD | Merchant Account Identifier — unique 2-10 digit code supporting USSD payments. |
| PI-RAC | Payment Infrastructure Risk Assessment and Compliance — verification process for alias creation. |
| NotifySvc | Platform notification service dispatching SMS, Email, Push, and In-App notifications. |
| LKS Portal | The merchant-facing portal branded for the market (e.g., LKS Portal for Togo deployment). |

See also: [Merchant Profile Management](./MMS/Merchant-Profile-Management) for merchant tier definitions (C0/C1/C2), and [Appendix — Market Configuration Notes](./Appendix-Market-Configuration) for market-specific formats.
