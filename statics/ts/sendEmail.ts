var submitMessage = document.getElementById("submitMessage") as HTMLInputElement;
const submitMessageName = document.getElementById("submitMessageName") as HTMLInputElement;
const submitMessageEmail = document.getElementById("submitMessageEmail") as HTMLInputElement;
const submitMessageSubject = document.getElementById("submitMessageSubject") as HTMLInputElement;
const submitMessageMessage = document.getElementById("submitMessageMessage") as HTMLInputElement;
const LOADING_MESSAGE:string = "Loading ...";
const NOT_LOADING_MESSAGE:string = "Send Message";

submitMessage.addEventListener("click", async function(e: Event){
    e.preventDefault();
    setLoading();
      
    
    const submitMessageNameText : String = submitMessageName.value.trim();
    const submitMessageEmailText : String = submitMessageEmail.value.trim();
    const submitMessageSubjectText : String = submitMessageSubject.value;
    const submitMessageMessageText : String = submitMessageMessage.value;

    if(submitMessageNameText ==="" || submitMessageEmailText === "" || submitMessageSubjectText === "" || submitMessageMessageText === ""){
        alert("Please enter all fields");
        setNoLoading();
    }else{
        var data:[String, String, String, String]= [submitMessageNameText, submitMessageEmailText, submitMessageSubjectText, submitMessageMessageText];
        await handlesSendEmail(data);
        setNoLoading();
        resetFields();
    }

    
});


const handlesSendEmail:(requestData:Array<String>)=>Promise<any> = async (requestData)=>{
    var data:{email:String, name:String,subject:String,message:String} = {"email":requestData[1],"name":requestData[0],"subject":requestData[2],"message":requestData[3]};
    var error :Boolean = false;
    await fetch("/", {
        "method":"POST",
        "headers":{
            "Content-Type":"application/json",
        },
        "body":JSON.stringify(data)
    })
        .then(res=>{
            if(res.status > 299){
                error =true;
            }
            return res.json();
        })
        .then((data:{message:String})=>{
            alert(data.message)
            if(error){
                
            }else{

            }
        })
        
        ;
    
    
}


const setLoading:()=>void = ()=>{
    submitMessage.innerText = LOADING_MESSAGE;
    submitMessage.style.opacity ="0.6";
}


const setNoLoading:()=>void = ()=>{
    submitMessage.innerText = NOT_LOADING_MESSAGE;
    submitMessage.style.opacity ="1";
}


const resetFields:()=>void=()=>{
    submitMessageName.value = "";
    submitMessageEmail.value ="";
    submitMessageSubject.value ="";
    submitMessageMessage.value ="";
}