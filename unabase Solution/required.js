function myLoginListener(userName, password) {
	var p = ds.Usuario({username:userName}); // B�squeda por username en la tabla Usuario
    if (p == null) // si el usuario no existe en la tabla
        return false; // dejar que Wakanda lo busque en su directorio interno
        
    if (p.password == password) // Esto es para simplificar las cosas
                // hay que poner algo m�s seguro, como un hash
    {
        var theGroups = [];
        theGroups = ['Employee']; // Asignamos el grupo "empleado" a nivel de privilegios de sistema.
        var connectTime = new Date(); // Fecha-Hora de conexi�n
        return { 
            ID: p.UUID, 
            name: p.username,
            fullName: p.username,
            //name: p.contacto.nombres, 
            //fullName: p.contacto.nombres + " " + p.contacto.apPat + " " + p.contacto.apMat, 
            belongsTo: theGroups,
            storage:{
                time: connectTime,
                access: "Acceso desde la tabla Usuario"
            }
        };
    }
    else
        return { error: 1024, errorMessage:"Nombre de usuario y/o contrase�a no v�lidos. Por favor, reintente." }

};
