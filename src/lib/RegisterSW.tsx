'use client'

export default function RegisterSW() {
  // Checks if the service worker is available and registers service-worker.js 
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => console.log('Service worker scope is:', registration.scope))
      .catch((error) => console.log('Service worker registration failed:', error))
  }
  
  return(null)
}