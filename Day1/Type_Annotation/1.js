"use strict";
// ## **1. Basic Types**
// ### **Primitive Types**
// These are the basic types in TypeScript, similar to JavaScript.
// | Type      | Description                                | Example                      |
// |-----------|--------------------------------------------|------------------------------|
// | `string`  | Represents textual data                   | `let name: string = "Alice";`|
// | `number`  | Represents numeric values                 | `let age: number = 25;`      |
// | `boolean` | Represents true/false values              | `let isAdmin: boolean = true;`|
// | `null`    | Represents the absence of a value         | `let empty: null = null;`    |
// | `undefined` | Represents an uninitialized value       | `let u: undefined = undefined;`|
// | `symbol`  | Represents unique values (ES6 feature)    | `let id: symbol = Symbol();` |
// | `bigint`  | Represents very large integers (ES2020)   | `let big: bigint = 123n;`    |
// ---
// ## **2. Special Types**
// ### **`any`**
// Disables type checking and allows any value.
// ```typescript
// let value: any = "Hello";
// value = 42; // No error
// ```
// ### **`unknown`**
// A safer alternative to `any`. You must perform type checks before using it.
// ```typescript
// let input: unknown = "Hello";
// if (typeof input === "string") {
//   console.log(input.toUpperCase()); // Safe
// }
// ```
// ### **`void`**
// Represents the absence of a return value, often used for functions.
// ```typescript
// function logMessage(message: string): void {
//   console.log(message);
// }
// ```
// ### **`never`**
// Represents a value that never occurs, such as in functions that throw errors or never terminate.
// ```typescript
// function throwError(message: string): never {
//   throw new Error(message);
// }
// ```
// ---
// ## **3. Object Types**
// ### **Object**
// Represents non-primitive types (objects, arrays, functions).
// ```typescript
// let obj: object = { name: "Alice", age: 25 };
// ```
// ### **Array**
// Specify arrays using `type[]` or `Array<type>`.
// ```typescript
// let numbers: number[] = [1, 2, 3];
// let names: Array<string> = ["Alice", "Bob"];
// ```
// ### **Tuple**
// Represents a fixed-length array with specific types.
// ```typescript
// let tuple: [string, number] = ["Alice", 25];
// ```
// ---
// ## **4. Union and Intersection Types**
// ### **Union (`|`)**
// A variable can have one of several types.
// ```typescript
// let id: number | string = 101; // Can be a number or a string
// ```
// ### **Intersection (`&`)**
// Combines multiple types into one.
// ```typescript
// type Address = { city: string };
// type Contact = { email: string };
// type User = Address & Contact;
// let user: User = { city: "New York", email: "user@example.com" };
// ```
// ---
// ## **5. Literal Types**
// Allows specific values as types.
// ```typescript
// let direction: "up" | "down" | "left" | "right" = "up";
// ```
// ---
// ## **6. Enums**
// Define a set of named constants.
// ### Numeric Enum:
// ```typescript
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }
// let dir: Direction = Direction.Up;
// ```
// ### String Enum:
// ```typescript
// enum Status {
//   Success = "SUCCESS",
//   Error = "ERROR",
// }
// let status: Status = Status.Success;
// ```
// ---
// ## **7. Type Aliases**
// Create custom types with the `type` keyword.
// ```typescript
// type Point = { x: number; y: number };
// let point: Point = { x: 10, y: 20 };
// ```
// ---
// ## **8. Interfaces**
// Define the shape of an object.
// ```typescript
// interface User {
//   name: string;
//   age: number;
// }
// let user: User = { name: "Alice", age: 25 };
// ```
// ---
// ## **9. Function Types**
// ### Function Parameters and Return Types:
// ```typescript
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
// ```
// ### Anonymous Function:
// ```typescript
// let add: (a: number, b: number) => number = (x, y) => x + y;
// ```
// ---
// ## **10. Advanced Types**
// ### **Type Assertions**
// Override TypeScript's inferred type.
// ```typescript
// let value: any = "Hello, TypeScript!";
// let strLength: number = (value as string).length;
// ```
// ### **Nullable Types**
// Use `strictNullChecks` to prevent assigning `null` or `undefined` unless explicitly stated.
// ```typescript
// let name: string | null = null;
// ```
// ### **Keyof**
// Get the keys of a type as a union of strings.
// ```typescript
// type User = { id: number; name: string };
// type UserKeys = keyof User; // "id" | "name"
// ```
// ### **Mapped Types**
// Create types dynamically based on another type.
// ```typescript
// type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
// ```
// ---
// ## **11. Generics**
// Write reusable components with generic types.
// ```typescript
// function identity<T>(value: T): T {
//   return value;
// }
// let num = identity<number>(42);
// let str = identity<string>("Hello");
// ```
// ---
// TypeScript's type system is flexible and powerful. Would you like to dive deeper into any specific type or feature?
// | **Feature**             | **`any`**                               | **`unknown`**                          |
// |--------------------------|-----------------------------------------|-----------------------------------------|
// | **Purpose**              | Represents a value of any type without restrictions. | Represents a value of any type but enforces safety. |
// | **Type Safety**          | No type safety (bypasses type checking).| Ensures type safety by requiring type checks. |
// | **Operations Allowed**   | Any operation can be performed.         | Requires type narrowing before operations. |
// | **Compile-Time Errors**  | No errors, even for invalid operations. | Errors if used without type narrowing.  |
// | **Default Behavior**     | Permissive, like dynamic typing in JavaScript. | Restrictive, encourages safer coding practices. |
// | **Use Case**             | Quick workarounds, when type is not important. | Safely handling unknown or dynamic data. |
// | **Example**              | ```ts\nlet value: any = "Hello";\nvalue = 42;\nvalue.toUpperCase(); // No error``` | ```ts\nlet value: unknown = "Hello";\nvalue = 42;\nif (typeof value === "string") {\n  console.log(value.toUpperCase()); // Safe\n}``` |
// | **Preferred**            | Avoid unless absolutely necessary.      | Use when the type is unknown but needs validation. |
