!function(){var e={selectHeader:document.querySelector(".select__header"),selectCurrent:document.querySelector(".select__current"),selectItem:document.querySelectorAll(".select__item")};function t(){e.selectHeader.parentElement.classList.toggle("is-active")}function c(){var c=this.textContent;e.selectCurrent.value=c,t()}e.selectHeader.addEventListener("click",t),e.selectItem.forEach((function(e){e.addEventListener("click",c)})),document.addEventListener("click",(function(t){!e.selectHeader.contains(t.target)&&e.selectHeader.parentElement.classList.contains("is-active")&&e.selectHeader.parentElement.classList.remove("is-active")}));var r={placeholders:document.querySelectorAll(".form-placeholder"),inputs:document.querySelectorAll(".form-input")};function n(e){e.target.style.display="none";var t=this.closest(".input-wrapper").querySelector(".form-input");t&&t.focus()}function l(e){var t=e.target,c=t.parentElement.querySelector(".form-placeholder");""==t.value&&(c.style.display="flex")}r.placeholders.forEach((function(e){e.addEventListener("click",n)})),r.inputs.forEach((function(e){e.addEventListener("blur",l)}))}();
//# sourceMappingURL=index.f48194d5.js.map
