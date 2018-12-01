//import * as _ from "lodash";
//import * as pinger from "ping";

export class Check1 {

    // public static main(args: string[]) {
    //     console.log("This is my first class for demo");
    // }

    public show(): void {
        console.log("This is my first class for demo1");
    }
    
    public show1(): void {
        console.log("This is my first class for demo1");
//        var aa = _.toLower("ABCD");
//        console.log(aa);

//        let aa1 = _.capitalize("hati ghoda bagha");
//        console.log(aa1);
        
    }

    public pingToHost(): void {
        // let hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
        // for (let host of hosts) {
        //     pinger.ping(host);
        // }

    }

}

var test1 = new Check1();
test1.show();
test1.show1();