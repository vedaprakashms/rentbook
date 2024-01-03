<script setup lang="ts">
import { useToast } from 'vue-toastification';

const props = defineProps<{
  tenant: adduser
}>()
const removedoc = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.addtenant.delete(props.tenant._id?.valueOf() as string).then((r: any) => {
    console.log(r)
    const toast = useToast()
    toast.error('Remove the Tenant with ID' + r.id, {
      timeout: 1000,
      closeButton: true,
      onClose() {
        window.location.reload()
      }
    })
  })
}
</script>
<template>
  <div class="rounded-xl border-2 shadow-2xl m-1 bg-orange-100">
    <div class="p-5 flex flex-col">
      <h1
        class="text-2xl font-Pacifico font-light border-2 border-dashed border-rose-300 rounded-md px-2 text-center capitalize"
      >
        {{ tenant.TenantName }}
      </h1>
      <p class="text-xs text-center font-Lato">ID: {{ tenant._id }}</p>
      <p class="text-xs text-center font-Prompt font-semibold">
        Start Date: {{ tenant.StartDate }} | End Date: {{ tenant.EndDate }}
      </p>
      <p class="text-sm font-semibold text-center font-Oswald">Tenancy Rates</p>
      <div class="flex flex-row gap-3">
        <p class="text-xs font-semibold text-center font-Lato">Rent: {{ tenant.RentAmount }}</p>
        <p class="text-xs font-semibold text-center font-Lato">
          Maintanance: {{ tenant.MaintananceAmount }}
        </p>
        <p class="text-xs font-semibold text-center font-Lato">
          Parking: {{ tenant.ParkingAmount }}
        </p>
      </div>
      <div class="flex felx-row gap-2 items-center justify-center">
        <button
          type="button"
          class="border-2 text-slate-50 text-center font-Oswald font-semibold shadow-md px-2 grow bg-red-700 hover:bg-red-500 hover:shadow-xl border-amber-200"
          @click="removedoc"
        >
          Delete
        </button>
        <button
          type="button"
          class="border-2 text-slate-50 text-center font-Oswald font-semibold shadow-md px-2 grow bg-green-700 border-amber-200"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>
