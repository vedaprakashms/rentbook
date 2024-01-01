import { BrowserWindow } from '@electron/remote'

export const navbar = {
  minimize() {
    BrowserWindow.getFocusedWindow()?.minimize()
  },

  toggleMaximize() {
    const win = BrowserWindow.getFocusedWindow()

    if (win?.isMaximized()) {
      win.unmaximize()
    } else {
      win?.maximize()
    }
  },

  close() {
    BrowserWindow.getFocusedWindow()?.close()
  }
}
