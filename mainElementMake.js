const root= document.getElementById('root');
//root children
const elementMaker ={
  tagName : "div",
  setAttriname : "class",
  setAttriValue : "",
  parent: root,
  text: "",

  maker: function() {
    const element = document.createElement(this.tagName);
    element.setAttribute(this.setAttriname, this.setAttriValue);
    element.textContent = this.text;
    this.parent.appendChild(element);
  },
  loopFunc: function(){
    for(let i= 0; i< 3; i++) {
      this.maker();
    }
  }
} 
//div 3개 만들기
elementMaker.loopFunc();
//button 만들기 
elementMaker.setAttriname = "id";
elementMaker.setAttriValue = "button"; 
elementMaker.maker();
