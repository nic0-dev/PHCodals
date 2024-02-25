<script>
	import "@fontsource-variable/work-sans";
	import "../app.css"
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import logo from '$lib/assets/blackicon.png';
</script>

<div class="flex gap-5 justify-between items-center mx-auto px-4 py-2 sm:px-6 sm:py-2 lg:px-8 font-semibold tracking-tight leading-5 whitespace-nowrap max-md:flex-wrap max-md:px-5">	
	<nav class="text-md flex flex-row gap-5 justify-between text-neutral-400 items-center" aria-label="Tabs">
		<a href="/"><div class="sm:flex gap-4 text-2xl font-bold leading-7 text-neutral-900 sm:items-center sm:justify-between pr-5">
			<img src={logo} alt="Black Logo" class="aspect-square w-[25px]"/>
			<div class="grow">PHCodals</div>
		</div></a>
		<a href="/" class="shrink-0 rounded-lg px-3 py-3 hover:bg-gray-100 hover:text-neutral-900">Home</a>
		<a href="/about" class="shrink-0 rounded-lg px-3 py-3 hover:bg-gray-100 hover:text-neutral-900">About</a>
		<a href="/" class="shrink-0 rounded-lg px-3 py-3 hover:bg-gray-100 hover:text-neutral-900">Pricing</a>
		<a href="/" class="flex flex-row gap-2 items-center shrink-0 rounded-xl px-3 py-3 text-primary-500 bg-primary-100 hover:bg-primary-200 hover:text-primary-600">
			<FontAwesomeIcon icon={faEnvelope} /> Get in touch
		</a>
	</nav>
	<div class="text-sm flex gap-3 justify-between py-1">
		<div class="px-6 py-3 my-auto text-neutral-400 rounded-xl hover:bg-gray-100 hover:text-neutral-900"><a href="/">Login</a></div>
		<div class="px-4 py-3 text-white rounded-xl bg-neutral-900"><a href="/">Get Started</a></div>
	</div>
</div>

<slot></slot>	
