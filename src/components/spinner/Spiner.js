import logo from '../../resources/img/Iphone-spinner-2.gif'

const Spinner = () => {
    const inlileImg = {
        display: 'flex',
        margin: 0 + ' auto',
        alignSelf: 'center'
    }

    return(
        <img src={logo} style={inlileImg} alt="logo" ></img>
    )
}

export default Spinner;