/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      p h5 {
        font-size: 16px;
      }
      .card {
        margin: 12px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      .form-text {
        padding: 0;
        margin: 20px 0 0 0;
      }

      .form-field {
        width: 100%;
        height: 30px;
        border: solid 1px;
      }

      .submit-button {
        display: block;
        margin-top: 20px;
        box-sizing: border-box;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        outline: 0;
        border: none;
        -webkit-tap-highlight-color: transparent;
        white-space: nowrap;
        text-decoration: none;
        vertical-align: baseline;
        text-align: center;
        min-width: 88px;
        line-height: 36px;
        padding: 0 16px;
        border-radius: 2px;
        border: solid 1px black;
        overflow: visible;
        background-color: #4285f4;
      }

      .toast {
        box-sizing: border-box;
        width: 100%;
        background-color: #353535;
        color: white;
        padding: 20px;
        margin: 15px 0;
        font-weight: bold;
        transition: opacity 2s;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
