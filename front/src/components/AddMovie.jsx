import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class AddMovie extends Component {
    state = {
        title : '',
        year : '',
        rated : '',
        released : '',
        runtime: '',
        genre : '',
        director : '',
        writer : '',
        actors : '',
        plot : '',
        language : '',
        country : '',
        awards : '',
        poster : '',
        metascore : '',
        imdbRating : '',
        imdbVotes : '',
        imdbID : '',
        type : '',
        response : ''
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSumbit(e){
        e.preventDefault();
        this.props.actions.postDatas("/api/movie/add", 'POST', this.state)
            .then(
                res => alert(JSON.stringify(this.props.res.message)),
                err => alert(JSON.stringify(this.props.error.message))
            )
            this.setState({
                title : '',
                year : '',
                rated : '',
                released : '',
                runtime: '',
                genre : '',
                director : '',
                writer : '',
                actors : '',
                plot : '',
                language : '',
                country : '',
                awards : '',
                poster : '',
                metascore : '',
                imdbRating : '',
                imdbVotes : '',
                imdbID : '',
                type : '',
                response : ''
            })
    }
    
    render() { 
        return ( 
            <div style={{width:'100vw', flexDirection:'column',textAlign:'center'}}>
                <p>Ajouter un film</p>
                <form onSubmit={this.handleSumbit.bind(this)} style={{width:'100vw', alignItem:'center',display:'flex',flexDirection:'column'}}>
                    <TextField name='title' type="text" placeholder='titre du film' value={this.state.title} onChange={this.handleChange.bind(this)}/>
                    <TextField name='year' type="text" placeholder='année de réalisation' value={this.state.year} onChange={this.handleChange.bind(this)}/>
                    <TextField name='rated' type="text" placeholder='durée' value={this.state.rated} onChange={this.handleChange.bind(this)}/>
                    <TextField name='released' type="text" placeholder='date de sortie' value={this.state.released} onChange={this.handleChange.bind(this)}/>
                    <TextField name='runtime' type="text" placeholder='acteurs' value={this.state.runtime} onChange={this.handleChange.bind(this)}/>
                    <TextField name='genre' type="text" placeholder='titre du film' value={this.state.genre} onChange={this.handleChange.bind(this)}/>
                    <TextField name='director' type="text" placeholder='genre du film' value={this.state.director} onChange={this.handleChange.bind(this)}/>
                    <TextField name='writer' type="text" placeholder='durée' value={this.state.writer} onChange={this.handleChange.bind(this)}/>
                    <TextField name='actors' type="text" placeholder='date de sortie' value={this.state.actors} onChange={this.handleChange.bind(this)}/>
                    <TextField name='plot' type="text" placeholder='acteurs' value={this.state.plot} onChange={this.handleChange.bind(this)}/>
                    <TextField name='language' type="text" placeholder='titre du film' value={this.state.language} onChange={this.handleChange.bind(this)}/>
                    <TextField name='country' type="text" placeholder='genre du film' value={this.state.country} onChange={this.handleChange.bind(this)}/>
                    <TextField name='awards' type="text" placeholder='durée' value={this.state.awards} onChange={this.handleChange.bind(this)}/>
                    <TextField name='poster' type="text" placeholder='date de sortie' value={this.state.poster} onChange={this.handleChange.bind(this)}/>
                    <TextField name='metascore' type="text" placeholder='acteurs' value={this.state.metascore} onChange={this.handleChange.bind(this)}/>
                    <TextField name='imdbRating' type="text" placeholder='titre du film' value={this.state.imdbRating} onChange={this.handleChange.bind(this)}/>
                    <TextField name='imdbVotes' type="text" placeholder='genre du film' value={this.state.imdbVotes} onChange={this.handleChange.bind(this)}/>
                    <TextField name='imdbID' type="text" placeholder='durée' value={this.state.imdbID} onChange={this.handleChange.bind(this)}/>
                    <TextField name='response' type="text" placeholder='resp' value={this.state.response} onChange={this.handleChange.bind(this)}/>
                    <TextField name='type' type="text" placeholder='durée' value={this.state.type} onChange={this.handleChange.bind(this)}/>
                    <Button type='submit'>Ajouter</Button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    res: state.postReducer.res,
    error: state.postReducer.error,
})

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddMovie);

