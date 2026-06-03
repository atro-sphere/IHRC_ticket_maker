const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('globalAPI', {
  capture_area: (rect) => ipcRenderer.invoke('capture_area', rect)
})
