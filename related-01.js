!function(t,e,a){var l=(new Date).getTime(),s={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"//closeart-id.blogspot.com",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:640,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:!1,moreText:"Read More",callBack:function(){}};if("object"==typeof relatedPostConfig)for(var i in relatedPostConfig)s[i]=relatedPostConfig[i];s.homePage=s.homePage.replace(/\/?\?m=\d+(\&|$)|\/+$/,"");var r=function(t){var l=e.createElement("script");l.src=t,a.appendChild(l)},n=function(t){var e,a,l=t.length;if(0===l)return!1;for(;--l;)e=Math.floor(Math.random()*(l+1)),a=t[l],t[l]=t[e],t[e]=a;return t},o="object"==typeof labelArray&&labelArray.length?"/-/"+n(labelArray)[0]:"";t["do_related_post_"+l]=function(t){var a,l,i,r,o,m=e.getElementById(s.containerId),c=n(t.feed.entry),d=s.widgetStyle,h=s.widgetTitle+'<ul class="related-post-style-'+d+'">',g=s.newTabLink?' target="_blank"':"",u='<span style="display:block;clear:both;"></span>';if(m){for(var p=c.length,A="related-post-item",f=0;f<s.numPosts&&f!==p;f++){l=c[f].title.$t,i="auto"!==s.titleLength&&s.titleLength<l.length?l.substring(0,s.titleLength)+"&hellip;":l,r="media$thumbnail"in c[f]&&!1!==s.thumbnailSize?c[f].media$thumbnail.url.replace(/\/s\d+(\-c)?\//,"/s640/"):s.noImage,o="summary"in c[f]&&s.summaryLength>0?c[f].summary.$t.replace(/<br *\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,s.summaryLength)+"&hellip;":"";for(var b=0,y=c[f].link.length;y>b;b++)if("alternate"==c[f].link[b].rel){a=c[f].link[b].href;break}h+=2==d?'<li><img alt="" class="'+A+'-thumbnail" src="'+r+'" width="640" height="360"><a class="'+A+'-title" title="'+l+'" href="'+a+'"'+g+">"+i+'</a><span class="'+A+'-summary"><span class="'+A+'-summary-text">'+o+'</span> <a href="'+a+'" class="'+A+'-more"'+g+">"+s.moreText+"</a></span>"+u+"</li>":3==d||4==d?'<li class="'+A+'" tabindex="0"><a class="'+A+'-title" href="'+a+'"'+g+'><img alt="" class="'+A+'-thumbnail" src="'+r+'" width="640" height="360"></a><div class="'+A+'-tooltip"><a class="'+A+'-title" title="'+l+'" href="'+a+'"'+g+">"+i+"</a></div>"+u+"</li>":5==d?'<li class="'+A+'" tabindex="0"><a class="'+A+'-wrapper" href="'+a+'" title="'+l+'"'+g+'><img alt="" class="'+A+'-thumbnail" src="'+r+'" width="640" height="360"><span class="'+A+'-tooltip">'+i+"</span></a>"+u+"</li>":6==d?'<li><a class="'+A+'-title" title="'+l+'" href="'+a+'"'+g+">"+i+'</a><div class="'+A+'-tooltip"><img alt="" class="'+A+'-thumbnail" src="'+r+'" width="640" height="360"><span class="'+A+'-summary"><span class="'+A+'-summary-text">'+o+"</span></span>"+u+"</div></li>":'<li><a title="'+l+'" href="'+a+'"'+g+">"+i+"</a></li>"}m.innerHTML=h+="</ul>"+u,s.callBack(t)}},t["do_related_post_start_"+l]=function(t){var e=t.feed.openSearch$totalResults.$t-s.numPosts,a=function(t,e){return Math.floor(Math.random()*(e-t+1))+t}(1,e>0?e:1);r(s.homePage+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+s.numPosts+"&callback=do_related_post_"+l)},r(s.homePage+"/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=0&callback=do_related_post_start_"+l)}(window,document,document.getElementsByTagName("head")[0]);
