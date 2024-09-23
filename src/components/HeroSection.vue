<script setup>
import { ref, onMounted } from "vue";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
];

const currentSection = ref("about");

const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    const sectionElement = document.getElementById(section.id);
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  });
});
</script>

<template>
  <div class="hero-container">
    <div class="fit column justify-between">
      <!-- Hero Content -->
      <div>
        <h1 class="hero-title">Thiru Vageesan</h1>
        <p class="hero-subtitle">Software | Embedded | IoT</p>
        <p class="hero-description">
          A passionate, versatile computer engineer working towards a smarter
          future.
        </p>
      </div>

      <!-- Sidebar Navigation -->
      <nav class="sidebar-navigation">
        <div
          v-for="(section, i) in sections"
          :key="i"
          :class="{ active: currentSection === section.id }"
          @click="scrollToSection(section.id)"
          class="sidebar-link"
        >
          <div class="sidebar-line"></div>
          <span>{{ section.label }}</span>
        </div>
      </nav>

      <!-- Social Icons at the Bottom -->
      <div class="social-icons">
        <q-btn
          flat
          icon="img: github.png"
          href="https://github.com/TVageesan"
        />
        <q-btn
          flat
          icon="img: linkedin.png"
          href="https://www.linkedin.com/in/tvageesan/"
        />
        <q-btn
          flat
          icon="img: gmail.png"
          href="mailto:thiruvageesan3@gmail.com"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  padding: 2rem;
  color: #ffffff;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #32d5cf;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.sidebar-navigation {
  margin-top: 2rem;
  flex-grow: 1;
}

.sidebar-link {
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  transition: color 0.3s, font-weight 0.3s;
  color: #b0b0b0;
  position: relative;
}

.sidebar-line {
  width: 10px;
  height: 2px;
  background-color: #32d5cf;
  margin-right: 8px;
  transition: width 0.3s ease;
}

.sidebar-link.active .sidebar-line {
  width: 30px; /* Expands the line */
}

.sidebar-link.active span {
  font-weight: bold;
  color: #ffffff;
}

.sidebar-link:hover .sidebar-line {
  width: 30px;
}

.social-icons {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
}
</style>
