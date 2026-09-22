(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="186",hc=0,mo=1,uc=2,zs=1,dc=2,Zi=3,ii=0,Ht=1,Cn=2,Ln=0,Qi=1,go=2,_o=3,xo=4,fc=5,wi=100,pc=101,mc=102,gc=103,_c=104,xc=200,vc=201,Mc=202,Sc=203,_l=204,xl=205,Ec=206,yc=207,bc=208,Tc=209,wc=210,Ac=211,Rc=212,Cc=213,Pc=214,Hr=0,Vr=1,kr=2,ns=3,Wr=4,Xr=5,qr=6,Yr=7,Ca=0,Lc=1,Dc=2,_n=0,vl=1,Ml=2,Sl=3,El=4,yl=5,bl=6,Tl=7,wl=300,si=301,Di=302,rr=303,ar=304,js=306,Ii=1e3,Pn=1001,Kr=1002,St=1003,Ic=1004,ps=1005,Ot=1006,or=1007,ti=1008,Zt=1009,Al=1010,Rl=1011,is=1012,Pa=1013,xn=1014,mn=1015,vn=1016,La=1017,Da=1018,ss=1020,Cl=35902,Pl=35899,Ll=1021,Dl=1022,on=1023,Un=1026,ni=1027,Ia=1028,Ua=1029,ri=1030,Na=1031,Fa=1033,Gs=33776,Hs=33777,Vs=33778,ks=33779,Zr=35840,$r=35841,Jr=35842,Qr=35843,jr=36196,ea=37492,ta=37496,na=37488,ia=37489,Ys=37490,sa=37491,ra=37808,aa=37809,oa=37810,la=37811,ca=37812,ha=37813,ua=37814,da=37815,fa=37816,pa=37817,ma=37818,ga=37819,_a=37820,xa=37821,va=36492,Ma=36494,Sa=36495,Ea=36283,ya=36284,Ks=36285,ba=36286,Uc=3200,Zs=0,Nc=1,Xn="",Nt="srgb",$s="srgb-linear",Js="linear",tt="srgb",lr=7680,Fc=519,Oc=512,Bc=513,zc=514,Oa=515,Gc=516,Hc=517,Ba=518,Vc=519,kc=35044,vo="300 es",gn=2e3,rs=2001;function Wc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){const i=as("canvas");return i.style.display="block",i}const Mo={};function So(...i){const e="THREE."+i.shift();console.log(e,...i)}function Il(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Il(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=Il(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pi(...i){const e=i.join(" ");e in Mo||(Mo[e]=!0,Ce(...i))}function qc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Yc={[Hr]:Vr,[kr]:qr,[Wr]:Yr,[ns]:Xr,[Vr]:Hr,[qr]:kr,[Yr]:Wr,[Xr]:ns};class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const ji=Math.PI/180,os=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function za(i,e){return(i%e+e)%e}function Kc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zc(i,e,t){return i!==e?(t-i)/(e-i):0}function es(i,e,t){return(1-t)*i+t*e}function $c(i,e,t,n){return es(i,e,1-Math.exp(-t*n))}function Jc(i,e=1){return e-Math.abs(za(i,e*2)-e)}function Qc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function th(i,e){return i+Math.random()*(e-i)}function nh(i){return i*(.5-Math.random())}function ih(i){i!==void 0&&(Eo=i);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sh(i){return i*ji}function rh(i){return i*os}function ah(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ch(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),h=a(t/2),c=r((e+n)/2),d=a((e+n)/2),p=r((e-n)/2),u=a((e-n)/2),m=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*d,h*p,h*u,o*c);break;case"YZY":i.set(h*u,o*d,h*p,o*c);break;case"ZXZ":i.set(h*p,h*u,o*d,o*c);break;case"XZX":i.set(o*d,h*x,h*m,o*c);break;case"YXY":i.set(h*m,o*d,h*x,o*c);break;case"ZYZ":i.set(h*x,h*m,o*d,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hi={DEG2RAD:ji,RAD2DEG:os,generateUUID:Fi,clamp:Xe,euclideanModulo:za,mapLinear:Kc,inverseLerp:Zc,lerp:es,damp:$c,pingpong:Jc,smoothstep:Qc,smootherstep:jc,randInt:eh,randFloat:th,randFloatSpread:nh,seededRandom:ih,degToRad:sh,radToDeg:rh,isPowerOfTwo:ah,ceilPowerOfTwo:oh,floorPowerOfTwo:lh,setQuaternionFromProperEuler:ch,normalize:zt,denormalize:Ai},ja=class ja{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ja.prototype.isVector2=!0;let Ve=ja;class Oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let h=n[s+0],c=n[s+1],d=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(p!==y||h!==u||c!==m||d!==x){let f=h*u+c*m+d*x+p*y;f<0&&(u=-u,m=-m,x=-x,y=-y,f=-f);let l=1-o;if(f<.9995){const S=Math.acos(f),w=Math.sin(S);l=Math.sin(l*S)/w,o=Math.sin(o*S)/w,h=h*l+u*o,c=c*l+m*o,d=d*l+x*o,p=p*l+y*o}else{h=h*l+u*o,c=c*l+m*o,d=d*l+x*o,p=p*l+y*o;const S=1/Math.sqrt(h*h+c*c+d*d+p*p);h*=S,c*=S,d*=S,p*=S}}e[t]=h,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],h=n[s+1],c=n[s+2],d=n[s+3],p=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+d*p+h*m-c*u,e[t+1]=h*x+d*u+c*p-o*m,e[t+2]=c*x+d*m+o*u-h*p,e[t+3]=d*x-o*p-h*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,h=Math.sin,c=o(n/2),d=o(s/2),p=o(r/2),u=h(n/2),m=h(s/2),x=h(r/2);switch(a){case"XYZ":this._x=u*d*p+c*m*x,this._y=c*m*p-u*d*x,this._z=c*d*x+u*m*p,this._w=c*d*p-u*m*x;break;case"YXZ":this._x=u*d*p+c*m*x,this._y=c*m*p-u*d*x,this._z=c*d*x-u*m*p,this._w=c*d*p+u*m*x;break;case"ZXY":this._x=u*d*p-c*m*x,this._y=c*m*p+u*d*x,this._z=c*d*x+u*m*p,this._w=c*d*p-u*m*x;break;case"ZYX":this._x=u*d*p-c*m*x,this._y=c*m*p+u*d*x,this._z=c*d*x-u*m*p,this._w=c*d*p+u*m*x;break;case"YZX":this._x=u*d*p+c*m*x,this._y=c*m*p+u*d*x,this._z=c*d*x-u*m*p,this._w=c*d*p-u*m*x;break;case"XZY":this._x=u*d*p-c*m*x,this._y=c*m*p-u*d*x,this._z=c*d*x+u*m*p,this._w=c*d*p+u*m*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],h=t[9],c=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-h)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-h)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(h+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(h+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,h=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*h,this._y=s*d+a*h+r*o-n*c,this._z=r*d+a*c+n*h-s*o,this._w=a*d-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let h=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);h=Math.sin(h*c)/d,t=Math.sin(t*c)/d,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const eo=class eo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,h=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+h*c+a*p-o*d,this.y=n+h*d+o*c-r*p,this.z=s+h*p+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,h=t.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eo.prototype.isVector3=!0;let z=eo;const cr=new z,yo=new Oi,to=class to{constructor(e,t,n,s,r,a,o,h,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,c)}set(e,t,n,s,r,a,o,h,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],d=n[4],p=n[7],u=n[2],m=n[5],x=n[8],y=s[0],f=s[3],l=s[6],S=s[1],w=s[4],M=s[7],E=s[2],T=s[5],R=s[8];return r[0]=a*y+o*S+h*E,r[3]=a*f+o*w+h*T,r[6]=a*l+o*M+h*R,r[1]=c*y+d*S+p*E,r[4]=c*f+d*w+p*T,r[7]=c*l+d*M+p*R,r[2]=u*y+m*S+x*E,r[5]=u*f+m*w+x*T,r[8]=u*l+m*M+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*h+s*r*c-s*a*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],d=e[8],p=d*a-o*c,u=o*h-d*r,m=c*r-a*h,x=t*p+n*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=p*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(d*t-s*h)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*h-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+e,-s*c,s*h,-s*(-c*a+h*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hr.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hr.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};to.prototype.isMatrix3=!0;let Ie=to;const hr=new Ie,bo=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),To=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){const i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:e,whitePoint:n,transfer:Js,toXYZ:bo,fromXYZ:To,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:bo,fromXYZ:To,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const qe=hh();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class uh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=as("canvas")),hi.width=e.width,hi.height=e.height;const s=hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dh=0;class Ga{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ur(s[a].image)):r.push(ur(s[a]))}else r=ur(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let fh=0;const dr=new z;class wt extends oi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Pn,s=Pn,r=Ot,a=ti,o=on,h=Zt,c=wt.DEFAULT_ANISOTROPY,d=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Fi(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dr).x}get height(){return this.source.getSize(dr).y}get depth(){return this.source.getSize(dr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=wl;wt.DEFAULT_ANISOTROPY=1;const no=class no{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const h=e.elements,c=h[0],d=h[4],p=h[8],u=h[1],m=h[5],x=h[9],y=h[2],f=h[6],l=h[10];if(Math.abs(d-u)<.01&&Math.abs(p-y)<.01&&Math.abs(x-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+y)<.1&&Math.abs(x+f)<.1&&Math.abs(c+m+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(m+1)/2,E=(l+1)/2,T=(d+u)/4,R=(p+y)/4,_=(x+f)/4;return w>M&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=R/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((f-x)*(f-x)+(p-y)*(p-y)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(f-x)/S,this.y=(p-y)/S,this.z=(u-d)/S,this.w=Math.acos((c+m+l-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};no.prototype.isVector4=!0;let dt=no;class ph extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new wt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ul extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Qs=class Qs{constructor(e,t,n,s,r,a,o,h,c,d,p,u,m,x,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,c,d,p,u,m,x,y,f)}set(e,t,n,s,r,a,o,h,c,d,p,u,m,x,y,f){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=s,l[1]=r,l[5]=a,l[9]=o,l[13]=h,l[2]=c,l[6]=d,l[10]=p,l[14]=u,l[3]=m,l[7]=x,l[11]=y,l[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=a*d,m=a*p,x=o*d,y=o*p;t[0]=h*d,t[4]=-h*p,t[8]=c,t[1]=m+x*c,t[5]=u-y*c,t[9]=-o*h,t[2]=y-u*c,t[6]=x+m*c,t[10]=a*h}else if(e.order==="YXZ"){const u=h*d,m=h*p,x=c*d,y=c*p;t[0]=u+y*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=m*o-x,t[6]=y+u*o,t[10]=a*h}else if(e.order==="ZXY"){const u=h*d,m=h*p,x=c*d,y=c*p;t[0]=u-y*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*d,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){const u=a*d,m=a*p,x=o*d,y=o*p;t[0]=h*d,t[4]=x*c-m,t[8]=u*c+y,t[1]=h*p,t[5]=y*c+u,t[9]=m*c-x,t[2]=-c,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){const u=a*h,m=a*c,x=o*h,y=o*c;t[0]=h*d,t[4]=y-u*p,t[8]=x*p+m,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+x,t[10]=u-y*p}else if(e.order==="XZY"){const u=a*h,m=a*c,x=o*h,y=o*c;t[0]=h*d,t[4]=-p,t[8]=c*d,t[1]=u*p+y,t[5]=a*d,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*d,t[10]=y*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,_h)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Bn.crossVectors(n,Xt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Bn.crossVectors(n,Xt)),Bn.normalize(),ms.crossVectors(Xt,Bn),s[0]=Bn.x,s[4]=ms.x,s[8]=Xt.x,s[1]=Bn.y,s[5]=ms.y,s[9]=Xt.y,s[2]=Bn.z,s[6]=ms.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],d=n[1],p=n[5],u=n[9],m=n[13],x=n[2],y=n[6],f=n[10],l=n[14],S=n[3],w=n[7],M=n[11],E=n[15],T=s[0],R=s[4],_=s[8],b=s[12],C=s[1],D=s[5],N=s[9],H=s[13],U=s[2],G=s[6],q=s[10],k=s[14],te=s[3],X=s[7],Q=s[11],ee=s[15];return r[0]=a*T+o*C+h*U+c*te,r[4]=a*R+o*D+h*G+c*X,r[8]=a*_+o*N+h*q+c*Q,r[12]=a*b+o*H+h*k+c*ee,r[1]=d*T+p*C+u*U+m*te,r[5]=d*R+p*D+u*G+m*X,r[9]=d*_+p*N+u*q+m*Q,r[13]=d*b+p*H+u*k+m*ee,r[2]=x*T+y*C+f*U+l*te,r[6]=x*R+y*D+f*G+l*X,r[10]=x*_+y*N+f*q+l*Q,r[14]=x*b+y*H+f*k+l*ee,r[3]=S*T+w*C+M*U+E*te,r[7]=S*R+w*D+M*G+E*X,r[11]=S*_+w*N+M*q+E*Q,r[15]=S*b+w*H+M*k+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],h=e[9],c=e[13],d=e[2],p=e[6],u=e[10],m=e[14],x=e[3],y=e[7],f=e[11],l=e[15],S=h*m-c*u,w=o*m-c*p,M=o*u-h*p,E=a*m-c*d,T=a*u-h*d,R=a*p-o*d;return t*(y*S-f*w+l*M)-n*(x*S-f*E+l*T)+s*(x*w-y*E+l*R)-r*(x*M-y*T+f*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],h=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*h)+s*(r*c-a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],d=e[8],p=e[9],u=e[10],m=e[11],x=e[12],y=e[13],f=e[14],l=e[15],S=t*o-n*a,w=t*h-s*a,M=t*c-r*a,E=n*h-s*o,T=n*c-r*o,R=s*c-r*h,_=d*y-p*x,b=d*f-u*x,C=d*l-m*x,D=p*f-u*y,N=p*l-m*y,H=u*l-m*f,U=S*H-w*N+M*D+E*C-T*b+R*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/U;return e[0]=(o*H-h*N+c*D)*G,e[1]=(s*N-n*H-r*D)*G,e[2]=(y*R-f*T+l*E)*G,e[3]=(u*T-p*R-m*E)*G,e[4]=(h*C-a*H-c*b)*G,e[5]=(t*H-s*C+r*b)*G,e[6]=(f*M-x*R-l*w)*G,e[7]=(d*R-u*M+m*w)*G,e[8]=(a*N-o*C+c*_)*G,e[9]=(n*C-t*N-r*_)*G,e[10]=(x*T-y*M+l*S)*G,e[11]=(p*M-d*T-m*S)*G,e[12]=(o*b-a*D-h*_)*G,e[13]=(t*D-n*b+s*_)*G,e[14]=(y*w-x*E-f*S)*G,e[15]=(d*E-p*w+u*S)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,h=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,d*o+n,d*h-s*a,0,c*h-s*o,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,h=t._w,c=r+r,d=a+a,p=o+o,u=r*c,m=r*d,x=r*p,y=a*d,f=a*p,l=o*p,S=h*c,w=h*d,M=h*p,E=n.x,T=n.y,R=n.z;return s[0]=(1-(y+l))*E,s[1]=(m+M)*E,s[2]=(x-w)*E,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(u+l))*T,s[6]=(f+S)*T,s[7]=0,s[8]=(x+w)*R,s[9]=(f-S)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ui.set(s[0],s[1],s[2]).length();const o=ui.set(s[4],s[5],s[6]).length(),h=ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);const c=1/a,d=1/o,p=1/h;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=d,en.elements[5]*=d,en.elements[6]*=d,en.elements[8]*=p,en.elements[9]*=p,en.elements[10]*=p,t.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=h,this}makePerspective(e,t,n,s,r,a,o=gn,h=!1){const c=this.elements,d=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let x,y;if(h)x=r/(a-r),y=a*r/(a-r);else if(o===gn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===rs)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,h=!1){const c=this.elements,d=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let x,y;if(h)x=1/(a-r),y=a/(a-r);else if(o===gn)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===rs)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Qs.prototype.isMatrix4=!0;let pt=Qs;const ui=new z,en=new pt,gh=new z(0,0,0),_h=new z(1,1,1),Bn=new z,ms=new z,Xt=new z,wo=new pt,Ao=new Oi;class Yn{constructor(e=0,t=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],d=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const Ro=new z,di=new Oi,En=new pt,gs=new z,Vi=new z,vh=new z,Mh=new Oi,Co=new z(1,0,0),Po=new z(0,1,0),Lo=new z(0,0,1),Do={type:"added"},Sh={type:"removed"},fi={type:"childadded",child:null},fr={type:"childremoved",child:null};class At extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new z,t=new Yn,n=new Oi,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ie}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(Po,e)}rotateZ(e){return this.rotateOnAxis(Lo,e)}translateOnAxis(e,t){return Ro.copy(e).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(Po,e)}translateZ(e){return this.translateOnAxis(Lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Vi,gs,this.up):En.lookAt(gs,Vi,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),di.setFromRotationMatrix(En),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Do),fi.child=e,this.dispatchEvent(fi),fi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sh),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Do),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let c=0,d=h.length;c<d;c++){const p=h[c];r(e.shapes,p)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(e.materials,this.material[h]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(e.animations,h))}}if(t){const o=a(e.geometries),h=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const h=[];for(const c in o){const d=o[c];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new z(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ut extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eh={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,n),l=this._getHandJoint(c,y);f!==null&&(l.matrix.fromArray(f.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=f.radius),l.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eh)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function mr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=za(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mr(a,r,e+1/3),this.g=mr(a,r,e),this.b=mr(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return qe.workingToColorSpace(Lt.copy(this),e),Math.round(Xe(Lt.r*255,0,255))*65536+Math.round(Xe(Lt.g*255,0,255))*256+Math.round(Xe(Lt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let h,c;const d=(o+a)/2;if(o===a)h=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case n:h=(s-r)/p+(s<r?6:0);break;case s:h=(r-n)/p+2;break;case r:h=(n-s)/p+4;break}h/=6}return e.h=h,e.s=c,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Nt){qe.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(_s);const n=es(zn.h,_s.h,t),s=es(zn.s,_s.s,t),r=es(zn.l,_s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new He;He.NAMES=Fl;class Ha{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new Ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yh extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new z,yn=new z,gr=new z,bn=new z,pi=new z,mi=new z,Io=new z,_r=new z,xr=new z,vr=new z,Mr=new dt,Sr=new dt,Er=new dt;class an{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),yn.subVectors(n,t),gr.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(yn),h=tn.dot(gr),c=yn.dot(yn),d=yn.dot(gr),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(c*h-o*d)*u,x=(a*d-o*h)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,h){return this.getBarycoord(e,t,n,s,bn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,bn.x),h.addScaledVector(a,bn.y),h.addScaledVector(o,bn.z),h)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mr.setScalar(0),Sr.setScalar(0),Er.setScalar(0),Mr.fromBufferAttribute(e,t),Sr.fromBufferAttribute(e,n),Er.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mr,r.x),a.addScaledVector(Sr,r.y),a.addScaledVector(Er,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),yn.subVectors(e,t),tn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;pi.subVectors(s,n),mi.subVectors(r,n),_r.subVectors(e,n);const h=pi.dot(_r),c=mi.dot(_r);if(h<=0&&c<=0)return t.copy(n);xr.subVectors(e,s);const d=pi.dot(xr),p=mi.dot(xr);if(d>=0&&p<=d)return t.copy(s);const u=h*p-d*c;if(u<=0&&h>=0&&d<=0)return a=h/(h-d),t.copy(n).addScaledVector(pi,a);vr.subVectors(e,r);const m=pi.dot(vr),x=mi.dot(vr);if(x>=0&&m<=x)return t.copy(r);const y=m*c-h*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(mi,o);const f=d*x-m*p;if(f<=0&&p-d>=0&&m-x>=0)return Io.subVectors(r,s),o=(p-d)/(p-d+(m-x)),t.copy(s).addScaledVector(Io,o);const l=1/(f+y+u);return a=y*l,o=u*l,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),vs.subVectors(this.max,ki),gi.subVectors(e.a,ki),_i.subVectors(e.b,ki),xi.subVectors(e.c,ki),Gn.subVectors(_i,gi),Hn.subVectors(xi,_i),Zn.subVectors(gi,xi);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-Zn.z,Zn.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,Zn.z,0,-Zn.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-Zn.y,Zn.x,0];return!yr(t,gi,_i,xi,vs)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,gi,_i,xi,vs))?!1:(Ms.crossVectors(Gn,Hn),t=[Ms.x,Ms.y,Ms.z],yr(t,gi,_i,xi,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new z,new z,new z,new z,new z,new z,new z,new z],nn=new z,xs=new hs,gi=new z,_i=new z,xi=new z,Gn=new z,Hn=new z,Zn=new z,ki=new z,vs=new z,Ms=new z,$n=new z;function yr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),h=e.dot($n),c=t.dot($n),d=n.dot($n);if(Math.max(-Math.max(h,c,d),Math.min(h,c,d))>o)return!1}return!0}const xt=new z,Ss=new Ve;let bh=0;class In extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ol extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bl extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Th=new hs,Wi=new z,br=new z;class Va{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(br)),this.expandByPoint(Wi.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wh=0;const Jt=new pt,Tr=new At,vi=new z,qt=new hs,Xi=new hs,Tt=new z;class Wt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wc(e)?Bl:Ol)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(qt.min,Xi.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,Xi.max),qt.expandByPoint(Tt)):(qt.expandByPoint(Xi.min),qt.expandByPoint(Xi.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],h=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Tt.fromBufferAttribute(o,c),h&&(vi.fromBufferAttribute(e,c),Tt.add(vi)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new In(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],h=[];for(let _=0;_<n.count;_++)o[_]=new z,h[_]=new z;const c=new z,d=new z,p=new z,u=new Ve,m=new Ve,x=new Ve,y=new z,f=new z;function l(_,b,C){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,C),d.sub(c),p.sub(c),m.sub(u),x.sub(u);const D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(D),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(D),o[_].add(y),o[b].add(y),o[C].add(y),h[_].add(f),h[b].add(f),h[C].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,b=S.length;_<b;++_){const C=S[_],D=C.start,N=C.count;for(let H=D,U=D+N;H<U;H+=3)l(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new z,M=new z,E=new z,T=new z;function R(_){E.fromBufferAttribute(s,_),T.copy(E);const b=o[_];w.copy(b),w.sub(E.multiplyScalar(E.dot(b))).normalize(),M.crossVectors(T,b);const D=M.dot(h[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,b=S.length;_<b;++_){const C=S[_],D=C.start,N=C.count;for(let H=D,U=D+N;H<U;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new z,r=new z,a=new z,o=new z,h=new z,c=new z,d=new z,p=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),y=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),o.add(d),h.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,h){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(h.length*d);let m=0,x=0;for(let y=0,f=h.length;y<f;y++){o.isInterleavedBufferAttribute?m=h[y]*o.data.stride+o.offset:m=h[y]*d;for(let l=0;l<d;l++)u[x++]=c[m++]}return new In(u,d,p)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const o in s){const h=s[o],c=e(h,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const h=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],m=e(u,n);h.push(m)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const c=n[h];e.data.attributes[h]=c.toJSON(e.data)}const s={};let r=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],d=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(s[h]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wr=new z,Ah=new z,Rh=new Ie;class Wn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=wr.subVectors(n,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(wr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rh.getNormalMatrix(e),s=this.coplanarPoint(wr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ch=0;class Bi extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Qi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=xl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wn=new z,Ar=new z,Es=new z,ys=new z;class Ph{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ar.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(Ar);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Es),o=ys.dot(this.direction),h=-ys.dot(Es),c=ys.lengthSq(),d=Math.abs(1-a*a);let p,u,m,x;if(d>0)if(p=a*h-o,u=a*o-h,x=r*d,p>=0)if(u>=-x)if(u<=x){const y=1/d;p*=y,u*=y,m=p*(p+a*u+2*o)+u*(a*p+u+2*h)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*h)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*h)+c;else u<=-x?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-h),r),m=-p*p+u*(u+2*h)+c):u<=x?(p=0,u=Math.min(Math.max(-r,-h),r),m=u*(u+2*h)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-h),r),m=-p*p+u*(u+2*h)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ar).addScaledVector(Es,u),m}intersectSphere(e,t){if(e.radius<0)return null;wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,h;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,h=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,h=(e.min.z-u.z)*p),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,h=o.x,c=o.y,d=o.z,p=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,f=t.z-a.z,l=n.x-a.x,S=n.y-a.y,w=n.z-a.z,M=Math.abs(h),E=Math.abs(c),T=Math.abs(d);let R,_,b,C,D,N,H,U,G,q,k,te;if(M>=E&&M>=T?(b=h,N=p,G=x,te=l,h>=0?(R=c,_=d,C=u,D=m,H=y,U=f,q=S,k=w):(R=d,_=c,C=m,D=u,H=f,U=y,q=w,k=S)):E>=T?(b=c,N=u,G=y,te=S,c>=0?(R=d,_=h,C=m,D=p,H=f,U=x,q=w,k=l):(R=h,_=d,C=p,D=m,H=x,U=f,q=l,k=w)):(b=d,N=m,G=f,te=w,d>=0?(R=h,_=c,C=p,D=u,H=x,U=y,q=l,k=S):(R=c,_=h,C=u,D=p,H=y,U=x,q=S,k=l)),b===0)return null;const X=R/b,Q=_/b,ee=1/b,Ae=C-X*N,ye=D-Q*N,je=H-X*G,ke=U-Q*G,Ye=q-X*te,K=k-Q*te,j=Ye*ke-K*je,_e=Ae*K-ye*Ye,De=je*ye-ke*Ae;if(s){if(j<0||_e<0||De<0)return null}else if((j<0||_e<0||De<0)&&(j>0||_e>0||De>0))return null;const me=j+_e+De;if(me===0)return null;const Oe=ee*(j*N+_e*G+De*te);return(me>0?Oe<0:Oe>0)?null:this.at(Oe/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uo=new pt,Jn=new Ph,bs=new Va,No=new z,Ts=new z,ws=new z,As=new z,Rr=new z,Rs=new z,Fo=new z,Cs=new z;class Pe extends At{constructor(e=new Wt,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Rs.set(0,0,0);for(let h=0,c=r.length;h<c;h++){const d=o[h],p=r[h];d!==0&&(Rr.fromBufferAttribute(p,e),a?Rs.addScaledVector(Rr,d):Rs.addScaledVector(Rr.sub(t),d))}t.add(Rs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(bs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(bs,No)===null||Jn.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Uo.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(Uo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){const f=u[x],l=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,E=w;M<E;M+=3){const T=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=Ps(this,l,e,n,c,d,p,T,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=x,l=y;f<l;f+=3){const S=o.getX(f),w=o.getX(f+1),M=o.getX(f+2);s=Ps(this,a,e,n,c,d,p,S,w,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){const f=u[x],l=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(h.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,E=w;M<E;M+=3){const T=M,R=M+1,_=M+2;s=Ps(this,l,e,n,c,d,p,T,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let f=x,l=y;f<l;f+=3){const S=f,w=f+1,M=f+2;s=Ps(this,a,e,n,c,d,p,S,w,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Lh(i,e,t,n,s,r,a,o){let h;if(e.side===Ht?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,e.side===ii,o),h===null)return null;Cs.copy(o),Cs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:i}}function Ps(i,e,t,n,s,r,a,o,h,c){i.getVertexPosition(o,Ts),i.getVertexPosition(h,ws),i.getVertexPosition(c,As);const d=Lh(i,e,t,n,Ts,ws,As,Fo);if(d){const p=new z;an.getBarycoord(Fo,Ts,ws,As,p),s&&(d.uv=an.getInterpolatedAttribute(s,o,h,c,p,new Ve)),r&&(d.uv1=an.getInterpolatedAttribute(r,o,h,c,p,new Ve)),a&&(d.normal=an.getInterpolatedAttribute(a,o,h,c,p,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:h,c,normal:new z,materialIndex:0};an.getNormal(Ts,ws,As,u.normal),d.face=u,d.barycoord=p}return d}class zl extends wt{constructor(e=null,t=1,n=1,s,r,a,o,h,c=St,d=St,p,u){super(null,a,o,h,c,d,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qn=new Va,Dh=new Ve(.5,.5),Ls=new z;class ka{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],h=r[2],c=r[3],d=r[4],p=r[5],u=r[6],m=r[7],x=r[8],y=r[9],f=r[10],l=r[11],S=r[12],w=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,m-d,l-x,E-S).normalize(),s[1].setComponents(c+a,m+d,l+x,E+S).normalize(),s[2].setComponents(c+o,m+p,l+y,E+w).normalize(),s[3].setComponents(c-o,m-p,l-y,E-w).normalize(),n)s[4].setComponents(h,u,f,M).normalize(),s[5].setComponents(c-h,m-u,l-f,E-M).normalize();else if(s[4].setComponents(c-h,m-u,l-f,E-M).normalize(),t===gn)s[5].setComponents(c+h,m+u,l+f,E+M).normalize();else if(t===rs)s[5].setComponents(h,u,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Dh.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ls.x=s.normal.x>0?e.max.x:e.min.x,Ls.y=s.normal.y>0?e.max.y:e.min.y,Ls.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gl extends wt{constructor(e=[],t=si,n,s,r,a,o,h,c,d){super(e,t,n,s,r,a,o,h,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ts extends wt{constructor(e,t,n,s,r,a,o,h,c){super(e,t,n,s,r,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends wt{constructor(e,t,n=xn,s,r,a,o=St,h=St,c,d=Un,p=1){if(d!==Un&&d!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,s,r,a,o,h,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ih extends ls{constructor(e,t=xn,n=si,s,r,a=St,o=St,h,c=Un){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,h,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hl extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zi extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],c=[],d=[],p=[];let u=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function x(y,f,l,S,w,M,E,T,R,_,b){const C=M/R,D=E/_,N=M/2,H=E/2,U=T/2,G=R+1,q=_+1;let k=0,te=0;const X=new z;for(let Q=0;Q<q;Q++){const ee=Q*D-H;for(let Ae=0;Ae<G;Ae++){const ye=Ae*C-N;X[y]=ye*S,X[f]=ee*w,X[l]=U,c.push(X.x,X.y,X.z),X[y]=0,X[f]=0,X[l]=T>0?1:-1,d.push(X.x,X.y,X.z),p.push(Ae/R),p.push(1-Q/_),k+=1}}for(let Q=0;Q<_;Q++)for(let ee=0;ee<R;ee++){const Ae=u+ee+G*Q,ye=u+ee+G*(Q+1),je=u+(ee+1)+G*(Q+1),ke=u+(ee+1)+G*Q;h.push(Ae,ye,ke),h.push(ye,je,ke),te+=6}o.addGroup(m,te,b),m+=te,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wa extends Wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],h=[],c=[],d=t/2,p=Math.PI/2*e,u=t,m=2*p+u,x=n*2+r,y=s+1,f=new z,l=new z;for(let S=0;S<=x;S++){let w=0,M=0,E=0,T=0;if(S<=n){const b=S/n,C=b*Math.PI/2;M=-d-e*Math.cos(C),E=e*Math.sin(C),T=-e*Math.cos(C),w=b*p}else if(S<=n+r){const b=(S-n)/r;M=-d+b*t,E=e,T=0,w=p+b*u}else{const b=(S-n-r)/n,C=b*Math.PI/2;M=d+e*Math.sin(C),E=e*Math.cos(C),T=e*Math.sin(C),w=p+u+b*p}const R=Math.max(0,Math.min(1,w/m));let _=0;S===0?_=.5/s:S===x&&(_=-.5/s);for(let b=0;b<=s;b++){const C=b/s,D=C*Math.PI*2,N=Math.sin(D),H=Math.cos(D);l.x=-E*H,l.y=M,l.z=E*N,o.push(l.x,l.y,l.z),f.set(-E*H,T,E*N),f.normalize(),h.push(f.x,f.y,f.z),c.push(C+_,R)}if(S>0){const b=(S-1)*y;for(let C=0;C<s;C++){const D=b+C,N=b+C+1,H=S*y+C,U=S*y+C+1;a.push(D,N,H),a.push(N,U,H)}}}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Rn extends Wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],h=[],c=new z,d=new Ve;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){const m=n+p/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,h.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],u=[],m=[];let x=0;const y=[],f=n/2;let l=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(m,2));function S(){const M=new z,E=new z;let T=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const b=[],C=_/r,D=C*(t-e)+e;for(let N=0;N<=s;N++){const H=N/s,U=H*h+o,G=Math.sin(U),q=Math.cos(U);E.x=D*G,E.y=-C*n+f,E.z=D*q,p.push(E.x,E.y,E.z),M.set(G,R,q).normalize(),u.push(M.x,M.y,M.z),m.push(H,1-C),b.push(x++)}y.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const C=y[b][_],D=y[b+1][_],N=y[b+1][_+1],H=y[b][_+1];(e>0||b!==0)&&(d.push(C,D,H),T+=3),(t>0||b!==r-1)&&(d.push(D,N,H),T+=3)}c.addGroup(l,T,0),l+=T}function w(M){const E=x,T=new Ve,R=new z;let _=0;const b=M===!0?e:t,C=M===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,f*C,0),u.push(0,C,0),m.push(.5,.5),x++;const D=x;for(let N=0;N<=s;N++){const U=N/s*h+o,G=Math.cos(U),q=Math.sin(U);R.x=b*q,R.y=f*C,R.z=b*G,p.push(R.x,R.y,R.z),u.push(0,C,0),T.x=G*.5+.5,T.y=q*.5*C+.5,m.push(T.x,T.y),x++}for(let N=0;N<s;N++){const H=E+N,U=D+N;M===!0?d.push(U,U+1,H):d.push(U+1,U,H),_+=3}c.addGroup(l,_,M===!0?1:2),l+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xa extends kt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Xa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ai extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),h=Math.floor(s),c=o+1,d=h+1,p=e/o,u=t/h,m=[],x=[],y=[],f=[];for(let l=0;l<d;l++){const S=l*u-a;for(let w=0;w<c;w++){const M=w*p-r;x.push(M,-S,0),y.push(0,0,1),f.push(w/o),f.push(1-l/h)}}for(let l=0;l<h;l++)for(let S=0;S<o;S++){const w=S+c*l,M=S+c*(l+1),E=S+1+c*(l+1),T=S+1+c*l;m.push(w,M,T),m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}class er extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(a+o,Math.PI);let c=0;const d=[],p=new z,u=new z,m=[],x=[],y=[],f=[];for(let l=0;l<=n;l++){const S=[],w=l/n,M=a+w*o,E=e*Math.cos(M),T=Math.sqrt(e*e-E*E);let R=0;l===0&&a===0?R=.5/t:l===n&&h===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const b=_/t,C=s+b*r;p.x=-T*Math.cos(C),p.y=E,p.z=T*Math.sin(C),x.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),f.push(b+R,1-w),S.push(c++)}d.push(S)}for(let l=0;l<n;l++)for(let S=0;S<t;S++){const w=d[l][S+1],M=d[l][S],E=d[l+1][S],T=d[l+1][S+1];(l!==0||a>0)&&m.push(w,M,T),(l!==n-1||h<Math.PI)&&m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rn extends Wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const h=[],c=[],d=[],p=[],u=new z,m=new z,x=new z;for(let y=0;y<=n;y++){const f=a+y/n*o;for(let l=0;l<=s;l++){const S=l/s*r;m.x=(e+t*Math.cos(f))*Math.cos(S),m.y=(e+t*Math.cos(f))*Math.sin(S),m.z=t*Math.sin(f),c.push(m.x,m.y,m.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),x.subVectors(m,u).normalize(),d.push(x.x,x.y,x.z),p.push(l/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let f=1;f<=s;f++){const l=(s+1)*y+f-1,S=(s+1)*(y-1)+f-1,w=(s+1)*(y-1)+f,M=(s+1)*y+f;h.push(l,S,M),h.push(S,w,M)}this.setIndex(h),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Oo(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Oo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const s in n)e[s]=n[s]}return e}function Oo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Nh={clone:Ui,merge:Gt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bh extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ws extends Bi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new He(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Bo extends Bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zh extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gh extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(zo(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!zo(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function zo(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Hh{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,h;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){const p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=c.length;p<u;p+=2){const m=c[p],x=c[p+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vh=new Hh;class qa{constructor(e){this.manager=e!==void 0?e:Vh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi=new WeakMap;class kh extends qa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Cr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let p=Mi.get(a);p===void 0&&(p=[],Mi.set(a,p)),p.push({onLoad:t,onError:s})}return a}const o=as("img");function h(){d(),t&&t(this);const p=Mi.get(this)||[];for(let u=0;u<p.length;u++){const m=p[u];m.onLoad&&m.onLoad(this)}Mi.delete(this),r.manager.itemEnd(e)}function c(p){d(),s&&s(p),Cr.remove(`image:${e}`);const u=Mi.get(this)||[];for(let m=0;m<u.length;m++){const x=u[m];x.onError&&x.onError(p)}Mi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class kl extends qa{constructor(e){super(e)}load(e,t,n,s){const r=new wt,a=new kh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ya extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Wh extends Ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Pr=new pt,Go=new z,Ho=new z;class Wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Pr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ds=new z,Is=new Oi,un=new z;class Xl extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ds,Is,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Is,un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ds,Is,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Is,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new z,Vo=new Ve,ko=new Ve;class Kt extends Xl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Vo,ko),t.subVectors(ko,Vo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,t-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xh extends Wl{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}}class qh extends Ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ka extends Xl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yh extends Wl{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kh extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Si=-90,Ei=1;class Zh extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Si,Ei,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Si,Ei,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Si,Ei,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Si,Ei,e,t);o.layers=this.layers,this.add(o);const h=new Kt(Si,Ei,e,t);h.layers=this.layers,this.add(h);const c=new Kt(Si,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,h]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,h,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class $h extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const io=class io{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};io.prototype.isMatrix2=!0;let Wo=io;function Xo(i,e,t,n){const s=Jh(n);switch(t){case Ll:return i*e;case Ia:return i*e/s.components*s.byteLength;case Ua:return i*e/s.components*s.byteLength;case ri:return i*e*2/s.components*s.byteLength;case Na:return i*e*2/s.components*s.byteLength;case Dl:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case Fa:return i*e*4/s.components*s.byteLength;case Gs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $r:case Qr:return Math.max(i,16)*Math.max(e,8)/4;case Zr:case Jr:return Math.max(i,8)*Math.max(e,8)/2;case jr:case ea:case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case Ys:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case va:case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ea:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ks:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jh(i){switch(i){case Zt:case Al:return{byteLength:1,components:1};case is:case Rl:case vn:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case xn:case Pa:case mn:return{byteLength:4,components:1};case Cl:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ql(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qh(i){const e=new WeakMap;function t(o,h){const c=o.array,d=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(h,u),i.bufferData(h,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,h,c){const d=h.array,p=h.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<p.length;m++){const x=p[u],y=p[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,p[u]=y)}p.length=u+1;for(let m=0,x=p.length;m<x;m++){const y=p[m];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);h&&(i.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Eu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ju=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ud=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,of=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:jh,alphahash_pars_fragment:eu,alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:au,batching_pars_vertex:ou,batching_vertex:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:uu,iridescence_fragment:du,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:xu,color_pars_fragment:vu,color_pars_vertex:Mu,color_vertex:Su,common:Eu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Tu,displacementmap_vertex:wu,emissivemap_fragment:Au,emissivemap_pars_fragment:Ru,colorspace_fragment:Cu,colorspace_pars_fragment:Pu,envmap_fragment:Lu,envmap_common_pars_fragment:Du,envmap_pars_fragment:Iu,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:Xu,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:Ou,fog_fragment:Bu,fog_pars_fragment:zu,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:ku,lights_pars_begin:Wu,lights_toon_fragment:qu,lights_toon_pars_fragment:Yu,lights_phong_fragment:Ku,lights_phong_pars_fragment:Zu,lights_physical_fragment:$u,lights_physical_pars_fragment:Ju,lights_fragment_begin:Qu,lights_fragment_maps:ju,lights_fragment_end:ed,lightprobes_pars_fragment:td,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:rd,map_fragment:ad,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:hd,metalnessmap_pars_fragment:ud,morphinstance_vertex:dd,morphcolor_vertex:fd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:gd,normal_fragment_begin:_d,normal_fragment_maps:xd,normal_pars_fragment:vd,normal_pars_vertex:Md,normal_vertex:Sd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:Td,iridescence_pars_fragment:wd,opaque_fragment:Ad,packing:Rd,premultiplied_alpha_fragment:Cd,project_vertex:Pd,dithering_fragment:Ld,dithering_pars_fragment:Dd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Ud,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Fd,shadowmap_vertex:Od,shadowmask_pars_fragment:Bd,skinbase_vertex:zd,skinning_pars_vertex:Gd,skinning_vertex:Hd,skinnormal_vertex:Vd,specularmap_fragment:kd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:qd,transmission_fragment:Yd,transmission_pars_fragment:Kd,uv_pars_fragment:Zd,uv_pars_vertex:$d,uv_vertex:Jd,worldpos_vertex:Qd,background_vert:jd,background_frag:ef,backgroundCube_vert:tf,backgroundCube_frag:nf,cube_vert:sf,cube_frag:rf,depth_vert:af,depth_frag:of,distance_vert:lf,distance_frag:cf,equirect_vert:hf,equirect_frag:uf,linedashed_vert:df,linedashed_frag:ff,meshbasic_vert:pf,meshbasic_frag:mf,meshlambert_vert:gf,meshlambert_frag:_f,meshmatcap_vert:xf,meshmatcap_frag:vf,meshnormal_vert:Mf,meshnormal_frag:Sf,meshphong_vert:Ef,meshphong_frag:yf,meshphysical_vert:bf,meshphysical_frag:Tf,meshtoon_vert:wf,meshtoon_frag:Af,points_vert:Rf,points_frag:Cf,shadow_vert:Pf,shadow_frag:Lf,sprite_vert:Df,sprite_frag:If},he={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},fn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};fn.physical={uniforms:Gt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Us={r:0,b:0,g:0},Uf=new pt,Yl=new Ie;Yl.set(-1,0,0,0,1,0,0,0,1);function Nf(i,e,t,n,s,r){const a=new He(0);let o=s===!0?0:1,h,c,d=null,p=0,u=null;function m(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const M=S.backgroundBlurriness>0;w=e.get(w,M)}return w}function x(S){let w=!1;const M=m(S);M===null?f(a,o):M&&M.isColor&&(f(M,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){const M=m(w);M&&(M.isCubeTexture||M.mapping===js)?(c===void 0&&(c=new Pe(new zi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ui(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yl),c.material.toneMapped=qe.getTransfer(M.colorSpace)!==tt,(d!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new Pe(new ai(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ui(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=qe.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,p=M.version,u=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function f(S,w){S.getRGB(Us,Vl(i)),t.buffers.color.setClear(Us.r,Us.g,Us.b,w,r)}function l(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:x,addToRenderList:y,dispose:l}}function Ff(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(D,N,H,U,G){let q=!1;const k=p(D,U,H,N);r!==k&&(r=k,c(r.object)),q=m(D,U,H,G),q&&x(D,U,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(D,N,H,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function d(D){return i.deleteVertexArray(D)}function p(D,N,H,U){const G=U.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const k=D.isInstancedMesh===!0?D.id:0;let te=q[k];te===void 0&&(te={},q[k]=te);let X=te[H.id];X===void 0&&(X={},te[H.id]=X);let Q=X[G];return Q===void 0&&(Q=u(h()),X[G]=Q),Q}function u(D){const N=[],H=[],U=[];for(let G=0;G<t;G++)N[G]=0,H[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:U,object:D,attributes:{},index:null}}function m(D,N,H,U){const G=r.attributes,q=N.attributes;let k=0;const te=H.getAttributes();for(const X in te)if(te[X].location>=0){const ee=G[X];let Ae=q[X];if(Ae===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor)),ee===void 0||ee.attribute!==Ae||Ae&&ee.data!==Ae.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function x(D,N,H,U){const G={},q=N.attributes;let k=0;const te=H.getAttributes();for(const X in te)if(te[X].location>=0){let ee=q[X];ee===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const Ae={};Ae.attribute=ee,ee&&ee.data&&(Ae.data=ee.data),G[X]=Ae,k++}r.attributes=G,r.attributesNum=k,r.index=U}function y(){const D=r.newAttributes;for(let N=0,H=D.length;N<H;N++)D[N]=0}function f(D){l(D,0)}function l(D,N){const H=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;H[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),G[D]!==N&&(i.vertexAttribDivisor(D,N),G[D]=N)}function S(){const D=r.newAttributes,N=r.enabledAttributes;for(let H=0,U=N.length;H<U;H++)N[H]!==D[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function w(D,N,H,U,G,q,k){k===!0?i.vertexAttribIPointer(D,N,H,G,q):i.vertexAttribPointer(D,N,H,U,G,q)}function M(D,N,H,U){y();const G=U.attributes,q=H.getAttributes(),k=N.defaultAttributeValues;for(const te in q){const X=q[te];if(X.location>=0){let Q=G[te];if(Q===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const ee=Q.normalized,Ae=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;const je=ye.buffer,ke=ye.type,Ye=ye.bytesPerElement,K=ke===i.INT||ke===i.UNSIGNED_INT||Q.gpuType===Pa;if(Q.isInterleavedBufferAttribute){const j=Q.data,_e=j.stride,De=Q.offset;if(j.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)l(X.location+me,j.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<X.locationSize;me++)f(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,je);for(let me=0;me<X.locationSize;me++)w(X.location+me,Ae/X.locationSize,ke,ee,_e*Ye,(De+Ae/X.locationSize*me)*Ye,K)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)l(X.location+j,Q.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)f(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,je);for(let j=0;j<X.locationSize;j++)w(X.location+j,Ae/X.locationSize,ke,ee,Ae*Ye,Ae/X.locationSize*j*Ye,K)}}else if(k!==void 0){const ee=k[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}S()}function E(){b();for(const D in n){const N=n[D];for(const H in N){const U=N[H];for(const G in U){const q=U[G];for(const k in q)d(q[k].object),delete q[k];delete U[G]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;const N=n[D.id];for(const H in N){const U=N[H];for(const G in U){const q=U[G];for(const k in q)d(q[k].object),delete q[k];delete U[G]}}delete n[D.id]}function R(D){for(const N in n){const H=n[N];for(const U in H){const G=H[U];if(G[D.id]===void 0)continue;const q=G[D.id];for(const k in q)d(q[k].object),delete q[k];delete G[D.id]}}}function _(D){for(const N in n){const H=n[N],U=D.isInstancedMesh===!0?D.id:0,G=H[U];if(G!==void 0){for(const q in G){const k=G[q];for(const te in k)d(k[te].object),delete k[te];delete G[q]}delete H[U],Object.keys(H).length===0&&delete n[N]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:f,disableUnusedAttributes:S}}function Of(i,e,t){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),t.update(c,n,1)}function a(h,c,d){d!==0&&(i.drawArraysInstanced(n,h,c,d),t.update(c,n,d))}function o(h,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,d);let u=0;for(let m=0;m<d;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zt&&R!==mn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=h(c);d!==c&&(Ce("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:f,maxAttributes:l,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,maxSamples:E,samples:T}}function zf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Wn,o=new Ie,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,m){const x=p.clippingPlanes,y=p.clipIntersection,f=p.clipShadows,l=i.get(p);if(!s||x===null||x.length===0||r&&!f)r?d(null):c();else{const S=r?0:n,w=S*4;let M=l.clippingState||null;h.value=M,M=d(x,u,w,m);for(let E=0;E!==w;++E)M[E]=t[E];l.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,m,x){const y=p!==null?p.length:0;let f=null;if(y!==0){if(f=h.value,x!==!0||f===null){const l=m+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<l)&&(f=new Float32Array(l));for(let w=0,M=m;w!==y;++w,M+=4)a.copy(p[w]).applyMatrix4(S,o),a.normal.toArray(f,M),f[M+3]=a.constant}h.value=f,h.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}const Ri=4,Gf=6,Hf=20,Vf=256,qi=new Ka,qo=new He;let Lr=null,Dr=0,Ir=0,Ur=!1;const kf=new z,jn=new z;class Yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=kf}=r;Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr,Dr,Ir),this._renderer.xr.enabled=Ur,e.scissorTest=!1,yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:vn,format:on,colorSpace:$s,depthBuffer:!1},s=Ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wf(r)),this._blurMaterial=qf(r,e,t),this._ggxMaterial=Xf(r,e,t)}return s}_compileMaterial(e){const t=new Pe(new Wt,e);this._renderer.compile(t,qi)}_sceneToCubeUV(e,t,n,s,r){const h=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(qo),p.toneMapping=_n,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new zi,new pn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,f=y.material;let l=!1;const S=e.background;S?S.isColor&&(f.color.copy(S),e.background=null,l=!0):(f.color.copy(qo),l=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(h.up.set(0,c[w],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[w],r.y,r.z)):M===1?(h.up.set(0,0,c[w]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[w],r.z)):(h.up.set(0,c[w],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[w]));const E=this._cubeSize;yi(s,M*E,w>2?E:0,E,E),p.setRenderTarget(s),l&&p.render(y,h),p.render(e,h)}p.toneMapping=m,p.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===si||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const h=this._cubeSize;yi(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(a,qi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const h=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=c*1.25,m=p*u,{_lodMax:x}=this,y=this._sizeLods[n],f=3*y*(n>x-Ri?n-x+Ri:0),l=4*(this._cubeSize-y);h.envMap.value=e.texture,h.roughness.value=m,h.mipInt.value=x-t,yi(r,f,l,3*y,2*y),s.setRenderTarget(r),s.render(o,qi),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=x-n,yi(e,f,l,3*y,2*y),s.setRenderTarget(e),s.render(o,qi)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[s],p=3*d*(s>this._lodMax-Ri?s-this._lodMax+Ri:0),u=4*(this._cubeSize-d);yi(t,p,u,3*d,2*d),a.setRenderTarget(t),a.render(h,qi)}}function Wf(i){const e=[],t=[];let n=i;const s=i-Ri+1+Gf;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),h=-o,c=1+o,d=[h,h,c,h,c,c,h,h,c,c,h,c],p=6,u=6,m=3,x=new Float32Array(m*u*p),y=new Float32Array(m*u*p);for(let l=0;l<p;l++){const S=l%3*2/3-1,w=l>2?0:-1,M=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];x.set(M,m*u*l);for(let E=0;E<u;E++){const T=d[E*2]*2-1,R=d[E*2+1]*2-1;l===0?jn.set(1,R,T):l===1?jn.set(-T,1,-R):l===2?jn.set(-T,R,1):l===3?jn.set(-1,R,-T):l===4?jn.set(-T,-1,R):jn.set(T,R,-1),jn.toArray(y,(l*u+E)*m)}}const f=new Wt;f.setAttribute("position",new In(x,m)),f.setAttribute("outputDirection",new In(y,m)),t.push(new Pe(f,null)),n>Ri&&n--}return{lodMeshes:t,sizeLods:e}}function Ko(i,e,t){const n=new ln(i,e,t);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xf(i,e,t){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function qf(i,e,t){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Zo(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function $o(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kl extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Ln});r.uniforms.tEquirect.value=t;const a=new Pe(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Ot),new Zh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Yf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===rr||m===ar)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const y=new Kl(x.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,x=m===rr||m===ar,y=m===si||m===Di;if(x||y){let f=t.get(u);const l=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==l)return n===null&&(n=new Yo(i)),f=x?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{const S=u.image;return x&&S&&S.height>0||y&&S&&h(S)?(n===null&&(n=new Yo(i)),f=x?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",d),f.texture):null}}}return u}function o(u,m){return m===rr?u.mapping=si:m===ar&&(u.mapping=Di),u}function h(u){let m=0;const x=6;for(let y=0;y<x;y++)u[y]!==void 0&&m++;return m===x}function c(u){const m=u.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Kf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function Zf(i,e,t,n){const s={},r=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function h(p){const u=p.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,x=p.attributes.position;let y=0;if(x===void 0)return;if(m!==null){const S=m.array;y=m.version;for(let w=0,M=S.length;w<M;w+=3){const E=S[w+0],T=S[w+1],R=S[w+2];u.push(E,T,T,R,R,E)}}else{const S=x.array;y=x.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const E=w+0,T=w+1,R=w+2;u.push(E,T,T,R,R,E)}}const f=new(x.count>=65535?Bl:Ol)(u,1);f.version=y;const l=r.get(p);l&&e.remove(l),r.set(p,f)}function d(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:h,getWireframeAttribute:d}}function $f(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,u){i.drawElements(n,u,r,p*a),t.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),t.update(u,n,m))}function d(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let y=0;for(let f=0;f<m;f++)y+=u[f];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=d}function Jf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qf(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,h){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var m=C;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),f===!0&&(M=3);let E=o.attributes.position.count*M,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*T*4*p),_=new Ul(R,E,T,p);_.type=mn,_.needsUpdate=!0;const b=M*4;for(let D=0;D<p;D++){const N=l[D],H=S[D],U=w[D],G=E*T*4*D;for(let q=0;q<N.count;q++){const k=q*b;x===!0&&(s.fromBufferAttribute(N,q),R[G+k+0]=s.x,R[G+k+1]=s.y,R[G+k+2]=s.z,R[G+k+3]=0),y===!0&&(s.fromBufferAttribute(H,q),R[G+k+4]=s.x,R[G+k+5]=s.y,R[G+k+6]=s.z,R[G+k+7]=0),f===!0&&(s.fromBufferAttribute(U,q),R[G+k+8]=s.x,R[G+k+9]=s.y,R[G+k+10]=s.z,R[G+k+11]=U.itemSize===4?s.w:1)}}u={count:p,texture:_,size:new Ve(E,T)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let f=0;f<c.length;f++)x+=c[f];const y=o.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jf(i,e,t,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",h)===!1&&c.addEventListener("dispose",h),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return u}function o(){r=new WeakMap}function h(c){const d=c.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const ep={[vl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[Tl]:"NEUTRAL_TONE_MAPPING",[yl]:"CUSTOM_TONE_MAPPING"};function tp(i,e,t,n,s,r){const a=new ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,h=null;const c=new Wt;c.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ct([0,2,0,0,2,0],2));const d=new Bh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Pe(c,d),u=new Ka(-1,1,1,-1,0,1);let m=null,x=null,y=!1,f,l=null,S=[],w=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),h!==null&&h.setSize(M,E);for(let T=0;T<S.length;T++){const R=S[T];R.setSize&&R.setSize(M,E)}},this.setEffects=function(M){S=M,w=S.length>0&&S[0].isRenderPass===!0;const E=a.width,T=a.height;S.length>0&&o===null&&(o=new ln(E,T,{type:vn,depthBuffer:!1,stencilBuffer:!1}),h=new ln(E,T,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){const _=S[R];_.setSize&&_.setSize(E,T)}},this.begin=function(M,E){if(y||M.toneMapping===_n&&S.length===0)return!1;if(l=E,E!==null){const T=E.width,R=E.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return w===!1&&M.setRenderTarget(a),f=M.toneMapping,M.toneMapping=_n,!0},this.hasRenderPass=function(){return w},this.end=function(M,E){M.toneMapping=f,y=!0;let T=a,R=o;for(let _=0;_<S.length;_++){const b=S[_];b.enabled!==!1&&(b.render(M,R,T,E),b.needsSwap!==!1&&(T=R,R=R===o?h:o))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,d.defines={},qe.getTransfer(m)===tt&&(d.defines.SRGB_TRANSFER="");const _=ep[x];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(l),M.render(p,u),l=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),c.dispose(),d.dispose()}}const Zl=new wt,Ta=new ls(1,1),$l=new Ul,Jl=new mh,Ql=new Gl,Jo=[],Qo=[],jo=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function Gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Jo[s];if(r===void 0&&(r=new Float32Array(s),Jo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nr(i,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),yt(t,n)}}function op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;el.set(n),i.uniformMatrix3fv(this.addr,!1,el),yt(t,n)}}function lp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;jo.set(n),i.uniformMatrix4fv(this.addr,!1,jo),yt(t,n)}}function cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function _p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ta.compareFunction=t.isReversedDepthBuffer()?Ba:Oa,r=Ta):r=Zl,t.setTexture2D(e||r,s)}function xp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jl,s)}function vp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ql,s)}function Mp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$l,s)}function Sp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return Mp}}function Ep(i,e){i.uniform1fv(this.addr,e)}function yp(i,e){const t=Gi(e,this.size,2);i.uniform2fv(this.addr,t)}function bp(i,e){const t=Gi(e,this.size,3);i.uniform3fv(this.addr,t)}function Tp(i,e){const t=Gi(e,this.size,4);i.uniform4fv(this.addr,t)}function wp(i,e){const t=Gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ap(i,e){const t=Gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rp(i,e){const t=Gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cp(i,e){i.uniform1iv(this.addr,e)}function Pp(i,e){i.uniform2iv(this.addr,e)}function Lp(i,e){i.uniform3iv(this.addr,e)}function Dp(i,e){i.uniform4iv(this.addr,e)}function Ip(i,e){i.uniform1uiv(this.addr,e)}function Up(i,e){i.uniform2uiv(this.addr,e)}function Np(i,e){i.uniform3uiv(this.addr,e)}function Fp(i,e){i.uniform4uiv(this.addr,e)}function Op(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ta:a=Zl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Bp(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jl,r[a])}function zp(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ql,r[a])}function Gp(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$l,r[a])}function Hp(i){switch(i){case 5126:return Ep;case 35664:return yp;case 35665:return bp;case 35666:return Tp;case 35674:return wp;case 35675:return Ap;case 35676:return Rp;case 5124:case 35670:return Cp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Dp;case 5125:return Ip;case 36294:return Up;case 36295:return Np;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Gp}}class Vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sp(t.type)}}class kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hp(t.type)}}class Wp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function nl(i,e){i.seq.push(e),i.map[e.id]=e}function Xp(i,e,t){const n=i.name,s=n.length;for(Nr.lastIndex=0;;){const r=Nr.exec(n),a=Nr.lastIndex;let o=r[1];const h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){nl(t,c===void 0?new Vp(o,i,e):new kp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Wp(o),nl(t,p)),t=p}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),h=e.getUniformLocation(t,o.name);Xp(o,h,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function il(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qp=37297;let Yp=0;function Kp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const sl=new Ie;function Zp(i){qe._getMatrix(sl,qe.workingColorSpace,i);const e=`mat3( ${sl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Js:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kp(i.getShaderSource(e),o)}else return r}function $p(i,e){const t=Zp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jp={[vl]:"Linear",[Ml]:"Reinhard",[Sl]:"Cineon",[El]:"ACESFilmic",[bl]:"AgX",[Tl]:"Neutral",[yl]:"Custom"};function Qp(i,e){const t=Jp[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new z;function jp(){qe.getLuminanceCoefficients(Ns);const i=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function tm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $i(i){return i!==""}function al(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(i){return i.replace(im,rm)}const sm=new Map;function rm(i,e){let t=Fe[e];if(t===void 0){const n=sm.get(e);if(n!==void 0)t=Fe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wa(t)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(i){return i.replace(am,om)}function om(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lm={[zs]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function cm(i){return lm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hm={[si]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE_UV"};function um(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const dm={[Di]:"ENVMAP_MODE_REFRACTION"};function fm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pm={[Ca]:"ENVMAP_BLENDING_MULTIPLY",[Lc]:"ENVMAP_BLENDING_MIX",[Dc]:"ENVMAP_BLENDING_ADD"};function mm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pm[i.combine]||"ENVMAP_BLENDING_NONE"}function gm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _m(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const h=cm(t),c=um(t),d=fm(t),p=mm(t),u=gm(t),m=em(t),x=tm(r),y=s.createProgram();let f,l,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($i).join(`
`),f.length>0&&(f+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($i).join(`
`),l.length>0&&(l+=`
`)):(f=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),l=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Fe.tonemapping_pars_fragment:"",t.toneMapping!==_n?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),a=wa(a),a=al(a,t),a=ol(a,t),o=wa(o),o=al(o,t),o=ol(o,t),a=ll(a),o=ll(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,l=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const w=S+f+a,M=S+l+o,E=il(s,s.VERTEX_SHADER,w),T=il(s,s.FRAGMENT_SHADER,M);s.attachShader(y,E),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(T)||"",G=N.trim(),q=H.trim(),k=U.trim();let te=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,T);else{const Q=rl(s,E,"vertex"),ee=rl(s,T,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+Q+`
`+ee)}else G!==""?Ce("WebGLProgram: Program Info Log:",G):(q===""||k==="")&&(X=!1);X&&(D.diagnostics={runnable:te,programLog:G,vertexShader:{log:q,prefix:f},fragmentShader:{log:k,prefix:l}})}s.deleteShader(E),s.deleteShader(T),_=new Xs(s,y),b=nm(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,qp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=T,this}let xm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mm(e),t.set(e,n)),n}}class Mm{constructor(e){this.id=xm++,this.code=e,this.usedTimes=0}}function Sm(i){return i===ri||i===Ys||i===Ks}function Em(i,e,t,n,s,r){const a=new Nl,o=new vm,h=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return h.add(_),_===0?"uv":`uv${_}`}function y(_,b,C,D,N,H){const U=D.fog,G=N.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||q,k),X=te&&te.mapping===js?te.image.height:null,Q=m[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=ee!==void 0?ee.length:0;let ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let je,ke,Ye,K;if(Q){const rt=fn[Q];je=rt.vertexShader,ke=rt.fragmentShader}else{je=_.vertexShader,ke=_.fragmentShader;const rt=o.getVertexShaderStage(_),Je=o.getFragmentShaderStage(_);o.update(_,rt,Je),Ye=rt.id,K=Je.id}const j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,Oe=!!_.map,Mt=!!_.matcap,ze=!!te,Ze=!!_.aoMap,st=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,bt=!!_.displacementMap,Vt=!!_.emissiveMap,ht=!!_.metalnessMap,gt=!!_.roughnessMap,I=_.anisotropy>0,Rt=_.clearcoat>0,et=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,F=_.sheen>0,V=_.transmission>0,Y=I&&!!_.anisotropyMap,ie=Rt&&!!_.clearcoatMap,se=Rt&&!!_.clearcoatNormalMap,Z=Rt&&!!_.clearcoatRoughnessMap,J=g&&!!_.iridescenceMap,re=g&&!!_.iridescenceThicknessMap,be=F&&!!_.sheenColorMap,ce=F&&!!_.sheenRoughnessMap,ae=!!_.specularMap,Te=!!_.specularColorMap,Re=!!_.specularIntensityMap,Ue=V&&!!_.transmissionMap,L=V&&!!_.thicknessMap,oe=!!_.gradientMap,$=!!_.alphaMap,le=_.alphaTest>0,fe=!!_.alphaHash,ne=!!_.extensions;let we=_n;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=i.toneMapping);const Se={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:je,fragmentShader:ke,defines:_.defines,customVertexShaderID:Ye,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:Mt,envMap:ze,envMapMode:ze&&te.mapping,envMapCubeUVHeight:X,aoMap:Ze,lightMap:st,bumpMap:We,normalMap:lt,displacementMap:bt,emissiveMap:Vt,normalMapObjectSpace:lt&&_.normalMapType===Nc,normalMapTangentSpace:lt&&_.normalMapType===Zs,packedNormalMap:lt&&_.normalMapType===Zs&&Sm(_.normalMap.format),metalnessMap:ht,roughnessMap:gt,anisotropy:I,anisotropyMap:Y,clearcoat:Rt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:Z,dispersion:et,retroreflection:A,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:re,sheen:F,sheenColorMap:be,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:Te,specularIntensityMap:Re,transmission:V,transmissionMap:Ue,thicknessMap:L,gradientMap:oe,opaque:_.transparent===!1&&_.blending===Qi&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:le,alphaHash:fe,combine:_.combine,mapUv:Oe&&x(_.map.channel),aoMapUv:Ze&&x(_.aoMap.channel),lightMapUv:st&&x(_.lightMap.channel),bumpMapUv:We&&x(_.bumpMap.channel),normalMapUv:lt&&x(_.normalMap.channel),displacementMapUv:bt&&x(_.displacementMap.channel),emissiveMapUv:Vt&&x(_.emissiveMap.channel),metalnessMapUv:ht&&x(_.metalnessMap.channel),roughnessMapUv:gt&&x(_.roughnessMap.channel),anisotropyMapUv:Y&&x(_.anisotropyMap.channel),clearcoatMapUv:ie&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ce&&x(_.sheenRoughnessMap.channel),specularMapUv:ae&&x(_.specularMap.channel),specularColorMapUv:Te&&x(_.specularColorMap.channel),specularIntensityMapUv:Re&&x(_.specularIntensityMap.channel),transmissionMapUv:Ue&&x(_.transmissionMap.channel),thicknessMapUv:L&&x(_.thicknessMap.channel),alphaMapUv:$&&x(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(lt||I),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Oe||$),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ye,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===tt,decodeVideoTextureEmissive:Vt&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=h.has(1),Se.vertexUv2s=h.has(2),Se.vertexUv3s=h.has(3),h.clear(),Se}function f(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(l(b,_),S(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function l(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const b=m[_.type];let C;if(b){const D=fn[b];C=Nh.clone(D.uniforms)}else C=_.uniforms;return C}function M(_,b){let C=d.get(b);return C!==void 0?++C.usedTimes:(C=new _m(i,b,_,s),c.push(C),d.set(b,C)),C}function E(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:f,getUniforms:w,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:R}}function ym(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function hl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ul(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,y,f,l){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:f,group:l},i[e]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=x,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=f,S.group=l),e++,S}function h(u,m,x,y,f,l,S){S.reversedDepth===!0&&(f=-f);const w=o(u,m,x,y,f,l);x.transmission>0?n.push(w):x.transparent===!0?s.push(w):t.push(w)}function c(u,m,x,y,f,l){const S=o(u,m,x,y,f,l);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):t.unshift(S)}function d(u,m){t.length>1&&t.sort(u||bm),n.length>1&&n.sort(m||hl),s.length>1&&s.sort(m||hl)}function p(){for(let u=e,m=i.length;u<m;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:h,unshift:c,finish:p,sort:d}}function Tm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ul,i.set(n,[a])):s>=r.length?(a=new ul,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new He};break;case"SpotLight":t={position:new z,direction:new z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Rm=0;function Cm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pm(i){const e=new wm,t=Am(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new pt,a=new pt;function o(c){let d=0,p=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let m=0,x=0,y=0,f=0,l=0,S=0,w=0,M=0,E=0,T=0,R=0,_=0,b=0,C=0;c.sort(Cm);for(let N=0,H=c.length;N<H;N++){const U=c[N],G=U.color,q=U.intensity,k=U.distance;let te=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ri?te=U.shadow.map.texture:te=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=G.r*q,p+=G.g*q,u+=G.b*q;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],q);C++}else if(U.isSunLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,ee=t.get(U);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=ee,n.sunShadowMap[x]=te;const Ae=Q.getViewportCount();for(let ye=0;ye<Ae;ye++)n.sunShadowMatrix[y+ye]=Q.getMatrix(ye),n.sunShadowCascade[y+ye]=Q._cascadeData[ye];y+=Ae,x++}n.sun[m]=X,m++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,ee=t.get(U);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=U.shadow.matrix,E++}n.directional[f]=X,f++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(G).multiplyScalar(q),X.distance=k,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[S]=X;const Q=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,Q.updateMatrices(U),U.castShadow&&b++),n.spotLightMatrix[S]=Q.matrix,U.castShadow){const ee=t.get(U);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=te,R++}S++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(G).multiplyScalar(q),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=X,w++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,ee=t.get(U);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[l]=ee,n.pointShadowMap[l]=te,n.pointShadowMatrix[l]=U.shadow.matrix,T++}n.point[l]=X,l++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(q),X.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[M]=X,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;const D=n.hash;(D.sunLength!==m||D.directionalLength!==f||D.pointLength!==l||D.spotLength!==S||D.rectAreaLength!==w||D.hemiLength!==M||D.numSunShadows!==x||D.numDirectionalShadows!==E||D.numPointShadows!==T||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=f,n.spot.length=S,n.rectArea.length=w,n.point.length=l,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,D.sunLength=m,D.directionalLength=f,D.pointLength=l,D.spotLength=S,D.rectAreaLength=w,D.hemiLength=M,D.numSunShadows=x,D.numDirectionalShadows=E,D.numPointShadows=T,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=C,n.version=Rm++)}function h(c,d){let p=0,u=0,m=0,x=0,y=0,f=0;const l=d.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const M=c[S];if(M.isSunLight){const E=n.sun[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(l),p++}else if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(l),u++}else if(M.isSpotLight){const E=n.spot[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(l),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(l),x++}else if(M.isRectAreaLight){const E=n.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(l),a.identity(),r.copy(M.matrixWorld),r.premultiply(l),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(l),m++}else if(M.isHemisphereLight){const E=n.hemi[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(l),f++}}}return{setup:o,setupView:h,state:n}}function dl(i){const e=new Pm(i),t=[],n=[],s=[];function r(u){p.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function h(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:h}}function Lm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new dl(i),e.set(s,[o])):r>=a.length?(o=new dl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Um=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Nm=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],fl=new pt,Yi=new z,Fr=new z;function Fm(i,e,t){let n=new ka;const s=new Ve,r=new Ve,a=new dt,o=new zh,h=new Gh,c={},d=t.maxTextureSize,p={[ii]:Ht,[Ht]:ii,[Cn]:Cn},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Dm,fragmentShader:Im}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new Wt;x.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pe(x,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let l=this.type;this.render=function(T,R,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===dc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ln),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=l!==this.type;H&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=T.length;U<G;U++){const q=T[U],k=q.shadow;if(k===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const te=k.getFrameExtents();s.multiply(te),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/te.x),s.x=r.x*te.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/te.y),s.y=r.y*te.y,k.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Zi){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ln(s.x,s.y,{format:ri,type:vn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new ls(s.x,s.y,mn),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=Un,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=St,k.map.depthTexture.magFilter=St}else q.isPointLight?(k.map=new Kl(s.x),k.map.depthTexture=new Ih(s.x,xn)):(k.map=new ln(s.x,s.y),k.map.depthTexture=new ls(s.x,s.y,xn)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=Un,this.type===zs?(k.map.depthTexture.compareFunction=X?Ba:Oa,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=St,k.map.depthTexture.magFilter=St);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,_);for(let ee=0;ee<Q;ee++){const Ae=k.getCamera(ee);if(q.isPointLight){const ye=k.camera,je=k.matrix,ke=q.distance||ye.far;ke!==ye.far&&(ye.far=ke,ye.updateProjectionMatrix()),Yi.setFromMatrixPosition(q.matrixWorld),ye.position.copy(Yi),Fr.copy(ye.position),Fr.add(Um[ee]),ye.up.copy(Nm[ee]),ye.lookAt(Fr),ye.updateMatrixWorld(),je.makeTranslation(-Yi.x,-Yi.y,-Yi.z),fl.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),k._frustum.setFromProjectionMatrix(fl,ye.coordinateSystem,ye.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(k.map),i.clear());const ye=k.getViewport(ee);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),N.viewport(a)}n=k.getFrustum(ee),M(R,_,Ae,q,this.type)}k.isPointLightShadow!==!0&&this.type===Zi&&S(k,_),k.needsUpdate=!1}l=this.type,f.needsUpdate=!1,i.setRenderTarget(b,C,D)};function S(T,R){const _=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new ln(s.x,s.y,{format:ri,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,_,m,y,null)}function w(T,R,_,b){let C=null;const D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?h:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=C.uuid,H=R.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let G=U[H];G===void 0&&(G=C.clone(),U[H]=G,R.addEventListener("dispose",E)),C=G}if(C.visible=R.visible,C.wireframe=R.wireframe,b===Zi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=_}return C}function M(T,R,_,b,C){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Zi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const H=e.update(T),U=T.material;if(Array.isArray(U)){const G=H.groups;for(let q=0,k=G.length;q<k;q++){const te=G[q],X=U[te.materialIndex];if(X&&X.visible){const Q=w(T,X,b,C);T.onBeforeShadow(i,T,R,_,H,Q,te),i.renderBufferDirect(_,null,H,Q,T,te),T.onAfterShadow(i,T,R,_,H,Q,te)}}}else if(U.visible){const G=w(T,U,b,C);T.onBeforeShadow(i,T,R,_,H,G,null),i.renderBufferDirect(_,null,H,G,T,null),T.onAfterShadow(i,T,R,_,H,G,null)}}const N=T.children;for(let H=0,U=N.length;H<U;H++)M(N[H],R,_,b,C)}function E(T){T.target.removeEventListener("dispose",E);for(const _ in c){const b=c[_],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Om(i,e){function t(){let L=!1;const oe=new dt;let $=null;const le=new dt(0,0,0,0);return{setMask:function(fe){$!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){L=fe},setClear:function(fe,ne,we,Se,rt){rt===!0&&(fe*=Se,ne*=Se,we*=Se),oe.set(fe,ne,we,Se),le.equals(oe)===!1&&(i.clearColor(fe,ne,we,Se),le.copy(oe))},reset:function(){L=!1,$=null,le.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,$=null,le=null,fe=null;return{setReversed:function(ne){if(oe!==ne){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;const Se=fe;fe=null,this.setClear(Se)}},getReversed:function(){return oe},setTest:function(ne){ne?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ne){$!==ne&&!L&&(i.depthMask(ne),$=ne)},setFunc:function(ne){if(oe&&(ne=Yc[ne]),le!==ne){switch(ne){case Hr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case kr:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case qr:i.depthFunc(i.GREATER);break;case Yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ne}},setLocked:function(ne){L=ne},setClear:function(ne){fe!==ne&&(fe=ne,oe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){L=!1,$=null,le=null,fe=null,oe=!1}}}function s(){let L=!1,oe=null,$=null,le=null,fe=null,ne=null,we=null,Se=null,rt=null;return{setTest:function(Je){L||(Je?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!L&&(i.stencilMask(Je),oe=Je)},setFunc:function(Je,jt,cn){($!==Je||le!==jt||fe!==cn)&&(i.stencilFunc(Je,jt,cn),$=Je,le=jt,fe=cn)},setOp:function(Je,jt,cn){(ne!==Je||we!==jt||Se!==cn)&&(i.stencilOp(Je,jt,cn),ne=Je,we=jt,Se=cn)},setLocked:function(Je){L=Je},setClear:function(Je){rt!==Je&&(i.clearStencil(Je),rt=Je)},reset:function(){L=!1,oe=null,$=null,le=null,fe=null,ne=null,we=null,Se=null,rt=null}}}const r=new t,a=new n,o=new s,h=new WeakMap,c=new WeakMap;let d={},p={},u={},m=new WeakMap,x=[],y=null,f=!1,l=null,S=null,w=null,M=null,E=null,T=null,R=null,_=new He(0,0,0),b=0,C=!1,D=null,N=null,H=null,U=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,te=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=te>=2);let Q=null,ee={};const Ae=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),je=new dt().fromArray(Ae),ke=new dt().fromArray(ye);function Ye(L,oe,$,le){const fe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(L,ne),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<$;we++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ne}const K={};K[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(ns),We(!1),lt(mo),j(i.CULL_FACE),Ze(Ln);function j(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function _e(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function De(L,oe){return u[L]!==oe?(i.bindFramebuffer(L,oe),u[L]=oe,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(L,oe){let $=x,le=!1;if(L){$=m.get(oe),$===void 0&&($=[],m.set(oe,$));const fe=L.textures;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,we=fe.length;ne<we;ne++)$[ne]=i.COLOR_ATTACHMENT0+ne;$.length=fe.length,le=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,le=!0);le&&i.drawBuffers($)}function Oe(L){return y!==L?(i.useProgram(L),y=L,!0):!1}const Mt={[wi]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};Mt[gc]=i.MIN,Mt[_c]=i.MAX;const ze={[xc]:i.ZERO,[vc]:i.ONE,[Mc]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[Ec]:i.DST_ALPHA,[Sc]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,oe,$,le,fe,ne,we,Se,rt,Je){if(L===Ln){f===!0&&(_e(i.BLEND),f=!1);return}if(f===!1&&(j(i.BLEND),f=!0),L!==fc){if(L!==l||Je!==C){if((S!==wi||E!==wi)&&(i.blendEquation(i.FUNC_ADD),S=wi,E=wi),Je)switch(L){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",L);break}else switch(L){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _o:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xo:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",L);break}w=null,M=null,T=null,R=null,_.set(0,0,0),b=0,l=L,C=Je}return}fe=fe||oe,ne=ne||$,we=we||le,(oe!==S||fe!==E)&&(i.blendEquationSeparate(Mt[oe],Mt[fe]),S=oe,E=fe),($!==w||le!==M||ne!==T||we!==R)&&(i.blendFuncSeparate(ze[$],ze[le],ze[ne],ze[we]),w=$,M=le,T=ne,R=we),(Se.equals(_)===!1||rt!==b)&&(i.blendColor(Se.r,Se.g,Se.b,rt),_.copy(Se),b=rt),l=L,C=!1}function st(L,oe){L.side===Cn?_e(i.CULL_FACE):j(i.CULL_FACE);let $=L.side===Ht;oe&&($=!$),We($),L.blending===Qi&&L.transparent===!1?Ze(Ln):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function lt(L){L!==hc?(j(i.CULL_FACE),L!==N&&(L===mo?i.cullFace(i.BACK):L===uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),N=L}function bt(L){L!==H&&(k&&i.lineWidth(L),H=L)}function Vt(L,oe,$){L?(j(i.POLYGON_OFFSET_FILL),(U!==oe||G!==$)&&(U=oe,G=$,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,$))):_e(i.POLYGON_OFFSET_FILL)}function ht(L){L?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function gt(L){L===void 0&&(L=i.TEXTURE0+q-1),Q!==L&&(i.activeTexture(L),Q=L)}function I(L,oe,$){$===void 0&&(Q===null?$=i.TEXTURE0+q-1:$=Q);let le=ee[$];le===void 0&&(le={type:void 0,texture:void 0},ee[$]=le),(le.type!==L||le.texture!==oe)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(L,oe||K[L]),le.type=L,le.texture=oe)}function Rt(){const L=ee[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function g(){try{i.texSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function se(){try{i.texStorage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function Z(){try{i.texImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function J(){try{i.texImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function re(L){return p[L]!==void 0?p[L]:i.getParameter(L)}function be(L,oe){p[L]!==oe&&(i.pixelStorei(L,oe),p[L]=oe)}function ce(L){je.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function ae(L){ke.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ke.copy(L))}function Te(L,oe){let $=c.get(oe);$===void 0&&($=new WeakMap,c.set(oe,$));let le=$.get(L);le===void 0&&(le=i.getUniformBlockIndex(oe,L.name),$.set(L,le))}function Re(L,oe){const le=c.get(oe).get(L);h.get(oe)!==le&&(i.uniformBlockBinding(oe,le,L.__bindingPointIndex),h.set(oe,le))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},Q=null,ee={},u={},m=new WeakMap,x=[],y=null,f=!1,l=null,S=null,w=null,M=null,E=null,T=null,R=null,_=new He(0,0,0),b=0,C=!1,D=null,N=null,H=null,U=null,G=null,je.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_e,bindFramebuffer:De,drawBuffers:me,useProgram:Oe,setBlending:Ze,setMaterial:st,setFlipSided:We,setCullFace:lt,setLineWidth:bt,setPolygonOffset:Vt,setScissorTest:ht,activeTexture:gt,bindTexture:I,unbindTexture:Rt,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:Z,texImage3D:J,pixelStorei:be,getParameter:re,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:ce,viewport:ae,reset:Ue}}function Bm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,d=new WeakMap,p=new Set;let u;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,g){return x?new OffscreenCanvas(A,g):as("canvas")}function f(A,g,F){let V=1;const Y=et(A);if((Y.width>F||Y.height>F)&&(V=F/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(V*Y.width),se=Math.floor(V*Y.height);u===void 0&&(u=y(ie,se));const Z=g?y(ie,se):u;return Z.width=ie,Z.height=se,Z.getContext("2d").drawImage(A,0,0,ie,se),Ce("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ie+"x"+se+")."),Z}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function l(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,g,F,V,Y,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se;V&&(se=e.get("EXT_texture_norm16"),se||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8),F===i.UNSIGNED_SHORT&&se&&(Z=se.R16_EXT),F===i.SHORT&&se&&(Z=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8),F===i.UNSIGNED_SHORT&&se&&(Z=se.RG16_EXT),F===i.SHORT&&se&&(Z=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&se&&(Z=se.RGB16_EXT),F===i.SHORT&&se&&(Z=se.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){const J=ie?Js:qe.getTransfer(Y);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=J===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&se&&(Z=se.RGBA16_EXT),F===i.SHORT&&se&&(Z=se.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(A,g){let F;return A?g===null||g===xn||g===ss?F=i.DEPTH24_STENCIL8:g===mn?F=i.DEPTH32F_STENCIL8:g===is&&(F=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xn||g===ss?F=i.DEPTH_COMPONENT24:g===mn?F=i.DEPTH_COMPONENT32F:g===is&&(F=i.DEPTH_COMPONENT16),F}function T(A,g){return l(A)===!0||A.isFramebufferTexture&&A.minFilter!==St&&A.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),b(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),D(g)}function b(A){const g=n.get(A);if(g.__webglInit===void 0)return;const F=A.source,V=m.get(F);if(V){const Y=V[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(A),Object.keys(V).length===0&&m.delete(F)}n.remove(A)}function C(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const F=A.source,V=m.get(F);delete V[g.__cacheKey],a.memory.textures--}function D(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let Y=0;Y<g.__webglFramebuffer[V].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[V][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=A.textures;for(let V=0,Y=F.length;V<Y;V++){const ie=n.get(F[V]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(A)}let N=0;function H(){N=0}function U(){return N}function G(A){N=A}function q(){const A=N;return A>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function k(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function te(A,g){const F=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const V=A.image;if(V===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,A,g);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function X(A,g){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,g);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function Q(A,g){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function ee(A,g){const F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){De(F,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const Ae={[Ii]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},ye={[St]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[or]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},je={[Oc]:i.NEVER,[Vc]:i.ALWAYS,[Bc]:i.LESS,[Oa]:i.LEQUAL,[zc]:i.EQUAL,[Ba]:i.GEQUAL,[Gc]:i.GREATER,[Hc]:i.NOTEQUAL};function ke(A,g){if(g.type===mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===or||g.magFilter===ps||g.magFilter===ti||g.minFilter===Ot||g.minFilter===or||g.minFilter===ps||g.minFilter===ti)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ae[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ae[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ae[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ye[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,je[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===St||g.minFilter!==ps&&g.minFilter!==ti||g.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const V=g.source;let Y=m.get(V);Y===void 0&&(Y={},m.set(V,Y));const ie=k(g);if(ie!==A.__cacheKey){Y[ie]===void 0&&(Y[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Y[ie].usedTimes++;const se=Y[A.__cacheKey];se!==void 0&&(Y[A.__cacheKey].usedTimes--,se.usedTimes===0&&C(g)),A.__cacheKey=ie,A.__webglTexture=Y[ie].texture}return F}function K(A,g,F){return Math.floor(Math.floor(A/F)/g)}function j(A,g,F,V){const ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,V,g.data);else{ie.sort((be,ce)=>be.start-ce.start);let se=0;for(let be=1;be<ie.length;be++){const ce=ie[se],ae=ie[be],Te=ce.start+ce.count,Re=K(ae.start,g.width,4),Ue=K(ce.start,g.width,4);ae.start<=Te+1&&Re===Ue&&K(ae.start+ae.count-1,g.width,4)===Re?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ie[se]=ae)}ie.length=se+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let be=0,ce=ie.length;be<ce;be++){const ae=ie[be],Te=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Ue=Te%g.width,L=Math.floor(Te/g.width),oe=Re,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ue,L,oe,$,F,V,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function _e(A,g,F){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);const Y=Ye(A,g),ie=g.source;t.bindTexture(V,A.__webglTexture,i.TEXTURE0+F);const se=n.get(ie);if(ie.version!==se.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const $=qe.getPrimaries(qe.workingColorSpace),le=g.colorSpace===Xn?null:qe.getPrimaries(g.colorSpace),fe=g.colorSpace===Xn||$===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let J=f(g.image,!1,s.maxTextureSize);J=Rt(g,J);const re=r.convert(g.format,g.colorSpace),be=r.convert(g.type);let ce=M(g.internalFormat,re,be,g.normalized,g.colorSpace,g.isVideoTexture);ke(V,g);let ae;const Te=g.mipmaps,Re=g.isVideoTexture!==!0,Ue=se.__version===void 0||Y===!0,L=ie.dataReady,oe=T(g,J);if(g.isDepthTexture)ce=E(g.format===ni,g.type),Ue&&(Re?t.texStorage2D(i.TEXTURE_2D,1,ce,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,re,be,null));else if(g.isDataTexture)if(Te.length>0){Re&&Ue&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Te[0].width,Te[0].height);for(let $=0,le=Te.length;$<le;$++)ae=Te[$],Re?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,be,ae.data):t.texImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,re,be,ae.data);g.generateMipmaps=!1}else Re?(Ue&&t.texStorage2D(i.TEXTURE_2D,oe,ce,J.width,J.height),L&&j(g,J,re,be)):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,re,be,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,Te[0].width,Te[0].height,J.depth);for(let $=0,le=Te.length;$<le;$++)if(ae=Te[$],g.format!==on)if(re!==null)if(Re){if(L)if(g.layerUpdates.size>0){const fe=Xo(ae.width,ae.height,g.format,g.type);for(const ne of g.layerUpdates){const we=ae.data.subarray(ne*fe/ae.data.BYTES_PER_ELEMENT,(ne+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ne,ae.width,ae.height,1,re,we)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,J.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ce,ae.width,ae.height,J.depth,0,ae.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,J.depth,re,be,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ce,ae.width,ae.height,J.depth,0,re,be,ae.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Re&&Ue&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Te[0].width,Te[0].height);for(let $=0,le=Te.length;$<le;$++)ae=Te[$],g.format!==on?re!==null?Re?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,re,be,ae.data):t.texImage2D(i.TEXTURE_2D,$,ce,ae.width,ae.height,0,re,be,ae.data)}else if(g.isDataArrayTexture)if(Re){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),L)if(g.layerUpdates.size>0){const $=Xo(J.width,J.height,g.format,g.type);for(const le of g.layerUpdates){const fe=J.data.subarray(le*$/J.data.BYTES_PER_ELEMENT,(le+1)*$/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,re,be,fe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,be,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,re,be,J.data);else if(g.isData3DTexture)Re?(Ue&&t.texStorage3D(i.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,be,J.data)):t.texImage3D(i.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,re,be,J.data);else if(g.isFramebufferTexture){if(Ue)if(Re)t.texStorage2D(i.TEXTURE_2D,oe,ce,J.width,J.height);else{let $=J.width,le=J.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,ce,$,le,0,re,be,null),$>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),p.add(g),$.onpaint=le=>{const fe=le.changedElements;for(const ne of p)fe.includes(ne.image)&&(ne.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const fe=i.RGBA,ne=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ne,we,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Re&&Ue){const $=et(Te[0]);t.texStorage2D(i.TEXTURE_2D,oe,ce,$.width,$.height)}for(let $=0,le=Te.length;$<le;$++)ae=Te[$],Re?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,re,be,ae):t.texImage2D(i.TEXTURE_2D,$,ce,re,be,ae);g.generateMipmaps=!1}else if(Re){if(Ue){const $=et(J);t.texStorage2D(i.TEXTURE_2D,oe,ce,$.width,$.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,be,J)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,be,J);l(g)&&S(V),se.__version=ie.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function De(A,g,F){if(g.image.length!==6)return;const V=Ye(A,g),Y=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const ie=n.get(Y);if(Y.version!==ie.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const se=qe.getPrimaries(qe.workingColorSpace),Z=g.colorSpace===Xn?null:qe.getPrimaries(g.colorSpace),J=g.colorSpace===Xn||se===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const re=g.isCompressedTexture||g.image[0].isCompressedTexture,be=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!re&&!be?ce[ne]=f(g.image[ne],!0,s.maxCubemapSize):ce[ne]=be?g.image[ne].image:g.image[ne],ce[ne]=Rt(g,ce[ne]);const ae=ce[0],Te=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),Ue=M(g.internalFormat,Te,Re,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,oe=ie.__version===void 0||V===!0,$=Y.dataReady;let le=T(g,ae);ke(i.TEXTURE_CUBE_MAP,g);let fe;if(re){L&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ue,ae.width,ae.height);for(let ne=0;ne<6;ne++){fe=ce[ne].mipmaps;for(let we=0;we<fe.length;we++){const Se=fe[we];g.format!==on?Te!==null?L?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Ue,Se.width,Se.height,0,Se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Se.width,Se.height,Te,Re,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Ue,Se.width,Se.height,0,Te,Re,Se.data)}}}else{if(fe=g.mipmaps,L&&oe){fe.length>0&&le++;const ne=et(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(be){L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,Te,Re,ce[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,ce[ne].width,ce[ne].height,0,Te,Re,ce[ne].data);for(let we=0;we<fe.length;we++){const rt=fe[we].image[ne].image;L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,rt.width,rt.height,Te,Re,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Ue,rt.width,rt.height,0,Te,Re,rt.data)}}else{L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,Re,ce[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,Te,Re,ce[ne]);for(let we=0;we<fe.length;we++){const Se=fe[we];L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,Te,Re,Se.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Ue,Te,Re,Se.image[ne])}}}l(g)&&S(i.TEXTURE_CUBE_MAP),ie.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function me(A,g,F,V,Y,ie){const se=r.convert(F.format,F.colorSpace),Z=r.convert(F.type),J=M(F.internalFormat,se,Z,F.normalized,F.colorSpace),re=n.get(g),be=n.get(F);if(be.__renderTarget=g,!re.__hasExternalTextures){const ce=Math.max(1,g.width>>ie),ae=Math.max(1,g.height>>ie);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,ie,J,ce,ae,g.depth,0,se,Z,null):t.texImage2D(Y,ie,J,ce,ae,0,se,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Y,be.__webglTexture,0,ht(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Y,be.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const V=g.depthTexture,Y=V&&V.isDepthTexture?V.type:null,ie=E(g.stencilBuffer,Y),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),ie,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,A)}else{const V=g.textures;for(let Y=0;Y<V.length;Y++){const ie=V[Y],se=r.convert(ie.format,ie.colorSpace),Z=r.convert(ie.type),J=M(ie.internalFormat,se,Z,ie.normalized,ie.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),J,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(A,g,F){const V=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(i.TEXTURE_CUBE_MAP,g.depthTexture);const re=r.convert(g.depthTexture.format),be=r.convert(g.depthTexture.type);let ce;g.depthTexture.format===Un?ce=i.DEPTH_COMPONENT24:g.depthTexture.format===ni&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,g.width,g.height,0,re,be,null)}}else te(g.depthTexture,0);const ie=Y.__webglTexture,se=ht(g),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,J=g.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Un)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,ie,0);else if(g.depthTexture.format===ni)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(A){const g=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=V}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)Mt(g.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?Mt(g.__webglFramebuffer[0],A,0):Mt(g.__webglFramebuffer,A,0)}else if(F){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[V],A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ie)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(A,g,F){const V=n.get(A);g!==void 0&&me(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ze(A)}function st(A){const g=A.texture,F=n.get(A),V=n.get(g);A.addEventListener("dispose",_);const Y=A.textures,ie=A.isWebGLCubeRenderTarget===!0,se=Y.length>1;if(se||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[Z][J]=i.createFramebuffer()}else F.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)F.__webglFramebuffer[Z]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(se)for(let Z=0,J=Y.length;Z<J;Z++){const re=n.get(Y[Z]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const J=Y[Z];F.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);const re=r.convert(J.format,J.colorSpace),be=r.convert(J.type),ce=M(J.internalFormat,re,be,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ae=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ke(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[Z][J],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else me(F.__webglFramebuffer[Z],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);l(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Z=0,J=Y.length;Z<J;Z++){const re=Y[Z],be=n.get(re);let ce=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,be.__webglTexture),ke(ce,re),me(F.__webglFramebuffer,A,re,i.COLOR_ATTACHMENT0+Z,ce,0),l(re)&&S(ce)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,V.__webglTexture),ke(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[J],A,g,i.COLOR_ATTACHMENT0,Z,J);else me(F.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,Z,0);l(g)&&S(Z),t.unbindTexture()}A.depthBuffer&&ze(A)}function We(A){const g=A.textures;for(let F=0,V=g.length;F<V;F++){const Y=g[F];if(l(Y)){const ie=w(A),se=n.get(Y).__webglTexture;t.bindTexture(ie,se),S(ie),t.unbindTexture()}}}const lt=[],bt=[];function Vt(A){if(A.samples>0){if(gt(A)===!1){const g=A.textures,F=A.width,V=A.height;let Y=i.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(A),Z=g.length>1;if(Z)for(let re=0;re<g.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const be=n.get(g[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,Y,i.NEAREST),h===!0&&(lt.length=0,bt.length=0,lt.push(i.COLOR_ATTACHMENT0+re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(lt.push(ie),bt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let re=0;re<g.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const be=n.get(g[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&h){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function gt(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(A){const g=a.render.frame;d.get(A)!==g&&(d.set(A,g),A.update())}function Rt(A,g){const F=A.colorSpace,V=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==$s&&F!==Xn&&(qe.getTransfer(F)===tt?(V!==on||Y!==Zt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",F)),g}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=te,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=Ze,this.setupRenderTarget=st,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zm(i,e){function t(n,s=Xn){let r;const a=qe.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Al)return i.BYTE;if(n===Rl)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===on)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===Ua)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===Na)return i.RG_INTEGER;if(n===Fa)return i.RGBA_INTEGER;if(n===Gs||n===Hs||n===Vs||n===ks)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zr||n===$r||n===Jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===ea||n===ta||n===na||n===ia||n===Ys||n===sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jr||n===ea)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===na)return r.COMPRESSED_R11_EAC;if(n===ia)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ys)return r.COMPRESSED_RG11_EAC;if(n===sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Ma||n===Sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===ya||n===Ks||n===ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:Gm,fragmentShader:Hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class km extends oi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",h=1,c=null,d=null,p=null,u=null,m=null,x=null;const y=typeof XRWebGLBinding<"u",f=new Vm,l={},S=t.getContextAttributes();let w=null,M=null;const E=[],T=[],R=new Ve;let _=null,b=null;const C=new Kt;C.viewport=new dt;const D=new Kt;D.viewport=new dt;const N=[C,D],H=new $h;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=E[K];return j===void 0&&(j=new pr,E[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=E[K];return j===void 0&&(j=new pr,E[K]=j),j.getGripSpace()},this.getHand=function(K){let j=E[K];return j===void 0&&(j=new pr,E[K]=j),j.getHandSpace()};function q(K){const j=T.indexOf(K.inputSource);if(j===-1)return;const _e=E[j];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",te);for(let K=0;K<E.length;K++){const j=T[K];j!==null&&(T[K]=null,E[K].disconnect(j))}U=null,G=null,f.reset();for(const K in l)delete l[K];if(e.setRenderTarget(w),m=null,u=null,p=null,s=null,M=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),b!==null){const K=b.camera;K.fov=b.fov,K.zoom=b.zoom,K.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?ni:Un,De=S.stencil?ss:xn);const Oe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ln(u.textureWidth,u.textureHeight,{format:on,type:Zt,depthTexture:new ls(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ln(m.framebufferWidth,m.framebufferHeight,{format:on,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function te(K){for(let j=0;j<K.removed.length;j++){const _e=K.removed[j],De=T.indexOf(_e);De>=0&&(T[De]=null,E[De].disconnect(_e))}for(let j=0;j<K.added.length;j++){const _e=K.added[j];let De=T.indexOf(_e);if(De===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=T.length){T.push(_e),De=Oe;break}else if(T[Oe]===null){T[Oe]=_e,De=Oe;break}if(De===-1)break}const me=E[De];me&&me.connect(_e)}}const X=new z,Q=new z;function ee(K,j,_e){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const De=X.distanceTo(Q),me=j.projectionMatrix.elements,Oe=_e.projectionMatrix.elements,Mt=me[14]/(me[10]-1),ze=me[14]/(me[10]+1),Ze=(me[9]+1)/me[5],st=(me[9]-1)/me[5],We=(me[8]-1)/me[0],lt=(Oe[8]+1)/Oe[0],bt=Mt*We,Vt=Mt*lt,ht=De/(-We+lt),gt=ht*-We;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(gt),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const I=Mt+ht,Rt=ze+ht,et=bt-gt,A=Vt+(De-gt),g=Ze*ze/Rt*I,F=st*ze/Rt*I;K.projectionMatrix.makePerspective(et,A,g,F,I,Rt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let j=K.near,_e=K.far;f.texture!==null&&(f.depthNear>0&&(j=f.depthNear),f.depthFar>0&&(_e=f.depthFar)),H.near=D.near=C.near=j,H.far=D.far=C.far=_e,(U!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),U=H.near,G=H.far),H.layers.mask=K.layers.mask|6,C.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;const De=K.parent,me=H.cameras;Ae(H,De);for(let Oe=0;Oe<me.length;Oe++)Ae(me[Oe],De);me.length===2?ee(H,C,D):H.projectionMatrix.copy(C.projectionMatrix),b===null&&K.isPerspectiveCamera&&(b={camera:K,fov:K.fov,zoom:K.zoom}),ye(K,H,De)};function ye(K,j,_e){_e===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return h},this.setFoveation=function(K){h=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(H)},this.getCameraTexture=function(K){return l[K]};let je=null;function ke(K,j){if(d=j.getViewerPose(c||a),x=j,d!==null){const _e=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let De=!1;_e.length!==H.cameras.length&&(H.cameras.length=0,De=!0);for(let ze=0;ze<_e.length;ze++){const Ze=_e[ze];let st=null;if(m!==null)st=m.getViewport(Ze);else{const lt=p.getViewSubImage(u,Ze);st=lt.viewport,ze===0&&(e.setRenderTargetTextures(M,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(M))}let We=N[ze];We===void 0&&(We=new Kt,We.layers.enable(ze),We.viewport=new dt,N[ze]=We),We.matrix.fromArray(Ze.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ze.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(st.x,st.y,st.width,st.height),ze===0&&(H.matrix.copy(We.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),De===!0&&H.cameras.push(We)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();const ze=p.getDepthInformation(_e[0]);ze&&ze.isValid&&ze.texture&&f.init(ze,s.renderState)}if(me&&me.includes("camera-access")&&y){e.state.unbindTexture(),p=n.getBinding();for(let ze=0;ze<_e.length;ze++){const Ze=_e[ze].camera;if(Ze){let st=l[Ze];st||(st=new Hl,l[Ze]=st);const We=p.getCameraImage(Ze);st.sourceTexture=We}}}}for(let _e=0;_e<E.length;_e++){const De=T[_e],me=E[_e];De!==null&&me!==void 0&&me.update(De,j,c||a)}je&&je(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}const Ye=new ql;Ye.setAnimationLoop(ke),this.setAnimationLoop=function(K){je=K},this.dispose=function(){}}}const Wm=new pt,jl=new Ie;jl.set(-1,0,0,0,1,0,0,0,1);function Xm(i,e){function t(f,l){f.matrixAutoUpdate===!0&&f.updateMatrix(),l.value.copy(f.matrix)}function n(f,l){l.color.getRGB(f.fogColor.value,Vl(i)),l.isFog?(f.fogNear.value=l.near,f.fogFar.value=l.far):l.isFogExp2&&(f.fogDensity.value=l.density)}function s(f,l,S,w,M){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?r(f,l):l.isMeshLambertMaterial?(r(f,l),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(r(f,l),p(f,l)):l.isMeshPhongMaterial?(r(f,l),d(f,l),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(r(f,l),u(f,l),l.isMeshPhysicalMaterial&&m(f,l,M)):l.isMeshMatcapMaterial?(r(f,l),x(f,l)):l.isMeshDepthMaterial?r(f,l):l.isMeshDistanceMaterial?(r(f,l),y(f,l)):l.isMeshNormalMaterial?r(f,l):l.isLineBasicMaterial?(a(f,l),l.isLineDashedMaterial&&o(f,l)):l.isPointsMaterial?h(f,l,S,w):l.isSpriteMaterial?c(f,l):l.isShadowMaterial?(f.color.value.copy(l.color),f.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(f,l){f.opacity.value=l.opacity,l.color&&f.diffuse.value.copy(l.color),l.emissive&&f.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.bumpMap&&(f.bumpMap.value=l.bumpMap,t(l.bumpMap,f.bumpMapTransform),f.bumpScale.value=l.bumpScale,l.side===Ht&&(f.bumpScale.value*=-1)),l.normalMap&&(f.normalMap.value=l.normalMap,t(l.normalMap,f.normalMapTransform),f.normalScale.value.copy(l.normalScale),l.side===Ht&&f.normalScale.value.negate()),l.displacementMap&&(f.displacementMap.value=l.displacementMap,t(l.displacementMap,f.displacementMapTransform),f.displacementScale.value=l.displacementScale,f.displacementBias.value=l.displacementBias),l.emissiveMap&&(f.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,f.emissiveMapTransform)),l.specularMap&&(f.specularMap.value=l.specularMap,t(l.specularMap,f.specularMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest);const S=e.get(l),w=S.envMap,M=S.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(jl),f.reflectivity.value=l.reflectivity,f.ior.value=l.ior,f.refractionRatio.value=l.refractionRatio),l.lightMap&&(f.lightMap.value=l.lightMap,f.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,f.lightMapTransform)),l.aoMap&&(f.aoMap.value=l.aoMap,f.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,f.aoMapTransform))}function a(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform))}function o(f,l){f.dashSize.value=l.dashSize,f.totalSize.value=l.dashSize+l.gapSize,f.scale.value=l.scale}function h(f,l,S,w){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.size.value=l.size*S,f.scale.value=w*.5,l.map&&(f.map.value=l.map,t(l.map,f.uvTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function c(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.rotation.value=l.rotation,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function d(f,l){f.specular.value.copy(l.specular),f.shininess.value=Math.max(l.shininess,1e-4)}function p(f,l){l.gradientMap&&(f.gradientMap.value=l.gradientMap)}function u(f,l){f.metalness.value=l.metalness,l.metalnessMap&&(f.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,f.metalnessMapTransform)),f.roughness.value=l.roughness,l.roughnessMap&&(f.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,f.roughnessMapTransform)),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)}function m(f,l,S){f.ior.value=l.ior,l.sheen>0&&(f.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),f.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(f.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,f.sheenColorMapTransform)),l.sheenRoughnessMap&&(f.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,f.sheenRoughnessMapTransform))),l.clearcoat>0&&(f.clearcoat.value=l.clearcoat,f.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(f.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,f.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(f.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Ht&&f.clearcoatNormalScale.value.negate())),l.dispersion>0&&(f.dispersion.value=l.dispersion),l.retroreflectivity>0&&(f.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(f.iridescence.value=l.iridescence,f.iridescenceIOR.value=l.iridescenceIOR,f.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(f.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,f.iridescenceMapTransform)),l.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),l.transmission>0&&(f.transmission.value=l.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),l.transmissionMap&&(f.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,f.transmissionMapTransform)),f.thickness.value=l.thickness,l.thicknessMap&&(f.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=l.attenuationDistance,f.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(f.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(f.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=l.specularIntensity,f.specularColor.value.copy(l.specularColor),l.specularColorMap&&(f.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,f.specularColorMapTransform)),l.specularIntensityMap&&(f.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,l){l.matcap&&(f.matcap.value=l.matcap)}function y(f,l){const S=e.get(l).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(M,E){const T=E.program;n.uniformBlockBinding(M,T)}function c(M,E){let T=s[M.id];T===void 0&&(f(M),T=d(M),s[M.id]=T,M.addEventListener("dispose",S));const R=E.program;n.updateUBOMapping(M,R);const _=e.render.frame;r[M.id]!==_&&(u(M),r[M.id]=_)}function d(M){const E=p();M.__bindingPointIndex=E;const T=i.createBuffer(),R=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=s[M.id],T=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,b=T.length;_<b;_++){const C=T[_];if(Array.isArray(C))for(let D=0,N=C.length;D<N;D++)m(C[D],_,D,R);else m(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,E,T,R){if(y(M,E,T,R)===!0){const _=M.__offset,b=M.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){const N=b[D],H=l(N);x(N,M.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function x(M,E,T){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,T)}function y(M,E,T,R){const _=M.value,b=E+"_"+T;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const C=R[b];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function f(M){const E=M.uniforms;let T=0;const R=16;for(let b=0,C=E.length;b<C;b++){const D=Array.isArray(E[b])?E[b]:[E[b]];for(let N=0,H=D.length;N<H;N++){const U=D[N],G=Array.isArray(U.value)?U.value:[U.value];for(let q=0,k=G.length;q<k;q++){const te=G[q],X=l(te),Q=T%R,ee=Q%X.boundary,Ae=Q+ee;T+=ee,Ae!==0&&R-Ae<X.storage&&(T+=R-Ae),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=X.storage}}}const _=T%R;return _>0&&(T+=R-_),M.__size=T,M.__cache={},this}function l(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),E}function S(M){const E=M.target;E.removeEventListener("dispose",S);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:h,update:c,dispose:w}}const Ym=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function Km(){return dn===null&&(dn=new zl(Ym,16,16,ri,vn),dn.name="DFG_LUT",dn.minFilter=Ot,dn.magFilter=Ot,dn.wrapS=Pn,dn.wrapT=Pn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class Zm{constructor(e={}){const{canvas:t=Xc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Zt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const y=m,f=new Set([Fa,Na,Ua]),l=new Set([Zt,xn,is,ss,La,Da]),S=new Uint32Array(4),w=new Int32Array(4),M=new z;let E=null,T=null;const R=[],_=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,N=null,H=null,U=null,G=null;this._outputColorSpace=Nt;let q=0,k=0,te=null,X=-1,Q=null;const ee=new dt,Ae=new dt;let ye=null;const je=new He(0);let ke=0,Ye=t.width,K=t.height,j=1,_e=null,De=null;const me=new dt(0,0,Ye,K),Oe=new dt(0,0,Ye,K);let Mt=!1;const ze=new ka;let Ze=!1,st=!1;const We=new pt,lt=new z,bt=new dt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function gt(){return te===null?j:1}let I=n;function Rt(v,P){return t.getContext(v,P)}let et,A,g,F,V,Y,ie,se,Z,J,re,be,ce,ae,Te,Re,Ue,L,oe,$,le,fe,ne;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",jt,!1),I===null){const P="webgl2";if(I=Rt(P,v),I===null)throw Rt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(v){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",jt,!1),$e("WebGLRenderer: "+v.message),v}function we(){et=new Kf(I),et.init(),le=new zm(I,et),A=new Bf(I,et,e,le),g=new Om(I,et),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),H=I.createFramebuffer(),U=I.createFramebuffer(),G=I.createFramebuffer(),F=new Jf(I),V=new ym,Y=new Bm(I,et,g,V,A,le,F),ie=new Yf(C),se=new Qh(I),fe=new Ff(I,se),Z=new Zf(I,se,F,fe),J=new jf(I,Z,se,fe,F),L=new Qf(I,A,Y),Te=new zf(V),re=new Em(C,ie,et,A,fe,Te),be=new Xm(C,V),ce=new Tm,ae=new Lm(et),Ue=new Nf(C,ie,g,J,x,h),Re=new Fm(C,J,A),ne=new qm(I,F,A,g),oe=new Of(I,et,F),$=new $f(I,et,F),F.programs=re.programs,C.capabilities=A,C.extensions=et,C.properties=V,C.renderLists=ce,C.shadowMap=Re,C.state=g,C.info=F}y!==Zt&&(b=new tp(y,t.width,t.height,o,s,r));const Se=new km(C,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=et.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=et.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(Ye,K,!1))},this.getSize=function(v){return v.set(Ye,K)},this.setSize=function(v,P,W=!0){if(Se.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=v,K=P,t.width=Math.floor(v*j),t.height=Math.floor(P*j),W===!0&&(t.style.width=v+"px",t.style.height=P+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(Ye*j,K*j).floor()},this.setDrawingBufferSize=function(v,P,W){Ye=v,K=P,j=W,t.width=Math.floor(v*W),t.height=Math.floor(P*W),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(y===Zt){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(me)},this.setViewport=function(v,P,W,O){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,P,W,O),g.viewport(ee.copy(me).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,P,W,O){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,P,W,O),g.scissor(Ae.copy(Oe).multiplyScalar(j).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(v){g.setScissorTest(Mt=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){De=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,W=!0){let O=0;if(v){let B=!1;if(te!==null){const de=te.texture.format;B=f.has(de)}if(B){const de=te.texture.type,ge=l.has(de),ue=Ue.getClearColor(),xe=Ue.getClearAlpha(),Ee=ue.r,Ne=ue.g,Ge=ue.b;ge?(S[0]=Ee,S[1]=Ne,S[2]=Ge,S[3]=xe,I.clearBufferuiv(I.COLOR,0,S)):(w[0]=Ee,w[1]=Ne,w[2]=Ge,w[3]=xe,I.clearBufferiv(I.COLOR,0,w))}else O|=I.COLOR_BUFFER_BIT}P&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",jt,!1),Ue.dispose(),ce.dispose(),ae.dispose(),V.dispose(),ie.dispose(),J.dispose(),fe.dispose(),ne.dispose(),re.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ro),Se.removeEventListener("sessionend",ao),Kn.stop()};function rt(v){v.preventDefault(),So("WebGLRenderer: Context Lost."),D=!0}function Je(){So("WebGLRenderer: Context Restored."),D=!1;const v=F.autoReset,P=Re.enabled,W=Re.autoUpdate,O=Re.needsUpdate,B=Re.type;we(),F.autoReset=v,Re.enabled=P,Re.autoUpdate=W,Re.needsUpdate=O,Re.type=B}function jt(v){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function cn(v){const P=v.target;P.removeEventListener("dispose",cn),ic(P)}function ic(v){sc(v),V.remove(v)}function sc(v){const P=V.get(v).programs;P!==void 0&&(P.forEach(function(W){re.releaseProgram(W)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,W,O,B,de){P===null&&(P=Vt);const ge=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=oc(v,P,W,O,B);g.setMaterial(O,ge);let xe=W.index,Ee=1;if(O.wireframe===!0){if(xe=Z.getWireframeAttribute(W),xe===void 0)return;Ee=2}const Ne=W.drawRange,Ge=W.attributes.position;let ve=Ne.start*Ee,Qe=(Ne.start+Ne.count)*Ee;de!==null&&(ve=Math.max(ve,de.start*Ee),Qe=Math.min(Qe,(de.start+de.count)*Ee)),xe!==null?(ve=Math.max(ve,0),Qe=Math.min(Qe,xe.count)):Ge!=null&&(ve=Math.max(ve,0),Qe=Math.min(Qe,Ge.count));const _t=Qe-ve;if(_t<0||_t===1/0)return;fe.setup(B,O,ue,W,xe);let ot,it=oe;if(xe!==null&&(ot=se.get(xe),it=$,it.setIndex(ot)),B.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*gt()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(B.isLine){let Ct=O.linewidth;Ct===void 0&&(Ct=1),g.setLineWidth(Ct*gt()),B.isLineSegments?it.setMode(I.LINES):B.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else B.isPoints?it.setMode(I.POINTS):B.isSprite&&it.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(et.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ct=B._multiDrawStarts,pe=B._multiDrawCounts,Bt=B._multiDrawCount,Ke=xe?se.get(xe).bytesPerElement:1,$t=V.get(O).currentProgram.getUniforms();for(let hn=0;hn<Bt;hn++)$t.setValue(I,"_gl_DrawID",hn),it.render(Ct[hn]/Ke,pe[hn])}else if(B.isInstancedMesh)it.renderInstances(ve,_t,B.count);else if(W.isInstancedBufferGeometry){const Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pe=Math.min(W.instanceCount,Ct);it.renderInstances(ve,_t,pe)}else it.render(ve,_t)};function so(v,P,W,O){N!==null&&v.isNodeMaterial&&N.setObject(O,v),Ze===!0&&Te.setState(v,W,!1),v.transparent===!0&&v.side===Cn&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,fs(v,P,O),v.side=ii,v.needsUpdate=!0,fs(v,P,O),v.side=Cn):fs(v,P,O)}this.compile=function(v,P,W=null){W===null&&(W=v),N!==null&&N.renderStart(v,P,W),T=ae.get(W),T.init(P),_.push(T),W.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),v!==W&&v.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),st=this.localClippingEnabled,Ze=Te.init(this.clippingPlanes,st),Ze===!0&&Te.setGlobalState(this.clippingPlanes,P),N!==null&&Re.render(T.state.shadowsArray,W,P);const O=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const ue=de[ge];so(ue,W,P,B),O.add(ue)}else so(de,W,P,B),O.add(de)}),T=_.pop(),N!==null&&N.renderEnd(),O},this.compileAsync=function(v,P,W=null){const O=this.compile(v,P,W);return new Promise(B=>{function de(){if(O.forEach(function(ge){const xe=V.get(ge).currentProgram;(xe===void 0||xe.isReady())&&O.delete(ge)}),O.size===0){B(v);return}setTimeout(de,10)}et.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ir=null;function rc(v){ir&&ir(v)}function ro(){Kn.stop()}function ao(){Kn.start()}const Kn=new ql;Kn.setAnimationLoop(rc),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){ir=v,Se.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},Se.addEventListener("sessionstart",ro),Se.addEventListener("sessionend",ao),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(v,P);const W=Se.enabled===!0&&Se.isPresenting===!0,O=b!==null&&(te===null||W)&&b.begin(C,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(P),P=Se.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,P,te),T=ae.get(v,_.length),T.init(P),T.state.textureUnits=Y.getTextureUnits(),_.push(T),We.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ze.setFromProjectionMatrix(We,gn,P.reversedDepth),st=this.localClippingEnabled,Ze=Te.init(this.clippingPlanes,st),E=ce.get(v,R.length),E.init(),R.push(E),Se.enabled===!0&&Se.isPresenting===!0){const ge=C.xr.getDepthSensingMesh();ge!==null&&sr(ge,P,-1/0,C.sortObjects)}sr(v,P,0,C.sortObjects),E.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(_e,De),ht=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ht&&Ue.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Te.beginShadows();const B=T.state.shadowsArray;if(Re.render(B,v,P),Ze===!0&&Te.endShadows(),(O&&b.hasRenderPass())===!1){const ge=E.opaque,ue=E.transmissive;if(T.setupLights(),P.isArrayCamera){const xe=P.cameras;if(ue.length>0)for(let Ee=0,Ne=xe.length;Ee<Ne;Ee++){const Ge=xe[Ee];lo(ge,ue,v,Ge)}ht&&Ue.render(v);for(let Ee=0,Ne=xe.length;Ee<Ne;Ee++){const Ge=xe[Ee];oo(E,v,Ge,Ge.viewport)}}else ue.length>0&&lo(ge,ue,v,P),ht&&Ue.render(v),oo(E,v,P)}te!==null&&k===0&&(Y.updateMultisampleRenderTarget(te),Y.updateRenderTargetMipmap(te)),O&&b.end(C),v.isScene===!0&&v.onAfterRender(C,v,P),fe.resetDefaultState(),X=-1,Q=null,_.pop(),_.length>0?(T=_[_.length-1],Y.setTextureUnits(T.state.textureUnits),Ze===!0&&Te.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,N!==null&&N.renderEnd()};function sr(v,P,W,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ze)){O&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(We);const ge=J.update(v),ue=v.material;ue.visible&&E.push(v,ge,ue,W,bt.z,null,P)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ze))){const ge=J.update(v),ue=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),bt.copy(ge.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(We)),Array.isArray(ue)){const xe=ge.groups;for(let Ee=0,Ne=xe.length;Ee<Ne;Ee++){const Ge=xe[Ee],ve=ue[Ge.materialIndex];ve&&ve.visible&&E.push(v,ge,ve,W,bt.z,Ge,P)}}else ue.visible&&E.push(v,ge,ue,W,bt.z,null,P)}}const de=v.children;for(let ge=0,ue=de.length;ge<ue;ge++)sr(de[ge],P,W,O)}function oo(v,P,W,O){const{opaque:B,transmissive:de,transparent:ge}=v;T.setupLightsView(W),Ze===!0&&Te.setGlobalState(C.clippingPlanes,W),O&&g.viewport(ee.copy(O)),B.length>0&&ds(B,P,W),de.length>0&&ds(de,P,W),ge.length>0&&ds(ge,P,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function lo(v,P,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const ve=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new ln(1,1,{generateMipmaps:!0,type:ve?vn:Zt,minFilter:ti,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const de=T.state.transmissionRenderTarget[O.id],ge=O.viewport||ee;de.setSize(ge.z*C.transmissionResolutionScale,ge.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),xe=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(de),C.getClearColor(je),ke=C.getClearAlpha(),ke<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Ue.render(W);const Ne=C.toneMapping;C.toneMapping=_n;const Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Ze===!0&&Te.setGlobalState(C.clippingPlanes,O),ds(v,W,O),Y.updateMultisampleRenderTarget(de),Y.updateRenderTargetMipmap(de),et.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Qe=0,_t=P.length;Qe<_t;Qe++){const ot=P[Qe],{object:it,geometry:Ct,material:pe,group:Bt}=ot;if(pe.side===Cn&&it.layers.test(O.layers)){const Ke=pe.side;pe.side=Ht,pe.needsUpdate=!0,co(it,W,O,Ct,pe,Bt),pe.side=Ke,pe.needsUpdate=!0,ve=!0}}ve===!0&&(Y.updateMultisampleRenderTarget(de),Y.updateRenderTargetMipmap(de))}C.setRenderTarget(ue,xe,Ee),C.setClearColor(je,ke),Ge!==void 0&&(O.viewport=Ge),C.toneMapping=Ne}function ds(v,P,W){const O=P.isScene===!0?P.overrideMaterial:null;for(let B=0,de=v.length;B<de;B++){const ge=v[B],{object:ue,geometry:xe,group:Ee}=ge;let Ne=ge.material;Ne.allowOverride===!0&&O!==null&&(Ne=O),ue.layers.test(W.layers)&&co(ue,P,W,xe,Ne,Ee)}}function co(v,P,W,O,B,de){N!==null&&B.isNodeMaterial&&N.setObject(v,B),v.onBeforeRender(C,P,W,O,B,de),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(C,P,W,O,v,de),B.transparent===!0&&B.side===Cn&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,C.renderBufferDirect(W,P,O,B,v,de),B.side=ii,B.needsUpdate=!0,C.renderBufferDirect(W,P,O,B,v,de),B.side=Cn):C.renderBufferDirect(W,P,O,B,v,de),v.onAfterRender(C,P,W,O,B,de)}function fs(v,P,W){P.isScene!==!0&&(P=Vt);const O=V.get(v),B=T.state.lights,de=T.state.shadowsArray,ge=B.state.version,ue=re.getParameters(v,B.state,de,P,W,T.state.lightProbeGridArray),xe=re.getProgramCacheKey(ue);let Ee=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;const Ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=ie.get(v.envMap||O.environment,Ne),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",cn),Ee=new Map,O.programs=Ee);let Ge=Ee.get(xe);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===ge)return uo(v,ue),Ge}else ue.uniforms=re.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,W,ue),v.onBeforeCompile(ue,C),Ge=re.acquireProgram(ue,xe),Ee.set(xe,Ge),O.uniforms=ue.uniforms;const ve=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ve.clippingPlanes=Te.uniform),uo(v,ue),O.needsLights=cc(v),O.lightsStateVersion=ge,O.needsLights&&(ve.ambientLightColor.value=B.state.ambient,ve.lightProbe.value=B.state.probe,ve.sunLights.value=B.state.sun,ve.sunLightShadows.value=B.state.sunShadow,ve.directionalLights.value=B.state.directional,ve.directionalLightShadows.value=B.state.directionalShadow,ve.spotLights.value=B.state.spot,ve.spotLightShadows.value=B.state.spotShadow,ve.rectAreaLights.value=B.state.rectArea,ve.ltc_1.value=B.state.rectAreaLTC1,ve.ltc_2.value=B.state.rectAreaLTC2,ve.pointLights.value=B.state.point,ve.pointLightShadows.value=B.state.pointShadow,ve.hemisphereLights.value=B.state.hemi,ve.sunShadowMatrix.value=B.state.sunShadowMatrix,ve.sunShadowCascade.value=B.state.sunShadowCascade,ve.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ve.spotLightMatrix.value=B.state.spotLightMatrix,ve.spotLightMap.value=B.state.spotLightMap,ve.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=T.state.lightProbeGridArray.length>0,O.currentProgram=Ge,O.uniformsList=null,Ge}function ho(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Xs.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function uo(v,P){const W=V.get(v);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function ac(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let W=0,O=v.length;W<O;W++){const B=v[W];if(B.texture!==null&&B.boundingBox.containsPoint(M))return B}return null}function oc(v,P,W,O,B){P.isScene!==!0&&(P=Vt),Y.resetTextureUnits();const de=P.fog,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,ue=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ee=ie.get(O.envMap||ge,xe),Ne=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ve=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let ot=_n;O.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ot=C.toneMapping);const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ct=it!==void 0?it.length:0,pe=V.get(O),Bt=T.state.lights;if(Ze===!0&&(st===!0||v!==Q)){const at=v===Q&&O.id===X;Te.setState(O,v,at)}let Ke=!1;O.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Bt.state.version||pe.outputColorSpace!==ue||B.isBatchedMesh&&pe.batching===!1||!B.isBatchedMesh&&pe.batching===!0||B.isBatchedMesh&&pe.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&pe.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&pe.instancing===!1||!B.isInstancedMesh&&pe.instancing===!0||B.isSkinnedMesh&&pe.skinning===!1||!B.isSkinnedMesh&&pe.skinning===!0||B.isInstancedMesh&&pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&pe.instancingMorph===!1&&B.morphTexture!==null||pe.envMap!==Ee||O.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Te.numPlanes||pe.numIntersection!==Te.numIntersection)||pe.vertexAlphas!==Ne||pe.vertexTangents!==Ge||pe.morphTargets!==ve||pe.morphNormals!==Qe||pe.morphColors!==_t||pe.toneMapping!==ot||pe.morphTargetsCount!==Ct||!!pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,pe.__version=O.version);let $t=pe.currentProgram;Ke===!0&&($t=fs(O,P,B),N&&O.isNodeMaterial&&N.onUpdateProgram(O,$t,pe));let hn=!1,Nn=!1,li=!1;const nt=$t.getUniforms(),mt=pe.uniforms;if(g.useProgram($t.program)&&(hn=!0,Nn=!0,li=!0),O.id!==X&&(X=O.id,Nn=!0),pe.needsLights){const at=ac(T.state.lightProbeGridArray,B);pe.lightProbeGrid!==at&&(pe.lightProbeGrid=at,Nn=!0)}if(hn||Q!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(I,"projectionMatrix",v.projectionMatrix),nt.setValue(I,"viewMatrix",v.matrixWorldInverse);const On=nt.map.cameraPosition;On!==void 0&&On.setValue(I,lt.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&nt.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Nn=!0,li=!0)}if(pe.needsLights&&(Bt.state.sunShadowMap.length>0&&nt.setValue(I,"sunShadowMap",Bt.state.sunShadowMap,Y),Bt.state.directionalShadowMap.length>0&&nt.setValue(I,"directionalShadowMap",Bt.state.directionalShadowMap,Y),Bt.state.spotShadowMap.length>0&&nt.setValue(I,"spotShadowMap",Bt.state.spotShadowMap,Y),Bt.state.pointShadowMap.length>0&&nt.setValue(I,"pointShadowMap",Bt.state.pointShadowMap,Y)),B.isSkinnedMesh){nt.setOptional(I,B,"bindMatrix"),nt.setOptional(I,B,"bindMatrixInverse");const at=B.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),nt.setValue(I,"boneTexture",at.boneTexture,Y))}B.isBatchedMesh&&(nt.setOptional(I,B,"batchingTexture"),nt.setValue(I,"batchingTexture",B._matricesTexture,Y),nt.setOptional(I,B,"batchingIdTexture"),nt.setValue(I,"batchingIdTexture",B._indirectTexture,Y),nt.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&nt.setValue(I,"batchingColorTexture",B._colorsTexture,Y));const Fn=W.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&L.update(B,W,$t),(Nn||pe.receiveShadow!==B.receiveShadow)&&(pe.receiveShadow=B.receiveShadow,nt.setValue(I,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(mt.envMapIntensity.value=P.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=Km()),Nn){if(nt.setValue(I,"toneMappingExposure",C.toneMappingExposure),pe.needsLights&&lc(mt,li),de&&O.fog===!0&&be.refreshFogUniforms(mt,de),be.refreshMaterialUniforms(mt,O,j,K,T.state.transmissionRenderTarget[v.id]),pe.needsLights&&pe.lightProbeGrid){const at=pe.lightProbeGrid;mt.probesSH.value=at.texture,mt.probesMin.value.copy(at.boundingBox.min),mt.probesMax.value.copy(at.boundingBox.max),mt.probesResolution.value.copy(at.resolution)}Xs.upload(I,ho(pe),mt,Y)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Xs.upload(I,ho(pe),mt,Y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(I,"center",B.center),nt.setValue(I,"modelViewMatrix",B.modelViewMatrix),nt.setValue(I,"normalMatrix",B.normalMatrix),nt.setValue(I,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const at=O.uniformsGroups;for(let On=0,ci=at.length;On<ci;On++){const po=at[On];ne.update(po,$t),ne.bind(po,$t)}}return $t}function lc(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function cc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,P,W){const O=V.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=P,V.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){const W=V.get(v);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,W=0){te=v,q=P,k=W;let O=null,B=!1,de=!1;if(v){const ue=V.get(v);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(v.viewport),Ae.copy(v.scissor),ye=v.scissorTest,g.viewport(ee),g.scissor(Ae),g.setScissorTest(ye),X=-1;return}else if(ue.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(ue.__hasExternalTextures)Y.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ne=v.depthTexture;if(ue.__boundDepthTexture!==Ne){if(Ne!==null&&V.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}const xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);const Ee=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[P])?O=Ee[P][W]:O=Ee[P],B=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?O=V.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[W]:O=Ee,ee.copy(v.viewport),Ae.copy(v.scissor),ye=v.scissorTest}else ee.copy(me).multiplyScalar(j).floor(),Ae.copy(Oe).multiplyScalar(j).floor(),ye=Mt;if(W!==0&&(O=H),g.bindFramebuffer(I.FRAMEBUFFER,O)&&g.drawBuffers(v,O),g.viewport(ee),g.scissor(Ae),g.setScissorTest(ye),B){const ue=V.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,W)}else if(de){const ue=P;for(let xe=0;xe<v.textures.length;xe++){const Ee=V.get(v.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,Ee.__webglTexture,W,ue)}}else if(v!==null&&W!==0){const ue=V.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ue.__webglTexture,W)}X=-1};function fo(v){const P=V.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=A.textureFormatReadable(v.format),P.__typeReadable=A.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,W,O,B,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){g.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Ee=v.textures[ue],Ne=Ee.format,Ge=Ee.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue);const ve=fo(Ee);if(ve.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&W>=0&&W<=v.height-B&&I.readPixels(P,W,O,B,le.convert(Ne),le.convert(Ge),de)}finally{const Ee=te!==null?V.get(te).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,P,W,O,B,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(P>=0&&P<=v.width-O&&W>=0&&W<=v.height-B){g.bindFramebuffer(I.FRAMEBUFFER,xe);const Ee=v.textures[ue],Ne=Ee.format,Ge=Ee.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue);const ve=fo(Ee);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),I.readPixels(P,W,O,B,le.convert(Ne),le.convert(Ge),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const _t=te!==null?V.get(te).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,_t);const ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qc(I,ot,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Qe),I.deleteSync(ot),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,W=0){const O=Math.pow(2,-W),B=Math.floor(v.image.width*O),de=Math.floor(v.image.height*O),ge=P!==null?P.x:0,ue=P!==null?P.y:0;Y.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ge,ue,B,de),g.unbindTexture()},this.copyTextureToTexture=function(v,P,W=null,O=null,B=0,de=0){let ge,ue,xe,Ee,Ne,Ge,ve,Qe,_t;const ot=v.isCompressedTexture?v.mipmaps[de]:v.image;if(W!==null)ge=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Ee=W.min.x,Ne=W.min.y,Ge=W.isBox3?W.min.z:0;else{const mt=Math.pow(2,-B);ge=Math.floor(ot.width*mt),ue=Math.floor(ot.height*mt),v.isDataArrayTexture?xe=ot.depth:v.isData3DTexture?xe=Math.floor(ot.depth*mt):xe=1,Ee=0,Ne=0,Ge=0}O!==null?(ve=O.x,Qe=O.y,_t=O.z):(ve=0,Qe=0,_t=0);const it=le.convert(P.format),Ct=le.convert(P.type);let pe;P.isData3DTexture?(Y.setTexture3D(P,0),pe=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Y.setTexture2DArray(P,0),pe=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(P,0),pe=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const Bt=g.getParameter(I.UNPACK_ROW_LENGTH),Ke=g.getParameter(I.UNPACK_IMAGE_HEIGHT),$t=g.getParameter(I.UNPACK_SKIP_PIXELS),hn=g.getParameter(I.UNPACK_SKIP_ROWS),Nn=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const li=v.isDataArrayTexture||v.isData3DTexture,nt=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const mt=V.get(v),Fn=V.get(P),at=V.get(mt.__renderTarget),On=V.get(Fn.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,at.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let ci=0;ci<xe;ci++)li&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(v).__webglTexture,B,Ge+ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(P).__webglTexture,de,_t+ci)),I.blitFramebuffer(Ee,Ne,ge,ue,ve,Qe,ge,ue,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||V.has(v)){const mt=V.get(v),Fn=V.get(P);g.bindFramebuffer(I.READ_FRAMEBUFFER,U),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,G);for(let at=0;at<xe;at++)li?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.__webglTexture,B,Ge+at):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,B),nt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fn.__webglTexture,de,_t+at):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fn.__webglTexture,de),B!==0?I.blitFramebuffer(Ee,Ne,ge,ue,ve,Qe,ge,ue,I.COLOR_BUFFER_BIT,I.NEAREST):nt?I.copyTexSubImage3D(pe,de,ve,Qe,_t+at,Ee,Ne,ge,ue):I.copyTexSubImage2D(pe,de,ve,Qe,Ee,Ne,ge,ue);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nt?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(pe,de,ve,Qe,_t,ge,ue,xe,it,Ct,ot.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(pe,de,ve,Qe,_t,ge,ue,xe,it,ot.data):I.texSubImage3D(pe,de,ve,Qe,_t,ge,ue,xe,it,Ct,ot):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,ve,Qe,ge,ue,it,Ct,ot.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,ve,Qe,ot.width,ot.height,it,ot.data):I.texSubImage2D(I.TEXTURE_2D,de,ve,Qe,ge,ue,it,Ct,ot);g.pixelStorei(I.UNPACK_ROW_LENGTH,Bt),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),g.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),g.pixelStorei(I.UNPACK_SKIP_ROWS,hn),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Nn),de===0&&P.generateMipmaps&&I.generateMipmap(pe),g.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){q=0,k=0,te=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const ec="zveryata_save_v1",Or={coins:0,owned:["fox"],selected:"fox",record:0,totalCoins:0,totalMeters:0,powerups:0,muted:!1,lang:"ru",langTouched:!1,runs:0,questsClaimed:[]};let It=null;function vt(){if(It)return It;try{const i=localStorage.getItem(ec);It=i?{...Or,...JSON.parse(i)}:{...Or},(typeof It.music=="boolean"||typeof It.sfx=="boolean")&&(It.muted=It.music===!1&&It.sfx===!1,delete It.music,delete It.sfx)}catch{It={...Or}}return It}function Qt(i){It={...vt(),...i};try{localStorage.setItem(ec,JSON.stringify(It))}catch{}try{typeof window<"u"&&typeof window.__cloudSave=="function"&&window.__cloudSave(It)}catch{}return It}function Za(i){const e=vt();return Qt({coins:Math.max(0,e.coins+i),totalCoins:e.totalCoins+Math.max(0,i)})}function $m(i){const e=vt();return Qt({totalMeters:e.totalMeters+Math.round(i)})}function Jm(){const i=vt();return Qt({powerups:i.powerups+1})}const Ci={fox:{name:"Лисёнок",price:0,asset:"hero_side",backRun1:"hero_back_run1",backRun2:"hero_back_run2",backJump:"hero_back_jump"},bunny:{name:"Зайка",price:150,asset:"bunny",backRun1:"bunny_back_run1",backRun2:"bunny_back_run2",backJump:"bunny_back_jump"},hedgehog:{name:"Ёжик",price:300,asset:"hedgehog",backRun1:"hedgehog_back_run1",backRun2:"hedgehog_back_run2",backJump:"hedgehog_back_jump"},squirrel:{name:"Белочка",price:500,asset:"squirrel",backRun1:"squirrel_back_run1",backRun2:"squirrel_back_run2",backJump:"squirrel_back_jump"}},tc=[{id:"q_coins",nk:"quest_coins",target:50,reward:50,get:i=>i.totalCoins},{id:"q_meters",nk:"quest_meters",target:1e3,reward:80,get:i=>i.totalMeters},{id:"q_powerups",nk:"quest_powerups",target:2,reward:100,get:i=>i.powerups},{id:"q_runs",nk:"quest_runs",target:10,reward:120,get:i=>i.runs},{id:"q_record",nk:"quest_record",target:2e3,reward:200,get:i=>i.record}];function Qm(i){const e=vt(),t=tc.find(n=>n.id===i);return!t||e.questsClaimed.includes(i)||t.get(e)<t.target?!1:(Qt({questsClaimed:[...e.questsClaimed,i],coins:e.coins+t.reward}),!0)}function jm(i){const t=[...vt().lb||[],{m:Math.round(i)}].sort((n,s)=>s.m-n.m).slice(0,5);return Qt({lb:t})}function e0(){return vt().lb||[]}const An=[-1.7,0,1.7],Yt=-70,Fs=8,bi=9.6,Os=17.6,t0=1.4,n0=1e3,i0=6.4,s0=16,pl=.55,r0={magnet:1e4,x2:12e3,rocket:2e4},Br={ru:{doc_title:"Лесной забег — 3D",game_title:"Лесной<br>забег",hello:"Привет! Я — {name}!",record:"Рекорд: {n} м",meters:"{n} м",btn_play:"Беги! 🐾",btn_shop:"Магазин",btn_quests:"Задания",btn_back:"Назад",btn_menu:"В меню",btn_resume:"Продолжить",btn_again:"Ещё раз!",selected:"Выбран ✓",select:"Выбрать",shop_title:"Магазин зверят",quests_title:"Задания",pause_title:"Пауза",results_title:"Забег окончен!",new_record:"🏆 Новый рекорд!",distance:"Дистанция: {n} м",not_enough:"Не хватает яблочек! Собери ещё!",claimed:"Получено ✓",claim:"Забрать",reward:"Награда",btn_leaderboard:"Рекорды",lb_title:"Рекорды",lb_empty:"Забегов пока нет — стань первым!",lb_local:"На этом устройстве",lb_yandex:"Яндекс Игры",crash_msg:"Ой! Ещё раз!",ad_apples:"📺 +50 яблочек за рекламу",ad_double:"📺 Удвоить яблочки",btn_continue:"▶ Продолжить (реклама)",ad_done:"+50 яблочек — твои!",quest_coins:"Собери 50 яблочек",quest_meters:"Пробеги 1000 метров",quest_powerups:"Собери 2 бонуса",quest_runs:"Сыграй 10 забегов",quest_record:"Поставь рекорд 2000 м",tut_line1:"— перестройся",tut_line2:"— прыгни через пенёк",tut_sub:"Собирай яблочки и бонусы! (или свайпы: вбок — бег, вверх/тап — прыжок)",posters:["ВПЕРЁД!","ТЫ СМОЖЕШЬ!","БЕГИ!","УРА!","КЛАСС!","МОЛОДЕЦ!","ГО-ГО-ГО!"]},en:{doc_title:"Forest Run — 3D",game_title:"Forest<br>Run",hello:"Hi! I'm {name}!",record:"Best: {n} m",meters:"{n} m",btn_play:"Run! 🐾",btn_shop:"Shop",btn_quests:"Quests",btn_back:"Back",btn_menu:"Menu",btn_resume:"Resume",btn_again:"Run again!",selected:"Selected ✓",select:"Select",shop_title:"Pet Shop",quests_title:"Quests",pause_title:"Paused",results_title:"Run over!",new_record:"🏆 New best!",distance:"Distance: {n} m",not_enough:"Not enough apples! Keep running!",claimed:"Claimed ✓",claim:"Claim",reward:"Reward",btn_leaderboard:"Scores",lb_title:"Best runs",lb_empty:"No runs yet — be the first!",lb_local:"On this device",lb_yandex:"Yandex Games",crash_msg:"Oops! Again!",ad_apples:"📺 +50 apples for watching an ad",ad_double:"📺 Double your apples",btn_continue:"▶ Continue (ad)",ad_done:"+50 apples are yours!",quest_coins:"Collect 50 apples",quest_meters:"Run 1000 meters",quest_powerups:"Grab 2 power-ups",quest_runs:"Play 10 runs",quest_record:"Set a 2000 m record",tut_line1:"— switch lanes",tut_line2:"— jump over stumps",tut_sub:"Grab apples and bonuses! (or swipe: sideways to move, up/tap to jump)",posters:["GO GO!","YOU CAN DO IT!","RUN!","HOORAY!","AWESOME!","SUPER!","KEEP IT UP!"]}},Bs={fox:{ru:"Лисёнок",en:"Foxy"},bunny:{ru:"Зайка",en:"Bunny"},hedgehog:{ru:"Ёжик",en:"Hedgie"},squirrel:{ru:"Белочка",en:"Squirrel"}};let qn=vt().lang||"ru";const Le=(i,e)=>{let t=Br[qn]&&Br[qn][i]||Br.ru[i]||i;if(e)for(const n in e)t=t.replace("{"+n+"}",e[n]);return t},a0={fox:{color:14840347,belly:16773855,ear:"pointy",tail:"bush",shirt:14236475,innerEar:16777215},bunny:{color:10134445,belly:16777215,ear:"long",tail:"puff",shirt:15890613},hedgehog:{color:9067051,belly:15257512,ear:"tiny",tail:"none",spines:!0,shirt:5025616},squirrel:{color:14242846,belly:16771281,ear:"pointy",tail:"curl",shirt:9334729}},Sn={};for(const i of["jump","collect","stumble","music","coin","powerup"])Sn[i]=new Audio("assets/sounds/"+i+".mp3"),Sn[i].preload="auto";Sn.music.loop=!0;Sn.music.volume=.35;const Ft=(i,e=.6)=>{try{const t=Sn[i].cloneNode();t.volume=e,t.muted=Sn[i].muted,t.play().catch(()=>{})}catch{}},Ni=()=>{Sn.music.play().catch(()=>{})},us=()=>{Sn.music.pause()},$a=()=>{const i=!!vt().muted;for(const e in Sn)Sn[e].muted=i;return i};$a();const cs=()=>{try{window.ysdk&&window.ysdk.features&&window.ysdk.features.GameplayAPI&&window.ysdk.features.GameplayAPI.start()}catch{}},Ja=()=>{try{window.ysdk&&window.ysdk.features&&window.ysdk.features.GameplayAPI&&window.ysdk.features.GameplayAPI.stop()}catch{}};function Aa(i){const e=()=>{try{i()}catch{}};if(!window.ysdk){e();return}let t=!1;try{window.ysdk.adv.showRewardedVideo({callbacks:{onOpen:()=>{us(),Ja()},onClose:()=>{t&&e(),Ni(),cs()},onRewarded:()=>{t=!0},onError:()=>{Ni(),cs()}}})}catch{e()}}typeof YaGames<"u"&&YaGames.init().then(i=>{window.ysdk=i;try{i.features&&i.features.LoadingAPI&&i.features.LoadingAPI.ready()}catch{}try{i.getPlayer().then(e=>{let t=null;window.__cloudSave=n=>{clearTimeout(t),t=setTimeout(()=>{try{e.setData(JSON.parse(JSON.stringify(n)),!0)}catch{}},1200)},e.getData().then(n=>{n&&typeof n=="object"&&Object.keys(n).length&&(Qt(n),$a())}).catch(()=>{})}).catch(()=>{})}catch{}try{const t=String(i.environment&&i.environment.i18n&&i.environment.i18n.lang||"").toLowerCase().startsWith("ru")?"ru":"en";vt().langTouched||(Qt({lang:t}),Qa())}catch{}i.on&&(i.on("game_api_pause",()=>{us(),typeof Be<"u"&&Be&&Be.state==="playing"&&(Be.state="paused",Be._autoPaused=!0)}),i.on("game_api_resume",()=>{typeof Be<"u"&&Be&&Be._autoPaused&&(Be._autoPaused=!1,Be.state="playing",Ni())}))}).catch(()=>{});document.addEventListener("visibilitychange",()=>{typeof Be>"u"||!Be||(document.hidden?(us(),Be.state==="playing"&&(Be.state="paused",Be._autoPaused=!0)):Be._autoPaused&&(Be._autoPaused=!1,Be.state="playing",Ni()))});let Ti=null;function qs(){return Ti||(Ti=new zl(new Uint8Array([90,170,255,255]),4,1,Ia),Ti.minFilter=Ti.magFilter=St,Ti.needsUpdate=!0),Ti}const zr={};function ut(i){return zr[i]||(zr[i]=new Ws({color:i,gradientMap:qs()})),zr[i]}const Gr=(i,e,t,n)=>new Pe(new zi(i,e,t),ut(n)),kn=(i,e,t,n=10)=>new Pe(new Xa(i,e,n),ut(t)),Dt=(i,e,t=12)=>new Pe(new er(i,t,t),ut(e)),o0=(i,e,t)=>new Pe(new Wa(i,e,6,12),ut(t)),l0=new pn({color:4008470,side:Ht});function sn(i,e=1.07){const t=new Pe(i.geometry,l0);return t.scale.setScalar(e),i.add(t),i}let ei=null;function ml(){if(ei)return ei;const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d");e.fillStyle="#8a5a2b",e.fillRect(0,0,128,256);for(let t=0;t<30;t++){const n=(t*47+13)%128,s=t%3!==0;e.strokeStyle=s?"#6b421f":"#a97845",e.lineWidth=s?3:2,e.beginPath();let r=-12;for(e.moveTo(n,r);r<270;)r+=18+t%5*3,e.lineTo(n+Math.sin((r+t*41)*.07)*7,r);e.stroke()}e.strokeStyle="#5d3a1a",e.lineWidth=2;for(let t=0;t<22;t++){const n=(t*71+7)%128,s=(t*97+31)%256,r=6+t%4*3;e.beginPath(),e.moveTo(n,s),e.lineTo(n+(t%2?r:-r),s+4),e.stroke()}e.fillStyle="rgba(196,178,138,0.5)";for(let t=0;t<6;t++)e.beginPath(),e.ellipse((t*89+21)%128,(t*137+55)%256,5+t%3*2,9,.3,0,7),e.fill();return ei=new ts(i),ei.wrapS=ei.wrapT=Ii,ei.colorSpace=Nt,ei}let Ki=null;function c0(){if(Ki)return Ki;const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");e.fillStyle="#d9b382",e.fillRect(0,0,128,128);for(let t=60;t>4;t-=5+t%3)e.strokeStyle=t%2?"#c9a06c":"#e2c194",e.lineWidth=2.5,e.beginPath(),e.arc(64,64,t,0,7),e.stroke();e.strokeStyle="#a97845",e.lineWidth=1.5;for(let t=0;t<5;t++){const n=t*1.35;e.beginPath(),e.moveTo(64,64),e.lineTo(64+Math.cos(n)*60,64+Math.sin(n)*60),e.stroke()}return Ki=new ts(i),Ki.colorSpace=Nt,Ki}function gl(i){const e=Ci[i]||Ci.fox,t=new Ut,n=new kl,s=p=>{const u=n.load("assets/"+p+".png");return u.colorSpace=Nt,u.magFilter=St,u},r=s(e.backRun1),a=s(e.backRun2),o=s(e.backJump),h=new pn({map:r,transparent:!0,alphaTest:.35}),c=new Pe(new ai(1.55,2),h);c.position.y=1.05,t.add(c);const d=new Pe(new Rn(.55,20),new pn({color:1981716,transparent:!0,opacity:.35}));return d.rotation.x=-Math.PI/2,d.position.y=.02,t.add(d),t.userData={sprite:h,plane:c,tRun1:r,tRun2:a,tJump:o,shadow:d,type:i},t}class h0{constructor(){this.state="menu",this.save=vt(),this.renderer=new Zm({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas-wrap").appendChild(this.renderer.domElement),this.scene=new yh;const e=document.createElement("canvas");e.width=2,e.height=256;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#3fa7f5"),n.addColorStop(.55,"#7cc8ff"),n.addColorStop(1,"#d8f1ff"),t.fillStyle=n,t.fillRect(0,0,2,256),this.scene.background=new ts(e),this.scene.fog=new Ha(11066623,30,95);const s=new Pe(new Rn(6,24),new pn({color:16776160,fog:!1}));s.position.set(26,32,-95),this.scene.add(s),this.camera=new Kt(62,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,3.6,6.2),this.camera.lookAt(0,1.2,-5),this.scene.add(new Wh(15398911,7190591,1.15));const r=new Kh(16774872,1.35);r.position.set(6,12,4),this.scene.add(r),this.buildWorld(),this.pet=gl(this.save.selected in a0?this.save.selected:"fox"),this.scene.add(this.pet),this.reset(),window.addEventListener("resize",()=>this.onResize()),this.lastT=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}buildWorld(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#6ec63f",t.fillRect(0,0,256,256);const n=["#7fd34f","#65bd3c","#77cc48"];for(let l=0;l<14;l++){const S=(l*83+29)%256,w=(l*61+47)%256,M=14+l%4*7;t.fillStyle=n[l%3],t.beginPath(),t.arc(S,w,M,0,7),t.fill()}for(let l=0;l<260;l++)t.fillStyle=l%2?"rgba(92,184,64,0.7)":"rgba(139,221,92,0.7)",t.fillRect((l*47+11)%256,(l*89+5)%256,2,3);t.strokeStyle="#5cb840",t.lineWidth=2;for(let l=0;l<110;l++){const S=(l*53+17)%256,w=(l*97+43)%256;t.beginPath(),t.moveTo(S,w),t.lineTo(S+3,w-7),t.stroke()}for(let l=0;l<14;l++)t.fillStyle=l%3?"#fff3b0":"#ffd9e8",t.beginPath(),t.arc((l*109+37)%256,(l*71+13)%256,2.5,0,7),t.fill();const s=new ts(e);s.wrapS=s.wrapT=Ii,s.repeat.set(4,16),this.groundTex=s;const r=new Pe(new ai(34,130),new Bo({map:s}));r.rotation.x=-Math.PI/2,r.position.z=-40,this.scene.add(r);const a=document.createElement("canvas");a.width=128,a.height=256;const o=a.getContext("2d");o.clearRect(0,0,128,256);for(let l=0;l<256;l+=2){const S=Math.sin(l*.11)*4+Math.sin(l*.037)*6;o.fillStyle=l%12<6?"#d9ad74":"#d2a66c",o.fillRect(14+S,l,100,2)}o.fillStyle="rgba(187,138,84,0.6)";for(let l=0;l<256;l+=2){const S=Math.sin(l*.11)*3+Math.sin(l*.037)*5;o.fillRect(40+S,l,48,2)}o.fillStyle="rgba(245,227,189,0.75)";for(let l=0;l<256;l+=2){const S=Math.sin(l*.11)*4+Math.sin(l*.037)*6;o.fillRect(14+S,l,5,2),o.fillRect(109+S,l,5,2)}o.fillStyle="rgba(150,110,70,0.85)";for(let l=0;l<36;l++){const S=26+l*37%78,w=l*53%256;o.beginPath(),o.ellipse(S,w,2.4,1.6,0,0,7),o.fill()}const h=new ts(a);h.wrapS=h.wrapT=Ii,h.repeat.set(1,16),this.trailTex=h;const c=new Bo({map:h,alphaTest:.5});for(const l of An){const S=new Pe(new ai(2.35,130),c);S.rotation.x=-Math.PI/2,S.position.set(l,.02,-40),this.scene.add(S)}this.deco=[];const d=new Ws({map:ml(),gradientMap:qs()}),p=(l,S)=>{const w=new Ut,M=1.2+Math.random()*.9,E=.18+Math.random()*.08,T=new Pe(new kt(E,E*1.9,.5,12),d);T.position.y=.25,w.add(sn(T,1.04));const R=new Pe(new kt(E*.8,E,M,10),d);R.position.y=M/2+.2,w.add(sn(R,1.05));const _=0,b=M+.75,C=0,D=1.05+Math.random()*.35,N=.75+Math.random()*.3,H=16+Math.floor(Math.random()*9);for(let q=0;q<H;q++){const k=Math.random()*Math.PI*2,te=Math.acos(2*Math.random()-1),X=.55+Math.random()*.45,Q=Math.sin(te)*Math.cos(k)*D*X,ee=Math.cos(te)*N*X,Ae=Math.sin(te)*Math.sin(k)*D*X*.9,ye=Hi.clamp((ee/N+1)/2,0,1),je=[4169030,5025616,4431943],ke=ye>.72?6732650:je[q%je.length],Ye=Dt(.24+Math.random()*.18,ke,8);Ye.position.set(_+Q,b+ee,C+Ae),w.add(Ye)}for(let q=0;q<4;q++){const k=Dt(.16+Math.random()*.1,8505220,8);k.position.set(_+(Math.random()-.5)*D,b+N*(.55+Math.random()*.4),C+(Math.random()-.5)*D*.6),w.add(k)}for(let q=0;q<3;q++){const k=Math.random()*Math.PI*2,te=Dt(.11,15022389,8);te.position.set(_+Math.cos(k)*D*.8,b-N*.4+Math.random()*N*.7,C+Math.sin(k)*D*.72),w.add(te)}const U=new Pe(new Rn(1.25,16),new pn({color:4160802,transparent:!0,opacity:.28}));U.rotation.x=-Math.PI/2,U.position.y=.03,w.add(U),w.position.set(l,0,S);const G=.9+Math.random()*1.3;return w.scale.setScalar(G),w},u=(l,S)=>{const w=Dt(.7,8836177,10);w.position.set(l,.5,S),w.scale.y=.75;const M=Dt(.45,10149731,10);return M.position.set(.45,.35,.15),w.add(M),w},m=(l,S)=>{const w=Dt(.5,11583173,8);return w.position.set(l,.3,S),w.scale.set(1,.65,.85),w.rotation.y=Math.random()*Math.PI,w},x=(l,S)=>{const w=new Ut,M=new Pe(new kt(.035,.035,.45,5),ut(6076480));M.position.y=.22,w.add(M);const E=Dt(.19,[15684432,16763432,15490983,16747109][Math.floor(Math.random()*4)],10);E.position.y=.52,w.add(E);const T=Dt(.09,16771420,8);return T.position.set(0,.62,.1),w.add(T),w.position.set(l,0,S),w},y=(l,S)=>{const w=new Ut,M=o0(.09,.18,16774112);M.position.y=.16;const E=Dt(.26,15222060,12);E.scale.set(1,.62,1),E.position.y=.42,w.add(M,E);for(let R=0;R<4;R++){const _=Math.random()*Math.PI*2,b=Dt(.05,16777215,6);b.position.set(Math.cos(_)*.15,.5,Math.sin(_)*.15),w.add(b)}w.position.set(l,0,S);const T=.8+Math.random()*.9;return w.scale.setScalar(T),w},f=(l,S)=>{const w=new Ut;for(let M=0;M<3;M++){const E=kn(.06,.3+Math.random()*.2,M%2?6076480:7653183,5);E.position.set((M-1)*.09,.18,Math.sin(M*2)*.05),E.rotation.z=(M-1)*.25,w.add(E)}return w.position.set(l,0,S),w};for(let l=0;l<56;l++){const w=(l%2===0?-1:1)*(3.6+Math.random()*9),M=-70+Math.random()*85,E=Math.random(),T=E<.34?p(w,M):E<.52?u(w,M):E<.6?m(w,M):E<.7?y(w,M):E<.85?x(w,M):f(w,M);T.userData.deco=!0,this.scene.add(T),this.deco.push(T)}for(let l=0;l<24;l++){const S=l%2===0?-1:1,w=x(S*(3.1+Math.random()*.6),-68+l*3.6+Math.random()*2);w.userData.deco=!0,this.scene.add(w),this.deco.push(w)}for(let l=0;l<26;l++){const S=l%2===0?-1:1,w=f(S*(2.7+Math.random()*.55),-68+l*3.3+Math.random()*1.6);w.userData.deco=!0,this.scene.add(w),this.deco.push(w)}this.clouds=[];for(let l=0;l<9;l++){const S=new Ut,w=new pn({color:16777215});for(let M=0;M<5;M++){const E=1.5-M*.18+Math.random()*.35,T=new Pe(new er(E,8,8),w);T.position.set(M*1.45-2.6,Math.sin(M*1.4)*.4,M%2*.6-.3),S.add(T)}S.scale.setScalar(.9+Math.random()*1),S.position.set(-18+Math.random()*36,9.5+Math.random()*5.5,-62+Math.random()*52),this.scene.add(S),this.clouds.push(S)}for(let l=0;l<9;l++){const S=l%2===0?-1:1,w=Dt(5+Math.random()*6,l%3?8377167:7259711,12);w.scale.y=.4+Math.random()*.15,w.position.set(S*(13+Math.random()*16),0,-30-Math.random()*48),this.scene.add(w)}for(let l=0;l<16;l++){const S=l%2===0?-1:1,w=Dt(2.2+Math.random()*1.8,[7653183,8836177,6076480][l%3],8);w.position.set(S*(9+Math.random()*24),1.4+Math.random()*1.2,-62-Math.random()*12),this.scene.add(w)}for(let l=0;l<22;l++){const w=(l%2===0?-1:1)*(3.3+Math.random()*2.6),M=-70+Math.random()*85,E=Math.random()<.72?p(w,M):u(w,M);E.userData.deco=!0,this.scene.add(E),this.deco.push(E)}for(let l=0;l<16;l++){const w=(l%2===0?-1:1)*(6.2+Math.random()*3.5),M=-70+Math.random()*85,E=Math.random()<.8?p(w,M):u(w,M);E.userData.deco=!0,this.scene.add(E),this.deco.push(E)}for(let l=0;l<12;l++){const w=(l%2===0?-1:1)*(9.5+Math.random()*4.5),M=-70+Math.random()*82,E=p(w,M);E.scale.multiplyScalar(.82),E.userData.deco=!0,this.scene.add(E),this.deco.push(E)}}reset(){for(const e of[this.stumps,this.logs,this.coins,this.powerups])if(e)for(const t of e)this.scene.remove(t.mesh);this.stumps=[],this.logs=[],this.coins=[],this.powerups=[],this.speed=bi,this.dist=0,this.runCoins=0,this.petLane=1,this.petH=0,this.petV=0,this.runPhase=0,this.activeEffects={},this.spawnCount=0,this.nextSpawnIn=18,this.nextPowerupIn=60,this.lastStumpDist=-40,this.squash=0,this.landSpring=0,this.wasJumping=!1,this.bankZ=0,this.leanX=void 0,this.yawY=void 0,this.pet.scale.set(1,1,1),this.pet.position.set(An[1],0,0),this.pet.rotation.set(0,0,0);for(const e of["magnet","x2","rocket"])this.setEffectIcon(e,!1)}start(){this.reset(),this.prefillTrack(),this.state="playing",this.reviveUsed=!1,this._tutShown=!0,clearTimeout(this._tutTimer),Ni(),cs()}prefillTrack(){const e=Math.floor(Math.random()*3);for(let s=0;s<4;s++)this.spawnCoin(e,-20-s*2.4,0);const t=Math.floor(Math.random()*3);this.spawnStump(t,-40),this.spawnCoin(t,-42,.8),this.spawnCoin(t,-43.4,1.25),this.spawnCoin(t,-44.8,.8);const n=(t+1+Math.floor(Math.random()*2))%3;for(let s=0;s<4;s++)this.spawnCoin(n,-55-s*2.4,0);this.spawnPowerup(-60),this.spawnStump(Math.floor(Math.random()*3),-70)}hideTutorial(){this._tutShown&&(this._tutShown=!1,clearTimeout(this._tutTimer),document.getElementById("tutorial").classList.add("hidden"))}spawnPattern(){const e=Math.floor(Math.random()*3);this.spawnCount++;const t=Math.random();if(this.dist-this.lastStumpDist>25||t<.5){this.lastStumpDist=this.dist;const s=Math.random();if(this.dist>n0&&s<.3)this.spawnLog();else if(this.dist>300&&s<.55){const r=e;for(let a=0;a<3;a++)a!==r&&this.spawnStump(a);for(let a=0;a<3;a++)this.spawnCoin(r,Yt-3.2-a*2.4,0)}else this.spawnStump(e),Math.random()<.45&&(this.spawnCoin(e,Yt-2,.8),this.spawnCoin(e,Yt-3.4,1.25),this.spawnCoin(e,Yt-4.8,.8))}else if(t<.8){const s=3+Math.floor(Math.random()*2);for(let r=0;r<s;r++)this.spawnCoin(e,Yt-r*2.4,0);if(Math.random()<.3){const r=(e+1+Math.floor(Math.random()*2))%3;for(let a=0;a<3;a++)this.spawnCoin(r,Yt-1.2-a*2.4,0)}}else this.lastStumpDist=this.dist,this.spawnStump(e),this.spawnCoin(e,Yt-2,.8),this.spawnCoin(e,Yt-3.4,1.25),this.spawnCoin(e,Yt-4.8,.8)}spawnLog(){const t=Math.random()<.45?[0,1,2]:Math.random()<.5?[0,1]:[1,2],n=An[t[0]],s=An[t[t.length-1]],r=(n+s)/2,a=s-n+2.6,o=.42,h=new Ut,c=ml().clone();c.needsUpdate=!0,c.repeat.set(Math.max(2,Math.round(a/1.4)),1);const d=new Ws({map:c,gradientMap:qs()}),p=new Ws({map:c0(),gradientMap:qs()}),u=new Pe(new kt(.3,o,a,16),[d,p,p]);u.rotation.z=Math.PI/2,u.position.y=o,h.add(sn(u,1.04));const m=new Pe(new Rn(o*1.08,18),p);m.position.set(a/2+.01,o,0),m.rotation.y=Math.PI/2,h.add(m);const x=new Pe(new rn(o*1.05,.045,6,20),ut(7029279));x.rotation.y=Math.PI/2,x.position.set(a/2+.01,o,0),h.add(x);for(let f=0;f<6;f++){const l=f/6*Math.PI*2+.3,S=kn(.09,.55+Math.random()*.25,8015402,6);S.position.set(a/2+.22,o+Math.cos(l)*o*.6,Math.sin(l)*o*.6),S.rotation.z=-1.2,S.rotation.y=Math.sin(l)*.6,h.add(S)}const y=new Pe(new Rn(.3,14),p);y.position.set(-a/2-.004,o,0),y.rotation.y=-Math.PI/2,h.add(y);for(let f=0;f<6;f++){const l=f/6*Math.PI*2+.15,S=kn(.045+Math.random()*.03,.3+Math.random()*.28,14267266,5);S.position.set(-a/2-.2,o+Math.cos(l)*.18,Math.sin(l)*.18),S.rotation.z=Math.PI/2+(Math.random()-.5)*.5,S.rotation.y=Math.sin(l)*.7,h.add(S)}for(let f=0;f<3;f++){const l=Dt(.14+Math.random()*.08,f%2?7319370:6069822,8);l.scale.set(1.5,.35,.95),l.position.set((Math.random()-.5)*a*.7,o*2-.03,(Math.random()-.5)*.2),h.add(l)}for(let f=0;f<3;f++){const l=.5+Math.random()*2,S=Dt(.06,7029279,6);S.position.set((Math.random()-.5)*a*.8,o+Math.cos(l)*o*.9,Math.sin(l)*o*.9),h.add(S)}h.position.set(r,0,Yt),this.scene.add(h),this.logs.push({mesh:h,lanes:t,z:Yt,passed:!1})}spawnStump(e,t=Yt){const n=new Ut,s=5;for(let u=0;u<s;u++){const m=u/s*Math.PI*2+.3,x=kn(.14,.55,7029279,6);x.position.set(Math.cos(m)*.45,.1,Math.sin(m)*.45),x.rotation.set(Math.sin(m)*1.05,0,-Math.cos(m)*1.05),n.add(x)}const r=new Pe(new kt(.5,.6,.75,12),ut(9067051));r.position.y=.44,n.add(sn(r,1.05));for(let u=0;u<8;u++){const m=u/8*Math.PI*2,x=new Pe(new kt(.02,.032,.66,4),ut(7029279));x.position.set(Math.cos(m)*.53,.44,Math.sin(m)*.53),n.add(x)}const a=new Pe(new rn(.52,.05,6,16),ut(7029279));a.rotation.x=Math.PI/2,a.position.y=.72;const o=new Pe(new rn(.58,.05,6,16),ut(7029279));o.rotation.x=Math.PI/2,o.position.y=.14,n.add(a,o);const h=new Pe(new kt(.48,.48,.09,16),ut(14267266));h.position.y=.82,n.add(sn(h,1.04));const c=new Pe(new rn(.29,.022,6,20),ut(12160350));c.rotation.x=Math.PI/2,c.position.y=.875;const d=new Pe(new rn(.14,.018,6,14),ut(12160350));d.rotation.x=Math.PI/2,d.position.y=.875,n.add(c,d);const p=new Pe(new kt(.055,.09,.5,6),ut(8015402));p.position.set(.56,.58,.12),p.rotation.z=-1.05,n.add(p),n.position.set(An[e],0,t),this.scene.add(n),this.stumps.push({mesh:n,lane:e,z:t,passed:!1})}spawnCoin(e,t,n){const s=new Ut,r=sn(Dt(.3,14826286,14),1.05);r.scale.set(1,.92,1),s.add(r);const a=new Pe(new kt(.02,.03,.16,6),ut(7029279));a.position.set(.02,.32,0),a.rotation.z=.25,s.add(a);const o=Dt(.09,5813096,8);o.scale.set(1,.35,.55),o.position.set(.12,.34,0),o.rotation.z=-.4,s.add(o),s.position.set(An[e],.85+n,t),this.scene.add(s),this.coins.push({mesh:s,lane:e,z:t,h:n,phase:Math.random()*Math.PI*2})}spawnPowerup(e=Yt){const t=["magnet","x2","rocket"],n=t[Math.floor(Math.random()*t.length)],s=Math.floor(Math.random()*3);let r;if(n==="magnet"){r=new Ut;const o=new Pe(new rn(.3,.12,8,14,Math.PI),ut(14826299));r.add(sn(o,1.06));for(const c of[-1,1]){const d=Gr(.18,.17,.18,15265266);d.position.set(c*.3,-.02,0),r.add(sn(d,1.06))}const h=Gr(.6,.14,.2,13620957);h.position.y=.3,r.add(h)}else if(n==="x2"){r=new Ut;const o=new Pe(new kt(.38,.38,.1,24),ut(16103454));o.rotation.x=Math.PI/2,r.add(sn(o,1.04));const h=new kl().load("assets/x2.png");h.colorSpace=Nt;for(const c of[1,-1]){const d=new Pe(new Rn(.35,24),new pn({map:h,transparent:!0,alphaTest:.5}));d.position.z=c*.056,c<0&&(d.rotation.y=Math.PI),r.add(d)}}else{r=new Ut;const o=kn(.27,.55,14826299,12);o.position.y=.5;const h=new Pe(new kt(.27,.27,.75,14),ut(16119800));h.position.y=-.08;const c=new Pe(new rn(.275,.032,6,20),ut(14826299));c.rotation.x=Math.PI/2,c.position.y=.2;const d=new Pe(new rn(.275,.032,6,20),ut(14826299));d.rotation.x=Math.PI/2,d.position.y=-.34;const p=new Pe(new rn(.095,.028,6,16),ut(14826299));p.position.set(0,.03,.25);const u=new Pe(new Rn(.08,14),new pn({color:10476799}));u.position.set(0,.03,.262);for(let f=0;f<4;f++){const l=f*Math.PI/2,S=Gr(.24,.34,.05,14826299);S.position.set(Math.cos(l)*.33,-.34,Math.sin(l)*.33),S.rotation.y=-l,r.add(S)}const m=kn(.17,.24,6381921,8);m.rotation.x=Math.PI,m.position.y=-.56;const x=kn(.15,.42,16748288,8);x.rotation.x=Math.PI,x.position.y=-.82;const y=kn(.085,.3,16769154,8);y.rotation.x=Math.PI,y.position.y=-.76,r.add(sn(o,1.05),sn(h,1.05),c,d,p,u,m,x,y),r.userData.flame=x,r.userData.flameCore=y,r.scale.setScalar(1.15)}const a=new qh(16777215,.8,4);r.add(a),r.position.set(An[s],1.3,e),this.scene.add(r),this.powerups.push({mesh:r,lane:s,z:e,type:n,phase:Math.random()*Math.PI*2})}moveLane(e){if(this.state!=="playing")return;const t=Math.max(0,Math.min(2,this.petLane+e));t!==this.petLane&&(this.petLane=t,this.hideTutorial(),Ft("jump",.2))}tryJump(){this.state==="playing"&&this.petH===0&&(this.petV=i0,this.hideTutorial(),Ft("jump",.5))}onCoin(e){this.scene.remove(e.mesh),this.coins.splice(this.coins.indexOf(e),1);const t=this.isFx("x2")?2:1;this.runCoins+=t,ft.hudCoins(this.runCoins),Ft("coin",.55)}onPowerup(e){this.scene.remove(e.mesh),this.powerups.splice(this.powerups.indexOf(e),1),Jm(),Ft("powerup",.7),this.activeEffects[e.type]=performance.now()+r0[e.type],this.setEffectIcon(e.type,!0)}onStumpHit(e){if(this.isFx("rocket")){e.passed=!0,e.mesh.children.forEach(t=>t.material=ut(12303291));return}this.crash()}crash(){if(this.state!=="playing")return;this.state="crash",this.hideTutorial(),Ft("stumble",.7),us();const e=Math.floor(this.dist),t=vt(),n=e>t.record;n&&Qt({record:e}),ft.crashFlash(),Ja(),setTimeout(()=>{this.state==="crash"&&(Za(this.runCoins),$m(e),jm(e),u0(e),ft.showResults(e,this.runCoins,n))},900)}revive(){if(this.state!=="crash"||this.reviveUsed)return;this.reviveUsed=!0,this.state="playing",this.pet.rotation.z=0,this.pet.position.y=0;const e=t=>{t.passed=!0,t.mesh.traverse(n=>{n.isMesh&&(n.material=ut(12303291))})};for(const t of this.stumps)!t.passed&&t.z<35&&e(t);for(const t of this.logs)!t.passed&&t.z<35&&e(t);Ni(),cs()}isFx(e){return(this.activeEffects[e]||0)>performance.now()}setEffectIcon(e,t){const n=document.getElementById("fx-"+e);n&&(n.style.opacity=t?"1":"0")}update(e){if(this.state==="crash"){this.pet.rotation.z+=e*9,this.pet.position.y=Math.max(0,this.pet.position.y-e*2.5);return}if(this.state!=="playing")return;const t=performance.now(),n=this.isFx("rocket")?1.5:1,s=Math.floor(this.dist/1e3),r=Math.min(Os,bi+s*t0)*n;this.speed+=(r-this.speed)*Math.min(1,e*2),this.dist+=this.speed*e,ft.hudMeters(Math.floor(this.dist)),this._tutShown&&this.dist>45&&this.hideTutorial(),this.groundTex.offset.y+=this.speed*e/8,this.trailTex.offset.y+=this.speed*e/8;for(const f of this.deco)if(f.position.z+=this.speed*e,f.position.z>14){f.position.z=-72;const l=f.position.x<0?-1:1;f.position.x=l*(3.6+Math.random()*9)}for(const f of this.clouds)f.position.z+=this.speed*e*.25,f.position.z>16&&(f.position.z=-70);const a=this.pet,o=a.userData,h=An[this.petLane];a.position.x+=(h-a.position.x)*Math.min(1,e*10),a.rotation.z=(h-a.position.x)*-.25,(this.petH>0||this.petV>0)&&(this.petV-=s0*e,this.petH=Math.max(0,this.petH+this.petV*e),this.petH===0&&(this.petV=0)),a.position.y=this.petH,this.runPhase+=e*this.speed*.9;const c=this.petH>.02,d=h-a.position.x;if(this.bankZ=(this.bankZ||0)+(d*-.38-(this.bankZ||0))*Math.min(1,e*9),a.rotation.z=this.bankZ,o.sprite){let l=.07+(this.speed-bi)/(Os-bi)*.13;c&&(l+=-.14+Hi.clamp(-this.petV*.03,-.18,.22)),this.leanX=(this.leanX??l)+(l-(this.leanX??l))*Math.min(1,e*7),a.rotation.x=this.leanX;const S=d*-.16;this.yawY=(this.yawY??0)+(S-(this.yawY??0))*Math.min(1,e*7),a.rotation.y=this.yawY,o.sprite.map=c?o.tJump:Math.floor(this.runPhase/(Math.PI*.85))%2?o.tRun2:o.tRun1}else{if(o.head&&(o.head.rotation.z=d*.22),c)o.legs.forEach(S=>S.rotation.x=-1.15),o.knees.forEach(S=>S.rotation.x=1.8),o.arms.forEach(S=>S.rotation.x=-2.3),o.elbows.forEach(S=>S.rotation.x=-.5);else{const S=.85+this.speed/Os*.4;o.legs.forEach((w,M)=>{const E=this.runPhase+(M?Math.PI:0);w.rotation.x=Math.sin(E)*S,o.knees[M].rotation.x=Math.max(0,Math.sin(E-.7))*1.35}),o.arms.forEach((w,M)=>{const E=this.runPhase+(M?0:Math.PI);w.rotation.x=Math.sin(E)*S*.75,o.elbows[M].rotation.x=-.4-Math.max(0,Math.sin(E-.4))*.6})}let l=.05+(this.speed-bi)/(Os-bi)*.14;if(c&&(l+=-.12+Hi.clamp(-this.petV*.03,-.2,.25)),o.body.rotation.x=l,c)o.body.rotation.y*=.9,o.head&&(o.head.rotation.y*=.9,o.head.position.y+=(1.6-o.head.position.y)*Math.min(1,e*6));else{const S=Math.sin(this.runPhase);o.body.rotation.y=S*.08,o.head&&(o.head.position.y=1.56+Math.abs(Math.sin(this.runPhase*2))*.035,o.head.rotation.y=-S*.1,o.head.rotation.z=S*.03)}}if(this.landSpring=(this.landSpring||0)*Math.pow(1e-4,e),o.sprite){const f=c?0:Math.abs(Math.sin(this.runPhase*2))*.05;o.plane.position.y=1.05+f+this.landSpring}else{const f=c?0:Math.abs(Math.sin(this.runPhase*2))*.045;o.body.position.y=.88+f+this.landSpring}this.wasJumping&&!c&&(this.squash=1,this.landSpring=-.14),!this.wasJumping&&c&&(this.squash=-.7),this.wasJumping=c,this.squash=(this.squash||0)*Math.pow(5e-4,e);let p=1,u=1;const m=Hi.clamp(Math.abs(this.petV)*.04,0,.22);c&&(p+=m,u-=m*.45),this.squash>.01?(p*=1-.32*this.squash,u*=1+.2*this.squash):this.squash<-.01&&(p*=1-.3*this.squash,u*=1+.2*this.squash),a.scale.set(u,p,u),o.tail&&(o.tail.rotation.z=Math.sin(this.runPhase*.9)*.18+Hi.clamp(d*.5,-.5,.5),o.tail.rotation.x=c?-.35:Math.sin(this.runPhase*1.7)*.07),o.ears&&o.ears.forEach((f,l)=>f.rotation.x=Math.sin(this.runPhase*2+l)*.08+(c?-.25:0)),o.scarf&&(o.scarf.rotation.x=Math.sin(this.runPhase*2.6)*.25+(c?.5:0));const x=Math.max(.4,1-this.petH/3);o.shadow.scale.setScalar(x),o.shadow.material.opacity=.35*x;const y=this.speed*e;for(let f=this.stumps.length-1;f>=0;f--){const l=this.stumps[f];l.z+=this.speed*e,l.mesh.position.z=l.z;const S=l.z-y;if(!l.passed&&l.lane===this.petLane&&S<.55&&l.z>-.45){if(this.petH>pl)l.passed=!0;else if(this.onStumpHit(l),this.state!=="playing")return}l.z>Fs&&(this.scene.remove(l.mesh),this.stumps.splice(f,1))}for(let f=this.coins.length-1;f>=0;f--){const l=this.coins[f];l.z+=this.speed*e,l.mesh.position.z=l.z,l.mesh.rotation.y+=e*3,l.mesh.position.y=.85+l.h+Math.sin(t/250+l.phase)*.08,this.isFx("magnet")&&Math.abs(l.z)<8?(l.mesh.position.x+=(a.position.x-l.mesh.position.x)*.25,l.h+=(this.petH-l.h)*.25):l.mesh.position.x=An[l.lane];const w=.85+l.h,M=a.position.y+.95;if(Math.abs(l.z)<1&&Math.abs(l.mesh.position.x-a.position.x)<.85&&Math.abs(w-M)<1.05){this.onCoin(l);continue}l.z>Fs&&(this.scene.remove(l.mesh),this.coins.splice(f,1))}for(let f=this.logs.length-1;f>=0;f--){const l=this.logs[f];l.z+=this.speed*e,l.mesh.position.z=l.z;const S=l.z-y;if(!l.passed&&l.lanes.includes(this.petLane)&&S<.55&&l.z>-.45){if(this.petH>pl)l.passed=!0;else if(this.onStumpHit(l),this.state!=="playing")return}l.z>Fs&&(this.scene.remove(l.mesh),this.logs.splice(f,1))}for(let f=this.powerups.length-1;f>=0;f--){const l=this.powerups[f];if(l.z+=this.speed*e,l.mesh.position.z=l.z,l.mesh.position.y=1.3+Math.sin(t/250+l.phase)*.15,l.mesh.rotation.y+=e*3,l.mesh.userData.flame){const S=.85+Math.sin(t/55+l.phase)*.25;l.mesh.userData.flame.scale.set(S,1+Math.sin(t/40+l.phase)*.22,S),l.mesh.userData.flameCore.scale.setScalar(.9+Math.sin(t/48+l.phase)*.2)}if(l.lane===this.petLane&&Math.abs(l.z)<1){this.onPowerup(l);continue}l.z>Fs&&(this.scene.remove(l.mesh),this.powerups.splice(f,1))}for(const f of["magnet","x2","rocket"])this.activeEffects[f]&&this.activeEffects[f]<t&&(this.activeEffects[f]=0,this.setEffectIcon(f,!1));this.nextSpawnIn-=this.speed*e,this.nextSpawnIn<=0&&(this.spawnPattern(),this.nextSpawnIn=11+Math.random()*6),this.nextPowerupIn-=this.speed*e,this.nextPowerupIn<=0&&(this.spawnPowerup(),this.nextPowerupIn=90+Math.random()*60),this.camera.position.x+=(a.position.x*.4-this.camera.position.x)*Math.min(1,e*5)}loop(){const e=performance.now(),t=Math.min(.05,(e-this.lastT)/1e3);this.lastT=e,this.update(t),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.loop)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setPet(e){this.scene.remove(this.pet),this.pet=gl(e),this.scene.add(this.pet)}}function u0(i){if(window.ysdk)try{window.ysdk.getLeaderboards().then(e=>e.setLeaderboardScore("distance",Math.round(i))).catch(()=>{})}catch{}}function d0(){if(!window.ysdk)return Promise.resolve(null);try{return window.ysdk.getLeaderboards().then(i=>i.getLeaderboardEntries("distance",{quantityTop:5,includeUser:!0})).then(i=>(i.entries||[]).map(e=>({name:e.player&&e.player.publicName?e.player.publicName:"—",score:e.score,me:!!(e.player&&e.player.isMe)}))).catch(()=>null)}catch{return Promise.resolve(null)}}const Me=i=>document.getElementById(i),ft={show(i){Me(i).classList.remove("hidden"),Ja()},hide(i){Me(i).classList.add("hidden")},screens:["screen-menu","screen-shop","screen-quests","screen-leaderboard","screen-pause","screen-results"],hudCoins(i){Me("hud-coins").textContent=i},hudMeters(i){Me("hud-meters").textContent=Le("meters",{n:i})},showMenu(){this.screens.forEach(n=>this.hide(n)),this.show("screen-menu"),this.hide("hud");const i=vt(),e=Ci[i.selected]||Ci.fox,t=(Bs[i.selected]||Bs.fox)[qn];Me("menu-coins").textContent=i.coins,Me("menu-pet").src="assets/"+e.asset+".png",Me("menu-hello").textContent=Le("hello",{name:t}),Me("menu-record").textContent=i.record>0?Le("record",{n:i.record}):"",Be.state="menu"},startGame(){this.screens.forEach(i=>this.hide(i)),this.show("hud"),this.hudCoins(0),Be.start(),this.show("tutorial"),clearTimeout(Be._tutTimer),Be._tutTimer=setTimeout(()=>Be.hideTutorial(),1e4)},showShop(){this.screens.forEach(t=>this.hide(t)),this.show("screen-shop");const i=vt();Me("shop-coins").textContent=i.coins;const e=Me("shop-grid");e.innerHTML="";for(const[t,n]of Object.entries(Ci)){const s=i.owned.includes(t),r=i.selected===t,a=Bs[t]?Bs[t][qn]:t,o=document.createElement("div");o.className="card"+(s?"":" locked");const h=r?"btn-green":s?"btn-blue":"btn-orange",c=r?Le("selected"):s?Le("select"):`${n.price} <img src="assets/apple.png" alt="" style="width:20px;height:20px;vertical-align:-4px">`;o.innerHTML=`<img src="assets/${n.asset}.png" alt="${a}">
        <div class="name">${a}</div>
        <div class="btn ${h}">${c}</div>`,o.querySelector(".btn").addEventListener("click",()=>this.buyOrSelect(t)),e.appendChild(o)}},buyOrSelect(i){const e=Ci[i],t=vt();if(t.selected!==i){if(t.owned.includes(i))Qt({selected:i}),Ft("collect",.6);else if(t.coins>=e.price)Qt({coins:t.coins-e.price,owned:[...t.owned,i],selected:i}),Ft("powerup",.7);else{Ft("stumble",.5),this.toast(Le("not_enough"));return}Be.setPet(i),this.showShop()}},showQuests(){this.screens.forEach(t=>this.hide(t)),this.show("screen-quests");const i=vt(),e=Me("quests-list");e.innerHTML="";for(const t of tc){const n=Math.min(t.get(i),t.target),s=t.get(i)>=t.target,r=i.questsClaimed.includes(t.id),a=Math.max(4,n/t.target*100),o=document.createElement("div");o.className="quest";const h='<img src="assets/apple.png" alt="" style="width:20px;height:20px;vertical-align:-4px">',c=r?`<div class="btn" style="background:#9ccc9c">${Le("claimed")}</div>`:s?`<div class="btn btn-green claim">${Le("claim")} ${t.reward} ${h}</div>`:`<div class="btn" style="background:#cfcfcf">${Le("reward")}: ${t.reward} ${h}</div>`;o.innerHTML=`
        <div class="qname">${Le(t.nk)}</div>
        <div class="qbar ${s?"done":""}"><div style="width:${a}%"></div></div>
        <div style="text-align:right;color:#5b3a29;margin-bottom:6px">${n}/${t.target}</div>
        ${c}`;const d=o.querySelector(".claim");d&&d.addEventListener("click",()=>{Qm(t.id)&&(Ft("powerup",.7),this.showQuests())}),e.appendChild(o)}},showPause(){Be.state="paused",this.show("screen-pause")},resume(){this.hide("screen-pause"),Be.state="playing",cs()},showResults(i,e,t){this.hide("hud"),this.show("screen-results"),Me("result-record").textContent=Le("new_record"),Me("result-record").style.display=t?"block":"none",Me("result-meters").textContent=Le("distance",{n:i}),Me("result-coins").textContent=`+${e}`;const n=Me("btn-double");e>0?(n.classList.remove("hidden"),n.onclick=()=>{Aa(()=>{Za(e),Me("result-coins").textContent=`+${e*2}`,n.classList.add("hidden"),n.onclick=null,Ft("powerup",.7),this.toast(Le("ad_done"))})}):(n.classList.add("hidden"),n.onclick=null);const s=Me("btn-continue");Be.reviveUsed?(s.classList.add("hidden"),s.onclick=null):(s.classList.remove("hidden"),s.onclick=()=>{Aa(()=>{this.hide("screen-results"),this.show("hud"),Be.revive(),this.toast(Le("ad_done"))})})},toast(i){const e=document.createElement("div");e.className="toast",e.textContent=i,document.body.appendChild(e),setTimeout(()=>e.remove(),1600)},showLeaderboard(){this.screens.forEach(n=>this.hide(n)),this.show("screen-leaderboard");const i=Me("lb-list"),e=["🥇","🥈","🥉","4.","5."],t=n=>{let s="";n&&n.length&&(s+=`<div class="lb-sec">${Le("lb_yandex")}</div>`,n.forEach((a,o)=>{s+=`<div class="lb-entry${a.me?" me":""}"><span class="rank">${e[o]||o+1+"."}</span><span>${a.name}</span><span class="dist">${Le("meters",{n:a.score})}</span></div>`}));const r=e0();s+=`<div class="lb-sec">${Le("lb_local")}</div>`,r.length?r.forEach((a,o)=>{s+=`<div class="lb-entry"><span class="rank">${e[o]||o+1+"."}</span><span>🏃</span><span class="dist">${Le("meters",{n:a.m})}</span></div>`}):s+=`<div style="text-align:center;color:#5b3a29;padding:10px">${Le("lb_empty")}</div>`,i.innerHTML=s};t(null),d0().then(n=>{n&&n.length&&t(n)})},crashFlash(){this.toast(Le("crash_msg"))}};function Qa(){qn=vt().lang||"ru",document.documentElement.lang=qn,document.title=Le("doc_title"),Me("game-title").innerHTML=Le("game_title"),Me("btn-play").textContent=Le("btn_play"),Me("btn-shop").textContent=Le("btn_shop"),Me("btn-quests").textContent=Le("btn_quests"),Me("btn-shop-back").textContent=Le("btn_back"),Me("btn-quests-back").textContent=Le("btn_back"),Me("btn-resume").textContent=Le("btn_resume"),Me("btn-pause-menu").textContent=Le("btn_menu"),Me("btn-results-menu").textContent=Le("btn_menu"),Me("btn-leaderboard").textContent=Le("btn_leaderboard"),Me("lb-title").textContent=Le("lb_title"),Me("btn-lb-back").textContent=Le("btn_back"),Me("btn-ad-apples").textContent=Le("ad_apples"),Me("btn-double").textContent=Le("ad_double"),Me("btn-continue").textContent=Le("btn_continue"),Me("shop-title").textContent=Le("shop_title"),Me("quests-title").textContent=Le("quests_title"),Me("pause-title").textContent=Le("pause_title"),Me("results-title").textContent=Le("results_title"),Me("result-record").textContent=Le("new_record"),Me("tut-line1").textContent=Le("tut_line1"),Me("tut-line2").textContent=Le("tut_line2"),Me("tut-sub").textContent=Le("tut_sub"),Me("btn-lang").textContent=qn==="ru"?"EN":"RU",typeof Be<"u"&&Be&&(Me("screen-shop").classList.contains("hidden")?Me("screen-quests").classList.contains("hidden")?Me("screen-leaderboard").classList.contains("hidden")?ft.showMenu():ft.showLeaderboard():ft.showQuests():ft.showShop())}const Be=new h0;Qa();window.game=Be;Me("btn-play").addEventListener("click",()=>{Ft("jump",.4),ft.startGame()});Me("btn-shop").addEventListener("click",()=>{Ft("collect",.4),ft.showShop()});Me("btn-quests").addEventListener("click",()=>{Ft("collect",.4),ft.showQuests()});Me("btn-shop-back").addEventListener("click",()=>ft.showMenu());Me("btn-quests-back").addEventListener("click",()=>ft.showMenu());Me("btn-leaderboard").addEventListener("click",()=>{Ft("collect",.4),ft.showLeaderboard()});Me("btn-lb-back").addEventListener("click",()=>ft.showMenu());Me("btn-pause").addEventListener("click",()=>ft.showPause());Me("btn-resume").addEventListener("click",()=>ft.resume());Me("btn-pause-menu").addEventListener("click",()=>{us(),ft.showMenu()});Me("btn-results-menu").addEventListener("click",()=>ft.showMenu());const nc=()=>{const i=vt().muted?"🔇":"🔊";document.querySelectorAll(".btn-sound").forEach(e=>e.textContent=i)};document.querySelectorAll(".btn-sound").forEach(i=>i.addEventListener("click",e=>{e.stopPropagation(),Qt({muted:!vt().muted}),$a(),nc()}));nc();Me("btn-lang").addEventListener("click",()=>{Qt({lang:qn==="ru"?"en":"ru",langTouched:!0}),Ft("collect",.4),Qa()});Me("btn-ad-apples").addEventListener("click",()=>{Aa(()=>{Za(50),Ft("powerup",.7),ft.toast(Le("ad_done")),Me("screen-shop").classList.contains("hidden")||ft.showShop(),Me("menu-coins").textContent=vt().coins})});window.addEventListener("keydown",i=>{i.code==="ArrowLeft"||i.code==="KeyA"?Be.moveLane(-1):i.code==="ArrowRight"||i.code==="KeyD"?Be.moveLane(1):i.code==="ArrowUp"||i.code==="KeyW"||i.code==="Space"?Be.tryJump():i.code==="Escape"&&Be.state==="playing"&&ft.showPause()});let Ji=null;window.addEventListener("pointerdown",i=>{i.target.closest(".btn")||i.target.closest("button")||i.target.closest(".panel")||(Ji={x:i.clientX,y:i.clientY})});window.addEventListener("pointerup",i=>{if(!Ji)return;const e=i.clientX-Ji.x,t=i.clientY-Ji.y;Ji=null,Math.abs(e)<30&&Math.abs(t)<30?Be.tryJump():Math.abs(e)>Math.abs(t)?Be.moveLane(e>0?1:-1):t<0&&Be.tryJump()});
