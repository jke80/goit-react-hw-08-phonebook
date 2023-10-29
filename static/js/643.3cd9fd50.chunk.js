"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{6643:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var i=n(5861),l=n(4687),a=n.n(l),t=n(8382),s=n(8410),o=n(930),d=n(6336),u=n(6484),c=n(9055),v=n(9434),p=n(9417),m=n(184),f=function(){var e=(0,v.I0)(),r=(0,t.p)(),n=function(){var n=(0,i.Z)(a().mark((function n(i){var l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.preventDefault(),l=i.currentTarget,n.prev=2,n.next=5,e((0,p.eU)({email:l.elements.email.value,password:l.elements.password.value})).unwrap();case 5:r({title:"Login user.",description:"User login success",status:"success",duration:5e3,isClosable:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),r({title:"Login user.",description:"User login error",status:"error",duration:5e3,isClosable:!0});case 11:l.reset();case 12:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsx)(s.W,{maxW:"300px",borderWidth:"1px",borderRadius:"lg",p:"10px",children:(0,m.jsxs)("form",{onSubmit:n,autoComplete:"off",children:[(0,m.jsxs)(o.l,{children:["Email",(0,m.jsx)(d.I,{type:"email",name:"email"})]}),(0,m.jsxs)(o.l,{children:["Password",(0,m.jsx)(d.I,{type:"password",name:"password"})]}),(0,m.jsx)(u.M,{children:(0,m.jsx)(c.z,{colorScheme:"blue",variant:"outline",type:"submit",children:"Login"})})]})})},h=function(){return(0,m.jsx)(f,{})}},930:function(e,r,n){n.d(r,{l:function(){return p}});var i=n(1413),l=n(5987),a=n(9657),t=n(5597),s=n(2481),o=n(2996),d=n(5113),u=n(6992),c=n(184),v=["className","children","requiredIndicator","optionalIndicator"],p=(0,t.G)((function(e,r){var n,t=(0,s.mq)("FormLabel",e),p=(0,o.Lr)(e),f=(p.className,p.children),h=p.requiredIndicator,b=void 0===h?(0,c.jsx)(m,{}):h,x=p.optionalIndicator,Z=void 0===x?null:x,g=(0,l.Z)(p,v),I=(0,a.NJ)(),y=null!=(n=null==I?void 0:I.getLabelProps(g,r))?n:(0,i.Z)({ref:r},g);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",p.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[f,(null==I?void 0:I.isRequired)?b:Z]}))}));p.displayName="FormLabel";var m=(0,t.G)((function(e,r){var n=(0,a.NJ)(),l=(0,a.e)();if(!(null==n?void 0:n.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,r)),{},{__css:l.requiredIndicator,className:t}))}));m.displayName="RequiredIndicator"},9657:function(e,r,n){n.d(r,{NJ:function(){return R},e:function(){return g}});var i=n(1413),l=n(5987),a=n(9439),t=n(9886),s=n(4591),o=n(5597),d=n(2481),u=n(2996),c=n(5113),v=n(6992),p=n(2791),m=n(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],b=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),Z=x[0],g=x[1],I=(0,t.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(I,2),k=y[0],R=y[1];var q=(0,o.G)((function(e,r){var n=(0,d.jC)("Form",e),t=function(e){var r=e.id,n=e.isRequired,t=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,f),c=(0,p.useId)(),m=r||"field-".concat(c),h="".concat(m,"-label"),b="".concat(m,"-feedback"),x="".concat(m,"-helptext"),Z=(0,p.useState)(!1),g=(0,a.Z)(Z,2),I=g[0],y=g[1],k=(0,p.useState)(!1),R=(0,a.Z)(k,2),q=R[0],j=R[1],F=(0,p.useState)(!1),N=(0,a.Z)(F,2),C=N[0],_=N[1],P=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,s.lq)(r,(function(e){e&&j(!0)}))})}),[x]),w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,"data-focus":(0,v.PB)(C),"data-disabled":(0,v.PB)(o),"data-invalid":(0,v.PB)(t),"data-readonly":(0,v.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,o,C,t,d,h]),O=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),D=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!o,isFocused:!!C,onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:q,setHasHelpText:j,id:m,labelId:h,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:O,getRootProps:T,getLabelProps:w,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),o=t.getRootProps,b=(t.htmlProps,(0,l.Z)(t,h)),x=(0,v.cx)("chakra-form-control",e.className);return(0,m.jsx)(k,{value:b,children:(0,m.jsx)(Z,{value:n,children:(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},r)),{},{className:x,__css:n.container}))})})}));q.displayName="FormControl",(0,o.G)((function(e,r){var n=R(),l=g(),a=(0,v.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==n?void 0:n.getHelpTextProps(e,r)),{},{__css:l.helperText,className:a}))})).displayName="FormHelperText"},6336:function(e,r,n){n.d(r,{I:function(){return h}});var i=n(1413),l=n(5987),a=n(9657),t=n(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,n,s,d=(0,a.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,p=e.required,m=e.isRequired,f=e.isInvalid,h=e.isReadOnly,b=e.isDisabled,x=e.onFocus,Z=e.onBlur,g=(0,l.Z)(e,o),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&I.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&I.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},g),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:b)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=v?v:h)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=p?p:m)?s:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,Z)})}(e),n=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,v=(0,l.Z)(r,s);return(0,i.Z)((0,i.Z)({},v),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=n(5597),c=n(2481),v=n(2996),p=n(5113),m=n(184),f=["htmlSize"],h=(0,u.G)((function(e,r){var n=e.htmlSize,a=(0,l.Z)(e,f),s=(0,c.jC)("Input",a),o=d((0,v.Lr)(a)),u=(0,t.cx)("chakra-input",e.className);return(0,m.jsx)(p.m.input,(0,i.Z)((0,i.Z)({size:n},o),{},{__css:s.field,ref:r,className:u}))}));h.displayName="Input",h.id="Input"},8382:function(e,r,n){n.d(r,{p:function(){return o}});var i=n(1413),l=n(6915),a=n(6309),t=n(1170),s=n(2791);function o(e){var r=(0,t.uP)().theme,n=(0,l.OX)();return(0,s.useMemo)((function(){return(0,a.Cj)(r.direction,(0,i.Z)((0,i.Z)({},n),e))}),[e,r.direction,n])}}}]);
//# sourceMappingURL=643.3cd9fd50.chunk.js.map