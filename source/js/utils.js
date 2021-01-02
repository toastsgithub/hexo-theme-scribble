function debounce(fn, interval = 100) {
  let timeoutHandle
  return function (...args) {
    if (timeoutHandle) clearTimeout(timeoutHandle)
    timeoutHandle = setTimeout(() => {
      fn.apply(this, args)
    }, interval);
  }
}