<script setup lang="ts">
import homecard from '@renderer/components/homeCard.vue';
import { ref } from 'vue';
const result = ref<adduser[]>([])
window.addtenant.init()
window.addtenant.read().then((r: adduser[]) => {
  console.log(`this is hte resultr set ${r}`)
  result.value.push(...r)
})
</script>
<template>
  <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-h-body overflow-y-auto">
      <homecard v-for="r in result" :key="r.TenantMobile" :tenant="r" />
    </div>
  </div>
</template>
