import { render, html } from 'https://cdn.jsdelivr.net/npm/uhtml/preactive.js'
import { text } from './state.js'
import { activePage } from './state.js'


customElements.define(
  'page-inner',
  class extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
      setTimeout(() => {
        text.value = 'inner'
      }, 100)

      render(this, this.render)
    }

    disconnectedCallback() {
      console.log('page inner disconnected')
    }

    render = () => html`
      ${(console.log('rendering page inner'))}
      <div>
        ${text.value}
        <button onclick=${() => activePage.value = 0}>go to home page</button>
      </div>
    `
  },
)
