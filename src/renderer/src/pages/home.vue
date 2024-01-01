<script setup lang="ts">
import { ref } from 'vue';

const result = ref<adduser[]>([])
window.addtenant.init()
window.addtenant.read().then((r: adduser[]) => {
  console.log(`this is hte resultr set ${r}`)
  result.value.push(...r)
})
</script>
<template>
  <div>
    <h1 class="text-3xl">This is Home page</h1>
    <h1 v-for="r in result" :key="r.TenantMobile">
      {{ r }}
    </h1>
  </div>
</template>
