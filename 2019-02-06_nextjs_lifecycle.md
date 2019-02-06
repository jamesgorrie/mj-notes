## Things discussed:

* [The general lifecycle of a request to render with NextJS](https://docs.google.com/drawings/d/100M_l0qaJGesdEJAEjv8B8O-5Yte7J_lbtda2mEaDTU/edit)
* [JS's import mechanism](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
  Probably more to go over with that. 
* JavaScript object being a name => value pairs. e.g. `{ id: 12 }`.
  The querystring on a URL can be thought of in this way.
  [There is some good docs on MDN of how you can do this in the browser](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams).
* [Fundamentals of a JavaSciprt function](https://www.frontamentals.com/functions/).
  ![Breakdown of a JavaScipr function](https://www.frontamentals.com/static/function-breakdown-e46e54ec2e0de641547f63411acb1d84-bf43a.png).
* Babel - although this might be worth leaving for the time being.
* The ES6
    ```JS
    (arg1, arg2) => {
      /* .function body */
      return 1;
    }
    ```

    is similar to

    ```js
    function(arg1, arg2) {
      /* function body */
      return 1;
    }
    ```

  We can discuss the differences in the future.
* [JavaScript is fundamentally weird](https://www.destroyallsoftware.com/talks/wat).

## Thoughts
* Maybe the goal is to have a NextJS app that fetches information from an external source, and renders it.
  We'll checkin with this at the end of each session.

## TODO Next week
  * Go through any questions on import / modules
