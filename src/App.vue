<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <div>
    <header>
      <NavMenu />
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
