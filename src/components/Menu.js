import React, { Component } from "react";




class Menu extends Component {
    constructor() {
        super()
        this.state = { estado: true, primeiroNome: "", ultimoNome: "", idade: "", sexo: "", empregado: "", ordenado: "" };
        this.handleclick = this.handleclick.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.handlealerta = this.handlealerta.bind(this)
    }
    handlechange(event) {
        this.setState({
            // primeiroNome: event.target.value,
            //ultimoNome: event.target.value
            [event.target.name]: event.target.value  // altera o valor  para cada nome de cada elemento  
        })
    }

    handleclick() {

        this.setState({ estado: false })
    }

    handlealerta() {

        alert("Dados Inseridos com Sucesso!")
    }

    render() {

        if (this.state.estado === true) {
            return (
                <div className="menu">

                    <button onClick={this.handleclick}>Pedidos de Ajuda</button>

                </div>
            );
        }
        else {
            return (
                <div className="main">
                    <form>
                        <h1>Dados para efetuar pedido </h1>
                        <h3>Primeiro Nome : </h3>
                        <input type="text" placeholder="Digite..." name="primeiroNome" onChange={this.handlechange}></input>

                        <br />
                        <h3>Ultimo Nome : </h3>
                        <input type="text" placeholder="Digite..." name="ultimoNome" onChange={this.handlechange}></input>
                        <h3>Sexo : </h3>
                        <label>
                            <input type="radio" name="sexo" value="Masculino" checked={this.state.sexo === "Masculino"} onChange={this.handlechange}></input>
                            Masculino
                        </label>
                        <label>
                            <input type="radio" name="sexo" value="Feminino" checked={this.state.sexo === "Feminino"} onChange={this.handlechange}></input>
                            Feminino
                        </label>
                        <h3>Está empregado ? </h3>
                        <label>
                            <input type="radio" name="empregado" value="Sim" checked={this.state.empregado === "Sim"} onChange={this.handlechange}></input>
                            Sim
                        </label>
                        <label>
                            <input type="radio" name="empregado" value="Não" checked={this.state.empregado === "Não"} onChange={this.handlechange}></input>
                            Não
                        </label> {/* condição ternária para revelar a inputbox "ordenado " caso esteja empregado*/}
                        {this.state.empregado === "Sim" ? <label><br /> Ordenado Mensal:
                        <input type="text" placeholder="Digite..." name="ordenado" onChange={this.handlechange}></input>

                        </label>
                            : null}
                        <br />
                        <button name="submeter" onClick={this.handlealerta}>Submeter Dados</button>
                    </form>
                </div>);
        }




    }
}


export default Menu;