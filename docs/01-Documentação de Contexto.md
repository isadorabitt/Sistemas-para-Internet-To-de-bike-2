# Introdução
Com o alto número populacional nas grandes cidades, o número de veículos aumentou consideravelmente, e com isso, uns dos efeitos sentidos pela população é o aumento do trânsito e aumento de poluição. Diante disso, surge cada vez mais a importância de implementar uma mobilidade sustentável, que implica em meios de transporte mais eficazes e menos poluentes, como por exemplo as bicicletas.
O uso de bicicletas como meio de transporte apresenta vantagens não somente em relação ao meio ambiente, mas também á saúde e bem estar físico e mental, potencializa e melhora o condicionamento físico e diminui o estresse causado por longo tempo no trânsito.
Baseado nisso, o projeto visa implementar um sistema para o gerenciamento de locação e devolução de bicicletas, em pontos espalhados pela cidade, tendo como público alvo pessoas interessadas em uma alternativa de transporte eficiente, ecológica, sustentável e que querem introduzir uma atividade física na sua rotina.


## Problema
Devido ao aumento populacional nos centros urbanos nos últimos anos, um dos grandes problemas enfrentados nesses locais é o trânsito intenso, que gera engarrafamentos, aumento da poluição, estresse, perda de tempo e diminuição da produtividade. Diante disso, vê-se necessário implementar um sistema de mobilidade sustentável.
Mobilidade sustentável propõe implementar transportes com o uso de energia “limpa” e renovável, como por exemplo trens, ônibus elétricos, metrôs, dentre outros. Outra proposta é uso de bicicletas, que é um meio de transporte menos poluente, econômico e rápido, diminuindo o tempo no trânsito e consequentemente reduzindo o estresse.
Para que as bicicletas sejam mais utilizadas pela população, é importante que criar uma maneira de locação e devolução fácil, rápida e simples.


## Objetivos gerais
Implementar um sistema web de gerenciamento de locação e devolução de bicicletas elétricas.


## Objetivos específicos
- Facilitar locação e devolução das bicicletas 
- Melhorar o gerenciamento das locações
- Incentivar o uso das bicicletas 
- Evitar furtos 
- Rastrear a localização das bicicletas
- Permitir o monitoramento em tempo real das bicicletas disponíveis para locação 
- Permitir o usuário visualizar as bicicletas mais próximas da localização atual
- Permitir o pagamento do aluguel pelo sistema


## Justificativa
Contribuir para a melhoria da mobilidade urbana nas cidades brasileiras, com um sistema de gestão eficiente para entrega e devolução de bicicletas elétricas.
Ofertar ao usuário uma opção alternativa de mobilidade.
Com o acesso a bicicletas de qualidade, o objetivo é estimular a maior procura por esse meio de transporte, e consequentemente, contribuir com a diminuição do trânsito.
Contribuir com menor impacto ambiental, estimulando o maior uso de bicicletas elétricas, meio de transporte não poluente.
As bicicletas elétricas são uma ótima opção de transporte rápido, econômico e alternativo. Além disso, diminui o cansaço de pedalar, ajuda a ter uma vida mais saudável e fugir do trânsito.


## Público-Alvo

- Pessoas que buscam uma alternativa mais eficiente, ecológica e sustentável em mobilidade urbana;
- Pessoas que gostem de se exercitar e procuram maneiras de introduzir atividades físicas no dia a dia;
- Pessoas que precisam se locomover todos os dias e buscam uma forma mais acessível de realizar seus trajetos;
- Pessoas que precisam de uma alternativa de locomoção para o último trecho, por exemplo, entre uma estação de metrô e o destino final;
- Buscam se locomover de maneira rápida e acessível além de incluir atividade física no dia a dia, por meio de uma solução alternativa que os leve ao seu destino final.

- Educação: educação básico
- Classe Social: média 
- Gênero: masculino e feminino
- Idade: 18-45
- Nacionalidade: brasileiro
- Localização: Urbano


## ESTADO DA ARTE ##
Para o estado da arte sobre o projeto de Sistema de Controle de Entrega e Devolução de Bicicletas Elétricas, selecionamos quatro sistemas de controle de bicicletas compartilhadas que operam mundialmente. Segue abaixo o nome da empresa, o site, as funcionalidades que ela apresenta e os problemas identificados:

## Tembici ##
https://www.tembici.com.br/

