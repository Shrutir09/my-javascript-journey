function createToaster(config) {

  // This function remembers config → CLOSURE
  return function (message) {

    const container = document.getElementById("toastContainer");

    // Create toast
    const toast = document.createElement("div");
    toast.className = `toast ${config.theme}`;
    toast.textContent = message;

    // Add to DOM
    container.appendChild(toast);

    // Remove after duration
    setTimeout(() => {
      toast.remove();
    }, config.duration);
  };
}

/* Create toaster with settings */
const toaster = createToaster({
  duration: 3000, // ms
  theme: "dark"   // "light" or "dark"
});
