<script setup>
import HeroSection from "components/HeroSection.vue";
import ExpTimeline from "components/ExpTimeline.vue";
import ProjectsList from "components/ProjectsList.vue";
import AboutSection from "components/AboutSection.vue";
import SkillSection from "components/SkillSection.vue";
import TestimonialSection from "components/TestimonialSection.vue";

import { ref, onMounted } from "vue";

// Sections array with labels and IDs
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
];

const currentSection = ref("about");

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 } // 50% visibility before changing the section
  );

  // Observe each section
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section.id);
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  });
});
</script>

<template>
  <div class="page-container">
    <!-- Sidebar Navigation -->
    <div class="hero-sidebar">
      <HeroSection />
    </div>

    <!-- Main Content -->
    <div class="q-pa-md">
      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <ExpTimeline />
      </section>

      <section id="skills">
        <SkillSection />
      </section>

      <section id="projects" class="q-pl-xl">
        <ProjectsList />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
}

.hero-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  min-width: 400px;
  max-width: 400px;
  background: #424242;
  color: #ffffff;
}
</style>
