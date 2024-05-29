// Tabela de decisão

// Uma outra forma para mapear seus testes é através da tabela de decisão. Ao invés de criar um fluxo, podemos expressar o conjunto de condições em forma de tabela.

// Cada condição (regra de negócio) é colocada em uma linha, geralmente no topo, e os resultados nas linhas inferiores. Assim, cada coluna vira um conjunto de condições e seus resultados, ou seja, cada coluna é um teste.

// Um exemplo de tabela de decisão para o fluxo de login é a seguinte:

// Variáveis	               1	              2	                 3	                         4
// Login válido?	          Sim	             Não 	            Sim	                        Sim
// Senha válida?	          Sim	             Não	            Não	                        Não
// Errou a senha 3 vezes?    Não	             Não                Não	                        Sim
// Saída esperada	          Logar no AluraPic	 Mensagem de erro	Mensagem de erro	        bloqueio no sistema por 15 min.

// Nesse Projeto aprendemos

// Testes funcionais, são os testes definidos de acordo com os requisitos funcionais do software;
// Que podemos pensar nos nossos testes construindo fluxos de testes ou tabelas de decisão conforme as regras de negócio do nosso projeto;
// Conceitos de Cenários de testes definem “O que” deve ser testado, enquanto os Casos de Testes definem “Como”, ou seja, o passo a passo. O caso de teste é mais detalhado;
// Como escrever Casos de testes utilizando BDD, sigla para Behavior driven development (desenvolvimento guiado por comportamento ou desenvolvimento orientado a comportamento, numa tradução livre) com intuito de escrever testes guiados pelo comportamento do usuário e pelos negócios.
// Para tal, usamos a semântica Dado, Quando e Então;
// Um Plano de teste define e comunica a intenção e esforço do teste. Serve, por exemplo, para ganhar a aceitação e aprovação dos envolvidos, comunicar e justificar prazo de teste planejado
