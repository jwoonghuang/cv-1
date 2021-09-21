let html = document.querySelector("#html")
let style = document.querySelector("#style")
let word = `
/*Hi
*我是Jwoong
*这是我的一个小demo
*我将制作一个太极图
*请看屏幕右边
*首先创建一个div
*将div变成圆
*/
#div{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*太极图由阴阳组成*/
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
再加上两个球
*/
#div::before{
    border: 1px solid red;
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border: none;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div::after{
    border: 1px solid red;
    width: 100px;
    height: 100px;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border: none;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
//word = word.replace(/\n/g,"<br>")
let word2 = ""
let n = 0
let step = () => {
    setTimeout(()=>{
        if (word[n] === '\n'){        //如果是回车就不照搬，加<br>;如果不是就照搬
            word2 += "<br>" ;
        }else if (word[n] === ' '){
            word2 += '&nbsp' ;
        }else {
            word2 += word[n] ;
        }
        html.innerHTML = word2;
        style.innerHTML = word.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999)
        if (n < word.length - 1){    //如果n不是最后一个，就继续
            n += 1;
            step();
        }
    },50);
}
step();

