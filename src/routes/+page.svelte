<script lang="ts">
	import type { todo } from '$lib/types';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#snippet todoItem(todo: todo)}
	<div>
		<form method="POST" action="?/complete">
			<input type="hidden" name="id" value={todo.id} />
			<span>{todo.title}</span>
			<button class="" aria-label="Mark As Complete">✔️</button>
		</form>
	</div>
{/snippet}

<h1>Welcome to SvelteKit</h1>
<form method="POST" action="?/add">
	<label>
		Enter Todo:
		<input name="title" type="text" />
	</label>
</form>
<div>
	{#each data.todos as todo}
		{#if !todo.completed}
			{@render todoItem(todo)}
		{/if}
	{/each}
</div>
