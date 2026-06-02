const retries: number = 5;

const user = { email: "john@test.com" , password: "test" };
console.log(user.password);


function getTimeout(seconds: number): string {
  return seconds * 1000;  // Hint: look at the return type
}

function getTimeout1(seconds: number): number {
  return seconds * 1000;  // решение 1 
}

function getTimeout2(seconds: number): string {
  return String(seconds * 1000);  // решение 2
}

const config = { baseURL: "https://staging.example.com" };
console.log(config.baseUrl);  // Hint: case matters

const config1 = { baseURL: "https://staging.example.com" };
console.log(config.baseURL);  // решение



function printName(name: string) {
  console.log(name);
}
const userName: string | undefined = undefined;
printName(userName);  // Hint: what if userName is undefined?


function printName1(name: string) {
  console.log(name);
}
const userName1: string | undefined = undefined;
if (userName) {
 printName(userName); 
} 
// string | undefined означает что переменная может быть либо строкой, либо вообще ничем 
// (undefined = отсутствие значения).
// Представь это как коробку — она может содержать строку, а может быть пустой. 
// Функция printName ожидает строку, но ты передаёшь ей коробку которая может быть пустой. 
// TypeScript говорит: "я не могу гарантировать что там есть строка".
// Поэтому нужна проверка if (userName) — это как заглянуть в коробку перед передачей: 
// "если там что-то есть — передаю, если пусто — пропускаю". 
// После этой проверки TypeScript уже знает что userName точно строка и разрешает передать в функцию.


type Product = {
    name: string;
    price: number;
    inStock: boolean;
}

const product1: Product = {
    name: "test1",
    price: 3, 
    inStock: true,
}

const product2: Product = {
   name: "test2",
    price: 4,
    inStock: false,
}

function formatPrice(price : number): string {
    return `$${price}`;
} // $ - перваяб как знак дол 
// ${price} - это как вставка переменной 