const e={selectHeader:document.querySelector(".select__header"),selectCurrent:document.querySelector(".select__current"),selectItem:document.querySelectorAll(".select__item")};function t(){e.selectHeader.parentElement.classList.toggle("is-active")}function c(){const c=this.textContent;e.selectCurrent.value=c,t()}e.selectHeader.addEventListener("click",t),e.selectItem.forEach((e=>{e.addEventListener("click",c)})),document.addEventListener("click",(function(t){!e.selectHeader.contains(t.target)&&e.selectHeader.parentElement.classList.contains("is-active")&&e.selectHeader.parentElement.classList.remove("is-active")}));const l={placeholders:document.querySelectorAll(".form-placeholder"),inputs:document.querySelectorAll(".form-input")};function n(e){e.target.style.display="none";const t=this.closest(".input-wrapper").querySelector(".form-input");t&&t.focus()}function r(e){const t=e.target,c=t.parentElement.querySelector(".form-placeholder");""==t.value&&(c.style.display="flex")}l.placeholders.forEach((e=>{e.addEventListener("click",n)})),l.inputs.forEach((e=>{e.addEventListener("blur",r)}));
//# sourceMappingURL=index.28ecdad0.js.map