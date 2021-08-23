import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerStyles = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};

  @media (min-width: 1150px) {
    width: 1140px;
  }
`;

const Container = ({ children, sectionClass }) => (
  <ContainerStyles className={sectionClass}>{children}</ContainerStyles>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  sectionClass: PropTypes.string,
};

export default Container;
