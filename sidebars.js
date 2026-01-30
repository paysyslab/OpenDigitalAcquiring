// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// module.exports = {
//   overviewSidebar: [
//     {
//       type: 'category',
//       label: 'Overview',
//       collapsible: false,
//       link: { type: 'doc', id: 'overview/index' }, // Correct path to the Overview category
//       items: [
//         {
//           type: 'doc',
//           id: 'overview/developer-workflow',
//           label: 'Developer Workflow',
//         },
//         {
//           type: 'doc',
//           id: 'overview/data-type-references',
//           label: 'Data Type References',
//         },
//         {
//           type: 'doc',
//           id: 'overview/response-codes-error-handling',
//           label: 'Response Codes & Error Handling',
//         },
//       ],
//     },
//   ],

//   backofficeSidebar: [
//     {
//       type: 'category',
//       label: 'Backoffice',
//       collapsible: false,
//       link: { type: 'doc', id: 'backoffice/index' }, // Correct path to the Backoffice category
//       items: [
//         {
//           type: 'doc',
//           id: 'backoffice/dashboard',
//           label: 'Dashboard',
//         },

//         {
//           type: 'doc',
//           id: 'backoffice/compliance',
//           label: 'Compliance Review',
//         },

//         {
//           type: 'category',
//           label: 'Transactions',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/transactions/index',  
//               label: 'Transactions Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/transactions/transaction-list',
//               label: 'Transaction List',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'e-PRC',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/eprc/index',
//               label: 'e-PRC Overview',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'Branch Records',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/index',
//               label: 'Branch Records Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/user-management',
//               label: 'User Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/bulk-upload',
//               label: 'Bulk Uploads',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/branch-records/maker-checker',
//               label: 'Maker / Checker Inbox',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'Partners',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/partners/index',
//               label: 'Partners Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/partners/partner-management',
//               label: 'Partner Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/partners/user-management',
//               label: 'Partner User Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/partners/maker-checker',
//               label: 'Partner Maker / Checker',
//             },
//           ],
//         },

//         {
//           type: 'category',
//           label: 'Sub-Agents',
//           items: [
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/index',
//               label: 'Sub-Agent Overview',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/subagent-management',
//               label: 'Sub-Agent Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/user-management',
//               label: 'Sub-Agent User Management',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/bulk-upload',
//               label: 'Bulk User Upload',
//             },
//             {
//               type: 'doc',
//               id: 'backoffice/subagents/maker-checker',
//               label: 'Sub-Agent Maker / Checker',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  IntroSidebar: [
    
    
  ],
  
  RAASTSidebar: [
     {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      link: { type: 'doc', id: 'RAAST/Introduction-to-RAAST' },
      items: [
        {
          
        },
        
      ],
    },
    
    {
      type: 'category',
      label: 'Solution Overview',
      collapsible: true,
      items: [
        {
          type: 'doc',
          id: 'RAAST/solution-overview/OpenAcq_RAAST_Architecture',
          label: 'Architecural Diagram',
        },
        {
          type: 'doc',
          id: 'RAAST/solution-overview/Open-Connect',
          label: 'Open Connect',
        },
        /*{
          type: 'doc',
          id: 'RAAST/solution-overview/',
          label: 'Open Connect',
        },*/
      ],
    },
  
 
  
  ],
  /*backofficeSidebar: [
    {
      type: 'category',
      label: 'Back Office',
      collapsible: true,
      link: { type: 'doc', id: 'docs/RAAST/solution-overview' },
      items: [
        {
          type: 'doc',
          id: 'back-office/congractulations',
          label: 'Congrats',
        },
        {
          type: 'doc',
          id: 'back-office/transactions',
          label: 'Transactions',
        },
        {
          type: 'doc',
          id: 'back-office/compliance',
          label: 'Compliance',
        },
        {
          type: 'doc',
          id: 'back-office/e-prc',
          label: 'E-PRC',
        },
        {
          type: 'doc',
          id: 'back-office/transaction-reversals',
          label: 'Transaction Reversals',
        },
        {
          type: 'doc',
          id: 'back-office/branch-records',
          label: 'Branch Records',
        },
        {
          type: 'doc',
          id: 'back-office/partners',
          label: 'Partners',
        },
        {
          type: 'doc',
          id: 'back-office/subagents',
          label: 'SubAgents',
        },
        {
          type: 'doc',
          id: 'back-office/checker-flows',
          label: 'Checker Flows',
        },
      ],
    },
    {
      type: 'category',
      label: 'Branch Portal',
      collapsible: true,
      items: [
        {
          type: 'doc',
          id: 'branch-portal/logging-in-and-changing-password',
          label: 'Logging in and Changing Password',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-history',
          label: 'Transaction History',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-lookup',
          label: 'Transaction Lookup',
        },
        {
          type: 'doc',
          id: 'branch-portal/transaction-approval',
          label: 'Transaction Approval',
        },
      ],
    },
  ],*/
};
