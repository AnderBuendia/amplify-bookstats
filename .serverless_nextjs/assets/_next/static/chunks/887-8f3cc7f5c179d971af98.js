(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{8552:function(e,t,n){"use strict";var r=n(6265),o={aws_project_region:"eu-west-2",aws_appsync_graphqlEndpoint:"https://yi7rnjbqnbdahm3lsnaec2l4w4.appsync-api.eu-west-2.amazonaws.com/graphql",aws_appsync_region:"eu-west-2",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-garhbkwfubfsvlmi46zfkf5g6m",aws_cognito_identity_pool_id:"eu-west-2:117bad27-728c-4a40-a7fb-319750788689",aws_cognito_region:"eu-west-2",aws_user_pools_id:"eu-west-2_HelPbu0yR",aws_user_pools_web_client_id:"2np8d9qrblfgtsptpglboesh4v",oauth:{domain:"bookstats28d2ca84-28d2ca84-dev.auth.eu-west-2.amazoncognito.com",scope:["phone","email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"http://localhost:3000/",redirectSignOut:"http://localhost:3000/",responseType:"code"},federationTarget:"COGNITO_USER_POOLS"};function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(283).ZP.configure(i(i({},o),{},{ssr:!0}))},1437:function(e,t,n){"use strict";var r=n(6265),o=n(5893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(e){return(0,o.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({src:"/book.svg"},e))}},5422:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(5893),o=n(1163),a=n(9008),i=function(e){var t=e.title,n=e.description,o=e.url,i=e.noindex,s=void 0!==i&&i;return(0,r.jsxs)(a.default,{children:[(0,r.jsxs)("title",{children:[t," | BookStats"]}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:url",content:o}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("link",{rel:"canonical",href:"http://localhost:3000"}),s&&(0,r.jsx)("meta",{name:"robots",content:"noindex"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})},s=n(7294),c=n(1664),u=n(8285),p=n(5661),l=n(4207),d=n(1437),f=function(){var e=(0,s.useContext)(u.Z),t=e.user,n=e.setUser,a=e.setUiState,i=(0,o.useRouter)();return(0,r.jsxs)("nav",{className:"flex flex-row justify-between items-center p-3 border-b border-gray-300 shadow-sm",children:[(0,r.jsx)(c.default,{href:l.w.BOOKS,children:(0,r.jsx)("a",{id:"icon-books",children:(0,r.jsx)(d.Z,{className:"w-12 h-12 hover:opacity-70 transition-opacity duration-500 ease-out"})})}),(0,r.jsx)("h1",{className:"text-lg md:text-2xl font-bold",children:"Bookstats"}),t?(0,r.jsx)("button",{className:"p-2 rounded-lg bg-black text-white hover:opacity-70  transition-opacity duration-500 ease-out",onClick:function(){return(0,p.w7)(a,n,i)},children:"Sign Out"}):(0,r.jsx)(c.default,{href:l.w.AUTH,children:(0,r.jsx)("a",{className:"p-2 rounded-lg bg-black text-white hover:opacity-70  transition-opacity duration-500 ease-out",children:"Sign In"})})]})},g=function(e){var t=e.title,n=e.description,a=e.url,s=e.children,c=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{title:t,description:n,url:a}),(0,r.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[c.pathname!==l.w.INDEX&&(0,r.jsx)(f,{}),(0,r.jsx)("div",{className:"container mx-auto w-full flex justify-center items-center",children:s})]})]})}},4780:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});var r={TO_READ:"To Read",READY_TO_START:"Ready To Start",READING:"Reading",COMPLETED:"Completed"}},4207:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var r={INDEX:"/",AUTH:"/auth",BOOKS:"/books",ADD_BOOK:"/add-book"}},7379:function(e,t,n){"use strict";n.d(t,{IY:function(){return r},u8:function(){return o},MC:function(){return a}});var r="\n  mutation CreateBook(\n    $input: CreateBookInput!\n    $condition: ModelBookConditionInput\n  ) {\n    createBook(input: $input, condition: $condition) {\n      id\n      name\n      author\n      pages\n      status\n      read_pages\n      rating\n      image\n      review\n      username\n      updatedAt\n      createdAt\n    }\n  }\n",o="\n  mutation UpdateBook(\n    $input: UpdateBookInput!\n    $condition: ModelBookConditionInput\n  ) {\n    updateBook(input: $input, condition: $condition) {\n      id\n      name\n      author\n      pages\n      status\n      read_pages\n      rating\n      image\n      review\n      username\n      updatedAt\n      createdAt\n    }\n  }\n",a="\n  mutation DeleteBook(\n    $input: DeleteBookInput!\n    $condition: ModelBookConditionInput\n  ) {\n    deleteBook(input: $input, condition: $condition) {\n      id\n      name\n      author\n      pages\n      status\n      read_pages\n      rating\n      image\n      review\n      username\n      updatedAt\n      createdAt\n    }\n  }\n"},8285:function(e,t,n){"use strict";n.d(t,{a:function(){return b},Z:function(){return m}});var r,o=n(5893),a=n(7294),i=n(6265),s="SET_USER",c="SET_UI_STATE",u="SET_IS_LOADING",p="SET_UPDATED_BOOK";function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=(r={},(0,i.Z)(r,s,(function(e,t){return d(d({},e),{},{user:t.payload})})),(0,i.Z)(r,c,(function(e,t){return d(d({},e),{},{uiState:t.payload})})),(0,i.Z)(r,u,(function(e,t){return d(d({},e),{},{isLoading:t.payload})})),(0,i.Z)(r,p,(function(e,t){return d(d({},e),{},{updatedBook:t.payload})})),r),g=function(e,t){var n=f[t.type];return n?n(e,t):e},h=(0,a.createContext)(null),b=function(e){var t=e.children,n=(0,a.useReducer)(g,{user:null,uiState:null,loadingForm:!1,updatedBook:null}),r=n[0],i=n[1];return(0,o.jsx)(h.Provider,{value:{user:r.user,uiState:r.uiState,isLoading:r.isLoading,updatedBook:r.updatedBook,setUser:function(e){return i({type:s,payload:e})},setUiState:function(e){return i({type:c,payload:e})},setIsLoading:function(e){return i({type:u,payload:e})},setUpdatedBook:function(e){return i({type:p,payload:e})}},children:t})},m=h},5661:function(e,t,n){"use strict";n.d(t,{zE:function(){return u},y1:function(){return l},_f:function(){return f},zB:function(){return h},w7:function(){return m},gF:function(){return w},vG:function(){return O}});var r=n(809),o=n.n(r),a=n(2447),i=n(3011),s=(n(8552),n(4207)),c=n(9066);function u(e,t){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.g.currentAuthenticatedUser();case 3:r=e.sent,t(r),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(null),n.push(s.w.AUTH);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e,t,n,r){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function e(t,n,r,a){var s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.email,u=t.password,e.prev=1,n(!0),e.next=5,i.g.signUp({username:s,password:u,attributes:{email:s}});case 5:r("confirmSignUp"),a(s),n(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),c.ZP.error(e.t0.message),n(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function f(e,t,n,r){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(o().mark((function e(t,n,r,a){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,i.g.confirmSignUp(n,t.authCode);case 4:r(null),a(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c.ZP.error(e.t0.message),a(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e,t,n,r){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(o().mark((function e(t,n,r,a){var u,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.email,p=t.password,e.prev=1,r(!0),e.next=5,i.g.signIn(u,p);case 5:n("signedIn"),r(!1),a.push(s.w.BOOKS),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),c.ZP.error(e.t0.message),r(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function m(e,t,n){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(o().mark((function e(t,n,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.g.signOut();case 3:return t(null),n(null),e.next=7,r.push(s.w.INDEX);case 7:c.ZP.success("You have been disconnected"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c.ZP.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(e,t,n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(o().mark((function e(t,n,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.g.forgotPassword(t.email);case 3:n("forgotPasswordSubmit"),r(t.email),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c.ZP.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function O(e,t,n,r){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(o().mark((function e(t,n,r,a){var s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.password,u=t.authCode,e.prev=1,e.next=4,i.g.forgotPasswordSubmit(r,u,s);case 4:n(null),a(null),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c.ZP.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},1649:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(4780),o=function(e){return e===r.x.TO_READ?"bg-blue-100 text-blue-500":e===r.x.READING?"bg-red-100 text-red-500":e===r.x.READY_TO_START?"bg-yellow-100 text-yellow-500":e===r.x.COMPLETED?"bg-green-100 text-green-500":void 0}},6249:function(){}}]);