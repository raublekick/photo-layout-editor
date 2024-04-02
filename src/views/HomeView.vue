<script setup lang="ts">
import PhotoUploader from '@/components/PhotoUploader.vue';
import PhotoRoll from '@/components/PhotoRoll.vue';
</script>

<template>
  <main>
    <div class="container">
      Layout
    </div>
    <div>Settings</div>
    <div>
      <PhotoUploader />
    </div>
    <div class="mt-1">
      <PhotoRoll />
    </div>
  </main>
</template>
