import { Repository } from "../interfaces/Repository.js";

export class InMemoryBookRepository extends Repository {
  constructor() {
    super();
    this.store = new Map();
  }

  async findById(id) { return this.store.get(id) ?? null; }
  async findAll() { return Array.from(this.store.values()); }
  async save(book) { this.store.set(book.id, book); return book; }
  async delete(id) { return this.store.delete(id); }
}
