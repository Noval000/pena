    <?php
    if(isset($_POST['name'])){
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    // Convert JSON string to Array
    $extradata = json_decode($_POST['extradata'], true);
   // print_r($someArray);        // Dump all data of the Array
   // Loop through Array if necessary
  	$someArray;
  foreach ($extradata as $key => $value) {
    $someArray .= "<p>".$value["image"] . ", " . $value["name"] . "</p>";
  }

    $to = "mail@mail.ru";
        $message = '
                <html>
                    <head> 
                    </head>
                    <body>
                       <p>Name: '.$_POST['first name'].'</p>
                       <p>Phone: '.$_POST['phone number'].'</p>'.$someArray.'
                      </body>
                </html>';
    $subject = "Wooo Email!";
    if (mail($to, $subject, $message, "From: system@yourdomain.com\r\n", $headers)){
    	echo "Ваше сообщение успешно отправлено, в ближайшее время мы свяжемся с вами";
	} else { "При отправке сообщения возникли ошибки, повторите попытку"; //отправляет получателю на емайл значения переменных
}?>

