export class UserClass{
    static currentUser = {} 

    static setCurrentUser(user){        
        this.currentUser = user;
    }

    getCurrentUse(){
        return this.currentUser;
    }
    

    
}