O sistema se baseia no modelo internacional de compartilhamento de bicicletas baseadas em estações, onde o usuário retira a bicicleta em uma estação física e devolve em outra estação, sem custos adicionais, se a viagem entre a estação de retirada e de devolução tiver duração máxima de 1 hora.  
Também havia a possibilidade de desbloquear a bicicleta utilizando um cartão do bilhete único, porém tal funcionalidade só funcionou em São Paulo.

**Funcionalidades:**
- Cadastro de novo usuário com email e senha para acesso;
- Mapa mostrando onde estão as estações próximas ao usuário;
- Desbloqueio de bicicleta por QR Code, com o leitor do celular do usuário;
- Cronômetro acompanhando a duração da viagem do usuário em tempo real;
- Histórico com as informações completas dos últimos itinerários;
- Aviso quando a viagem está para ser encerrada;
- Aviso de quando a viagem foi encerrada;
- Tela do final da viagem mostra a duração, quantas calorias foram perdidas, o nível de CO² (?), a estação em que foi retirada e a estação da devolução;
- Sistema de pontuação 5 estrelas para avaliação da viagem pelo usuário;
- Botão para compartilhar a viagem atual do usuário;
- Compra de planos que podem variar de diários, mensais, trimestrais ou anuais. O usuário seleciona a cidade de sua preferência, onde tem disponível as Tembici, seleciona a categoria de uso que varia entre “eventual” e “rotineiro”, planos a partir da escolha do usuário na categoria de planos;
- Formas de pagamento: cartão de crédito e débito;
- Menu com: Planos e Pagamentos – Viagens - Ajuda.

**Problemas:** <br/>
Por ter sido totalmente desenvolvido no Brasil, vários dos problemas já conhecidos em outras cidades do mundo que utilizavam o sistema de bicicletas compartilhadas não foram levadas em conta. As estações possuíam um tamanho fixo e não tinham a possibilidade de serem aumentadas ou diminuídas, caso a demanda daquela estação aumentasse ou diminuísse. Estações offline (sem contato com a central) também eram um problema comum e constante. O gancho que prendia as bicicletas nas estações também não era de grande resistência, bastando tempo e pouco esforço para que a bicicleta fosse furtada da estação. O furto das peças e dos componentes da bicicleta também era algo muito comum e facilitado, já que elas possuíam várias vulnerabilidades que facilitavam o furto das peças.



## Yellow Bikes ##
https://www.facebook.com/Yellow-Bikes-372289956286087/

**Funcionalidades:**
- Cadastro de Usuário por email;
- Mapa mostrando a localização em tempo real das bicicletas que estão disponíveis para o usuário;
- Minha carteira – O usuário pode adicionar créditos em sua carteira no aplicativo para ir usando em minutos alugando a bicicleta.
    > - Funções no menu Minha Carteira: Transferir créditos para amigos;
    > - Acesso a histórico de transações no aplicativo;
    > - Fazer estornos;
- Histórico de Corridas – Mostra as corridas feitas pelo usuário, com informações de calorias perdidas, qual foi o percurso, qual o tempo de percurso e a quantidade economizada de CO²;
- Informações sobre a carga de bateria da trava; 
Possui trava de segurança móvel, ou seja, a bicicleta não precisa de estações para devoluções e entregas (mas elas existem), pois a empresa opera com zonas de uso, então o usuário pode estacionar a bicicleta aonde quiser, desde que esteja dentro da zona de uso. Caso contrário, o Yellow cobra uma taxa de R$ 30, como uma multa. Para destravar o cadeado, basta usar o leitor QR Code do celular.

**Problemas:** <br/>
Por problemas financeiros, paralisou as suas operações e retirou as suas bicicletas das ruas. A quem diga que um dos motivos pode ser a falta de estudo sobre a cultura brasileira, como por exemplo, a tendência ao sedentarismo na população e vandalismos.



## Lime - Uber ##
https://www.uber.com/br/pt-br/ride/uber-bike/ 
https://www.li.me/pt/

