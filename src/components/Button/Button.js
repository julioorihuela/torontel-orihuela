import './Button.css'

const Button = ({label, colorText='black', handleClick}) => {
//  , backgroundColor, colorText, handleClick
    return  (
    //  <button className="myButton" style={{backgroundColor, color:colorText}} onClick={handleClick}>{label}</button>
      <button className="myButton" style={{color:colorText}} onClick={handleClick}>{label}</button>

    )
}

export default Button