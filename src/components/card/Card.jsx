import React, { Component } from 'react'
import Axios from 'axios';
import { Card, Image, Button } from 'semantic-ui-react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../App'

export default class CardTech extends Component {

    state = {
        data: []
    }

    getData = () => {
        Axios
            .get('https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15')
            .then(res => {
                console.log(res, '>>>>>>>>>>>>>>>>>  INI HASIL GET API ')
                this.setState({
                    data: res.data.posts
                })
                console.log(this.state.data, '>>>>>>>>>>>>>>>>>  INI STATE DATA YANG BERISI POSTS ')
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>

                        {this.state.data.map(datum => {
                            return (

                                <Col sm="4">
                                    <Card>
                                        <Image src={datum.seo.image} />
                                        <Card.Content>
                                            <Card.Header>{datum.seo.title}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>Joined in 2015</span>
                                            </Card.Meta>
                                            <Card.Description>{datum.seo.description}</Card.Description>
                                            <br />
                                            <Link to={`/${datum.slug}`}>
                                                <Button className="App" inverted color='green'>
                                                    Read more...
                                            </Button>
                                            </Link>
                                        </Card.Content>
                                    </Card>
                                    <br />
                                </Col>

                            )
                        })}
                    </Row>
                </Container>




            </div>
        )
    }
}
