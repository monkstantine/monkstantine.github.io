<script lang="ts">
	import { page } from '$app/stores';
	import { marked } from 'marked';
	import { Category, posts } from '../../../lib/data/posts';

	const { slug, category } = $page.params as { slug: string; category: Category };

	const post = posts[category].find((p) => p.key === slug);

	let source = post?.content || '';

	console.log(marked.parse(source));
</script>

<div>
	<h1 class="text-3xl">{post?.title}</h1>
	<!-- <div class="mt-2 p-2 w-96 card bg-base-content"> -->
	<article class="prose">
		{@html marked.parse(source)}
	</article>
	<!-- </div> -->
</div>

<style>
</style>
