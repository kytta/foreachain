# foreachain

> The chainable `forEach()`.

```js
[2,3,5].forEachain(v => {console.log(v)})
       .map(v => v * 3)
       .forEach(v => {console.log(v)});
```

## Why?

I don't really know. I just imagined that there can be a task like this:

1. Output array data, element by element
2. Modify array
3. Output data again

And this can't be done in JavaScript in one long chained function call.

...well, OK, it can be done like this:

```js
[2,3,5].map(v => {console.log(v);return v})
       .map(v => v * 3)
       .forEach(v => {console.log(v)});
```

But I find the first `map` call unreadable and confusing. So, this is my solution.

## How?

1. ```sh
   npm i foreachain
   ```

   or

   ```html
   <script src="https://cdn.jsdelivr.net/npm/foreachain/foreachain.browser.min.js"></script>
   ```

   or (for modern browsers)

   ```html
   <script type="module">
      import foreachain from 'https://cdn.jsdelivr.net/npm/foreachain/foreachain.module.min.js';
   </script>
   ```

2. ```js
   // if you're not in browser
   import foreachain from 'foreachain';

   /* DO NOT overwrite the original forEach.
    * This is unethical.
    *
    * ...and will break your code. */
   [].constructor.prototype.forEachain = foreachain;
   ```

3. ```js
   [2,3,5].forEachain(v => {console.log(v)})
          .map(v => v * 3)
          .forEach(v => {console.log(v)});
   ```

## Is this necessary to have as a separate package?

If you think that the answer should be "No", you can copy the source code over
to your codebase.

### List of times I found use for a chainable `forEach`

> I'm still looking...

## License

MIT © 2020-2021 Nikita Karamov
