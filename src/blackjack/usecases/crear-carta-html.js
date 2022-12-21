

/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retornos
 */

export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error('La carta es un argumento obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    //divCartasJugador.append( imgCarta );    

    return imgCarta;

}