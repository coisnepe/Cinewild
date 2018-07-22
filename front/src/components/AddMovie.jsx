import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddMovie extends Component {
    state = {
        title : '',
        genre : '',
        duration : '',
        releasedate : '',
        actors: '',
        synopsis: '',
        rating: '',
        image: '',
        director: ''
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSumbit(e){
        console.log(`A film was submited ${JSON.stringify(this.state)}`);
        e.preventDefault();
        fetch("/api/movie/add", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state),
        })
            .then(res => res.json())
            .then(
                res => alert(res.message),
                err => alert(err.message)
            )
            this.setState({
                title : '',
                genre : '',
                duration : '',
                releasedate : '',
                actors: '',
                synopsis: '',
                rating: '',
                image: '',
                director: ''
            })
    }
    
    render() { 
        return ( 
            <div style={{width:'100vw', flexDirection:'column',textAlign:'center'}}>
                <p>Ajouter un film</p>
                <form onSubmit={this.handleSumbit.bind(this)} style={{width:'100vw', alignItem:'center',display:'flex',flexDirection:'column'}}>
                    <TextField name='title' type="text" placeholder='titre du film' value={this.state.title} onChange={this.handleChange.bind(this)}/>
                    <TextField name='genre' type="text" placeholder='genre du film' value={this.state.genre} onChange={this.handleChange.bind(this)}/>
                    <TextField name='duration' type="time" placeholder='durée' value={this.state.duration} onChange={this.handleChange.bind(this)}/>
                    <TextField name='releasedate' type="date" placeholder='date de sortie' value={this.state.releasedate} onChange={this.handleChange.bind(this)}/>
                    <TextField name='actors' type="text" placeholder='acteurs' value={this.state.actors} onChange={this.handleChange.bind(this)}/>
                    <TextField name='synopsis' type="text" placeholder='synopsis' value={this.state.synopsis} onChange={this.handleChange.bind(this)}/>
                    <TextField name='rating' type="number" placeholder='note' value={this.state.rating} onChange={this.handleChange.bind(this)}/>
                    <TextField name='image' type="text" placeholder="url de l'image" value={this.state.image} onChange={this.handleChange.bind(this)}/>
                    <TextField name='director' type="text" placeholder='Réalisateur' value={this.state.director} onChange={this.handleChange.bind(this)}/>
                    <Button type='submit'>Ajouter</Button>
                </form>
            </div>
        );
    }
}

export default AddMovie;