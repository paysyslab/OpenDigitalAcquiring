// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Digital Acquiring',
  tagline: 'API Documentation for OpenAcquiring',
  favicon: 'img/Open-Acquiring.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  

  // Set the production url of your site here
  url: 'https://paysyslabs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/OpenDigitalAcquiring/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'paysyslab', // Usually your GitHub org/user name.
  projectName: 'OpenDigitalAcquiring', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw', 
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },


  plugins: ['docusaurus-plugin-image-zoom'],  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',  
          sidebarPath: require.resolve('./sidebars.js'),  
        },
        blog: false,  
        theme: {
        customCss: './src/css/custom.css',  
        },
      },
    ],
  ],


  
themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
    zoom: {
      selector: '.theme-doc-markdown img, article img',
      config: {
      margin: 24,
      background: '#000',
    },
},
    tableOfContents: {
      minHeadingLevel: 2,  
      maxHeadingLevel: 4,  
    },

    navbar: {
      logo: {
        alt: 'Paysys Labs',
        src: 'img/Open-Acquiring.png',
        style: {
      width: '220px',  
      height: 'auto',  
    }, 
     
      },
      items: [
        { to: '/docs/RAAST/MMS/User Management/User-view', label: 'Merchant management', position: 'left' },
        { to: '/docs/RAAST/Merchant-portal/dashboard', label: 'Merchant portal', position: 'left' },
        { to: '/docs/RAAST/Merchant-app/Dashboard', label: 'Merchant app', position: 'left'},
      ],
    },

    docs: {
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
      
    },
    
  },

    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paysys Labs.`,
    },
    stylesheets: [
    'https://cdn.jsdelivr.net/npm/medium-zoom@1.0.0/dist/medium-zoom.css',  
  ],
  },



};



export default config;
