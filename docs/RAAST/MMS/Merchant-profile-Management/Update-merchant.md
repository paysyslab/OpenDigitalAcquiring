import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

# Update Merchant

The Update Merchant functionality allows Back Office users to make updates to an existing merchant's profile. This process follows a structured flow to ensure that only the allowed fields are modified and that the changes are properly recorded.

### Process Maker Level
After logging into the system, users can navigate to the **View Merchants** screen and select the **Update Merchant** option for a particular merchant. The system will open the merchant's profile in an editable mode, where the allowed fields can be updated. Once the necessary changes are made, the user can submit the updated information, which will sent to checker for approval. 

### Editable Fields
Users can update the following merchant details:
- **Mobile Number**: The primary contact number for the merchant.
- **Email Address**: The merchant's email address.
- **Business Address**: The physical address where the merchant operates.
- **Bank Information**: This includes IBAN and Branch Code, allowing updates to the merchant's bank details.
- **MDR Details**: Depending on user permissions, the Merchant Discount Rate (MDR) information can be updated to reflect any changes in the fee structure.

### Uneditable Fields
Certain critical fields are locked once the merchant is onboarded to ensure compliance, risk management, and settlement consistency. These uneditable fields include:
- Merchant Name
- Nature of Business
- Merchant Type
- Expected Monthly Revenue
- City
- Settlement Type
- Alias Type

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-1.png)
</div>
</Zoom>

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-2.png)
</div>
</Zoom>

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-3.png)
</div>
</Zoom>

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-4.png)
</div>
</Zoom>

### Checker Level Approval
Similar to the initial merchant onboarding process, all updates made to merchant details require Checker Level Approval:
- After the **Maker** submits the changes, the updated merchant details are sent to the **Checker** for review.
- The **Checker** verifies the changes and ensures that they align with the required business rules.
- If the **Checker** approves the changes, the updates are finalized, and the merchant’s profile is updated in the system.
- If the **Checker** rejects the updates, the changes are sent back to the **Maker** for revision, and the process is repeated.


<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-checker-1.png)
</div>
</Zoom>

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-checker-2.png)
</div>
</Zoom>

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-checker-3.png)
</div>
</Zoom>

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-checker-4.png)
</div>
</Zoom>

<Zoom>
<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/update-merchant-checker-5.png)
</div>
</Zoom>

This approval process ensures that updates to merchant profiles are properly reviewed and validated, maintaining the accuracy and integrity of merchant data in the system.