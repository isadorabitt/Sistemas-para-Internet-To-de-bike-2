# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


## Personas

**Bruno** <br/>
23 anos, classe média, brasileiro, residente em Contagem - MG. Estudante de direito, faz estágio em uma empresa de Advocacia, com pretensão em ser contratado como Advogado Júnior. Gosta de atividade física e é amante da natureza. Nos finais de semana, costuma se encontrar com amigos para jogar futebol e à noite frequenta barzinhos próximos a sua residência. Por ser de classe média, não vai a lugares caros, mas gosta da boa culinária e ambientes musicais. Extrovertido, gosta das mais diversas tecnologias e em seu perfil nas redes sociais gosta de seguir páginas de carros modernos e de programas locais.

**Mariana** <br/>
28 anos, classe média, brasileira, residente em Taguatinga – Distrito Federal. É psicóloga do Ministério Público Federal, entra no trabalho as 8 horas da manhã e para evitar o trânsito prefere recorrer ao uso do metrô. Ela preza pela qualidade e otimização do tempo, sendo assim, tem uma vida corrida já que também estuda para o mestrado. Ama ler livros e desde criança pratica esportes. No seu tempo livre, prefere ver boas séries e ir a cafeterias com suas amigas. Gosta de animais, possui um gato e um cachorro que trata como se fosse da família e todos os dias faz caminhada com seu cachorro na praça próxima da sua casa. Se mantém em forma, gosta de uma vida leve e saudável. Prepara suas marmitas semanalmente e sempre que pode não deixa de faltar a academia. Isso para ela é manter o equilíbrio pois consegue adequar sua rotina com seu estilo de vida.

