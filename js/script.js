
function renderizarFilmesHTML(producto){

producto.forEach(producto => {
    const {title,slogan,precioActual,precioViejo,poster} = producto;
$('.hero-container').append(`
<div class="main-container">
<div class="poster-container">
    <a href="#"><img src="${producto.poster}" class="poster" /></a>
</div>
<div class="ticket-container">
    <div class="ticket__content">
        <h4 class="ticket__movie-title">${producto.title}</h4>
        <p class="ticket__movie-slogan"> ${producto.slogan}</p>
        <p class="ticket__current-price">U$D ${producto.precioActual}</p>
        <p class="ticket__old-price">U$D ${producto.precioViejo}</p>
        <button class="ticket__buy-btn">Comprar Ahora</button>
    </div>
</div>
</div>`)
})}


renderizarFilmesHTML(filmes)