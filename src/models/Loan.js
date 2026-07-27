export class Loan {
  constructor({ id, itemId, memberId, borrowedAt, dueAt }) {
    this.id = id;
    this.itemId = itemId;
    this.memberId = memberId;
    this.borrowedAt = borrowedAt;
    this.dueAt = dueAt;
    this.returnedAt = null;
  }
}