**João José** <br/>
34 anos, classe média, brasileiro, residente em São Paulo – SP. É bancário e possui um espírito aventureiro. É ativista das causas naturais e não possui carro próprio. Prefere utilizar o transporte público para se locomover e quando necessário usa aplicativos de caronas compartilhadas e aplicativos de táxi. Sua casa é simples e ele é adepto de fazer seus próprios móveis como também gosta de comprar móveis usados. Busca aposentar cedo, então tem uma vida regrada com planilhas de gastos e uma cartela de investimentos. Seu maior passatempo é fazer trilhas nos finais de semana e quando não sai não vê problema em ser caseiro. Sabe que hoje tem-se muitos recursos tecnológicos e quanto a isso é antenado. Como renda – extra tem estudado sobre marketing digital e pretende futuramente que essa seja sua renda principal.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`     |
|--------------------|------------------------------------|----------------------------------------|
| USUÁRIO | Criar uma conta no aplicativo | Ter acesso a uma bicicleta |
| USUÁRIO | Encontrar uma estação próxima a mim | Retirar uma bicicleta |
| USUÁRIO | Ter diversas opções de pagamentos | Escolher a melhor opção para mim no momento |
| USUÁRIO | Ver as estações ao meu redor em tempo real | Caso eu decida terminar o percurso |
| USUÁRIO | Saber se a estação próxima a mim possui bicicletas disponíveis | Não ir até a estação a toa |
| USUÁRIO | Controle entre tempo e cobrança | Ser avisado quando o tempo irá acabar e poder decidir se quero continuar o uso ou não |
| USUÁRIO | Saber o tempo dos percursos realizados | Saber quanto tempo demorou para realizar tal percurso |
| USUÁRIO | Ver os quilômetros dos percursos realizados | Saber quanto eu andei e me exercitei |
| USUÁRIO | Ver quantas calorias foram perdidas em cada percurso | Saber quantas calorias perdi |
| USUÁRIO | Devolver a bicicleta sem cobrança | Não pagar por uma bicicleta que após a retirada, percebi estar com danos |
| USUÁRIO | Devolver a bicicleta na estação mais próxima a mim | Não precisar andar muito após a devolução |
| USUÁRIO | Relatar um problema de forma fácil | Resolver os problemas sem estresse |
|--------------------|------------------------------------|----------------------------------------|
| EU COMO... `ADMINISTRADOR`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`    |
| ADMINISTRADOR | Criar conta administradora no aplicativo | Gestão do sistema |
| ADMINISTRADOR | Rastrear usuário e bicicleta | Gerenciar quantidade de bicicletas vagas e em uso  |
| ADMINISTRADOR | Alterar permissões | Modificar, interagir e avaliar as contas |
| ADMINISTRADOR | Bloquear usuário | O caso de não haver devolução ou falta de pagamento |

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário crie uma conta | ALTA | 
|RF-002| Permitir que o usuário encontre uma estação de bicicletas mais próxima a ele | ALTA |
|RF-003| Permitir que o usuário adicione informações de pagamento | MÉDIA | 
|RF-004| Mapa atualizado em tempo real das estações e da quantidade de bicicletas disponíveis | ALTA | 
|RF-005| Controle de tempo que o usuário pode usar, dependendo de seu plano | BAIXA | 
|RF-006| Notificações mostrando o tempo que o usuário ainda tem disponível | BAIXA | 
|RF-007| Histórico de percursos com informações de tempo, quilômetros, e calorias obtidas em cada percurso realizado | MÉDIA|
|RF-008| Permitir que o usuário reporte qualquer problema de forma rápida e fácil | BAIXA | 
|RF-009| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RF-010| Enviar e-mail de confirmação de entrega de bicicleta ao usuário | BAIXA | 
|RF-011| Enviar e-mail de confirmação de devolução de bicicleta ao usuário | BAIXA |
|RF-012| Enviar e-mail com informações de tempo utilizado, valores cobrados e taxa extras, caso houver | BAIXA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Ultilizar algum requisito de segurança, como senha enviada ao celular do usuário | ALTA | 
|RNF-002| Bloqueio de conta de usuário que não devolveu a bicicleta | BAIXA | 
|RNF-003| Sistema de segurança e travamento automático que permite a retirada e devolução das bikes nas estações | ALTA | 
|RNF-004| Sistema de rastreio que localiza o usuário e onde a bicicleta se encontra | MÉDIA | 
|RNF-005| Permitir que o usuário devolva a bicicleta para a estação em até um minuto, caso ela apresente danos | ALTA | 
|RNF-006| Permitir que o usuário devolva a bicicleta em qualquer estação, não precisando ser a mesma de entrega | ALTA | 
|RNF-007| Controle de devolução de cada usuário | BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|ÁREA DE RESTRIÇÃO| DESCRIÇÃO      |
|--|-------------------------------------------------------|
|CICLO DE VIDA| Devido ao baixo orçamento, utilizaremos um ciclo incremental e iterativo, para definir requisitos essenciais e opcionais. |
|PRAZO & TIMING|O projeto deverá ser entregue até o fim do semestre 2022.1.|
|POLÍTICA & ASPECTOS LEGAIS|O projeto deverá estar em conformidade com os parâmetros instituídos pela Lei Federal de trânsito vigente. O projeto deverá estar em conformidade com os parâmetros instituídos na LGPD (Lei Geral de Proteção de Dados).|
|ACESSO NAVEGADOR (cadastro/estações)|O acesso deve ser feito através do navegador web Chrome e/ou Firefox somente para cadastro, help center e visualização das estações/bike.|
|ACESSO APP (cadastro/estações/desbloqueio)|O acesso deve ser feito através do app, para todas as funcionalidades do navegador e o desbloqueio da bike.|
|LINGUAGEM E TECNOLOGIA|O sistema deve ser escrito e entregue na linguagem de programação Node.js / JavaScript.|
|HOSPEDAGEM|Os arquivos deverão estar hospedados em um servidor dedicado (VPS).|
|USABILIDADE|O sistema deverá ter uma interface amigável, fácil de navegação e com o foco na mobilidade urbana.|
|ASSINATURA|Os usuários finais deverão pagar com um valor mensal de assinatura ou por aluguel avulso de bike. As empresas poderão ter planos exclusivos.|
|SERVIDOR|O sistema operacional do servidor será CentOS 7.0 ou superior.|
|SEGURANÇA|O projeto deverá utilizar o padrão de Certificados SSL/TLS.|
