  var jmh_post=150;
    function reltd_post(t){document.write('<ul class="rel-container">');for(var e=0;e<jmh_post;e++){var i,n,r=t.feed.entry[e],o=r.author[0].name.$t,l=r.title.$t;if(e==t.feed.entry.length)break;for(var m=0;m<r.link.length;m++){if("replies"==r.link[m].rel&&"text/html"==r.link[m].type)var A=r.link[m].title,p=r.link[m].href;if("alternate"==r.link[m].rel){i=r.link[m].href;break}}try{n=r.media$thumbnail.url.replace(/\/s[0-9]+(-c)?/,"/s320-rw")}catch(t){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),n=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://2.bp.blogspot.com/-C3Mo0iKKiSw/VGdK808U7rI/AAAAAAAAAmI/W7Ae_dsEVAE/s1600/no-thumb.png"}var u=r.published.$t,g=u.substring(0,4),f=u.substring(5,7),w=u.substring(8,10),h=new Date(u).toISOString(),v=new Array;if(v[1]="Jan",v[2]="Feb",v[3]="Mar",v[4]="Apr",v[5]="May",v[6]="Jun",v[7]="Jul",v[8]="Aug",v[9]="Sep",v[10]="Oct",v[11]="Nov",v[12]="Dec",document.write('<li class="rel-posts-list">'),1==img_post&&document.write('<div class="rel-img"><a href="'+i+'"><img alt="'+l+'" class="rel-post-img" src="'+n+'"/></a></div>'),document.write('<div class="rel-post-title"><a href="'+i+'" target ="_top">'+l+"</a></div>"),"content"in r)var _=r.content.$t;else _="summary"in r?r.summary.$t:"";if(document.write('<div class="rel-summary">'),_=_.replace(/<\S[^>]*>/g,""),1==isi_posting)if(_.length<isi_post)document.write(_);else{var k=(_=_.substring(0,isi_post)).lastIndexOf(" ");_=_.substring(0,k),document.write(_+"...")}var y="",C=0;document.write("</div>"),document.write('<span class="pstby">Posted By: '+o+"</span>"),document.write("<span>Released on: </span>"),document.write('<div class="rel-posts-inf" datetime="'+h+'">'),1==kpn_post&&(y=y+v[parseInt(f,10)]+" "+w+", "+g,C=1),1==comment_post&&(1==C&&(y+=" <br> "),"1 Comments"==A&&(A="1 Comment"),"0 Comments"==A&&(A="No Comments"),y+=A='<a href="'+p+'">'+A+"</a>",C=1),document.write(y),document.write("</div>"),document.write("</li>")}document.write("</ul>")}img_post=!0,comment_post=!1,kpn_post=!0,isi_posting=!0,isi_post=70;
