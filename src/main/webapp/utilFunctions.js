function readTextFile(file, callback) {
    if (!verifyIfFileExists(file)) {
        callback(null);
        return;
    }
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}


function verifyIfFileExists(testUrl) {
    var http = jQuery.ajax({
        type: "HEAD", //Not get
        url: testUrl,
        async: false
    });
    return http.status != 0;
}