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
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import './shared-styles.js';

class SeeQuotes extends GestureEventListeners(PolymerElement) {

  constructor() {
    super();
    import('./single-quote.js');
    this.startPress = null;
    this.endPress = null;
    this.gesturing = 'none';
    this.toasterOpacity = 0;
    this.fetchQuotes();
  }

  fetchQuotes() {
    fetch(`https://gruppe5-citater.firebaseio.com/quotes.json`)
    .then(res => res.json())
    .then(json => {
      const arr = [];
      for (let quote in json) {
        arr.push(json[quote]);
      }
      this.data = arr;
      this.gesturing = 'none';
      this.toasterOpacity = 0;
    });
  }

  refresh() {
    this.gesturing = "block";
    this.toasterOpacity = 1;
    this.fetchQuotes();
  }

  static get template() {
    console.log("template");
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <div class="toast" style$="opacity: {{toasterOpacity}}; display: {{gesturing}};">
        <h5>Opdaterer 🙂🙂🙂...</h5>
      </div>
      <div class="card">
        <h1>Se alle citater sagt i gruppen her 🙂</h1>
        <button class="submit-button" on-click="refresh">Opdatér🙂</button>
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
      },
      toasterOpacity: {
        type: Number
      },
      gesturing: {
        type: Boolean
      }
    };
  }
}

window.customElements.define('see-quotes', SeeQuotes);
