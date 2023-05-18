import { makeApiCall } from '$lib/service';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const teste = await makeApiCall();

	return { teste };
}) satisfies PageServerLoad;
