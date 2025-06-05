# exposeSimpleRestCrudToJSBuilder
js/module based code to get/define a js interface for a http/json(rest) interface for a certain api pattern 

## configuration

in backendUrls.js

## use in html

try 
```
<script type="module">
        /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules */
        /* JavaScript module code here */
        import { api } from './<pathtothefile>/backEndApiAccessorObjects.js'
        window.api = api; // or something else you like
    </script>
```

## use in console

todo

