"use strict";
exports.__esModule = true;
var FileReadWrite = /** @class */ (function () {
    function FileReadWrite() {
        // Here we import the File System module of node
        this.fs = require('fs');
    }
    FileReadWrite.prototype.createFile = function () {
        this.fs.writeFile('file.txt', 'I am cool!', function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    };
    FileReadWrite.prototype.showFile = function () {
        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    };
    return FileReadWrite;
}());
//Usage
var obj = new FileReadWrite();
obj.createFile();
obj.showFile();
