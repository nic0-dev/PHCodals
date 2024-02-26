<script>
    import hero from '$lib/assets/bgimage.jpg';
</script>

<section class="pr-12 mb-16 overflow-hidden sm:grid sm:grid-cols-2">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-2xl font-bold text-gray-900 md:text-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </h1>
  
        <p class="hidden font-medium text-gray-500 md:mt-4 md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
          sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
          quisque ut interdum tincidunt duis.
        </p>
  
        <div class="mt-4 md:mt-8">
          <a href="/" class="inline-block rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-400">
            Get Started
          </a>
        </div>
      </div>
    </div>
  
    <img src={hero} alt="Hero"  
    class="w-full rounded-3xl object-cover sm:h-full"/>
  </section>
