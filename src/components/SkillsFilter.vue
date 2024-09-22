<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { skills } from "../data.json"; // Load data from JSON

// Selected skills will be an array to hold multiple selections
const selectedSkills = ref([]);
const allSkills = ref(skills);

const clearSkills = () => {
  selectedSkills.value = [];
};
</script>

<template>
  <div class="q-pa-md">
    <h2 class="text-h4">Skills</h2>

    <div>
      <q-chip
        v-for="skill in allSkills"
        :key="skill"
        clickable
        outline
        color="primary"
        :label="skill"
        :selected="selectedSkills.includes(skill)"
        @click="
          selectedSkills.includes(skill)
            ? selectedSkills.splice(selectedSkills.indexOf(skill), 1)
            : selectedSkills.push(skill)
        "
      />
    </div>
  </div>
</template>
