# Solution Overview

## Open Connect

Open Connect is the integration and transaction-orchestration layer routing, validating, and securing communication between MMP, core banking, payment networks, and external services. It is built on a service-oriented, API-first architecture supporting:

- IPS Platform Interface
- ALIAS Management (PI-RAC / Central Addressing)
- Customer and Merchant Initiated Payments
- Bank Platform Interface
- Compliance Screening
- SMS/Email/AML Verification
- REST Services
- SOAP Services
- ISO 8583
- ISO 20022
- TCP Messages
- Queue-Based Integration

## API Gateway

The API Gateway exposes REST API endpoints to channels with centralized authentication (OAuth 2.0 / JWT), throttling, request validation, and intelligent routing.

Key transaction categories handled:

- **Financial P2M**
- **Outgoing** (Send Money, Fund Transfer)
- **Non-Financial** (Merchant Registration, Till Registration, Inquiry)
- **Return Payment Messages**
