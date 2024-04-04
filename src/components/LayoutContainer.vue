<script setup lang="ts">
import { ref, computed } from 'vue';
// TODO: configs should probably be in a store
const props = defineProps({
  columns: {
    type: Number,
    default: 2,
  },
});

const images = ref<Array<string>>(["IMG1", "IMG2", "IMG3", "IMG4", "IMG5", "IMG6", "IMG7", "IMG8", "IMG9", "IMG10", "IMG11", "IMG12", "IMG13", "IMG1"])
const columnClass = computed(() => {
  return "col-" + 12 / props.columns;
});
</script>
<template>
  <div class="row">
    <div v-for="(image, index) in images" :key="index" :class="[columnClass]">
      <div
        :class="[index % columns === 0 ? 'text-end' : index % columns === columns - 1 ? 'text-start' : 'text-center']">
        {{ image }} {{ index % columns }}
      </div>
    </div>
  </div>
</template>