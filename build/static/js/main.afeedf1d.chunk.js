(this["webpackJsonpprojeto-provi"]=this["webpackJsonpprojeto-provi"]||[]).push([[0],{91:function(n,e,t){"use strict";t.r(e);var i,a,c,r,o,s,d,j,p,l,u,x,b,h,m,O,g,f=t(0),v=t.n(f),w=t(21),k=t.n(w),y=t(108),C=t(4),S=t(5),z=S.a.div(i||(i=Object(C.a)(["\nposition: fixed;\nz-index: 999;\ntop: 0;\nleft: 0;\nright: 0;\nheight: 30px;\npadding: 15px;\nbackground-color: black;\nwidth: auto;\n\nimg {\n\n    width: 100px;\n}\n\n"]))),R=t(1),_=function(){return Object(R.jsx)(z,{children:Object(R.jsx)("img",{src:"https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"})})},q=t(60),F=Object(q.a)({palette:{primary:{main:"#D30812",contrastText:"white"},text:{primary:"#FFFFFF"}}}),E=t(61),N=t(10),B=v.a.createContext(),I="https://api.themoviedb.org/3",M="0ba6f1aaeaf8edb3f44c4571d37daae3",A="https://cookenu-api.herokuapp.com",D=t(27),J=t.n(D),L=function(n,e){var t=Object(f.useState)(n),i=Object(N.a)(t,2),a=i[0],c=i[1];return Object(f.useEffect)((function(){J.a.get(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(n){c(n.data.results)})).catch((function(n){console.log(n),alert("Ocorreu um erro, tente novamente")}))}),[e]),a},P=function(n){var e=L([],"".concat(I,"/discover/tv?with_network=213&language=pt-BR&api_key=").concat(M)),t=L([],"".concat(I,"/discover/tv?with_network=213&language=pt-BR&api_key=").concat(M)),i=L([],"".concat(I,"/trending/all/week?language=pt-BR&api_key=").concat(M)),a=L([],"".concat(I,"/movie/top_rated?language=pt-BR&api_key=").concat(M)),c=Object(f.useState)(""),r=Object(N.a)(c,2),o=r[0],s=r[1],d=Object(f.useState)(""),j=Object(N.a)(d,2),p=j[0],l=j[1],u=Object(f.useState)([{name:"Bob",comment:"Adorei os titulos!!"}]),x=Object(N.a)(u,2),b=x[0],h=x[1],m={name:p,setName:l,comment:o,setComment:s,listComment:b},O={sendComment:function(){var n=[{name:p,comment:o}].concat(Object(E.a)(b));h(n),s(""),l("")}},g={coverMovie:e,originais:t,recomended:i,top:a};return Object(R.jsx)(B.Provider,{value:{state:m,setters:O,requests:g},children:n.children})},V=t(38),G=t(3),T=S.a.div(a||(a=Object(C.a)(["\ntext-align: center;\nmargin: 20vw;\n\nh1{\n    font-size: 45px;\n}\n"]))),H=function(){return Object(R.jsx)(T,{children:Object(R.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada :("})})},K=S.a.div(c||(c=Object(C.a)(["\nmargin: 5px;\n\n\nh2{\n    margin-left: 10px;\n    font-size: 2vw ;\n  \n}\n"]))),Q=S.a.div(r||(r=Object(C.a)(["\nbackground-size: cover;\nbackground-position: center;\nbackground-image: linear-gradient( to right, black 30% );\nwidth: 300px;\n\nimg{\n    margin: 0px;\n    padding: 0px;\n    width: 98vw;\n    opacity: 0.4;    \n}\n\n"]))),U=S.a.div(o||(o=Object(C.a)(["\ndisplay: inline-block;\nposition: relative;\nleft: 5px;\n"]))),W=S.a.div(s||(s=Object(C.a)(["\n\nimg {\n    width: 9.6vw;\n    transform: scale(0.9);\n    transition: ease 0.2s;\n    cursor: pointer;\n   \n}\n\nimg:hover {\n    transform: scale(1);\n}\n"]))),X=function(n){n.push("/")},Y=function(n){n.push("/movie")},Z=function(n){var e=Object(G.f)();return Object(R.jsx)(U,{children:Object(R.jsx)(W,{onClick:function(){return n.index.id,Y(e)},children:Object(R.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n.index.poster_path)})})})},$=function(n){var e=Object(G.f)();return Object(R.jsx)(U,{children:Object(R.jsx)(W,{onClick:function(){return n.index.id,Y(e)},children:Object(R.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n.index.poster_path)})})})},nn=function(n){var e=Object(G.f)();return Object(R.jsx)(U,{children:Object(R.jsx)(W,{onClick:function(){return n.index.id,Y(e)},children:Object(R.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n.index.poster_path)})})})},en=S.a.div(d||(d=Object(C.a)(["\nmargin-top: 50px;\npadding: 0px;\n"]))),tn=S.a.div(j||(j=Object(C.a)(["\nmargin: 0px;\npadding: 0px;\nwidth: 300px;\nposition: absolute;\ntop: 30vw;\nleft: 15px;\n\nh1 {\n    font-size: 3vw;\n}\n"]))),an=function(n){return Object(R.jsxs)(en,{children:[Object(R.jsx)(tn,{children:Object(R.jsx)("h1",{children:n.movieRandon&&n.movieRandon.name})}),n.movieRandon&&Object(R.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n.movieRandon.backdrop_path)})]})},cn=function(){var n=Object(G.f)();Object(f.useLayoutEffect)((function(){localStorage.getItem("token")||function(n){n.push("/login")}(n)}),[n])},rn=function(){cn();var n=Object(f.useContext)(B).requests,e=Math.floor(Math.random()*(n.coverMovie.length-1)),t=n.coverMovie[e],i=n.originais.map((function(n){return Object(R.jsx)(Z,{index:n},n.id)})),a=n.recomended.map((function(n){return Object(R.jsx)($,{index:n},n.id)})),c=n.top.map((function(n){return Object(R.jsx)(nn,{index:n},n.id)}));return Object(R.jsxs)(K,{children:[Object(R.jsx)(Q,{children:Object(R.jsx)(an,{movieRandon:t})}),Object(R.jsx)("h2",{children:"Originais Netflix"}),i,Object(R.jsx)("h2",{children:"Recomendados para Voc\xea"}),a,Object(R.jsx)("h2",{children:"Em Alta"}),c]})},on=t(109),sn=S.a.div(p||(p=Object(C.a)(["\nmargin-top: 75px;\ntext-align: center;\n\nh1 {\n    font-size: 30px;\n}\n\np {\n    font-size: 25px;\n    padding: 15px;\n}\n"]))),dn=S.a.div(l||(l=Object(C.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nwidth: 45vw;\nmargin: 5px auto;\npadding: 18px;\nbackground-color: #222;\nborder-radius: 8px;\ntext-align: center;\n\nh1 { \n   padding: 10px;\n   font-size: 2vw;\n\n}\n\ninput {\n    background-color: white;\n    border: 2px solid white;\n    border-radius: 5px;\n    width: 30vw;\n    padding: 15px;\n    margin: 15px;\n    transition: ease 0.2;\n}\n\ninput:hover{\n    border: solid 2px red;\n    border-radius: 5px;\n}\n"]))),jn=S.a.div(u||(u=Object(C.a)(["\ndisplay: flex;\njustify-content: space-around;\npadding: 10px;\nmargin: 10px;\n"]))),pn=S.a.div(x||(x=Object(C.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 45vw;\nmargin: 20px auto;\npadding: 18px;\nbackground-color: #222;\nborder-radius: 8px;\nborder-left: solid 3px red;\n\np {\n    padding: 5px;\n}\n"]))),ln=function(n){return Object(R.jsxs)(pn,{children:[Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Nome: "}),n.index.name]}),Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Coment\xe1rio: "}),n.index.comment]})]})},un=function(){cn();var n=Object(f.useContext)(B),e=n.state,t=n.setters,i=e.listComment.map((function(n){return Object(R.jsx)(ln,{index:n},n.name)})),a=Object(G.f)();return Object(R.jsxs)("div",{children:[Object(R.jsxs)(sn,{children:[Object(R.jsx)("h1",{children:"Gostou dos t\xedtulos?"}),Object(R.jsx)("p",{children:"Deixe um coment\xe1rio!"})]}),i,Object(R.jsxs)(dn,{children:[Object(R.jsx)("input",{placeholder:"Nome",onChange:function(n){e.setName(n.target.value)},value:e.name}),Object(R.jsx)("input",{placeholder:"Coment\xe1rio",onChange:function(n){e.setComment(n.target.value)},value:e.comment}),Object(R.jsx)(jn,{children:Object(R.jsx)(on.a,{onClick:t.sendComment,variant:"contained",color:"primary",children:"Enviar"})}),Object(R.jsx)(on.a,{onClick:function(){X(a)},variant:"contained",color:"primary",children:"Voltar"})]})]})},xn=S.a.div(b||(b=Object(C.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nwidth: 40vw;\nmargin: 100px auto;\npadding: 28px;\nbackground-color: #222;\nborder-radius: 8px;\ntext-align: center;\n\nh1 { \n   padding: 10px;\n   font-size: 30px;\n}\n\ninput {\n    background-color: white;\n    border: 2px solid white;\n    border-radius: 5px;\n    width: 30vw;\n    padding: 15px;\n    margin: 15px;\n\n}\n\ninput:hover{\n    border: solid 2px red;\n    border-radius: 5px;\n}\n"]))),bn=S.a.div(h||(h=Object(C.a)(["\npadding: 10px;\nmargin: 20px;\n"]))),hn=t(36),mn=t(40),On=function(n){var e=Object(f.useState)(n),t=Object(N.a)(e,2),i=t[0],a=t[1];return[i,function(n){var e=n.target,t=e.value,c=e.name;a(Object(mn.a)(Object(mn.a)({},i),{},Object(hn.a)({},c,t)))},function(){a(n)}]},gn=function(){var n=Object(G.f)();Object(f.useLayoutEffect)((function(){localStorage.getItem("token")&&X(n)}),[n])},fn=t(107),vn=function(){gn();var n=Object(G.f)(),e=On({name:"",email:"",password:""}),t=Object(N.a)(e,3),i=t[0],a=t[1],c=t[2],r=Object(f.useState)(!1),o=Object(N.a)(r,2),s=o[0],d=o[1];return Object(R.jsxs)(xn,{children:[Object(R.jsx)("h1",{children:"Realize o seu cadastro"}),Object(R.jsx)(bn,{children:Object(R.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(n,e,t,i){i(!0),J.a.post("".concat(A,"/user/signup"),n).then((function(n){localStorage.setItem("token",n.data.token),e(),X(t)})).catch((function(n){i(!1),alert(n.response.data.message)}))}(i,c,n,d)},children:[Object(R.jsx)("input",{placeholder:"Nome",name:"name",value:i.name,onChange:a,required:!0,type:"text"}),Object(R.jsx)("input",{placeholder:"E-mail",name:"email",value:i.email,onChange:a,required:!0,type:"email"}),Object(R.jsx)("input",{placeholder:"Senha",name:"password",value:i.password,onChange:a,required:!0,type:"password"}),Object(R.jsx)(on.a,{type:"submit",variant:"contained",color:"primary",children:s?Object(R.jsx)(fn.a,{color:"inherit",size:24}):Object(R.jsx)(R.Fragment,{children:"Cadastre-se"})})]})})]})},wn=S.a.div(m||(m=Object(C.a)(["\nmargin-top: 75px;\ntext-align: center;\n\nh1 {\n    font-size: 40px;\n}\n\np {\n    font-size: 25px;\n    padding: 15px;\n}\n"]))),kn=S.a.div(O||(O=Object(C.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nwidth: 40vw;\nmargin: 20px auto;\npadding: 28px;\nbackground-color: #222;\nborder-radius: 8px;\ntext-align: center;\n\nh1 { \n   padding: 10px;\n\n}\n\ninput {\n    background-color: white;\n    border: 2px solid white;\n    border-radius: 5px;\n    width: 30vw;\n    padding: 15px;\n    margin: 15px;\n\n}\n\ninput:hover{\n    border: solid 2px red;\n    border-radius: 5px;\n}\n"]))),yn=S.a.div(g||(g=Object(C.a)(["\npadding: 10px;\nmargin: 20px;\n"]))),Cn=function(){gn();var n=Object(G.f)(),e=On({email:"",password:""}),t=Object(N.a)(e,3),i=t[0],a=t[1],c=t[2],r=Object(f.useState)(!1),o=Object(N.a)(r,2),s=o[0],d=o[1];return Object(R.jsxs)("div",{children:[Object(R.jsxs)(wn,{children:[Object(R.jsx)("h1",{children:"Filmes, s\xe9ries e muito mais. Sem limites."}),Object(R.jsx)("p",{children:"Assista onde quiser. Cancele quando quiser."})]}),Object(R.jsxs)(kn,{children:[Object(R.jsx)("h1",{children:"Fa\xe7a login"}),Object(R.jsx)(yn,{children:Object(R.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(n,e,t,i){i(!0),J.a.post("".concat(A,"/user/login"),n).then((function(n){localStorage.setItem("token",n.data.token),e(),X(t),i()})).catch((function(n){i(!1),alert(n.response.data.message)}))}(i,c,n,d)},children:[Object(R.jsx)("input",{placeholder:"E-mail",name:"email",value:i.email,onChange:a,required:!0,type:"email"}),Object(R.jsx)("input",{placeholder:"Senha",name:"password",value:i.password,onChange:a,required:!0,type:"password"}),Object(R.jsx)(on.a,{type:"submit",variant:"contained",color:"primary",children:s?Object(R.jsx)(fn.a,{color:"inherit",size:24}):Object(R.jsx)(R.Fragment,{children:"Entrar"})})]})}),Object(R.jsx)(on.a,{onClick:function(){return function(n){n.push("/signup")}(n)},variant:"text",color:"primary",children:"N\xe3o possui conta? Cadastre-se!"})]})]})},Sn=function(){return Object(R.jsx)(V.a,{children:Object(R.jsxs)(G.c,{children:[Object(R.jsx)(G.a,{exact:!0,path:"/",children:Object(R.jsx)(rn,{})}),Object(R.jsx)(G.a,{exact:!0,path:"/signup",children:Object(R.jsx)(vn,{})}),Object(R.jsx)(G.a,{exact:!0,path:"/login",children:Object(R.jsx)(Cn,{})}),Object(R.jsx)(G.a,{exact:!0,path:"/movie",children:Object(R.jsx)(un,{})}),Object(R.jsx)(G.a,{children:Object(R.jsx)(H,{})})]})})},zn=function(){return Object(R.jsx)(y.a,{theme:F,children:Object(R.jsxs)(P,{children:[Object(R.jsx)(_,{}),Object(R.jsx)(Sn,{})]})})};k.a.render(Object(R.jsx)(v.a.StrictMode,{children:Object(R.jsx)(zn,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.afeedf1d.chunk.js.map