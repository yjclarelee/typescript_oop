{
    type NetworkErrorState = {
        result : 'fail';
        reason: 'offline' | 'down' | 'timeout';
    };

    type SuccessState = {
        result: 'success';
    }
    
    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient{
        tryConnect(): ResultState{
            let state: SuccessState;
            return state;
        }
    }

    class UserService{
        constructor(private client: NetworkClient){}

        login(){
            this.client.tryConnect();
        }
    }

    class App{
        constructor(private userService: UserService){}
        run(){
            try{
                this.userService.login();
            } catch(error){
                // show dialog to user
            }
            
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}