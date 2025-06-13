import { button } from '../../../styled-system/recipes';

function Button({ textButton, action, type }) {
  return (
    <button
      onClick={action}
      className={button({ variant: type })}
    >
      {textButton}
    </button>
  )
}

export default Button;
