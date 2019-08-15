## Hash

When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass an object literal (also known as a _hash_) instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event.

###### Examples

⇣ **Incorrect** code for this rule:

```js
snow("snowflakesUpdated", snowfall.id);

on("snowflakesUpdated", (e, snowfallID) => {
  // Use "snowfallID".
});
```

⇡ **Correct** code for this rule:

```js
snow("snowflakesUpdated", { snowfallID: snowfall.id });

on("snowflakesUpdated", (e, data) => {
  // Use "data.snowfallID".
});
```
