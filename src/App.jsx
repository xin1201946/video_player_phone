// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import React from 'react';
import {Counter_main} from './counter.jsx';
import './App.css'
const mql = window.matchMedia('(prefers-color-scheme: dark)');
function matchMode(e) {
    const body = document.body;
    if (e.matches) {
        if (!body.hasAttribute('theme-mode')) {
            body.setAttribute('theme-mode', 'dark');
        }
    } else {
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        }
    }
}
mql.addListener(matchMode);
const XLlist = [
    { value: 'https://jx.xmflv.com/?url=', label: '线路1', otherKey: 0 },
    { value: 'https://cp.987654321.icu/jiexi.php?url=', label: '线路2', otherKey: 1 },
    { value: 'http://jiexi.vipno.cn/?v=', label: '线路3', otherKey: 2 },
    { value: 'https://jx.ppflv.com/?url=', label: '线路4', otherKey: 3 },
    { value: 'https://im1907.top/?jx=', label: '线路5-可搜片名', otherKey: 4 },
];
sessionStorage.setItem('XLlist', JSON.stringify(XLlist));
function App() {

  return (
      <>
          <h1 className="logo">VideoPlayer</h1>
          <Counter_main></Counter_main>
          <br/>
      </>
  )
}

export default App
