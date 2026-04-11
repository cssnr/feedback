const App = {
  discord_invite: import.meta.env.APP_DISCORD_URL,
  github_url: import.meta.env.APP_GITHUB_URL,
  kofi_url: import.meta.env.APP_KOFI_URL,
  relay_url: import.meta.env.APP_RELAY_URL,
  website_url: import.meta.env.APP_WEBSITE_URL,
} as const

export default App
