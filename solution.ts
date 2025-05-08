function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    const formatted = input.toUpperCase();
    console.log(formatted);
    return formatted;
  }
  const formatted = input.toLowerCase();
  console.log(formatted);
  return formatted;
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filterByRating = items.filter((item) => item.rating >= 4);
  console.log(filterByRating);
  return filterByRating;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const concat = arrays.flat();
  console.log(concat);
  return concat;
}

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

function processValue(value: string | number): number {
  if (typeof value === "string") {
    const stringLength = value.length;
    console.log(stringLength);
    return stringLength;
  } else {
    const doubleNum = value * 2;
    console.log(doubleNum);
    return doubleNum;
  }
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    console.log(null);
    return null;
  }
  const mostExpensive = products.reduce((max, item) =>
    item.price > max.price ? item : max
  );
  console.log(mostExpensive);
  return mostExpensive;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  const dayType =
    day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  console.log(dayType);
  return dayType;
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Error: Negative number is not allowed");
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * n), 1000);
  });
}
