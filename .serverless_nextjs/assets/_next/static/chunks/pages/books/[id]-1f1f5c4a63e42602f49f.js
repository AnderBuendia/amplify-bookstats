(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{7863:function(e,t,n){"use strict";var r=n(5893),a=n(7513),o=n(1649),s=n(4780);t.Z=function(e){var t=e.setFieldValue,n=e.status;return(0,r.jsxs)(a.gN,{as:"select",name:"status",value:n,onChange:function(e){t("status",e.target.value)},className:"".concat((0,o.k)(n)," relative text-center mt-10 px-4 py-2 rounded-full font-bold cursor-pointer \n  shadow-md appearance-none hover:opacity-70"),children:[(0,r.jsx)("option",{value:s.x.TO_READ,children:"To Read"}),(0,r.jsx)("option",{value:s.x.READY_TO_START,children:"Ready To Start"}),(0,r.jsx)("option",{value:s.x.READING,children:"Reading"}),(0,r.jsx)("option",{value:s.x.COMPLETED,children:"Completed"})]})}},7512:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),a=n(7294),o=n(8285),s=function(){return(0,r.jsx)("div",{className:"spinner mr-2"})},l=function(e){var t=e.labelName,n=(0,a.useContext)(o.Z).isLoading;return(0,r.jsxs)("button",{className:"flex flex-row items-center justify-center text-white w-full  mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded",type:"submit",children:[n&&(0,r.jsx)(s,{})," ",t]})}},5711:function(e,t,n){"use strict";var r=n(5893),a=n(6265),o=n(8347),s=n(7513);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){e.labelName;var t=(0,o.Z)(e,["labelName"]);return(0,r.jsxs)("div",{className:"mt-3",children:[(0,r.jsx)("label",{htmlFor:e.name,className:"text-sm capitalize",children:e&&e.labelName?e.labelName:e.name}),(0,r.jsx)(s.gN,c({className:"outline-none border border-gray-300 rounded p-2 mt-2 w-full focus:shadow-input focus:border-pink-400"},t))]})}},2969:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return D},default:function(){return I}});var r=n(5893),a=n(1163),o=(n(8552),n(5422)),s=n(4207),l=(n(1891),n(7294)),c=n(8045),i=n(8285),u=n(1106),d=n(4900),f=n(809),m=n.n(f),p=n(6265),b=n(1385),h=n(2447),x=n(7250),v=n(8006),y=n(7513),g=n(5711),j=n(7863),w=n(7512),N=n(7379),O="\n  subscription OnUpdateBookId($id: ID) {\n    onUpdateBookId(id: $id) {\n      id\n      name\n      author\n      pages\n      status\n      read_pages\n      rating\n      image\n      review\n      username\n      updatedAt\n      createdAt\n    }\n  }\n",k=n(9066);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.book,n=e.setUpdatedBook,a=e.setIsLoading,o=t.id,s=t.name,c=t.author,i=t.status,u=t.review,d=t.read_pages;(0,l.useEffect)((function(){x.b.graphql({query:O,variables:{id:o}}).subscribe({next:function(e){n(e.value.data.onUpdateBookId)}})}),[]);var f=function(){var e=(0,h.Z)(m().mark((function e(t){var n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,d&&0!==t.read_pages?n=[].concat((0,b.Z)(d),[t.read_pages]):d||0===t.read_pages?d&&0===t.read_pages&&(n=d):n=t.read_pages,r=E(E({id:o},t),{},{read_pages:n}),e.prev=3,a(!0),e.next=7,x.b.graphql({query:N.u8,variables:{input:r},authMode:v.s.AMAZON_COGNITO_USER_POOLS});case 7:a(!1),k.ZP.success("Your book has been updated"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),k.ZP.error(e.t0.message),a(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"container mx-auto mb-3 p-6 bg-white rounded-md shadow-md",children:[(0,r.jsx)("p",{className:"text-3xl pb-2 font-black text-center",children:"Edit this book"}),(0,r.jsx)(y.J9,{initialValues:{name:s,author:c,read_pages:0,status:i,review:u||""},onSubmit:f,children:function(e){var t=e.values,n=e.setFieldValue;return(0,r.jsxs)(y.l0,{children:[(0,r.jsx)(g.Z,{id:"name",name:"name",type:"text"}),(0,r.jsx)(g.Z,{id:"author",name:"author",type:"text"}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,r.jsx)("div",{className:"w-1/2",children:(0,r.jsx)(g.Z,{id:"read_pages",name:"read_pages",type:"number",labelName:"Read Pages"})}),(0,r.jsx)(j.Z,{setFieldValue:n,status:t.status})]}),(0,r.jsxs)("p",{className:"mt-1",children:["Read Pages:",(0,r.jsx)("span",{className:"ml-2 text-gray-500 font-light",children:d||"0"})]}),(0,r.jsx)(g.Z,{id:"review",name:"review",as:"textarea"}),(0,r.jsx)(w.Z,{labelName:"Submit"})]})}})]})},P=function(e){var t=e.bookId,n=e.router,a=e.onClose;function o(){return(o=(0,h.Z)(m().mark((function e(t,n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.b.graphql({query:N.MC,variables:{input:{id:t}},authMode:v.s.AMAZON_COGNITO_USER_POOLS});case 3:return e.next=5,n.push(s.w.BOOKS);case 5:k.ZP.success("Your book has been deleted"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k.ZP.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return(0,r.jsxs)("div",{className:"px-8 py-6 bg-white rounded-md shadow-lg border border-gray-300",children:[(0,r.jsx)("h1",{className:"font-bold text-center text-xl",children:"Are you sure?"}),(0,r.jsx)("p",{className:"font-bold text-center mb-4 text-xl",children:"You want to delete this file?"}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,r.jsx)("button",{className:"py-2 px-4 rounded-3xl text-white bg-red-500 mr-3 hover:opacity-70",onClick:function(){!function(e,t){o.apply(this,arguments)}(t,n),a()},children:"Yes, Delete it!"}),(0,r.jsx)("button",{className:"py-2 px-4 rounded-3xl text-white bg-black",onClick:a,children:"No, Cancel it!"})]})]})},S=n(4780),Z=function(e){var t=e.book,n=(0,a.useRouter)(),o=(0,l.useState)(!1),s=o[0],f=o[1],m=(0,l.useContext)(i.Z),p=m.updatedBook,b=m.setIsLoading,h=m.setUpdatedBook,x=p||t,v=x.id,y=x.name,g=x.author,j=x.rating,w=x.pages,N=x.status,O=x.review,k=x.read_pages,C=x.createdAt,E=x.updatedAt,Z=new Date(C),D=new Date(E);return(0,r.jsxs)("div",{className:"flex flex-col w-11/12 justify-center items-center",children:[(0,r.jsxs)("div",{className:"container mx-auto my-4 p-5 bg-white rounded-md shadow-md",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,r.jsx)("h1",{className:"font-bold text-lg ",children:y}),(0,r.jsx)("h3",{className:"font-light text-gray-500",children:g})]}),(0,r.jsxs)("div",{className:"my-4 flex flex-row justify-between items-center",children:[(0,r.jsxs)("p",{children:["Pages ",(0,r.jsx)("span",{className:"font-light text-gray-500",children:w})]}),(0,r.jsx)(d.Z,{bookId:v,bookRating:j})]}),(0,r.jsxs)("div",{className:"w-full flex flex-row justify-between items-center text-center rounded-md border p-2",children:[(0,r.jsxs)("div",{className:"w-1/3 flex flex-col",children:[(0,r.jsx)("p",{children:"Time left"}),(0,r.jsxs)("p",{className:"text-gray-500 font-light",children:[(0,u.c)(k,w,N)," mins"]})]}),(0,r.jsxs)("div",{className:"w-1/3 flex flex-col border-r border-l",children:[(0,r.jsx)("p",{children:"Start at"}),(0,r.jsx)("p",{className:"text-gray-500 font-light",children:N===S.x.READING?Z.toDateString():"Not Yet"})]}),(0,r.jsxs)("div",{className:"w-1/3 flex flex-col ",children:[(0,r.jsx)("p",{children:"Completed at"}),(0,r.jsx)("p",{id:"completed-date",className:"text-gray-500 font-light",children:N===S.x.COMPLETED?D.toDateString():"Not Yet"})]})]}),O&&(0,r.jsxs)("div",{className:"w-full mt-3",children:[(0,r.jsx)("p",{children:"Review"}),(0,r.jsx)("div",{className:"mt-1 p-2 bg-gray-200 rounded-md text-black",children:O})]})]}),(0,r.jsxs)("div",{className:"w-full flex flex-".concat(s?"col justify-center items-center":"row"),children:[s?(0,r.jsx)(_,{book:x,setUpdatedBook:h,setIsLoading:b}):(0,r.jsx)("button",{className:"object-center w-6/12 p-2 mr-6 font-bold bg-green-500 text-white rounded-md hover:opacity-70  transition-opacity duration-500 ease-out",onClick:function(){return f((function(e){return!e}))},children:"Edit Book"}),(0,r.jsx)("button",{className:"object-center w-6/12 p-2 font-bold bg-red-500 text-white rounded-md hover:opacity-70  transition-opacity duration-500 ease-out",onClick:function(){(0,c._1)({customUI:function(e){var t=e.onClose;return(0,r.jsx)(P,{bookId:v,router:n,onClose:t})}})},children:"Delete Book"})]})]})},D=!0,I=function(e){var t=e.bookData;return(0,a.useRouter)().isFallback?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsx)(o.Z,{title:t.name,description:"See more data of your favorite books",url:"".concat(s.w.BOOKS,"/").concat(t.id),children:(0,r.jsx)(Z,{book:t})})}},7398:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/[id]",function(){return n(2969)}])},1891:function(){},8045:function(e,t,n){"use strict";var r,a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t._1=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,i.render)(l.default.createElement(m,e),t)}(e)};var s=n(7294),l=u(s),c=u(n(5697)),i=n(3935);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=(a=r=function(e){function t(){var e,n,r;d(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,a=t.onClickOutside,o=e.target===r.overlay;n&&o&&(a(),r.close())},r.close=function(){var e=r.props.afterClose;h(),b(),p(e)},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,a=t.onKeypressEscape,o=27===e.keyCode;n&&o&&(a(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,a=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:a,onClose:r.close})},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,a=t.buttons,o=t.childrenElement,s=t.customUI,c=t.overlayClassName;return l.default.createElement("div",{className:"react-confirm-alert-overlay "+c,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},l.default.createElement("div",{className:"react-confirm-alert"},s?this.renderCustomUI():l.default.createElement("div",{className:"react-confirm-alert-body"},n&&l.default.createElement("h1",null,n),r,o(),l.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map((function(t,n){return l.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(s.Component),r.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func,overlayClassName:c.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},a);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function b(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function h(){document.body.classList.remove("react-confirm-alert-body-element")}}},function(e){e.O(0,[774,708,631,351,170,361,552,548,887,568],(function(){return t=7398,e(e.s=t);var t}));var t=e.O();_N_E=t}]);