class MyTuple {
    myTuple = [];

    public add(): void {
       for( let i: number = 0 ; i < 10 ; i++) {
           this.myTuple.push("Val-"+i);
       }
    }

    public showTupleData(): void {
        this.myTuple.forEach( (s) => console.log(s)); 
    }

}

let tObj = new MyTuple();
tObj.add();
tObj.showTupleData();