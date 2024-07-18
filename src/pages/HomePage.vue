<script setup>
import { blogsService } from '../services/BlogsService.js';
import Pop from '../utils/Pop.js';


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
    <div class="row">
      <div class="col-12">
        <h1>Blogger</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
