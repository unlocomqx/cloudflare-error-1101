import type { PageServerLoad } from './$types';
import { db, queryClient } from '$lib/db';
import { sql } from 'drizzle-orm';

// create a sample promise
async function getUsers() {
	// error 1101
	// Error: The script will never generate a response.
	// 	at async Object.fetch (file:///Users/USER/Library/pnpm/global/5/.pnpm/miniflare@3.20240419.1/node_modules/miniflare/dist/src/workers/core/entry.worker.js:966:22)
	return queryClient`SELECT * FROM users`;
	// I thought drizzle was causing the issue, but it seems to be the queryClient from postgres-js
	// return db.execute(sql`SELECT * FROM users`);
	// return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve([{
	// 			id: 1,
	// 			name: 'John Doe'
	// 		}, {
	// 			id: 2,
	// 			name: 'Jane Doe'
	// 		}]);
	// 	}, 1000);
	// });
}

export const load = (async (event) => {
	const users = await getUsers();
	return {
		users
	};
}) satisfies PageServerLoad;