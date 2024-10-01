import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const npm2yarnOptions = {
  sync: true,
  converters: ["yarn", "pnpm", "bun"],
};

const config: Config = {
  title: "Stupid Webauthn",
  tagline: "Stupid Simple Passwordless Authentication",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://stupidwebauthn.site",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stupidwebauthn", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    {
      defer: true,
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "12283d28-13c4-48f5-87bf-0f265a9e0d39",
      "data-domains": "stupidwebauthn.site",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), npm2yarnOptions],
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), npm2yarnOptions],
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.png",
    navbar: {
      title: "Stupid Webauthn Docs",
      logo: {
        alt: "Stupid Webauthn Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/stupidwebauthn",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Pages",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Github Discussions",
              href: "https://github.com/orgs/stupidwebauthn/discussions",
            },
            {
              label: "Auth Server Issues",
              href: "https://github.com/stupidwebauthn/server/issues",
            },
            {
              label: "Client NPM Issues",
              href: "https://github.com/stupidwebauthn/client/issues",
            },
            {
              label: "Example Issues",
              href: "https://github.com/stupidwebauthn/example/issues",
            },
          ],
        },
      ],
      copyright: `MIT License - Lucian Last - ${new Date().getFullYear()} `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
