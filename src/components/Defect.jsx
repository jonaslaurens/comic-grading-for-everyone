import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useGradeStore from '../store/gradingStore';

const DefectsStyles = styled(motion.div)`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  font-size: 1em;
  padding: 0;
  margin: 40px;

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

const Defect = ({ defect }) => {
  const { checkItem } = useGradeStore((state) => state);

  return (
    <DefectsStyles
      className={defect.checked && 'selected'}
      onClick={() => checkItem(defect)}
      whileHover={{ scale: 1.2 }}
    >
      <img src={defect.image} alt={defect.name} />
      <p>{defect.name}</p>
    </DefectsStyles>
  );
};

Defect.propTypes = {
  defect: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    checked: PropTypes.bool,
  }),
};

export default Defect;
