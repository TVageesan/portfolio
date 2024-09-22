<script setup>
import { useQuasar } from "quasar";
import { computed, ref, onMounted } from "vue";
import { experience } from "../data.json";

const $q = useQuasar();
const layout = computed(() => {
  if ($q.screen.lt.sm) return "dense";
  return $q.screen.lt.md ? "comfortable" : "loose";
});
</script>

<template>
  <q-timeline :layout="layout" color="secondary">
    <q-timeline-entry heading> Experience </q-timeline-entry>
    <q-timeline-entry
      v-for="({ title, subtitle, content, color, icon }, idx) in experience"
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
