import{i as c,a as d,S as v}from"./assets/vendor-CjwUT-lV.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const e={form:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),searchBtn:document.querySelector(".js-search-btn"),loadMoreBtn:document.querySelector(".js-laod-more-btn"),scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn")},w=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1");c.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear",message:"Sorry, something went wrong.",iconUrl:w?"./public/img/illegal.svg":"/goit-advancedjs-hw-03/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040",maxWidth:"432px"});const L="40358053-aa77a52d7b78d629a29aff12d",b="https://pixabay.com/api";d.defaults.baseURL=b;d.defaults.params={key:L,image_type:"photo",orientation:"horizontal",safesearch:"true"};const g=async o=>{const r={q:o.query,page:o.page,per_page:o.perPage},{data:n}=await d.get("/",{params:r});return n},B=new v(".gallery-link",{captionsData:"alt",captionDelay:250}),u=o=>{const r=({largeImageURL:a,webformatURL:s,tags:t,likes:l,views:m,comments:f,downloads:y})=>`
      <li class="card card-set-item">
            <a href="${a}" class="gallery-link" href="#">
              <div class="photo-box">
                <img
                  src="${s}"
                  alt="${t}"
                  class="photo"
                />
              </div>
              <div class="capture">
                <div class="item"><span class="accent">Likes</span>${l}</div>
                <div class="item"><span class="accent">Views</span>${m}</div>
                <div class="item"><span class="accent">Comments</span>${f}</div>
                <div class="item">
                  <span class="accent">Downloads</span>${y}
                </div>
              </div>
            </a>
          </li>
      `,n=o.map(a=>r(a)).join("");e.gallery.insertAdjacentHTML("beforeend",n),B.refresh()},i={page:1,perPage:15,query:""},h={},S=2,M=o=>{o.preventDefault(),e.gallery.innerHTML="";const r=e.form.elements.search,n=r.value.trim();if(n===""){c.show({message:"Oops! Looks like you forgot to enter something."}),r.value="";return}e.loadMoreBtn.classList.add("visually-hidden"),e.loader.classList.remove("hidden"),e.searchBtn.disabled=!0,r.value="",i.query=n,i.page=1,g(i).then(a=>{a.hits.length===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!"}),u(a.hits);const s=document.querySelector(".card"),t=Math.ceil(s.getBoundingClientRect().height);h.scrollY=t*S,i.page*i.perPage<a.totalHits&&(e.loadMoreBtn.classList.remove("visually-hidden"),e.loadMoreBtn.disabled=!1,e.loadMoreBtn.addEventListener("click",p))}).catch(a=>c.show({message:`Sorry, something went wrong.: ${a}`})).finally(()=>{e.loader.classList.add("hidden"),e.searchBtn.disabled=!1})},p=()=>{e.loader.classList.remove("hidden"),e.loadMoreBtn.disabled=!0,i.page+=1,g(i).then(o=>{u(o.hits),window.scrollBy({top:h.scrollY,behavior:"smooth"}),i.page*i.perPage<o.totalHits||(e.loadMoreBtn.classList.add("visually-hidden"),e.loadMoreBtn.removeEventListener("click",p),c.show({backgroundColor:"#FFA000",message:"We're sorry, but you've reached the end of search results."}))}).catch(o=>c.show({message:`Sorry, something went wrong.: ${o}`})).finally(()=>{e.loader.classList.add("hidden"),e.loadMoreBtn.disabled=!1})};e.form.addEventListener("submit",M);window.addEventListener("scroll",()=>{const o=window.innerHeight/3;window.scrollY>o?e.scrollToTopBtn.classList.remove("invisible"):e.scrollToTopBtn.classList.add("invisible")});e.scrollToTopBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
