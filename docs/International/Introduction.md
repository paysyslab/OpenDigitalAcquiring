# Introduction and Platform Overview

Axian Group, as part of its strategic initiative to strengthen digital payments acceptance and merchant acquiring capabilities across its operating markets, has implemented Open Digital Acquiring as a centralized, scalable, and configurable acquiring platform. The objective is to enable seamless onboarding, management, and servicing of merchants while supporting multiple digital payment channels through a unified ecosystem.

Open Digital Acquiring is designed to reduce operational complexity, improve merchant experience, ensure regulatory compliance, and enable rapid scalability for merchant acceptance services. This documentation covers complete functional specifications including business flows, sequence diagrams, field definitions, and positive and negative cases for both the **Merchant Management Platform (MMP)** — the backoffice — and the **Merchant Portal** (merchant/agent-facing).

:::note Sequence Diagram Legend
Blue actor boxes represent system participants. Arrows represent messages between participants. Positive/happy path steps are shown in green sections; negative/error/decline steps are shown in red sections.
:::

## Platform Principles

| Term / Field | Description |
|---|---|
| Low Transaction Costs | Cost-recovery model keeping digital payments affordable for merchants and customers. |
| Interoperability | All financial institutions connect via a single link to central infrastructure, enabling payments across any channel. |
| Merchant-Centric | Modern technology standards enabling the bank to offer innovative, user-friendly digital payment products. |
| Reliable and Secure | Role-based access control, audit logging, secure authentication, and transaction authorization throughout. |
| Configurable | All key parameters (merchant types, KYC, MDR, limits, notifications) configurable without code changes. |
