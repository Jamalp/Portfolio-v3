export function TouchDevice() {
  window.addEventListener("touchstart", () => {
    document.querySelector("body").classList.add("touch-device");
  });
}

export default TouchDevice;
