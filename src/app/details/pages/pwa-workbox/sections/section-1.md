<div class="svg-container">
  <img style="max-width: 300px" src="/assets/articles/images/pwa-v-web-v-native.svg" alt="pwa vs web vs native">
  <sub><sub>source: https://web.dev/what-are-pwas/</sub></sub>
</div>

Most of us consume our daily internet content through our favorite
mobile apps or by finding content using a search engine. 
Interestingly, there seemed to be an implicit contract between 
companies and users that mobile apps are more reliable, rich and 
platform-specific, whereas web apps are more reachable, light, 
accessible, and platform-agnostic. PWAs are web apps packed with 
progressively-developed modern web APIs and features that are meant 
to bring native-app like capabilities to web apps.

These are some questions a user might wonder about when using native 
or web apps, and PWA features strive to fix them:

- Why does app X take a lot of storage and slows down my phone?
- Why does the iOS version of app X have feature y but not the Android version?
- Why isn't web page X as smooth as the native app version?
- Why doesn't web app X have intuitive animations like the native app version?

<div class="svg-container">
  <img style="max-width: 300px" src="/assets/articles/images/agnostic-v-specific.svg" alt="device agnostic vs specific">
</div>

# How could PWAs have similar capabilities as native apps?

PWAs are made up of two main components that enable such capabilities:
- [Service worker][1]: provides ability to cache for a rich offline experience, receive push notification and local notification, perform background syncs, schedule tasks , as well as geofence ([feature details][3])
- [Web app manifest][2]: contains a JSON that describes how the installed PWA should behave 

Some of these features are not supported by all browsers, and some are still in development stage.

# Scope of service workers and web app manifests

Both the service worker script and web app manifest will have a specified
scope, and the [scope of the manifest][4] must be contained by the [scope of the 
service worker][5], otherwise it will not be registered. The scope of the service
worker is determined by the path it was fetched from, and the scope of the 
manifest is defined in the manifest JSON.

<div class="svg-container">
  <img style="max-width: 300px" src="/assets/articles/images/simple-scope.svg" alt="single sw single manifest">
</div>


Only one service worker can control a page and handle fetch requests,
so if there are multiple service workers with the same scope, the browser
will choose the most updated version. However, if there are multiple service
workers with overlapping scopes, then the one with more specific scope 
will take control of the page ([detailed explanation][6]):

<div class="svg-container">
  <img style="max-width: 300px" src="/assets/articles/images/two-sw-scopes.svg" alt="two sw and single manifiest">
</div>

# What do PWAs provide?
## Rich offline experience
### Service worker caching
Service workers allow us to cache our app content during various stages 
of the app life cycle. [The Offline Cookbook][7] documents and describe all
types of caching strategies, such as on install (precaching), 
stale-while-revalidate, cache-only, etc. There are many caching strategies
each with different implementation and cache management strategies, and
implementing each from scratch would be very complex and risky (cache management is not easy!).

### Workbox
Workbox is a library for adding offline support to web apps by providing
tools that make it easy for developers to utilize appropriate [caching 
strategies][8] for different resources. Workbox takes care of [precaching][9] 
all app resources that we specify. It can also cache CDN content during
runtime, as well as other application assets such as images, CMS content, etc.

Here is a sample workbox precache injection config JSON:
```js
module.exports = {
    "globDirectory": "build/", 
    "swDest": "build/sw.js",
    "swSrc": "build/rawSw.js",
    "globPatterns": [
        "**/*.{js,txt,jpg,png,json,ico,html,css,webmanifest}",
    ]
};
```

This JSON specifies where workbox should scan for application files (_globDirectory_),
source service worker script in which the precaching recipe should be injected (_swSrc_),
destination service worker script (_swDest_), and a list of regex patterns to match 
eligible files for precaching (_globPatterns_). Here is a sample source service 
worker script which will be used by workbox to replace _self.__WB_MANIFEST_ with
the list of precache eligible files:
```js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
} else {
    console.log(`Workbox didn't load successfully`);
}
```

## Ability to install as a standalone app
When a web app has a registered service worker and a valid manifest, it is 
eligible to be installed. An installed PWA offers the same features and look 
and feels on every device or platform, so it can be tested on a single device
and guaranteed the same experience on any other devices (assuming same browsers).
An installed PWA could include a splash screen like any other native app, as 
well as app-bar theming. There are other feature in development to make PWAs 
function more similar to native apps, such as running at startup.

## Push notifications, geofencing, background sync, etc.
More and more browsers are increasing support for PWA features such as push 
notification, and if any of these features are incorporated in a PWA, the 
service worker will only utilize them on browsers that support them, so the
app will not face any issue on browsers that do not provide support. For 
example, since IE does not support service workers, the page will be loaded
as a regular web page without any of the PWA features.



[1]: https://w3c.github.io/ServiceWorker/
[2]: https://www.w3.org/TR/appmanifest/
[3]: https://whatwebcando.today/
[4]: https://developer.mozilla.org/en-US/docs/Web/Manifest/scope
[5]: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/scope
[6]: https://stackoverflow.com/questions/47137832/conflicting-service-worker-scopes-broad-vs-narrow/47149987#47149987
[7]: https://web.dev/offline-cookbook/
[8]: https://developers.google.com/web/tools/workbox/modules/workbox-strategies
[9]: https://developers.google.com/web/tools/workbox/modules/workbox-precaching

