import { MergeSort } from "../src/sort/MergeSort";

test("Sort_EmptyArray_ReturnEmpty", () => {
  const mergeSort = new MergeSort<number>();
  const arr = [] as Array<number>;
  const comperator = (lhs: number, rhs: number) => rhs - lhs;

  const actual = mergeSort.sort(arr, comperator);

  expect(actual).toEqual([]);
});

test("Sort_SingleItem_ReturnIt", () => {
  const mergeSort = new MergeSort<number>();
  const arr = [0] as Array<number>;
  const comperator = (lhs: number, rhs: number) => rhs - lhs;

  const actual = mergeSort.sort(arr, comperator);

  expect(actual).toEqual([0]);
});

test("Sort_ThreeItmes_ReturnOrderedList", () => {
  const mergeSort = new MergeSort<number>();
  const arr = [0, 10, 100] as Array<number>;
  const comperator = (lhs: number, rhs: number) => rhs - lhs;

  const actual = mergeSort.sort(arr, comperator);

  expect(actual).toEqual([100, 10, 0]);
});

test("Sort_TenItmes_ReturnOrderedList", () => {
  const mergeSort = new MergeSort<number>();
  const arr = [0, 10, 100, 2, 5, 35, 79, 101, -2, -10] as Array<number>;
  const comperator = (lhs: number, rhs: number) => rhs - lhs;

  const actual = mergeSort.sort(arr, comperator);

  expect(actual).toEqual([101, 100, 79, 35, 10, 5, 2, 0, -2, -10]);
});
