const e={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function o(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.form.addEventListener("click",(function(t){t.preventDefault();let n=Number(e.delay.value),r=Number(e.step.value),l=Number(e.amount.value);if(n<0||r<0||l<0)return void alert('"First delay" and  "Delay step" must be 0 or more. "Amount" must be more than 0.');for(let e=1;e<=l;e+=1){o(e,n+r*e).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.7258441c.js.map