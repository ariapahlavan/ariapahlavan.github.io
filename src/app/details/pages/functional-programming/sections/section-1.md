# Why functional programming?
## Then:
We are mostly comfortable working with single-threaded application
because, not until recently, applications used to be simple and 
only had to process a low amount data.

<div class="svg-container">
  <img style="max-width: 600px" src="/assets/articles/images/og-ford-assembly-line.png" alt="original Ford assembly line">
  <sub><sub>source: https://media.ford.com/content/fordmedia/fna/us/en/features/celebrating-the-moving-assembly-line-in-pictures.html</sub></sub>
</div>

## Now:
Fast forward to recent years, our applications started becoming more
complex and required to process big amount of data. Unfortunately, 
it would be very difficult and inefficient if we continue programming
our applications in a way that they only use a single main thread and
cannot be easily multi-threaded to be able to handle larger number of
requests and data.

<div class="svg-container">
  <img style="max-width: 600px" src="/assets/articles/images/tesla-assembly-line.png" alt="Tesla assembly line">
  <sub><sub>source: https://www.businessinsider.com/r-tesla-plans-6-day-stoppage-at-factory-for-assembly-line-fixes-sources-2018-5</sub></sub>
</div>
<br>

## Programming Paradigms
Fortunately, there are programming paradigms that allow us to take 
advantage of multiple threads in our applications without having to
make our code complex and non-maintainable. Declarative Programming
Paradigm is one that guides us in programming in a more declarative
way, so that it programming language can handle the complex part 
(i.e. multi-threading). Functional Programming languages are declarative
programming languages that prevent unexpected application states, 
unwanted data mutations, and complex/non-reusable code.

<div class="svg-container">
  <img style="max-width: 600px" src="/assets/articles/images/programming-paradigms.svg" alt="programming paradigms">
</div>

<br>

## Functional vs Object-Oriented
|      criteria      |    functional     | object-oriented |
|:------------------:|:-----------------:|:---------------:|
|   basic elements   |     functions     |     objects     |
|       state        |     stateless     |    stateful     |
|        data        |     immutable     |     mutable     |
|     Iteration      |     recursive     |      loops      |
|      Big Data      | high performance  | not a good fit  |
| parallel execution |  well supported   | not a good fit  |
| order of execution |  does not matter  |     matters     |

# How functional programming overcomes the challenges?

<div class="svg-container">
  <img style="max-width: 300px" src="/assets/articles/images/fp-triangle.svg" alt="fp triangle">
</div>

The three key concepts of functional programming are Pure Functions, 
Data Transformation, and IO Isolation that guarantee us multi-threading,
code re-usability and maintainability, and reduced unexpected behaviors.


## Pure Functions
A function is pure if 
- it outputs the same value for the same input
- it has no side effects

<div class="svg-container">
  <img style="max-width: 300px" src="/assets/articles/images/math-sqrt.svg" alt="math sqrt function">
</div>

For example, take function below that includes 250+ LOC and is very 
specific to parsing a particular file type and with a specific format.
This function most likely has many side effects and doesn't necessarily
output the same value for the same input since it depends on many IO 
operations. Now imagine having to maintain or update this function to
support a different file type or data format; in most real world 
applications, such function would be considered "legacy" and a re-write
would be more preferable.


![bad code](/assets/articles/images/bad-code.png)


## Higher order function
A function that passes at least one of the following criteria:
- take one or more functions as its arguments
- return a function as their output

## Data transformation over modification
Pros of using immutable data structures:
- Removes the risk of race conditions 
- Enables parallel processing 
- Reduces the possibility of introducing bugs 
- Eliminate errors such as null de-referencing, concurrent collection modification, etc. 
- Reduces cognitive complexity of your code

Cons of using immutable data structures:
- Could be memory inefficient 
- Some languages don't support it out of the box

## Isolation of side effects
IO operations are side effects and isolating them
- gives us more control over them 
- reduces the amount of integration testing required 
- increases purity of our functions

Combining these three concepts divides our application into a set of 
pure and reusable functions and highly isolated and controlled IO interactions.

<div class="svg-container">
  <img style="max-width: 500px" src="/assets/articles/images/pure-v-io.svg" alt="pure vs io">
</div>

# What does functional programming provide?
## Closure
A language feature that let's an inner function have access to 
variables defined in the scope of the parent function.

```js
function assistant(name){
    function inner() {
        console.log(`Hi, I am ${name}!`);
    }
    return {
        introduceSelf: inner
    }
};
assistant('Bob').introduceSelf(); // Hi, I am Bob!
```
## Currying
The technique of translating a function that takes _n_ arguments,
to a sequence of _n_ **nested single-argument functions**.


<div class="svg-container">
  <img style="max-width: 300px" src="/assets/articles/images/currying.svg" alt="currying">
</div>


## Partial Application
Applying a function with only a subset of its parameters to get a new function

```js
const add = a => b => a + b;

const plus5 = add(5);

console.log(plus5(2)); // 7
```

### Example: Caching without Currying
```js
const computeIfNotCached = (cache, task) => {
  const taskName = task.name();
  if (!cache.contains(taskName))
    cache[taskName] = task();
  return cache[taskName];
}

// non-curried usage
computeIfNotCached(lruCache, task1);
computeIfNotCached(lruCache, task2);
```


### Example: Curried Caching
```js
const computeIfNotCached = cache => task => {
  //... unchanged ...
};

// curried usage with partial application
const computeIfNotLruCached = computeIfNotCached(lruCache);
computeIfNotLruCached(task1);
computeIfNotLruCached(task2);
```

## Function composition
Process of generating a function _h_ from two functions _f_ and _g_, given that:
<br>

