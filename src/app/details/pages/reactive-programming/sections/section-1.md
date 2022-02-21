# Reactive programming

"In plain terms reactive programming is about non-blocking
applications that are asynchronous and event-driven and
require a small number of threads to scale". _—Spring, Web Reactive Framework_

Pros
- Clean and understandable code
- Focus on What instead of How
- Complex operations out of the box
- Abort processing data when not needed (cancel)

Cons
- Sometimes more difficult to debug
- Learning curve

# Understanding how Passive modules interact

Imagine you are building the app for a bank that allows 
users to transfer money, pay bills, give to charities, 
etc. all through withdrawing from their personal account.
The picture below shows that in a passive world, all 
modules will have access to modify the Balance module 
through a withdraw method. This might seem the best way 
to build our app, but it prevents us from being able to 
modify or scale our Balance module. Additionally, if a 
new developer tries to understand how the Balance module 
works, they need to look at all other modules to see how
and when they modify the Balance module.

<div class="svg-container">
  <img style="max-width: 500px" src="/assets/articles/images/passive.svg" alt="passive programming">
</div>

In a **Passive** program, other modules are aware of the main
module and will update it as needed through its _setters_ (i.e. remote updates).

# Understanding how Reactive modules interact

Now imagine we updated our application to be reactive. Looking 
at picture below, we can see that other modules are unaware of 
our Balance module, so we can easily scale and modify it as needed.
Also, when a new developer joins the team, they can easily 
understand how the Balance module works by only looking at the 
events that it subscribes to and how it reacts to those events.

Another main benefit of Reactive modules is that since most modules
broadcast events, we can easily create new modules that could 
listen and react to those events, such as modules that gather
metrics, send emails, etc.

<div class="svg-container">
  <img style="max-width: 500px" src="/assets/articles/images/reactive.svg" alt="reactive programming">
</div>

In a **Reactive** program, other modules are NOT aware of the main module
and only publish events, allowing the main module to subscribe and 
_react_ accordingly (i.e. self updates).

# How does Reactive programming work

Reactive programs builds upon the three main [Functional Programming](/site/details?filepath=/articles/functional-programming.json) 
ideas and use the publisher-subscriber model to build functional
and reactive applications.

<div class="svg-container">
  <img style="max-width: 500px" src="/assets/articles/images/event-stream.svg" alt="event stream">
</div>

# Basic elements of publisher-subscriber model
Two routes that could be taken when subscribing to a publisher:

- next
- error


<div class="svg-container">
  <img style="max-width: 100px" src="/assets/articles/images/single-rail.svg" alt="small rail">
</div>

In an observable, **operators** can be chained to create a pipeline (rail)
that process on each event in a stream, and **complete** is the last step:


<div class="svg-container">
  <img style="max-width: 500px" src="/assets/articles/images/basic-rail.svg" alt="basic rail">
</div>

## RxJS (Front-end)
```js
// Publisher
Observable.create(...)

// Pipeline
.pipe( 
    .operator(...)
    .operator(...))

// subscriber
.subscribe(val => console.log(val))
```

## Reactive Spring (Back-end)

```Java
// Publisher
Flux.just(...) 

// Pipeline
.operator(...)
.operator(...)

// subscriber
.subscribe(val => console.log(val))
```

Finally, **unsubscribe** from an observable to release resources and avoid memory leaks.

## Some commonly used operators

| Creation  | Transformation | Filtering | Combination | Error Handling |
|:---------:|:--------------:|:---------:|:-----------:|:--------------:|
|  create   |      map       |  filter   |    merge    |     catch      |
| interval  |    flatMap     |   take    |   concat    |     retry      |
|   defer   |      scan      | debounce  |   reduce    |   doOnError    |

In Reactive Spring, we might want to convert a `Mono` to `Flux` and vice versa:

- Mono → Flux: using `flatMapMany`
- Flux → Mono: using collection methods (e.g. `collectList`)

# Map, Filter and Reduce

