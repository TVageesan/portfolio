<script setup>
import { ref } from "vue";

const slide = ref("Frontend Development");
const skillsets = [
  {
    name: "Frontend Development",
    skills: [
      { name: "Javascript", url: "" },
      { name: "Node", url: "" },
      { name: "Vue", url: "" },
      { name: "Quasar", url: "" },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Express", url: "" },
      { name: "PostgresSQL", url: "" },
      { name: "Supabase", url: "" },
      { name: "Postman", url: "" },
    ],
  },
  {
    name: "Robotics",
    skills: [
      { name: "C++", url: "" },
      { name: "ROS", url: "" },
      { name: "OpenCV", url: "" },
      { name: "Docker", url: "" },
    ],
  },
  {
    name: "Embedded",
    skills: [
      { name: "Atmega2560", url: "" },
      { name: "ESP32", url: "" },
      { name: "FRDMKL25Z", url: "" },
    ],
  },
  {
    name: "Software Engineering",
    skills: [
      { name: "Python", url: "" },
      { name: "Java", url: "" },
      { name: "C#", url: "CSharp.png" },
      { name: "Git", url: "" },
      { name: "Figma", url: "" },
    ],
  },
  {
    name: "Looking to develop...",
    skills: [
      { name: "Data Analytics", url: "unknown.png" },
      { name: "AI", url: "unknown.png" },
      { name: "Machine Learning", url: "unknown.png" },
    ],
  },
];

const getSkillImage = (skill) => {
  return skill.url || skill.name.toLowerCase() + ".png";
};
</script>

<template>
  <div class="text-h2 q-py-md header">Skills</div>
  <q-carousel
    v-model="slide"
    swipeable
    animated
    control-color="secondary"
    navigation
    padding
    arrows
    height="300px"
    class="text-black rounded-borders"
  >
    <q-carousel-slide
      v-for="({ name, skills }, i) in skillsets"
      :key="i"
      :name="name"
      class="column no-wrap flex-center text-center"
    >
      <div class="skills-container">
        <div class="q-pa-md skill" v-for="(skill, i) in skills" :key="i">
          <q-img :src="getSkillImage(skill)" class="icon"></q-img>
          <div class="skill-name">{{ skill.name }}</div>
        </div>
      </div>
      <div class="category-name">{{ name }}</div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style scoped>
.icon {
  width: 100px;
  height: 100px;
  margin-bottom: 8px; /* Space between icon and skill name */
  object-fit: contain; /* Ensures the image is resized to fit without being cut off */
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center align the skills */
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center icon and text */
  margin: 10px; /* Space between skill items */
}

.category-name {
  font-weight: bold;
  margin-top: 16px; /* Space above the category name */
}
</style>
