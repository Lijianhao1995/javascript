function getElements(/*id1,id2,id3...*/){
	var elements={};
	for(var i=0;i<arguments.length;i++){
		var id=arguments[i];
		var elt=document.getElementById(id);
		if(elt==null) throw new error("no such element");
		elements[id]=elt;
	}
	return elements;
}
