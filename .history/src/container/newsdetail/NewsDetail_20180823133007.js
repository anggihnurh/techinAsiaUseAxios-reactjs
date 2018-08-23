import React, { Component } from 'react'
import Axios from 'axios'
import '../../App'
import { Container, Row, Col } from 'reactstrap';
export default class NewsDetail extends Component {

    state = {
        data: null
    }

    //Fungsi mengambil data dari API dan ditampung ke state data
    getData = () => {
        Axios
            .get('https://id.techinasia.com/wp-json/techinasia/3.0/posts/' + this.props.match.params.slug)
            .then(res => {
                console.log(res, '>>>>>>> ')
                this.setState({
                    data: res.data
                })
            })
    }

    // Menjalakan fungsi getData pertama kali
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            {this.state.data == null ? (
                                <div className="App">Loading...</div>
                            ) :

                                (<div>
                                    <h2>{this.state.data.posts[0].title}</h2>
                                    <br />
                                    <div dangerouslySetInnerHTML={{ __html: this.state.data.posts[0].content }} />
                                </div>

                                )
                            }
                        </Col>
                    </Row>
                </Container>

            </div >
        )
    }
}
