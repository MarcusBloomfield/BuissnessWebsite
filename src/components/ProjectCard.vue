<template>
  <div class="project-card">
    <div class="project-image" :style="{ background: backgroundGradient }">
      <div class="overlay">
        <h3>{{ title }}</h3>
        <p>{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  category: String,
  backgroundGradient: String
})
</script>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
  height: 400px;
  cursor: pointer;
}

.project-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  color: #fff;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .overlay {
  opacity: 1;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #fff;
}

p {
  font-family: var(--font-sans);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
</style>
