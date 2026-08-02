# Bianca & Natã — nossa história

Esta página foi personalizada com:

- **Bianca Leticia de França Aragão**
- **Natã Victor Lima Olegario Teixeira**
- início do namoro em **21 de maio de 2026**
- a declaração enviada por Natã
- as fotos e lembranças que já foram publicadas pelo casal
- um álbum interativo na seção **“Memórias que moram em mim”**, com filtros por Bianca ou Natã, ordenação, textos, miniaturas, botões, teclado e gesto de deslizar
- uma lista compartilhada **“Coisas que ainda vamos viver”**, para guardar sonhos e transformar os que foram realizados em novas memórias
- um **criador gratuito de encontros**, que combina lugar, orçamento e duração e permite guardar a sugestão na lista de planos
- a área diária **“Três coisas de hoje”**, incluindo carinho, coisas boas do dia e gratidão
- o jogo **“Decifra essa reclamação”**, no qual a reclamação é publicada somente por foto
- a área **“Cartas entre nós”**, com envelopes fechados que se abrem ao toque para revelar textos maiores
- a playlist compartilhada **“Nossas músicas”**, com músicas completas do YouTube incorporadas diretamente na página
- um navegador de seções no celular e navegação lateral com indicação da seção atual no computador
- filtros por autoria em todas as áreas compartilhadas, além de filtros próprios para planos, registros e cartas
- rascunhos locais automáticos, contadores e etapas guiadas ao escrever cartas ou adicionar novas memórias

## Como abrir

Abra o arquivo `index.html` em um navegador. A página funciona no celular e no computador.

Também há uma versão em arquivo único chamada `surpresa-bianca.html`, que é mais simples de enviar diretamente. As fotografias são carregadas do Supabase, por isso essa versão continua leve e precisa de internet para exibir o álbum.

## Nossas músicas

As músicas tocam inteiras dentro da própria página pelo player incorporado do YouTube, sem abrir outra aba. É necessário acesso à internet e cada música precisa permitir reprodução incorporada no YouTube. A pessoa deve tocar no botão de reprodução; navegadores normalmente bloqueiam música automática sem interação.

Bianca e Natã podem adicionar novas músicas usando um link comum, curto, incorporado, de Short ou de live do YouTube. A playlist fica guardada no Supabase e é atualizada em tempo real em todos os aparelhos com o site aberto. Cada música pode ser corrigida ou excluída diretamente em seu cartão. Adicionar, editar ou excluir sempre exige o mesmo código reservado, que nunca fica escrito no site.

## Como transformar em um link

Publique todos os arquivos desta pasta em qualquer hospedagem de sites estáticos. O arquivo inicial precisa continuar com o nome `index.html`.

O botão **“Compartilhar esta surpresa”** usa o compartilhamento do celular quando disponível. Se o navegador não permitir, o endereço é copiado automaticamente para a área de transferência.

## Novas lembranças em tempo real

A seção **“Acrescente um novo capítulo”** permite que Bianca ou Natã publiquem diretamente em **“Memórias que moram em mim”**. Cada memória registra quem a adicionou, pode ser filtrada por autoria e entra na galeria principal, acessível pelas setas e miniaturas. A publicação é guardada no Supabase e aparece imediatamente para todos que estiverem com a página aberta.

Enquanto uma nova memória é escrita, o título, o texto e a autoria ficam salvos como rascunho somente naquele aparelho. A foto não é guardada localmente e o código nunca é salvo. O formulário mostra as etapas concluídas, a quantidade de caracteres e aceita escolher ou arrastar uma imagem no computador.

Todas as memórias — tanto as criadas originalmente por Natã quanto as publicadas depois pela Bianca — têm uma área **“Nosso diário”**. Bianca e Natã podem escolher quem está escrevendo e continuar a conversa diretamente embaixo da lembrança usando o mesmo código reservado. As respostas ficam ligadas à memória correta, são guardadas no Supabase e aparecem em tempo real em todos os aparelhos.

