// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor(){
    this.registeredEvents = {}
  }

  // Register an event handler
  on(eventName, callback) {
    if(this.registeredEvents[eventName]) this.registeredEvents[eventName].push(callback)
    else this.registeredEvents[eventName] = [callback]
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(this.registeredEvents[eventName]) this.registeredEvents[eventName]
    .forEach(callback => {
      callback()
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.registeredEvents[eventName]
  }
}

module.exports = Events;
