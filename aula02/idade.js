function verificarElegibilidadeVoto (idade, nacionalidade) {
    const podeVotar = idade >= 16 && nacionalidade === 'brasileira'
  
    console.log(podeVotar)
  
  }
  
  verificarElegibilidadeVoto(16, "brasileira")
  verificarElegibilidadeVoto(15, "brasileira")