# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="/imagens/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Nome do projeto: Dendem

## Nome do grupo: ECOmigo

## :student: Integrantes: 
- <a href="https://www.linkedin.com/in/antoniobfm/">Antônio Bahia Fonseca Moraes</a>
- <a href="https://www.linkedin.com/in/cec%C3%ADlia-alonso-gon%C3%A7alves-3aa4bb271/">Cecília Gio Alonso Gonçalves</a>
- <a href="https://www.linkedin.com/in/felipe-braga-69607126a/">Felipe Morita de Almeida Braga</a>
- <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-brand%C3%A3o-de-moura-338636215/">João Pedro Brandão de Moura</a> 
- <a href="https://www.linkedin.com/in/laura-padilha-bueno-b358419a/">Laura Padilha Bueno</a>
- <a href="https://www.linkedin.com/in/luigi-ot%C3%A1vio-904475234/">Luigi Otávio Neves Macedo</a> 
- <a href="https://www.linkedin.com/in/raideoliveira/">Raí de Oliveira Cajé</a>

## :teacher: Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/juliastateri/">Julia Stateri</a>

### Instrutores
- <a href="https://www.linkedin.com/in/andreluizbraga/">André Souto Mayor Braga</a>
- <a href="https://www.linkedin.com/in/egondaxbacher/">Egon Daxbacher</a> 
- <a href="https://www.linkedin.com/in/filipe-gon%C3%A7alves-08a55015b/">Filipe Gonçalves</a>
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a> 
- <a href="https://www.linkedin.com/in/geraldo-magela-severino-vasconcelos-22b1b220/">Geraldo Magela Vasconcelos</a>

## 📝 Descrição

O “Dendem” é uma aplicação web que funciona como ferramenta facilitadora da colaboração entre pesquisadores da Natura e agricultores associados a fim de pesquisas para o desenvolvimento de produtos da empresa. Com o Dendem, pesquisadores podem criar protocolos, os quais guiam os agricultores no processo de coleta de imagens e dados das espécies vegetais solicitadas. Os agricultores, então, atuam como coletores utilizando a aplicação através de seu próprio smartphone, podendo capturar fotos e inserir informações demandadas da própria palma da mão. Essas funcionalidades são favorecidas, ainda, pela opção de preenchimento de protocolos de modo offline, com a possibilidade de sincronização online quando houver rede disponível. Além disso, o Dendem também conta com a possibilidade de acesso coletivo a protocolos por pesquisadores, o que favorece o compartilhamento de conhecimento dentro do setor de pesquisa da Natura.

## 📝 LINK

Clique <a href="https://www.linkedin.com/in/victorbarq/">AQUI</a> para ver o projeto funcionando.

## 📁 Estrutura de pastas

|--> backend<br>
  &emsp;| --> src <br>
|--> documentacao<br>
  &emsp;| --> inteli.png <br>
|--> documentos<br>
  &emsp;|--> WAD - Documento Aplicação Web - ECOmigo.pdf<br>
|--> frontend<br>
  &emsp;| --> frontend<br>
  &emsp;| --> src</br>
  &emsp;| --> public</br>
|--> modelosrelacionais</br>
  &emsp;| --> mfisico.db</br>
  &emsp;| --> mfisico;sqbpro</br>
|--> .gitignore</br>
|--> LICENSE</br>
| Projeto2 - Shortcut.lnk</br>
| README.md</br>

Dentre os arquivos presentes na raiz do projeto, definem-se:

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>documentos</b>: aqui estarão todos os documentos do projeto. Há também uma pasta denominada <b>outros</b> onde estão presentes aqueles documentos complementares ao <b>web application document</b>.

- <b>src</b>: nesta pasta encontra-se todo o código fonte do sistema (existem duas subpastas <b>backend</b> e <b>frontend</b> que contêm, respectivamente, o código do servidor e o código da página web).

