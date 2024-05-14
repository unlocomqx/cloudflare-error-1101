// import { drizzle } from 'drizzle-orm/node-postgres';
import postgres from 'postgres';

// import pg from "pg";
// const { Client } = pg;

// postgres db for testing
export const queryClient = postgres('postgres://postgres.zqdukdapfcuxfqcvoohu:MnnIyKLcaUL3HEDK@aws-0-eu-central-1.pooler.supabase.com:5432/postgres', {
	prepare: false,
	debug: true
});

// const client = new Client({
// 	connectionString: "postgres://postgres.zqdukdapfcuxfqcvoohu:MnnIyKLcaUL3HEDK@aws-0-eu-central-1.pooler.supabase.com:5432/postgres",
// });

// export const db = drizzle(client);