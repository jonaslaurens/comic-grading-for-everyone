import styled from 'styled-components';
import PropTypes from 'prop-types';
import Defect from './Defect';

const DefectsStyles = styled.div`
  --columns: 1fr;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-gap: 1em;
  grid-template-columns: var(--columns);
  min-height: calc(100vh - 237px);

  @media (min-width: 636px) {
    grid-template-columns: repeat(2, var(--columns));
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, var(--columns));
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, var(--columns));
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, var(--columns));
  }
`;

const Defects = ({ defects }) => (
  <DefectsStyles>
    {defects.map((defect) => (
      <Defect key={defect.value} defect={defect} />
    ))}
  </DefectsStyles>
);

Defects.propTypes = {
  defects: PropTypes.array,
};

export default Defects;
