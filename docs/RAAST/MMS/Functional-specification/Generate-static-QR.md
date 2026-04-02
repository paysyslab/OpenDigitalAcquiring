# Bulk Static QR Generation

## Functional Flow

| **Requester Action(s)** | **Process Description** |
| :--- | :--- |
| **Backoffice User** | • User logs in with credentials. <br /> • User selects the **Bulk Static QR Generation** option. <br /> • User uploads the file for Bulk QR generation. <br /> • Each row must contain: <br /> &nbsp;&nbsp;o IBAN Number <br /> &nbsp;&nbsp;o Merchant DBA Name <br /> &nbsp;&nbsp;o Amount (Optional) <br /> &nbsp;&nbsp;o Till Code of Merchant |
| **Backend Services** | • **Validation:** <br /> &nbsp;&nbsp;o Verifies all parameters are present in the file. <br /> &nbsp;&nbsp;o If parameters are missing: Return "Invalid Params in Row [X]" to Backoffice UI. <br /> • **Execution (If valid):** <br /> &nbsp;&nbsp;o Authenticates Token and forwards call with Client ID. <br /> &nbsp;&nbsp;o Sends `GenerateBulkQR` Request to Acquiring Services (RAAST). |
| **Acquiring Services (RAAST)** | • Validates the API Parameters. <br /> • If parameters are missing: Return rejection "Invalid Params" to Backend Services. <br /> • If parameters are valid: <br /> &nbsp;&nbsp;o Return Generated QR Strings for each record to Backend Services. |
| **Backend Services** | • **Processing:** <br /> &nbsp;&nbsp;o Converts returned Strings into QR Code images. <br /> &nbsp;&nbsp;o Saves all QR Codes into a PDF. <br /> &nbsp;&nbsp;o Each QR is numbered according to its row number in the original file. <br /> • **Delivery:** <br /> &nbsp;&nbsp;o Returns the generated PDF to the Backoffice. |
| **Backoffice** | • Backoffice User downloads the PDF containing the generated QR Codes. |


<div style={{ textAlign: 'center'}}>
  ![OpenConnect – RAAST Integration Architecture](/img/bulk-qr-gen-ff.png)
</div>
