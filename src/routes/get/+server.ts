import type { RequestHandler } from '@sveltejs/kit';
import { queryClient } from '$lib/db';

export const GET :RequestHandler = async (params) => {
	const users = await queryClient`SELECT * FROM users`;

	const html = users.map(({ id, name }) => `<div>${id}: ${name}</div>`).join('');

	return new Response(html, {
		headers: {
			'content-type': 'text/html',
		},
	});
}