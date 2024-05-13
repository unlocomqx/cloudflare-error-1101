// place files you want to import through the `$lib` alias in this folder.

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
// for query purposes
// postgres db for testing
export const db = postgres("postgres://postgres.zqdukdapfcuxfqcvoohu:MnnIyKLcaUL3HEDK@aws-0-eu-central-1.pooler.supabase.com:5432/postgres");