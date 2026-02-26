// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Llamar a la función de validación
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
            // Opcional: limpiar el formulario después de enviar
            // form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});

/**
 * Función principal de validación del formulario
 * Retorna true si todos los campos son válidos, false si hay errores
 */
function validateForm() {
    let isValid = true;
    eliminarError();
    // ==========================================
    // VALIDACIÓN DE EJEMPLO: Campo Nombre
    // ==========================================
    const nombre = document.getElementById('nombre');
    let error = 'El nombre esta mal >:(';
    if (!validarCampoTexto(nombre, 3, error)) {
        isValid = false
        
    }
    
    // ==========================================
    // TODO: Validar Apellido Paterno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    // Pista: Usa getElementById('apellidoPaterno')
    const apellidoPaterno = document.getElementById('apellidoPaterno');
    error = 'El apellido de tu papá esta mal >:(';
    if (!validarCampoTexto(apellidoPaterno, 2,error)) {
        isValid = false
    }
    
    // ==========================================
    // TODO: Validar Apellido Materno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    const apellidoMaterno = document.getElementById('apellidoMaterno');
    error = 'El apellido de tu mamá esta mal >:(';
    if (!validarCampoTexto(apellidoMaterno, 2, error)) {
        isValid = false
    }
    
    // ==========================================
    // TODO: Validar Cédula
    // ==========================================
    // Requisitos: Exactamente 10 dígitos numéricos
    // Pista: Usa /^\d{10}$/.test(valor) para validar
    const cedula = document.getElementById('cedula');
    const valorCedula = cedula.value.trim();
    const regex = /^\d{10}$/;
    // Tu código aquí...
    if ( !regex.test(valorCedula) ){
        cedula.classList.add('no-valid');
        isValid = false;
    }else{
        cedula.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Motivo
    // ==========================================
    // Requisitos: No vacío, mínimo 10 caracteres
    const motivo = document.getElementById('motivo');
    error = 'Mínimo 10 caracteres (Mucho texto) ._.'
    if (!validarCampoTexto(motivo, 10, error)) {
        isValid = false
    }
    // ==========================================
    // TODO: Validar Tipo de Cuenta
    // ==========================================
    // Requisitos: Debe tener un valor seleccionado (no vacío)
    // Pista: Verifica que select.value !== ''
    const cuenta = document.getElementById('tipoCuenta');
    error = 'No se seleccionado cuenta :v';
    if (!validarCampoTexto(cuenta, 0, error)) {
        isValid = false
    }
    
    // ==========================================
    // TODO: Validar Calle
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    const calle = document.getElementById('calle');
    error = 'Falta calle, mínimo 3 caracteres >:(';
    if (!validarCampoTexto(calle, 3, error)) {
        isValid = false
    }
    
    // ==========================================
    // TODO: Validar Número
    // ==========================================
    // Requisitos: No vacío
    const numero = document.getElementById('numero');
    error = 'El numero no va vacío >:(';
    if (!validarCampoTexto(numero, 0,error)) {
        isValid = false
    }
    
    // ==========================================
    // TODO: Validar Intersección
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    const intersecc = document.getElementById('interseccion');
    error = 'Falta la interseccion, mínimo 3 caracteres >:(';
    if (!validarCampoTexto(intersecc, 3,error)) {
        isValid = false
    }
    
    // Retornar el resultado final de la validación
    return isValid;
}


// ==========================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ==========================================
// Puedes crear funciones auxiliares para evitar repetir código
// Por ejemplo:

/**
 * Valida un campo de texto
 * @param {HTMLElement} campo - El elemento input a validar
 * @param {number} minLength - Longitud mínima requerida
 * @returns {boolean} - true si es válido, false si no
 */
function validarCampoTexto(campo, minLength, mensaje) {
    const valor = campo.value.trim();
    const errorDiv = document.createElement('div');
    
    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        errorDiv.className = 'error-message';
        errorDiv.textContent = mensaje;
        campo.parentNode.insertBefore(errorDiv, campo.nextSibling);
        return false;
    } else {
        campo.classList.remove('no-valid');
        errorDiv.remove();
        return true;
    }

}

function eliminarError(){
    const errorAnt = document.querySelectorAll('.error-message');
    errorAnt.forEach(error =>{
        error.remove();
        });
}
// Ejemplo de uso de la función auxiliar:
// if (!validarCampoTexto(nombre, 2)) {
//     isValid = false;
// }
