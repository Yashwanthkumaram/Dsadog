import React from 'react';
import './cpluspluscheatsheet.css';  // Custom CSS file
import CodeSnippet from '../components/CodeSnippet';

const CPlusPlusCheatSheet = () => {
  const cppBasics = `
#include <iostream>
using namespace std;

// Main Function
int main() {
    cout << "Hello, World!" << endl;

    // Variables
    int age = 20;
    float height = 5.9;
    char grade = 'A';

    // Conditional Statement
    if (age > 18) {
        cout << "You are an adult." << endl;
    }

    // Loop
    for (int i = 0; i < 5; i++) {
        cout << "Count: " << i << endl;
    }

    return 0;
}
`;

  const advancedCpp = `
// Functions
int add(int a, int b) {
    return a + b;
}

// Classes and Objects
class Person {
public:
    string name;
    int age;

    void introduce() {
        cout << "Hi, I am " << name << ", and I am " << age << " years old." << endl;
    }
};

int main() {
    Person p1;
    p1.name = "John";
    p1.age = 25;
    p1.introduce();

    // Pointers
    int x = 10;
    int* ptr = &x;
    cout << "Address of x: " << ptr << ", Value: " << *ptr << endl;

    return 0;
}
`;

  return (
    <div className="container">
      <header className="header">
        <h1>C++ Cheat Sheet</h1>
        <p className="author">Yashwanth Kumar A M, Dec 7, 2024</p>
      </header>

      <section className="introduction">
        <h2>Introduction to C++</h2>
        <p>
          C++ is a powerful, high-performance language commonly used in system programming, game development, and competitive coding.
        </p>
      </section>

      <section className="cpp-section">
        <h2>C++ Basics</h2>
        <CodeSnippet language="cpp" code={cppBasics} />
      </section>

      <section className="cpp-section">
        <h2>Advanced C++ Concepts</h2>
        <CodeSnippet language="cpp" code={advancedCpp} />
      </section>

      <section>
        <h2>Recommended Practice Problems</h2>
        <h2><a href="https://www.hackerrank.com/domains/cpp">HackerRank C++ Practice</a></h2>
        <h2><a href="https://leetcode.com/problemset/all/">LeetCode C++ Problems</a></h2>
      </section>
    </div>
  );
};

export default CPlusPlusCheatSheet;
