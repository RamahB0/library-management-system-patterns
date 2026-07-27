// Acts as an abstract "interface". Concrete repositories must implement these methods.
export class Repository {
  async findById(id) { throw new Error("Not implemented: findById"); }
  async findAll() { throw new Error("Not implemented: findAll"); }
  async save(entity) { throw new Error("Not implemented: save"); }
  async delete(id) { throw new Error("Not implemented: delete"); }
}
