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
