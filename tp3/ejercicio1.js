let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
             
        document.writeln("<h1>","Lista De Meses","</h1>")

        document.writeln("<ul>")

             meses.forEach(mes => {
                document.writeln("<li>" ,mes, "</li>") 
             });
         document.writeln("</ul>")