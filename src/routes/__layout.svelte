<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Frontend Mentor | Product preview card component</title>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/FM-product-preview-card/images/favicon-32x32.png"
	/>
</svelte:head>
<main class="bg-brand-cream relative">
	<section class="min-h-screen max-w-[325px] lg:max-w-xl mx-auto grid items-center content-center">
		<slot />
	</section>
	<footer class="absolute text-center bottom-0 text-xs text-brand-very-dark-blue/40">
		Challenge by <a
			class="hover:underline"
			href="https://www.frontendmentor.io?ref=challenge"
			target="_blank">Frontend Mentor</a
		>. Coded by
		<a class="hover:underline" href="https://github.com/wahyusa/FM-Rating-Card"
			>Wahyu Syamsul A'lam</a
		>.
	</footer>
</main>
