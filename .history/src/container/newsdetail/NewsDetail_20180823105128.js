import React, { Component } from 'react'
import Axios from 'axios'
import '../../App'
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

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>

                {this.state.data == null ? (
                    <div className="App">Loading...</div>
                ) : (<div dangerouslySetInnerHTML={{ __html: this.state.data.posts[0].content }} />)}
            </div >
        )
    }
}
