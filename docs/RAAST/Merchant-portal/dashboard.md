# Merchant Portal Dashboard

## Overview

The Merchant Portal Dashboard provides a consolidated view of merchant transaction activity across QR, RTP, and POS channels. It enables merchants to monitor transaction volume, transaction amount, and recent activity in real time.



## Header Section

- Displays welcome message for the logged-in merchant.
- Profile icon available for account access.



## MID and TID Selection

### Select MID

- Dropdown to select Merchant ID.
- Displays parent or specific merchant entity.
- Used to filter dashboard data based on selected MID.

### Select TID

- Dropdown to select Terminal ID.
- Allows filtering by specific terminal.
- “All” option displays aggregated data across terminals.



## Channel Tabs

### Raast

- Displays dashboard data for Raast-based transactions.
- Used for QR and RTP monitoring.

### POS

- Displays dashboard data for POS transactions.



## Transaction Summary Cards

### RAAST

#### Count of Total Transactions

- Displays total number of transactions for selected MID/TID.
- Updated dynamically based on filters.

#### Amount of Total Transactions

- Displays total transaction amount.
- Reflects cumulative value for selected filters.

### POS

#### Count of Successful Transactions

- Displays total number of Successful transactions for selected MID/TID.
- Updated dynamically based on filters.

#### Amount of Successful Transactions

- Displays Successful transaction amount.
- Reflects cumulative value for selected filters.

#### Count of Paid Transactions
- Displays total number of paid transactions for selected MID/TID.

#### Amount of Paid Transactions
- Displays paid transaction amount.


## Recent Transactions Panel

- Displays latest transaction activity.
- Shows recent transaction records.
- Displays “No recent transactions” if none available.
- Provides quick visibility into latest merchant activity.



## Navigation Panel

The left sidebar provides access to:

- P2M Dashboard
- QR Code
  - SQRC
  - DQRC
- RTP
  - RTP Request
  - RTP Later Bulk Import
- Transactions
  - POS Transactions
  - RTP Later Transactions
  - P2M Transactions
- User Profile



## Functional Behavior

- Dashboard data refreshes based on MID and TID selection.
- Channel tab selection updates transaction metrics accordingly.
- Real-time visibility into transaction count and amount.
- Quick navigation to detailed transaction modules.


<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – Dashboard](/img/mp/dash-1.png)
</div>

<div style={{ textAlign: 'center'}}>
  ![Merchant Portal – Dashboard](/img/mp/dash-2.png)
</div>