## 💻 Configuração para desenvolvimento

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1.  Baixar e instalar o node.js:  [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3.  No modo administrador, abra o "prompt de comando" ou o "terminal" e, após,  abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm start
```
5. Agora você pode acessar a aplicação através do link http://localhost:1234/
6. O servidor está online.


```
Alunos inteli (remover essa observação do readme.md após leitura e execução):

1. Certifique-se que há um arquivo "package.json" na pasta backend do projeto.

2. Dentro deste arquivo, encontre a propriedade "scripts", e adicione um atributo de nome "start"
com o valor "node <CAMINHO_DO_ARQUIVO_DO_SERVIDOR>." Atenção: "<CAMINHO_DO_ARQUIVO_DO_SERVIDOR>" 
deve ser substituído pelo caminho para o arquivo principal da aplicação, utilizado para subir o
servidor. Por exemplo, se o arquivo utilizado para subir o servidor é "app.js", o atributo start
deve possuir o valor "node app.js".

3. No arquivo utilizado para subir a aplicação, defina a porta padrão de execução para "1234".
````

## 🗃 Histórico de lançamentos

## Commits on June 21, 2023
- cecigonca: comentarios, 8397c15912662582cd58f6590fb80f98aeecaa6c

## Commits on June 20, 2023
- cecigonca: Instrutores_README.md, 5acfb4d8e989e926ae8454b9ecd24f9aeff66b91

## Commits on June 14, 2023
- cecigonca: alterações_criaçãoprotocolo, 721b3ee9e87de3ca02d17b62b74c1b280b5408f8

## Commits on June 13, 2023
- antoniobfm: Merge pull request #22 from antoniobfm/main, 2e195a48ef17cc3986172673566c249f1ccd9b51
- antoniobfm: Fixed flickering & other updates, 4aa0a16385d54e57e8d582752cf0cf41eab4673c

## Commits on June 11, 2023
- otavioluigi07: Multiple updates to README.md, 43fbf6af44ff72afbd93a69341e51044d83e9251

## Commits on June 8, 2023
- RaiDeOliveira: Update WAD - Documento Aplicação Web - ECOmigo.pdf, 44121f0e26844af1691707610599c262bbe0a95b
- antoniobfm: Merge pull request #21 from antoniobfm/main, 15ba08c7fe55a930ce93a1c7103834a453f0a270
- antoniobfm: Merge remote-tracking branch 'upstream/main', 1271c717a1e3ba7bcfc9ddebcb8a3761923708c7
- antoniobfm: Bug fixes and implemented export, af959ba6994ebc0e56b000289dc5bf7f550ae442

## Commits on June 7, 2023
- RaiDeOliveira: Update WAD - Artefato 11, bfa5911d64d3cf795ca279095eb26a4adcdfbeb4

## Commits on June 6, 2023
- cecigonca: ajuste_nomeprotocolo, d764c7c86276d3684b45efbf7365dca42707b882
- cecigonca: login-protocolo, 354b8ad0d28edea1697a2099d37f6b2f491c2c99
- cecigonca: atualizacao_login, d35c833ec2bb34a13a4e11422c5823b3715174bb
- antoniobfm: Merge pull request #20 from antoniobfm/main, eaf8c9c5be4d95fab9a57c6ceaeec55636758a0b
- antoniobfm: Merge remote-tracking branch 'upstream/main', 0fa25f14fe8b4a976ece204f03f2a3f7cb6f3181
- antoniobfm: Updated List to be clickable, 95d50ae60276fdfb10a16c90575a12db3d1ce8ea

## Commits em 6 de Junho, 2023
- otavioluigi07: Merge da solicitação pull #19 de otavioluigi07/main, e6a868cd9fc822895407859715f666b2783bc7b7
- otavioluigi07: exportarcoletas_Projeto, 3f5a14ff2f4425811d3c68ea9432001a12f0ed70

## Commits em 5 de Junho, 2023
- antoniobfm: Merge da solicitação pull #18 de antoniobfm/main, 8ddfa224b0635fb61f8d6021a5aefddaeb548b2a
- antoniobfm: Merge da branch 'upstream/main' para Antonio, e04e28825737c4baac2b98ed8605afd6a91dc8fe
- antoniobfm: Implementação de CreateNew Protocolo, f7140e15a023a170491946187e8f81c7c0d84c49

## Commits em 2 de Junho, 2023
- cecigonca: Linkedin Integrantes README.md, 896c4b36e79718993ca793fafb1b2506411b9489

## Commits em 1 de Junho, 2023
- RaiDeOliveira: Deletar GDD - Grupo 1.docx, 29da4e93c2703611f3a936def266c1511d81bc07
- RaiDeOliveira: upload docx, dce05020f44e0ede883f644f9d400f60888cd260

## Commits em 31 de Maio, 2023
- antoniobfm: Merge da solicitação pull #16 de antoniobfm/Antonio, ffb2db24c72f4593bf18465dd9b26edcecbedd03
- antoniobfm: Implementado Lista Protocolos, 6f06b601d7cb4067adb4adc5d95ddaebc6263fec
- antoniobfm: Merge da solicitação pull #15 de antoniobfm/Antonio, 6f9b826bd48326e7c1cc93d1c96b35069b929949
- antoniobfm: Comentado Botão, 69980d61ede998fce26f93123d8da062451c6e9d
- antoniobfm: Merge da solicitação pull #14 de antoniobfm/main, 132903997a77370f97da4fd6c7941571bdd16d4c

## Commits em 29 de Maio, 2023
- antoniobfm: Implementado lista de protocolos e solicitação ao endpoint, 08a4a88300908e3de43da2bd07faa0e2b227fc79
- antoniobfm: Atualização index.js, 46a3107f0edf02cc17dc5db02f1de8bc40e09a69
- antoniobfm: Adicionado mais comentários, e4216c11e5263e1fd790d02248aa0dc9443f12af
- antoniobfm: Merge da solicitação pull #13 de antoniobfm/main, c6790d62c911453402494aa30bb6db36f577ef0f
- antoniobfm: Deletado Create Account e Comentado ExportSamples, b99b7146d25407cff3b6ea5778f0496c6cdbb271
- joaopedrobrandao: Atualizacao_Sem7, 0faad02e5387ff8d46cb2bb21a6705788f4cb85d
- joaopedrobrandao: Merge da solicitação pull #12 de antoniobfm/main, 753976ab76b04c858a7c943986cb9fb56c0eb933

## Commits em 28 de Maio, 2023
- RaiDeOliveira: att WAD, eef9d7240c9e14c1ddc3a2a7aa6b2c8325ebe8a7

## Commits em 26 de Maio, 2023
- antoniobfm: Implementado Lista Protocolos, 6bcd784ad44ee347303e95910b6e0c827df7a594
- antoniobfm: Implementado Front, ed1cc4c02c0d6700b81ca3573eba5adbf185c161

## Commits em 24 de Maio, 2023
- antoniobfm: Implementação inicial do nosso frontend, 5d26bc189e7c2f6f8ae8fc0a81cfad2270be0011

## Commits em 23 de Maio, 2023
- antoniobfm: Merge da solicitação pull #11 de 2023M2T7-Inteli/revert-8-revert-7-LuigiOt..., f328b6817c05a39a1828e60edbd214c475eb419b
- antoniobfm: Revert "Revert "menususpenso_projetoDendem"", d071bb4896cef49aa38012acdf9c48adbce245f4
- antoniobfm: Merge da solicitação pull #10 de otavioluigi07/LuigiOtavio, 6ba2eeb2c6907c9685b88cea176254f2ccc99d72
- otavioluigi07: menususpenso_projetoDendem, 0378c5b43fc9dd2840a89f69255261ff4c3a9391
- antoniobfm: Merge da solicitação pull #8 de 2023M2T7-Inteli/revert-7-LuigiOtavio, 86687c0fbedf4e9d6903cd15c512f4c12b1cce45
- antoniobfm: Revert "menususpenso_projetoDendem", b957f6dd322a0ee8425db692c0e27f7e8255cb79
- antoniobfm: Merge da solicitação pull #7 de otavioluigi07/LuigiOtavio, beca89063d90134fbc697361cc7792bcfa4869a6
- otavioluigi07: menususpenso_projetoDendem, b1cee4f556f509c639bb23692ae94f6b25b68dcc

## Commits em 19 de Maio, 2023 por antoniobfm
- Merge da solicitação pull #6 de antoniobfm/main, aeebfa524751075e3496983cf96979b8d24032f7
- Deletado duplicado, 53b1c3ea56c6d56e146de8bc12e1d31372d56c0f

## Commits em 15 de Maio, 2023 por RaiDeOliveira
- Merge da solicitação pull #5 de FelipeBragaInteli/patch-2, 411f999a69030b5397acf2c72631ae1c5666c0ac

### Commits on 15/05/2023 by RaiDeOliveira
- Updated README.md, da05d82ce9f4eca8651ce7752107497de73f31b2
- Updated README.md, 5cb3889062352941259fbd04bff34f6965dccd12

### Commits on 13/05/2023 by RaiDeOliveira
- Atualização do WAD e do backend, e1cebcb288a94bc62baf802d5b15328974235e93

### Commits on 12/05/2023 by RaiDeOliveira
- Updated README.md, 004b6d2d6f465f1ae791b33f3c0ee7cec0a2a4ac

### Commits 10/05/2023 
- cecigonca: Merged pull request #3 from antoniobfm/main, 70e202879f3a4d6532a3e45f80d4aa43e626ac2f
- antoniobfm: Separated usecases from controllers, 96dafd1ebd468cf2d5c48d77106a543cde99161a
- cecigonca: Merged pull request #2 from antoniobfm/main, 49e8ac1cb9a61149b1dcaf7779b24ab9973015a9
- antoniobfm: Organized project structure, connected routes and fixed errors, 5e98392100e9d1fee2d44a7f1ac5421b91fa8942

### Commits 09/052023
- cecigonca: Merged pull request #1 from otavioluigi07/LuigiOtavio, 902aa310641ca08a9253400cbee58b76137ecbda
- otavioluigi07: primeirocomitt_backend, bf1674a1a453ad8923abf3a6c4f9564795452dc5

### Commits on 08/05/2023 by RaiDeOliveira
- Updated README.md (multiple times), b72ed4c0060a848c5cc6882d317e7bd4be311687 (last one of the sequence)
- cecigonca: modelo físico (versão 1), a3698b4e336771e90ef912fc7276f06fdbd80391

### Commits on 02/05/2023 by RaiDeOliveira
- Merged branch 'main' of https://github.com/2023M2T7-Inteli/Projeto2, 2907f99abf63d7666620e748ae32e07f242704cc
- att nome arquivo WAD, da0047107e719f02f4ab17972406e67aad1c64b1
- Updated README.md (multiple times), aba478fcbfa167aeba504589c2fb7afbab50a1a2
- Upload WAD, 7a61bfcdb392af2ecb62569cebceea15b4af4d58

## 📋 Licença/License
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="http://Antônio Bahia Fonseca Moraes Cecília Gio Alonso Gonçalves Felipe Morita de Almeida Braga João Pedro Brandão de Moura Laura Padilha Bueno Luigi Otávio Neves Macedo Raí de Oliveira Cajé">DEMDEM</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M2T7-Inteli/Projeto2">INTELI, Antônio Bahia Fonseca Moraes, Cecília Gio Alonso Gonçalves, Felipe Morita de Almeida Braga, João Pedro Brandão de Moura, Laura Padilha Bueno, Luigi Otávio Neves Macedo, Raí de Oliveira Cajé</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

<a href="https://drive.google.com/file/d/1hXWLHUhjBkPVuGqeE2LZKozFntnJZzlx/view">Tutorial</a>

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Intelihub/Template_M2/">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.yggbrasil.com.br/vr">Inteli, Nome do integrante 1, Nome do integrante 2, Nome do integrante 3, Nome do integrante 4, Nome do integrante 5, Nome do integrante 6, Nome do integrante 7</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>

