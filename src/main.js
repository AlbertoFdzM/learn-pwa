/* globals Page Arrivals ko */
window.addEventListener('online', function (ev) {
  // re-sync data with server
  console.log('You are online')
  Page.hideOfflineWarning()
  Arrivals.loadData()
}, false)

window.addEventListener('offline', function (ev) {
  // queue up events for server
  console.log('You are offline')
  Page.showOfflineWarning()
}, false)

// check if the user is connected
if (navigator.onLine) {
  Arrivals.loadData()
} else {
  // show offline message
  Page.showOfflineWarning()
}

// set knockout view model bindings
ko.applyBindings(Page.vm)
