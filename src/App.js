import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/styles.scss';
import { 
    Jumbotron, 
    Card, 
    CardTitle, 
    CardText, 
    CardBody, 
} from 'reactstrap';
import Header from './components/Header';
import Player from './components/Player';
import { Carousel } from "react-responsive-carousel";

export default class App extends Component {

    shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)

    render() {
        return (
            <div>
                <Header />
                <div className="home">
                    <Jumbotron>
                        <h1 className="display-3">Bienvenido</h1>
                        <p className="lead">Este es un sitio para la clase de streaming</p>
                        <hr className="my-2" />
                        <p>En la parte de abajo encontrarás una transmisión de audio, de video y de radio (por confirmar). Además hay un pequeó carousel con imágenes. <br/> Si deseas ir a la versión del sitio en wordpress, da clic en el botón de abajo.</p>
                        <p className="lead">
                            <a href="http://jacobo.totoringo.com" target="_blank" className="btn btn-round btn-meet-me">
                                Ir a la versión de wordpress
                            </a>
                        </p>
                    </Jumbotron>
                    <div className="projects-label">
                        <center>
                            <h1>Transmisiones</h1>
                        </center>
                    </div>
                    <div className="projects">
                        {
                            this.props.cards.map((card, i) => 
                                <Card key={i} className={card.class} body inverse>
                                    <center>
                                        <Player 
                                            audioOnly={card.audioOnly}
                                            source={card.source}
                                        />
                                    </center>
                                    <CardBody>
                                        <CardTitle>{card.title}</CardTitle>
                                        <CardText>{card.description}</CardText>
                                    </CardBody>
                                </Card>
                            )
                        }
                    </div>
                    <div style={{ marginTop: 40 }} className="projects-label">
                        <center>
                            <h1>Medios</h1>
                        </center>
                    </div>
                    <div className="projects">
                        {
                            this.props.media.map((card, i) =>
                                <Card key={i} className={card.class} body inverse>
                                    <center>
                                        <Player
                                            audioOnly={card.audioOnly}
                                            source={card.source}
                                            youtube={card.youtube}
                                        />
                                    </center>
                                    <CardBody>
                                        <CardTitle>{card.title}</CardTitle>
                                        <CardText>{card.description}</CardText>
                                    </CardBody>
                                </Card>
                            )
                        }
                    </div>
                    <div style={{marginTop: 40}} className="projects-label">
                        <center>
                            <h1>Imágenes</h1>
                        </center>
                    </div>
                    <div className="projects">
                        <div style={{ marginTop: 20 }}/>
                        <Carousel showArrows={true}>
                            {
                                this.shuffleArray(this.props.images).map((img, i) => 
                                    <div key={i}>
                                        <img className="custom-img" src={img.src} />
                                        <p className="legend">{img.legend}</p>
                                    </div>                                    
                                )
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    cards: [
        {
            title: 'Streaming de música',
            source: 'http://radio.totoringo.com:8000/music',
            audioOnly: true,
            description: 'Los fines de semana (viernes y sábado) de 10:00pm a 11:00pm podrás dar clic en el repoductor para escuchar algo de música',
            class: 'iso-blade-card',
        },
        {
            title: 'Streaming de video',
            source: 'http://radio.totoringo.com:8000/videos',
            audioOnly: false,
            description: 'Los fines de semana (viernes y sábado) de 11:00pm a 11:40pm podrás dar clic en el repoductor ver algunos videos',
            class: 'coco-game-card',
        },
        {
            title: 'Streaming de radio',
            source: 'http://radio.totoringo.com:8000/live',
            audioOnly: true,
            description: 'El día 7 de marzo a las 21:50 horas se transmitirá un programa de radio en el que expreso porque esta última temporada de GoT no me emociona. A las 21:45 empezará la transmisión con un poco de música, solo se transmitirá una canción, después de eso, el programa debería empezar.',
            class: 'geriatron-card',
        },
    ],
    images: [
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/Captura-de-pantalla-2019-02-03-a-las-2.23.55.png",
            legend: 'Daydreaming @MSG 13/07/2018'
        },
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/Captura-de-pantalla-2019-02-03-a-las-2.29.48.jpg",
            legend: 'MSG entrance during the 4 Rdiohead\'s shows in 2018'
        },
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/Captura-de-pantalla-2019-02-03-a-las-2.30.03.jpg",
            legend: 'Waiting for Radiohead @MSG 13/07/2018'
        },
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/Captura-de-pantalla-2019-02-03-a-las-2.29.25.jpg",
            legend: 'The National Anthem @MSG 11/07/2018'
        },
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/Captura-de-pantalla-2019-02-03-a-las-2.23.38.png",
            legend: "The Gloaming @MSG 11/07/2018"
        },
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/Captura-de-pantalla-2019-02-03-a-las-2.22.22.png",
            legend: "Idioteque @MSG 14/07/2018"
        },
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/IMG_5428.jpg",
            legend: "All I Need @Estadio Nacional de Lima Perú 17/04/2018"
        },
        {
            src: "http://jacobo.totoringo.com/wp-content/uploads/2019/02/IMG_5434.jpg",
            legend: "You And Whoose Army? @Estadio Nacional de Lima Perú 17/04/2018"
        }
    ],
    media: [
        {
            title: 'Audio',
            source: 'http://jacobo.totoringo.com/wp-content/uploads/2019/02/Thom-Yorke-Suspirium-Live-from-Electric-Lady-Studios.mp3',
            audioOnly: true,
            description: 'Suspirium',
            class: 'iso-blade-card',
        },
        {
            title: 'Video',
            source: 'http://jacobo.totoringo.com/wp-content/uploads/2019/02/videoplayback.mp4',
            audioOnly: false,
            description: 'Glass Eyes @ Moda Center - PDX',
            class: 'coco-game-card',
        },
        {
            title: 'Video de pruebas (youtube)',
            source: 'g9hOfzYQzqk',
            audioOnly: false,
            description: 'Prueba de sitio',
            class: 'geriatron-card',
            youtube: true
        },
    ],
}