RxJS:
```js
const sampleObservable$: Observable<string> = new Observable(observer => {
    observer.next('Hello');
    observer.next('Bad message');
    observer.next('world');
    observer.complete();
});

sampleObservable$
    .pipe(
        map(msg => msg.toLowerCase()),
        filter(msg => msg.indexOf('bad') === -1)
    )
    .subscribe(
        nextValue => console.log(nextValue),
        error => console.error(error)
    );

// hello
// world
```

Reactive Spring:
```Java
Flux<String> sampleFlux = Flux.create(fluxSink -> {
           fluxSink.next("Hello");
           fluxSink.next("Bad message");
           fluxSink.next("world");
           fluxSink.complete();
        });

sampleFlux.map(String::toLowerCase)
          .filter(message -> !message.contains("bad"))
          .subscribe(
				nextValue -> log.info(nextValue),
				error -> log.error(error)
			);

// hello
// world
```

# Logging

```js
of('hello', 'world')
    .pipe(
        tap(x => console.debug('__ORIGINAL_CONTENT__:', x)),
        map(msg => msg.toUpperCase()),
        tap(x => console.debug('__MAPPED_CONTENT__  :', x)),
    )
    .subscribe(
        nextValue => console.log(nextValue),
        error => console.error(error)
    );

//__ORIGINAL_CONTENT__: hello
// __MAPPED_CONTENT__ : HELLO
// HELLO
// __ORIGINAL_CONTENT__: world
// __MAPPED_CONTENT__ : WORLD
// WORLD
```

```Java
Flux.just("Hello", "world")
    .log("__ORIGINAL_CONTENT__")
    .map(String::toUpperCase)
    .log("__MAPPED_CONTENT__")
    .subscribe(
		nextValue -> log.info(nextValue),
		error -> log.error(error)
	);

// __ORIGINAL_CONTENT__: onNext(Hello)
// __MAPPED_CONTENT__  : onNext(HELLO)
//                     : HELLO
// __ORIGINAL_CONTENT__: onNext(world)
// __MAPPED_CONTENT__  : onNext(WORLD)
//                     : WORLD
```


# Error handling

```js
const observable$: Observable<string> = new Observable(observer => {
    observer.next('hello');
    observer.error('source error');
    observer.next('world');
    observer.complete();
});

observable$
    .pipe(
        //catchError(err => of('fallback message')),
        map(msg => msg.toLowerCase())
    )
    .subscribe(
        nextValue => console.log(nextValue),
        error => console.error("subscribe error callback:", error)
    );

/* Output as is: */
// Hello
// subscribe error callback: source error

/* Output after uncommenting .catchError: */
// Hello
// fallback message
```

```Java
Flux<String> sampleFlux = Flux.create(fluxSink -> {
            fluxSink.next("Hello");
            fluxSink.next("bad message");
            fluxSink.error(new RuntimeException("source error"));
            fluxSink.next("world");
            fluxSink.complete();
        });
sampleFlux
	//.onErrorReturn("fallback message")
	.map(this::throwIfBadMessage)
	//.onErrorContinue((error, event) -> log.error("error '{}' occurred on: '{}'", error.getMessage(), event))
	.subscribe(
		nextValue -> log.info(nextValue),
		error -> log.error("subscribe error callback: {}", error.getMessage())
	);

/* Output as is: */
// Hello
// subscribe error callback: no bad messages!

/* Output if we ONLY uncomment .onErrorReturn: */
// Hello
// subscribe error callback: no bad messages!

/* Output if we ONLY uncomment .onErrorContinue: */
// Hello
// error 'no bad messages!' occurred on: 'bad message'
// subscribe error callback: source error

/* Output if we uncomment BOTH .onErrorReturn and .onErrorContinue: */
// Hello
// error 'no bad messages!' occurred on: 'bad message'
// fallback message
```

> Any error occurred while processing an event——from the stream of 
> events being published——would stop the rest of the events in the 
> stream from being published, regardless of whether or not the error is handled.


# Publish/subscribe on different schedulers

<div class="svg-container">
  <img style="max-width: 700px" src="/assets/articles/images/subPubOn.svg" alt="multi subscribeoOn publishOn">
</div>


