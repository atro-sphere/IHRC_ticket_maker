const { app, BrowserWindow, dialog} = require('electron')
const path = require('path')
const fs = require("fs")

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

const { ipcMain } = require('electron')

app.whenReady().then(()=>{
  createWindow()

  ipcMain.handle("capture_area", async(event, rect) => {
    console.log('受け取ったrect:', rect)
    const image = await win.webContents.capturePage(rect)

    const {filePath} = await dialog.showSaveDialog({
      defaultPath: "ticket.png",
      filters: [{name: "PNG Image", extensions: "png"}]
    })

    if (filePath){
      fs.writeFileSync(filePath, image.toPNG())
    }
  })

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
