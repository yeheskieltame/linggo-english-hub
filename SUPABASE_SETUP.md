# Supabase Setup Instructions

This document provides instructions for setting up and fixing issues with the Supabase backend for the Linggo English Hub application.

## Applying Database Migrations

1. Make sure you have the Supabase CLI installed:
   ```
   npm install -g supabase
   ```

2. Login to your Supabase account:
   ```
   supabase login
   ```

3. Link your project (replace `YOUR_PROJECT_REF` with your actual project reference):
   ```
   supabase link --project-ref YOUR_PROJECT_REF
   ```

4. Apply the migrations:
   ```
   supabase db push
   ```

## Fixing Authentication Issues

If you're experiencing authentication issues (403 Forbidden errors when accessing profiles or 406 Not Acceptable errors with user_progress), follow these steps:

1. Apply the migration in `supabase/migrations/20240702_fix_rls_policies.sql` using the Supabase CLI or by running the SQL directly in the Supabase SQL Editor.

2. Verify that Row Level Security (RLS) policies are correctly set up for all tables:
   - profiles
   - user_progress
   - user_schedule
   - user_assessments

3. Make sure the `handle_new_user()` trigger function is working correctly by testing user registration.

## Database Structure

The application uses the following tables:

1. **profiles** - User profile information
   - Connected to auth.users via the id field
   - Contains user preferences and personal information

2. **user_progress** - Tracks user progress through lessons
   - Stores completion status and progress percentage
   - Links to specific modules/lessons

3. **user_schedule** - Records user learning activities
   - Logs when users complete lessons or stages
   - Tracks time spent on learning activities

4. **user_assessments** - Stores results of level assessments
   - Records CEFR level determinations
   - Tracks strengths and areas for improvement

## Common Issues and Solutions

### 403 Forbidden Errors

These typically indicate Row Level Security (RLS) policy issues. Make sure:
- The user is authenticated
- RLS policies are correctly configured for the table
- The user has the correct permissions for the operation

### 406 Not Acceptable Errors

These usually indicate format issues with API requests. Check:
- The structure of the data being sent matches the table schema
- Required fields are included
- Data types are correct

### Profile Creation Issues

If profiles aren't being created automatically:
- Check the `handle_new_user()` trigger function
- Verify the trigger is correctly attached to auth.users
- Ensure the function has SECURITY DEFINER privileges

## Testing Authentication

You can test authentication by:
1. Registering a new user
2. Checking if their profile is created automatically
3. Verifying they can access their own data
4. Confirming they cannot access other users' data