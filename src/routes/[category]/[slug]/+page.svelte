<script lang="ts">
	import { page } from '$app/stores';
	import { Category, posts } from '../../../lib/data/posts';

	const { slug, category } = $page.params as { slug: string; category: Category };

	const post = posts[category].find((p) => p.key === slug);
	console.log(post);
</script>

<div>
	<h1 class="text-3xl">{post?.title}</h1>
	<div class="mt-2 p-2 w-96 card bg-base-content text-base-300">
		{@html post?.content}
	</div>
</div>