O envio exige o código reservado combinado pelo casal. O código não está escrito no HTML: ele é conferido por uma função protegida no Supabase. O site limita tentativas incorretas e aceita somente imagens JPG, PNG ou WEBP com até 8 MB.

Antes do envio, o navegador testa versões WEBP de alta qualidade, sem reduzir as dimensões da fotografia. Uma versão otimizada só é utilizada quando fica pelo menos 10% menor e passa por uma comparação visual conservadora; caso contrário, o arquivo original é enviado. Assim, a economia de espaço nunca tem prioridade sobre a qualidade da lembrança.

As lembranças ficam reunidas em **“Memórias que moram em mim”**, sem uma segunda seção repetida. Todas as fotografias existentes e futuras possuem a opção **“Editar ou excluir”**. É possível corrigir quem adicionou, o título e o texto ou substituir a fotografia; um arquivo só é retirado do armazenamento quando não está sendo usado por nenhuma outra lembrança. Essas operações sempre pedem o código reservado.

O site usa apenas uma chave pública própria para páginas abertas. A chave secreta do Supabase nunca deve ser incluída nos arquivos do site.

## Coisas que ainda vamos viver

Bianca e Natã podem adicionar viagens, encontros, sonhos, aventuras e outros planos usando o mesmo código reservado. A lista fica guardada no Supabase e é atualizada em tempo real para todos os aparelhos com o site aberto.

Os planos adicionados podem ser corrigidos ou excluídos diretamente no cartão correspondente, sempre mediante o código reservado.

Quando um plano acontecer, basta escolher **“Marcar como vivido”**. Ele passa para a parte **“Sonhos que já viraram história”** e pode ser transformado em uma nova memória: o site preenche o título e o texto na área de publicação, faltando apenas escolher a foto daquele dia.

## Nosso cantinho

O **“Encontro para hoje”** permite escolher lugar, orçamento e duração e sortear quantas sugestões quisermos. Tudo funciona dentro da própria página, sem cadastro, inteligência artificial ou serviço pago. A coleção tem **72 ideias diferentes**, com quatro opções para cada combinação exata de filtros e um detalhe especial para nós. O sorteio percorre todas as opções compatíveis antes de repetir alguma. A sugestão escolhida pode ser enviada diretamente para **“Coisas que ainda vamos viver”**.

Em **“Três coisas de hoje”**, cada pessoa pode guardar uma lista diária de três coisas que gosta no outro, três coisas boas do dia ou três motivos de gratidão. Cada pessoa pode preencher uma vez por dia cada uma dessas modalidades.

Em **“Decifra essa reclamação”**, a publicação aceita somente a autoria e uma foto. As interpretações são escritas depois, embaixo da fotografia, mantendo o formato de brincadeira sugerido por Bianca.

Em **“Cartas entre nós”**, Bianca e Natã podem escrever textos maiores com título, autor e data. As cartas aparecem fechadas e só revelam o conteúdo quando tocamos nelas. Todas essas áreas usam o código reservado, ficam salvas no Supabase e são atualizadas em tempo real em todos os aparelhos.

O texto de uma carta também é preservado como rascunho somente no aparelho enquanto está sendo escrito. As cartas podem ser filtradas por autoria e pesquisadas pelo título ou por uma palavra do texto.

Os registros diários, cartas, reclamações, interpretações e respostas do **“Nosso diário”** também podem ser editados ou excluídos. A opção aparece apenas no conteúdo que foi enviado pelo site e exige o código reservado em cada ação.

## Ajustar o horário inicial

Como foi informada apenas a data, o contador começa à meia-noite de 21 de maio de 2026, no fuso `-03:00`.

Para trocar o horário, edite esta linha no arquivo `script.js`:

```js
startDate: "2026-05-21T00:00:00-03:00"
```

Por exemplo, para começar às 20h:

```js
startDate: "2026-05-21T20:00:00-03:00"
```
