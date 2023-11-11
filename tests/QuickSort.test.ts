import { QuickSort } from "../src/sort/QuickSort";

test("Sort_EmptyItem_ReturnEmpty", () => {
  const qs = new QuickSort<number>();
  const arr = [];
  const comperator = (lhs: number, rhs: number): number => rhs - lhs;

  const actual = qs.sort(arr, comperator);
  expect(actual).toEqual([]);
});

test("Sort_SingleItem_ReturnIt", () => {
  const qs = new QuickSort<number>();
  const arr = [1];
  const comperator = (lhs: number, rhs: number): number => rhs - lhs;

  const actual = qs.sort(arr, comperator);
  expect(actual).toEqual([1]);
});

test("Sort_MultipleItemByDescendingOrder_ReturnOrdered", () => {
  const qs = new QuickSort<number>();
  const arr = [10, 0, 5, 2, 4, -1, 11];
  const comperator = (lhs: number, rhs: number): number => rhs - lhs;

  const actual = qs.sort(arr, comperator);
  expect(actual).toEqual([11, 10, 5, 4, 2, 0, -1]);
});

test("Sort_MultipleItemByAscendingOrder_ReturnOrdered", () => {
  const qs = new QuickSort<number>();
  const arr = [5, 4, 3, 2, 1, 0];
  const comperator = (lhs: number, rhs: number): number => lhs - rhs;

  const actual = qs.sort(arr, comperator);
  expect(actual).toEqual([0, 1, 2, 3, 4, 5]);
});
