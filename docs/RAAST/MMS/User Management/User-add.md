# Add / Update User

## Overview
The **Add / Update User** functionality allows creation and modification of user profiles within the system. Users are configured with identification details, role assignments, approval permissions, and aggregator association based on operational requirements.

## Field Details

**User Name**
- Unique username used for system login and identification.

**First Name**
- User’s first name.

**Last Name**
- User’s last name.

**Email**
- Email address associated with the user account.

**Mobile Number**
- Contact number of the user.

**CNIC**
- Identification number of the user.

**User Type**
- Dropdown selection defining the user category.
- Example shown: Aggregator user type.

**Is Approver**
- Dropdown field indicating whether the user has approval authority.

**Checker**
- Dropdown field to select assigned checker user.

**Role**
- Dropdown selection defining the system role assigned to the user.

**Aggregator**
- Dropdown field to associate the user with a specific aggregator.

**OPENMMS Toggle**
- Toggle option indicating whether system access for OPENMMS is enabled.


## Submission

**Submit Button**
- Saves the entered or updated user details.
- Sends the request for checker approval.



<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/usr-add-img1.png)
</div>



<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/usr-up-img1.png)
</div>


## Checker Approval

- After submission or update, the user record is routed for checker approval.
- The user becomes effective only after approval.


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/usr-add-chk-img1.png)
</div>
