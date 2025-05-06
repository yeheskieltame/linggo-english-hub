-- Drop existing policies for profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;

-- Create improved policies for profiles
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Service role can insert any profile"
  ON profiles FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Fix user_progress policies
DROP POLICY IF EXISTS "Users can view their own progress" ON user_progress;
DROP POLICY IF EXISTS "Users can insert their own progress" ON user_progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON user_progress;

CREATE POLICY "Users can view their own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Fix user_schedule policies
DROP POLICY IF EXISTS "Users can view their own schedule" ON user_schedule;
DROP POLICY IF EXISTS "Users can insert their own schedule" ON user_schedule;
DROP POLICY IF EXISTS "Users can update their own schedule" ON user_schedule;
DROP POLICY IF EXISTS "Users can delete their own schedule" ON user_schedule;

CREATE POLICY "Users can view their own schedule"
  ON user_schedule FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own schedule"
  ON user_schedule FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own schedule"
  ON user_schedule FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own schedule"
  ON user_schedule FOR DELETE
  USING (auth.uid() = user_id);

-- Add service role policies for all tables
CREATE POLICY "Service role can do anything with profiles"
  ON profiles FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can do anything with user_progress"
  ON user_progress FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can do anything with user_schedule"
  ON user_schedule FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can do anything with user_assessments"
  ON user_assessments FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Fix the trigger function to handle errors better
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url, preferred_level, created_at, updated_at)
    VALUES (
      NEW.id,
      NEW.email,
      NEW.raw_user_meta_data->>'full_name',
      NEW.raw_user_meta_data->>'avatar_url',
      'Beginner',
      NOW(),
      NOW()
    );
  EXCEPTION WHEN OTHERS THEN
    -- Log error but continue (don't fail the user creation)
    RAISE NOTICE 'Error creating profile for user %: %', NEW.id, SQLERRM;
  END;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;