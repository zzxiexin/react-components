"use strict";(self.webpackChunkyxhooks=self.webpackChunkyxhooks||[]).push([[9],{86904:function(y,i,e){e.r(i),e.d(i,{default:function(){return h}});var o=e(46006),n=e(75271),D=e(87583),g=function(){var E=(0,o.UO)(),t=E.id,a=(0,o.FO)(t),O=(0,D.m)({id:t,component:a.component,renderOpts:a.renderOpts}),R=O.canvasRef,v=a||{},m=v.component,d=v.renderOpts,r=(0,o.kw)(t),s=r.node,c=r.setSource,u=r.error,f=r.loading,w=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:R}):m&&(0,n.createElement)(m));return(0,n.useEffect)(function(){var l=function(p){p.data.type==="dumi.liveDemo.setSource"&&c(p.data.value)};return window.addEventListener("message",l),function(){return window.removeEventListener("message",l)}},[c]),(0,n.useEffect)(function(){!f&&(u||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:u}})},[u,s,f]),w},h=g}}]);
