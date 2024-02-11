import {render, html} from 'https://cdn.jsdelivr.net/npm/uhtml/preactive.js'
import { activePage } from './state.js'

import './page-home.js'
import './page-inner.js'

render(host, () => html`${
activePage.value === 0 
    ? html`<page-home />`
    : html`<page-inner/>`
}`)
