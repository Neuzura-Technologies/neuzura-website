/*
# Create contact_submissions table

1. New Tables
   - `contact_submissions`
     - `id` (uuid, primary key)
     - `name` (text, not null) — submitter's full name
     - `email` (text, not null) — submitter's email address
     - `organization` (text) — company or institution name
     - `service_interest` (text, not null) — selected service category
     - `message` (text, not null) — message body
     - `form_type` (text, not null) — 'consultation' or 'workshop'
     - `created_at` (timestamptz, default now())

2. Security
   - Enable RLS on `contact_submissions`.
   - Allow anon + authenticated INSERT (anyone can submit a contact form).
   - No SELECT/UPDATE/DELETE for anon (admin-only reads via service role).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  service_interest text NOT NULL,
  message text NOT NULL,
  form_type text NOT NULL DEFAULT 'consultation',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
