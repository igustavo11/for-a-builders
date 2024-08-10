$(document).ready(function(){
    portifolio.eventos.init();

})
var portifolio = {  };


portifolio.eventos = {

    init : () =>{
        portifolio.metodos.obterItensPortifolio();
    }
}

portifolio.metodos ={
    //listar portifolio 
    obterItensPortifolio:(casa = 'all', vermais = false ) => {
        var filtro = PORTIFOLIO[casa];
        console.log(filtro)

        if(!vermais) {
            $("#itensPortifolio").html('');
            $("#btnVerMais").removeClass('hidden');

        }
        $.each(filtro, (i, e)=>{
            
            let temp = portifolio.templates.item.replace(/\${img}/g, e.img)
            .replace(/\${id}/g, e.id)
            // botao ver mais clicado 12 itens

            if(vermais && i >= 4 && i < 12){
                $("#itensportifolio").append(temp)

            }
            // pag inicial 8 itens
            if(!vermais && i < 4) {
                $("#itensportifolio").append(temp)

            }
            
          

        })
          //remover active
          $(".container-portifolio a").removeClass('active');
          //portifolio ativo
          $("#portifolio-"+ categoria).addClass('active')
    },
     //botao ver mais
     verMais : () => {

        var ativo =  $(".container-portifolio a.active").attr('id').split('portifolio-')[1];
        portifolio.metodos.obterItensPortifolio(ativo, true);

        $("#btnVerMais").addClass('hidden');

    },
}

portifolio.templates= {
    item :`
      <div class="box">
                <img src="\${img}" alt="">
                <div class="content">
                    <h3>amazing construction</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                   
                </div>
            </div>`,

}