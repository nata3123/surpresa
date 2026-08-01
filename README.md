# Surpresa para Bianca

Esta página foi personalizada com:

- **Bianca Leticia de França Aragão**
- **Natã Victor Lima Olegario Teixeira**
- início do namoro em **21 de maio de 2026**
- a declaração enviada por Natã
- as sete fotos e lembranças do casal
- um álbum interativo na seção **“Memórias que moram em mim”**, com textos, miniaturas, botões, teclado e gesto de deslizar
- a música completa **Partilhar**, de Rubel e ANAVITÓRIA, incorporada diretamente na página

## Como abrir

Abra o arquivo `index.html` em um navegador. A página funciona no celular e no computador.

Também há uma versão em arquivo único chamada `surpresa-bianca.html`, que é mais simples de enviar diretamente. Como as fotos ficam incorporadas nele, o arquivo pode ser maior.

## Música completa

A música toca inteira dentro da própria página pelo player incorporado do YouTube, sem abrir outra aba. É necessário acesso à internet. A pessoa deve tocar no botão de reprodução; navegadores normalmente bloqueiam música automática sem interação.

## Como transformar em um link

Publique todos os arquivos desta pasta em qualquer hospedagem de sites estáticos. O arquivo inicial precisa continuar com o nome `index.html`.

O botão **“Compartilhar esta surpresa”** usa o compartilhamento do celular quando disponível. Se o navegador não permitir, o endereço é copiado automaticamente para a área de transferência.

## Recados

Os recados ficam guardados apenas no navegador e no aparelho em que foram escritos. Eles não são enviados para outra pessoa nem para um servidor. Cada recado pode ser removido pelo botão **“Apagar”**.

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
