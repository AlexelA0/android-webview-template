// Vibration helper
function haptic(type = 'click') {
  if (window.AndroidInterface && window.AndroidInterface.triggerVibrate) {
    window.AndroidInterface.triggerVibrate(type);
  }
}

// Notification helper
function sendNotification(title, message) {
  if (window.AndroidInterface && window.AndroidInterface.triggerNotification) {
    window.AndroidInterface.triggerNotification(title, message);
  }
}

// Keep screen awake helper
function setScreenAwake(enable = true) {
  if (window.AndroidInterface && window.AndroidInterface.setKeepScreenOn) {
    window.AndroidInterface.setKeepScreenOn(enable);
  }
}

// Back-button helper
function handleAndroidBack() {
  if (window.activeModal && window.activeModal.classList.contains('open')) {
    window.activeModal.classList.remove('open');
    window.activeModal = null;
    return true;
  }
  return false;
}
