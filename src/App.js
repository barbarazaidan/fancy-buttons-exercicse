import React from 'react';
import './App.css';

// CHAMANDO FUNÇÃO FORA DA CLASSE

// function showClickBlue() {
//   console.log('clicou no azul!')
// }

// function showClickRed() {
//   console.log('clicou no vermelho!')
// }

// function showClickGreen() {
//   console.log('clicou no verde!')
// }

// class App extends React.Component {
//   render(){
//     return (
//       <>
//         <button className='blue' onClick={showClickBlue}>Azul</button>
//         <button className='red' onClick={showClickRed}>Vermelho</button>
//         <button className='green' onClick={showClickGreen}>Verde</button>
//         </>
//     );
//   }
// }

// ---------------------------------------------------------------------------

// CHAMANDO A FUNÇÃO DENTRO DA CLASSE E TESTANDO O THIS COMO UNDEFINED

// class App extends React.Component {
//   constructor() {
//     super()
//     console.log('Observando o constructor') // ele imprime sem o super() antes, mas o console mostra vários erros e não passa para a função render()
//   }

//   showClickBlue() { // esta função aparece na chave component do this
//     console.log('clicou no azul!')
//     console.log('este é o this: ', this) // o this dá undefined
//   }
//   render(){
//     console.log(this);
//     return (
//       <>
//         <button className='blue' onClick={this.showClickBlue}>Azul</button>
//         </>
//     );
//   }
// }

// ---------------------------------------------------------------------------

// VINCULANDO O THIS ÀS FUNÇÕES DENTRO DA CLASSE PARA QUE ELE DEIXE DE DAR UNDEFINED

// class App extends React.Component {
//   constructor() {
//     super()
//     console.log('Observando o constructor')
//     this.showClickBlue = this.showClickBlue.bind(this)
//     this.showClickRed = this.showClickRed.bind(this)
//     // this.showClickGreen = this.showClickBlue.bind(this) // se fizer isso, eu atribuo à função showClickGreen a função showClickBlue, então quando clico no botão verde, ele lê o código do azul.
//     this.showClickGreen = this.showClickGreen.bind(this)
//   }

//   showClickBlue() { 
//     console.log('clicou no azul!')
//     console.log('este é o this azul: ', this)
//     console.log(this.state) // o estado neste momento aparece como null
//   }

//   showClickRed() {
//     console.log('clicou no vermelho!')
//     console.log('este é o this vermelho: ', this)
//   }

//   showClickGreen() {
//     console.log('clicou no verde!')
//     console.log('este é o this verde: ', this)
//   }

//   render(){
//     console.log(this);
//     return (
//       <>
//         <button className='blue' onClick={this.showClickBlue}>Azul</button>
//         <button className='red' onClick={this.showClickRed}>Vermelho</button>
//         <button className='green' onClick={this.showClickGreen}>Verde</button>
//         </>
//     );
//   }
// }

// -------------------------------------------------------------------------------------------------------

// OBSERVANDO O ESTADO DO COMPONENTE, DANDO UM VALOR INICIAL E ATUALIZANDO ESSE VALOR PARA OUTRO FIXO

// class App extends React.Component {
//   constructor() {
//     super()
//     console.log('Observando o constructor')
//     this.showClickBlue = this.showClickBlue.bind(this)
//     this.showClickRed = this.showClickRed.bind(this)
//     this.showClickGreen = this.showClickGreen.bind(this)
//     // this.state = 2 // esta chave deve ser atribuída como um objeto ou como null. Se faço colocando apenas o 2 direto, aparece este erro no console: 'Warning: App.state: must be set to an object or null'.
//     this.state = {
//       numeroDeCliques: 0
//     }
//   }

//   showClickBlue() { 
//     console.log('clicou no azul!')
//     console.log('este é o this azul: ', this)
//     // o state roda no React como uma função assíncrona, portanto preciso fazer a atualização dos dados chamando uma função assíncrona, que aqui é o setState().
//     this.setState({
//       numeroDeCliques: 1 // desta forma o estado atualizado será sempre 1
//     })
//   }

//   showClickRed() {
//     console.log('clicou no vermelho!')
//     console.log('este é o this vermelho: ', this)
//   }

//   showClickGreen() {
//     console.log('clicou no verde!')
//     console.log('este é o this verde: ', this)
//   }

//   render(){
//     console.log('this do render: ', this);
//     return (
//       <>
//         <button className='blue' onClick={this.showClickBlue}>Azul</button>
//         <button className='red' onClick={this.showClickRed}>Vermelho</button>
//         <button className='green' onClick={this.showClickGreen}>Verde</button>
//         </>
//     );
//   }
// }

// -------------------------------------------------------------------------------------------------------

// ATUALIZANDO O VALOR DO ESTADO COM BASE NO ESTADO ANTERIOR

// class App extends React.Component {
//   constructor() {
//     super()
//     this.showClickBlue = this.showClickBlue.bind(this)
//     this.showClickRed = this.showClickRed.bind(this)
//     this.showClickGreen = this.showClickGreen.bind(this)
//     this.state = {
//       numeroDeCliques: 0
//     }
//   }

//   showClickBlue() { 
//     console.log('clicou no azul!')
//     console.log('este é o this azul: ', this)
//     this.setState((estadoAnterior) => {
//       console.log(estadoAnterior) // aqui loga o próprio objeto númeroDeCliques
//       console.log(estadoAnterior.numeroDeCliques) // aqui loga o número armazenado
//       return {numeroDeCliques: estadoAnterior.numeroDeCliques + 1}
//     })
//   }

