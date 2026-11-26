(function(){
'use strict';
var key='afif-portfolio-theme';
var root=document.documentElement;
var button=document.getElementById('theme-switch');
var label=button && button.querySelector('.theme-switch__label');
var meta=document.querySelector('meta[name="theme-color"]');
function apply(theme,save){
  var dark=theme==='dark';
  root.setAttribute('data-theme',dark?'dark':'light');
  if(button){button.setAttribute('aria-pressed',dark?'true':'false');button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');button.title=dark?'Switch to light mode':'Switch to dark mode';}
  if(label) label.textContent=dark?'Light':'Dark';
  if(meta) meta.setAttribute('content',dark?'#151517':'#faf8f5');
  if(save){try{localStorage.setItem(key,dark?'dark':'light')}catch(e){}}
}
apply(root.getAttribute('data-theme'),false);
button && button.addEventListener('click',function(){apply(root.getAttribute('data-theme')==='dark'?'light':'dark',true)});
window.addEventListener('storage',function(e){if(e.key===key && (e.newValue==='dark'||e.newValue==='light'))apply(e.newValue,false)});
})();
/* Shared portfolio analytics bootstrap; analytics.js is disabled until configured. */
(function(){if(window.__portfolioAnalyticsLoading)return;var current=document.currentScript;if(!current||!current.src)return;window.__portfolioAnalyticsLoading=true;var script=document.createElement('script');script.src=new URL('analytics.js',current.src).href;script.async=true;document.head.appendChild(script)})();
