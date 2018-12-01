/*
* http://usejsdoc.org/
*/
import * as fs from "fs";

class FileReadWrite {

    // Here we import the File System module of node
    private fs = require( 'fs' );

    constructor() { }

    createFile() {

        this.fs.writeFile( 'file.txt', 'I am cool!', function( err ) {
            if ( err ) {
                return console.error( err );
            }
            console.log( "File created!" );
        } );
    }

    showFile() {
        this.fs.readFile( 'file.txt', function( err, data ) {
            if ( err ) {
                return console.error( err );
            }
            console.log( "Asynchronous read: " + data.toString() );
        } );
    }
}



//Usage
var obj = new FileReadWrite();
obj.createFile();
obj.showFile();