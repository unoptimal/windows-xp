import { windows } from '../stores.js';

let windowPositions = {};

function getRandomPosition() {
    const maxTop = window.innerHeight - 200; 
    const maxLeft = window.innerWidth - 400; 

    const top = Math.max(0, Math.floor(Math.random() * maxTop)) + 'px';
    const left = Math.max(0, Math.floor(Math.random() * maxLeft)) + 'px';

    return { top, left };
}

export function moveWindow(windowId, left, top) {
    windows.update(w => w.map(window => 
        window.id === windowId 
            ? { ...window, left, top } 
            : window
    ));
}

export function closeWindow(windowId) {
    windows.update(w => {
      const windowToClose = w.find(window => window.id === windowId);
      if (windowToClose) {
        // Store the position of the window before closing it
        windowPositions[windowToClose.type] = { top: windowToClose.top, left: windowToClose.left };
      }
      return w.filter(window => window.id !== windowId);
    });
  }

let windowStates = {};

export function createWindow(type, props = {}) {
  const id = type + Math.random().toString(36).substr(2, 9); // generate a random unique id
  const position = windowPositions[type] || getRandomPosition();

  windows.update(w => [...w, { id, type, props, ...position, ...windowStates[id] }]);
}
