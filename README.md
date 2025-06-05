# exposeSimpleRestCrudToJSBuilder
js/module based code to get/define a js interface for a http/json(rest) interface for a certain api pattern 

## pattern

Assumption about the api:
- there is a common prefix for each sub-api, e.g. `/thethingtocrud`
- if you want a common location, eg `http://localhost:8080` that is covered
- read and readAll do a GET on `prefix/<id-parameter>` and `prefix` (only) respectively
- create maps to POST on the prefix (only), json in request-body (function parameter)
- update maps to PUT on `prefix/<id-parameter>`, json in request-body (both are function parameters). Note: As with the rest, the API-behaviour is defined by how the API behaves ("id" conflicts are the backends responsibility)
- delete maps to DELETE on `prefix/<id-parameter>` and expects something json-y to return from the api (so .json can parse the response) -- alternatively use the promise from deleteResponse function instead for response-checking, there is no json-assumption there.

You can, in theory, customize this heavily. 
Most obvious place for precise single-place additions
might be a custom backEndApiAccessorObjects.js (or something like it)
where you can add/edit the exported "api" object.

You could also use the wrapper to create single-entity apis
in single/individual files. Then customization could happen there, too.

You can also extend/modify the wrapper of course.
The trick *then* might be to consciously *not* using the
apis the server does not, in fact, implement. :) 

## configuration

in backendUrls.js

## use in html

Try something like
```
<script type="module">
        /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules */
        /* JavaScript module code here */
        import { api } from './<pathtothefile>/backEndApiAccessorObjects.js'
        window.api = api; // or something else you like
    </script>
```

## use in console

Assuming everything works and not renaming in the import, try something like:

```
> var allmycrudthings = await api.thethingtocrud.readAll();
> console.log(allmycrudthings);
```

A test-create-delete pattern might be:
```
var mything = await api.thingies.create({name:'delete me'});
console.log(mything);

var deleteoutput = await api.thingies.delete(mything.id);
console.log(deleteoutput);
```

## Licence

I choose Apache 2.0 because it is permissive and was
on the top of list. Alphabetically. Was considering MIT, too.
If you need a different licencing, let me know.