// Keyboard Object
const Keyboard = {
  elements: {
    // keyboard
    main: null,
    // keyboard keys container
    keysCountainer: null,
    // keyboard keys
    keys: [],
  },

  eventHandlers: {
    // input on keyboard
    oninput: null,
    // keyboard is closed
    onclose: null,
  },

  // current state of the keyboard
  properties: {
    value: '',
    capsLock: false,
  },

  // initialize keyboard(bring up keys and design etc..)
  init() {
    // cretae main elements
    this.elements.main = document.createElement('div')
    this.elements.keysContainer = document.createElement('div')

    // Setup Main elements
    this.elements.main.classList.add('keyboard', '1keyboard-hidden')
    this.elements.keysContainer.classList.add('keyboard-keys')

    // Add to document
    this.elements.main.appendChild(this.elements.keysContainer)
    document.body.appendChild(this.elements.main)
  },

  // js creation of keys
  _createKeys() {
    // doc fragment
    const fragment = document.createDocumentFragment()
    const keyLayout = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      'backspace',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      'caps',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'enter',
      'done',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '?',
      'space',
    ]

    // Create HTML for icon
    const createIconHTML = (iconName) => {
      return `<i class="material-icons">${iconName}</i>`
    }

    // generate keys
    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button')
      // line break handling
      const insertLineBreak =
        ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1

      // Add attributes/classes
      keyElement.setAttribute('type', 'button')
      keyElement.classList.add('keyboard-key')

      // Handle evenet of the button
      switch (key) {
        case 'backspace':
          keyElement.classList.add('keyboard-key-wide')
          keyElement.innerHTML = createIconHTML('backspace')
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            )
            this._triggerEvent('oninput')
          })
          break

        case 'caps':
          keyElement.classList.add(
            'keyboard-key-wide',
            'keyboard-key-activaitable'
          )
          keyElement.innerHTML = createIconHTML('keyboard_capslock')
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock()
            keyElement.classList.add(
              'keyboard-key-active',
              this.properties.capsLock
            )
          })
          break

        case 'enter':
          keyElement.classList.add('keyboard-key-wide')
          keyElement.innerHTML = createIconHTML('keyboard_return')
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n'
            keyElement.classList.add(
              'keyboard-key-active',
              this.properties.capsLock
            )
          })
          break
      }
    })
  },

  // set event to fire
  _triggerEvent(eventName) {
    console.log('event triggered! Event Name' + eventName)
  },

  // toggle capslock
  _toggleCapsLock() {
    console.log('caps lock toggled')
  },

  open(initialValue, oninput, onclose) {},

  close() {},
}

window.addEventListener('DOMContentLoaded', function () {
  // load keyboard when everything loads
  Keyboard.init()
})
