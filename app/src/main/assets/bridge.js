window.haptic = function(type) {
  if (window.AndroidInterface && window.AndroidInterface.triggerVibrate) {
    window.AndroidInterface.triggerVibrate(type);
  }
};

window.playNativeAlarm = function() {
  if (window.AndroidInterface && window.AndroidInterface.playNativeAlarm) {
    window.AndroidInterface.playNativeAlarm();
  }
};

window.stopNativeAlarm = function() {
  if (window.AndroidInterface && window.AndroidInterface.stopNativeAlarm) {
    window.AndroidInterface.stopNativeAlarm();
  }
};

window.playNativeBeep = function(type) {
  if (window.AndroidInterface && window.AndroidInterface.playNativeBeep) {
    window.AndroidInterface.playNativeBeep(type);
  }
};

window.acquireWakeLock = function() {
  if (window.AndroidInterface && window.AndroidInterface.acquireWakeLock) {
    window.AndroidInterface.acquireWakeLock();
  }
};

window.releaseWakeLock = function() {
  if (window.AndroidInterface && window.AndroidInterface.releaseWakeLock) {
    window.AndroidInterface.releaseWakeLock();
  }
};

window.sendNotification = function(title, msg) {
  if (window.AndroidInterface && window.AndroidInterface.triggerNotification) {
    window.AndroidInterface.triggerNotification(title, msg);
  }
};

window.setScreenAwake = function(enable) {
  if (window.AndroidInterface && window.AndroidInterface.setKeepScreenOn) {
    window.AndroidInterface.setKeepScreenOn(enable);
  }
};

window.handleAndroidBack = function() {
  if (window.activeModal) {
    window.activeModal.style.display = 'none';
    window.activeModal = null;
    return true;
  }
  return false;
};
