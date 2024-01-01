import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'
import { addtenant } from './apis/addtenant'
import { navbar } from './apis/navbar'
// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('navbar', navbar)
    contextBridge.exposeInMainWorld('addtenant', addtenant)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
  // @ts-ignore (define in dts)
  window.navbar = navbar
  // @ts-ignore (define in dts)
  window.addtenant = addtenant
}
