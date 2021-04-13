
module.exports = {
  title: 'One Platform For Your Digitalization',
  tagline: 'Let\'s grow through digital transformation with our platform-based solution!',
  url: 'https://feedloop-docu.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'Documentation',
      logo: {
        alt: 'Documentation Logo Feedloop',
        src: 'https://static.wixstatic.com/media/550988_087ff81b45b24164a119788fa88f401d~mv2.png/v1/fill/w_308,h_64,al_c,q_85/Logo%20(3).webp',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency. right
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '#',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Qore Platform',
              to: 'docs/',
            },
            {
              label: 'AIXP Platform',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Solutions',
          items: [
            {
              label: 'Digitalize Business Operation',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Personalized Customer Journey',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Building New Digital Business',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
            {
              label: 'Data Policy',
              href: 'https://opensource.facebook.com/legal/data-policy/',
            },
            {
              label: 'Cookie Policy',
              href: 'https://opensource.facebook.com/legal/cookie-policy/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Feedloop Logo',
        src: 'https://static.wixstatic.com/media/550988_801090ac6f76465489da86dd8243d2e0~mv2.png/v1/fill/w_302,h_64,al_c,q_85,usm_0.66_1.00_0.01/550988_801090ac6f76465489da86dd8243d2e0~mv2.webp',
        href: 'https://www.feedloop.io/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Feedloop, Inc. Built with Love.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
