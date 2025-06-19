<h1 align="center">Job Hunter</h1>

<p align="center">
 A modern platform for job searching and publishing job offers
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#project-structure"><strong>Project Structure</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#development"><strong>Development</strong></a>
</p>
<br/>

## Features

### Current Features

- **User Authentication**

    - Email + Password Registration and Login
    - Role-based access (Employer/Candidate)
    - Email verification
    - Protected routes based on authentication status and user role

- **User Profiles**

    - Employer profiles with company information
    - Candidate profiles with personal details

- **Job Management (Employers)**

    - Create and publish job offers
    - View and manage published job offers
    - Detailed job offer form with validation

- **UI/UX**
    - Responsive design for all screen sizes
    - Dark/Light theme support
    - Role-specific dashboards and navigation

### Planned Features

- Job searching and filtering for candidates
- Application submission system
- Employer analytics dashboard
- Candidate resume builder
- Admin panel for platform management

## Tech Stack

- **Frontend**

    - [Next.js](https://nextjs.org) with App Router
    - [React](https://reactjs.org)
    - [TypeScript](https://www.typescriptlang.org)
    - [Tailwind CSS](https://tailwindcss.com) for styling
    - [Shadcn UI](https://ui.shadcn.com) for component library

- **Backend**

    - [Supabase](https://supabase.com) for database and authentication
    - Next.js Server Actions for API endpoints
    - Supabase Row Level Security for data protection

- **Development Tools**
    - ESLint for code linting
    - Prettier for code formatting

## Project Structure

```
/app                   # Next.js App Router pages and layouts
  /api                 # API routes
  /auth                # Authentication pages
  /protected           # Protected routes (requires authentication)
    /employer          # Employer-specific pages
    /candidate         # Candidate-specific pages

/lib                   # Shared code and utilities
  /auth                # Authentication related code
  /job-offers          # Job offer related components and logic
  /shared              # Shared utilities, components, and types
    /components        # Reusable UI components
    /constants         # Application constants
    /hooks             # Custom React hooks
    /layouts           # Layout components
    /providers         # React context providers
    /queries           # Database queries
    /services          # Service integrations
    /types             # TypeScript type definitions
    /ui                # UI components from Shadcn
    /utils             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Supabase account

### Environment Setup

1. Clone the repository

```bash
git clone https://github.com/your-username/job-hunter.git
cd job-hunter
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Database Migrations

We use Supabase migrations to manage database schema changes. To create a new migration:

```bash
supabase migration new migration_name
```
