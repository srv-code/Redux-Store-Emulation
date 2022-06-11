let show = false;

const initDebug = on => {
  show = on;
};

const logDebugInfo = (tag, message) => {
  if (show) console.info(`[${tag}]`, message);
};

module.exports = { initDebug, logDebugInfo };
