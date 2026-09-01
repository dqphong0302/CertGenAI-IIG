import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

function subscribe(onStoreChange: () => void) {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  mql.addEventListener('change', onStoreChange);
  return () => mql.removeEventListener('change', onStoreChange);
}

const getSnapshot = () => window.innerWidth < MOBILE_BREAKPOINT;

// Trên server chưa biết kích thước màn hình; mặc định desktop để khớp lần render đầu ở client.
const getServerSnapshot = () => false;

export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
