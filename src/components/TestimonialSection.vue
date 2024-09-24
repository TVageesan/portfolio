<template>
  <div class="text-h2 text-center header">Testimonials</div>
  <div class="testimonial-section">
    <div class="quote-container">
      <div class="quote">
        <p>
          "[Thiru]'s' ability to remain <strong>calm and composed</strong> under
          pressure... His <strong>passion for learning</strong> and natural
          inclination towards <strong>problem-solving</strong> make him an
          excellent candidate."
        </p>
        <footer>— Dr. Tan Tiow Seng, A/P</footer>
        <div class="pdf-link">
          <a href="TanTiowSeng.pdf" target="_blank">Full letter</a>
        </div>
      </div>
      <div class="quote">
        <p>
          "Thiru demonstrated an <strong>exceptional ability</strong> to grasp
          new concepts quickly and independently. His
          <strong>resourcefulness</strong> and
          <strong>proactive nature</strong> make him an ideal member of any
          startup environment."
        </p>
        <footer>— Mr. Tan Guo Yang, Co-founder of LiftAuth</footer>
        <div class="pdf-link">
          <a href="TanGuoYang.pdf" target="_blank">Full letter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-section {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quote-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}

.quote {
  width: 45%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.quote p {
  font-size: 1.1rem;
  color: #333;
}

.quote em {
  font-weight: bold;
  color: #007bff;
}

footer {
  margin-top: 1rem;
  font-style: italic;
  font-size: 0.9rem;
  color: #555;
}

.pdf-link {
  margin-top: 2rem;
}

.pdf-link a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #007bff;
  border-bottom: 1px solid #007bff;
  transition: all 0.3s ease;
}

.pdf-link a:hover {
  color: #0056b3;
  border-bottom: 1px solid #0056b3;
}
</style>
