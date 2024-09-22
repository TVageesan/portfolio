<script setup>
import { useQuasar } from "quasar";
import { computed, ref, onMounted } from "vue";

const $q = useQuasar();
const layout = computed(() => {
  if ($q.screen.lt.sm) return "dense";
  return $q.screen.lt.md ? "comfortable" : "loose";
});

const allExperience = ref([]);

onMounted(() => {
  fetch("data.json")
    .then((resp) => resp.json())
    .then(({ experience }) => {
      allExperience.value = experience;
    });
});
</script>

<template>
  <div class="text-h2 q-py-md header">Experience</div>
  <q-timeline :layout="layout" color="secondary">
    <q-timeline-entry
      v-for="({ title, subtitle, content, color, icon }, idx) in allExperience"
      :key="idx"
      :title="title"
      :subtitle="subtitle"
      :side="idx % 2 ? 'left' : 'right'"
      :color="color || 'secondary'"
      :icon="icon || undefined"
    >
      <div>{{ content }}</div>
    </q-timeline-entry>
  </q-timeline>
</template>
