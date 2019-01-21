import React from "react";
import logo from '../img/logo.png';



class Header extends React.Component {
    render() {

        const data = new Date();
        const hora = data.getHours();
        let horaDoDia;
        // Apresentação de mensagem dinamica dependendo da hora 
        if (hora < 13 && hora > 6) {

            horaDoDia = "Bom Dia";
        }
        else if (hora >= 13 && hora < 20) {

            horaDoDia = " Boa Tarde";
        }
        else {
            horaDoDia = "Boa Noite";
        }
        return (
            <header className="header">

                <div className="logoCVP">
                    <img src={logo} alt="LogoCVP" height="65" width="220" />
                </div>

                <div className="saudacao">


                    <h1>{horaDoDia}</h1>

                </div>

            </header>



        );
    }
}



export default Header;