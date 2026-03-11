# Static QR Generation

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant Portal** | • Merchant logs in to the portal with provided credentials. <br /> • Merchant selects and clicks the **Static QR Generation** option. |
| **Merchant Portal Services** | • **Pre-check:** Services check if a QR already exists for the merchant. <br /> • **If QR exists:** It is fetched and shown to the Merchant for Download (PDF) or Print. <br /> • **If QR does not exist:** <br /> &nbsp;&nbsp;o Authenticates Token and forwards call with Client ID. <br /> &nbsp;&nbsp;o Calls `GenerateStaticQRCode` API (Acquiring Services - RAAST) upon success. |
| **Acquiring Services (RAAST)** | • Validates the API Parameters. <br /> • **If parameters are missing:** Returns rejection "Invalid Params" to Merchant Portal Services. <br /> • **If parameters are valid:** <br /> &nbsp;&nbsp;o Returns Generated QR String to Merchant Portal Services. |
| **Merchant Portal Services** | • Forwards the Generated QR String to the Merchant Portal Frontend. |
| **Merchant Portal** | • Converts QR String to QR Code image. <br /> • Displays the QR code along with relevant information: <br /> &nbsp;&nbsp;o Till Code of Merchant. <br /> &nbsp;&nbsp;o Merchant DBA Name. <br /> &nbsp;&nbsp;o Merchant Location. <br /> &nbsp;&nbsp;o Merchant Logo (Auto-fetched from Backend if present). <br /> &nbsp;&nbsp;o Scheme Logo (RAAST Logo). |

<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/qr-gen-ff-mp.png)
</div>


## Negative Cases

### Invalid Parameter Values

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant Portal** | • Merchant Portal sends a Generate SQRC Request to Merchant Portal Services. <br /> • Merchant Portal indicates Invalid Parameters. |
| **Merchant Portal Services** | • Merchant Portal Services checks whether the required parameters (Till Code, IBAN, DBA Name, MCC) are valid. <br /> • If the parameters are invalid (e.g., missing or incorrect), Merchant Portal Services returns an error to the Merchant Portal indicating Invalid Parameters. |

<div style={{ textAlign: 'center'}}>
  ![Generate Static QR - Invalid Parameter Values Sequence Diagram](/img/gqr-nc-ff-1.png)
</div>


### Mandatory Parameter Missing

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant Portal** | • Merchant Portal sends a Generate SQRC Request to Merchant Portal Services. |
| **Merchant Portal Services** | • Merchant Portal Services checks if all the mandatory parameters (such as Till Code, IBAN, DBA Name, and MCC) are provided. |

<div style={{ textAlign: 'center'}}>
  ![Generate Static QR - Mandatory Parameter Missing Sequence Diagram](/img/gqr-nc-ff-2.png)
</div>



### Merchant Does Not Exist

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant Portal** | • Merchant Portal sends a Generate SQRC Request to Merchant Portal Services. |
| **Merchant Portal Services** | • Merchant Portal Services requests the merchant details (Till Code, DBA Name, IBAN, MCC) from Acquiring Services (RAAST). <br /> • Merchant Portal Services returns the error to the Merchant Portal, informing the merchant that the Merchant Does Not Exist. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • If the merchant does not exist, Acquiring Services (RAAST) responds with an error indicating Merchant Does Not Exist. |

<div style={{ textAlign: 'center'}}>
  ![Generate Static QR - Merchant Does Not Exist Sequence Diagram](/img/gqr-nc-ff-3.png)
</div>


### Merchant Not Active

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant Portal** | • Merchant Portal sends a Generate SQRC Request to Merchant Portal Services. |
| **Merchant Portal Services** | • Merchant Portal Services requests the merchant details (Till Code, DBA Name, IBAN, MCC) from Acquiring Services (RAAST). <br /> • Merchant Portal Services returns this error to the Merchant Portal, informing the merchant that the Merchant is Not Active. |
| **Acquiring Services (RAAST) & RAAST CAS Services** | • If the Merchant is not active, Acquiring Services (RAAST) responds with an error indicating that the Merchant is Not Active. |

<div style={{ textAlign: 'center'}}>
  ![Generate Static QR - Merchant Not Active Sequence Diagram](/img/gqr-nc-ff-4.png)
</div>


### Business Logic Fail – Amount Greater than Maximum Amount for QR

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Merchant Portal** | • Merchant Portal sends a Generate SQRC Request to Merchant Portal Services. |
| **Merchant Portal Services** | • Merchant Portal Services checks if the requested amount exceeds the maximum allowed limit for generating the static QR code. <br /> • If the Amount exceeds the maximum limit, Merchant Portal Services returns an error to the Merchant Portal, indicating that the Amount is Greater Than the Maximum Limit for the QR code. |

<div style={{ textAlign: 'center'}}>
  ![Generate Static QR - Business Logic Fail - Amount Greater than Maximum Amount Sequence Diagram](/img/gqr-nc-ff-5.png)
</div>
