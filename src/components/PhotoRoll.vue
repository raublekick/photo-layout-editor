<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Collapse } from 'bootstrap'
import { usePhotoStore } from '@/stores/photos'
const photoStore = usePhotoStore()
const photoRollCollapse = ref<Collapse>()
const collapsed = ref(null as boolean | null)
function collapse() {
  photoRollCollapse.value.toggle()
}


onMounted(() => {
  photoRollCollapse.value = new Collapse('#photoroll', {
    toggle: true
  })

  const myCollapseEl = document.querySelector('#photoroll')
  myCollapseEl?.addEventListener('shown.bs.collapse', event => {
    collapsed.value = false
  })
  myCollapseEl?.addEventListener('hidden.bs.collapse', event => {
    collapsed.value = true
  })
})
</script>

<template>
  <div class="photo-roll-collapse">
    <button class="photo-roll-collapse" type="button" aria-expanded="false" aria-controls="photoroll"
      @click="collapse()">
      {{ collapsed ? 'Show' : 'Hide' }}
    </button>

  </div>
  <div class="" id="photoroll">
    <div class="photo-roll">
      <div v-for="(photo, index) in photoStore.photos" :key="index" class="photo">
        <img class="photo" :src="photo.dataUrl" alt="photo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.photo-roll-collapse {
  width: 100%
}

.photo-roll {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.photo-roll .photo {
  height: 100px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>