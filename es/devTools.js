import { IS_PRODUCTION } from './environment.js';

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
function getGlobal() {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  // @ts-ignore
  if (typeof global !== 'undefined') {
    // @ts-ignore
    return global;
  }
  if (!IS_PRODUCTION) {
    console.warn('XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues');
  }
}
function getDevTools() {
  var global = getGlobal();
  if (global && '__xstate__' in global) {
    return global.__xstate__;
  }
  return undefined;
}
function registerService(service) {
  if (!getGlobal()) {
    return;
  }
  var devTools = getDevTools();
  if (devTools) {
    devTools.register(service);
  }
}

export { getGlobal, registerService };
