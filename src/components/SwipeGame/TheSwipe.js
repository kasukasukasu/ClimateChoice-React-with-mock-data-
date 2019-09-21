import React, {Component} from "react";
import {fetchall, fetchallchoices,} from "../../RestFunctions";
import SwipeMap from "./SwipeMap";
import './ItemDetailCards.css';
import GameHeader from "./GameHeader";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
var shuffle = require('shuffle-array');


class TheSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.user,
            authenticated: this.props.user,
            tasks: [
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
            index: 0,
            open: false,
            count: 0,
            percentage: 100,
            relations: [{choice:'', task: {title:'', content1: '', content2:'', rating: ''}}]
        }
    }

    componentDidMount() {
        //this.getAll();
    }

    /*getAll() {
        fetchall(this.allFetched)
    }

    //sets fetched tasks to this.state
    allFetched = (data) => {
    console.log(data, ' tuleeko kaikki data?')
        this.setState({tasks: data});
    };

    getAllRelations(datatasks) {
        fetchallchoices(this.allChoices.bind(this, datatasks))
    }*/

    allChoices(tasksdata, relationsdata) {
        var relations = relationsdata;
        var tasks;
        tasks = tasksdata;
        for (let i = 0; i < relations.length; i++) {
            let relation = relations[i];
            for (let j = 0; j < tasks.length; j++) {
                let task = tasks[j];
                if (relation.task.id === task.id && relation.user.uid === this.props.user) {
                    tasks.splice(j, 1);
                }
            }
        }
        this.allFetched(tasks);
    };

    getAllForCount() {
        if(this.props.authentication) {
            fetchallchoices(this.allchoicesFetched);
        } else {}
    }

    //sets fetched tasks to this.state
    allchoicesFetched = (data) => {
        if(data.length === 0) {
            this.setState({count: 0});
        } else {
            var count = 0;
            data.filter(addToList => {
                return addToList.choice === "1" && addToList.user.uid === this.props.user
            }).map(function (choice) {

                count += parseInt(choice.task.rating, 10);

            });
            var percentage = ((10300-count)/10300*100);
            this.setState({count: count, percentage: percentage});
        }
    };

    //sets fetched tasks to this.state
    allFetched = (data) => {
        shuffle(data);
        this.setState({tasks: data});
    };

    goToNext = (user_id, task, choice) => {
        this.setState({index: (this.state.index + 1) % this.state.tasks.length});
    };

    countingIfNotAuth(rating, choice) {
        var sum = this.state.count;
        if (choice === "1") {
            sum += parseInt(rating, 10);
        } else {
            sum += 0;
        }
        var percentage = ((10300-sum)/10300*100);
        this.setState({count: sum, percentage: percentage});

    }

    render() {
    if (this.state.tasks.length > 0) {
            if ( this.state.index + 1 !== this.state.tasks.length) {
                return (
                    <div className="theswipe">
                        <GameHeader count={this.state.count} percentage={this.state.percentage} authentication={this.props.authentication}/>
                        <SwipeMap item={this.state.tasks} index={this.state.index} user={this.props.user}
                                  goToNext={this.goToNext.bind(this)} authentication={this.props.authentication} counting={this.countingIfNotAuth.bind(this)}/>
                    </div>

                );
            } else {
                return (
                    <div className="stack-container">
                        <h1>Ei tällä hetkellä enempää haasteita,
                            ehdota meille helppoja arkipäivän ympäristöhaasteita</h1>
                        <p>Lähetä meille uusi haastevaihtoehto arvioitavaksi: teamclimatechoice@gmail.com
                        </p>
                    </div>
                );
            }
        } else {
                     return (
                                 <div>
                                                            <div>
                                                                <div className="container-fluid tausta-2">
                                                                                        <h1 className="header-header">Tervetuloa tekemään arjen ilmastovalintoja.</h1><br/>
                                                                                        <h3 className="header-text">Peli antaa sinulle yksitellen arkipäivän haasteita.</h3><br/>
                                                                                        <h3 className="header-text">Valitse niistä kyllä tai ei.</h3><br/>
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



                        );
        }


        }

}


export default TheSwipe;