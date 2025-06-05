function validarYEnviar() {
      const input = document.getElementById('telefono');
      const label = document.getElementById('label-telefono');
      const mensajeError = document.getElementById('mensaje-error');
      const numero = input.value.trim();
      const numeroLimpio = numero.replace(/\D/g, '');

      // Validación simple: mínimo 6 dígitos
      if (numeroLimpio.length < 6) {
        input.classList.add('input-error');
        label.classList.add('error');
        mensajeError.style.display = 'inline';
        return;
      }

      // Limpiar estilos si todo está bien
      input.classList.remove('input-error');
      label.classList.remove('error');
      mensajeError.style.display = 'none';

      // Obtener código desde el <select>
      const codigo = document.getElementById('codigo').value.replace("+", "");
      const numeroFinal = codigo + numeroLimpio;

      // Abrir WhatsApp
      const url = `https://wa.me/${numeroFinal}`;
      window.open(url, '_blank');
    }