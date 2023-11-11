export class QuickSort<T> implements Sortable<T> {
  private comperator: Comperator<T>;
  sort(arr: T[], comperator: Comperator<T>): T[] {
    this.comperator = comperator;

    this.quickSort(arr, 0, arr.length);

    return arr;
  }

  private partition(arr: T[], low: number, high: number) {
    let pivot = arr[low];
    let leftWall = low;
    let lastPivotIndex = low;

    for (let i = low + 1; i < high; i++) {
      if (this.comperator(arr[i], pivot) < 0) {
        [arr[i], arr[leftWall]] = [arr[leftWall], arr[i]];

        /**
         * 피봇의 인덱스를 추적해야 마지막에 피봇과 레프트 월을 스왑할 수 있다.
         */
        if (lastPivotIndex === leftWall) {
          lastPivotIndex = i;
        }
        ++leftWall;
      }
    }

    [arr[lastPivotIndex], arr[leftWall]] = [arr[leftWall], arr[lastPivotIndex]];

    return leftWall;
  }

  private quickSort(arr: T[], low: number, high: number) {
    if (low >= high) {
      return;
    }

    const pivotIndex = this.partition(arr, low, high);
    this.quickSort(arr, low, pivotIndex);
    this.quickSort(arr, pivotIndex + 1, high);
  }
}
