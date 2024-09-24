<template>
  <div class="text-h2 text-center header q-py-md">About</div>
  <div class="about-section">
    <div class="about-content">
      <p class="about-text">
        Back in 2019, I picked Computing as a H2 Subject on a whim. It was an
        "easy A", as seniors liked to say. Unfortunately (for my sleep
        schedule), Computing became a much bigger part of my life than I ever
        anticipated. Fast forward to today and I've tumbled down the rabbit hole
        of building personal projects, various websites and now even a veritable
        garage of various robot cars.
      </p>
      <p class="about-text">
        I've had the privilege of working at G Element, a smart building
        company, where I learnt the fundamentals of applying my skills to a
        professional work environment. I'm also currently working with LiftAuth,
        a startup here in NUS that focuses on making robot accessible lifts.
      </p>
      <p class="about-text">
        Through my experiences both inside NUS and out of it, I've developed a
        deep passion for everything and anything computer engineering. I believe
        that Singapore's ongoing transformation into a Smart City relies on
        innovation in these technologies, and my experience at LiftAuth has
        sparked a desire to be a part of this exciting new market not as an
        employee but as a pioneer.
      </p>
      <p class="about-text">
        When I'm not at my computer, you can usually find me at the gym, rock
        climbing, reading or running around Faerûn trying to defeat the
        Absolute.
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
