<script setup lang="ts">
import { usePhotoStore } from '@/stores/photos'
const photoStore = usePhotoStore()

const saveFiles = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    Array.from(target.files).forEach((file) => {
      photoStore.add(file)
    })
  }
}
</script>
<template>
  <label for="formFile" class="form-label">Upload files</label>
  <input class="form-control" type="file" id="formFile" @change="saveFiles($event)" multiple accept="image/*">

</template>