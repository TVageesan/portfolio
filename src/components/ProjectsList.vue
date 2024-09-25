<script setup>
import { ref, computed, onMounted } from "vue";
import { projects } from "../data.json";

const selectedSkills = ref([]);
const allSkills = ref([]);

const filteredProjects = computed(() => {
  if (selectedSkills.value.length === 0) return projects;
  return projects.filter((project) =>
    project.tags.some((tag) => selectedSkills.value.includes(tag))
  );
});

onMounted(() => {
  for (const { tags } of projects) {
    for (const tag of tags) {
      if (!allSkills.value.includes(tag)) {
        allSkills.value.push(tag);
      }
    }
  }
});
</script>

<template>
  <div class="text-h2 text-center q-py-md header">Projects</div>
  <div class="q-pa-md row items-start justify-center q-gutter-md">
    <q-chip
      v-for="skill in allSkills"
      :key="skill"
      clickable
      outline
      color="primary"
      :label="skill"
      :class="
        selectedSkills.includes(skill) ? 'text-secondary' : 'text-primary'
      "
      :selected="selectedSkills.includes(skill)"
      @click="
        selectedSkills.includes(skill)
          ? selectedSkills.splice(selectedSkills.indexOf(skill), 1)
          : selectedSkills.push(skill)
      "
    />
    <q-chip
      clickable
      outline
      color="negative"
      label="Clear"
      @click="selectedSkills = []"
    />
  </div>

  <div class="q-pa-md row items-start justify-center q-gutter-md">
    <q-card class="my-card" v-for="project in filteredProjects" :key="project">
      <q-img
        :src="
          project.url ? project.url : 'https://cdn.quasar.dev/img/parallax2.jpg'
        "
        height="400px"
      >
        <div class="absolute-bottom text-h6">{{ project.name }}</div>
      </q-img>

      <q-card-section>
        <div class="text-body">{{ project.description }}</div>
        <div>
          <q-chip
            v-for="tag in project.tags"
            :key="tag"
            outline
            color="secondary"
          >
            {{ tag }}
          </q-chip>
        </div>
      </q-card-section>
      <q-card-actions align="left">
        <q-btn
          flat
          label="View Details"
          :href="project.github"
          target="_blank"
          class="q-mt-md"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<style scoped>
.my-card {
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This pushes the button to the bottom */
}
</style>
