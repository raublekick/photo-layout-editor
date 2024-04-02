import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePhotoStore = defineStore('photos', () => {
  const photos = ref<Array<Photo>>([])

  function add(file: File) {
    photos.value.push({ file, dataUrl: URL.createObjectURL(file) })
  }

  return { photos, add }
})
