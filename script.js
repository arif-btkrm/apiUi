	function add(){

	}
	function edit(){

	}
	function search(){
		var name = document.getElementById('sch').value;
		console.log(name);
		var url = "localhost:3001/product/"+name;
		var data = getJSON('url') ;

		console.log(data);
	}

	function delet (){

	}