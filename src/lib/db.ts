import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
// for query purposes
// postgres db for testing
export const queryClient = postgres('postgres://postgres.zqdukdapfcuxfqcvoohu:MnnIyKLcaUL3HEDK@aws-0-eu-central-1.pooler.supabase.com:5432/postgres');
export const db = drizzle(queryClient);