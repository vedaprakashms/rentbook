import { ElectronAPI } from '@electron-toolkit/preload'
import { addtenant } from './apis/addtenant'
import { navbar } from './apis/navbar'
declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    navbar: typeof navbar
    addtenant: typeof addtenant
  }
}
