import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
import { sql } from 'drizzle-orm';

export const load = (async (event) => {
	const users = await db.execute(sql`SELECT * FROM users`);
	return {
		users
	}
}) satisfies PageServerLoad;