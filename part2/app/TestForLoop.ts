class TestForLoop {

    printForLoop(): void {
        for( let i : number = 0 ; i < 10 ; i++) {
            console.log("Value of i : ", i );
        }
    }   
}

let obj = new TestForLoop();
obj.printForLoop();