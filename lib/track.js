export default function track(event, options) {
  if (typeof window === 'undefined') {
    return;
  }
  if (!window.plausible) {
    return;
  }
  window.plausible(event, options)
}