const libro = {
    titulo:'Asi hablo zaratustra',
    autor:'Friedrich Nietzche',
    genero:'Filosofia',
    publicacion:1885,
    editorial:'Emu',
    print: function (){
        console.log(`Este libro se llama: ${this.titulo}, su autor es ${this.autor}, se publico en ${this.publicacion} y su genero es ${this.genero}`)
    }
}
const libro2 = {
    titulo:'Mas alla del bien y el mal',
    autor:'Friedrich Nietzche',
    genero:'Filosofia',
    publicacion:1886,
    editorial:'Emu',
    print: function (){
        console.log(`Este libro se llama: ${this.titulo}, su autor es ${this.autor}, se publico en ${this.publicacion} y su genero es ${this.genero}`)
    }
}
const libro3 = {
    titulo:'El color que cayo del cielo',
    autor:'H.P. Lovecraft',
    genero:'Terror',
    publicacion:1927,
    editorial:'Emu',
    print: function (){
        console.log(`Este libro se llama: ${this.titulo}, su autor es ${this.autor}, se publico en ${this.publicacion} y su genero es ${this.genero}`)
    }
}
const libro4 = {
    titulo:'La sombra sobre innsmouth',
    autor:'H.P. Lovecraft',
    genero:'Terror',
    publicacion:1936,
    editorial:'Emu',
    print: function (){
        console.log(`Este libro se llama: ${this.titulo}, su autor es ${this.autor}, se publico en ${this.publicacion} y su genero es ${this.genero}`)
    }
}


libro.print()   