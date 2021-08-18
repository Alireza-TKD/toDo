const appender = event =>{
    let inp = document.getElementById('inpType');
    let val = document.createTextNode(inp.value);
    let holder = document.getElementById('holder');
    let mainComp = document.createElement('div');
    let btn = document.createElement('button');
    if(inp.value == ''){
        event.preventDefault();
    }else{
    //alert
    mainComp.classList.add('alert', 'alert-dismissible' , 'fade' , 'show');
    mainComp.setAttribute('role','alert');
    //button
    btn.classList.add('btn-close');
    btn.setAttribute('data-bs-dismiss','alert');
    //creating elements
    mainComp.appendChild(btn);
    mainComp.appendChild(val);
    holder.appendChild(mainComp);
    inp.value = ''
    }
}
//clock
const clock = () =>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let colHolder = document.getElementById('clock-holder');
    h = h<10 ? `0${h}` : h
    m = m<10 ? `0${m}` : m
    s = s<10 ? `0${s}` : s
    colHolder.innerHTML = `${h} : ${m} : ${s}` ;
}
setInterval(clock , 1000);

