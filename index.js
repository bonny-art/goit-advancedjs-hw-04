import{i as l,a as d,S as p}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const n={form:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};l.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear"});const f="40358053-aa77a52d7b78d629a29aff12d",h="https://pixabay.com/api";d.defaults.baseURL=h;d.defaults.params={key:f,image_type:"photo",orientation:"horizontal",safesearch:"true"};const y=async a=>{const t={q:a},{data:r}=await d.get("/",{params:t});return console.log("🚀 ~ data:",r),r},v=new p(".gallery-link",{captionsData:"alt",captionDelay:250}),w=a=>{const t=({largeImageURL:o,webformatURL:e,tags:s,likes:i,views:u,comments:m,downloads:g})=>`
      <li class="card card-set-item">
            <a href="${o}" class="gallery-link" href="#">
              <div class="photo-box">
                <img
                  src="${e}"
                  alt="${s}"
                  class="photo"
                />
              </div>
              <div class="capture">
                <div class="item"><span class="accent">Likes</span>${i}</div>
                <div class="item"><span class="accent">Views</span>${u}</div>
                <div class="item"><span class="accent">Comments</span>${m}</div>
                <div class="item">
                  <span class="accent">Downloads</span>${g}
                </div>
              </div>
            </a>
          </li>
      `,r=a.map(o=>t(o)).join("");n.gallery.innerHTML=r,v.refresh()},L=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1"),c={message:"Sorry, something went wrong.",iconUrl:L?"./public/img/illegal.svg":"/goit-advancedjs-hw-03/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040",maxWidth:"432px"},b=a=>{a.preventDefault();const t=n.form.elements.search,r=t.value.trim();if(r===""){l.show({...c,message:"Oops! Looks like you forgot to enter something."}),t.value="";return}n.loader.classList.remove("visually-hidden"),t.value="",y(r).then(o=>{o.hits.length===0&&l.show({...c,message:"Sorry, there are no images matching your search query. Please try again!"}),w(o.hits)}).catch(o=>l.show({...c,message:`Sorry, something went wrong.: ${o}`})).finally(()=>{n.loader.classList.add("visually-hidden")})};n.form.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
