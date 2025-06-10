---
trigger: always_on
---

# Description

- Project for searching and publishing job offers.
- Two types of users: candidate (want to find job) and employer. In future will be added admin.

# Functionalities

## version 1.0.0

### 2. Sign Up

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
- On the dashboard page user see warning about email confirmation, untill they confirm dashboard will only containy this warnign with sign out button

#### Additional Links

- Link to Sign In page if the user already has an account

### 2. Sign In

#### Features

- **Email + Password Authentication**
- **Role Selection**
    - **Candidate** must fill in:
        - First Name
        - Last Name
        - Phone Number
    - **Employer** must fill in:
        - About Company

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
