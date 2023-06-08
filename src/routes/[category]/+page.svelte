<script lang="ts">
	import { page } from '$app/stores';
	import { Category, posts } from '../../lib/data/posts';

	$: category = $page.params.category as Category;
	$: cat = posts[category];
</script>

<div>
	{#each cat as post}
		<a
			class="card bg-primary-content shadow m-2 p-2 h-36 w-96 btn btn-ghost"
			href="/etc/{post.key}"
		>
			<span class="card-title text-primary">{post.title}</span>
		</a>
	{/each}
</div>
