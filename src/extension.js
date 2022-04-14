/**
 * Disable Gestures 2021
 *
 * A GNOME extension that disables built-in gestures. Useful for kiosks and touch screen apps.
 * 
 */

/* exported init */

class Extension {
  enable () {
    global.stage.get_actions().forEach(a => { a.enabled = false })
    const disableUnmaximizeGesture = () => {
      global.stage.get_actions().forEach(a => { if (a !== this) { a.enabled = false } })
    }
    global.display.connect('notify::focus-window', disableUnmaximizeGesture)
    global.display.connect('in-fullscreen-changed', disableUnmaximizeGesture)
  }

  disable () {
    global.stage.get_actions().forEach(a => { a.enabled = true })
    const enableUnmaximizeGesture = () => {
      global.stage.get_actions().forEach(a => { if (a !== this) { a.enabled = true } })
    }
    global.display.connect('notify::focus-window', enableUnmaximizeGesture)
    global.display.connect('in-fullscreen-changed', enableUnmaximizeGesture)
  }
}

function init () {
  return new Extension()
}
