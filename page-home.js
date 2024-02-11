import { render, html } from 'https://cdn.jsdelivr.net/npm/uhtml/preactive.js'
import { text } from './state.js'
import { activePage } from './state.js'


customElements.define(
  'page-home',
  class extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
      setTimeout(() => {
        text.value = 'home'
      }, 100)

      render(this, this.render)
    }

    disconnectedCallback() {
      console.log('page home disconnected')
    }

    render = () => html`
      ${(console.log('rendering page home'))}
      <div>
        ${text.value}
        <button onclick=${() => activePage.value = 1}>go to inner page</button>
      </div>
    `
  },
)
