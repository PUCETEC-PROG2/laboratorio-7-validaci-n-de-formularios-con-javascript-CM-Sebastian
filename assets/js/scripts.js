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
    
    // ==========================================
    // VALIDACIÓN DE EJEMPLO: Campo Nombre
    // ==========================================
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    
    if (valorNombre === '') {
        // Campo vacío - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else if (valorNombre.length < 2) {
        // Muy corto - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        nombre.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Apellido Paterno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    // Pista: Usa getElementById('apellidoPaterno')
    const apellidoPaterno = document.getElementById('apellidoPaterno');
    const valorApellPat = apellidoPaterno.value.trim();
    // Tu código aquí...
    if (valorApellPat === '') {
        // Campo vacío - marcar como inválido
        apellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellPat.length < 2) {
        // Muy corto - marcar como inválido
        apellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        apellidoPaterno.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Apellido Materno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    const apellidoMaterno = document.getElementById('apellidoMaterno');
    const valorApellMat = apellidoMaterno.value.trim();
    // Tu código aquí...
    if (valorApellMat === '') {
        // Campo vacío - marcar como inválido
        apellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellMat.length < 2) {
        // Muy corto - marcar como inválido
        apellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        apellidoMaterno.classList.remove('no-valid');
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
    const valorMotivo = motivo.value.trim();
    // Tu código aquí...
    if (valorMotivo === '') {
        // Campo vacío - marcar como inválido
        motivo.classList.add('no-valid');
        isValid = false;
    } else if (valorMotivo.length < 10) {
        // Muy corto - marcar como inválido
        motivo.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        motivo.classList.remove('no-valid');
    }
     
    // ==========================================
    // TODO: Validar Tipo de Cuenta
    // ==========================================
    // Requisitos: Debe tener un valor seleccionado (no vacío)
    // Pista: Verifica que select.value !== ''
    const cuenta = document.getElementById('tipoCuenta');
    // Tu código aquí...
    //FALTA ALGO
    if (cuenta.value === '') {
        // Campo vacío - marcar como inválido
        cuenta.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        motivo.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Calle
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    // Tu código aquí...
    
    
    // ==========================================
    // TODO: Validar Número
    // ==========================================
    // Requisitos: No vacío
    
    // Tu código aquí...
    
    
    // ==========================================
    // TODO: Validar Intersección
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    // Tu código aquí...
    
    
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
function validarCampoTexto(campo, minLength) {
    const valor = campo.value.trim();
    
    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        return false;
    } else {
        campo.classList.remove('no-valid');
        return true;
    }
}

// Ejemplo de uso de la función auxiliar:
// if (!validarCampoTexto(nombre, 2)) {
//     isValid = false;
// }
