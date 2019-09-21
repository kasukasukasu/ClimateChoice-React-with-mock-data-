import React, {Component} from 'react';
import './header.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "../SwipeGame/ItemDetailCards.css";


class Header extends Component {
    render() {
        return(
            <div>
                        <div>
                            <div>
                                <div className="container-fluid tausta-2">
                                    <h1 className="header-header">Tervetuloa tekemään arjen ilmastovalintoja.</h1><br/>
                                    <h3 className="header-text">Peli antaa sinulle yksitellen arkipäivän haasteita.</h3><br/>
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
            </div>
        );
    }
}

class HeaderButtons extends Component {
    render() {
        if(this.props.authentication === true) {
            return (
                <div className="start-buttons">
                    <div className="read-more">
                        <a className="read-info-link" href="/info">Lue lisää hiilijalanjäljestä ja kestävistä valinnoista</a>
                    </div>
                    <div className="game">
                    <a className="button-header" href="/thechoiceinfo">Aloita valintojen tekeminen tästä!</a>
                    </div>
                </div>
            )
        } else {
            return (
            <div className="start-buttons">
                <div className="read-more">
                    <a className="read-info-link" href="/info">Lue lisää hiilijalanjäljestä ja kestävistä valinnoista</a>
                </div>
                <div className="game">
                    <a className="button-header" href="/login">Kirjaudu tästä sisään</a>
                </div>
            </div>
            )
        }
    }
}

export default Header;


/*                <div>
                      <div className="container-fluid tausta-1">

                      </div>
                      <br/>
                      <br/>
                      <div className="container-fluid tausta-2">
                              <h1 className="header-header">Climate Choice</h1>
                          <h2> Apunasi kestävämpään arkeen</h2><br/>
                          <h3 className="header-text">Climate Choice auttaa sinua tekemään kestävämpiä arjen ympäristövalintoja ja arvioi tekemisien valintojesi vaikutusta hiilijalanjälkeesi.</h3>
                          <br/><br/>
                         <HeaderButtons authentication={this.props.authentication}/>
                      </div>
                  </div>
                  <div className="container-fluid tausta-2">
                  <footer className="footer">
                          <p className="text-muted small mb-0">Copyright &copy; Team ClimateChoice 2018</p>
                  </footer>
                  </div>*/