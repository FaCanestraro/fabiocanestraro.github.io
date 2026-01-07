<template>
  <div class="project-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}
</style>
