<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
const toast = useToast()
window.addtenant.init().then((r) => {
  toast.success(r.msg)
})
const tname = ref('')
const tmobile = ref('')
const tPAN = ref('')
const tpa = ref('')
const tra = ref('')
const rentAmount = ref(0)
const parkingAmount = ref(0)
const maintananceAmount = ref(0)
const peopleStaying = ref(0)
const sDate = ref<Date>(new Date('2023-06-01'))
const eDate = ref<Date>(new Date('2023-06-01'))
const Ownername = ref('')
const Ownermobile = ref('')
const OwnerPAN = ref('')
const OwnerPAddress = ref('')
const OwnerCAddress = ref('')
const k = () => {
  console.log(sDate)
  window.addtenant.add({
    TenantName: tname.value,
    TenantMobile: tmobile.value,
    TenantPAN: tPAN.value,
    TenantPermanentAddress: tpa.value,
    TenantRentedAddress: tra.value,
    RentAmount: rentAmount.value,
    MaintananceAmount: maintananceAmount.value,
    ParkingAmount: parkingAmount.value,
    PeopleStaying: peopleStaying.value,
    StartDate: sDate.value,
    EndDate: eDate.value,
    OwnerName: Ownername.value,
    OwnerMobile: Ownermobile.value,
    OwnerPAN: OwnerPAN.value,
    OwnerPermanentAddress: OwnerPAddress.value,
    OwnerCorrespondenceAddress: OwnerCAddress.value
  })
}
</script>
<template>
  <div class="bg-amber-300">
    <h1 class="text-3xl text-center bg-slate-600 text-white">Tenant Details</h1>
    <!-- space for Tenant Name -->
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Tenant Name:</label>
      <input
        id=""
        v-model="tname"
        type="text"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Tenant Mobile: </label>
      <input
        id=""
        v-model="tmobile"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
      <label for="" class="text-lg font-Prompt col-span-2">Tenant PAN Number:</label>
      <input
        id=""
        v-model="tPAN"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Tenant Permanent Address:</label>
      <textarea
        id=""
        v-model="tpa"
        name=""
        cols="30"
        rows="2"
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      ></textarea>
      <label for="" class="text-lg font-Prompt col-span-2"> Tenant Rented Address:</label>
      <textarea
        id=""
        v-model="tra"
        name=""
        cols="30"
        rows="2"
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      ></textarea>
    </div>

    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Rent Amount:</label>
      <input
        id=""
        v-model="rentAmount"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Maintanance Amount:</label>
      <input
        id=""
        v-model="maintananceAmount"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Parking Amount:</label>
      <input
        id=""
        v-model="parkingAmount"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">No of people staying:</label>
      <input
        id=""
        v-model="peopleStaying"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Start Date:</label>
      <input
        id=""
        v-model="sDate"
        type="date"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">End Date:</label>
      <input
        id=""
        v-model="eDate"
        type="date"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Owner Name:</label>
      <input
        id=""
        v-model="Ownername"
        type="text"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Owner Mobile: </label>
      <input
        id=""
        v-model="Ownermobile"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
      <label for="" class="text-lg font-Prompt col-span-2">Owner PAN Number:</label>
      <input
        id=""
        v-model="OwnerPAN"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Owner Permanent Address:</label>
      <textarea
        id=""
        v-model="OwnerPAddress"
        name=""
        cols="30"
        rows="2"
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      ></textarea>
      <label for="" class="text-lg font-Prompt col-span-2"> Owner Correspondence Address:</label>
      <textarea
        id=""
        v-model="OwnerCAddress"
        name=""
        cols="30"
        rows="2"
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      ></textarea>
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right" @click="k">
      <button
        type="button"
        class="col-span-9 rounded-lg col-start-3 bg-green-700 hover:shadow-xl border-2"
      >
        Add
      </button>
    </div>
  </div>
</template>
