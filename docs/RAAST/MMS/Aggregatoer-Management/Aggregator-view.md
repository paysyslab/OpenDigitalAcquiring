# Aggregator View

## Overview
The **Aggregator View** functionality provides a centralized interface for managing financial aggregators within the acquiring ecosystem. Aggregators typically act as intermediary entities responsible for onboarding merchants, routing transactions, and managing settlement flows between merchants and acquiring institutions.

This module allows authorized users to view, monitor, and maintain aggregator details, ensuring accurate configuration for transaction routing, settlement accounts, and operational controls.


## Aggregator Listing Screen – Field Details

The aggregator view screen displays a structured table containing key information related to each registered aggregator.

### Aggregator Identification Details

**Code**
- Unique identifier assigned to each aggregator.
- Used internally for transaction routing, configuration mapping, and reporting.

**Name**
- Official name of the aggregator entity.
- Used for operational reference and reporting.


### Settlement Beneficiary Details

**Beneficiary Name**
- Name of the settlement account holder.
- Typically represents the aggregator or associated financial entity.

**Beneficiary Account Number**
- Settlement account number where aggregator funds are credited.
- Critical for transaction settlement and reconciliation.

**Beneficiary Bank**
- Bank maintaining the aggregator settlement account.
- Used for payment routing and reconciliation purposes.

### Operational Status Details

**Status**
Defines whether the aggregator is operational:

- Active – Aggregator can process transactions.
- Inactive – Aggregator temporarily disabled.
- Suspended – Disabled due to compliance or operational reasons.

This status directly impacts transaction processing capability.

**CAS Enabled**
Indicates whether CAS functionality is enabled.

