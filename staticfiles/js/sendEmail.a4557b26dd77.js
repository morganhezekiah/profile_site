"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var submitMessage = document.getElementById("submitMessage");
const submitMessageName = document.getElementById("submitMessageName");
const submitMessageEmail = document.getElementById("submitMessageEmail");
const submitMessageSubject = document.getElementById("submitMessageSubject");
const submitMessageMessage = document.getElementById("submitMessageMessage");
const LOADING_MESSAGE = "Loading ...";
const NOT_LOADING_MESSAGE = "Send Message";
submitMessage.addEventListener("click", function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        setLoading();
        const submitMessageNameText = submitMessageName.value.trim();
        const submitMessageEmailText = submitMessageEmail.value.trim();
        const submitMessageSubjectText = submitMessageSubject.value;
        const submitMessageMessageText = submitMessageMessage.value;
        if (submitMessageNameText === "" || submitMessageEmailText === "" || submitMessageSubjectText === "" || submitMessageMessageText === "") {
            alert("Please enter all fields");
            setNoLoading();
        }
        else {
            var data = [submitMessageNameText, submitMessageEmailText, submitMessageSubjectText, submitMessageMessageText];
            yield handlesSendEmail(data);
            setNoLoading();
            resetFields();
        }
    });
});
const handlesSendEmail = (requestData) => __awaiter(void 0, void 0, void 0, function* () {
    var data = { "email": requestData[1], "name": requestData[0], "subject": requestData[2], "message": requestData[3] };
    var error = false;
    yield fetch("/", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        "body": JSON.stringify(data)
    })
        .then(res => {
        if (res.status > 299) {
            error = true;
        }
        return res.json();
    })
        .then((data) => {
        alert(data.message);
        if (error) {
        }
        else {
        }
    });
});
const setLoading = () => {
    submitMessage.innerText = LOADING_MESSAGE;
    submitMessage.style.opacity = "0.6";
};
const setNoLoading = () => {
    submitMessage.innerText = NOT_LOADING_MESSAGE;
    submitMessage.style.opacity = "1";
};
const resetFields = () => {
    submitMessageName.value = "";
    submitMessageEmail.value = "";
    submitMessageSubject.value = "";
    submitMessageMessage.value = "";
};
