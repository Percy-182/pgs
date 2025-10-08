<?php
if ($_POST) {
    $nombre = htmlspecialchars($_POST['nombre']);
    $empresa = htmlspecialchars($_POST['empresa']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $servicio = htmlspecialchars($_POST['servicio']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    $para = "computing@pgselectric.cl";
    $asunto = "Nuevo contacto de: $nombre - PGS Electric";
    
    $cuerpo = "NUEVA SOLICITUD DE CONTACTO:\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Empresa: $empresa\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Servicio de interés: $servicio\n";
    $cuerpo .= "Mensaje:\n$mensaje\n\n";
    $cuerpo .= "Enviado el: " . date('d/m/Y H:i:s');
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($para, $asunto, $cuerpo, $headers)) {
        echo "success"; // Esto activa el mensaje de éxito en JavaScript
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>