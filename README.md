# Demanda de Geointeligência - versão 0.9, em avaliação

Protótipo de trabalho individual. Não constitui sistema oficial. Nada do que é digitado é transmitido ou armazenado.

## Conteúdo

- `index.html`: versão Solicitante (endereço principal).
- `analista/index.html`: versão Analista.
- `img/`: imagens e ícones, usados pelas duas versões.
- `sw.js`: permite abrir o aplicativo sem rede após a primeira visita.

## Publicação no GitHub Pages

1. Criar um repositório novo (por exemplo, `geoint`).
2. Enviar todo o conteúdo desta pasta para a raiz do repositório, mantendo as pastas `analista` e `img`. O arquivo `.nojekyll` também deve ir.
3. Em Settings > Pages, escolher "Deploy from a branch", ramo `main`, pasta `/ (root)`, e salvar.
4. Aguardar alguns minutos. Os endereços serão:
   - Solicitante: `https://USUARIO.github.io/geoint/`
   - Analista: `https://USUARIO.github.io/geoint/analista/`

## Instalação no iPhone

Abrir o endereço no Safari, tocar em Compartilhar e em "Adicionar à Tela de Início". Cada versão é instalada pelo seu próprio endereço.

## Atualização

Ao enviar arquivos alterados, mudar o número em `const C='geoint-0.9.15'`, no arquivo `sw.js`. Sem isso, os aparelhos continuam a usar a versão guardada por algum tempo.

## Observação

O site publicado é público: qualquer pessoa com o endereço pode abri-lo. A separação entre as versões é feita apenas pelo endereço.
