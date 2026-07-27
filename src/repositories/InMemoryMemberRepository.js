import { Repository } from "../interfaces/Repository.js";

export class InMemoryMemberRepository extends Repository {
  constructor() {
    super();
    this.store = new Map();
  }

  async findById(id) { return this.store.get(id) ?? null; }
  async findAll() { return Array.from(this.store.values()); }
  async save(member) { this.store.set(member.id, member); return member; }
  async delete(id) { return this.store.delete(id); }
}
