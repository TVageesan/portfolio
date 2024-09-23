<script setup>
import HeroSection from "components/HeroSection.vue";
import ExpTimeline from "components/ExpTimeline.vue";
import ProjectsList from "components/ProjectsList.vue";
import AboutSection from "components/AboutSection.vue";
import SkillSection from "components/SkillSection.vue";
import TestimonialSection from "components/TestimonialSection.vue";
</script>

<template>
  <div class="page-container">
    <div class="hero-sidebar">
      <HeroSection />
    </div>

    <div class="content">
      <AboutSection />
      <ExpTimeline />
      <SkillSection />
      <ProjectsList />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
}

.hero-sidebar {
  flex-basis: 30%;
  position: sticky;
  top: 0;
  height: 100vh;
  background: #424242;
  color: #ffffff;
  padding: 2rem;
  padding-right: 0.07rem;
}

.content {
  flex-grow: 1;
  padding: 2rem;
  background: #ffffff;
}
</style>
