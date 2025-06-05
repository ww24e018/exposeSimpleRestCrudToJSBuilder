import { backendUrls } from "./backendUrls.js"
import { gimmeAccessFunctionObjectWithURLBase } from './genericCrudPatternWrapperGenerator.js'


export var api = {};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
for (const [key, value] of Object.entries(backendUrls)) {
    console.log(`${key}: ${value}`);
    api[key] = gimmeAccessFunctionObjectWithURLBase(value);
}