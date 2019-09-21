import React, {Component} from "react";
import {fetchall} from "../../RestFunctions"
import TaskItem from "./TaskItem"
import "./TaskItem.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [
                               {
                               body: {
                               content1: "Puut sitovat hiilidioksidia ja kompensoivat siten päästöjämme.",
                               content2: "Puut sitovat hiiltä, viilentävät maapalloa ja rauhoittavat meitä ihmisiä. Yksi metsähehtaari sitoo 15 tonnia hiilidioksidia ja vapauttaa ilmakehään 10 tonnia happea joka vuosi. Jos istutat puun suojaamaan kotiasi auringonpaisteelta kesäisin ja tarjoamaan tuulensuojaa talvella, vähennät hiilidioksidipäästöjäsi ja mielesi rauhoittuu.",
                               rating: "135"
                               },
                               _id: "5d7e29fb6927b7a29cfda449",
                               title: "Istuta puu",
                               createdAt: "2019-09-15T12:09:31.009Z",
                               updatedAt: "2019-09-15T12:09:31.009Z",
                               __v: 0
                               },
                               {
                               body: {
                               content1: "Kaupungissa asuminen on tiiviimpää ja palvelut ovat todennäköisesti sinua lähempänä.",
                               content2: "Kaupungissa asuminen mahdollistaa kestävämmän elämäntavan omaksumisen helpommin. Tiiviissä kaupunkirakenteessa kaikki tarvittava on todennäköisesti lähellä ja liikkuminen vähenee. Kaupungeissa suuri joukko kotitalouksia käyttää samoja resursseja, joten niiden tuottamiseen kuluu vähemmän energiaa ja päästöt vähenevät.",
                               rating: "4500"
                               },
                               _id: "5d7e2a616927b7a29cfda44a",
                               title: "Muuta kaupunkiin",
                               createdAt: "2019-09-15T12:11:13.122Z",
                               updatedAt: "2019-09-15T12:11:13.122Z",
                               __v: 0
                               },
                               {
                               body: {
                               content1: "Valitse metro auton sijaan siellä, missä se on mahdollista.",
                               content2: "Täysi metrojunallinen voi poistaa teiltä yli 2 000 autoa. Jos vaihdat autosi julkisiin liikennevälineisiin edes kerran viikossa, saat aikaan jo suuren muutoksen.",
                               rating: "810"
                               },
                               _id: "5d7e2a9e6927b7a29cfda44b",
                               title: "Mene metrolla",
                               createdAt: "2019-09-15T12:12:14.925Z",
                               updatedAt: "2019-09-15T12:12:14.925Z",
                               __v: 0
                               },
                               {
                               body: {
                               content1: "Käytä täytettävää juomapulloa vähentääksesi muovijätettä.",
                               content2: "Jos tarvitset kyytiä tai voit sellaisen tarjota, netissä on useita sivustoja, joiden avulla kyydit ja niiden tarvitsijat löytävät toisensa. Ehdota kimppakyytejä myös esimerkiksi työmatkoillesi, lasten harrastuksiin kuskaamiseen tai vaikka kauppareissulle naapurin kanssa",
                               rating: "10"
                               },
                               _id: "5d7e3d11913858c200878344",
                               title: "Täytä juomapullosi",
                               createdAt: "2019-09-15T13:30:57.187Z",
                               updatedAt: "2019-09-15T13:30:57.187Z",
                               __v: 0
                               },
                               {
                               body: {
                               content1: "Valitse mahdollisuuksien mukaan lähiruokaa ja poikkea lähimpään maatilamyymälään.",
                               content2: "Tuoretavarat matkustavat keskimäärin 2 415 km tuotantoalueelta lautasellemme. Jopa 30% teillä kulkevista ajoneuvoista kuljettaa elintarvikkeita, joten ruuan saaminen koteihimme aiheuttaa suuret päästöt. Kannattaa siis kiinnittää huomiota siihen, kuinka pitkän matkan ruokasi tekee. Maatilatuotteita voi olla mahdollista ostaa suoraan tuottajilta tai voit liittyä lähiruokaa toimittavaan ruokarinkiin esimerkiksi facebookissa.",
                               rating: "1500"
                               },
                               _id: "5d7e3d4f913858c200878345",
                               title: "Osta lähellä tuotettua ruokaa",
                               createdAt: "2019-09-15T13:31:59.415Z",
                               updatedAt: "2019-09-15T13:31:59.415Z",
                               __v: 0
                               },
                               {
                               body: {
                               content1: "Siirry paperisesta lehdestä verkkolehteen",
                               content2: "Yhteen tonniin sanomalehtiä kuluu saman verran energiaa kuin eurooppalaiseen kolmen huoneen asuntoon vuodessa. Yhden ihmisen vuoden lehtien lukemisesta aiheutuu 270 kg hiilidioksidipäästöt, kun taas verkkouutisten lukemisessa päästöt ovat vain 5 kg vuodessa.",
                               rating: "265"
                               },
                               _id: "5d7e3db3913858c200878346",
                               title: "Lue lehtesi verkossa",
                               createdAt: "2019-09-15T13:33:39.260Z",
                               updatedAt: "2019-09-15T13:33:39.260Z",
                               __v: 0
                               }],
        displayedTasks: [],
        search: false};
    }

    searchHandler(event) {
        this.setState({search: true});
        let search = event.target.value.toLowerCase(),
            displayedTasks = this.state.tasks.filter((task) => {
                let searchValue = task.title.toLowerCase();
                return searchValue.indexOf(search) !== -1;
            });
        this.setState({
            displayedTasks: displayedTasks
        })
    }

    componentDidMount() {
        //this.getAll();
    }


    /*getAll() {
        fetchall(this.allFetched)
    }

    //sets fetched tasks to this.state
    allFetched = (data) => {
        this.setState({tasks: data});
    };*/

    render() {
      if(this.state.tasks.length > 0) {
         if(this.state.search === false) {
            return (
                <div>
                    <h2 className="taskcomponent">Esimerkkejä mahdollisista ilmastoteoista:</h2>
                    <p className="header-text">Täältä löydät kätevästi kaikki ilmastoteot.<br/></p><br/>
                    <input type="text" className="search" placeholder="Hae tekoja" onChange={this.searchHandler.bind(this)}/><br/>
                    <TaskItem tasks={this.state.tasks}>
                    </TaskItem>
                </div>

            )
        } else {
            return (
                <div>
                    <h2 className="taskcomponent" >Esimerkkejä mahdollisista ilmastoteoista:</h2>
                    <input type="text" className="search" placeholder="Hae tekoja" onChange={this.searchHandler.bind(this)}/><br/><br/>
                    <TaskItem tasks={this.state.displayedTasks}></TaskItem>
                </div>
            )
        }
    } else {
                                  return (
                                          <div>
                    <h2 className="taskcomponent">Esimerkkejä mahdollisista ilmastoteoista:</h2>
                    <p className="header-text">Täältä löydät kätevästi kaikki ilmastoteot.<br/></p><br/>
                    <input type="text" className="search" placeholder="Hae tekoja" onChange={this.searchHandler.bind(this)}/><br/>
                                                                     <br/>
                                                                        <div>
                                                                            <div className="container-fluid tausta-2">
                                                                                <Card className="infocard">
                                                                                    <CardContent>
                                                                                    <br/>
                                                                                    <br/>
                                                                                    <br/>
                                                                                    <h1>Tietokantaan ei juuri nyt saada yhteyttä</h1>
                                                                                        <br/>
                                                                                        <br/>
                                                                                        <br/>
                                                                                        <br/>
                                                                                    </CardContent>
                                                                                </Card>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                  )}
    }

}

export default TasksList;