**Funcionalidades:**
- Cadastro de usuário por email, telefone ou redes sociais;
- Acesso ao local do dispositivo;
- Ativação de Bluetooth;
- Menu lateral:
- Pagamento - Adicionar forma de pagamento por cartão de crédito, Google Pay ou Lime Cash;
- Histórico;
- Receber créditos grátis – estimula o usuário a falar do produto com seu círculo social através de incentivos em créditos no aplicativo;
- Promoções – O usuário pode adicionar cupons de promoções;
- Definições – configurações de conta;
- Desbloqueio de bicicleta por QR Code;
Abra o aplicativo, encontre uma bicicleta mais próxima, não é exigido que seja estacionado em uma estação. Leia o QRCode da bicicleta pelo leitor disponível no aplicativo, então escolha a forma de pagamento. Após, vai aparecer informações para o usuário sobre a autonomia da bicicleta escolhida, que permite ao usuário decidir se aquela bicicleta vai completar seu percurso ou não. Após cobrar os valores, o aplicativo libera o destrave da bicicleta. O usuário destrava manualmente puxando a trava na roda traseira. Para finalizar a viagem, estacione em um lugar que não atrapalhe a passagem, trave a bicicleta e confirme no aplicativo.
O usuário faz menos esforço para pedalar do que faria em uma bicicleta comum.

**Problemas:**<br/>
Usuários que não conseguem excluir a conta nem o cartão de crédito, gerando cobranças indevidas.
Equipamentos com avarias, em mal estado para uso, usuário demora para encontrar uma que funcione.
A função de desativar recarga automática do cartão de crédito muitas vezes não funciona gerando cobranças indevidas do cartão do usuário
(Problemas reais relatados por usuários no Google Play Store)


## PBSC Urban Solutions ##
https://www.pbsc.com/?gclid=CjwKCAjw_tWRBhAwEiwALxFPoSPVe7f2YdodY0PLeyldpDXObuVdqzLcf9e5QJE79Pu1KMpKhcaZ7RoCqfsQAvD_BwE

**Funcionalidades:**
- Mapa com ícones mostrando localização das estações, os ícones têm o design que informa quais estações estão cheias, quais estão pela metade e quais estão vazias;
- Perfil de usuário com preferências: De tipo de quilometragem, idioma e notificações;
- Botão com informações sobre o aplicativo.




## Conclusão do Estudo da Arte: ##

Com o levante de informações de funcionalidades e problemas das empresas que oferecem um sistema de entrega e devolução de bicicletas elétricas semelhantes ao do presente estudo, chegamos às seguintes conclusões:
- O uso de estações para o estacionamento das bicicletas - é um ponto positivo, pois o usuário é obrigado a devolver em uma estação após o uso. Menos conveniente para o usuário, mas mais rentável para o sistema: existem menos avarias, em média, em suas bicicletas;
- Cadastro de usuário por email, telefone ou redes sociais - Mais opções para o usuário se cadastrar como preferir;
- Mapa mostrando onde estão as estações próximas ao usuário com atenção ao design do ícone, que informa quais estações estão cheias, quais estão pela metade e quais estão vazias – fundamental para que o usuário tenha uma visão ampla de onde estão as estações próximas para escolher a mais conveniente;
- Desbloqueio de bicicleta por QR Code, com o leitor do celular do usuário – Permite maior segurança para identificar que se trata do mesmo usuário; 
- Cronômetro acompanhando a duração da viagem do usuário em tempo real – util para o usuário ter maior controle da viagem;
- Histórico de Corridas – Mostra as corridas feitas pelo usuário, com informações de calorias perdidas, qual foi o percurso, qual o tempo de percurso e a quantidade economizada de CO²;
- Aviso quando a viagem está para ser encerrada;
- Aviso de quando a viagem foi encerrada, perguntando se pode continuar, caso o usuário continue o trajeto, e informando que ocorrerá novas cobranças. Prosseguir se o usuário aceitar;
- Tela do final da viagem mostra a duração, quantas calorias foram perdidas, o nível de CO² que foi economizada, a estação em que foi retirada e a estação da devolução;
- Sistema de pontuação 5 estrelas para avaliação da viagem pelo usuário;
- Receber créditos grátis – Estimula o usuário a falar do produto com seu círculo social através de incentivos em créditos no aplicativo;
- Botão para compartilhar a viagem atual do usuário;
- Localização do usuário e da bicicleta por GPS, acesso total a rede, acesso a conexões da rede, impedir a inatividade do telefone, ver conexões wi-fi, usar hardwere de impressão digital, receber dados da internet;
- Compra de planos que podem variar de diários, mensais, trimestrais ou anuais;
- Formas de pagamento: cartão de crédito, débito, Google Pay ou outros semelhantes;
- Menu com: Perfil - Planos e Pagamentos – Viagens - Ajuda;
- Informações sobre a carga de bateria da trava.
