# Mahan Readme Typescript Guide - Part 01

in this readme, I'll write an guide for typescript notes, tips and some examples for syntax .

We have a list of this guide content:

- What is `Typescript`

- `Interface` in _Typescript_

- `Type` concept in _Typescript_

- concept of `Import / Export` in **ESM**

- some notes about `Object` in **_Javascript_**

- about `Enum` in **Javascript** and **Typescript**

- an note about `content of request`

- a most uses ports for API

- `Port` concept and meaning

---

## What is `Typescript` ?

**_typescript_** is an _high-level programming language_ which uses **Javascript** .

### What is Diffrent of `Typescript` and `Javascript` ?

in **javascript** you don't have to _specify_ `types` of the variables or function and ...

but in _typescript_ you should to specify types of **_everything_** you created in you'r app .

### How does Typescript works ?

in short, Typescript at the _end_ is the same as _Javascript_

Typescript have a `compiler` that sets at the **start** of the project and this compiler file have **all of the setting** for typescript compiling.

this compiler, will **compile `typescript` code to `javascript` code**.

but typescript have some **features** that **javascript doesn't have it**; for example: `interface` or `type`

in general, typescript is the same of javascript with some features that make diffrent between this two programming language.

---

## What is `Interface` in _Typescript_ ?

this feature is like an `class` in javascript, but have some diffrents.

in **interface** we should to use `interface` keyword for creating an interface.

### Does Interface name have Limits ?

in short, **No**.

we haven't any limits for naming interfaces but in standard codes, we use `I` letter before interface name.
for example:

> IPosts

so, we should write an `I` and `interface name`, but **first letter** of _interface name_ should be **_Uppercase_**.

## How to Write an `Interface` ?

for write and create an interface you should to use like this:

```typescript
interface IPosts {
  title: string;
  content: string;
  description: string;
  create_date: Date;
  author: string;
}
```

this code creates an interface with name of IPosts that have five values: title, content, description, create date and author name.

each value have specified value like `string` and `Date` that can understand meaning of this types from themself words.

## `extends` feature of interfaces

in interfaces, we have same feature from javascript classes.

we can `extends` **two interface into each one**.

in another say, we can **insert** values of the one interface to second interface and this secondary interface have `inheritance` feature from first interface.

for example:

```typescript
interface ICarInfo {
  name: string;
  create_date: Date;
  brand: string;
  color: string;
  engine: string;
}

interface ICarProduct extends ICarInfo {
  price: number;
  seller: string;
  auto_gallery: string;
}
```

in this example we have an `interface` with name of `ICarInfo` that have five values: name, create*date, brand, color, engine and we have another interface with name of ICarProduct that `extends` **ICarInfo** interface.
it means, `ICarProduct` have \*\*\_all of the ICarInfo values*\*\* with `ICarProduct` itself values.

## Does interfaces can take arrgument ?

in javascript we can insert arguments into `()` in functions and classes, but in interfaces for an interface in argument we use `<argumentName>`.  
for example:

```typescript
interface IProduct<T> {
  title: string;
  category: T;
}
```

in this example, we **should** to pass `T` value in argument to IProduct and category value is `T` value.
argument nums haven't limit and you can have second argument like this:

```typescript
interface IProduct<A, B> {
  firstName: A;
  lastName: B;
}
```

---

## `Type` in Typescript and Type concept ?

in typescript, we can create many custom types that have most application in app.
type it's alike interfaces but have some diffrents like:

- Extending
- Union and primitive types
- Declaration Merging

this is diffrents between interface and Types .

### What is Extending diffrent in Types ?

in Types, we dont have any inheritance or extends or extending action, but this in interface it's a Important feature .
types just uses another and types don't have any inheritance .

for example:

```typescript
// interfaces

interface IOne {
  name: string;
}

interface ITwo extends IOne {
  age: number;
}

// |-> now ITwo have name and age

// Types

type TOne = {
  name: string;
};

// |-> but in this type we can extends any other Type .
```

### How to create an `Type` in typescript ?

if you see previous title example you should see an type syntax like:

```typescript
type TMessage = {
  message: string;
};
```

if you see the example, you should understand we use `type` keyword for Types and after keyword we should write name for Type .
Types alike interfaces doesn't have any limits for name but developers sets some standards for them codes.
for Types we should wrtie a name like this:

