const v=document.querySelector(".header-nav"),L=s=>{if(s==="uk"){const t=`
     <ul class="header-nav-container">
        <li class="header-nav-item">
          <a href="#hero" class="header-nav-link">Головна</a>
        </li>
        <li class="header-nav-item">
          <a href="#about" class="header-nav-link">Про мене</a>
        </li>
        <li class="header-nav-item">
          <a href="#projects" class="header-nav-link">Роботи</a>
        </li>
        <li class="header-nav-item">
          <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link">Моє резюме</a>
        </li>
      </ul>
      <button class="menu" id="open"><i class="fa-solid fa-bars"></i></button>
      
      <div class="menu-list-container" id="menu">
        <button class="close" id="close"><i class="fa-sharp fa-regular fa-circle-xmark"></i></button>
     <ul >
      <li class="header-nav-item">
        <a href="#hero" class="header-nav-link header-nav-link--mobile">Головна</a>
      </li>
      <li class="header-nav-item">
        <a href="#about" class="header-nav-link header-nav-link--mobile">Про мене</a>
      </li>
      <li class="header-nav-item">
        <a href="#projects" class="header-nav-link header-nav-link--mobile">Роботи</a>
      </li>
      <li class="header-nav-item">
        <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link header-nav-link--mobile">Моє резюме</a>
      </li>
     </ul>
    </div>
    `;v.innerHTML="",v.insertAdjacentHTML("afterbegin",t)}else{const t=`
     <ul class="header-nav-container">
        <li class="header-nav-item">
          <a href="#hero" class="header-nav-link">Home</a>
        </li>
        <li class="header-nav-item">
          <a href="#about" class="header-nav-link">About me</a>
        </li>
        <li class="header-nav-item">
          <a href="#projects" class="header-nav-link">My works</a>
        </li>
        <li class="header-nav-item">
          <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link">My resume</a>
        </li>
      </ul>
      <button class="menu" id="open"><i class="fa-solid fa-bars"></i></button>
      
      <div class="menu-list-container" id="menu">
        <button class="close" id="close"><i class="fa-sharp fa-regular fa-circle-xmark"></i></button>
     <ul >
      <li class="header-nav-item">
        <a href="#hero" class="header-nav-link header-nav-link--mobile">Home</a>
      </li>
      <li class="header-nav-item">
        <a href="#about" class="header-nav-link header-nav-link--mobile">About me</a>
      </li>
      <li class="header-nav-item">
        <a href="#projects" class="header-nav-link header-nav-link--mobile">My works</a>
      </li>
      <li class="header-nav-item">
        <a href="https://drive.google.com/file/d/1L-QE-UTUXtyNDxPVWqpRRzR2Ahl-wVCY/view?usp=sharing" target="blank" class="header-nav-link header-nav-link--mobile">My resume</a>
      </li>
     </ul>
    </div>
    `;v.innerHTML="",v.insertAdjacentHTML("afterbegin",t)}},b=document.querySelector(".title"),E=s=>{if(s==="uk"){const t=' <h4 class="technology-title">Мої навики</h4>';b.innerHTML="",b.insertAdjacentHTML("afterbegin",t)}else{const t=' <h4 class="technology-title">My skills</h4>';b.innerHTML="",b.insertAdjacentHTML("afterbegin",t)}},y=document.querySelector(".about-content"),M=s=>{if(s==="uk"){const t=`
        <h4 class="about-title">Про мене</h4>
          <p class="text">З 2022 року працюю у сфері веб-розробки.
          Працював над різноманітними проектами як в команді так і самостійно.
          Проект яким я пишаюся - це «EstimateApp». Веб-застосунок, створений за допомогою стеку MERN (MongoDB, Express, React.js, Node.js). Застосунок має практичне значення, оскільки ним уже користуються деякі ремонтно-будівельні бригади.
          На сьогоднішній день, здебільшого я працюю на фрілансі. Займаюся версткою сайтів, створюю веб-застосунки з допомогою React та Node.js.</p>
        `;y.innerHTML="",y.insertAdjacentHTML("afterbegin",t)}else{const t=`
        <h4 class="about-title">About me</h4>
          <p class="text">Since 2022, I have been working in the field of web development. I worked on different projects, some were team projects and others were my personal projects. But the project I am proud of is EstimateApp. The application was created using MERN technology (MongoDB, Express, React.js, Node.js). The application has a practical application, as it is used by several repair and construction teams.
          Today I mostly work as a freelancer, developing websites, building web applications using React and Node.js.
         </p>
        `;y.innerHTML="",y.insertAdjacentHTML("afterbegin",t)}},k=document.querySelector(".order"),N=s=>{if(s==="uk"){const t=` 
         <h4 class="order-title">Замовити проект</h4>
    <div class="order-content">
    <form class="form">
     <div class="input-container">
        <input name="name" class="input" type="text" placeholder="Ваше ім'я">
        <input name="email" type="text" class="input" placeholder="Ваш e-mail">
     </div>
     <textarea name="message" class="textarea" placeholder="Повідомлення"></textarea>
     <button type="submit" class="button">Надіслати</button>
    </form>
    </div>
         `;k.innerHTML="",k.insertAdjacentHTML("afterbegin",t)}else{const t=`
         <h4 class="order-title">Order a project</h4>
    <div class="order-content">
    <form class="form">
     <div class="input-container">
        <input name="name" class="input" type="text" placeholder="Your name">
        <input name="email" type="text" class="input" placeholder="Your e-mail">
     </div>
     <textarea name="message" class="textarea" placeholder="Message"></textarea>
     <button type="submit" class="button">Send</button>
    </form>
    </div>
         `;k.innerHTML="",k.insertAdjacentHTML("afterbegin",t)}},w=document.querySelector(".contact-list"),x=s=>{if(s==="uk"){const t=` 
       <li>
        Тел:
        <a class="contact-link" href="tel:+380971428868">+38 (097)-14-28-868</a>
      </li>
      <li>
        Email:
        <a class="contact-link" href="mailto:vitaliy_piddubchak@ukr.net"
          >vitaliy_piddubchak@ukr.net</a
        >
      </li>
        `;w.innerHTML="",w.insertAdjacentHTML("afterbegin",t)}else{const t=`
         <li>
        Phone:
        <a class="contact-link" href="tel:+380971428868">+38 (097)-14-28-868</a>
      </li>
      <li>
        Email:
        <a class="contact-link" href="mailto:vitaliy_piddubchak@ukr.net"
          >vitaliy_piddubchak@ukr.net</a
        >
      </li>
        `;w.innerHTML="",w.insertAdjacentHTML("afterbegin",t)}},T=document.querySelector(".proj-title"),A=s=>{if(s==="uk"){const t=' <h4 class="projects-title">Мої Роботи</h4>';T.innerHTML="",T.insertAdjacentHTML("afterbegin",t)}else{const t='<h4 class="projects-title">My Works</h4>';T.innerHTML="",T.insertAdjacentHTML("afterbegin",t)}},R="https://backend-portfolio-e0lg.onrender.com/api/",_=async()=>{try{const s=await fetch(`${R}projects/uk`);if(s.ok)return await s.json();throw new Error("Failed to fetch data")}catch(s){throw console.error(s.message),s}},I=async()=>{try{const s=await fetch(`${R}projects/en`);if(s.ok)return await s.json();throw new Error("Failed to fetch data")}catch(s){throw console.error(s.message),s}};function P(s){fetch(`${R}orders/`,{method:"POST",headers:{"content-type":"application/json"},mode:"cors",body:JSON.stringify(s)}).then(t=>{if(t.ok)return t.json()}).then(t=>{}).catch(t=>Promise.reject(new Error("Nothing was found for your request")))}const j=document.querySelector(".projects-list"),V=async()=>{try{return await _()}catch(s){return console.error("Error fetching project data:",s.message),null}},W=async()=>{try{return await I()}catch(s){return console.error("Error fetching project data:",s.message),null}},H=async s=>{if(s==="uk"){const a=(await V()).map(({avatar:h,titleUk:r,descriptionUk:u,technologies:e,gitLink:n,pageLink:l})=>` 
          <li class="project-container">
        <div class="project-item">
        <div class="front">
            <h5 class="project-title">${r}</h5>
            <img src="${h}" alt="">
        </div>
        <div class="back">
            <div class="content">
            <p class="description"><span>Опис:</span>${u}</p>
            <p class="technology"><span>Використані технології:</span>${e}</p>
            <div class="icons">
            <a href="${n}" target="_blank" class="git icon"><img alt="Github Generic Flat icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" src="https://cdn-icons-png.freepik.com/512/2504/2504911.png?ga=GA1.1.731316322.1722436473" style="color: transparent;"></a>
            <a href="${l}" target="_blank" class="page icon"><img alt="File Juicy Fish Outline icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" style="color:transparent" src="https://cdn-icons-png.freepik.com/512/3826/3826214.png?ga=GA1.1.731316322.1722436473"></a>
        </div>
        </div>
        </div>
    </li>
        `).join("");j.innerHTML="",j.insertAdjacentHTML("afterbegin",a)}else{const a=(await W()).map(({avatar:h,titleEn:r,descriptionEn:u,technologies:e,gitLink:n,pageLink:l})=>` 
          <li class="project-container">
        <div class="project-item">
        <div class="front">
            <h5 class="project-title">${r}</h5>
            <img src="${h}" alt="">
        </div>
        <div class="back">
            <div class="content">
            <p class="description"><span>Description:</span>${u}</p>
            <p class="technology"><span>Technologies:</span>${e}</p>
            <div class="icons">
            <a href="${n}" target="_blank" class="git icon"><img alt="Github Generic Flat icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" src="https://cdn-icons-png.freepik.com/512/2504/2504911.png?ga=GA1.1.731316322.1722436473" style="color: transparent;"></a>
            <a href="${l}" target="_blank" class="page icon"><img alt="File Juicy Fish Outline icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="_e0usu53" style="color:transparent" src="https://cdn-icons-png.freepik.com/512/3826/3826214.png?ga=GA1.1.731316322.1722436473"></a>
        </div>
        </div>
        </div>
    </li>
        `).join("");j.innerHTML="",j.insertAdjacentHTML("afterbegin",a)}},C=document.getElementById("toggle-button"),d=localStorage.getItem("language");d||(L("uk"),E("uk"),M(d),A("uk"),(async()=>H("uk"))(),N("uk"),x("uk"));d&&(d==="en"?C.checked=!0:C.checked=!1,L(d),E(d),M(d),A(d),(async()=>H(d))(),N(d),x(d));const q=async()=>{const s=C.checked;localStorage.setItem("language",s?"en":"uk");const t=localStorage.getItem("language");t==="en"?(L(t),E(t),M(t),A(t),H(t),N(t),x(t)):(L(t),E(t),M(t),A(t),H(t),N(t),x(t),console.log("uk")),location.reload(!0)};C.addEventListener("change",q);const z=document.getElementById("open"),S=document.getElementById("menu"),B=document.getElementById("close");S.classList.add("toggle-menu");const $=()=>{S.classList.toggle("toggle-menu")};z.addEventListener("click",$);B.addEventListener("click",$);var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var D={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(s){(function(t,a){s.exports?s.exports=a():t.Toastify=a()})(U,function(t){var a=function(e){return new a.lib.init(e)},h="1.12.0";a.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},a.lib=a.prototype={toastify:h,constructor:a,init:function(e){return e||(e={}),this.options={},this.toastElement=null,this.options.text=e.text||a.defaults.text,this.options.node=e.node||a.defaults.node,this.options.duration=e.duration===0?0:e.duration||a.defaults.duration,this.options.selector=e.selector||a.defaults.selector,this.options.callback=e.callback||a.defaults.callback,this.options.destination=e.destination||a.defaults.destination,this.options.newWindow=e.newWindow||a.defaults.newWindow,this.options.close=e.close||a.defaults.close,this.options.gravity=e.gravity==="bottom"?"toastify-bottom":a.defaults.gravity,this.options.positionLeft=e.positionLeft||a.defaults.positionLeft,this.options.position=e.position||a.defaults.position,this.options.backgroundColor=e.backgroundColor||a.defaults.backgroundColor,this.options.avatar=e.avatar||a.defaults.avatar,this.options.className=e.className||a.defaults.className,this.options.stopOnFocus=e.stopOnFocus===void 0?a.defaults.stopOnFocus:e.stopOnFocus,this.options.onClick=e.onClick||a.defaults.onClick,this.options.offset=e.offset||a.defaults.offset,this.options.escapeMarkup=e.escapeMarkup!==void 0?e.escapeMarkup:a.defaults.escapeMarkup,this.options.ariaLive=e.ariaLive||a.defaults.ariaLive,this.options.style=e.style||a.defaults.style,e.backgroundColor&&(this.options.style.background=e.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var e=document.createElement("div");e.className="toastify on "+this.options.className,this.options.position?e.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(e.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):e.className+=" toastify-right",e.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var n in this.options.style)e.style[n]=this.options.style[n];if(this.options.ariaLive&&e.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else if(this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?e.appendChild(l):e.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var o=document.createElement("button");o.type="button",o.setAttribute("aria-label","Close"),o.className="toast-close",o.innerHTML="&#10006;",o.addEventListener("click",(function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var i=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&i>360?e.insertAdjacentElement("afterbegin",o):e.appendChild(o)}if(this.options.stopOnFocus&&this.options.duration>0){var c=this;e.addEventListener("mouseover",function(m){window.clearTimeout(e.timeOutValue)}),e.addEventListener("mouseleave",function(){e.timeOutValue=window.setTimeout(function(){c.removeElement(e)},c.options.duration)})}if(typeof this.options.destination<"u"&&e.addEventListener("click",(function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&e.addEventListener("click",(function(m){m.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var p=r("x",this.options),f=r("y",this.options),O=this.options.position=="left"?p:"-"+p,F=this.options.gravity=="toastify-top"?f:"-"+f;e.style.transform="translate("+O+","+F+")"}return e},showToast:function(){this.toastElement=this.buildToast();var e;if(typeof this.options.selector=="string"?e=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?e=this.options.selector:e=document.body,!e)throw"Root element is not defined";var n=a.defaults.oldestFirst?e.firstChild:e.lastChild;return e.insertBefore(this.toastElement,n),a.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(e){e.className=e.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),e.parentNode&&e.parentNode.removeChild(e),this.options.callback.call(e),a.reposition()}).bind(this),400)}},a.reposition=function(){for(var e={top:15,bottom:15},n={top:15,bottom:15},l={top:15,bottom:15},o=document.getElementsByClassName("toastify"),i,c=0;c<o.length;c++){u(o[c],"toastify-top")===!0?i="toastify-top":i="toastify-bottom";var p=o[c].offsetHeight;i=i.substr(9,i.length-1);var f=15,O=window.innerWidth>0?window.innerWidth:screen.width;O<=360?(o[c].style[i]=l[i]+"px",l[i]+=p+f):u(o[c],"toastify-left")===!0?(o[c].style[i]=e[i]+"px",e[i]+=p+f):(o[c].style[i]=n[i]+"px",n[i]+=p+f)}return this};function r(e,n){return n.offset[e]?isNaN(n.offset[e])?n.offset[e]:n.offset[e]+"px":"0px"}function u(e,n){return!e||typeof n!="string"?!1:!!(e.className&&e.className.trim().split(/\s+/gi).indexOf(n)>-1)}return a.lib.init.prototype=a.lib,a})})(D);var Y=D.exports;const g=G(Y),Q=document.querySelector(".form");Q.addEventListener("submit",X);async function X(s){s.preventDefault();const{elements:{name:t,email:a,message:h}}=s.currentTarget,r={name:t.value,email:a.value,message:h.value},u=localStorage.getItem("language");if(r.email===""||r.name===""||r.message===""){if(!u){g({text:"Усі поля мають бути заповнені!",className:"info",style:{background:"red"}}).showToast();return}if(u==="uk"){g({text:"Усі поля мають бути заповнені!",className:"info",style:{background:"red"}}).showToast();return}else{g({text:"All fields must be filled!",className:"info",style:{background:"red"}}).showToast();return}}await P(r),u==="uk"?(g({text:"Дякуємо за Ваше замовлення!",className:"info",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast(),s.currentTarget.reset()):(g({text:"Thank you for your order!",className:"info",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast(),s.currentTarget.reset())}
