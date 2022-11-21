import P from 'prop-types';
import './style.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <Button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </Button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};