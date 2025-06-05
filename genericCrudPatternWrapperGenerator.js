/*

Naming based on assumption that the json/js-object ist the most frequent goal.
It also seems reasonable from a semantic point to make that default.

Therefore e.g. read() returns the .json() *promise*(!)
You can "await" that promise to get json "directly". Or you can do e.g. a
read().then(successhandlerref, errorhandlerref)
to make the promise  do stuff "later".

If you want to chain multiple promise-"thens" then remember to return the promise from the handler in each step.

Use readResponse() (or the xyResponse() equivalents) if you want the response-promise before
the attempted json-interpretation. For example if you want to check for http-status codes beforehand.

 */


let promiseHandler_fail = function(err) { console.error(err); return err; };

export var gimmeAccessFunctionObjectWithURLBase = function(urlBase) {
    return {
        readResponse: function(id) {
            return fetch(`${urlBase}/${id}`).then( (res) => res.json(), promiseHandler_fail)
        },
        read: function(id){ return this.readResponse(id).then( (json) => json, promiseHandler_fail); },

        readAllResponse: function() {
            return fetch(`${urlBase}`).then((res) => res.json(), promiseHandler_fail)
        },
        readAll: function(){ return this.readAllResponse().then( (json) => json, promiseHandler_fail); },

        createResponse: function(reqBody) {
            let request = new Request(`${urlBase}`, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return fetch(request).then( (res) => res.json(), promiseHandler_fail);
        },
        create: function(reqBody) { return this.createResponse(reqBody).then( (json) => json, promiseHandler_fail) },

        updateResponse: function(id, reqBody) {
            let request = new Request(`${urlBase}/${id}`, {
                method: "PUT",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return fetch(request).then( (res) => res.json(), promiseHandler_fail);
        },
        update: function(id, reqBody) { return this.updateResponse(id, reqBody).then( (json) => json, promiseHandler_fail) },

        deleteResponse: function(id) {
            let request = new Request(`${urlBase}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return fetch(request).then( (res) => res.json(), promiseHandler_fail);
        },
        delete: function(id) { return this.deleteResponse(id).then( (json) => json, promiseHandler_fail) },


    }
}