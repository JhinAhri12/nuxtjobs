import{_ as g}from"./nuxt-link.0d8fa39f.js";import{l as p,o as l,m as i,a6 as _,y as v,a7 as x,e as f,a8 as y,a9 as k,X as w,i as C,N as t,P as n,w as c,R as u,u as N,M as $,r as S,S as A}from"./entry.95b3157e.js";/* empty css                   */const B={},z={class:"p-1 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"},H=_('<span class="text-sm text-white-500 sm:text-center dark:text-white-400" data-v-d8b515b2>© 2023 <a href="https://flowbite.com/" class="hover:underline" data-v-d8b515b2>Nuxt Jobs</a>. All Rights Reserved. </span><ul class="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-white-400 sm:mt-0" data-v-d8b515b2><li data-v-d8b515b2><a href="#" class="mr-4 hover:underline md:mr-6" data-v-d8b515b2>A Propos</a></li><li data-v-d8b515b2><a href="#" class="mr-4 hover:underline md:mr-6" data-v-d8b515b2>Politique de confidentialité</a></li><li data-v-d8b515b2><a href="#" class="hover:underline" data-v-d8b515b2>Contact</a></li></ul>',2),O=[H];function P(a,r){return l(),i("footer",z,O)}const T=p(B,[["render",P],["__scopeId","data-v-d8b515b2"]]),M=()=>{var h;const a=v(),r=x(),s=r.value?`Bearer ${r.value}`:void 0,{supabase:{url:d,key:b,client:e}}=f().public,m=s?y(e,{global:{headers:{Authorization:s}}}):e,o=((h=a._supabaseClient)==null?void 0:h.headers.Authorization)!==s;return(!a._supabaseClient||o)&&(a._supabaseClient=k(d,b,m)),a._supabaseClient},R={class:"bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"},V={class:"container flex flex-wrap items-center justify-between mx-auto"},I=_('<a href="/" class="flex items-center" data-v-a7bba63a><span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white title" data-v-a7bba63a>Nuxt Jobs</span></a><button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" data-v-a7bba63a><span class="sr-only" data-v-a7bba63a>Open main menu</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-a7bba63a><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-a7bba63a></path></svg></button>',2),j={class:"hidden w-full md:block md:w-auto",id:"navbar-default"},D={class:"flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},E={key:0},F={key:1},J={__name:"Header",setup(a){const r=w(),{auth:s}=M(),d=C(()=>{var e;return(e=r.value)==null?void 0:e.email}),b=async()=>{const{error:e}=await s.signOut();if(e){console.error(e);return}try{await $fetch("/api/_supabase/session",{method:"POST",body:{event:"SIGNED_OUT",session:null}}),r.value=null}catch{console.error(e)}await $("/")};return(e,m)=>{const o=g;return l(),i("nav",R,[t("div",V,[I,t("div",j,[t("ul",D,[t("li",null,[n(o,{to:"/",class:"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white","aria-current":"page"},{default:c(()=>[u("Accueil")]),_:1})]),t("li",null,[n(o,{to:"/blog",class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:c(()=>[u("Blog")]),_:1})]),N(d)?(l(),i("div",F,[t("li",null,[n(o,{to:"/user/profil",class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:c(()=>[u("Profil")]),_:1})]),t("button",{onClick:b},"Déconnexion")])):(l(),i("div",E,[t("li",null,[n(o,{to:"/user/signup",class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:c(()=>[u("Connexion")]),_:1})])]))])])])])}}},U=p(J,[["__scopeId","data-v-a7bba63a"]]),q={},G={class:"p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"};function L(a,r){const s=U,d=T;return l(),i(A,null,[n(s),t("div",G,[S(a.$slots,"default")]),n(d)],64)}const W=p(q,[["render",L]]);export{W as default};