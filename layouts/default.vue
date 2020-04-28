<template>
  <div>
    <web-header />
    <main class="lg:block relative pt-16 lg:pt-24">
      <nuxt />
    </main>
  </div>
</template>
<script>
import webHeader from '@/components/partials/Header'
export default {
  components: {
    webHeader
  }
}
</script>
