function l(r,a){let t=0,f=0;for(let e=a;;e--)if(e<1||r.charAt(e-1)===" "&&e!==a){t=e;break}for(let e=a+1;;e++)if(e>r.length||r.charAt(e-1)===" "){f=e-1;break}return[t,f]}export{l as g};
