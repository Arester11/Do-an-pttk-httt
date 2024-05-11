import { queryElement } from "../constant.js";

const modalSizeEle = queryElement(".modal");
const closeIcon = modalSizeEle.querySelector(".modal__close-icon");
const overlayModal = modalSizeEle.querySelector(".overlay");

closeIcon.addEventListener("click", () => {
  modalSizeEle.classList.add("hidden");
});

overlayModal.addEventListener("click", () => {
  modalSizeEle.classList.add("hidden");
});
