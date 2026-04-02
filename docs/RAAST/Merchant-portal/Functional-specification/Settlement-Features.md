# Settlement Features

## View Settlement Status of Transactions

Backoffice users can view the status of any specific transaction. The following fields are available for viewing:

- NET_AMOUNT
- AMOUNT
- RTP_ID
- STAN (System Trace Audit Number)
- RRN (Retrieval Reference Number)
- RTP_STATUS
- PAYMENT_STATUS
- AGGREGATOR
- CREATED_ON
- FEE_TYPE
- FEE_VALUE
- MERCHANT_ID
- IBAN
- BANK_BIC



## 1. Reports Related to Settlement Status

There are two primary categories of reports available in the system:

### a. Summary Reports

- Aggregator Commission Summary: Displays the list of aggregators and their total commission earnings for a specified date or range.
- Merchant Payout Summary: Displays a summary of all net payments made to merchants via RAAST, categorized by Aggregator and Merchant.

**Report Format:**

**Search Criteria:**
- From Date
- To Date
- Transaction Status (All / Completed / Failed / TIP)
- Transaction Type (All / RTP Now / RTP Later / DQRC / Account)

**Columns to be Shown:**
- Transaction Date Time
- Transaction Status
- From Account & Account Title
- To Account & Account Title
- Merchant DBA (Doing Business As)
- Merchant MCC (Merchant Category Code)
- Transaction Amount
- Status Code & Description

### b. Detailed Reports

- Aggregator Commission Detail: Provides a granular view of commission earnings, showing details for each individual transaction within a given date range.
- Merchant Payout Detail: Provides the line-item details of all merchant payments processed via RAAST.

**Report Format:**

**Search Criteria:**
- From Date
- To Date
- Transaction Status (All / Completed / Failed / TIP)
- Transaction Type (All / RTP Now / RTP Later / DQRC / Account)
