(this.webpackJsonpMinionsBuyer=this.webpackJsonpMinionsBuyer||[]).push([[0],{86:function(n,e,t){"use strict";t.r(e);var c=t(2),a=t(1),r=t(24),o=t.n(r),i=t(3),s=t(13),u=t(4),d=t(31),p=t(9),l=t.n(p),b=t(16),j=Object(a.createContext)(),h=t(5),x=t(6);function f(){var n=Object(h.a)(["\n    width: 40vw;\n    height: 57vh;\n    background-color: #3888c2;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    h1, a {\n        font-family: 'Righteous', cursive;\n        color: #fae52a;\n    }\n\n    h1 {\n        font-size: 22px;\n        margin-top: -20;\n        padding-bottom: 20px;\n    }\n\n    a {\n        padding-top: 10px;\n        cursor: pointer;\n    }\n\n    input, button {\n        width: 90%;\n        border: none;\n        border-radius: 3px;\n        padding: 13px 5px;\n        outline-style: none;\n        color: #3888c2;\n        margin: 5px 0;\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    input {\n        text-align: center;\n        background-color: #f7f4b2;\n\n        ::placeholder {\n            color: #7ba9d1;\n        }\n    }\n\n    button {\n        margin-top: 20px;\n        background-color: #fae52a;\n        cursor: pointer;\n    }\n\n    button:hover {\n        background-color: #dbd437;\n    }\n\n    @media(max-width: 650px) {\n        margin-top: 30%;\n        width: 100vw;\n        height: 70vh;\n    }\n"]);return f=function(){return n},n}function g(){var n=Object(h.a)(["\n    display: flex;\n    height: 80vh;\n    justify-content: center;\n    align-items: center;\n\n    img {\n        width: 40vw;\n        height: 57vh;\n    }\n\n    @media(max-width: 650px) {\n        img {\n            margin-top: 30%;\n            width: 130vw;\n            height: 70vh;\n        }\n    }\n"]);return g=function(){return n},n}var O=x.a.div(g()),m=x.a.form(f());function v(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(""),p=Object(i.a)(o,2),h=p[0],x=p[1],f=Object(a.useState)(!1),g=Object(i.a)(f,2),v=g[0],w=g[1],y=Object(a.useContext)(j),S=y.session,z=y.setSession,k=Object(a.useState)(null),C=Object(i.a)(k,2),I=C[0],F=C[1],P=Object(u.f)();return Object(a.useEffect)((function(){t.length<=3&&h.length<=3||l.a.get("https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/users").then((function(n){F(n.data)}))}),[t,h]),Object(c.jsx)(O,{children:v?Object(c.jsx)("img",{src:"https://cdn.dribbble.com/users/104417/screenshots/2133269/loadinggram_14_minions_motvion.gif"}):Object(c.jsxs)(m,{onSubmit:function(n){if(n.preventDefault(),""!==t&&""!==h){var e=I.find((function(n){return n.email===t}));if(!e)return alert("current user is not registered");w(!0);var c={email:t,password:h,userId:e.userId},a=l.a.post("https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/sign-in",c);a.then((function(n){var e=n.data,t=e.userId,c=e.email,a=e.token;z(Object(d.a)(Object(d.a)({},S),{},{userId:t,email:c,token:a})),P.push("/shop-page");var r=JSON.stringify({userId:t,email:c,token:a});localStorage.data=r})),a.catch((function(n){alert(n),w(!1)}))}else alert("Fill in all the filds")},children:[Object(c.jsx)("h1",{children:"Sign in if you have an account"}),Object(c.jsx)(b.DebounceInput,{type:"email",minLength:3,debounceTimeout:300,onChange:function(n){return r(n.target.value)},value:t,placeholder:"e-mail"}),Object(c.jsx)(b.DebounceInput,{type:"password",minLength:3,debounceTimeout:300,onChange:function(n){return x(n.target.value)},value:h,placeholder:"password"}),Object(c.jsx)("button",{type:"submit",children:"Log in"}),Object(c.jsx)(s.b,{to:"/sign-up",children:"create account"})]})})}function w(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(""),d=Object(i.a)(o,2),p=d[0],b=d[1],j=Object(a.useState)(""),h=Object(i.a)(j,2),x=h[0],f=h[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),w=v[0],y=v[1],S=Object(a.useState)(!1),z=Object(i.a)(S,2),k=z[0],C=z[1],I=Object(u.f)();return Object(c.jsx)(O,{children:k?Object(c.jsx)("img",{src:"https://cdn.dribbble.com/users/104417/screenshots/2133269/loadinggram_14_minions_motvion.gif"}):Object(c.jsxs)(m,{onSubmit:function(n){if(n.preventDefault(),""!==t&&""!==x)if(x===w){C(!0);var e={email:t,username:p,password:x,passwordConfirmation:w},c=l.a.post("https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/users",e);c.then((function(){I.push("/")})),c.catch((function(){alert("email cadastrado j\xe1 est\xe1 em uso"),C(!1)}))}else alert("Passwords dont match");else alert("Fill in all the filds")},children:[Object(c.jsx)("h1",{children:"Let's create an account"}),Object(c.jsx)("input",{type:"email",onChange:function(n){return r(n.target.value)},value:t,placeholder:"e-mail"}),Object(c.jsx)("input",{type:"text",onChange:function(n){return b(n.target.value)},value:p,placeholder:"username"}),Object(c.jsx)("input",{type:"password",onChange:function(n){return f(n.target.value)},value:x,placeholder:"password"}),Object(c.jsx)("input",{type:"password",onChange:function(n){return y(n.target.value)},value:w,placeholder:"confirm your password"}),Object(c.jsx)("button",{type:"submit",children:"Sign Up"}),Object(c.jsx)(s.b,{to:"/",children:"go back to login page"})]})})}var y=t(30),S=t(28);function z(){var n=Object(h.a)(["\n    position: fixed;\n    right: 0px;\n    top: ",";\n    background-color: #3888c2;\n    border-radius: 0 0 0 5px;\n    z-index: 1;\n    transition: top .5s ease-in-out;\n    padding: 10px 20px;\n\n    a {\n        display: block;\n        color: #fae52a;\n        padding-top: 8px;\n        cursor: pointer;\n    }\n"]);return z=function(){return n},n}function k(){var n=Object(h.a)(["\n    width: 100vw;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: #3888c2;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    z-index: 10;\n\n    h1 {\n        font-size: 32px;\n        color: #fae52a;\n    }\n\n    svg {\n        font-size: 32px;\n        color: #fae52a;\n        margin-right: 20px;\n    }\n\n    @media(max-width: 600px) {\n        svg {\n            margin-right: 8px;\n        }\n    }\n"]);return k=function(){return n},n}var C=x.a.header(k()),I=x.a.nav(z(),(function(n){return n.clicked?"65px":"0px"})),F=t(27),P=t.n(F);function L(){var n=Object(h.a)(["\n    width: 50%;\n    margin: 0 25%;\n\n    @media (max-width: 600px) {\n        width: 60vw;\n    }\n"]);return L=function(){return n},n}function D(){var n=Object(h.a)(["\n    width: 70vw;\n    height: 380px;\n    background-color: #3888c2;\n    color: #f7f4b2;\n    text-align: center;\n    border-radius: 20px;\n    overflow-y: scroll;\n\n    h1 {\n        font-size: 40px;\n        font-weight: bold;\n        padding: 30px 20px;\n    }\n\n    p {\n        font-size: 22px;\n        font-weight: bold;\n        padding: 10px 25%;\n    }\n\n    @media(max-width: 600px) {\n        width: 90vw;\n        height: 38vh;\n        \n         button {\n             width: 30%;\n         }\n    }\n"]);return D=function(){return n},n}var E={content:{top:"55%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#2f517a",borderRadius:"30px",fontSize:"40px",fontWeight:"bold",padding:"30px 20px",color:"#FFF"}},_=x.a.div(D()),A=x.a.img(L());function R(){var n=Object(a.useState)(!1),e=Object(i.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(!0),s=Object(i.a)(o,2),u=s[0],d=s[1],p=Object(a.useContext)(j).session,b=p.token,h=p.userId,x=Object(a.useState)([]),f=Object(i.a)(x,2),g=f[0],O=f[1],m=Object(a.useState)(0),v=Object(i.a)(m,2),w=v[0],y=v[1];return Object(a.useEffect)((function(){h&&l.a.get("https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/products/".concat(h),{headers:{Authorization:"bearer ".concat(b)}}).then((function(n){O(n.data.products),d(!1),y(n.data.totalPrice)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{onClick:function(){return r(!0)},children:"Last buy"}),Object(c.jsx)(P.a,{isOpen:t,onRequestClose:function(){return r(!1)},style:E,contentLabel:"purchase history",children:Object(c.jsxs)(_,{children:[Object(c.jsx)("h1",{children:"Last purchase"}),u?Object(c.jsx)(A,{src:"https://i.gifer.com/GW5A.gif"}):0!==g.length?Object(c.jsxs)(c.Fragment,{children:[g.map((function(n,e){return Object(c.jsxs)("p",{children:[n.title," ",n.price.toFixed(2).replace(".",",")]},(n.productId+e)*(3*e))})),Object(c.jsxs)("p",{children:["total: ",w.toFixed(2).replace(".",",")]})]}):Object(c.jsx)("p",{children:"Your purchases are still empty"})]})})]})}function T(){var n=Object(a.useState)(!1),e=Object(i.a)(n,2),t=e[0],r=e[1],o=Object(a.useContext)(j).session.userId,s=Object(u.f)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(C,{children:[Object(c.jsx)("h1",{children:"Minions Shop"}),t?Object(c.jsx)(S.a,{onClick:function(){return r(!t)}}):Object(c.jsx)(S.b,{onClick:function(){return r(!t)}})]}),Object(c.jsxs)(I,{clicked:t,children:[Object(c.jsx)("a",{onClick:function(){var n=l.a.delete("https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/sign-out/".concat(o));n.then((function(){s.push("/")})),n.catch((function(n){alert(n)}))},children:"Logout"}),Object(c.jsx)(R,{})]})]})}P.a.setAppElement(document.getElementById("root"));var B=t(29);function J(){var n=Object(h.a)(["\n    height: 300px;\n    width: 15%;\n    border: 2px solid #3888c2;\n    border-radius: 10px;\n    overflow: hidden;\n    margin: 10px 2.5%;\n    position: relative;\n\n    img {\n        width: 100%;\n        height: 65%;\n    }\n\n    strong, p {\n        padding: 5px;\n        color: #3888c2;\n        font-size: 12px;\n    }\n\n    div {\n        display: flex;\n        justify-content: space-between;\n        \n        p {\n            position: absolute;\n            bottom: 5px;\n            left: 47%;\n        }\n    }\n\n    svg {\n        font-size: 25px;\n        color: #3888c2;\n        cursor: pointer;\n\n        &.add {\n            position: absolute;\n            bottom: 5px;\n            left: 5px;\n        }\n\n        &.remove {\n            position: absolute;\n            color: #d1c73f;\n            right: 5px;\n            bottom: 5px;\n        }\n    }\n\n    @media(max-width: 650px) {\n        width: 95%;\n\n        img {\n            height: 72%;\n        }\n    }\n"]);return J=function(){return n},n}function N(n){var e=n.product,t=n.cartController,r=e.title,o=e.description,s=e.price,u=e.productUrl,d=Object(a.useState)(0),p=Object(i.a)(d,2),l=p[0],b=p[1];return Object(c.jsxs)(q,{children:[Object(c.jsx)("img",{src:u}),Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:r}),Object(c.jsxs)("strong",{children:["R$ ",s]})]}),Object(c.jsx)("p",{children:o}),Object(c.jsxs)("div",{children:[Object(c.jsx)(B.a,{className:"add",onClick:function(){b(l+1),t(e,"add")}}),Object(c.jsx)("p",{children:l>0?l:""}),Object(c.jsx)(B.b,{className:"remove",onClick:function(){(l>1||1===l)&&b(l-1),t(e,"remove")}})]})]})}var q=x.a.div(J()),M=t(49);function U(){var n=Object(h.a)(["\n    width: 100vw;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    background-color: #3888c2;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 5%;\n    height: 60px;\n    z-index: 10;\n\n    span {\n        display: flex;\n    }\n\n    svg {\n        color: #fae52a;\n        font-size: 45px;\n        cursor: pointer;\n    }\n\n    h1 {\n        font-size: 32px;\n        color: #fae52a;\n        padding-left: 30px;\n        margin-top: 5px;\n        cursor: pointer;\n    }\n\n    strong {\n        color: #fae52a;\n        padding: 10px 0;\n    }\n\n    @media(max-width: 650px) {\n        strong {\n            margin-top: 4px;\n        }\n    }\n"]);return U=function(){return n},n}var W=x.a.header(U());function G(n){var e=n.selectedProducts,t=0;return e.forEach((function(n){t+=n.price})),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(W,{children:[Object(c.jsxs)("span",{children:[Object(c.jsx)(s.b,{to:{pathname:"/checkout",state:{selectedProducts:e,totalPrice:t}},children:Object(c.jsx)(M.a,{})}),Object(c.jsx)(s.b,{to:{pathname:"/checkout",state:{selectedProducts:e,totalPrice:t}},children:Object(c.jsx)("h1",{children:"Checkout"})})]}),Object(c.jsx)("strong",{children:t.toFixed(2).replace(".",",")})]})})}function Y(){var n=Object(h.a)(["\n    padding: 130px 10% 100px 10%;\n    display: flex;\n    flex-wrap: wrap;\n\n    & > img {\n        width: 100%\n        margin-top: 50px;\n    }\n"]);return Y=function(){return n},n}var $=x.a.main(Y());function H(){var n=Object(a.useState)([]),e=Object(i.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),u=s[0],d=s[1];function p(n,e){if("add"===e)d([].concat(Object(y.a)(u),[n]));else{var t=u.indexOf(n);u.splice(t,1),d(Object(y.a)(u))}}return Object(a.useEffect)((function(){var n=l.a.get("https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/products");n.then((function(n){r(n.data)})),n.catch((function(){alert("something went wrong")}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)($,{children:0!==t.length?t.map((function(n){return Object(c.jsx)(N,{product:n,cartController:p},n.productId)})):Object(c.jsx)("img",{src:"https://i.gifer.com/GW5A.gif"})}),0!==u.length?Object(c.jsx)(G,{selectedProducts:u}):""]})}function K(){var n=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n\n    p {\n        margin: 5px 0;\n        font-size: 22px;\n        color: #3888c2;\n    }\n\n    @media(max-width: 600px) {\n        p {\n            margin: 10px 0;\n        }\n    }\n"]);return K=function(){return n},n}function Q(){var n=Object(h.a)(["\n    width: 100%;\n    padding: 20px;\n    border: 2px solid #3888c2;\n    border-radius: 10px;\n\n    form {\n        padding-top: 20px;\n\n        input, textarea, button {\n            width: 100%;\n            border: none;\n            border-radius: 3px;\n            padding: 13px 5px;\n            outline-style: none;\n            margin: 5px 0;\n            font-size: 16px;\n            font-weight: bold;\n            color: #665756;\n        }\n\n        textarea {\n            height: 120px;\n        }\n\n        button {\n            background-color: #3888c2;\n            color: #fae52a;\n        }\n    }\n"]);return Q=function(){return n},n}function V(){var n=Object(h.a)(["\n    padding: 120px 10% 10px 10%;\n"]);return V=function(){return n},n}var X=x.a.div(V()),Z=x.a.div(Q()),nn=x.a.div(K());function en(){var n=Object(u.g)().state,e=n.selectedProducts,t=n.totalPrice,r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],d=o[1],p=Object(a.useState)(""),h=Object(i.a)(p,2),x=h[0],f=h[1],g=Object(a.useContext)(j).session,O=g.token,m=g.email,v=g.userId,w=Object(u.f)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsx)(X,{children:Object(c.jsxs)(Z,{children:[e.map((function(n,e){return Object(c.jsxs)(nn,{children:[Object(c.jsx)("p",{children:e+1}),Object(c.jsx)("p",{children:n.title}),Object(c.jsx)("p",{children:n.price.toFixed(2).replace(".",",")})]},n.productId+5*e)})),Object(c.jsxs)(nn,{children:[Object(c.jsx)("p",{children:"Total"}),Object(c.jsx)("p",{children:t.toFixed(2).replace(".",",")})]}),Object(c.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),/^[0-9]{5}\-[0-9]{3}$/.test(s))if(""!==x){var c={userId:v,email:m,cep:s,address:x,totalPrice:t,products:e},a=l.a.post("https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/user/products",c,{headers:{Authorization:"bearer ".concat(O)}});a.then((function(){alert("success!"),w.push("/shop-page")})),a.catch((function(n){alert("".concat(n," - your request has failed please try again"))}))}else alert("fill in all the filds");else alert("invalid cep")},children:[Object(c.jsx)(b.DebounceInput,{type:"text",minLength:8,debounceTimeout:300,onChange:function(n){return d(n.target.value)},value:s,placeholder:"cep: 12345-678"}),Object(c.jsx)(b.DebounceInput,{type:"text",element:"textarea",minLength:5,debounceTimeout:400,onChange:function(n){return f(n.target.value)},value:x,placeholder:"address"}),Object(c.jsx)("button",{type:"submit",children:"BUY"})]})]})})]})}function tn(){var n=void 0!==localStorage.data?JSON.parse(localStorage.data):{},e=Object(a.useState)(n),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(c.jsx)(j.Provider,{value:{session:r,setSession:o},children:Object(c.jsx)(s.a,{children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/sign-up",component:w}),Object(c.jsx)(u.a,{path:"/checkout",component:en}),Object(c.jsx)(u.a,{path:"/shop-page",component:H}),Object(c.jsx)(u.a,{path:"/",component:v})]})})})}var cn=document.querySelector("#root");o.a.render(Object(c.jsx)(tn,{}),cn)}},[[86,1,2]]]);
//# sourceMappingURL=main.25e70f30.chunk.js.map