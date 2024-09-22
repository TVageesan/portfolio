<script setup>
import { computed, ref } from "vue";
import { projects } from "../data.json";

const selectedSkill = ref(null);
const allProjects = ref(projects);

const filteredProjects = computed(() => {
  if (!selectedSkill.value) return allProjects.value;
  return allProjects.value.filter((project) =>
    project.tags.includes(selectedSkill.value)
  );
});
</script>

<template>
  <div class="q-pa-md">
    <h2 class="text-h4 q-mb-md">Featured Projects</h2>
    <q-card
      v-for="project in filteredProjects"
      :key="project.name"
      class="q-mb-md q-pa-md"
    >
      <q-card-section>
        <h3 class="text-h6">{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="q-mt-md">
          <q-chip
            v-for="tag in project.tags"
            :key="tag"
            clickable
            outline
            color="secondary"
          >
            {{ tag }}
          </q-chip>
        </div>
        <q-btn
          flat
          label="View on GitHub"
          :href="project.link"
          target="_blank"
          class="q-mt-md"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
