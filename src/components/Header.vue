<template>
  <nav>
    <!-- Home (destaques),  -->
    <RouterLink to="/">Inicío</RouterLink>
    <RouterLink to="/scrapbook">Página de Recados</RouterLink>
    <RouterLink to="/friends">Amigos</RouterLink>
    <RouterLink to="/groups">Comunidades</RouterLink>
  </nav>
    <span>seu@email.com</span>
    <RouterLink to="/logout">Sair</RouterLink>
    <HeaderSearch/>
  <nav>
  </nav>
</template>
<script>
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderSearch from './HeaderSearch.vue'
export default defineComponent({
  
  name: 'Header',

  components: {
    RouterLink,
    HeaderSearch
  }
})
</script>