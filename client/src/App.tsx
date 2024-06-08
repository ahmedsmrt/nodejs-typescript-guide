import { useState } from 'react'
import './assets/css/output.css'


let name: string;
//  the | is the union operator
let age: number | string;
let isStudent: boolean = true;
let hobbies: string[];
let role: [number, string];


// Ways to define a func
// When defining the return type never returns nothing while void returns null;
let printName: (name: string) => never;

// Reccomended instead of using the any type
let personName: unknown;

// Two types of aliases to define objects type & interface
// Interface makes it easier to combine type guards from different interfaces
interface User extends Person {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


type Users = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Person {
  name: string;
  age?: number;
}


// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "ahmed",
//   age: 32
// }

// let lotsOfPeople: Person[];

function App() {
  return (
    <>
      <main className="flex flex-col justify-center w-full h-full items-center mx-auto">
        Hello {name}!!
      </main>
    </>
  )
}

export default App
