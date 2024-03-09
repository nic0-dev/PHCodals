<script>
	import "@fontsource-variable/work-sans";
	import "../../app.css"
	import { page } from "$app/stores"

	let visible = true;
	function toggleMenu() {
		visible = !visible
	}
</script>

<header>
	<div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 py-2 sm:px-6 lg:px-8 font-semibold tracking-tight leading-5 whitespace-nowrap ">
		<a class="block text-neutral-900" href="/">
			<div class="flex flex-row gap-4 text-xl font-bold leading-7 text-neutral-900 items-center justify-between pr-5">
				<svg class="aspect-square w-[25px] overflow-visible fill-neutral-900" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
					<g data-name="Layer 1">
						<rect width="99" height="50" x="389" y="408" rx="14.9"/>
						<rect width="141" height="50" x="389" y="480" rx="14.9"/>
						<rect width="367" height="50" y="480" rx="14.9"/>
						<path d="M352 408h-30a4 4 0 0 1-4-4V109a4 4 0 0 1 4-4c13-1 28-4 44-10h1l21-10c28-14 40-19 64-13a48 48 0 0 1 36 41 5 5 0 0 0 5 5h32a5 5 0 0 0 5-6c-3-40-30-74-68-84s-60 1-91 15l-20 10c-18 7-29 8-45 5a3 3 0 0 1-1 0 3 3 0 0 1-2-2c-7-16-13-33-16-46-1-6-5-10-10-10h-24c-5 0-9 4-10 10-3 13-9 30-16 46a3 3 0 0 1-2 2c-12 4-28 2-46-5l-20-10c-31-14-53-25-91-15a92 92 0 0 0-68 84 5 5 0 0 0 5 6h32a5 5 0 0 0 5-5 48 48 0 0 1 36-41c24-6 36-1 64 13l21 10h1c16 6 31 9 44 10a4 4 0 0 1 4 4v295a4 4 0 0 1-4 4H57a15 15 0 0 0-15 15v20a15 15 0 0 0 15 15h295a15 15 0 0 0 15-15v-20a15 15 0 0 0-15-15Zm-98-304a15 15 0 0 1 2-7l2-5a8 8 0 0 1 14 0l2 5a15 15 0 0 1 2 7v300a4 4 0 0 1-4 4h-14a4 4 0 0 1-4-4Z"/>
					</g>
				</svg>
				<div class="grow">PHCodals</div>
			</div>
		</a>
	
	<div class="flex flex-1 items-center justify-end md:justify-between">
		<nav aria-label="Global" class="hidden lg:block">
			<ul class="text-neutral-400 flex items-center gap-6 text-sm">
				<li>
					<a class:text-black={$page.route.id === "/(landing)"} class="shrink-0 px-3 py-3 hover:text-neutral-900" href="/"> Home </a>
				</li>
				<li>
				<a class:text-black={$page.route.id === "/(landing)/about"} class="shrink-0 px-3 py-3 hover:text-neutral-900" href="/about"> About </a>
				</li>
				<li>
					<a href="/pricing" class:text-black={$page.route.id === "/(landing)/pricing"} class="shrink-0 rounded-lg px-3 py-3 hover:text-neutral-900">Pricing</a>
				</li>
				<li>
					<a href="mailto:mlcagas@up.edu.ph" class="flex flex-row justify-center gap-2 items-center shrink-0 rounded-xl px-3 py-3 text-primary-500 bg-primary-100 hover:bg-primary-200 hover:text-primary-600">
						<svg class="flex flex-rowaspect-square w-[15px] overflow-visible fill-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 500">
							<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
						</svg>
						<div class="grow"> Get in touch </div>
					</a>					
				</li>
			</ul>
		</nav>
	</div>
	<div class="flex items-center gap-4">
		<div class="text-sm flex gap-4 justify-between py-1">
			<a class="hidden lg:block" href="/login">
				<div class="px-6 py-3 my-auto text-neutral-400 rounded-xl hover:bg-gray-100 hover:text-neutral-900">
					Login
				</div>
			</a>
			<a href="/signup">
				<div class="px-4 py-3 text-white rounded-xl bg-neutral-900 hover:bg-transparent hover:ring-1 hover:ring-black hover:text-neutral-900">
					Sign Up
				</div>
			</a>
			<button on:click={toggleMenu} data-collapse-toggle="burger-menu" type="button" class="block rounded bg-gray-100 p-2.5 text-neutral-900 transition hover:bg-neutral-200 lg:hidden">
				<span class="sr-only">Toggle menu</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
	</div>
</header>

