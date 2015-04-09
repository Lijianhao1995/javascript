function loadsync(url){
	var head=document.getElementsByTagName("head");
	var s=document.createElement("script");
	s.src=url;
	head.appendChild(s);
}
