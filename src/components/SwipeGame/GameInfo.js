import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./ItemDetailCards.css";

class GameInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid tausta-2">
                        {/*<div className="container text-center my-auto">*/}
                        <h1 className="header-header">Tervetuloa tekemään arjen ilmastovalintoja.</h1><br/>
                            <h3 className="header-text">Ohjeistus: </h3>
                        <h3 className="header-text">Peli antaa sinulle yksitellen arkipäivän haasteita.</h3>
                        <h3 className="header-text">Valitse niistä kyllä tai ei.</h3><br/>
                        <Card className="infocard">
                            <CardContent>
                                <p>Valitsemalla kyllä, tehtävä siirtyy omaan listaasi, mikäli olet kirjautunut.</p><br/>
                                <p>Valitsemalla ei tehtävät siirtyvät omaan hylättyjen listaasi, mutta ei hätää sen voi aina palauttaa sieltä valittuihin tekoihin.</p><br/>
                                <p> Vihreä palkki näyttää tekemisien valintojesi vaikutuksen hiilijalanjälkeesi.</p><br/>
                            <p>Tehtävien merkityksestä ja vaikuttavuudesta saat lisätietoa painalla kortin oikeassa alareunassa olevaa nuolta.</p>
                            </CardContent>
                        </Card>
                        <div>
                            <div className="game">
                                <a className="button-header" href="/thechoice">Siirry tästä tekemään valintoja!</a>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid tausta-2">
                    <footer className="footer">
                        <p className="text-muted small mb-0">
                            Copyright &copy; Team ClimateChoice 2018
                            {/*<Image src={ClimateChoice} circle width="10" height="10" />*/}
                        </p>
                        {/*</div>*/}
                    </footer>
                </div>
            </div>


        );
    }
}

export default GameInfo;