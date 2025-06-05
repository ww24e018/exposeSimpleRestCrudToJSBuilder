// yay for long names

let promiseHandler_fail = function(err) { console.error(err); return err; };

export var gimmeAccessFunctionObjectWithURLBase = function(urlBase) {
    return {
        read: function(id) {
            return fetch(`${urlBase}/${id}`).then( (res) => res.json(), promiseHandler_fail)
        },
        readAsync: function(id){ return this.read(id).then( (json) => json, promiseHandler_fail); },
        //readAsyncAwait: async function(id) { var res = await this.readAsync(id); return res; },

        readAll: function() {
            return fetch(`${urlBase}`).then((res) => res.json(), promiseHandler_fail)
        },
        readAllAsync: function(){ return this.readAll().then( (json) => json, promiseHandler_fail); },

        create: function(reqBody) {
            let request = new Request(`${urlBase}`, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return fetch(request).then( (res) => res.json(), promiseHandler_fail);
        },
        createAsync: function(reqBody) { return this.create(reqBody).then( (json) => json, promiseHandler_fail) },

        update: function(id, reqBody) {
            let request = new Request(`${urlBase}/${id}`, {
                method: "PUT",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return fetch(request).then( (res) => res.json(), promiseHandler_fail);
        },
        updateAsync: function(id, reqBody) { return this.update(id, reqBody).then( (json) => json, promiseHandler_fail) },

        delete: function(id) {
            let request = new Request(`${urlBase}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return fetch(request).then( (res) => res.json(), promiseHandler_fail);
        },
        deleteAsync: function(id) { return this.delete(id).then( (json) => json, promiseHandler_fail) },


    }
}