function(i){"use strcit";var i=i||window,d,l,m=function(a,c){if(!a.className)return!1;for(var g=a.className.split(" "),f=[],j=0,d=g.length;j<d;++j)g[j]!=c&&f.push(g[j]);a.className=f.join(" ")};if(!window.FileReader||!document.addEventListener)throw"File API not supported";d=new FileReader;l=function(a,c,g){d.onerror=function(a){throw["File not found.","File coulnot be opened","File couldnot be uploaded","Couldnot read File","File too large"][a.target.error.code-1];};d.onloadend=function(f){c&&c(f.target.result,
a.name);d.onloadend=null};d[g](a);return!1};i.dragNDrop=function(a,c,g,f,d){if("ontouchstart"in window)return"mobile";var i={text:"readAsText",binary:"readAsBinaryText",arrayBuffer:"readAsArrayBuffer"},k=d?d:"__fadingIn",f=f?i[f]:"readAsText",h=0,b=c?c:a,e={silencer:function(b){b.preventDefault();b.stopPropagation()},onDragEnter:function(){b.className+=" "+k;++h;setTimeout(function(){1<h&&(h=1)},10)},onDragLeave:function(){--h;0>=h&&(m(b,k),h=0)},onDrop:function(a){e.silencer(a);m(b,k);h=0;var a=
a.dataTransfer.files,c;if(!a||!a.length)return!1;for(c=a.length;c--;)l(a[c],g,f)}};this.destroy=function(){a.removeEventListener("dragenter",e.onDragEnter,!1);b.removeEventListener("dragleave",e.onDragLeave,!1);b.removeEventListener("dragover",e.silencer,!1);b.removeEventListener("drop",e.onDrop,!1);"string"===typeof c&&a.removeChild(b);a=b=c=e=g=null;return!1};(function(){if("string"===typeof c){var d=document.createElement("div");b=document.createElement("div");b.id=c;d.innerHTML="Drag n drop Files!";
b.appendChild(d);a.appendChild(b)}})();a.addEventListener("dragenter",e.onDragEnter,!1);b.addEventListener("dragleave",e.onDragLeave,!1);b.addEventListener("dragover",e.silencer,!1);b.addEventListener("drop",e.onDrop,!1)}})(window);