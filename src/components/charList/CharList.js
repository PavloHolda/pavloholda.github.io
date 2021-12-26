import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import './charList.scss';
import CharItem from './charItem/CharItem.js'
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spiner';

class CharList extends Component {
    state = {
        char: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offSet: 210,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount = () => {
        this.onRequest();
    }

    onRequest = offSet => {
        this.onCharLoading();
        this.marvelService
            .getAllCharacters(offSet)
            .then(this.onChartLoaded)
            .catch(this.onError);
    }

    onCharLoading = () => {
        this.setState({newItemLoading: true});
    }

    onChartLoaded = newCharList => {
        let ended = false;

        if(newCharList.length < 9) {
            ended = true;
        }

        this.setState(({char, offSet}) => ({
            char: [...char, ...newCharList], 
            loading: false,
            newItemLoading: false,
            offSet: offSet + 9,
            charEnded: ended
        }));
    }

    onError = () => {
        this.setState({loading: false, error: true});
    }

    render() {
        const {char, loading, error, newItemLoading, offSet, charEnded} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;

        return (
            <div className="char__list">
                {spinner}
                {errorMessage}
                <ul className="char__grid">
                    {char.map((item, index) => {
                        return (
                            <CharItem key={item.id} char={item} onCharSelected={this.props.onCharSelected}/>
                        )
                    })}
                </ul>
                <button 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'npne' : 'block'}}
                    onClick={() => this.onRequest(offSet)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;