# Child Merchant Onboarding

Same 6-step flow as [Parent / Chain Merchant Onboarding](./Parent-Chain-Merchant-Onboarding) with the following key differences:

- **Step 1**: Parent Merchant Selection is mandatory — dropdown shows Active Parent Merchants only. System validates parent-child relationship is permitted.
- **Step 3**: Settlement Type defaults to Central Pay (parent collects). Individual Pay configurable per market.
- **Post-Approval**: Default till auto-created and linked to parent in settlement processing. Aliases (SHID, MBNO, MCOD) generated per child merchant.
- **Merchant Hierarchy**: Child appears under parent in the MMP Merchant Hierarchy View.
