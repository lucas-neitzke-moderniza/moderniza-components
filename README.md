# Moderniza Components

Repositório de componentes da moderniza.
**Node: 14.17.3**

## Documentação

[Documentação de componentes](/documentation/index.md)


### Melhorias

- [ ] Aceitar arquivos de estilo (.scss)
- [ ] Minificar os estilos (.css) do build

### Compatibilidade

Algumas funcionalidade podem não estar inclusas no projeto. Então verifique a compatibilidade abaixo:

- Não suporta é suportado `<></>`, utilize `''`, ou, `<React.Fragment></React.Fragment>`
- Não é suportado [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `objeto?.propriedade?.outra`


## Instalação da livraria

1. Execute o comando ```npm install moderniza-components@latest``` para instalar a livraria
2. Importe os estilos da moderniza `import 'moderniza-components/dist/index.css'`
3. **Tenha instalado no respositório que receberá o moderniza-components**:

   - "reactstrap": "9.0.1" <- (package.json)
   - "primeicons": "^6.0.1" <- (package.json)
   - "primereact": "^9.5.0" <- (package.json)
   - "react-scripts": "4.0.2" <- (package.json)
   - "react-dom": "^18.1.0" <- (package.json)
   - "react": "^18.1.0" <- (package.json)

## Utilização da livraria

Utilize a livraria desta maneira:

```js
/*
 * Caso esteja faltando estilos do reactstrap, importe o css como especificado em:
 * https://reactstrap.github.io/?path=/docs/home-installation--page
*/

// Importação de estilos de outras dependencias relacionadas
import "primereact/resources/primereact.min.css" // primereact base
import 'primeicons/primeicons.css' // icones primereact
import "primereact/resources/themes/lara-light-indigo/theme.css" // tema prime react

// Moderniza components abaixo
import 'moderniza-components/dist/index.css' // CSS
import { Dataview, Dumb } from 'moderniza-components' // Componentes
```

## Estrutura dos componentes

Estrutura de pasta adotada na livraria

### Estrutura básica

- **src/[nome-componente]**
  - index.js (arquivo principal do componente)
  - [nome-componente].css (arquivo principal de estilos)

### Estrutura avançada

- **src/[nome-componente]**
  - index.js (arquivo principal do componente)
  - [nome-componente].css (arquivo principal de estilos)
  - **src/[nome-componente]/model**
    - src/[nome-componente]/model/index.js <- export {a, b}
    - src/[nome-componente]/model/a.js <- export {a}
    - src/[nome-componente]/model/b.js <- export {b}
  - **src/[nome-componente]/view**
    - src/[nome-componente]/view/index.js <- export {view}
  - **src/[nome-componente]/controller**
    - src/[nome-componente]/controller/index.js <- export {a, b}
    - src/[nome-componente]/controller/a.js <- export {a}
    - src/[nome-componente]/controller/b.js <- export {b}
