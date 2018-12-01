
export class MyAccount implements com.account.Account {
    accountId: string;    
    accountNo: string;
    accountType: string;
    getAccountDetail(): com.account.Account {
        throw new Error("Method not implemented.");
    }

}