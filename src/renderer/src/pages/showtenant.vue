<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const id = router.currentRoute.value.params.id

const userData = ref({
  TenantName: '',
  TenantMobile: '',
  TenantPAN: '',
  TenantPermanentAddress: '',
  TenantRentedAddress: '',
  RentAmount: 0,
  MaintananceAmount: 0,
  ParkingAmount: 0,
  PeopleStaying: 0,
  StartDate: new Date(),
  EndDate: new Date(),
  OwnerName: '',
  OwnerMobile: '',
  OwnerPAN: '',
  OwnerPermanentAddress: '',
  OwnerCorrespondenceAddress: ''
})
window.addtenant.search(id as string).then((r) => {
  userData.value = r[0]
  console.log(id)
  console.log(userData.value)
})
</script>
<template>
  <div>
    <h1 v-if="id == ':id'" class="text-3xl">
      Go back to Home and click on the update button on a card
    </h1>
    <h1 v-else class="text-3xl">{{ router.currentRoute.value.params.id }}</h1>
    <h2>{{ userData.TenantName }}</h2>
  </div>
</template>
