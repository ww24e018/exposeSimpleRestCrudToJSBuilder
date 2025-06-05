import { backendUrls } from "./../backendUrls.js"
import { gimmeAccessFunctionObjectWithURLBase } from './genericCrudPatternWrapperGenerator.js'

/*
  Here a function traverses the "backendUrls" import and
  creates an analogue api object by reusing the key and
  using the value/url to return a configured-for-that value/url
  set of functions that use fetch(), some promise-resolving
  and assumptions about the assumed api to
  create, read, update, delete
  in a hopeful *slightly* more convenient function.

  Its simple, so if you don't like the defaults for names and places
  feel free to copy and adapt. apache licence 2.0 and all that, too.
 */

export var api = {};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
for (const [key, value] of Object.entries(backendUrls)) {
    //console.log(`${key}: ${value}`);
    api[key] = gimmeAccessFunctionObjectWithURLBase(value);
}