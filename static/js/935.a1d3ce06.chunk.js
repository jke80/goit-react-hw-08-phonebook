"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[935],{7935:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a=t(2007),s=t.n(a),r=t(9434),c=t(1103),i=t(8382),o=t(1022),l=t(6661),d=t(89),u=t(6867),x=t(9381),m=t(2715),h=t(1118),p=t(2098),j=t(6108),b=t(8675),f=t(990),C=t(8874),v=t(9266),g=t(634),y=t(6241),A=t(2233),Z=t(8555),z=t(2063),q=t(4942),I=t(1413),S=t(9439),k=t(2791),w=t(8410),W=t(930),E=t(6336),F=t(6484),N=t(9055),_=t(184),M=function(e){var n=e.patchedContact,t=e.onClose,a=n.id,s=n.name,o=n.number,l=(0,r.I0)(),d=(0,k.useState)({name:s,number:o}),u=(0,S.Z)(d,2),x=u[0],m=u[1],h=(0,i.p)(),p=function(e){m((0,I.Z)((0,I.Z)({},x),{},(0,q.Z)({},e.target.name,e.target.value)))};return(0,_.jsx)(w.W,{maxW:"300px",borderWidth:"1px",borderRadius:"lg",p:"10px",children:(0,_.jsxs)("form",{onSubmit:function(e){var n=x.name,s=x.number;e.preventDefault(),l((0,c._n)({id:a,name:n,number:s})),h({title:"Edit contact.",description:"Contact ".concat(n," edited successfully"),status:"success",duration:5e3,isClosable:!0}),t()},children:[(0,_.jsxs)(W.l,{children:["Name",(0,_.jsx)(E.I,{onChange:p,value:x.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)(W.l,{children:["Number",(0,_.jsx)(E.I,{onChange:p,value:x.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(F.M,{children:(0,_.jsx)(N.z,{colorScheme:"blue",variant:"outline",type:"submit",leftIcon:(0,_.jsx)(Z.d,{}),children:"Edit Contact"})})]})})},O=function(e){var n=e.contact,t=n.id,a=n.name,s=n.number,q=(0,r.I0)(),I=(0,i.p)(),S=(0,o.q)(),k=S.isOpen,w=S.onOpen,W=S.onClose;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l.HC,{children:[(0,_.jsxs)(d.g,{spacing:4,align:"stretch",children:[(0,_.jsxs)(u.E,{children:[(0,_.jsx)(x.q,{size:"xs",name:a}),(0,_.jsxs)(m.x,{children:[a," "]})]}),(0,_.jsxs)(u.E,{children:[(0,_.jsx)(A.q,{}),(0,_.jsx)(m.x,{children:s}),(0,_.jsx)(h.L,{}),(0,_.jsx)(p.u,{label:"Edit contact",children:(0,_.jsx)(j.h,{colorScheme:"blue",variant:"outline",type:"button",size:"xs","aria-label":"Edit contact",icon:(0,_.jsx)(Z.d,{}),onClick:w})}),(0,_.jsx)(p.u,{label:"Delete contact",children:(0,_.jsx)(j.h,{colorScheme:"blue",variant:"outline",type:"button",size:"xs","aria-label":"Delete contact",icon:(0,_.jsx)(z.p,{}),onClick:function(){q((0,c.GK)(t)),I({title:"Delete contact.",description:"Contact deleted successfully",status:"success",duration:5e3,isClosable:!0})}})})]})]}),(0,_.jsx)(b.i,{})]}),(0,_.jsxs)(f.u_,{isOpen:k,onClose:W,children:[(0,_.jsx)(C.Z,{}),(0,_.jsxs)(v.h,{children:[(0,_.jsx)(g.o,{}),(0,_.jsx)(y.f,{children:(0,_.jsx)(M,{patchedContact:{id:t,name:a,number:s},onClose:W})})]})]})]})};O.propType={contact:s().exact({id:s().string.isRequired,name:s().string.isRequired,phone:s().string.isRequired}).isRequired};var R=t(6916),D=function(e){return e.contacts.items},L=function(e){return e.contacts.isLoading},B=function(e){return e.contacts.error},J=function(e){return e.filter},P=(0,R.P1)([D,J],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),$=function(){var e=(0,r.v9)(P);return(0,_.jsx)(w.W,{w:"100%",children:(0,_.jsx)(l.GS,{spacing:5,children:e.map((function(e){return(0,_.jsx)(O,{contact:e},e.id)}))})})},G=t(6390),K=function(){var e=(0,r.v9)(J),n=(0,r.I0)();return(0,_.jsx)(w.W,{maxW:"300px",children:(0,_.jsxs)(W.l,{children:["Find contacts by name",(0,_.jsx)(E.I,{onChange:function(e){return n((0,G.T)(e.target.value))},value:e,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})},T=t(6172),H={name:"",number:""},Q=function(e){var n=e.onClose,t=(0,r.v9)(D),a=(0,r.I0)(),s=(0,k.useState)(H),o=(0,S.Z)(s,2),l=o[0],d=o[1],u=(0,i.p)(),x=function(e){d((0,I.Z)((0,I.Z)({},l),{},(0,q.Z)({},e.target.name,e.target.value)))};return(0,_.jsx)(w.W,{maxW:"300px",borderWidth:"1px",borderRadius:"lg",p:"10px",children:(0,_.jsxs)("form",{onSubmit:function(e){var s=l.name,r=l.number;e.preventDefault(),t.some((function(e){return e.name===s}))?u({title:"Add contact.",description:"".concat(s," is already in contacts"),status:"error",duration:5e3,isClosable:!0}):(a((0,c.uK)({name:s,number:r})),u({title:"Add contact.",description:"Contact ".concat(s," added successfully"),status:"success",duration:5e3,isClosable:!0}),d(H),n())},children:[(0,_.jsxs)(W.l,{children:["Name",(0,_.jsx)(E.I,{onChange:x,value:l.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)(W.l,{children:["Number",(0,_.jsx)(E.I,{onChange:x,value:l.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(F.M,{children:(0,_.jsx)(N.z,{colorScheme:"blue",variant:"outline",type:"submit",leftIcon:(0,_.jsx)(T.d,{}),children:"Add Contact"})})]})})},U=t(2),V=function(){var e=(0,r.I0)(),n=(0,o.q)(),t=n.isOpen,a=n.onOpen,s=n.onClose;(0,k.useEffect)((function(){e((0,c.yF)())}),[e]);var i=(0,r.v9)(D),l=(0,r.v9)(L),d=(0,r.v9)(B);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(F.M,{children:(0,_.jsx)(N.z,{colorScheme:"blue",variant:"outline",onClick:a,leftIcon:(0,_.jsx)(T.d,{}),children:"Add contact"})}),(0,_.jsxs)(f.u_,{isOpen:t,onClose:s,children:[(0,_.jsx)(C.Z,{}),(0,_.jsxs)(v.h,{children:[(0,_.jsx)(g.o,{}),(0,_.jsx)(y.f,{children:(0,_.jsx)(Q,{onClose:s})})]})]}),!(null===i||void 0===i||!i.length)&&(0,_.jsx)(K,{}),l&&!d&&(0,_.jsx)(U.g,{}),(0,_.jsx)($,{})]})}}}]);
//# sourceMappingURL=935.a1d3ce06.chunk.js.map