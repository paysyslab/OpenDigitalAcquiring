
# OpenAcquiring – RAAST Integration Architecture

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/Open-Digital-Acquiring-Architecture.png)
</div>


## Overview

This document illustrates the high-level architecture of the Acquiring platform and its integration with RAAST, merchant channels, and backend banking systems.

### Key Components

- **Merchant Portal / Merchant Pay App**  
  Interfaces used by merchants to initiate transactions and manage operations.

- **API Gateway**  
  Acts as the secure entry point for third-party aggregators and merchant channels.

- **Firewall Layer**  
  Ensures secure traffic flow between external and internal components.

- **Merchant Portal Services**  
  Handles merchant onboarding, transaction initiation, and validations.

- **Acquiring Services (RAAST)**  
  Manages transaction routing, validation, and interaction with RAAST rails.

- **Centralized Database**  
  Stores transaction records, merchant data, and audit logs.

- **Back Office Portal**  
  Used by operations and support teams for monitoring and reconciliation.

- **RAAST CAS Services**  
  Handles compliance, switching, and routing with SBP RAAST network.

- **OpenConnect Middleware**  
  Core transaction orchestration layer interfacing with CBS and RAAST.

- **Core Banking System (CBS)**  
  Performs final posting and settlement.

## Notes

- The architecture ensures secure, scalable, and auditable transaction processing.
- Firewalls isolate merchant-facing services from core banking infrastructure.
- OpenConnect acts as the central orchestration and routing engine.
- The design supports high availability and regulatory compliance.

---

© Paysys Labs – OpenConnect Architecture Documentation
