<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";
import { experience } from "../data.json";

const $q = useQuasar();
const layout = computed(() => {
  if ($q.screen.lt.sm) return "dense";
  return $q.screen.lt.md ? "comfortable" : "loose";
});
</script>

<template>
  <div class="text-h2 text-center q-py-md header">Experience</div>
  <q-timeline :layout="layout" color="secondary">
    <q-timeline-entry
      v-for="({ title, subtitle, content, color, icon }, idx) in experience"
      :key="idx"
      :title="title"
      :subtitle="subtitle"
      :side="idx % 2 ? 'left' : 'right'"
      :color="color || 'secondary'"
      :icon="icon || undefined"
    >
      <div class="about-text">{{ content }}</div>
    </q-timeline-entry>
  </q-timeline>
</template>

<style scoped>
.q-timeline-entry {
  background: #e0f2f1;
  border-radius: 12px;
  padding: 16px;
  transition: box-shadow 0.3s ease-in-out;
}

.q-timeline-entry:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.entry-icon {
  color: #004d40;
}

.about-text {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: black;
  transition: color 0.3s ease;
}
</style>
