<template>
  <div class="text-h2 text-center header q-py-md">About</div>
  <div class="about-section">
    <div class="about-content">
      <p class="about-text">
        Back in 2019, I picked Computing as a H2 Subject on a whim. It was an
        "easy A", as seniors liked to say. Unfortunately (for my sleep
        schedule), Computing became a much bigger part of my life than I ever
        anticipated. Fast forward to today and I've tumbled down the
        <span class="em">rabbit hole</span>
        of building personal projects, various websites and now even a veritable
        garage of various robot cars.
      </p>
      <p class="about-text">
        I've had the privilege of working at <span class="em">G Element</span>,
        a smart building company, where I learnt the fundamentals of applying my
        skills to a professional work environment. I'm also currently working
        with <span class="em">LiftAuth</span>, a startup here in NUS that
        focuses on making robot accessible lifts.
      </p>
      <p class="about-text">
        Through my experiences both inside NUS and out of it, I've developed a
        deep <span class="em">passion</span> for everything and anything
        computer engineering. I believe that Singapore's ongoing transformation
        into a <span class="em">Smart City</span> relies on innovation in these
        technologies, and my experience at <span class="em">LiftAuth</span> has
        sparked a desire to be a part of
        <span class="em">pioneering</span> innovation in this exciting new
        market.
      </p>
      <p class="about-text">
        When I'm not at my computer, you can usually find me at the gym, rock
        climbing, reading or running around
        <span class="em">Faerûn</span> trying to defeat the Absolute.
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
  color: black;
  transition: color 0.3s ease;
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
.em {
  color: #21aba6;
}
</style>
