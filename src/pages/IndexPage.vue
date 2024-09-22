<script setup>
import HeroSection from "components/HeroSection.vue";
import SkillsFilter from "components/SkillsFilter.vue";
import ProjectsList from "components/ProjectsList.vue";
import ExpTimeline from "components/ExpTimeline.vue";
</script>

<template>
  <div class="row q-pa-xl">
    <!-- Sticky Hero Section -->
    <div class="col-xs-12 col-md-3 q-pr-md">
      <HeroSection />
    </div>

    <!-- Main Content Area -->
    <div class="col-xs-12 col-md-9">
      <ExpTimeline />
      <SkillsFilter />
      <ProjectsList />
    </div>
  </div>
</template>
