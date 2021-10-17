import errorGif from './error.gif'

const ErrorMessage = () => {
   return (
      // <img src={process.env.PUBLIC_URL + '/error.gif'} alt="#" /> // in case you need img from public folder
      <img style={{
         display: 'block',
         width: '250px',
         height: '250px',
         objectFit: 'contain',
         margin: '0 auto'
      }} src={errorGif} alt='error-gif' />
   )
}

export default ErrorMessage;
