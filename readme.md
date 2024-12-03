# Javascript Array Methods

## Introduction

This is the first of many ERR's to come ( Educational Rap Repositories ). The goal is to make some stupid yet educational content through rapping, that has dumb lyrics and even dumber coding examples.

To gain the full experience, turn the song on, and read through the lyrics in the readme here.

Please enjoy and thank you for listening🎉

## Contributing

In the spirit of code stuff, please feel free to make a contribution if you notice a bug. Currently we do not have a testing suite, but honestly F\*\*k it, we may at some point in the future because why not?

## The Song

😃 Please check out the song [here](https://soundcloud.com/higgzmadethebeatt/javascript-array-methods), I hope you like it 😃

## Lyrics Walkthrough

Alright, I don't know if I could kill a manatee with my bare hands
But I can definitely write some javascript

With Javascript Array Methods I can rule the world
I kow FP so I can steal your girl

- Map
- Filter
- Find
- Reduce

When she hear this song she be shaking her kaboose
Start with the array dot method like that

```ts
[...data].methodName();
```

You're girl like an argument so she gon' call back

```js
function yourGirl(something) {
  // custom logic here
  return something;
}

[...data].methodName(yourGirl);
```

Like to chain my code so I can keep it fly

```js
const word = "HIGGZ";
"hello"
  .split("")
  .map((_char, charIndex) => word[charIndex])
  .join("");
```

But I keep it flexible with the functions I apply

```js
const functionIApply = (_char, charIndex) => word[charIndex];

"hello"
  .split("")
  .map(functionIApply) // <- This is how I keep it flexible
  .join("");
```

.find finds the first thing returns true

```js
[
  { name: "H8terz", baller: false },
  { name: "HumbleGawwwd", baller: true },
].find((person) => person.baller)?.name; // HumbleGawwwd
```

.filter helps me get rid of all the poo

```js
["💩", "💩", "💩", "✅", "💩", "✅"].filter((emoji) => emoji !== "💩"); //[ "✅", "✅" ]
```

.map gets me all this gold from crap

```js
["💩", "💩", "💩"].map((_emoji) => "💵"); //[💵 💵 💵 ]
```

and .reduce too complex for this rap

```js
[116, 111, 32, 98, 101, 32, 99, 111, 110, 116, 105, 110, 117, 101, 100, 46, 46, 46]
   .reduce(
     (acc, el) => 
         acc + String.fromCharCode(el), 
     ""
   ) 
```

But that's not all if you know what you're doing
you can make your own functions you could be consuming

- [minBy](/custom-applicatives/minBy.ts)
- [maxBy](/custom-applicatives/maxBy.ts)
- sortBy
  - Just use `toSorted`
  - 🙏 ES2023
- [groupBy](/custom-applicatives/groupBy.ts)

You could make it chain-like,
if you could make a new pipe

```js
import { pipe, map } from "remeda";

let myName = "HIGGZ";

pipe(
  "hello",
  (s) => s.split(""),
  map.indexed((_char, charIndex) => myName[charIndex]),
  (s) => s.join("")
);
```

Oh whats that? You're worried bout types?
Turns out typescript lives up to the hype
gotta keep your code holy, program like a cleric
keep the types accurate by using a generic

```ts
type AwesomeString<T extends string> = `Humblegawwwd slaps but also, ${string}`;
```

push it pop it,like a [stack]()
get that cash, that's a fact

```ts
const stackOCash = new Stack(["💵", "💵"]);
stackOCash.push("💵");
stackOCash.push("💵");
```

You could pop unshift it too
That was a line, about a queue

```ts
const assignments = new Queue([
  "solar system",
  "name that fish",
  "pup-e-picker",
  "promises-assignment",
]);
assignments.pop();
assignments.pop();
assignments.pop();
```

every means that all is true
but you would know that if you came to my school

```ts
const myStudents = [
  { name: "Chance", knowsJS: true },
  { name: "Tyson", knowsJS: true },
  { name: "Liliana", knowsJS: true },
  { name: "Zak", knowsJS: true },
];

myStudents.every((student) => student.knowsJS); // true
```

We don't need to go rehearse,
I'm flipping bars like .reverse

```js
"srab"
  .split("")
  .reverse()
  .map((char) => char.toUpperCase())
  .join(); // "BARS"
```

I could rock with .sort.... no lean
even though its still mutative like wolverine

```js
const items = [
  { name: "lean", priority: 0 },
  { name: ".sort", priority: 5 },
  { name: "javascript", priority: 4 },
];

items.sort((a, b) => a.priority - b.priority);

console.log(items); // changed
```

Thank the good lord for ES2023
I use `toSorted` so I can keep my code clean

```js
const items2 = [
  { name: "lean", priority: 0 },
  { name: ".sort", priority: 5 },
  { name: "javascript", priority: 4 },
];

const sorted = items2.toSorted((a, b) => a.priority - b.priority);

console.log(items2); // unchanged
console.log(sorted); // changed
```

If you want to keep it nice
use `Array.slice`

```ts
function SomeComponent() {
  const [data, setData] = useState([]);
  return (
    <>
      <section>
        {data.map((item) => (
          <div className="item" key={item.id}>
            {item.name}
          </div>
        ))}
        <button
          onClick={() => {
            setData(data.slice(1));
          }}
        >
          Remove First Item
        </button>
      </section>
    </>
  );
}
```

but if we in react hope it ain't `.splice`

```ts
function SomeComponent2() {
  const [data, setData] = useState([]);
  return (
    <>
      <section>
        {data.map((item) => (
          <div className="item" key={item.id}>
            {item.name}
          </div>
        ))}
        <button
          onClick={() => {
            // This is bad because if we have a piece of state 99% of the time
            // we want to change it through a setter method that react
            // gives us
            data.splice(1);
          }}
        >
          Remove First Item
        </button>
      </section>
    </>
  );
}
```

We got array . at
to easy pick the back

```js
const data = [1, 2, 3];
const back = data.at(-1);
```

and we got `.join`
come together at last

```js
const brokenSentence = [
  "I",
  "absolutely",
  "love",
  "coding",
  "and",
  "teaching",
  "newbs",
  "to",
  "love",
  "coding",
  "as",
  "well",
];

const message = `${brokenSentence.join(
  " "
)!}`;
```

Uh yeah
Uh yeah
Uh yeah
Uh yeah

That's the array methods rap
