# Bianca & Natã — nossa história

Esta página foi personalizada com:

- **Bianca Leticia de França Aragão**
- **Natã Victor Lima Olegario Teixeira**
- início do namoro em **21 de maio de 2026**
- a declaração enviada por Natã
- as sete fotos e lembranças do casal
- um álbum interativo na seção **“Memórias que moram em mim”**, com textos, miniaturas, botões, teclado e gesto de deslizar
- uma lista compartilhada **“Coisas que ainda vamos viver”**, para guardar sonhos e transformar os que foram realizados em novas memórias
- um **criador gratuito de encontros**, que combina lugar, orçamento e duração e permite guardar a sugestão na lista de planos
- a área diária **“Três coisas de hoje”**, incluindo carinho, coisas boas do dia e gratidão
- o jogo **“Decifra essa reclamação”**, no qual a reclamação é publicada somente por foto
- a área **“Cartas entre nós”**, reservada para textos maiores
- a música completa **Partilhar**, de Rubel e ANAVITÓRIA, incorporada diretamente na página

## Como abrir

Abra o arquivo `index.html` em um navegador. A página funciona no celular e no computador.

Também há uma versão em arquivo único chamada `surpresa-bianca.html`, que é mais simples de enviar diretamente. As fotografias são carregadas do Supabase, por isso essa versão continua leve e precisa de internet para exibir o álbum.

## Música completa

A música toca inteira dentro da própria página pelo player incorporado do YouTube, sem abrir outra aba. É necessário acesso à internet. A pessoa deve tocar no botão de reprodução; navegadores normalmente bloqueiam música automática sem interação.

## Como transformar em um link

Publique todos os arquivos desta pasta em qualquer hospedagem de sites estáticos. O arquivo inicial precisa continuar com o nome `index.html`.

O botão **“Compartilhar esta surpresa”** usa o compartilhamento do celular quando disponível. Se o navegador não permitir, o endereço é copiado automaticamente para a área de transferência.

## Recados

Os recados são guardados no Supabase e aparecem em todos os celulares e computadores que abrirem o site. É necessário acesso à internet.

Qualquer pessoa que receber o link consegue ler e enviar um recado. Cada recado enviado pelo site possui a opção discreta **“Editar ou excluir”**; para salvar qualquer alteração ou confirmar a exclusão, é obrigatório informar o código reservado do casal.

O site usa apenas uma chave pública própria para páginas abertas. A chave secreta do Supabase nunca deve ser incluída nos arquivos do site.

## Novas lembranças em tempo real

A seção **“Acrescente um novo capítulo”** permite que Bianca ou Natã publiquem somente em **“Memórias que moram em mim”** ou **“Momentos que fizeram de nós, nós”**. No álbum, a publicação entra diretamente na galeria principal e pode ser acessada pelas setas e miniaturas; na história, ela entra como uma nova etapa da linha do tempo. Não existe uma terceira área separada. A publicação é guardada no Supabase e aparece imediatamente para todos que estiverem com a página aberta.

Todas as memórias — tanto as criadas originalmente por Natã quanto as publicadas depois pela Bianca — têm uma área **“Nosso diário”**. Bianca e Natã podem escolher quem está escrevendo e continuar a conversa diretamente embaixo da lembrança usando o mesmo código reservado. As respostas ficam ligadas à memória correta, são guardadas no Supabase e aparecem em tempo real em todos os aparelhos.

O envio exige o código reservado combinado pelo casal. O código não está escrito no HTML: ele é conferido por uma função protegida no Supabase. O site limita tentativas incorretas e aceita somente imagens JPG, PNG ou WEBP com até 8 MB.

Antes do envio, o navegador testa versões WEBP de alta qualidade, sem reduzir as dimensões da fotografia. Uma versão otimizada só é utilizada quando fica pelo menos 10% menor e passa por uma comparação visual conservadora; caso contrário, o arquivo original é enviado. Assim, a economia de espaço nunca tem prioridade sobre a qualidade da lembrança.

As sete lembranças originais ficam apenas em **“Memórias que moram em mim”**, sem cópias repetidas na linha do tempo. Todas as fotografias existentes e futuras ficam no Supabase e possuem a opção **“Editar ou excluir”**. É possível corrigir o título e o texto ou substituir a fotografia; ao substituir ou excluir uma foto, o arquivo antigo também é retirado do armazenamento. Essas operações sempre pedem o código reservado.

## Coisas que ainda vamos viver

Bianca e Natã podem adicionar viagens, encontros, sonhos, aventuras e outros planos usando o mesmo código reservado. A lista fica guardada no Supabase e é atualizada em tempo real para todos os aparelhos com o site aberto.

Os planos adicionados podem ser corrigidos ou excluídos diretamente no cartão correspondente, sempre mediante o código reservado.

Quando um plano acontecer, basta escolher **“Marcar como vivido”**. Ele passa para a parte **“Sonhos que já viraram história”** e pode ser transformado em uma nova memória: o site preenche o título e o texto na área de publicação, faltando apenas escolher a foto daquele dia.

## Nosso cantinho

O **“Encontro para hoje”** permite escolher lugar, orçamento e duração e sortear quantas sugestões quiserem. Tudo funciona dentro da própria página, sem cadastro, inteligência artificial ou serviço pago. A coleção tem uma ideia compatível para cada combinação possível e inclui um detalhe especial para o casal. A sugestão escolhida pode ser enviada diretamente para **“Coisas que ainda vamos viver”**.

Em **“Três coisas de hoje”**, cada pessoa pode guardar uma lista diária de três coisas que gosta no outro, três coisas boas do dia ou três motivos de gratidão. Cada pessoa pode preencher uma vez por dia cada uma dessas modalidades.

Em **“Decifra essa reclamação”**, a publicação aceita somente a autoria e uma foto. As interpretações são escritas depois, embaixo da fotografia, mantendo o formato de brincadeira sugerido por Bianca.

Em **“Cartas entre nós”**, Bianca e Natã podem escrever textos maiores com título, autor e data. Todas essas áreas usam o código reservado, ficam salvas no Supabase e são atualizadas em tempo real em todos os aparelhos.

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
