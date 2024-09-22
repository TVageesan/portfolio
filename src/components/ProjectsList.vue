<script setup>
import { ref, computed, onMounted } from "vue";

const selectedSkills = ref([]);
const allProjects = ref([]);
const allSkills = ref();

const filteredProjects = computed(() => {
  if (selectedSkills.value.length === 0) return allProjects;
  return projects.filter((project) =>
    project.tags.some((tag) => selectedSkills.value.includes(tag))
  );
});

// onMounted(() => {
//   fetch("data.json")
//     .then((resp) => resp.json())
//     .then(({ projects, skills }) => {
//       allSkills.value = skills;
//       allProjects.value = projects;
//     });
// });
</script>

<template>
  <div class="text-h2 q-py-md header">Projects</div>
  <div class="q-pb-md">
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
  <div>
    <q-card
      v-for="project in filteredProjects"
      :key="project.id"
      class="q-mb-md"
    >
      <q-card-section>
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
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
