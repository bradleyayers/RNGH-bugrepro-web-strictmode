```
npm install
npm run web
```

Observe that when `<Animated.View>` is rendered as a result of a `setState()`
update and it has an `exiting` it breaks when strict mode is enabled.

On subsequent renders, it is still broken.

To reproduce it it's important that the component containing the `useState` is
wrapped in a `<StrictMode>` otherwise the double rendering (done as part of
strict mode) won't apply.
