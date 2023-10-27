<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
 import { RouterView, RouterLink } from 'vue-router';
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
