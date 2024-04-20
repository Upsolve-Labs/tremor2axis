"use strict";var e=require("tslib"),r=require("react"),t=require("../../../lib/theme.cjs"),a=require("../../../lib/tremorTwMerge.cjs"),o=require("../../../lib/utils.cjs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=l(r);const d=o.makeClassName("Callout"),m=s.default.forwardRef(((r,l)=>{const{title:m,icon:c,color:i,className:n,children:u}=r,b=e.__rest(r,["title","icon","color","className","children"]),f=c;return s.default.createElement("div",Object.assign({ref:l,className:a.tremorTwMerge(d("root"),"flex flex-col overflow-hidden rounded-tremor-default text-tremor-default border-l-4 py-3 pr-3 pl-4",i?a.tremorTwMerge(o.getColorClassNames(i,t.colorPalette.background).bgColor,o.getColorClassNames(i,t.colorPalette.darkBorder).borderColor,o.getColorClassNames(i,t.colorPalette.darkText).textColor,"dark:bg-opacity-10 bg-opacity-10"):a.tremorTwMerge("bg-tremor-brand-faint border-tremor-brand-emphasis text-tremor-brand-emphasis","dark:bg-dark-tremor-brand-muted/70 dark:border-dark-tremor-brand-emphasis dark:text-dark-tremor-brand-emphasis"),n)},b),s.default.createElement("div",{className:a.tremorTwMerge(d("header"),"flex items-start")},f?s.default.createElement(f,{className:a.tremorTwMerge(d("icon"),"flex-none h-5 w-5 mr-1.5")}):null,s.default.createElement("h4",{className:a.tremorTwMerge(d("title"),"font-semibold")},m)),s.default.createElement("p",{className:a.tremorTwMerge(d("body"),"overflow-y-auto",u?"mt-2":"")},u))}));m.displayName="Callout",module.exports=m;