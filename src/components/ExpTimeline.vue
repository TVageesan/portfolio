<script setup>
import { useQuasar } from "quasar";
import { computed, ref, onMounted } from "vue";
import entries from "../data/timeline.json";

const $q = useQuasar();
const layout = computed(() => {
  if ($q.screen.lt.sm) return "dense";
  return $q.screen.lt.md ? "comfortable" : "loose";
});
</script>

<template>
  <q-timeline :layout="layout" color="secondary">
    <div v-for="(entry, index) in entries" :key="index">
      <q-timeline-entry v-if="entry.heading" heading>{{
        entry.heading
      }}</q-timeline-entry>
      <q-timeline-entry
        v-for="(entry, idx) in entry.entries"
        :key="idx"
        :title="entry.title"
        :subtitle="entry.subtitle"
        :side="idx % 2 ? 'left' : 'right'"
        :color="entry.color || 'secondary'"
        :icon="entry.icon || undefined"
      >
        <div>{{ entry.content }}</div>
      </q-timeline-entry>
    </div>
  </q-timeline>
</template>