_h = f(g(x)) = f•g(x)_

### Java functional interfaces
Java functional interfaces are some examples of what pure functions
should be like. There have a generic input types (reusable), requires
variables in the function to be final or effectively final (no 
side effects), and allows for composition of functions. It is very
helpful to be familiar with these functions and the number of their inputs and outputs:

|   Function    | Inputs | Outputs |
|:-------------:|:------:|:-------:|
|   Runnable    |   0    |    0    |
|   Supplier    |   0    |    1    |
|   Consumer    |   1    |    0    |
|   Function    |   1    |    1    |
|  BiConsumer   |   2    |    0    |
|  BiFunction   |   2    |    1    |

## Data Transformation Functions

- map ✔
- filter ✔
- reduce ✔
- ~~forEach~~

I struck through `forEach` because I want to emphasize that we should
avoid using it as much as possible because by definition it is
meant to cause side effects. At first, it might  even seem impossible
to implement your desired logic without using `forEach`, but with some
practice, it becomes apparent that everything can be implemented using `map`,
`filter`, and `reduce` operations.

In Java, first convert a list or variable into a `Stream` or `Optional`, respectively.

### Map
```Java
Stream<R> map(Function<T, R> mapper)
```

Looking at the Java declaration for `map` we can see how it takes as
an input a function that converts the data in a stream from a type 
`T` to a type `R`. The picture below depicts how a function called
_minify_ can be passed to `map` on a stream of large marbles to
convert them into smaller marbles.

<div class="svg-container">
  <img style="max-width: 100px" src="/assets/articles/images/minify-map.svg" alt="map">
</div>


### Filter
```Java
Stream<T> filter(Predicate<T> predicate)
```
Looking at the Java declaration for `filter` we can see how it
takes as an input a predicate that filters the data in a stream. 
The picture below depicts how a predicate called _green_ can be
passed to `filter` on a stream of mixed-colored marbles to retain
only the green ones. In other words, the predicate will be tested against
every element in the stream, and only if the predicate returns true for 
an element, then it will be kept in the stream.

<div class="svg-container">
  <img style="max-width: 100px" src="/assets/articles/images/green-filter.svg" alt="filter">
</div>

### Reduce
```Java
<U> U reduce(U identity,
             BiFunction<U, T, U> accumulator,
             BinaryOperator<U> combiner)
```

Looking at the Java declaration for `reduce` we can see how it
takes as an input an accumulator that accumulates a stream data of
type `T`into a container of type `U`. The identity parameter is 
the initial container that should be used to accumulate elements in.
The picture below depicts how an identity container (a box, ArrayList,
StringBuilder, etc.) is being used to accumulate each marble as they come in.

In other words, we give Java Stream APIs a container and a recipe 
for accumulating new elements into that container.

<div class="svg-container">
  <img style="max-width: 400px" src="/assets/articles/images/acc-reduce.svg" alt="reduce">
</div>

We notice that reduce has an additional parameter called combiner.
A combiner is useful when we have multiple threads each reducing a
portion of our data stream, and we want to be able to combine the 
results coming from each thread. In that case we would need multiple
accumulators, each would accumulate the results of a single thread.

<div class="svg-container">
  <img style="max-width: 400px" src="/assets/articles/images/multi-acc-reduce.svg" alt="multiple reduces">
</div>


Finally, a combiner function will take all accumulated containers
and combine them into a single container.

<div class="svg-container">
  <img style="max-width: 400px" src="/assets/articles/images/combiner.svg" alt="reduce combiner">
</div>


Examples below show three different scenarios and what we need to pass to reduce in each case:

Collect a stream of numbers as a list
```Java
numberStream.reduce(
  // identity
  new ArrayList<>(),

  // accumulator
  (list, newElement) -> { list.add(newElement); return list; },

  // combiner
  (list1, list2) ->  { list1.addAll(list2); return list1; }
);
```


Join a stream of strings as a new string:
```Java
stringStream.reduce(
  // identity
  new StringBuilder(),

  // accumulator
  (sb, newElement) -> { return sb.append(newElement); },

  // combiner
  (sb1, sb2) -> { return sb1.append(sb2); }
);
```


Sum up a stream of numbers:
```Java
numberStream.reduce(
  // identity
  0,

  // accumulator
  (partialSum, newElement) -> { return partialSum + newElement; },

  // combiner
  (partialSum1, partialSum2) -> { return partialSum1 + partialSum2; }
);
```

## Functional programming poor practices

1. Treating a stream of data as a for-loop:

✘ Avoid putting all the logic in `forEach`:
```Java
Arrays.stream(new int[]{1, 2, 3, 4, 5})
  .forEach(x -> {
    // all of the logic
  })
```

✔ Instead use `map`, `filter` and `reduce`:
```Java
Arrays
  .stream(new int[]{1, 2, 3, 4, 5})
  .filter(x -> x % 2 != 0) // 1, 3, 5
  .map(x -> 2 * x)         // 2, 6, 10
  .reduce(Integer::sum)    // (sum, value) -> sum + value
  .getAsInt();             // 18
```

2. Treating an Optional as a variable:

✘ Avoid using `isPresent` and `get` on an optional:

```Java
String getValidEmail(String id) {
    Optional<User> user = findUserById(id);

    if (!user.isPresent() || user.get().isInactive()) {
        throw new BadRequest("...");
    }

    User activeUser = user.get();
    return activeUser.getEmail();
}
```

✔ Instead use `map`, `filter`, and `orElse`:

```Java
String getValidEmail(String id) {
  return findUserById(id)
    .filter(user -> user.isActive())
    .map(user -> user.getEmail())
    .orElseThrow(() -> new BadRequest("..."));
}
```
