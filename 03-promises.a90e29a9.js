const e={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submit:document.querySelector('[type="submit"]')};function t(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.submit.addEventListener("click",(function(o){o.preventDefault();let n=Number(e.delay.value),u=Number(e.step.value),m=Number(e.amount.value);if(n<0||u<0||m<0)return void alert('"First delay" and  "Delay step" must be 0 or more. "Amount" must be more than 0.');for(let e=1;e<=m;e+=1){t(e,n+u*(e-1)).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.a90e29a9.js.map
