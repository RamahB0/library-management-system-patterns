// Each strategy implements the same interface: matches(item, query)
export class TitleSearchStrategy {
  matches(item, query) {
    return item.title?.toLowerCase().includes(query.toLowerCase());
  }
}

export class AuthorSearchStrategy {
  matches(item, query) {
    return item.author?.toLowerCase().includes(query.toLowerCase());
  }
}

export class IsbnSearchStrategy {
  matches(item, query) {
    return item.isbn === query;
  }
}

// Context that delegates to whichever strategy is injected
export class SearchContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  search(items, query) {
    return items.filter((item) => this.strategy.matches(item, query));
  }
}
