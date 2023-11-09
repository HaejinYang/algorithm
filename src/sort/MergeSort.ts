export class MergeSort<T> implements Sortable<T> {
  private comperator: Comperator<T>;

  sort(data: T[], comperator: Comperator<T>): T[] {
    this.comperator = comperator;
    const mid = Math.floor(data.length / 2);

    const lhs = this.divide(data.slice(0, mid));
    const rhs = this.divide(data.slice(mid, data.length));

    return this.merge(lhs, rhs);
  }

  private divide(data: T[]): T[] {
    if (data.length <= 1) {
      return data;
    }

    const mid = Math.floor(data.length / 2);
    const lhs = this.divide(data.slice(0, mid));
    const rhs = this.divide(data.slice(mid, data.length));

    return this.merge(lhs, rhs);
  }

  private merge(lhs: T[], rhs: T[]): T[] {
    let i = 0;
    let j = 0;
    let res = [];
    while (i < lhs.length && j < rhs.length) {
      const result = this.comperator(lhs[i], rhs[j]);
      if (result > 0) {
        res.push(rhs[j++]);
      } else {
        res.push(lhs[i++]);
      }
    }

    res.push(...rhs.slice(j, rhs.length));
    res.push(...lhs.slice(i, lhs.length));

    return res;
  }
}
