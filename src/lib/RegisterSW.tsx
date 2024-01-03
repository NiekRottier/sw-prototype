'use client'

export default function RegisterSW() {
  // Checks if the service worker is available and registers service-worker.js 
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .catch((error) => console.log('Service worker registration failed:', error))
  }
  
  return(null)
}