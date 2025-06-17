---
trigger: always_on
---

# Description

- Project for searching and publishing job offers.
- Two types of users: candidate (want to find job) and employer. In future will be added admin.

# Functionalities

## version 1.0.0

### 1. Sign Up

#### Features

- **Email + Password Registration**
- **Role Selection (Candidate or Employer)**
    - **Candidate** must provide:
        - First Name
        - Last Name
        - Phone Number
    - **Employer** must provide:
        - Company Name
        - About Company

#### Validations

- Required field checks for all inputs
- Email format validation
- Password strength validation (e.g., minimum 8 characters, include a number/symbol)
- Phone number format check (for Candidates)

#### Post-Registration Flow

- Automatically sign in the user upon successful registration
- Redirect to appropriate dashboard based on role:
    - Candidates → `/candidate/dashboard`
    - Employers → `/employer/dashboard`
- On the dashboard page user see warning about email confirmation, until they confirm dashboard will only containy this warnign with sign out button

#### Additional Links

- Link to Sign In page if the user already has an account

#### Additional Info

- There should be used auth table from supabase, new profiles table for user type info and employeers/candidates tables for storing specifi users data

### 2. Sign In

#### Features

- **Email + Password Authentication**

#### Role-Based Redirection After Login

- **Candidates** → `/candidate/dashboard`
- **Employers** → `/employer/dashboard`

#### Error Handling

- Invalid credentials
- Missing fields
- Suspended or non-existent accounts

#### Additional Links

- _Forgot Password?_ (optional)
- Link to the Registration page if the user doesn’t have an account

### 3. Add job offer as employer

#### Features

- Form for Creating Job Offers
- Employer-Only Access (Role-Based)
- Client and Server-Side Validation
- Database Insertion via Server Action

#### Form Fields

- Job Title (required)
- Job Description (required)
- Salary Range (optional)

#### Access Control

- Only employers can access this page
- Redirect others to /unauthorized or homepage

####Backend Integration

- Insert job data into jobs table
  Associate job with current employer using their user_id

####Error Handling

- Missing required fields
- Unauthorized access
- Server/database errors on submission

####After Successful Submission

- Redirect to: /employer/dashboard
- Optional toast or confirmation message: “Job offer posted successfully!”
