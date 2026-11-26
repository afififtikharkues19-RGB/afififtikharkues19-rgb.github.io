/* Portfolio analytics — no network collection until an account code is configured. */
(function(){
'use strict';
if(window.__portfolioAnalyticsInitialized)return;
window.__portfolioAnalyticsInitialized=true;
var config={accountCode:"",enabled:false};
var host='afififtikharkues19-rgb.github.io',optOutKey='portfolio-analytics-optout';
if(!config.enabled||!/^[a-z0-9][a-z0-9-]{0,62}$/.test(config.accountCode)||location.protocol!=='https:'||location.hostname!==host)return;
if(navigator.globalPrivacyControl===true||navigator.doNotTrack==='1'||window.doNotTrack==='1')return;
try{if(localStorage.getItem(optOutKey)==='1')return}catch(e){}
if(location.pathname==='/privacy.html'||location.pathname==='/index_fixed.html')return;
var path=location.pathname==='/index.html'?'/':location.pathname;
window.goatcounter={path:path,no_events:true};
var script=document.createElement('script');
script.src='https://gc.zgo.at/count.js';script.async=true;
script.setAttribute('data-goatcounter','https://'+config.accountCode+'.goatcounter.com/count');
document.head.appendChild(script);
function eventName(a){
 var u;try{u=new URL(a.href,location.href)}catch(e){return null}
 var p=u.pathname.toLowerCase(),h=u.hostname.toLowerCase();
 if(u.origin===location.origin&&(/\/assets\/downloads\//.test(p)||/\/cv\.(pdf|docx)$/.test(p))&&/\.(pdf|docx)$/.test(p))return ['click-cv-download','CV download link'];
 if(h==='github.com'&&p.startsWith('/afififtikharkues19-rgb/rupsha-pasur-morphodynamics'))return ['click-research-repository','Research repository link'];
 if(h==='doi.org'||h==='dx.doi.org')return ['click-publication-doi','Publication DOI link'];
 return null;
}
function handle(e){if(e.type==='auxclick'&&e.button!==1)return;var t=e.target;if(!t||!t.closest)return;var a=t.closest('a[href]');if(!a)return;var item=eventName(a);if(!item)return;var gc=window.goatcounter;if(gc&&typeof gc.count==='function')gc.count({path:item[0],title:item[1],event:true,referrer:''})}
document.addEventListener('click',handle);document.addEventListener('auxclick',handle);
})();
