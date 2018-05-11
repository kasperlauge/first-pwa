/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './shared-styles.js';

class SeeQuotes extends PolymerElement {

  constructor() {
    super();
    import('./single-quote.js');
    fetch("https://gruppe5-citater.firebaseio.com/quotes.json")
    .then(res => res.json())
    .then(json => {
      const arr = [];
      for (let quote in json) {
        arr.push(json[quote]);
      }
      this.data = arr;
    });
  }

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Se alle citater sagt i gruppen her 🙂</h1>
        <template is="dom-repeat" items="{{data}}">
          <single-quote said=[[item.said]] by=[[item.by]]></single-quote>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      data: {
        type: String
      }
    };
  }
}

window.customElements.define('see-quotes', SeeQuotes);
