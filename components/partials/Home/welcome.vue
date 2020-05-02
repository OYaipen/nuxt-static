<template>
  <div
    class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between py-16 sm:py-24">
        <div class="lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0">
          <h1
            class="text-4xl xl:text-5xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium tracking-normal leading-tight mb-6"
          >
            Owen
          </h1>
          <h3
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            OWe
          </h3>
          <div class="flex flex-col sm:block py-4">
            <nui-button
              :to="{
                name: 'section-slug',
                params: { section: 'guide', slug: 'installation' }
              }"
              variant="primary"
              class="sm:mr-4 py-3 px-6 text-base mb-4"
            >
              <nui-svg-meteor slot="icon" class="h-5 -mb-1 mr-1" />
              asd
            </nui-button>
            <nui-button
              href="https://github.com/nuxt/nuxt.js"
              variant="secondary"
              class="sm:mr-4 py-3 px-6 text-base"
            >
              <nui-svg-gh slot="icon" class="h-6 -mt-1 mr-1" />
              s
            </nui-button>
          </div>
        </div>
        <figure class="hidden lg:block lg:w-5/12">
          <nui-media src="https://player.vimeo.com/video/311756540" class="mb-4" />
          <p class="font-medium py-2 text-xs xl:text-sm text-center text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
