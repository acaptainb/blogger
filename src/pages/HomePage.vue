<script setup>
import { computed, onMounted } from 'vue';
import { blogsService } from '../services/BlogsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

const blogs = computed(() => AppState.blogs)
onMounted(() => {
  getBloggs()
})

async function getBloggs() {
  try {
    await blogsService.getBlogs()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blogProp="blog" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
