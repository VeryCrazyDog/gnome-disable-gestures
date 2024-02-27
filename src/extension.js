/**
 * Disable Gestures 2021
 *
 * A GNOME extension that disables built-in gestures. Useful for kiosks and touch screen apps.
 */
export default class Extension {
  focusWindowId = null
  inFullscreenChangedId = null

  enable() {
    global.stage.get_actions().forEach(action => { action.enabled = false })
    const disableUnmaximizeGesture = () => {
      global.stage.get_actions().forEach(action => {
        if (action === this) return
        action.enabled = false
      })
    }
    if (this.focusWindowId === null) {
      this.focusWindowId = global.display.connect('notify::focus-window', disableUnmaximizeGesture)
    }
    if (this.inFullscreenChangedId === null) {
      this.inFullscreenChangedId = global.display.connect('in-fullscreen-changed', disableUnmaximizeGesture)
    }
  }

  disable() {
    if (this.inFullscreenChangedId !== null) {
      global.display.disconnect(this.inFullscreenChangedId)
      this.inFullscreenChangedId = null
    }
    if (this.focusWindowId !== null) {
      global.display.disconnect(this.focusWindowId)
      this.focusWindowId = null
    }
    global.stage.get_actions().forEach(action => { action.enabled = true })
  }
}
