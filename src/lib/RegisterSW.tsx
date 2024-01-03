'use client'

import { Workbox } from 'workbox-window';

export default function RegisterSW() {
  // Checks if the service worker is available and registers service-worker.js 
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js')

    wb.register();
  }
  
  return(null)
}