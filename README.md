# React Email + Turborepo + npm workspaces


This application show how to build multiple email templates and example form to fill data for marketing purposes.

Architecture is builded with monorepo structure with main web app to fill form and one of the package `packages/transactional` [packages/transactional] directly related for building templates.

### Technologies
Next.js 14 [Next.js](https://nextjs.org)
React Email with [Turborepo](https://turbo.build) + [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces).

### Structure

This monorepo includes the following apps:

- `apps/web`: a [Next.js](https://nextjs.org) app
- `packages/transactional`: a package with [react.email](https://react.email) email template to send

## Instructions

1. Install dependencies:

  ```sh
npm install
  ```

2. Run locally:

  ```sh
npm run dev
  ```

3. Open URL in the browser:

* http://localhost:3000

## License

MIT License