By default in Reactive Spring, the subscribe function is executed on
the thread the publisher is subscribed to and is a blocking call. To
ensure the call to `subscribe` is non-blocking, we can add a call to 
`subscribeOn` and pass a desired scheduler, before the subscription in the pipeline:

```Java
Flux.just("Hello", "world")
    //.subscribeOn(Schedulers.newSingle("<subscribe-thread>"))
    .subscribe(log::info);
log.info("subscribed successfully!")

/* Output when ran as is: */
// <main-thread> : hello
// <main-thread> : world
// <main-thread> : subscribed successfully!

/* Output after uncommenting .subscribeOn: */
// <main-thread> : subscribed successfully!
// <sub-thread>  : hello
// <sub-thread>  : world
```

Similarly, by default all operators in a subscriber's pipeline will be
executed on the thread the publisher is subscribed to. We enforce a 
certain operator to be published on a different thread of a scheduler
by adding a call to `pushlishOn` and pass a desired scheduler, before 
the operator in the pipeline:

```Java
Flux.just("Hello", "Bad message", "world")
    //.publishOn(Schedulers.newSingle("<op-1-thread>"))
    .map(String::toLowerCase)
    .log("__MAPPED__")
    //.publishOn(Schedulers.newSingle("<op-2-thread>"))
    .filter(msg -> !msg.contains("bad"))
    .log("__FILTERED__")
    .subscribe(log::info);

/* Output when ran as is: */
// <main-thread> __MAP__   : | onNext(hello)
// <main-thread> __MAP__   : | onNext(bad message)
// <main-thread> __MAP__   : | onNext(world)
// <main-thread> __FILTER__: | onNext(hello)
// <main-thread>           : hello
// <main-thread> __FILTER__: | onNext(world)
// <main-thread>           : world

/* Output after uncommenting .publishOn: */
// <op-1-thread> __MAP__   : | onNext(hello)
// <op-1-thread> __MAP__   : | onNext(bad message)
// <op-1-thread> __MAP__   : | onNext(world)
// <op-2-thread> __FILTER__: | onNext(hello)
// <op-2-thread>           : hello
// <op-2-thread> __FILTER__: | onNext(world)
// <op-2-thread>           : world
```

> If you are using the RxJS library, you can publish your observable on
> a built-in or custom scheduler. For example, if you want to animate
> a DOM element, you can do so using the `animationFrameScheduler` provided in the Rx library.

# Parallel processing on different schedulers

<div class="svg-container">
  <img style="max-width: 700px" src="/assets/articles/images/parallel.svg" alt="parallel processing">
</div>


By default, in Reactive Spring, all events from a publisher are processed
on the same thread (rail). You can distribute a stream of events between 
multiple threads by providing a desired scheduler with a pool of threads
when subscribing to the publisher:

```Java
Flux.just("Hello", "Bad message", "world")
	//.parallel()
	//.runOn(Schedulers.newElastic("my-pool"))
    .map(String::toLowerCase)
    .log("__MAPPED__")
    .filter(msg -> !msg.contains("bad"))
    .log("__FILTERED__")
    .subscribe(log::info);

/* Output when ran as is (or after ONLY uncommenting .parallel): */
// <main-thread> __MAP__   : | onNext(hello)
// <main-thread> __MAP__   : | onNext(bad message)
// <main-thread> __MAP__   : | onNext(world)
// <main-thread> __FILTER__: | onNext(hello)
// <main-thread>           : hello
// <main-thread> __FILTER__: | onNext(world)
// <main-thread>           : world

/* Output after uncommenting BOTH .parallel and .runOn: */
// <my-pool-3> __MAP__   : | onNext(world)
// <my-pool-4> __MAP__   : | onNext(hello)
// <my-pool-2> __MAP__   : | onNext(bad message)
// <my-pool-4> __FILTER__: | onNext(hello)
// <my-pool-2> __FILTER__: | onNext(world)
// <my-pool-4>           : world
// <my-pool-2>           : hello
```

> A scheduler with some threads is required for multi-threaded processing.
> Either a custom scheduler or one of the provided schedulers
> (i.e. single, parallel, elastic, boundedElastic) can be used.




