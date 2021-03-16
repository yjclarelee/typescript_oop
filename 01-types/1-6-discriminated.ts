{
    /**
     * Union Types: OR
     */

    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    }
    type FailState = {
        result: 'fail';
        reason: string;
    }
    // return value
    type LoginState = SuccessState | FailState;
    function loginFunc(): LoginState{
        return {
            result: 'success',
            response:{
                body: 'logged in!'
            }
        }
    }

    function printLoginStateFunc(state: LoginState){
        if(state.result == 'success'){
            console.log(`🎉 ${state.response.body}`);
        }
        else{
            console.log(`😢 ${state.reason}`);
            
        }
    }
}