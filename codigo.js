<style>
.hide-listing {
    visibility: hidden;
    height: 0;
}
</style>
<script>
jQuery(document).ready(function ($) {
    
    // Variable para rastrear si se presionó el botón
    var botonPresionado = false;

    // Variable para el botón
    var btnFiltro = $('#btn_filtro');

    // Variable para el elemento con la clase .hide-listing
    var hideListingElement = $(".hide-listing");

    function mostrarElementos() {
        // Ocultar elementos si el botón fue presionado
        if (botonPresionado) {
            hideListingElement.css("visibility", "hidden");
        } else {
            // Mostrar elementos si el botón no fue presionado
            hideListingElement.css("visibility", "visible");
        }
    }

    // Vincular el evento al cargar el documento
    $(document).on('jet-filter-content-rendered', function () {
        // Lógica condicional para decidir cuándo vincular mostrarElementos
        if (botonPresionado) {
            botonPresionado = false;
        } else {
            mostrarElementos();
        }
    });

    // Vincular el evento al hacer clic en el botón
    btnFiltro.on('click', function () {
        // Cambiar la variable para indicar que el botón ha sido presionado
        botonPresionado = true;
        // Cambiar la visibilidad
        mostrarElementos();
    });
});

</script>