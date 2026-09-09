/** @type {import('@docusaurus/plugin-content-docs).SidebarsConfig} */
module.exports = {

  // ─────────────────────────────────────────────
  // INTERNATIONAL ACQUIRING SIDEBAR
  // Based on the Axian Group Open Digital Acquiring
  // Merchant Management Platform (MMP) FSD v2.0
  // ─────────────────────────────────────────────
  InternationalAcquiringSidebar: [
    { type: 'doc', id: 'International/Introduction', label: 'Introduction & Platform Overview' },
    { type: 'doc', id: 'International/Solution-Overview', label: 'Solution Overview' },
    { type: 'doc', id: 'International/Glossary', label: 'MMP Definitions' },

    {
      type: 'category',
      label: 'Merchant Management System (Backoffice)',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Administrative Features',
          collapsible: true,
          items: [
            { type: 'doc', id: 'International/MMS/Administrative/Role-Management', label: 'Role Management' },
            { type: 'doc', id: 'International/MMS/Administrative/Aggregator-Management', label: 'Aggregator Management' },
            { type: 'doc', id: 'International/MMS/Administrative/User-Management', label: 'User Management' },
            { type: 'doc', id: 'International/MMS/Administrative/Handler-Management', label: 'Handler Management' },
          ],
        },
        { type: 'doc', id: 'International/MMS/Merchant-Profile-Management', label: 'Merchant Profile Management' },
        {
          type: 'category',
          label: 'Merchant Onboarding and Lifecycle',
          collapsible: true,
          items: [
            { type: 'doc', id: 'International/MMS/Onboarding/Parent-Chain-Merchant-Onboarding', label: 'Parent / Chain Merchant Onboarding' },
            { type: 'doc', id: 'International/MMS/Onboarding/Child-Merchant-Onboarding', label: 'Child Merchant Onboarding' },
            { type: 'doc', id: 'International/MMS/Onboarding/Individual-Sole-Proprietor-Onboarding', label: 'Individual / Sole Proprietor Onboarding' },
            { type: 'doc', id: 'International/MMS/Onboarding/Modify-Upgrade-Bulk-Operations', label: 'Modify / Upgrade / Change Status / Bulk Operations' },
          ],
        },
        { type: 'doc', id: 'International/MMS/Rules-Management', label: 'Rules Management' },
        { type: 'doc', id: 'International/MMS/Notification-Configuration', label: 'Notification Configuration' },
        {
          type: 'category',
          label: 'Merchant Management Operations',
          collapsible: true,
          items: [
            { type: 'doc', id: 'International/MMS/Operations/Analytics-Dashboard', label: 'Analytics Dashboard' },
            { type: 'doc', id: 'International/MMS/Operations/Transaction-Monitoring', label: 'Transaction Monitoring' },
            { type: 'doc', id: 'International/MMS/Operations/Transaction-View', label: 'Transaction View' },
            { type: 'doc', id: 'International/MMS/Operations/Transaction-Reports', label: 'Transaction Reports' },
            { type: 'doc', id: 'International/MMS/Operations/Audit-Logging', label: 'Audit Logging' },
          ],
        },
        { type: 'doc', id: 'International/MMS/Settlement-Reconciliation', label: 'Settlement and Reconciliation Framework' },
      ],
    },

    {
      type: 'category',
      label: 'Merchant Portal (Merchant / Agent-facing)',
      collapsible: true,
      items: [
        { type: 'doc', id: 'International/Merchant-Portal/Login', label: 'Login' },
        { type: 'doc', id: 'International/Merchant-Portal/Alias-Management', label: 'Alias Management' },
        { type: 'doc', id: 'International/Merchant-Portal/Till-Management', label: 'Merchant Till Management' },
        { type: 'doc', id: 'International/Merchant-Portal/Notification-Management', label: 'Notification Management' },
        {
          type: 'category',
          label: 'Transactions via Merchant Portal',
          collapsible: true,
          items: [
            { type: 'doc', id: 'International/Merchant-Portal/Transactions/Scan-Pay-OnUs', label: 'Scan and Pay - On-Us QR Payment' },
            { type: 'doc', id: 'International/Merchant-Portal/Transactions/Scan-Pay-OffUs', label: 'Scan and Pay - Off-Us QR Payment' },
            { type: 'doc', id: 'International/Merchant-Portal/Transactions/Request-to-Pay', label: 'Request to Pay (RTP)' },
            { type: 'doc', id: 'International/Merchant-Portal/Transactions/Send-Money', label: 'Outgoing Payments - Send Money' },
            { type: 'doc', id: 'International/Merchant-Portal/Transactions/Cashout-via-Agent', label: 'Cashout via Agent' },
            { type: 'doc', id: 'International/Merchant-Portal/Transactions/Bill-Payment', label: 'Bill Payment' },
            { type: 'doc', id: 'International/Merchant-Portal/Transactions/Transaction-History-Balance-Inquiry', label: 'Transaction History and Balance Inquiry' },
          ],
        },
      ],
    },

    { type: 'doc', id: 'International/Appendix-Market-Configuration', label: 'Appendix - Market Configuration Notes' },
  ],

  // ─────────────────────────────────────────────
  // HYBRID SIDEBAR (legacy placeholder, no longer linked from navbar)
  // ─────────────────────────────────────────────
  HybridSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'hybrid/intro',
    },
    {
      type: 'category',
      label: 'Merchant App',
      items: [
        {
          type: 'category',
          label: 'Functional Specifications',
          items: [
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Merchant-Registeration', label: 'Merchant Registeration' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Merchant-Login', label: 'Merchant Login' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Self-Onboarding', label: 'Self Onboarding' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Merchant-approval', label: 'Merchant Approval from Backoffice' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/Change-login', label: 'Change/Forgot Login' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/DQRC', label: 'DQRC' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/RTP-n', label: 'RTP Now' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/RTP-l', label: 'RTP Later' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/mpos', label: 'mPOS' },
            { type: 'doc', id: 'hybrid/Merchant-app/Functional-specification/softpos', label: 'SoftPOS' },
          ],
        },
        {
          type: 'category',
          label: 'Merchant ETB',
          items: [
            { type: 'doc', id: 'hybrid/Merchant-app/Onboarded-Merchant/Merchant-Registeration', label: 'Merchant Registeration' },
            { type: 'doc', id: 'hybrid/Merchant-app/Onboarded-Merchant/Merchant-Login', label: 'Merchant Login' },
          ],
        },
        { type: 'doc', id: 'hybrid/Merchant-app/Dashboard', label: 'Dashboard' },
        { type: 'doc', id: 'hybrid/Merchant-app/self-onboarding', label: 'Merchant Self-Onboarding' },
        { type: 'doc', id: 'hybrid/Merchant-app/SQRC-Generation', label: 'SQRC Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/DQRC-Generation', label: 'DQRC Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/RTP-now-Generation', label: 'RTP-Now Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/RTP-later-Generation', label: 'RTP-later Flow' },
        { type: 'doc', id: 'hybrid/Merchant-app/Transaction-History', label: 'Transaction History' },
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // RAAST ACQUIRING SIDEBAR (used for Raast Acquiring)
  // Single sidebar with top-level, collapsible systems:
  // Merchant Management System, Merchant Portal,
  // Merchant Application, POS, Sales Application
  // ─────────────────────────────────────────────
  RaastAcquiringSidebar: [
    {
      type: 'doc',
      id: 'RAAST/RAAST-P2M-Acquiring',
      label: 'RAAST P2M Acquiring',
    },
    { type: 'doc', id: 'RAAST/Glossary', label: 'Glossary & Definitions' },

    // ── Merchant Management System ──────────────
    {
      type: 'category',
      label: 'Merchant Management System',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Administrative Features',
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'User Management',
              collapsible: true,
              items: [
                { type: 'doc', id: 'RAAST/MMS/User Management/User-view', label: 'View Users' },
                { type: 'doc', id: 'RAAST/MMS/User Management/User-add', label: 'Add Users' },
                { type: 'doc', id: 'RAAST/MMS/User Management/User-login', label: 'User Login' },
                { type: 'doc', id: 'RAAST/MMS/User Management/User-changepassword', label: 'Change Password' },
                { type: 'doc', id: 'RAAST/MMS/User Management/User-forgotpassword', label: 'Forgot Password' },
                { type: 'doc', id: 'RAAST/MMS/User Management/User-invalid', label: 'Invalid ID/Password Login Flow (Account Lockout) ' },
              ],
            },
            {
              type: 'category',
              label: 'Handler Management',
              collapsible: true,
              items: [
                { type: 'doc', id: 'RAAST/MMS/Handler Management/Addhandler', label: 'Add Handler' },
                { type: 'doc', id: 'RAAST/MMS/Handler Management/modifyhandler', label: 'Modify Handler' },
                { type: 'doc', id: 'RAAST/MMS/Handler Management/deletehandler', label: 'Delete Handler' },
              ],
            },
            {
              type: 'category',
              label: 'Role Management',
              collapsible: true,
              items: [
                { type: 'doc', id: 'RAAST/MMS/Role Management/Role-view', label: 'View Role' },
                { type: 'doc', id: 'RAAST/MMS/Role Management/Role-add', label: 'Add Roles' },
              ],
            },
            {
              type: 'category',
              label: 'Aggregator Management',
              collapsible: true,
              items: [
                { type: 'doc', id: 'RAAST/MMS/Aggregatoer-Management/Aggregator-view', label: 'View Aggregator' },
                { type: 'doc', id: 'RAAST/MMS/Aggregatoer-Management/Aggregator-add', label: 'Add/Update Aggregator' },
              ],
            },
            {
              type: 'category',
              label: 'Merchant Management',
              collapsible: true,
              items: [
                { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Merchant-Onboarding', label: 'Add Merchant' },
                { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/View-merchant', label: 'View Merchant' },
                { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Update-merchant', label: 'Update Merchant' },
                { type: 'doc', id: 'RAAST/MMS/Functional-specification/Get-merchant-profile', label: 'Get Merchant Profile' },
                { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/QR-Generation', label: 'QR Generation' },
                { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Transaction-Summary', label: 'Transaction Summary' },
              ],
            },
            {
              type: 'category',
              label: 'Merchant Hierarchy',
              collapsible: true,
              items: [
                { type: 'doc', id: 'RAAST/MMS/Merchant-Hierarchy/Introduction', label: 'Introduction' },
                { type: 'doc', id: 'RAAST/MMS/Merchant-Hierarchy/Parent-Merchant', label: 'Parent Merchant' },
                { type: 'doc', id: 'RAAST/MMS/Merchant-Hierarchy/child-merchant', label: 'Child Merchant' },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Bulk Operations',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/Functional-specification/Bulk-merchant-onboarding', label: 'Bulk Merchant Profile Creation' },
            { type: 'doc', id: 'RAAST/MMS/Functional-specification/Update-merchant-profile', label: 'Bulk Merchant Profile Updation' },
            { type: 'doc', id: 'RAAST/MMS/Merchant-profile-Management/Bulk-Merchant-onboarding', label: 'Bulk Merchant Onboarding' },
            { type: 'doc', id: 'RAAST/MMS/Functional-specification/Generate-static-QR', label: 'Bulk Static QR Generation' },
            { type: 'doc', id: 'RAAST/Merchant-portal/RTP-later-bulk', label: 'RTP Later Bulk Import' },
            { type: 'doc', id: 'RAAST/Merchant-portal/RTP-later-Transactions', label: 'RTP Bulk Transaction' },
          ],
        },
        {
          type: 'category',
          label: 'Terminal Management',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-View', label: 'View Terminal' },
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-Creation', label: 'Terminal Creation' },
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Terminal-Update', label: 'Update Terminal' },
            { type: 'doc', id: 'RAAST/MMS/Terminal Management/Bulk-Terminal', label: 'Bulk Terminal Creation' },
          ],
        },
        {
          type: 'category',
          label: 'Soundbox Management',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/Soundbox-Management/Soundbox-Inventory', label: 'Soundbox Inventory' },
            { type: 'doc', id: 'RAAST/MMS/Soundbox-Management/Soundbox-Devices', label: 'Soundbox Devices' },
          ],
        },
        {
          type: 'category',
          label: 'MDR Management',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/MDR/MDR-Profile', label: 'MDR Profile' },
            { type: 'doc', id: 'RAAST/MMS/MDR/MDR-add', label: 'Add MDR' },
          ],
        },
        {
          type: 'category',
          label: 'Merchant Management Operations',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/MMS/Operations/Transaction-Monitoring', label: 'Transaction Monitoring' },
            { type: 'doc', id: 'RAAST/MMS/Operations/Transaction-View', label: 'Transaction View' },
            { type: 'doc', id: 'RAAST/MMS/Operations/Transaction-Reports', label: 'Transaction Reports' },
            { type: 'doc', id: 'RAAST/MMS/Operations/Audit-Logging', label: 'Audit Logging' },
          ],
        },
      ],
    },

    // ── Merchant Portal ──────────────────────────
    {
      type: 'category',
      label: 'Merchant Portal',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Functional Specification',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/Generate-Static-QR', label: 'Generate Static QR' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/View-Transactions', label: 'View Transactions' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/SQRC-OnUs-Flow', label: 'SQRC' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/DQRC-OnUs', label: 'DQRC' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/RTP-Now-OnUs', label: 'Request To Pay Now' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/RTP-Later-OnUs', label: 'Request To Pay Later' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/Merchant-notification', label: 'Merchant Notification' },
            { type: 'doc', id: 'RAAST/Merchant-portal/Functional-specification/Settlement-Features', label: 'Settlement Features' },
          ],
        },
      ],
    },

    // ── Merchant Application ─────────────────────
    {
      type: 'category',
      label: 'Merchant Application',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Functional Specifications',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Merchant-Registeration', label: 'Merchant Registeration' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Merchant-Login', label: 'Merchant Login' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Self-Onboarding', label: 'Self Onboarding' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Merchant-approval', label: 'Merchant Approval from Backoffice' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/Change-login', label: 'Change/Forgot Login' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/DQRC', label: 'DQRC' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/RTP-n', label: 'RTP Now' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/RTP-l', label: 'RTP Later' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/New-to-Merchant', label: 'New-to-Merchant' },
            { type: 'doc', id: 'RAAST/Merchant-app/Functional-specification/New-to-Bank', label: 'New-to-Bank' },
            { type: 'doc', id: 'RAAST/Merchant-app/Dashboard', label: 'Dashboard' },
            { type: 'doc', id: 'RAAST/Merchant-app/SQRC-Generation', label: 'SQRC Flow' },
            { type: 'doc', id: 'RAAST/Merchant-app/Transaction-History', label: 'Transaction History' },
          ],
        },
      ],
    },

    // ── POS ────────────────────────────────────────
    {
      type: 'category',
      label: 'POS',
      collapsible: true,
      items: [
        { type: 'doc', id: 'POS/Intro', label: 'Introduction' },
        { type: 'doc', id: 'POS/FSD/pos', label: 'POS payment flow' },
        { type: 'doc', id: 'POS/FSD/mpos', label: 'mPOS payment flow' },
        { type: 'doc', id: 'POS/FSD/softpos', label: 'SoftPOS payment flow' },
      ],
    },

    // ── Transactions ──────────────────────────────
    {
      type: 'category',
      label: 'Transactions',
      collapsible: true,
      items: [
        { type: 'doc', id: 'RAAST/Transactions/Overview', label: 'Overview' },
        {
          type: 'category',
          label: 'Static QRC (SQRC)',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/Transactions/SQRC-OnUs', label: 'On-Us Transaction' },
            { type: 'doc', id: 'RAAST/Transactions/SQRC-OffUs', label: 'Off-Us Transaction' },
          ],
        },
        {
          type: 'category',
          label: 'Dynamic QRC (DQRC)',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/Transactions/DQRC-OnUs', label: 'On-Us Transaction' },
            { type: 'doc', id: 'RAAST/Transactions/DQRC-OffUs', label: 'Off-Us Transaction' },
          ],
        },
        {
          type: 'category',
          label: 'Request to Pay - Now',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/Transactions/RTP-Now-OnUs', label: 'On-Us Transaction' },
            { type: 'doc', id: 'RAAST/Transactions/RTP-Now-OffUs', label: 'Off-Us Transaction' },
          ],
        },
        {
          type: 'category',
          label: 'Request to Pay - Later',
          collapsible: true,
          items: [
            { type: 'doc', id: 'RAAST/Transactions/RTP-Later-OnUs', label: 'On-Us Transaction' },
            { type: 'doc', id: 'RAAST/Transactions/RTP-Later-OffUs', label: 'Off-Us Transaction' },
          ],
        },
        { type: 'doc', id: 'RAAST/Transactions/Notify-Merchant-Payment', label: 'Notify Merchant and Payment' },
        { type: 'doc', id: 'RAAST/Transactions/Transaction-Status-Model', label: 'Transaction Status Model' },
      ],
    },

    // ── Settlement ─────────────────────────────────
    {
      type: 'category',
      label: 'Settlement',
      collapsible: true,
      items: [
        { type: 'doc', id: 'RAAST/Settlement/Reconciliation-Data-Points', label: 'Reconciliation Data Points' },
        { type: 'doc', id: 'RAAST/Settlement/MDR-FED-Calculation', label: 'MDR & FED Calculation Detail' },
        { type: 'doc', id: 'RAAST/Settlement/Same-Day-Batch-Settlement', label: 'Same-Day Batch Settlement' },
        { type: 'doc', id: 'RAAST/Settlement/TN-Deferred-Settlement', label: 'T+N Deferred Settlement' },
      ],
    },

    // ── APIs to be Exposed ─────────────────────────
    {
      type: 'category',
      label: 'APIs to be Exposed',
      collapsible: true,
      items: [
        { type: 'doc', id: 'RAAST/APIs/RAAST-OC-APIs', label: 'Exposed by RAAST OC' },
        { type: 'doc', id: 'RAAST/APIs/Bank-APIs', label: 'Exposed by Bank' },
      ],
    },

    { type: 'doc', id: 'RAAST/Assumptions', label: 'Assumptions' },

    // ── Sales Application (placeholder) ──────────
    {
      type: 'category',
      label: 'Sales Application',
      collapsible: true,
      items: [
        { type: 'doc', id: 'RAAST/Sales-App/intro', label: 'Introduction' },
        { type: 'doc', id: 'RAAST/Sales-App/dashboard', label: 'Dashboard' },
        { type: 'doc', id: 'RAAST/Sales-App/onboarding', label: 'Merchant Onboarding' },
        { type: 'doc', id: 'RAAST/Sales-App/lead-management', label: 'Lead Management' },
      ],
    },
  ],

};
