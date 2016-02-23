var Hapi = require("hapi");
var server = new Hapi.Server(8080, "127.0.0.1");
server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});

server.route({
    path: "/hello/{name*2}",
    method: "GET",
    handler: function(request, reply) {
        var names = request.params.name.split("/");
        reply({
            first: names[0],
            last: names[1],
            mood: request.query.mood || "neutral"
        });
    }
});