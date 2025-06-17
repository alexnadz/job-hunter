---
trigger: always_on
---

# General Code Style & Formatting

- Use Prettier for code formatting.
- Use ESLint for linting.
- Use TypeScript for type checking.
- Format files after changes.

# Project Structure & Architecture

- Follow Next.js patterns and use the App Router.
- Use only server components.
- App directory should be used only for pages.
- lib directory should be divided on
- All other files should be in lib directory separated by functionality (services, hooks, components, utils, etc).
- Store one component in one file.
- Store consts for component in component-name.consts.ts file (if there are many consts).
- Store types for component in component-name.types.ts file (if there are many types).
- Use index.ts for exporting files where it is possible
- for paths use constsfrom pathnames object
- avoid such import paths '../actions/add-job-offer.action'. Use absolute or './path'
- group imports in components and pages (external packages, local imports, and react and next.js)
- if there are several components connected by parent-child chain then you can group them in one folder

# Types and interfaces

- Use type instead of interface (as much as possible).
- React props should be typed with type instead of interface.
  'type ComponentProps = {

}'

# Imports and exports

- create index.ts files for exporting content (reexport only sych things which will be used outside of current folders). Ignore for first level of lib folder
- use absolute import, dont use smth like '../path', '../../path'. Acceptable only: './path'.
- imports should have order. firstly import form react/next js, then from other libraries, then from local files, etc. Each group shoulbe be diveide by new line
- Use default exports for pages and layouts
  'const HomePage = () => {
  return <div>Home Page</div>;
  };

export default HomePage;'

- Use named exports for components and hooks
  'export const Button = () => {
  return <button>Button</button>;
  };'

# File naming

- Use kebab case for all file names.
- Page components should have suffix 'Page'.
- Utils should have .utils suffix, types .types, schema .schemas, constnts .consts, actions .actions, queries .queries etc

# React components

- Use arrow style for components and pages. 'const name = () => {};'
- Use single responsibility principle for components.
- Divide components into smaller components.
- Max 200 lines of code per component. If it is more than 200 lines of code, divide it into smaller components.
- If component returns only JSX, use arrow style.
- User arrow function for all components, pages, and layouts.

# Supabase

- Use server client (priority)

# Server logic

- Use server actions
- Server actions should be in separate file per feature
- form actions should be in actions folder
- fetching queries in queries folder

# TypeScript

- Use type instead of interface (as much as possible).
- React props should be typed with type instead of interface.
- Use enum istead alias type for literals.

# Styling & UI

- Use Tailwind CSS for styling.
- Use Shadcn UI (shadcn package) for components as much as possible.
  'npx shadcn@latest add button'
- pages should be responsive

# Form handling

- Use zod for validation
- Use useActionState for handing action and display loader state
- Validate form on client and on server
- Schema files should be in schemas folder with child types
