<script setup lang="ts">
import navbar from '@renderer/components/navbar.vue';
window.addtenant.init().then((r) => {
  console.log(r)
})
</script>

<template>
  <div class="h-dvh">
    <navbar class="h-nav max-h-nav bg-slate-300 text-black text-center" />
    <RouterView class="h-svh max-h-body"></RouterView>
  </div>
</template>
