// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid')
  const math = require("remark-math");
  const katex = require("rehype-katex");


  /** @type {import('@docusaurus/types').Config} */
  return {
    title: "LockDev",
    tagline: "For work and fun",
    url: "https://docs.lockdev.com/", // Your website URL
    baseUrl: "/",
    projectName: "mikelockz.github.io",
    organizationName: "mikelockz",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".

    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: "https://github.com/MikeLockz/lockdev-docs/tree/trunk/",
            routeBasePath: "/",
            remarkPlugins: [math, mdxMermaid.default],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "LockDev Docs",
          logo: {
            alt: "LockDev Logo",
            src: "img/logo.svg",
          },
          items: [
            {
              href: "https://github.com/mikelockz/lockdev-docs",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [],
          copyright: `2012`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        mermaid: {
          theme: { light: "neutral", dark: "forest" },
          // config: {
          //   startOnLoad: true,
          //   // theme: "dark",
          // },
          options: {
            maxTextSize: 50,
            flowchart: {
              htmlLabels: false,
            },
            theme: "forest",
            logLevel: 3,
            securityLevel: "loose"
          },
        },
      }),

    markdown: {
      mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
  };
}

module.exports = createConfig;