{#if !visible}
	<div class="lg:hidden w-full md:block md:w-auto bg-gray-50">
		<ul class="text-sm text-neutral-900 mx-6 flex flex-col font-semibold">
			<li>
				<a href="/" class="{$page.route.id === '/(landing)' ? 'block rounded-lg text-center py-2 px-3 bg-primary-500 text-white' : 'block rounded-lg text-center py-2 px-3 hover:text-neutral-900 hover:bg-primary-100'}"> Home </a>
			</li>
			<li>
				<a href="/about" class="{$page.route.id === '/(landing)/about' ? 'block rounded-lg text-center py-2 px-3 bg-primary-500 text-white' : 'block rounded-lg text-center py-2 px-3 hover:text-neutral-900 hover:bg-primary-100'}"> About </a>
			</li>
			<li>
				<a href="/pricing" class="{$page.route.id === '/(landing)/pricing' ? 'block rounded-lg text-center py-2 px-3 bg-primary-500 text-white' : 'block rounded-lg text-center py-2 px-3 hover:text-neutral-900 hover:bg-primary-100'}"> Pricing </a>
			</li>
			<li>
				<a href="mailto:mlcagas@up.edu.ph" class="block rounded-lg text-center py-2 px-3 hover:bg-primary-100 hover:text-primary-500">Get in touch</a>
			</li>
			<li>
				<a href="/" class="my-4 flex flex-row justify-center items-center gap-2 shrink-0 rounded-xl px-3 py-3 bg-gray-200 hover:bg-gray-300">Login</a>
			</li>
		</ul>
	</div>

{/if}



<slot />



<footer>
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="flex justify-center gap-4 items-center">
			<svg class="aspect-square w-[30px] overflow-visible fill-neutral-900" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<g data-name="Layer 1">
					<rect width="99" height="50" x="389" y="408" rx="14.9"/>
					<rect width="141" height="50" x="389" y="480" rx="14.9"/>
					<rect width="367" height="50" y="480" rx="14.9"/>
					<path d="M352 408h-30a4 4 0 0 1-4-4V109a4 4 0 0 1 4-4c13-1 28-4 44-10h1l21-10c28-14 40-19 64-13a48 48 0 0 1 36 41 5 5 0 0 0 5 5h32a5 5 0 0 0 5-6c-3-40-30-74-68-84s-60 1-91 15l-20 10c-18 7-29 8-45 5a3 3 0 0 1-1 0 3 3 0 0 1-2-2c-7-16-13-33-16-46-1-6-5-10-10-10h-24c-5 0-9 4-10 10-3 13-9 30-16 46a3 3 0 0 1-2 2c-12 4-28 2-46-5l-20-10c-31-14-53-25-91-15a92 92 0 0 0-68 84 5 5 0 0 0 5 6h32a5 5 0 0 0 5-5 48 48 0 0 1 36-41c24-6 36-1 64 13l21 10h1c16 6 31 9 44 10a4 4 0 0 1 4 4v295a4 4 0 0 1-4 4H57a15 15 0 0 0-15 15v20a15 15 0 0 0 15 15h295a15 15 0 0 0 15-15v-20a15 15 0 0 0-15-15Zm-98-304a15 15 0 0 1 2-7l2-5a8 8 0 0 1 14 0l2 5a15 15 0 0 1 2 7v300a4 4 0 0 1-4 4h-14a4 4 0 0 1-4-4Z"/>
				</g>
			</svg>
			<div class="text-black text-2xl font-bold">PHCodals</div>
		</div>
	
		<p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
			Empowering legal understanding through innovation. PHCodals is dedicated to delivering comprehensive legal provisions at your fingertips.
		</p>
	
		<ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
			<li><a class="text-neutral-900 transition hover:text-gray-700/75" href="/about"> About </a></li>
			<li><a class="text-neutral-900 transition hover:text-gray-700/75" href="mailto:mlcagas@up.edu.ph"> Contact Us </a></li>
			<li><a class="text-neutral-900 transition hover:text-gray-700/75" href="/"> Privacy </a></li>
			<li><a class="text-neutral-900 transition hover:text-gray-700/75" href="/"> Licensing </a></li>
			<li><a class="text-neutral-900 transition hover:text-gray-700/75" href="/"> Terms </a></li>
		</ul>

		<ul class="mt-12 flex justify-center gap-6 md:gap-8">
			<li><a href="/" rel="noreferrer" target="_blank" class="text-neutral-900 transition hover:text-gray-700/75">
				<span class="sr-only">Facebook</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path fill-rule="evenodd" 
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
					clip-rule="evenodd"/></svg>
				</a>
			</li>
	
			<li><a href="/" rel="noreferrer" target="_blank" class="text-neutral-900 transition hover:text-gray-700/75">
				<span class="sr-only">Instagram</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path fill-rule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clip-rule="evenodd"/></svg>
				</a>
			</li>
	
			<li><a href="/" rel="noreferrer" target="_blank" class="text-neutral-900 transition hover:text-gray-700/75">
				<span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
				</a>
			</li>
	
			<li><a href="/" rel="noreferrer" target="_blank" class="text-neutral-900 transition hover:text-gray-700/75">
				<span class="sr-only">GitHub</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path fill-rule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clip-rule="evenodd"/></svg>
				</a>
			</li>
	
			<li><a href="/" rel="noreferrer" target="_blank" class="text-gray-900 transition hover:text-gray-700/75">
				<span class="sr-only">Dribbble</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path fill-rule="evenodd"
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
					clip-rule="evenodd"/></svg>
				</a>
			</li>
		</ul>
	
	</div>
	<div class="mx-auto max-w-6xl px-4 border-t border-gray-200 pb-8">
		<div class="text-center mt-4 sm:flex sm:justify-between sm:text-left">
			<p class="text-xs text-gray-500">&copy; 2024. Meliora. All rights reserved.</p>
			<p class="text-xs flex gap-3 justify-between text-gray-500">
				<a href="/" class="inline-block text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
				<a href="/" class="inline-block text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
				<a href="/" class="inline-block text-gray-500 transition hover:opacity-75"> Cookies </a>
			</p>
		</div>
	</div>
</footer>