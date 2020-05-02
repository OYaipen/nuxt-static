<template>
  <div>
    <home-welcome></home-welcome>
  </div>
</template>

<script>
import homeWelcome from '@/components/partials/Home/welcome'
export default {
  components: {
    homeWelcome
  },
  head () {
    return {
      title: 'College - Home'
    }
  }
}
</script>

<style>
</style>
