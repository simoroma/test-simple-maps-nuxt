<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

onMounted(async () => {
  const simplemaps_usmap = ref(window.simplemaps_usmap);
  simplemaps_usmap.value.load();
  console.log("Map should be loaded.");
});
</script>
