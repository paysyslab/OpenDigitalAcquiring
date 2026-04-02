import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

# Transaction Summary

## Transaction History

The **Transaction History** screen in the Merchant App provides a consolidated view of all incoming payments received by the merchant. It enables merchants to quickly track settlements, monitor transaction activity, and search specific payments.

### Key Features

- **Search Functionality**
  - Allows search using Transaction ID or keywords.
  - Helps quickly locate specific transactions.

- **Date Range Filter**
  - Merchant can filter transactions within a selected date range.
  - Supports quick review of daily, weekly, or monthly activity.

- **Transaction Status Tabs**
  - Pending: Displays transactions awaiting settlement or confirmation.
  - Settled: Shows completed and settled transactions.

- **Transaction List View**
  - Transactions grouped by date.
  - Each entry includes:
    - Transaction ID (TID)
    - Sender Name
    - Payment channel (e.g., Raast DQRC)
    - Time of transaction
    - Amount received

- **Empty State Handling**
  - If no transactions exist for the selected criteria, a “No transaction found” message is displayed.


<div style={{ width: '30%'}}>
  ![Merchant App - Transaction History](/img/transaction-history/1.png)
</div>



<div style={{ width: '30%'}}>
  ![Merchant App - Transaction History](/img/transaction-history/2.png)
</div>


## Transaction Details

The **Transaction Details** screen provides a complete receipt-style view of a selected transaction. It enables merchants to verify payment authenticity, view sender details, and retain proof of payment.

### Key Features

- **Transaction Confirmation Status**
  - Clearly indicates successful payment receipt.

- **Transaction Summary**
  - Receiver Name / Merchant Name
  - Reference Number
  - Merchant/Business Identifier
  - Received Amount
  - Transaction Date and Time

- **Transaction Identifiers**
  - Transaction ID
  - RRN (Retrieval Reference Number)
  - Copy option available for quick sharing or reconciliation.

- **Sender Information**
  - Sender Name
  - IBAN / Account Number
  - Payment Channel (e.g., Raast SQRC)
  - Payment Status (Accepted / Completed)

- **Action Options**
  - Share receipt externally.
  - Save receipt image to device gallery.

This screen acts as an official digital transaction receipt for merchant records and customer confirmation.


<div style={{ width: '30%'}}>
  ![Merchant App - Transaction History](/img/transaction-history/3.png)
</div>
