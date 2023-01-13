/*!
* Documenter 2.0
* https://evp.to/documenter
*
* Copyright 2011, Xaver Birsak
* https://revaxarts.com
*
*/$(document).ready(function(){var timeout,sections=new Array(),sectionscount=0,win=$(window),sidebar=$('#documenter_sidebar'),nav=$('#documenter_nav'),logo=$('#documenter_logo'),navanchors=nav.find('a'),timeoffset=50,hash=location.hash||null;iDeviceNotOS4=(navigator.userAgent.match(/iphone|ipod|ipad/i)&&!navigator.userAgent.match(/OS 5/i))||false,badIE=$('html').prop('class').match(/ie(6|7|8)/)||false;$('a[href^=http]').bind('click',function(){window.open($(this).attr('href'));return false;});if(!badIE){window.scroll(0,0);$('a[href^=#]').bind('click touchstart',function(){hash=$(this).attr('href');$.scrollTo.window().queue([]).stop();goTo(hash);return false;});if(hash){setTimeout(function(){goTo(hash);},500);}}
win.bind('load',function(){var sectionselector='section';if(nav.find('ol').length){sectionselector='section, h4';}
$(sectionselector).each(function(i,e){var _this=$(this);var p={id:this.id,pos:_this.offset().top};sections.push(p);});if(iDeviceNotOS4){nav.find('a').bind('click',function(){setTimeout(function(){win.trigger('scroll');},duration);});window.scroll(0,0);}
sectionscount=sections.length;win.bind('scroll',function(event){clearInterval(timeout);timeout=setTimeout(function(){pos=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(iDeviceNotOS4){sidebar.css({height:document.height});logo.css({'margin-top':pos});}
activateNav(pos);},timeoffset);}).trigger('scroll');});function hashchange(){goTo(location.hash,false);}
function goTo(hash,changehash){win.unbind('hashchange',hashchange);hash=hash.replace(/!\//,'');win.stop().scrollTo(hash,duration,{easing:easing,axis:'y'});if(changehash!==false){var l=location;location.href=(l.protocol+'//'+l.host+l.pathname+'#'+hash.substr(1));}
win.bind('hashchange',hashchange);}
function activateNav(pos){var offset=100,current,next,parent,isSub,hasSub;win.unbind('hashchange',hashchange);for(var i=sectionscount;i>0;i--){if(sections[i-1].pos<=pos+offset){navanchors.removeClass('current');current=navanchors.eq(i-1);current.addClass('current');parent=current.parent().parent();next=current.next();hasSub=next.is('ul');isSub=!parent.is('#documenter_nav');nav.find('ol:visible').not(parent).slideUp('fast');if(isSub){parent.prev().addClass('current');parent.stop().slideDown('fast');}else if(hasSub){next.stop().slideDown('fast');}
win.bind('hashchange',hashchange);break;};}}
window.prettyPrint&&prettyPrint();});