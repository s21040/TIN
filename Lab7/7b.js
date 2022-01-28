var fs = require('fs');

function watchPath(path) {
    var readingScan = fs.readdirSync(path);
    fs.watchpath(path, "utf8"); {
        file = fs.readdirSync(path);
        console.log("Content : " + readingScan);
    };
}

watchPath("./text");
