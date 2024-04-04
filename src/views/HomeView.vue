<script setup lang="ts">
import LayoutContainer from '@/components/LayoutContainer.vue';
import PhotoRoll from '@/components/PhotoRoll.vue';
</script>

<template>
  <main>
    <div class="container">
      <LayoutContainer />
    </div>


    <div class="mt-1 position-absolute bottom-0 start-0 roll">
      <PhotoRoll />
    </div>
  </main>
</template>
<style>
.roll {
  width: 100%;
}
</style>