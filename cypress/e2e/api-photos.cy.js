//Now we'll test Alurapic API in this case we're not visitting an URL we're making an API request and expecting an API response

describe('Api Alurapic', () => {

  // código comentado omitido…
  
      it('User Photos', () => {
        const expectedTime = Math.random() * 50;  

          cy.request({
              method: 'GET' ,
              url: 'http://localhost:3000/carowl/photos'
          }).then((res) => {
              expect(res.status).to.be.equal(200)
              expect(res.body).is.not.empty
              expect(res.body[0]).to.have.property('description')
              expect(res.body[0].description).to.be.equal('Rules For Trading')
              expect(res.duration).to.be.lte(expectedTime)              
          })
      })
  })


  //Avoiding Flaky Test

//   Já implementamos o teste onde percorremos as fotos da pessoa usuária, fazendo a requisição para a API para encontrar uma foto específica.

// Mas vamos considerar uma situação: e se quisermos que esta resposta da API aconteça em um tempo pré-determinado? Isso pode ser simulado criando uma variável.

// Evitar flaky tests
// Após abrir a arrow function, antes de cy.request(), vamos criar uma nova variável denominada const tempoEsperado. Assim, vamos definir um tempo para que a API traga a resposta da confirmação de existência da imagem dentro da plataforma.

// Para simular esse tempo, utilizamos um Math.random() vezes 50. Isso vai gerar um tempo que pode variar, podendo voltar em 50 milissegundos ou mais. Essa variação vai causar algumas situações que exploraremos logo mais.

// Após criar essa variável, vamos implementar mais um expect na linha 25. O objetivo é que a resposta da requisição seja menor que o tempo esperado.

// A sintaxe será: expect(res.duration).to.be.lte(tempoEsperado). Como parâmetro, passarei a variável tempoEsperado criada anteriormente.

// describe('Buscar fotos e dados', () => {

//   // código comentado omitido…
  
//       it('buscar fotos do usuário', () => {
        
//         const tempoEsperado = Math.random() * 50;
  
//           cy.request({
//               method: 'GET' ,
//               url: 'http://localhost:3000/carowl/photos'
//           }).then((res) => {
//               expect(res.status).to.be.equal(200)
//               expect(res.body).is.not.empty
//               expect(res.body[0]).to.have.property('description')
//               expect(res.body[0].description).to.be.equal('porquinho')
//               expect(res.duration).to.be.lte(tempoEsperado)
//           })
//       })
//   })

//   Após salvar com o atalho "Ctrl + S", executaremos o teste novamente. Abrimos o terminal, executamos o Cypress e observamos o resultado.

//   npx cypress open

//   Ao rodar o teste api-alurapic.cy.js, percebemos que às vezes ele passa e às vezes não. Note que o tempo de espera varia já que criamos a variável com Math.random().

//   Isso configura o que é chamado de flaky test. Ou seja, testes que apresentam inconsistências, às vezes passando, às vezes não.

//   Apesar de sabermos que o teste estava passando, precisamos tomar muito cuidado com esse tipo de situação.

//   Imagine que, em algum momento, ocorra realmente uma falha de segurança, algo mais grave dentro do nosso teste, e isso seja erroneamente atribuído a um flaky test.

//   Como pessoas desenvolvedoras responsáveis pela qualidade do projeto, precisamos estar atentas a isso e quando acontecer, devemos buscar a origem do problema para impedir que se repita.

// Não devemos deixar que flaky tests aconteçam no time, identificando falhas e trabalhando em equipe para evitar futuros problemas.

// Portanto, já simulamos uma situação de flaky test e nosso próximo passo será organizar nosso projeto, usando uma estrutura que poderá ser base para evoluí-lo futuramente.
  

//Para saber mais: flaky tests

// No processo de elaboração e execução dos testes é muito comum nos depararmos com erros randômicos, conhecidos como flaky tests. Esses erros que acontecem de forma aleatória, não necessariamente são falhas. Isso porque ao iniciarmos o processo de automação e2e, por exemplo, programamos os scripts em nossa máquina local, executando os testes exclusivamente e tudo parece funcionar corretamente. Porém, ao executá-los num ambiente diferente, isso pode ter um resultado diferente.

// O conceito de "flaky" acontece porque o mesmo código apresenta resultados de falha e sucesso, sem que haja nenhuma alteração. Isso geralmente acontece por conta de alguns fatores, como: dependência de código de terceiros, comportamentos não-determinísticos, concorrência de processos, falta de atualização de dados entre passagens de testes, diferença de fuso horário, dependência na ordem de execução de testes, entre outros.

// Manter testes que falham na suite de testes pode ser extremamente prejudicial pois fere a confiança nos testes. Sendo assim, deve-se fazer o máximo para evitá-los. A identificação desse tipo de problema ocorre comparando os resultados de testes apresentados, após várias passagens de teste. Caso você use o dashboard do Cypress na versão paga, ele já fornece essa análise. Algumas dicas que podem ser úteis para evitar os flaky tests:

// 1 - Se a falha for por diferença de tempo nos diversos ambientes, considere colocar pontos de espera, orientado a algum evento e não com tempo fixo;

// 2 - Verificar se as variáveis de ambiente estão configuradas corretamente para cada tipo de ambiente onde o teste será executado;

// 3 - Verificar se a ferramenta de teste automatizado que você está usando dá suporte a rerun ou reteste, que é um recurso que permite que a ferramenta rode novamente o teste em caso de falha, para verificar se numa segunda tentativa vai dar certo. Isso é normalmente configurável por teste;

// 4 - Se for alguma situação de teste que compare data ou hora, tente usar alguma constante para retornar esse valor e não depender da hora/data real do ambiente, que pode estar diferente;

// 5 - Caso seja algum teste que faz uma chamada a alguma API externa ou de terceiros, considere usar um mock para ter um controle melhor sobre a resposta que será devolvida.

// Flaky tests não devem estar na suite de testes. Se não for possível corrigi-lo, considere remover o teste ou pensar em outra alternativa para verificar esse resultado.