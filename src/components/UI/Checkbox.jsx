import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckBoxStyles = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: -11px;
  margin-right: 16px;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;

  .base {
    color: rgba(0, 0, 0, 0.54);
    padding: 9px;
    flex: 0 0 auto;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;

    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;

    .label {
      width: 100%;
      display: flex;
      align-items: inherit;
      justify-content: inherit;

      input {
        top: 0;
        left: 0;
        width: 100%;
        cursor: inherit;
        height: 100%;
        margin: 0;
        opacity: 0;
        padding: 0;
        z-index: 1;
        position: absolute;
      }

      svg {
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        font-size: 1.5rem;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        flex-shrink: 0;
        user-select: none;
      }

      .ripple {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        position: absolute;
        border-radius: inherit;
        pointer-events: none;
      }
    }

    .label-text {
      font-size: 1rem;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      margin: 0;
    }
  }
`;

const Checkbox = ({ value, checked, onClick }) => {
  const pathNormal =
    'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z';

  const pathChecked =
    'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z';

  return (
    <CheckBoxStyles onClick={onClick}>
      <span className="base" aria-disabled="false">
        <span className="label">
          <input type="checkbox" data-indeterminate="false" />
          <svg
            className="checkbox-svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d={checked ? pathChecked : pathNormal} />
          </svg>
          <span className="ripple" />
        </span>
      </span>
      <span className="label-text">{value}</span>
    </CheckBoxStyles>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Checkbox;
