import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YeYang's Notes",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/dummy-examples/markdown-examples" },
    ],

    sidebar: [
      {
        collapsed: true,
        text: "Library & Framework",
        items: [
          {
            collapsed: true,
            text: "ReactJS",
            items: [
              {
                collapsed: false,
                text: "Get Started",
                items: [
                  {
                    text: "React Ecosystem",
                    link: "/library-and-framework/reactjs/get-started/react-ecosystem",
                  },
                  {
                    text: "Initialize NPM",
                    link: "/library-and-framework/reactjs/get-started/initialize-npm",
                  },
                  {
                    text: "Module Path Aliases",
                    link: "/library-and-framework/reactjs/get-started/module-path-aliases",
                  },
                ],
              },
              {
                collapsed: false,
                text: "Hooks",
                items: [
                  {
                    text: "useContext",
                    link: "/library-and-framework/reactjs/hooks/use-context",
                  },
                  {
                    text: "useTransition",
                    link: "/library-and-framework/reactjs/hooks/use-transition",
                  },
                ],
              },
              {
                collapsed: false,
                text: "State Managemnet",
                items: [
                  {
                    text: "useContext",
                    link: "/library-and-framework/reactjs/state-management/use-context",
                  },
                  {
                    text: "Redux",
                    link: "/library-and-framework/reactjs/state-management/redux",
                  },
                  {
                    text: "Zustand",
                    link: "/library-and-framework/reactjs/state-management/zustand",
                  },
                ],
              },
              { collapsed: false, text: "Source Code" },
              { collapsed: false, text: "Interview Questions" },
            ],
          },
          {
            text: "Vue.js",
          },
          {
            text: "NestJS",
          },
          {
            text: "Next.js",
          },
          {
            text: "Java Web",
          },
        ],
      },
      {
        collapsed: true,
        text: "Programming Language",
        items: [
          {
            text: "Javascript",
          },
          {
            text: "Typescript",
          },
          {
            text: "Java",
          },
        ],
      },

      {
        collapsed: true,
        text: "Data Structure & Algorithm",
        items: [
          {
            text: "Data Types",
          },
        ],
      },
      {
        collapsed: true,
        text: "Tools & Utilities",
        items: [
          {
            text: "Git",
          },
        ],
      },
      {
        collapsed: true,
        text: "Dummy Examples",
        items: [
          {
            text: "Markdown Examples",
            link: "/dummy-examples/markdown-examples",
          },
          { text: "Runtime API Examples", link: "/dummy-examples/api-examples" },
          { text: "Vue In MD", link: "/dummy-examples/vue-in-md" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],

    search: {
      provider: "local",
    },

    editLink: {
      text: "Edit this page on GitHub",
      pattern: ({ filePath }) => {
        if (filePath.startsWith("packages/")) {
          return `https://github.com/acme/monorepo/edit/main/${filePath}`;
        } else {
          return `https://github.com/acme/monorepo/edit/main/docs/${filePath}`;
        }
      },
    },

    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
});
