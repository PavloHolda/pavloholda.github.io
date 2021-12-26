const CharItem = ({char, onCharSelected}) => {
    return(
        <li className="char__item" onClick={() => onCharSelected(char.id)}>
            <img src={char.thumbnail} alt={char.name}/>
            <div className="char__name">{char.name}</div>
        </li>
    )
}

export default CharItem;