import{j as _}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:l,size:g="normal",allCaps:L,color:x="text-primary",fontColor:v})=>_.jsx("span",{className:`label ${g} ${x}`,style:{color:v},children:L?l.toUpperCase():l});try{s.displayName="AppLabel",s.__docgenInfo={description:"",displayName:"AppLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"Capitalize all characters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Label Color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font Color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"AppLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"inline-radio"},allCaps:{control:"boolean"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},o={args:{label:"Custom Color Label",fontColor:"#5ab1ff"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var C,y,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: '#5ab1ff'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const z=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,o as CustomColor,r as Secondary,z as __namedExportsOrder,q as default};
//# sourceMappingURL=app-label.stories-2e921194.js.map
