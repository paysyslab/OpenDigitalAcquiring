# Merchant Hierarchy Management (MMP)

Merchant Hierarchy Management refers to the process of organizing merchants into a structured hierarchy based on their business relationships, such as parent-child relationships, geographical distribution, and operational roles. This system allows for efficient management, tracking, and reporting of merchant activities, as well as control over merchant access, data, and transaction processing.

### **Key Features of Merchant Hierarchy Management:**

- **Parent-Child Relationship Mapping**: Merchants can be categorized under parent or child merchants, reflecting their business structure.
- **Role-Based Access Control (RBAC)**: Different roles and permissions can be assigned to each level in the hierarchy to restrict or grant access to specific functionality.
- **Centralized Merchant Management**: All merchants within the hierarchy can be managed from a central location, improving efficiency and streamlining operations.
- **Configurable Reporting**: The system allows for the generation of reports based on merchant hierarchy, such as sales data, transaction volume, and merchant performance.


## **Merchant Hierarchy Structure**

Merchant hierarchy is designed to categorize and organize merchants based on business needs and operational structure. It supports the following configurations:

### **1. Parent Merchant**
- A **parent merchant** is the highest level in the hierarchy. Typically, this could be the **head office** or **primary business unit**.
- **Role**: Manages overall operations, oversees child merchants, and handles centralized reporting and compliance.

### **2. Child Merchant**
- A **child merchant** is a subsidiary or **branch** of the parent merchant. This could represent regional branches or specific business operations under the parent merchant.
- **Role**: Operates independently but reports to the parent merchant. Handles day-to-day operations within their jurisdiction.

### **3. Merchant Group**
- A **merchant group** is a collection of **parent** and **child merchants** within a specific region, industry, or business function.
- **Role**: Allows for grouping merchants together for streamlined management, reporting, and analysis.

### **4. Aggregator**
- An **aggregator** is a merchant that groups several individual merchants together, acting as an intermediary between the merchants and the acquiring bank.
- **Role**: Facilitates transaction processing and reporting for multiple merchants under its network.


## **Key Features of Merchant Hierarchy Management**

### **Role-Based Access Control (RBAC)**

Our system allows for **customizable permissions** at each level of the merchant hierarchy. Administrators can assign different roles and permissions to each level, ensuring that sensitive data and functionalities are only accessible to authorized users. 

| **Role**       | **Permissions**                                                     | **Description**                                                   |
|----------------|---------------------------------------------------------------------|-------------------------------------------------------------------|
| **Parent Merchant**  | Full access to all child merchant data, centralized reporting.     | Manages operations, oversees child merchants, and handles high-level compliance. |
| **Child Merchant**   | Limited access to data and functions relevant to their operations. | Operates independently, with restricted access to the parent merchant's data. |
| **Aggregator**       | Aggregated view of multiple child merchants' data.                | Facilitates transaction processing and management for multiple merchants. |


### **Merchant Hierarchy Configuration**

Our system provides flexibility in how merchant hierarchies are set up. Hierarchies can be **nested** or **flat**, depending on the business model. Configuration options include:

- **Multiple Levels of Hierarchy**: Support for several levels of merchants (e.g., Parent → Child → Sub-Child).
- **Geographical Hierarchies**: Merchants can be organized by region, such as country or city, to align with operational needs.
- **Business-Specific Hierarchies**: Merchants can be grouped based on business function, such as **franchise** or **brand**.


### **Merchant Access and Control**

Our system ensures that each merchant in the hierarchy has appropriate access and control based on their role and position. 

- **Centralized Management**: Parent merchants have control over all aspects of child merchants, including data, reports, and transaction approval.
- **Decentralized Operations**: Child merchants can manage their own day-to-day operations, while still being subject to the parent merchant’s overall oversight.
- **Transaction Routing**: Merchants in the hierarchy can process transactions independently or route them through an aggregator or parent merchant.


## **Configurable Reporting**

Merchant Hierarchy Management allows for customized reporting based on the merchant hierarchy. The system enables:

- **Consolidated Reporting**: Parent merchants can access aggregated data for all their child merchants, allowing for high-level reporting.
- **Individual Merchant Reporting**: Child merchants can generate their own reports based on their operations, sales, and transactions.
- **Performance Analysis**: The system provides insights into the performance of different merchant levels, helping identify high-performing merchants or those that may need additional support.

### **Report Examples:**

| **Report Type**   | **Description**                                             | **Level of Access**                                      |
|-------------------|-------------------------------------------------------------|----------------------------------------------------------|
| **Sales Report**  | Tracks sales activity across all merchants in the hierarchy. | Parent, Aggregator, Child Merchant                       |
| **Transaction Report** | Provides a detailed breakdown of transactions processed.    | Parent, Aggregator, Child Merchant                       |
| **Performance Report** | Measures key metrics like revenue, transaction volume, etc.   | Parent, Aggregator, Child Merchant                       |



