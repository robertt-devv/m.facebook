/*
*
*	author: roberto.deev@gmail.com © 2021 
*
*/

var _app_interaction = ()=>{
	var shwMS_ct =  false; var shwPS_ct =  false;
    var shwMR_ct =  false;
	
    var print = (msg)=> document.write(msg);

	var getOS = ()=>{
		/* get and filter system operation, for show in top head */
		var _os1 = window.navigator.userAgent.toUpperCase();
		var _os2 = 'o seu dispositivo';

		if (_os1.indexOf('ANDROID') != -1 ) {_os2 = 'Android'}
		if (_os1.indexOf('IPHONE' ) != -1 ) {_os2 = 'Iphone' }
		document.write(_os2 + '');
	};

	var shwMS = ()=>{
		var _win1 = document.getElementById('head-msg2');
		var _win2 = document.getElementById('head-msg1');
		var _win3 = document.getElementById('head-msg3');
        var _icon = document.getElementById('_name-ico');

		if (shwMS_ct === false ){
			_win2.style.display = 'none';
			_win3.style.display = 'none';
			_win1.style.display = 'block';
			_icon.src = '_files.ico/info_02.svg';
			shwMS_ct = true;
		}else{
			_win2.style.display = 'block';
			_win1.style.display = 'none';
			_icon.src = '_files.ico/info_01.svg';
			shwMS_ct = false;
		}
	};

	var shwPW = ()=>{
		 var _win1 = document.getElementById('_user-pass');
		 var _win2 = document.getElementById('_pass-ico');

		 if (shwPS_ct === false ){
		 	_win1.focus();
		 	_win1.type = 'text';
		 	_win2.innerText = 'OCULTAR';
		 	shwPS_ct = true;
		 }else{
		 	_win1.focus();
		 	_win2.innerText = 'MOSTRAR';
		 	_win1.type = 'password';
		 	shwPS_ct = false;
		 }
	};

	var shwMR = ()=>{
		var _win1 = document.getElementById('more-extended');
		var _win2 = document.getElementById('more');
		if (shwMR_ct === false){
			_win2.style.color = '#cecece';
			_win1.style.display = 'block';
			shwMR_ct = true;
		}else{
			_win2.style.color = '#94989f';
			_win1.style.display = 'none';			
			shwMR_ct = false;
		}
	};

	var shwIC_ps = ()=>{
		var _win1 = document.getElementById('_user-pass');
		var _win2 = document.getElementById('_pass-ico');
		var _win3 = document.getElementById('user-pass');

		_win1.addEventListener('keyup',()=>{
			if (_win1.value.length > 2 ){
				_win1.style.width = '76%';
				_win2.style.visibility = 'visible';
			}else{
				_win1.style.width = '';
				_win2.style.visibility = 'hidden';
			}
		});
	};

	var chkDT = (_opt)=>{
		var _text1 = "<h3 id='-head-msg3-text'> O email ou número de telefone inserido não correspode a nenhuma conta. <a>Cadastre-se para abrir uma conta.</a></h3>";
		var _text2 = "<h3 id='-head-msg3-text'> Senha incorreta. <a>Você esqueceu sua senha?</a></h3>";

		var _win0 = document.getElementById('_user-name');
		var _win4 = document.getElementById('_user-pass');

		var _win1 = document.getElementById('head-msg1').style.display = 'none';
		var _win2 = document.getElementById('head-msg2').style.display = 'none';
		var _win3 = document.getElementById('head-msg3');

		if (_opt === 1){
			_win0.focus();
			_win0.style.borderColor = 'red';	
			_win4.style.borderColor = '';
			_win3.style.display = 'block';
			_win3.innerHTML = _text1;
		}

		if (_opt === 2){
			_win4.focus();
			_win4.style.borderColor = 'red';	
			_win0.style.borderColor = '';
			_win3.style.display = 'block';
			_win3.innerHTML = _text2;
		}
	
	};

	return { print, getOS, shwMS, shwPW, 
			 shwMR, shwIC_ps, chkDT}
};























