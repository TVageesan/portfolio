<template>
  <div class="text-h2 header q-py-md">About</div>
  <div class="about-section">
    <div class="about-content">
      <p class="about-text">
        Hi, I'm Thiru Vageesan, a software engineer passionate about solving
        complex problems and building innovative solutions in embedded systems,
        IoT, and smart city technologies. My journey into engineering began with
        a fascination for how technology can make life smarter and more
        efficient. Over the years, I've honed my skills across different
        domains, constantly learning and evolving as the industry advances.
      </p>
      <p class="about-text">
        I believe in staying versatile, being open to challenges, and
        continuously improving, both as an individual and as a professional.
        Whether it’s diving into a new coding language, exploring cutting-edge
        technologies, or collaborating on impactful projects, I’m always ready
        for the next step.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  padding: 3rem 2rem;

  border-radius: 15px;

  transition: transform 0.3s ease;
}

.about-section:hover {
  transform: translateY(-10px);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #32d5cf;
  position: relative;
  text-align: center;
}

.section-title::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background-color: #32d5cf;
  margin: 0.5rem auto 1rem auto;
  transition: width 0.3s ease;
}

.section-title:hover::after {
  width: 80px;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  animation: fadeInUp 1s ease forwards;
}

.about-text {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: grey;
  transition: color 0.3s ease;
}

.about-section:hover .about-text {
  color: black;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
