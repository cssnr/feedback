# Agent Guide

This is a Vue3 application that runs on GitHub Pages to collect feedback from users.
Originally designed for Web Extension Uninstall feedback, but also used for General Feedback.

- TypeScript 6 with Vue 3.5
- Bootstrap 5.3 and FontAwesome

## Project Structure

### Files

- `wxt.config.ts` - WXT Config and Extension Manifest
- `src/components/FeedbackForm.vue` Feedback Form

## Commands

ALWAYS use the `npm run *` command NEVER pipe output into arbitrary truncation commands.

| Command            | What it does                     |
| ------------------ | -------------------------------- |
| `npm run build`    | `npm run tsc && vite build`      |
| `npm run lint`     | `eslint . --cache --fix` ESLint  |
| `npm run tsc`      | `vue-tsc --noEmit` TS Check Only |
| `npm run prettier` | ALWAYS RUN AFTER EDITING FILES   |

## Follow Existing Patterns

Before adding or modifying any feature, search the codebase for the closest existing implementation and follow its full integration chain.
Do not stop after writing the core logic — trace every file that touches the feature (imports, registration, configuration, UI binding) and ensure each is accounted for.
