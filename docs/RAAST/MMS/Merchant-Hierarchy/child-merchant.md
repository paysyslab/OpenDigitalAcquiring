# Child Merchant Configuration

## Overview

In a merchant hierarchy system, **child merchants** are individual business units or merchants that operate under a **parent merchant**. The configuration of child merchants determines how they interact with the parent merchant, what permissions they have, and how transactions are processed. Child merchants can have varying degrees of independence depending on the business requirements.

Child merchants can either:
- Inherit settings, permissions, and configurations from the parent merchant.
- Operate independently with their own configuration, including settings like transaction limits, operational flows, and financial management.

## 1. **Child Merchants Inheriting Parent Merchant Configurations**

### Description
In this configuration, **child merchants** operate under the **parent merchant's** settings. While child merchants can perform transactions and manage operations, their configurations are directly influenced or inherited from the parent merchant. 

### Key Features:
- **Centralized Control**: The parent merchant controls the core functionalities, settings, and permissions for all child merchants. This allows for a streamlined and uniform experience across all child entities.
- **Shared Resources**: Child merchants may share resources such as account configurations, permissions, and system features from the parent merchant.
- **Operational Simplicity**: Since the child merchants are operating under the parent’s settings, there is less complexity in managing their operations and transactions.

### Use Case:
This configuration is suitable for scenarios where multiple smaller merchants are working under a common brand or umbrella. Examples include franchises, partner programs, and retail chains where each child merchant operates in a similar way to the parent.

### How it Works:
- **Permissions**: The parent merchant may set permissions for each child, such as the ability to perform certain types of transactions or access specific system features.
- **Transaction Flow**: Transactions made by child merchants are processed using the parent merchant’s system configurations.
- **Account Management**: Child merchants do not need to create their own accounts for financial transactions, as the parent merchant manages these centrally.

---

## 2. **Child Merchants Operating Independently**

### Description
In this setup, each **child merchant** operates with full autonomy. While they may still be linked to the parent merchant for oversight and reporting, they have control over their individual operations, configurations, and transactions.

### Key Features:
- **Decentralized Management**: Each child merchant has control over their operations, settings, and financial management. The parent merchant may still have oversight, but the child is responsible for their own transactions and configurations.
- **Custom Configuration**: Child merchants can configure their system independently, including transaction limits, customer interactions, and even operational flows.
- **Independent Financial Management**: Each child merchant manages their finances separately, including handling their own payments, accounting, and financial reports.

### Use Case:
This configuration is ideal for businesses where individual merchants need more control over their operations, such as large franchises, multi-store businesses, or merchants with different operational requirements.

### How it Works:
- **Permissions**: Child merchants are granted independent access to their features and configuration settings. They may still be governed by overarching rules from the parent, but they manage their daily operations autonomously.
- **Transaction Flow**: Each child merchant operates its own transaction flow and processes payments and settlements independently from the parent.
- **Account Management**: Each child merchant is responsible for creating and managing their own accounts for financial transactions, which are separate from the parent merchant's account.


## Child Merchant Hierarchy and Operational Flows

### Parent-Child Relationship

- **Parent Merchant**: The central entity that can control or oversee the operations of child merchants. The parent may define key rules, manage high-level configurations, and ensure compliance with regulations.
- **Child Merchants**: These are individual merchants that operate under the parent merchant’s system. They can either inherit configurations or operate independently, depending on the setup.

### Operational Flow Options

| Feature                            | **Inheriting Parent Configurations** | **Independent Child Merchants** | **Hybrid Approach** |
|------------------------------------|--------------------------------------|----------------------------------|---------------------|
| **Control**                        | Parent controls all operations      | Child operates independently     | Mixed control       |
| **Permissions**                    | Inherited from the parent           | Managed by the child             | Shared/Inherited    |
| **Financial Management**           | Managed by parent                   | Managed independently            | Parent oversees      |
| **Transaction Processing**         | Processed through parent            | Independent transaction flow     | Hybrid flow         |
| **Customization**                  | Limited customization               | Full customization               | Partial customization|
| **Use Case**                       | Franchises, shared business models  | Large independent merchants      | Flexible, mixed control |



