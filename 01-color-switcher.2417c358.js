const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n;function r(t){const e=o.style;e.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,e.transition="background-color 2s cubic-bezier(.50, 0, .50, 1)"}t.addEventListener("click",(function(t){n=setInterval(r,2e3),t.target.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(e){clearInterval(n),e.target.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.2417c358.js.map
