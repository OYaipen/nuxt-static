<template>
  <div class="algolia-wrapper relative">
    <search-icon
      class="block absolute z-10 h-4 mt-3 ml-3 fill-current text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
    />
    <input type="text" class="nui-search-input px-4 pl-10 rounded-full h-10 outline-none w-full font-medium transition-colors duration-300 ease-linear" />
    <button class="absolute"></button>
  </div>
</template>

<script>
import searchIcon from '@/components/svg/Search'
export default {
  components: {
    searchIcon
  },
  props: {
    appearance: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      q: '',
      focused: false,
      search: null
    }
  }
}
</script>

<style></style>