//   showClickRed() {
//     console.log('clicou no vermelho!')
//     console.log('este é o this vermelho: ', this)
//   }

//   showClickGreen() {
//     console.log('clicou no verde!')
//     console.log('este é o this verde: ', this)
//   }

//   render(){
//     // console.log('this do render: ', this);
//     return (
//       <>
//         <button className='blue' onClick={this.showClickBlue}>{this.state.numeroDeCliques}</button>
//         <button className='red' onClick={this.showClickRed}>Vermelho</button>
//         <button className='green' onClick={this.showClickGreen}>Verde</button>
//         </>
//     );
//   }
// }

// -------------------------------------------------------------------------------------------------------

// ATUALIZANDO O VALOR DO ESTADO DE CADA BOTÃO

// class App extends React.Component {
//   constructor() {
//     super()
//     this.showClickBlue = this.showClickBlue.bind(this)
//     this.showClickRed = this.showClickRed.bind(this)
//     this.showClickGreen = this.showClickGreen.bind(this)
//     this.state = {
//       clicksBlue: 0,
//       clicksRed: 0,
//       clicksGreen: 0,
//     }
//   }

//   showClickBlue() { 
//     console.log('clicou no azul!')
//     console.log('este é o this azul: ', this)
//     this.setState((estadoAnterior) => {
//       console.log(estadoAnterior)
//       console.log('blue: ', estadoAnterior.clicksBlue)
//       return {clicksBlue: estadoAnterior.clicksBlue + 1}
//     })
//   }

//   showClickRed() {
//     console.log('clicou no vermelho!')
//     console.log('este é o this vermelho: ', this)
//     this.setState((estadoAnterior) => {
//       console.log(estadoAnterior)
//       console.log('red: ', estadoAnterior.clicksRed)
//       return {clicksRed: estadoAnterior.clicksRed + 1}
//     })
//   }

//   showClickGreen() {
//     console.log('clicou no verde!')
//     console.log('este é o this verde: ', this)
//     this.setState((estadoAnterior) => {
//       console.log(estadoAnterior)
//       console.log('green: ', estadoAnterior.clicksGreen)
//       return {clicksGreen: estadoAnterior.clicksGreen + 1}
//     })
//   }

//   render(){
//     console.log('this do render: ', this);
//     return (
//       <>
//         <button className='blue' onClick={this.showClickBlue}>{this.state.clicksBlue}</button>
//         <button className='red' onClick={this.showClickRed}>{this.state.clicksRed}</button>
//         <button className='green' onClick={this.showClickGreen}>{this.state.clicksGreen}</button>
//         </>
//     );
//   }
// }

// -------------------------------------------------------------------------------------------------------

// ATUALIZANDO O VALOR DO ESTADO DE CADA BOTÃO

class App extends React.Component {
  constructor() {
    super()
    this.showClickBlue = this.showClickBlue.bind(this)
    this.showClickRed = this.showClickRed.bind(this)
    this.showClickGreen = this.showClickGreen.bind(this)
    this.state = {
      clicksBlue: 0,
      clicksRed: 0,
      clicksGreen: 0,
    }
    this.changeBackground = this.changeBackground.bind(this)
  }

  showClickBlue() { 
    const { clicksBlue } = this.state;
    console.log('clicou no azul!')
    console.log('este é o this azul: ', this)
    this.setState((estadoAnterior) => (
      {clicksBlue: estadoAnterior.clicksBlue + 1}
    ))
  }

  showClickRed() {
    const { clicksRed } = this.state;
    console.log('clicou no vermelho!')
    console.log('este é o this vermelho: ', this)
    this.setState((estadoAnterior) => (
      {clicksRed: estadoAnterior.clicksRed + 1}
    ))
  }

  showClickGreen() {
    // const { clicksGreen } = this.state; // esta desestruturação fica deseatualizada
    // console.log('clicksGreen: ', clicksGreen)
    // console.log('clicou no verde!')
    console.log('este é o this verde: ', this) // aqui já fica com o valor do state atualizado
    console.log('este é o this.state verde: ', this.state) // aqui não fica atualizado, ele mostra o estado anterior
    this.setState((estadoAnterior) => ({
      clicksGreen: estadoAnterior.clicksGreen + 1
    }), 
    () => {
      const { clicksGreen } = this.state; // este console vai guardar o valor atualizado 
      console.log('clicksGreen: ', clicksGreen);
      // console.log(`Botão 3 ${this.changeBackground(clicksGreen)}`);
    });
  }

  changeBackground(number) {
    // console.log('number: ', number)
    if (number % 2 === 0) {
      return 'gray';
   } return 'green';
  }

  render(){
     console.log('this do render: ', this);
    const { clicksBlue, clicksGreen, clicksRed } = this.state;
    return (
      <>
        <button className='blue' onClick={this.showClickBlue}>{clicksBlue}</button>
        <button className='red' onClick={this.showClickRed}>{clicksRed}</button>
        <button 
          className='green'
          onClick={this.showClickGreen}
          style={ {backgroundColor: this.changeBackground(clicksGreen)} }
        >
          {clicksGreen}
        </button>
        </>
    );
  }
}

export default App;
