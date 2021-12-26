import errorImg from './error.gif';

const ErrorMessage = () => {
    const errorImgStyle = {
        display: 'block',
        width: '250px',
        height: '250px',
        objectFit: 'contain',
        margin: '0 auto',
    }
    return (
        <img style={errorImgStyle} src={errorImg} alt="error"/>
    )
}

export default ErrorMessage;