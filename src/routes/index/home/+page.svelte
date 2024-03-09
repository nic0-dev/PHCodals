<script>
    let alert_visible = false;
</script>

{#if alert_visible}
    <div id="alert-1" class="flex items-center p-4 text-blue-800 rounded-lg bg-blue-50" role="alert">
        <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div class="ms-3 text-sm font-medium">
        Content is unavailable.
        </div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8" aria-label="Close" on:click={() => alert_visible = false}>
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
{/if}
<div class="bg-gray-50 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-12">
    <a href="/index/home" class="flex flex-col max-w-xs h-52 py-8 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" on:click={() => alert_visible = false}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Civil Code of the Philippines</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Republic Act No. 386. An Act to ordain and institute the Civil Code of the Philippines.</p>
    </a>
    <a class="flex flex-col max-w-xs h-52 py-8 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" on:click={() => alert_visible = true}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Labor Code of the Philippines</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Presidential Decree No. 442. A Decree instituting a Labor Code thereby revising and consolidating Labor and...</p>
    </a>
    <a class="flex flex-col max-w-xs h-52 py-8 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" on:click={() => alert_visible = true}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Revised Penal Code of the Philippines</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Act No. 3815. An Act revising the Penal Code and other Penal Laws.</p>
    </a>
    <a class="flex flex-col max-w-xs h-52 py-8 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" on:click={() => alert_visible = true}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Rules of Court of the Philippines</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Pursuant to the provisions of section 5 (5) of Article VIII of the Constitution, the Supreme Court hereby adopts and...</p>
    </a>
    <a class="flex flex-col max-w-xs h-52 py-8 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" on:click={() => alert_visible = true}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Code of Professional Responsibility</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cum modi sit aut doloremque provident que...</p>
    </a>
    <a class="flex flex-col max-w-xs h-52 py-8 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" on:click={() => alert_visible = true}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">New Tax Code of the Philippines</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident placeat laudantium molestiae...</p>
    </a>
</div>