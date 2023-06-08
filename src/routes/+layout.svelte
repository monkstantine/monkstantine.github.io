<script>
	import '../app.css';
	import Icon from '@iconify/svelte';

	const menuItems = [
		{
			key: 'svelte',
			value: 'Svelte'
		},
		{
			key: 'typescript',
			value: 'Typescript'
		},
		{
			key: 'css',
			value: 'CSS'
		},
		{
			key: 'devops',
			value: 'DevOps'
		}
	];
</script>

<div class="navbar">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="menu btn btn-ghost lg:hidden">
				<Icon icon="mdi-menu" />
			</label>
			<ul tabindex="0" class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				{#each menuItems as item}
					<li><a href="/{item.key}">{item.value}</a></li>
				{/each}
			</ul>
		</div>
		<a href="/" class="btn btn-ghost uppercase text-xl">Monkstantine</a>
	</div>

	<div class="navbar-end">
		<ul class="menu menu-horizontal hidden lg:flex">
			{#each menuItems as item}
				<li><a href="/{item.key}">{item.value}</a></li>
			{/each}
		</ul>
	</div>
</div>

<div class="ml-3">
	<slot />
</div>
