{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(loadState: ResourceLoadState){
    switch(loadState.state){
      case 'loading':
        console.log('👀 loading...');
        break;
      case 'success':
        console.log(`😃 ${loadState.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${loadState.reason}`);
        break;
      default:
        throw new Error(`unknown error state: ${loadState}`);
        break;
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}