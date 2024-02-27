# gnome-disable-gestures
A GNOME extension that disable all GNOME built-in gestures. Useful for kiosks and touch screen apps.

The original implementation of [Disable Gestures][1] extension by [mattbell87] doesn't
work when [single-finger drag down from top of the screen][2]. [katastrophal] had provided
[an implementation][3] at reddit and [osoplex] also provided [another implementation][4]
at reddit too. Unfortunately none of these implementations were published to [extensions.gnome.org].

This repo is created for the purpose to publish the extension using [katastrophal's implementation][3].

## Appendix
Original implementation by [mattbell87]:
```js
global.stage.get_actions().forEach(a => a.enabled = false);
```

[katastrophal]'s implementation at [reddit][3]:
```js
let disableUnfullscreenGesture = () => {
  global.stage.get_actions().forEach(a => { if (a != this) a.enabled = false;});
}
global.display.connect('notify::focus-window', disableUnfullscreenGesture);
global.display.connect('in-fullscreen-changed', disableUnfullscreenGesture);
```

[osoplex]'s implementation at [reddit][4]:
```js
global.stage.get_actions().forEach(a => global.stage.remove_action(a));
```


[1]: https://extensions.gnome.org/extension/1140/disable-gestures/
[2]: https://superuser.com/questions/1542018/how-to-disable-close-fullscreen-touchscreen-gesture-on-gnome-fedora
[3]: https://www.reddit.com/r/gnome/comments/ci6tf4/comment/ev2i0v1/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
[4]: https://www.reddit.com/r/gnome/comments/ci6tf4/comment/ev5bfks/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
[extensions.gnome.org]: https://extensions.gnome.org/
[katastrophal]: https://www.reddit.com/user/katastrophal/
[mattbell87]: https://extensions.gnome.org/accounts/profile/mattbell87
[osoplex]: https://www.reddit.com/user/osoplex/