> TExample

we should write an `T` that means this is a Type and after that we can write a name with Big first letter .

### How to use arguments in Types ?

using arguments in Types it's like interfaces and we should use `<>` like: `<A>`. for example:

```typescript
type TPost<Category> = {
  title: string;
  author: string;
  category: string;
};
```

### Union and Primitive Types in `Types`

types have important feature Union and Primitive Types.

in general, types have type or a string value;

in Union, we can set a two and more types for a `Type`. like this example:

```typescript
type TAuth = string | number;

// "   |   "  this means "or" in typescript
```

or set two or more string value for a `Type`. like this example:

```typescript
type TStatus = "active" | "inactive" | "pending";
```

this is two ways that can valuation a `Type` in Typescript.

### Declaration Merging in Types

I'll learn this with example and this section don't need description.

example:

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = { name: "Mahan", age: 18 }; // ✅ it works
```

but if we use types in this example :

```typescript
type User = { name: string };
type User = { age: number }; // ❌ Error: Duplicate identifier
```

and this is last diffrent of types with interfaces.

---

## What is `Export` and `Import` ?

in ESM type of javascript project, we should create each section as module.

modules are like puzzle section and the puzzle board is the application;
each module should fill a feature or section of the application.

when we use modules, we haven't any connection between main file and modules.

for make an connection between these files, we should to `export` the module and `import` that in the main file.

in this example we have a main file and a module that we want to use module into the main file:

```javascript
//  Javascript Code
// Module File

export function Hello(text) {
  console.log(text);
}
```

and this is the main file :

```javascript
// Main File

import { Hello } from "filePath";

Hello("Hello World !");
```

this mini app will show a message that created in module and used in main file that at the end, shows the 'Hello World !'

so, when we want to use an module in another place, we should `export` it and then we should `import` it in the module-user file.

but we have to `export`, export and export default.

this two exports haven't any diffrent at the general application and all of these exports will export you'r module but we should know when use it each one of these exports.

- when we want to export one thing in module -> we should to use export default
- when we want to export two or more things in module -> we should to use export

but, maybe you have question, "why ?";

when we have one variable, function or anything that we want export it, this is default thing that we have in our module, so we should to use export default:

```javascript
// Javascript Code

function Sum(a, b) {
  console.log(a + b);
}

export default Sum;
```

but when we have two or more things that we want to export, this is not default, so we should use export for exporting.

```javascript
function Sum(a, b) {
  console.log(a + b);
}

function Division(a, b) {
  console.log(a / b);
}

export { Sum, Division };
```

and when you exported you'r module, it's time to use it in main file !

we have two ways to import module, this is for when we used export and export default.

when we want to import an module that have export default into itself, we should use import like this:

```javascript
import Test from "testPath";
```

this will be works, because we have one export and we want it.

but if we have two or more exports in module we should to use export like this:

```javascript
import { Test } from "testPath";
```

we should to use this way, because we just want this export and because we don't know module exports number.

(Note: in `Types`, we haven't export default and we can't use export default feature for Types)

---

## What is Enum and why we use it ?

some times we want to give title to a state or status but we didn't want to valuation the status or state. for example, in login and AUTH system we use enums for determine roles like Admin, Editor and User and this is Enum features that enums haven't value and it's just title.
Of Course, any technology like PostgreSQL have a way to add indexes to Enums but this indexes it's not a Enum value.

for better mindset, we have example from Enum:

```typescript
// Typescript Code

enum ROLE {
  ADMIN,
  EDITOR,
  USER,
}
```

this is an enum that have many applications in programming, especially in programming with `Typescript` .

## Does Javascript have enum ?

javascript didn't have a built-in Enum feature but we can create an simulation of enum in javascript like this:

```javascript
const ROLE = {
  admin: "admin",
  editor: "editor",
  user: "user",
};
```

so we haven't any thing in javascript that give Enum feature but we can to create an simulation from enum in javascript with an object.

---

## What is Port ?

if we think that a server is an building, every house have an number that this number is house ID.
so everything in server have address that we say that port.

for example this port:

> localhost:3000 or localhost:80

this ports is for API's. this is an standard and we haven't any limit in this case, but if we want an standard code we should to comply this roles.

or in another example, React App default port is 5271 or PostgreSQL default port is 5432. so anything in server have a address that Each port is dedicated to a specific task.
