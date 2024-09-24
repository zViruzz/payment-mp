import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'var(--foreground)',
    background: 'var(--background)',
    lineHeight: '1.5',
    maxWidth: '100vw',
    overflowX: 'hidden',
    fontFamily: 'Arial, Helvetica, sans-serif',
    webkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],


  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    // tokens: {
    //   colors: {
    //     red: { value: '#EE0F0F' },
    //     green: { value: '#0FEE0F' }
    //   }
    // },
    // semanticTokens: {
    //   colors: {
    //     danger: { value: '{colors.red}' },
    //     success: { value: '{colors.green}' }
    //   }
    // }
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss,

  globalVars: {
    '--background': '#ffffff',
    '--foreground': "#171717",
  }
});
