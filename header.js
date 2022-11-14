// ==UserScript==
// @name         cinema_ds
// @namespace    http://tampermonkey.net/
// @version      0.24
// @description  A Discord addon which transforms server/dm channels into image strips 
// @author       Barney
// @match        https://discord.com/*
// @match        https://discord.gg/*
// @icon         https://images.techhive.com/images/article/2016/10/firefox-logo-100690302-large.jpg?auto=webp&quality=85,70
// @connect      *
// @connect      self
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @require      https://unpkg.com/dexie@latest/dist/dexie.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        window.onurlchange
// @grant        unsafeWindow
// @run-at       document-start
// @license 	 MIT
// ==/UserScript==


// ======================================================================
// Discord unbinds local storage methods to make the token unaccessible
// ======================================================================

// That's a wise decision. Let it be.

// But the token is still needed, so
// simply make the Tampermonkey script launch BEFORE discord...

// actually, this is not accessible from console
// and therefore it shouldn't be too big of a security problem
// just make sure that Tampermonkey keeps this entire thing sandboxed
// todo: does it actually has to be in the very top of the stuff ?
const ds_token = window.localStorage['token'].replaceAll('"', '');
// window.padlock = userToken.replaceAll('"', '');