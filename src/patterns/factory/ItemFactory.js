import { Book } from "../../models/Book.js";
import { generateId } from "../../utils/IdGenerator.js";

// Factory encapsulates creation logic so callers never call `new Book(...)` directly,
// making it easy to add DVD, Magazine, EBook, etc. without touching client code.
export class ItemFactory {
  static create(type, data) {
    switch (type) {
      case "book":
        return new Book({ id: generateId("book"), ...data });
      // Extend here: case "dvd": return new DVD(...);
      default:
        throw new Error(`Unknown catalog item type: ${type}`);
    }
  }
}
