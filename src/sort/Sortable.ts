interface Sortable<T> {
  sort(data: T[], comperator: Comperator<T>): T[];
}

type Comperator<T> = (lhs: T, rhs: T) => number;
