import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.mainHeader}>What is TypeScript?</h2>
        <section id="section-1" className={styles.infoContainer}>
          <article className={styles.pageInfo}>
            <ul className={styles.text}> {/* Replaced <p> with <ul> for list items */}
              <li>
                TypeScript is a programming language that adds static typing to JavaScript. 
                It introduces a system where variables, functions, etc., can be assigned specific "types" (like number, string, boolean), allowing for the catching of potential errors early in the development process.
              </li>
              <li>
                Although JavaScript is a dynamic language, TypeScript uses syntax and extends it with type annotations. 
                This helps developers write code that is easier to maintain, as issues such as passing incorrect data types (or data that can be interpreted in other ways) into functions are caught early.
              </li>
            </ul>
          </article>
        </section>

        <h2 className={styles.mainHeader2}>How to write Typescript</h2>
        <section id="section-2" className={styles.infoContainer}>
          <article className={styles.pageInfo}>
              <ul className={styles.text}> 
                <li>
                TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system.
                For example, JavaScript provides language primitives like string and number, but it doesn't check that you've consistently assigned these. TypeScript does.
              </li>
             
              <li>
                Setting Up the EnvironmentInstallation
                Install Node.js (which includes npm): Node.js Download. Run the code below in the terminal
              </li>
              <pre className={styles.codeTag1}> 
              <code>
                {`npm install -g typescript`}
              </code>
            </pre>
            <li>
              Create a TypeScript File: Create a .ts file and write your code.
              Compile to JavaScript: Use tsc filename.ts to compile the TypeScript file into a JavaScript file.
            </li>
              <li>
              Basic Concepts
              Types: TypeScript supports various data types, including numbers, strings, booleans, arrays, objects, and more.
              Type Inference: In many cases, TypeScript can infer the type of a variable based on its initial value.
              ype Annotations: You can explicitly specify the type of a variable using type annotations.
              </li>
            </ul>
            <pre className={styles.codeTag2}> 
              <code>
                {`Example:

let message: string = "Hello, TypeScript!";
let age: number = 30;
let isStudent: boolean = true;

function greet(name: string): void {
console.log("Hello, " + name + "!");
}

greet("Alice");`}
              </code> 
            </pre>
              <ul>
                <li>
                Optional and Default Parameters:
                </li>
              </ul>
              <pre className={styles.codeTag2}> 
              <code>
                {`function multiply(a: number, b: number = 1): number {
  return a * b;
}`}
              </code> 
            </pre>
          </article>
        </section>

        <h2 className={styles.mainHeader3}>Expanding on Typescriptt</h2>
        <section id="section-3" className={styles.infoContainer}>
          <article className={styles.pageInfo}>
              <ul className={styles.text}> 
                <li>
                  How do we expand our understanding?
                </li>
                <li>
                  One useful feature of typescript is the ability to create objects called "interfaces".
                  Interfaces in TypeScript define the contract that an object must adhere to. They specify the properties and their types that an object should have, without providing an implementation. This allows for better code organization, type safety, and reusability.
                </li>
              </ul>
                <pre className={styles.codeTag2}> 
                  <code>
                    {`TypeScript:

    interface Person {
        name: string;
        age: number;
        greet(): void;
    }

    let john: Person = {
        name: "John Doe",
        age: 30,
        greet() {
        console.log("Hello, my name is " + this.name);
        }
    };`}
                  </code> 
                </pre>
              <ul className={styles.text}>
                <li>
                  In this example:
                </li>
                <li>
                  Person is an interface that defines the properties and method that a person object should have.
                  john is an object that uses the Person interface, resulring in it have required properties and method that can be used multiple times and updated.
                </li>
              </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
