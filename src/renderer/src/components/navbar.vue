<script setup lang="ts">
import { routes } from '@renderer/router/main';
import { useRouter } from 'vue-router';
const rot = useRouter()
const min = () => {
  window.navbar.minimize()
}

const close = () => {
  window.navbar.close()
}

const navigate = (k) => {
  rot.push(k)
}
</script>
<template>
  <div id="title-bar" class="flex">
    <div class="flex bg-red-400 justify-center items-center align-middle">
      <div class="flex gap-1">
        <font-awesome-icon :icon="['fas', 'house-chimney-user']" class="text-2xl p-1" />
        <p class="md:text-lg font-Pacifico p-1">RentBook</p>
      </div>
    </div>
    <div
      class="flex text-lg font-Prompt font-light capitalize grow justify-center items-center align-middle"
    >
      <ul
        v-for="route in routes"
        id="title-bar-btns"
        :key="route.name"
        class="grow px-2 hover:shadow-lg hover:shadow-green-500"
        @click="navigate(route.path)"
      >
        <font-awesome-icon :icon="route.icon" />
        {{
          route.name
        }}
      </ul>
    </div>
    <div id="title-bar-btns" class="flex gap-3 bg-red-400 justify-center items-center align-middle">
      <button class="p-1 hover:shadow-lg hover:shadow-rose-800" @click="min">
        <font-awesome-icon
          :icon="['fas', 'window-minimize']"
          class="md:text-2xl text-center justify-center items-center align-middle"
        />
      </button>
      <button class="p-1 hover:shadow-lg hover:shadow-rose-800" @click="close">
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="text-2xl text-center justify-center items-center align-middle"
        />
      </button>
    </div>
  </div>
</template>
