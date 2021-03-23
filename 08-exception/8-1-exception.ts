{
    // Java: Exception class
    // JavaScript: Error 
    // const array = new Array(100000000000000000);

    // Error(Exception) Handling: try -> catch -> finally

    function readFile(fileName: string): string{
        if(fileName === 'not exist!'){
            throw new Error(`file does not exist! ${fileName}`);
        }
        return 'file contents';
    }

    function closeFile(fileName: string){

    }

    function run(){
        const fileName = 'file';

        try{
            console.log(readFile(fileName));
        } catch(error){
            console.log('caught!');
            return;
        } finally{
            // catch에서 return이 되어도 finally가 있으면 이 부분이 실행이 됨
            closeFile(fileName);
        }
    }
    
    
    

}