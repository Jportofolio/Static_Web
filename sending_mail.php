<?php
	 if (isset($_POST['envoi'])){
	   $n=$_POST['names'];
	   $sub =$_POST['subject'];
	   $cour=$_POST['email'];
	   $mes=$_POST['message'];
	    if (empty($n) && empty($cour) && empty($mes)&& empty($sub))
		   {
		   echo "Fill out The Form Please....";
		   }
		if (!preg_match("/^([a-zA-Z0-9])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+/", $cour))
		   {
		    echo "Type your E_mail Correctly ! Thank you ! ";
		   }
		   //introducin the SMTP
		   $headers="From:".$cour."<BR/>"."================================";
		   $to="kx.joshua@yahoo.fr";
		   $sub="Contact from"."_".$sub;
		   //defining the SMTP
		   ini_set("SMTP","quorra.aserv.co.za");
		   //sending the Mail
		   $snd=mail($to,$sub,$mes,$headers);
		   if ($snd==true)
		   {
            echo "Thank you"." ".$n." "."Your Message has been succesfully sent !";
		    }
			else { echo "Message Failed "; }
	}
?>
