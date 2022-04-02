export class UserClass{
    static statusCode = {} 

    static setStatusCode(status){        
        this.statusCode = status;
    }

    getCurrentUse(){
        return this.statusCode;
    }
    

    
}