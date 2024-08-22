<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bg="bg-white">
          <h2 class="text-2xl font-bold">
            You are welcome to our Investment application.</h2>
          <p class="mt-2 mb-4"style="padding: 40px;">
            This application allows you to save,budget and invest for future benefits.
          </p>
        </Card>
        <Card bg="bg-yellow-100">
          <h2 class="text-2xl font-bold"></h2>
          <p class="mt-2 mb-4">
        <img src="/f12.png"width="600px">
          </p>
          
        </Card>
      </div>
    </div>
  </section>
</template>
