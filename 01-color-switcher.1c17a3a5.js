let t;const e={startBtn:document.querySelector("button[data-start]"),stoptBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.stoptBtn.setAttribute("disabled",!0),e.startBtn.addEventListener("click",(function(){e.startBtn.setAttribute("disabled",!0),e.stoptBtn.removeAttribute("disabled"),t=setInterval((()=>{e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.stoptBtn.addEventListener("click",(function(){e.stoptBtn.setAttribute("disabled",!0),e.startBtn.removeAttribute("disabled"),clearInterval(t),t=null}));
//# sourceMappingURL=01-color-switcher.1c17a3a5.js.map
