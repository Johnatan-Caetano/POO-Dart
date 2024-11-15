
# Programação Orientada a Objetos e Dart

Este repositório é uma apresentação sobre Programação Orientada a Objetos (POO) usando a linguagem Dart. Ele contém uma introdução aos princípios de POO aplicados em Dart e um projeto desenvolvido em Flutter para ilustrar a aplicação prática desses conceitos.

## Índice

- [Visão Geral](#visão-geral)
- [Objetivos](#objetivos)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Executando o Projeto](#executando-o-projeto)
- [Arquitetura do Projeto em Flutter](#arquitetura-do-projeto-em-flutter)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este repositório foi criado para ilustrar os princípios básicos de POO, passando por toda a história, curiosidades, além de contar a história da linguagem de programação Dart e um projeto completo em Flutter que demonstra o uso de conceitos como encapsulamento, herança, polimorfismo e abstração.

## Objetivos

- Apresentar conceitos fundamentais de POO em Dart.
- Demonstrar como esses conceitos podem ser aplicados no desenvolvimento de aplicativos Flutter.
- Fornecer um exemplo prático de uma arquitetura de projeto Flutter organizada e modularizada.

## Estrutura do Repositório

- **apresentacao**: Contém todo o material de suporte para a introdução aos conceitos de POO em Dart.
- **app_financas**: Projeto em Flutter, onde os conceitos de POO são aplicados em uma estrutura real.

## Tecnologias Utilizadas

- **Dart**: Linguagem de programação usada para ensinar os princípios de POO.
- **Flutter**: Framework usado para desenvolver o projeto prático de exemplo.
- **GetIt**: Injeção de dependências no projeto Flutter.
- **MobX**: Gerenciamento de estado reativo no projeto Flutter.

## Configuração do Ambiente

1. Instale o [Flutter](https://flutter.dev/docs/get-started/install) (inclui o SDK do Dart).
2. Clone o repositório:
   ```bash
   git clone https://github.com/Johnatan-Caetano/POO-Dart.git
   ```
3. Navegue até o diretório do projeto:
   ```bash
   cd POO-Dart/projeto_flutter
   ```
4. Instale as dependências:
   ```bash
   flutter pub get
   ```

## Executando o Projeto

Para executar o projeto Flutter:

1. Certifique-se de que um dispositivo (emulador ou dispositivo físico) está configurado e conectado.
2. Execute o comando:
   ```bash
   flutter run
   ```

## Arquitetura do Projeto em Flutter

O projeto segue uma arquitetura organizada para facilitar a manutenção e expansão. Abaixo estão os principais diretórios e suas funções:

- **/lib**
    - **controllers**: Controladores responsáveis por gerenciar o estado dos dados e a lógica de negócios, utilizando o MobX e GetIt para a injeção de dependências.
    - **models**: Modelos de dados que representam as entidades da aplicação e contêm métodos de serialização, como `fromJson` e `toJson`.
    - **views**: Contém as telas da aplicação, organizadas em widgets com estrutura limpa para componentes reutilizáveis.
    - **widgets**: Componentes personalizados que são usados em diferentes partes da interface.
    - **services**: Serviços responsáveis por realizar operações de rede e gerenciar dados externos.
    - **utils**: Funções e constantes auxiliares para otimizar a estrutura e facilitar a reutilização de código.

## Contribuição

Para contribuir, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
