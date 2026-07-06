function s(t,n){if(!n)return{x:t.x,y:t.y};const r=n*Math.PI/180,c=Math.cos(r),o=Math.sin(r);return{x:t.x*c-t.y*o,y:t.x*o+t.y*c}}export{s as r};
