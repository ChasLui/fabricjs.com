import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Docs and Guides',
    disable404Route: true,
    logo: {
      src: './src/assets/fabricjs-logo.png',
    },
    sidebar: [
      {
        label: 'Docs',
        // Collapse the group and its autogenerated subgroups by default.
        collapsed: true,
        autogenerate: { directory: 'docs' },
      },
      {
        label: 'Api',
        // Collapse the group and its autogenerated subgroups by default.
        collapsed: true,
        autogenerate: { directory: 'api' },
      },
    ],
    plugins: [
      // Generate the documentation.
      starlightTypeDoc({
        entryPoints: ['./node_modules/fabric/fabric.ts'],
        tsconfig: './node_modules/fabric/typedoc.config.json',
        typeDoc: {
          plugin: ['typedoc-plugin-no-inherit'],
          readme: 'none',
          gitRemote: 'https://github.com/fabricjs/fabric.js/blob',
          gitRevision: 'v6.0.0-beta20',
          entryFileName: 'index.md'
        },
      }),
    ],
  }), react()]
});