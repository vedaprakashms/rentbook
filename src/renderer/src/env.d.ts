/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface adduser {
  TenantName: string
  TenantMobile: string
  TenantPAN: string
  TenantPermanentAddress: string
  TenantRentedAddress: string
  RentAmount: number
  MaintananceAmount: number
  ParkingAmount: number
  PeopleStaying: number
  StartDate: Date
  EndDate: Date
  OwnerName: string
  OwnerMobile: string
  OwnerPAN: string
  OwnerPermanentAddress: string
  OwnerCorrespondenceAddress: string
  rentpaid?: pay
}
interface pay {
  rent: Date[]
  maintance: Date[]
  parking: Date[]
}
