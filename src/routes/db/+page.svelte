<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p>Users:</p>
<ul>
{#each data.users as { id, name }}
	<li>{id} - {name}</li>
{/each}
</ul>