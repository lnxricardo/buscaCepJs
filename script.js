$(document).ready(function(){ 
    $("#txtCep").focusout(function(){ 
        //Recebe do input do CEP o valor. Atenção usar mascara de número!!!
        let cep = $("#txtCep").val(); // Seta para a variavel cep o que recebeu do input
        cep = cep.replace("-", ""); // Remove traços. Opcional se estiver usando mascara
        let urlStr = "https://viacep.com.br/ws/"+ cep +"/json" //Recebe url do WEb Service dos Correios
      $.ajax({ // requição será feita com AJAX
          url: urlStr, // Setando a URL a ser consumida
          type: "get", // metodo
          dataType: "json", // recebendo com JSON
          success: function(data){ //Caso receba tudo certo, vai rodar a função abaixo
            //console.log(data);
            $("#txtCidade").val(data.localidade); //Recebe do webservice os dados e manda para o Input
            $("#txtEstado").val(data.uf);
            $("#txtBairro").val(data.bairro);
            $("#txtRua").val(data.logradouro);
            // $("#txtCidade").val(data.localidade);
          },
          error: function(erro){ // em produção, não adicionar. 
              console.log(erro);
          }
      });
    });
});