<script setup>
import HeroSection from "components/HeroSection.vue";
import ExpTimeline from "components/ExpTimeline.vue";
import ProjectsList from "components/ProjectsList.vue";
import AboutSection from "components/AboutSection.vue";
</script>

<template>
  <div class="page-container">
    <div class="hero-sidebar">
      <HeroSection />
    </div>

    <div class="content">
      <AboutSection />
      <q-separator class="q-ma-md" inset color="secondary" />
      <ExpTimeline />
      <q-separator class="q-ma-md" inset color="secondary" />
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
