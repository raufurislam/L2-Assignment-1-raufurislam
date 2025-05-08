/**
 * Problem 1:
Description: Create a function that takes a string and an optional boolean.

If the boolean is true or not provided, return the string in uppercase.
If the boolean is false, return the string in lowercase.
Function Signature:

function formatString(input: string, toUpper?: boolean): string
Example:

formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"
 */

function formatString(input: string, toUpper: boolean = true): string {
  const formatString = toUpper ? input.toUpperCase() : input.toLowerCase();
  console.log(formatString);
  return formatString;
}
// console.log(formatString("hello", false));

/**
 * Problem 2:
Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

Function Signature:

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]
Example:

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

filterByRating(books); 
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
 */

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filterByRating = items.filter((item) => item.rating >= 4);
  console.log(filterByRating);
  return filterByRating;
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// filterByRating(books);

/**
 * Problem 3:
Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

Function Signature:

function concatenateArrays<T>(...arrays: T[][]): T[]
Example:

concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
 */

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const concat = arrays.flat();
  console.log(concat);
  return concat;
}
// concatenateArrays(["a", "b"], ["c"]);
// concatenateArrays([1, 2], [3, 4], [5]);

/**
 * Problem 4:
Description:

Create a Vehicle class with private make and year properties and a getInfo() method.
Create a Car class extending Vehicle, adding a private model property and a getModel() method.
Example:

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
 */

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    const getInfo = `Make: ${this.make}, Year: ${this.year}`;
    console.log(getInfo);
    return getInfo;
  }
}

class Car extends Vehicle {
  model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    const getModel = `Model: ${this.model}`;
    console.log(getModel);
    return getModel;
  }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();
// myCar.getModel();

/**
 * Problem 5:
Description: Write a function that takes a string | number and returns:

The length if it's a string
The number multiplied by 2 if it's a number
Function Signature:

function processValue(value: string | number): number
Example:

processValue("hello"); // Output: 5
processValue(10);      // Output: 20
 */

function processValue(value: string | number): number;

/**
 * Problem 6:
Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

Interface & Function Signature:

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null
Example:

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products);  
// Output: { name: "Bag", price: 50 }

 */

/**
 * Problem 7:
Description:

Define an enum Day for the days of the week.
Create a function that returns "Weekday" or "Weekend" based on the input day.
Enum & Function Signature:

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string
Example:

getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"
 */

/**
 * Problem 8:
Description: Create an async function that:

Returns the square of a number after 1 second
Rejects if the number is negative
Function Signature:

async function squareAsync(n: number): Promise<number>
Example:

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

 */

/**
 *
 */
