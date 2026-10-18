const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

const SERVER_ADDRESS = 'join1.severoo.com:55230';

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 760,
    minWidth: 900,
    minHeight: 620,
    backgroundColor: '#080711',
    autoHideMenuBar: true,
    title: 'VALYDIUM Launcher',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('close-window', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) win.close();
  return { ok: true };
});

ipcMain.handle('play-minecraft', async () => {
  // Use the official Minecraft Launcher protocol. It requires the user to have
  // installed Minecraft and authenticated through Microsoft's official login.
  try {
    await shell.openExternal('minecraft://');
    return {
      ok: true,
      message: `Le Launcher Minecraft a été ouvert. Pour rejoindre VALYDIUM, sélectionne Java Edition puis Multijoueur et ajoute ${SERVER_ADDRESS}. Le protocole minecraft:// ne permet pas à cette page de garantir une connexion automatique.`
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Impossible d’ouvrir le Launcher Minecraft. Vérifie que Minecraft Launcher est installé, puis ouvre-le manuellement.'
    };
  }
});
