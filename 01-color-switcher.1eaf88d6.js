!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.querySelector("body");function a(t){var e=o.style;e.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.transition="background-color 2s cubic-bezier(.50, 0, .50, 1)"}e.addEventListener("click",(function(e){t=setInterval(a,2e3),e.target.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(n){clearInterval(t),n.target.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.1eaf88d6.js.map
