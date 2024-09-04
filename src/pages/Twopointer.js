import React from 'react';
import './fastandslowpointer.css'; // Import a CSS file for styling
import gif from './abc.gif';
import CodeSnippet from '../components/CodeSnippet';







const Fastandslowpointers = () => {

  
  const shit =`#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) {
        data = val;
        next = nullptr;
    }
};

bool detectCycle(Node* head) {
    if (head == nullptr || head->next == nullptr) return false;

    Node* slow = head;
    Node* fast = head;

    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;

        if (slow == fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = head->next; // Creating a cycle for testing

    if (detectCycle(head)) {
        cout << "Cycle detected" << endl;
    } else {
        cout << "No cycle detected" << endl;
    }

    return 0;
}
`


return (
  <div className="container">
    <header className="header">
      <h1>Fast and Slow Pointers</h1>
      <p className="author">Yashwanth Kumar A M, Sep 4, 2024</p>
    </header>
    <section className="introduction">
      <h2>Cycles in Linked Lists</h2>
      <p>
        Today, we will learn about the Fast & Slow Pointers pattern, which is useful in detecting cycles in a linked list.
      </p>
    </section>
    <section className="network-definition">
      <h2>What Is the Idea Here?</h2>
      <p>
        Imagine a circular track. If a hare and a tortoise race on this track, at some point, the hare and the tortoise will meet.
      </p>
      <p>
        If the track were a straight line, they would never meet. If they <strong>meet again</strong>, then the track (linked list) has a <strong>cycle</strong> and is circular. Otherwise, the track is a straight line (the list has no cycle).
      </p>
    </section>
    <section className="diagram">
      <img src={gif} alt="Unable to load image" />
    </section>
    <section className="code">
    <h2>Implementation in C</h2>
      <CodeSnippet language={"c"} code={shit}></CodeSnippet>
    </section>

    <section>
      <h2>LeetCode questions on this </h2>
      <h2><a href='https://leetcode.com/problems/linked-list-cycle/description/'> 141. Linked List Cycle </a> </h2>
      <h2><a href='https://leetcode.com/problems/linked-list-cycle-ii/'> 142. Linked List Cycle II </a></h2>
      <h2><a href='https://leetcode.com/problems/happy-number/description/'> 202. Happy Number</a></h2>
      <h2><a href='https://leetcode.com/problems/middle-of-the-linked-list/description/'>876. Middle of the Linked List</a></h2>
    </section>
  </div>
);
};
export default Fastandslowpointers;
