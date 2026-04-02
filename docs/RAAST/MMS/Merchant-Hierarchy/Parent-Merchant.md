# Parent Merchant

A Parent Merchant refers to the highest level in the merchant hierarchy, typically representing the head office or primary business unit. This entity has control over all associated child merchants and plays a crucial role in overseeing operations, ensuring compliance, and managing centralized reporting. The Parent Merchant typically handles broader operational tasks, and its permissions span across all levels of the merchant hierarchy.

## **Key Responsibilities of a Parent Merchant**

### **1. Centralized Management**
- The Parent Merchant is responsible for overseeing the operations of its associated **child merchants**, ensuring consistent policies, procedures, and compliance.
- **Action**: The Parent Merchant can make decisions that affect the entire merchant group, including setting rules for pricing, transaction limits, and operational standards.

### **2. Compliance and Regulatory Oversight**
- Parent Merchants are responsible for ensuring that all child merchants comply with regulatory requirements (such as **KYC**, **AML**, and data privacy regulations).
- **Action**: The Parent Merchant submits regulatory filings or oversees compliance for all its subsidiaries.

### **3. Role-Based Access Control (RBAC)**
- The Parent Merchant has the ability to manage roles and permissions for **child merchants** and define what level of access each merchant in the hierarchy should have.
- **Action**: The Parent Merchant configures access permissions, ensuring that only authorized personnel can manage or view sensitive merchant data.

### **4. Centralized Reporting**
- Parent Merchants can view aggregated data from all child merchants in the hierarchy, which aids in business analysis, decision-making, and performance monitoring.
- **Action**: The Parent Merchant can generate consolidated sales, transaction, and performance reports for its entire network.


## **Key Features of Parent Merchant Role**

| **Feature**                  | **Description**                                                     | **Permission Level** |
|------------------------------|---------------------------------------------------------------------|----------------------|
| **Centralized Oversight**     | Full control over all child merchants, including access, operations, and data management. | Full access to all child merchants’ data. |
| **Compliance Management**     | Ensures that all child merchants meet regulatory standards and submits any required documentation. | Can enforce compliance policies across all child merchants. |
| **RBAC Configuration**        | Assigns permissions and roles to child merchants, defining what actions each can perform. | Defines access levels for all child merchants. |
| **Reporting & Analytics**     | Generates consolidated reports and analytics for the entire merchant network. | Access to full reporting on performance, sales, and transactions for all merchants. |


## **System Support for Parent Merchant**

### **Role-Based Access Control (RBAC)**

The system allows the **Parent Merchant** to configure access for **child merchants** based on the role and operational needs. Roles like **Admin**, **Manager**, and **Viewer** can be configured at the **Parent Merchant** level and assigned to each child merchant.

| **Role**         | **Permissions**                                                     | **Description**                                                    |
|------------------|---------------------------------------------------------------------|--------------------------------------------------------------------|
| **Admin**        | Full access to all child merchant data, settings, and reporting.    | Manages the entire merchant hierarchy, including financial controls. |
| **Manager**      | Limited access to specific child merchants and reporting data.     | Responsible for overseeing specific operations and teams within the merchant hierarchy. |
| **Viewer**       | View-only access to reports and merchant data.                     | Can access reports and data but cannot modify any information.    |


### **Merchant Hierarchy Configuration**

The system allows the **Parent Merchant** to manage **multi-level hierarchies**. The configuration options include:

1. **Parent → Child**: A simple hierarchical structure where a Parent Merchant oversees several Child Merchants.
2. **Parent → Child → Sub-Child**: More complex hierarchies where child merchants can have their own set of child merchants, allowing for regional or departmental segregation.
3. **Aggregator Models**: Where the Parent Merchant serves as an aggregator for multiple smaller merchants, centralizing transaction processing and reporting.

### **Geographical Hierarchies**
Parent Merchants can group Child Merchants based on **geographical locations**, helping to manage and monitor merchant activities across different regions.

| **Region**       | **Child Merchants**                       | **Description**                                        |
|------------------|-------------------------------------------|--------------------------------------------------------|
| **North America**| 5 regional merchants                      | Parent merchant manages operations across multiple countries in North America. |
| **Europe**       | 8 country-specific merchants              | Parent oversees operations in European countries.      |
| **Asia**         | Multiple merchants in different countries | Parent merchant manages an extensive network across Asia. |


## **Centralized Reporting for Parent Merchants**

The **Parent Merchant** has access to **global data** and can generate the following types of reports:

1. **Sales Performance Report**: A consolidated report of sales data across all child merchants, useful for performance analysis and forecasting.
2. **Transaction Volume Report**: Tracks transaction activity at the parent level and breaks it down by child merchants for detailed analysis.
3. **Compliance and Risk Report**: Ensures that all child merchants comply with regulatory requirements and internal business policies.

| **Report Type**           | **Description**                                             | **Access Level**    |
|---------------------------|-------------------------------------------------------------|---------------------|
| **Sales Report**           | Aggregated sales data for all merchants under the parent merchant. | Parent Merchant     |
| **Transaction Report**     | Provides transaction volume, frequency, and value for all merchants. | Parent Merchant     |
| **Compliance Report**      | Detailed audit of KYC, AML, and other compliance aspects.   | Parent Merchant     |

