/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_GITHUB_URL: string
  readonly APP_DISCORD_URL: string
  readonly APP_KOFI_URL: string
  readonly APP_RELAY_URL: string
  readonly APP_WEBSITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
