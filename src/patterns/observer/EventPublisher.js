// Generic publisher any part of the system can subscribe to.
export class EventPublisher {
  constructor() {
    this.observers = new Map(); // eventName -> Set of observer objects
  }

  subscribe(eventName, observer) {
    if (!this.observers.has(eventName)) this.observers.set(eventName, new Set());
    this.observers.get(eventName).add(observer);
    return () => this.observers.get(eventName).delete(observer); // unsubscribe fn
  }

  publish(eventName, payload) {
    const subs = this.observers.get(eventName);
    if (!subs) return;
    for (const observer of subs) observer.notify(eventName, payload);
  }
}
