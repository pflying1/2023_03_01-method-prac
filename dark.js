
    //root 스타일 
    root.style.position = "relative";
    root.style.width = "430px";
    root.style.height = "932px";
    root.style.backgroundColor = trainingData.color[0];

    //div1 스타일
    root.children[0].style.position = "absolute";
    root.children[0].style.width = "147px";
    root.children[0].style.height = "29px";
    root.children[0].style.left = "141px";
    root.children[0].style.top = "301px";
    root.children[0].style.fontFamily= "Inter";
    root.children[0].style.fontStyle = "normal";
    root.children[0].style.fontWeight = "400";
    root.children[0].style.fontSize = "24px";
    root.children[0].style.lineHeight = "29px";
    root.children[0].style.color = trainingData.color[1];
    root.children[0].textContent = trainingData.title;


    //div2 스타일
    root.children[1].style.position = "absolute";
    root.children[1].style.width = "199px";
    root.children[1].style.height = "2px";
    root.children[1].style.left = "115px";
    root.children[1].style.top = "340px";
    root.children[1].style.backgroundColor = trainingData.color[1];


    //div3 스타일
    root.children[2].style.position = "absolute";
    root.children[2].style.width = "295px";
    root.children[2].style.height = "186px";
    root.children[2].style.left = "67px";
    root.children[2].style.top = "364px";
    root.children[2].style.fontFamily = "Inter";
    root.children[2].style.fontStyle = "normal";
    root.children[2].style.fontWeight = "400";
    root.children[2].style.fontSize = "12px";
    root.children[2].style.lineHeight = "15px";
    root.children[2].style.textAlign = "justify";
    root.children[2].style.color = trainingData.color[1];
    root.children[2].textContent = trainingData.paragraph;


    //div4 스타일
    root.children[3].style.position = "absolute";
    root.children[3].style.width = "82px";
    root.children[3].style.height = "82px";
    root.children[3].style.left = "174px";
    root.children[3].style.top = "674px";
    root.children[3].style.backgroundColor = "#5A5A5A";
    root.children[3].style.borderRadius = "41px";
    root.children[3].style.backgroundColor = trainingData.color[1];