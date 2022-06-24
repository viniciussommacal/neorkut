<template>
  <div>
    <header />
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
export default defineComponent({
  
  name: 'App',

  components: {
    Header
  }
})
</script>
