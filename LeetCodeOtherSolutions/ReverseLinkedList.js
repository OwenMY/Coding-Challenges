/*
Refer to https://github.com/OwenMY/LeetCode/tree/master/206-reverse-linked-list for prompt. This is an attempt to solve this problem iteratively.
*/
class LinkedList {
  constructor(values) {
    this.head = linkNodes(values);
  };
};

class ListNode {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

const linkNodes = (values) => {
  let topNode = new ListNode(values[0]);
  let currentNode = topNode;

  for (let i = 1; i < values.length; i++) {
    let newNode = new ListNode(values[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return topNode;
};

const reverseLinkedList = (head) => {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  let result = null;
  let currentNode = head;
  let previousNode = null;
  let nextNode = null;

  while (result === null) {
    let endOfList = currentNode.next === null ? true : false;
    nextNode = currentNode.next;
    currentNode.next =  previousNode;
    previousNode = currentNode;

    if (endOfList) {
      result = currentNode;
    } else {
      currentNode = nextNode;
    }
  }

  return result;
};

let linkedList1 = new LinkedList([1, 2, 3, 4, 5]);

module.exports = {
  linkedList1,
  reverseLinkedList
};
