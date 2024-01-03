<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { helpers, minLength, numeric, required } from '@vuelidate/validators';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
const pan = helpers.regex(/[a-zA-Z]{5}[0-9]{4}[a-zA-Z]/gi)

const rules = {
  TenantName: { required, minLength: minLength(3) },
  TenantMobile: { required, minLength: minLength(10) },
  TenantPAN: { required: helpers.withMessage('Enter proper pan number', required), pan },
  TenantPermanentAddress: { required, minLength: minLength(10) },
  TenantRentedAddress: { required, minLength: minLength(10) },
  RentAmount: { required, numeric: numeric },
  MaintananceAmount: { required, numeric: numeric },
  ParkingAmount: { required, numeric: numeric },
  PeopleStaying: { required, numeric: numeric },
  StartDate: { required },
  EndDate: { required },
  OwnerName: { required },
  OwnerMobile: { required, minLength: minLength(10) },
  OwnerPAN: { required: helpers.withMessage('Enter proper pan number', required), pan },
  OwnerPermanentAddress: { required, minLength: minLength(10) },
  OwnerCorrespondenceAddress: { required, minLength: minLength(10) }
}
const formdata = ref({
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

const v$ = useVuelidate(rules, formdata)

const toast = useToast()
const k = async () => {
  const result = await v$.value.$validate()
  if (result) {
    console.log(result, formdata)
    const d = JSON.stringify(formdata.value)
    console.log(JSON.parse(d))
    window.addtenant.add(JSON.parse(d)).then((r) => {
      console.log(r)

      toast.success('The tenant is stored in Database under id : ' + r._id, {
        timeout: 1000
      })
    })
  } else {
    v$.value.$errors.map((e) => {
      toast.error(`Error in the ${e.$property}: ${e.$message} `, {
        timeout: 5000
      })
    })
  }
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
        v-model="formdata.TenantName"
        type="text"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Tenant Mobile: </label>
      <input
        id=""
        v-model="formdata.TenantMobile"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
      <label for="" class="text-lg font-Prompt col-span-2">Tenant PAN Number:</label>
      <input
        id=""
        v-model="formdata.TenantPAN"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Tenant Permanent Address:</label>
      <textarea
        id=""
        v-model="formdata.TenantPermanentAddress"
        name=""
        cols="30"
        rows="2"
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      ></textarea>
      <label for="" class="text-lg font-Prompt col-span-2"> Tenant Rented Address:</label>
      <textarea
        id=""
        v-model="formdata.TenantRentedAddress"
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
        v-model="formdata.RentAmount"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Maintanance Amount:</label>
      <input
        id=""
        v-model="formdata.MaintananceAmount"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Parking Amount:</label>
      <input
        id=""
        v-model="formdata.ParkingAmount"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">No of people staying:</label>
      <input
        id=""
        v-model="formdata.PeopleStaying"
        type="number"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Start Date:</label>
      <input
        id=""
        v-model="formdata.StartDate"
        type="date"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">End Date:</label>
      <input
        id=""
        v-model="formdata.EndDate"
        type="date"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Owner Name:</label>
      <input
        id=""
        v-model="formdata.OwnerName"
        type="text"
        name=""
        class="col-span-10 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Owner Mobile: </label>
      <input
        id=""
        v-model="formdata.OwnerMobile"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
      <label for="" class="text-lg font-Prompt col-span-2">Owner PAN Number:</label>
      <input
        id=""
        v-model="formdata.OwnerPAN"
        type="text"
        name=""
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      />
    </div>
    <div class="grid grid-cols-12 items-center justify-center content-center text-right">
      <label for="" class="text-lg font-Prompt col-span-2">Owner Permanent Address:</label>
      <textarea
        id=""
        v-model="formdata.OwnerPermanentAddress"
        name=""
        cols="30"
        rows="2"
        class="col-span-4 m-2 rounded-md border-2 border-slate-900"
      ></textarea>
      <label for="" class="text-lg font-Prompt col-span-2"> Owner Correspondence Address:</label>
      <textarea
        id=""
        v-model="formdata.OwnerCorrespondenceAddress"
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
