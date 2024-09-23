<template>
  <div class="testimonials-container q-pa-lg">
    <div class="text-h3 q-mb-md">Testimonials</div>
    <q-carousel
      v-model="currentSlide"
      swipeable
      animated
      control-color="secondary"
      navigation
      padding
      arrows
      height="250px"
      class="text-black rounded-borders"
    >
      <q-carousel-slide
        v-for="({ quote, author, pdf }, i) in testimonials"
        :key="i"
        class="column no-wrap flex-center text-center"
      >
        <q-card class="testimonial-card q-pa-md">
          <q-card-section class="testimonial-quote">
            <q-icon name="format_quote" class="testimonial-icon" />
            <p>{{ quote }}</p>
          </q-card-section>
          <q-card-section class="testimonial-author">
            <span>- {{ author }}</span>
          </q-card-section>
          <q-btn
            flat
            color="primary"
            :href="pdf"
            target="_blank"
            label="View Full Letter"
            class="q-mt-md"
          />
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(0);
const testimonials = [
  {
    quote:
      "Thiru was exceptional in demonstrating a deep understanding of software engineering principles.",
    author: "Prof. John Doe",
    pdf: "path/to/recommendation-letter1.pdf",
  },
  {
    quote:
      "A hardworking and dedicated individual, Thiru consistently delivered high-quality results.",
    author: "Dr. Jane Smith",
    pdf: "path/to/recommendation-letter2.pdf",
  },
  {
    quote:
      "Thiru showed great leadership and collaboration skills during our IoT project.",
    author: "Dr. Alex Williams",
    pdf: "path/to/recommendation-letter3.pdf",
  },
];
</script>

<style scoped>
.testimonials-container {
  max-width: 800px;
  margin: auto;
}

.testimonial-card {
  width: 100%;
  max-width: 600px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.testimonial-quote p {
  font-size: 1.2rem;
  font-style: italic;
}

.testimonial-author {
  font-weight: bold;
  margin-top: 12px;
}

.testimonial-icon {
  font-size: 1.8rem;
  color: #666;
  margin-bottom: 8px;
}
</style>
