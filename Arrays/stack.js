var input=[]
var output=[]

function enqueue(stackInput,item){

      stackInput.push(item)


}
function dequeue(stackInput,stackOutput){

    if(stackOutput.length<=0){
        while(stackInput.length>0){
            let element=stackInput.pop()
            stackInput.push(element)
        }
    }
    return stackOutput.pop()
}