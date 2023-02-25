const butInstall = document.getElementById('buttonInstall');

// Handler for 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
      window.deferredPrompt = event;
      // Shows (unhides) button
      butInstall.classList.toggle('hidden', false);
});

// Click event handler on the 'install' button
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  // Get out of function if the event doesn't exist
  if (!promptEvent) {
   return;
  }
  // Display prompt
  promptEvent.prompt();
  // Reset deferred prompt variable
  window.deferredPrompt = null;
  // Re-hide button
  butInstall.classList.toggle('hidden', true);
});

// Handler for 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
  // Gets rid of prompt
  window.deferredPrompt = null;
});
