const { linkedList1, reverseLinkedList } = require('./../LeetCodeOtherSolutions/ReverseLinkedList.js');

const getTail = (node) => {
  return node.next === null ? node : getTail(node.next);
};

let result = getTail(linkedList1.head);

describe('Reverse linked list', () => {
  test('Should return reversed linked list', () => {
    expect(reverseLinkedList(linkedList1.head)).toBe(result);
  });

  test('Should return null when an empty list is passed in', () => {
    expect(reverseLinkedList(null)).toBe(null);
  });

  test('Should return same node when a single node with no "next" is passed in', () => {
    let node = {val: 5, next: null}
    expect(reverseLinkedList(node)).toBe(node);
  });
});
