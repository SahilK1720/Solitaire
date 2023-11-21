function submit(){
    const form = document.getElementById("myForm");

    const username = document.getElementById("fname").value;
    const nickname = document.getElementById("nname").value;

    var userDetails = {
        username: username,
        nickname: nickname
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));    
    
    window.location.href = "../intructionPage/instruction.html";
};


