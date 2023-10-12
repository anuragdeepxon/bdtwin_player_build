import{s as y,d as T,v as O,R as M,r as b,j as I}from"./index-9f91b684.js";const nt=y.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  max-width: 784px;
  width: 100%;
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    color: var(--color-white);
    padding-top: 32px;
  }
  @media ${T.laptopM} {
    h2 {
      font-size: 25px;
      line-height: 30px;
    }
  }
`,rt=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 32px;
  gap: 40px;
  flex-wrap: wrap;
`,ot=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: var(--color-white);

    p {
      margin-top: 6px;
    }
  }
  canvas {
    width: 110px !important;
    height: 110px !important;
  }

  @media ${T.tabletL} {
    canvas {
      width: 80px !important;
      height: 80px !important;
    }
  }
`,it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgBtZU9bxNBEIZn1idjIUjsCoMUydRQkIYKCRfpwx9AMk1aOxKK6WJ3IZVFCRKEFoQE/yCRoEGKkia9JUuJ0+ScTzkft5OZvfh8tte5S+w8jde7d+/cvjs7g3AN6ZKbTiWdIiDlASgHgDmZJ4AWAmwS0R9U+ndzKVMfpoG2yewHNweU+MbDPMRjBdCr2gKp/olH5aMiUWLjBuJCAfmdxwv7pf6Fnh1kFw4X2Y4KjAJhpbn8sDoQQL4cQdfiaDx7omAi5b960CZo7JH5DUSJ5neWJ2tBAPFcbOE/6euEn7Pw17f3YSrTe3TFn234sX7eDcBJQOhNy5n4Z0CJxSjxqYyCX3OD4jZItPwkAcfPGChEvfR+JhnY0qHh+raE7QmRlzR3SKs3GP1Rxvcw/bbYSCVVSSHiLMRgItUN0HB1pLgB8bXizb2AuyOnog531ACYLR/QsNX/5Qexsmbm0wlsbXvWNTG2DiMyTFzuw8gBtnb00DW2ZtMBojU+7bztgS//ToPcn3uV7CkPn/+emXHnLthAKeem5t9LuBBB+DwkTV9+PIZI0HuqWrVMi4erMH5WurUIvXfSpWBMEFBLGpCMTQDTiYiqMCb49gbdLbj/u1K/cQxBWKPTC3oCCM2lyQo38vnb2CW2SKMRjfD8QE+WnSA3C7bsO8RnFVFPh7+8g2N7+sq/AveKil/OcVYTcVFEU7cutLmcdbZjrd3WtatMtHIJgCriAsJS3L0AAAAASUVORK5CYII=",st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP7SURBVHgBjVbfT9xFEJ/5fr8c0B4FUiHRajhojJBoQh/so8UEn9tqojHGXEl8bS6+9Y3DvwBseAbSB40mkj7rA75oqon4I/EuNpYjLWlKWnqllMJxt9PZmd297x206ZKF/c7OfGZ2PrOzILxg5BbW+o5l+woIMEFEOUIYQiJEhKoB/DMCum6iaLn0Uf/68zDwKOHoN3dzmHQuANEEAKkio7ITu6Jgyc7sgn8tmkZtpvzpq5V2rKhdMPbdg0IUd6wCGQ9OMomcBoOSQTA83bYBymPc8Ye1feEJRr9/MI3GFOElBnvU2FtkMorlTwZmDjkY+3azwF+zIVC72ZZAu2dlZNMk6XHfXo4it+svSx8PzgUHknOMV3m3j3UpAtGUCEkCYzB0ude8B5nlBR2OdYygRQBJZtySrxxgNM157FUsQuMSTvJt1NiKjLUnlYvQWBcoe9ZR0IVequ0vCrSNnrfXfFQStZxZtjVSgJBvf6KeJIIPT3fD2YEM/LZZg6X/dilUlqYK9/f2+hMGu5BmQ0uRfAEFFuTsrHV2MIOTpzrh4sgx6OnQ7dLDA7XhE1oe0KhdpqurkPDf8x4YW2tEi1w8Ibw7mIHLb2eBHUD72D4wjhuw+Qo29oImZMw4REog+RKyUbBiTyaC/GgW8m9lbbTif+NJA67+sw2X3zkBp47HeoKtmrdVcIxIucGhhP31ok+H1huN9XXgxeFuzvHxkAY7lso7sHxrF+bPnQzgdpR9ipy9JV/PQMOJPxI5GiZf78L59062pMBGfeXXLdjYacC1D15pAd+uGXhUawC4e42U4o1nwpIKO855Dz/dfgqf/7gJk290w2h/Bn7f3KfF0mM8wem6NjnA4EmLcyHY3QVytaGXUZaPuIqgwoshS5K7SXDj3h7cYGBHnEQ0f44jzyaHCC4/rJFy25RRaIfccZmclWZppqfB9PeVX+5zquqHHNzZqbvL5xqin/LZuB7V62ZOSSFI3VNpAU11YqADmPhhg67+XW1N0da+gtvu6tiUH7ZqxJ3LUWVq2FqsCJTRqOVONTs1uoYtp/r6ryq9v3yHCa/L/Jcd+MYHngS9oYtrn722Lhv8cuX45q+Ca3bN5tW61jI30gpS8pYLqn6w2iA8w8FXpNnZBSsVJYlCNhGFPOqUpxIM+lJUHZPKt6eA7L0tWkyrG160m/nhOX5svgoFptoIztS0OQ1pgSapfDrrfOZm/vScxz30Jo8s/V/gZlV06Qptg9oMpKlpefrSr/Ji5tbUm7NpvCMf/dxCKRdjPM32l5pPo3uWMfgC58D+Q7BiGvGltS9G1tuxjnSQdhRBfJ6VLjDQOGv3ar8H5gwrZOhnE+3OVqbOVJ+H8QwWC4SdwrBmtQAAAABJRU5ErkJggg==",lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASuSURBVHgBlVZfTFtVGP/OBUYLtSsBaieRlT+RZYrdP2NmskiixgfDgChmIeqGD5plJmwvi/oyieHBBzMwJprsYcSYLI4HYG97kRoRZBPsJGPZXKTIQguM0a4F1vbee/Z9372ndMCW7FxOz7/v/H7fv3MOAE8oUkqPIY2T2PZjnZbrZRnrEFZa88PTFgLGel5uUcyNn2lKW9a/FZbYAryZNgghiARurNyC4fionEreEouZJZbZWVgBpdvK4BX3HjjkOai2xlC+My8vr/uxBChwFGsv9adWbsKPd3rhbvpuVlTiRxskWD8CB2VI9K63EV4vec2SEuIrrJ2bCDKZTAOyD1G/b34Q+qKX7EUFmYUGiVxCqr3W/Hu+w9D6bBMrgX+nlCXC1txPQcOu/2J0QPZFB4XMsQvhBBtgYYlHjWFyxnmn/C1or2hjd6VSqb1OpzOs2ShniGR69X+4MNcvdJPDB62+JjhW0SZMBNFNAwzDFIZpYmuASa1JYylwnvpwKXoZxmLjnCSFhYVnCVijAQo306Dr9lkgYMM0xPu+ZjiyowUavW/D7uIXaJPgNWlQ5gidWmnwR/Pcx9Vzsz/nJotHQ20I3DOZmIJoaoE1wcSDN0oPZZ1ERAxFa6QxqUHWYOWxtCwg4khqXv4Z+4v34fgYWbCHBqOxcQQwQFVvYXmWoN69G11kgfC6QaASiAhdZ9lhETHxyL2ryooGDVMqQPn+b/I/5VcgwX/i17MEP81etIDJCYqEQNkCyxKaY2twPXT/Oh0+StmAhrngJ5BEJikUOLW9s79kCUJIhooK01rnODEwu9O0Y2CCbhi8n9bsrR5N2OkczyTBsANMAhPLkzC8NMZrp2tPoMvKbOsMqdvxMDi0UlCG6XaQKbPQEuUizqIQdaqclUxAfdsS6LrZI6MPFsDn8EJ3/ddQvq0MVKCp/1lVuygvKM3OsZW4z5nnBNtFYSKYIbaaop3sWz3Hx/F0QpwIfQERm6Tv1XPwceUREXC/CN8FuqC14jDPfVnXAUWaQ3kAqosq2QJd12cEXRHYH7q9Mg1Hxzuyt8f6xQCwA8F/2PcNt48rb/7eKhOZFUE7v0fyvdtfIivatYKCgiAd7driKiDNshnCLXtW3lmNQOPwR9B541sZeTC/CfzCbD/eDQlB58eLriNwKnjGgqwu3ht0A56ZiE/C8YnP1dWCrX0PWSGz50Du9wTE/pJ6eM7pg+DiCAQXRkFZPXDwvLK0B5U/mW9HO6ZpGsytzYMOFCmx2U9ERgXXxu5NyCtLf296Sz6p/gB8eEARL4za823KBAjeRFG/snxNUjZYNyi2xKMUx5FUlvBNui7jzi+GT6s/hLbnW0gglk6nW1wuVzhLgKWBfq6iVvu218OBkpfFLncN/LowIgYjl/mK5wcml9H2I8rC6brjUOeqYXCspxA8pKziLMLc5Ycmqa+CK78I1OEjq+YwqEOLfyD5NbivJ0FpfKAkALueqWUC4NwRYVvzUK7bBE52I1BHzlwYAz6Ip5lamvcLsU74yGacp/ihbI/D4ejGcWxjXARmUD8tYFB+Q6GBjUJra2sN5EKMU4D+EbCJ6IGfwTqAr1YQnlAeAh97mrEYKy2AAAAAAElFTkSuQmCC",at=[{id:O(),name:"Facebook",url:"https://www.facebook.com/",icon:it},{id:O(),name:"Telegram",url:"https://www.telegram.com/",icon:st},{id:O(),name:"Whatsapp",url:"https://www.whatsapp.com/",icon:lt}];var ct=Object.defineProperty,x=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,z=(h,i,a)=>i in h?ct(h,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[i]=a,U=(h,i)=>{for(var a in i||(i={}))_.call(i,a)&&z(h,a,i[a]);if(x)for(var a of x(i))H.call(i,a)&&z(h,a,i[a]);return h},F=(h,i)=>{var a={};for(var s in h)_.call(h,s)&&i.indexOf(s)<0&&(a[s]=h[s]);if(h!=null&&x)for(var s of x(h))i.indexOf(s)<0&&H.call(h,s)&&(a[s]=h[s]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var P;(h=>{const i=class{constructor(t,e,n,r){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<i.MIN_VERSION||t>i.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(n);if(this.drawCodewords(c),r==-1){let l=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const f=this.getPenaltyScore();f<l&&(r=g,l=f),this.applyMask(g)}}u(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(t,e){const n=h.QrSegment.makeSegments(t);return i.encodeSegments(n,e)}static encodeBinary(t,e){const n=h.QrSegment.makeBytes(t);return i.encodeSegments([n],e)}static encodeSegments(t,e,n=1,r=40,o=-1,c=!0){if(!(i.MIN_VERSION<=n&&n<=r&&r<=i.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,g;for(l=n;;l++){const A=i.getNumDataCodewords(l,e)*8,C=E.getTotalBits(t,l);if(C<=A){g=C;break}if(l>=r)throw new RangeError("Data too long")}for(const A of[i.Ecc.MEDIUM,i.Ecc.QUARTILE,i.Ecc.HIGH])c&&g<=i.getNumDataCodewords(l,A)*8&&(e=A);let f=[];for(const A of t){s(A.mode.modeBits,4,f),s(A.numChars,A.mode.numCharCountBits(l),f);for(const C of A.getData())f.push(C)}u(f.length==g);const R=i.getNumDataCodewords(l,e)*8;u(f.length<=R),s(0,Math.min(4,R-f.length),f),s(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let A=236;f.length<R;A^=253)s(A,8,f);let p=[];for(;p.length*8<f.length;)p.push(0);return f.forEach((A,C)=>p[C>>>3]|=A<<7-(C&7)),new i(l,e,p,o)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let r=0;r<e;r++)n==0&&r==0||n==0&&r==e-1||n==e-1&&r==0||this.drawAlignmentPattern(t[n],t[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let o=0;o<10;o++)n=n<<1^(n>>>9)*1335;const r=(e<<10|n)^21522;u(r>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,m(r,o));this.setFunctionModule(8,7,m(r,6)),this.setFunctionModule(8,8,m(r,7)),this.setFunctionModule(7,8,m(r,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,m(r,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,m(r,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,m(r,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;u(e>>>18==0);for(let n=0;n<18;n++){const r=m(e,n),o=this.size-11+n%3,c=Math.floor(n/3);this.setFunctionModule(o,c,r),this.setFunctionModule(c,o,r)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),c=t+r,l=e+n;0<=c&&c<this.size&&0<=l&&l<this.size&&this.setFunctionModule(c,l,o!=2&&o!=4)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(t+r,e+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,n=this.errorCorrectionLevel;if(t.length!=i.getNumDataCodewords(e,n))throw new RangeError("Invalid argument");const r=i.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e],o=i.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e],c=Math.floor(i.getNumRawDataModules(e)/8),l=r-c%r,g=Math.floor(c/r);let f=[];const R=i.reedSolomonComputeDivisor(o);for(let A=0,C=0;A<r;A++){let w=t.slice(C,C+g-o+(A<l?0:1));C+=w.length;const N=i.reedSolomonComputeRemainder(w,R);A<l&&w.push(0),f.push(w.concat(N))}let p=[];for(let A=0;A<f[0].length;A++)f.forEach((C,w)=>{(A!=g-o||w>=l)&&p.push(C[A])});return u(p.length==c),p}drawCodewords(t){if(t.length!=Math.floor(i.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let r=0;r<this.size;r++)for(let o=0;o<2;o++){const c=n-o,g=(n+1&2)==0?this.size-1-r:r;!this.isFunction[g][c]&&e<t.length*8&&(this.modules[g][c]=m(t[e>>>3],7-(e&7)),e++)}}u(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let r;switch(t){case 0:r=(n+e)%2==0;break;case 1:r=e%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+e)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:r=n*e%2+n*e%3==0;break;case 6:r=(n*e%2+n*e%3)%2==0;break;case 7:r=((n+e)%2+n*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][n]&&r&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[o][f]==c?(l++,l==5?t+=i.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,g),c||(t+=this.finderPenaltyCountPatterns(g)*i.PENALTY_N3),c=this.modules[o][f],l=1);t+=this.finderPenaltyTerminateAndCount(c,l,g)*i.PENALTY_N3}for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][o]==c?(l++,l==5?t+=i.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,g),c||(t+=this.finderPenaltyCountPatterns(g)*i.PENALTY_N3),c=this.modules[f][o],l=1);t+=this.finderPenaltyTerminateAndCount(c,l,g)*i.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let c=0;c<this.size-1;c++){const l=this.modules[o][c];l==this.modules[o][c+1]&&l==this.modules[o+1][c]&&l==this.modules[o+1][c+1]&&(t+=i.PENALTY_N2)}let e=0;for(const o of this.modules)e=o.reduce((c,l)=>c+(l?1:0),e);const n=this.size*this.size,r=Math.ceil(Math.abs(e*20-n*10)/n)-1;return u(0<=r&&r<=9),t+=r*i.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let n=[6];for(let r=this.size-7;n.length<t;r-=e)n.splice(1,0,r);return n}}static getNumRawDataModules(t){if(t<i.MIN_VERSION||t>i.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const n=Math.floor(t/7)+2;e-=(25*n-10)*n-55,t>=7&&(e-=36)}return u(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(i.getNumRawDataModules(t)/8)-i.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*i.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let r=0;r<t-1;r++)e.push(0);e.push(1);let n=1;for(let r=0;r<t;r++){for(let o=0;o<e.length;o++)e[o]=i.reedSolomonMultiply(e[o],n),o+1<e.length&&(e[o]^=e[o+1]);n=i.reedSolomonMultiply(n,2)}return e}static reedSolomonComputeRemainder(t,e){let n=e.map(r=>0);for(const r of t){const o=r^n.shift();n.push(0),e.forEach((c,l)=>n[l]^=i.reedSolomonMultiply(c,o))}return n}static reedSolomonMultiply(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(e>>>r&1)*t;return u(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];u(e<=this.size*3);const n=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(n&&t[0]>=e*4&&t[6]>=e?1:0)+(n&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let a=i;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=a;function s(t,e,n){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let r=e-1;r>=0;r--)n.push(t>>>r&1)}function m(t,e){return(t>>>e&1)!=0}function u(t){if(!t)throw new Error("Assertion error")}const d=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)s(n,8,e);return new d(d.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!d.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let n=0;n<t.length;){const r=Math.min(t.length-n,3);s(parseInt(t.substr(n,r),10),r*3+1,e),n+=r}return new d(d.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!d.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],n;for(n=0;n+2<=t.length;n+=2){let r=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n))*45;r+=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),s(r,11,e)}return n<t.length&&s(d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,e),new d(d.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:d.isNumeric(t)?[d.makeNumeric(t)]:d.isAlphanumeric(t)?[d.makeAlphanumeric(t)]:[d.makeBytes(d.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<1<<7)s(t,8,e);else if(t<1<<14)s(2,2,e),s(t,14,e);else if(t<1e6)s(6,3,e),s(t,21,e);else throw new RangeError("ECI assignment value out of range");return new d(d.Mode.ECI,0,e)}static isNumeric(t){return d.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return d.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const r of t){const o=r.mode.numCharCountBits(e);if(r.numChars>=1<<o)return 1/0;n+=4+o+r.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)t.charAt(n)!="%"?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let E=d;E.NUMERIC_REGEX=/^[0-9]*$/,E.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,E.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=E})(P||(P={}));(h=>{(i=>{const a=class{constructor(m,u){this.ordinal=m,this.formatBits=u}};let s=a;s.LOW=new a(0,1),s.MEDIUM=new a(1,0),s.QUARTILE=new a(2,3),s.HIGH=new a(3,2),i.Ecc=s})(h.QrCode||(h.QrCode={}))})(P||(P={}));(h=>{(i=>{const a=class{constructor(m,u){this.modeBits=m,this.numBitsCharCount=u}numCharCountBits(m){return this.numBitsCharCount[Math.floor((m+7)/17)]}};let s=a;s.NUMERIC=new a(1,[10,12,14]),s.ALPHANUMERIC=new a(2,[9,11,13]),s.BYTE=new a(4,[8,16,16]),s.KANJI=new a(8,[8,10,12]),s.ECI=new a(7,[0,0,0]),i.Mode=s})(h.QrSegment||(h.QrSegment={}))})(P||(P={}));var B=P;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Z={L:B.QrCode.Ecc.LOW,M:B.QrCode.Ecc.MEDIUM,Q:B.QrCode.Ecc.QUARTILE,H:B.QrCode.Ecc.HIGH},K=128,j="L",X="#FFFFFF",k="#000000",W=!1,L=4,ht=.1;function V(h,i=0){const a=[];return h.forEach(function(s,m){let u=null;s.forEach(function(d,E){if(!d&&u!==null){a.push(`M${u+i} ${m+i}h${E-u}v1H${u+i}z`),u=null;return}if(E===s.length-1){if(!d)return;u===null?a.push(`M${E+i},${m+i} h1v1H${E+i}z`):a.push(`M${u+i},${m+i} h${E+1-u}v1H${u+i}z`);return}d&&u===null&&(u=E)})}),a.join("")}function J(h,i){return h.slice().map((a,s)=>s<i.y||s>=i.y+i.h?a:a.map((m,u)=>u<i.x||u>=i.x+i.w?m:!1))}function G(h,i,a,s){if(s==null)return null;const m=a?L:0,u=h.length+m*2,d=Math.floor(i*ht),E=u/i,t=(s.width||d)*E,e=(s.height||d)*E,n=s.x==null?h.length/2-t/2:s.x*E,r=s.y==null?h.length/2-e/2:s.y*E;let o=null;if(s.excavate){let c=Math.floor(n),l=Math.floor(r),g=Math.ceil(t+n-c),f=Math.ceil(e+r-l);o={x:c,y:l,w:g,h:f}}return{x:n,y:r,h:e,w:t,excavation:o}}var ut=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ft(h){const i=h,{value:a,size:s=K,level:m=j,bgColor:u=X,fgColor:d=k,includeMargin:E=W,style:t,imageSettings:e}=i,n=F(i,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),r=e==null?void 0:e.src,o=b.useRef(null),c=b.useRef(null),[l,g]=b.useState(!1);b.useEffect(()=>{if(o.current!=null){const p=o.current,A=p.getContext("2d");if(!A)return;let C=B.QrCode.encodeText(a,Z[m]).getModules();const w=E?L:0,N=C.length+w*2,v=G(C,s,E,e),S=c.current,D=v!=null&&S!==null&&S.complete&&S.naturalHeight!==0&&S.naturalWidth!==0;D&&v.excavation!=null&&(C=J(C,v.excavation));const Q=window.devicePixelRatio||1;p.height=p.width=s*Q;const Y=s/N*Q;A.scale(Y,Y),A.fillStyle=u,A.fillRect(0,0,N,N),A.fillStyle=d,ut?A.fill(new Path2D(V(C,w))):C.forEach(function(q,$){q.forEach(function(tt,et){tt&&A.fillRect(et+w,$+w,1,1)})}),D&&A.drawImage(S,v.x+w,v.y+w,v.w,v.h)}}),b.useEffect(()=>{g(!1)},[r]);const f=U({height:s,width:s},t);let R=null;return r!=null&&(R=M.createElement("img",{src:r,key:r,style:{display:"none"},onLoad:()=>{g(!0)},ref:c})),M.createElement(M.Fragment,null,M.createElement("canvas",U({style:f,height:s,width:s,ref:o},n)),R)}function dt(h){const i=h,{value:a,size:s=K,level:m=j,bgColor:u=X,fgColor:d=k,includeMargin:E=W,imageSettings:t}=i,e=F(i,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=B.QrCode.encodeText(a,Z[m]).getModules();const r=E?L:0,o=n.length+r*2,c=G(n,s,E,t);let l=null;t!=null&&c!=null&&(c.excavation!=null&&(n=J(n,c.excavation)),l=M.createElement("image",{xlinkHref:t.src,height:c.h,width:c.w,x:c.x+r,y:c.y+r,preserveAspectRatio:"none"}));const g=V(n,r);return M.createElement("svg",U({height:s,width:s,viewBox:`0 0 ${o} ${o}`},e),M.createElement("path",{fill:u,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),M.createElement("path",{fill:d,d:g,shapeRendering:"crispEdges"}),l)}var At=h=>{const i=h,{renderAs:a}=i,s=F(i,["renderAs"]);return a==="svg"?M.createElement(dt,U({},s)):M.createElement(ft,U({},s))};const mt=()=>I.jsxs(nt,{children:[I.jsx("h2",{children:"ContactUs"}),I.jsx(rt,{children:at.map(h=>I.jsxs(ot,{children:[I.jsx(At,{value:h.url,bgColor:"#ffffff",fgColor:"#000000"}),I.jsxs("div",{children:[I.jsx("img",{src:h.icon,alt:h.name}),I.jsx("p",{children:h.name})]})]},h.id))})]});export{mt as default};