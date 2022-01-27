// document.getElementById('demo').setAttribute("class","dad")
// document.body.append();

// document.getElementById('demo1').setAttribute("class","mom")
// document.body.append();


// function(){
// var x = document.createElement("input");
// x.setAttribute("type","number");
// x.setAttribute("placeholder","0");
// x.setAttribute("class","inp")
// document.body.append(x);
// }

const div1 = document.createElement('div')
div1.className = "dad";
document.body.append(div1);

const div3= document.createElement('div')
div3.className = "mom"
div1.appendChild(div3)

const div2 = document.createElement('form')
div2.setAttribute("id","output-calci");
div3.appendChild(div2)
  
const inp = document.createElement('input')
inp.setAttribute("id","output-calci")
inp.setAttribute("type","text");
inp.setAttribute("placeholder",'0')
div2.appendChild(inp);

const but1 = document.createElement('button')
document.getElementById("output-calci").onclick = clear();
but1.innerText ="C";
but1.className = "b1"
div2.appendChild(but1);

const but2 = document.createElement('button')
but2.innerHTML ="←";
but2.className = "b1"
but2.onclick = "del()"
div2.appendChild(but2);


const but3 = document.createElement('button')
document.getElementById("output-calci").onclick = "display('.')";
but3.innerHTML =".";
but3.className = "b1"
div2.appendChild(but3);

const but4 = document.createElement('button')
but4.innerHTML ="x";
but4.className = "b1"
div2.appendChild(but4);

const e = document.createElement('button')
e.innerHTML ="7";
e.className = "b1"
div2.appendChild(e)

const f = document.createElement('button')
f.innerHTML ="8";
f.className = "b1"
div2.appendChild(f)

const g = document.createElement('button')
g.onclick = 
g.innerText ="9";
g.className = "b1"
div2.appendChild(g)

const h = document.createElement('button')
h.innerHTML ="/";
h.className = "b1"
div2.appendChild(h)

const i = document.createElement('button')
i.innerHTML ="4";
i.className = "b1"
div2.appendChild(i)

const j = document.createElement('button')
j.innerHTML ="5";
j.className = "b1"
div2.appendChild(j)

const k = document.createElement('button')
k.innerHTML ="6";
k.className = "b1"
div2.appendChild(k)

const l = document.createElement('button')
l.innerHTML ="-";
l.className = "b1"
div2.appendChild(l);

const m = document.createElement('button')
m.innerHTML ="1";
m.className = "b1"
div2.appendChild(m);

const n = document.createElement('button')
n.innerText ="2";
n.className = "b1"
div2.appendChild(n);

const o = document.createElement('button')
document.getElementById("output-calci").addEventListener("click", display('3'));
// o.innerHTML ="3";
o.className = "b1"
div2.appendChild(o);

const p = document.createElement('button')
p.innerHTML ="+";
p.className = "b1"
div2.appendChild(p);

const q = document.createElement('button')
q.innerHTML ="0";
q.className = "b1"
div2.appendChild(q);

const r = document.createElement('button')
r.innerHTML ="00";
r.className = "b1"
div2.appendChild(r);

const s = document.createElement('button')
s.innerHTML ="=";
s.className = "b1 eqaul-button"
div2.appendChild(s);
  








let outputView = document.getElementById("output-calci");
function display(num){
    outputView.value += num; 
}
function equalto(){
    try{
        outputView.value = eval(outputView.value);
    }
    catch(eror){
        alert("Only numbers are allowed")
    }
}
function Clear(){
    outputView.value = "";
}
function del(){
    outputView.value = outputView.value.slice(0,-1);
}