(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{7755:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies",function(){return c(4141)}])},5088:function(c,b,a){"use strict";var d=a(5893),e=a(1163),f=a(7294),g=a(8470);b.Z=function(b){var c=b.children,h=(0,g.a)(),i=(0,e.useRouter)(),a=(0,f.useState)(!1),j=a[0],k=a[1];return((0,f.useEffect)(function(){h.isAuthenticated?i.push("/"):k(!0)},[h.isAuthenticated,i]),j)?(0,d.jsx)(d.Fragment,{children:c}):null}},5519:function(c,b,a){"use strict";a.d(b,{"_":function(){return h}});var d=a(5893),e=a(1163),f=a(7294),g=a(8470),h=function(c){var h=c.children,i=(0,g.a)(),a=(0,e.useRouter)(),b=(0,f.useState)(!1),j=b[0],k=b[1];return((0,f.useEffect)(function(){a.isReady&&(i.isAuthenticated?k(!0):a.push({pathname:"/auth/login",query:{backTo:a.asPath}}))},[a.isReady,i.isAuthenticated,a]),j)?(0,d.jsx)(d.Fragment,{children:h}):null};a(5088)},8470:function(c,b,a){"use strict";a.d(b,{a:function(){return f}});var d=a(7294),e=a(3008),f=function(){return(0,d.useContext)(e.Vo)}},973:function(d,b,a){"use strict";a.d(b,{H:function(){return s}});var e=a(5893),c=a(8790);a(7294);var f=(0,a(1604).m$)(c.W2,{baseStyle:{maxWidth:{base:"100%",md:"75%",lg:"55%"},height:"calc(100vh - 90px)"}}),g=a(1351),h=a(4480),i=a(5193),j=a(5684),k=a(1799),l=a(9534),m=a(949),n=a(9762),o=a(4971),p=function(a){var b=a.showLabel,f=(0,l.Z)(a,["showLabel"]),c=(0,m.If)(),g=c.toggleColorMode,d=c.colorMode;return(0,e.jsxs)(e.Fragment,{children:[void 0!==b&&b&&(0,e.jsx)(n.lX,{htmlFor:"theme-toggler",mb:0,children:"Enable Dark Theme"}),(0,e.jsx)(o.r,(0,k.Z)({id:"theme-toggler",size:"lg",isChecked:"dark"===d,isDisabled:!1,value:d,colorScheme:"purple",mr:2,onChange:g},f))]})},q=a(8470),r=function(b){var b=null!==b?b:(0,g.Z)(TypeError("Cannot destructure undefined")),d=(0,q.a)(),a=d.user,f=d.logout;return(0,e.jsx)(c.kC,{as:"nav",px:10,h:"90px",gap:10,alignItems:"center",justifyContent:{base:"flex-end",sm:"space-between",md:"flex-end",lg:"flex-end"},position:"sticky",top:0,zIndex:100,children:(0,e.jsxs)(c.Ug,{children:[(0,e.jsx)(c.xv,{fontSize:"large",children:null==a?void 0:a.user.username}),(0,e.jsxs)(h.v2,{children:[(0,e.jsx)(h.j2,{bg:"transparent",_hover:{bg:"transparent"},_active:{bg:"transparent"},as:i.zx,leftIcon:(0,e.jsx)(j.qE,{size:"md",name:a&&a.user.first_name?"".concat(null==a?void 0:a.user.first_name," ").concat(null==a?void 0:a.user.last_name):(null==a?void 0:a.user.username)||"DJ"})}),(0,e.jsxs)(h.qy,{children:[(0,e.jsx)(h.sN,{onClick:function(){return f()},children:"Logout"}),(0,e.jsx)(h.sN,{children:(0,e.jsxs)(c.kC,{justifyContent:"space-between",w:"100%",children:[(0,e.jsx)(c.xu,{as:"span",children:"Switch Theme"}),(0,e.jsx)(p,{})]})})]})]})]})})},s=function(a){var b=a.children;return(0,e.jsxs)(c.xu,{children:[(0,e.jsx)(r,{}),(0,e.jsx)(f,{children:b})]})}},4141:function(e,b,a){"use strict";a.r(b),a.d(b,{default:function(){return t}});var f=a(5893),g=a(5519),h=a(7568),d=a(4051),i=a.n(d),j=a(7294),k=a(1163),l=a(4562),m=a(8790),n=a(5193),o=a(9609),p=a(2371),q=a(3135),r=function(){var y=(0,k.useRouter)(),a=(0,j.useState)([]),s=a[0],z=a[1],b=(0,j.useState)(!0),t=b[0],A=b[1],c=(0,j.useState)(1),d=c[0],B=c[1],e=(0,j.useState)(!1),u=e[0],C=e[1],g=(0,j.useState)(!1),v=g[0],D=g[1],r=(0,j.useState)(1),w=r[0],E=r[1],x=(0,l.pm)();(0,j.useEffect)(function(){y.query.page?B(Number(y.query.page)):B(1)},[]),(0,j.useEffect)(function(){var a;(a=(0,h.Z)(i().mark(function a(){var b;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.Z.get("".concat(q.T,"/api/movies/?page=").concat(d));case 3:z((b=a.sent).data.results),C(b.data.has_previous),D(b.data.has_next),E(b.data.num_pages),A(!1),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),x({title:"An error occurred.",description:a.t0.message,status:"error",duration:5e3,isClosable:!0});case 14:case"end":return a.stop()}},a,null,[[0,11]])})),function(){return a.apply(this,arguments)})()},[d,x]);var F=function(a){y.push({pathname:"/ratings",query:{movieId:a}})};return(0,f.jsxs)(m.xu,{p:4,children:[(0,f.jsxs)(m.Kq,{children:[(0,f.jsx)(m.X6,{mb:4,children:"Search for a movie!"}),(0,f.jsx)(m.rU,{href:"/movies/search",children:(0,f.jsx)(n.zx,{width:"100%",my:2,children:"Search\uD83D\uDD0D"})})]}),t?(0,f.jsx)(m.M5,{children:(0,f.jsx)(o.$,{})}):(0,f.jsxs)(m.W2,{children:[(0,f.jsx)(m.aV,{spacing:3,children:s.map(function(a){return(0,f.jsx)(m.HC,{children:(0,f.jsxs)(m.Kq,{direction:"row",align:"center",justify:"space-between",children:[(0,f.jsxs)(m.xu,{children:[(0,f.jsx)(m.rU,{to:"/ratings/".concat(a.movie_id),fontWeight:"bold",children:a.title}),(0,f.jsxs)(m.xv,{children:[a.genres," "]}),(0,f.jsxs)(m.xv,{children:["Rating ",a.avg_rating.toFixed(2)]})]}),(0,f.jsx)(n.zx,{colorScheme:"teal",size:"sm",onClick:function(){return F(a.movie_id)},children:"Rate"})]})},a.movie_id)})}),(0,f.jsxs)(m.Kq,{direction:"row",mt:4,align:"center",justify:"flex-end",children:[(0,f.jsx)(n.zx,{isDisabled:!u,onClick:function(){y.push({pathname:y.pathname,query:{page:d-1}}),B(d-1)},variant:"outline",children:"Previous"}),(0,f.jsxs)(m.xv,{children:["Page ",d," of ",w]}),(0,f.jsx)(n.zx,{isDisabled:!v,onClick:function(){y.push({pathname:y.pathname,query:{page:d+1}}),B(d+1)},variant:"outline",children:"Next"})]})]})]})},s=a(973),c=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r,{})})};c.getLayout=function(a){return(0,f.jsx)(g._,{children:(0,f.jsx)(s.H,{children:a})})};var t=c}},function(a){a.O(0,[467,156,774,888,179],function(){var b;return a(a.s=7755)}),_N_E=a.O()}])