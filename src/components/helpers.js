const TouchDevice = () => {
  return window.addEventListener("touchstart", () => {
    window.querySelector("body").classList.add("touch-device");
  });
};

export default TouchDevice;
