namespace com.account {
    export interface Account {
        accountId: string;
        accountNo: string;
        accountType: string;

        getAccountDetail(): Account;
    }
}