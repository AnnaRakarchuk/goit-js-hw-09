!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body"),n=null;function a(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval(a,1e3),a(),console.log("start")})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(n),console.log("stop")}))}();
//# sourceMappingURL=01-color-switcher.df39fb78.js.map
