(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{18:function(n,t,e){e(4),e(55),e(57),e(59),e(61),e(63),e(65),e(67),e(69),e(71),e(73),n.exports=e(75)},4:function(n,t,e){"use strict";e.r(t),e.d(t,"isRTL",(function(){return o})),e.d(t,"isMobile",(function(){return c})),e.d(t,"toggleScrollVertical",(function(){return u})),e.d(t,"formatDate",(function(){return i})),e.d(t,"getParameterByName",(function(){return r})),e.d(t,"makeImagesZoomable",(function(){return a}));var o=function(){var n=document.querySelector("html");return["ar","he","fa"].includes(n.getAttribute("lang"))},c=function(){return window.matchMedia("(max-width: 767px)").matches},u=function(){document.querySelector("body").classList.toggle("no-scroll-y")},i=function(n){return n?new Date(n).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},r=function(n,t){t||(t=window.location.href),n=n.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(t);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null},a=function(n,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=n(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},55:function(n,t){},57:function(n,t){},59:function(n,t){},61:function(n,t){},63:function(n,t){},65:function(n,t){},67:function(n,t){},69:function(n,t){},71:function(n,t){},73:function(n,t){},75:function(n,t){}},[[18,0,1]]]);