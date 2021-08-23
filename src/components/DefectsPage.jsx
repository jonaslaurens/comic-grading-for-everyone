import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { LinearProgress } from '@material-ui/core';
import useGradeStore from '../store/gradingStore';
import DefectNavigation from './DefectNavigation';
import Defects from './Defects';

const DefectsPageStyles = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: relative;

  @media (min-width: 1150px) {
    height: calc(100% - 210px);
  }
`;

const DefectsPage = ({ history }) => {
  const { comicDefects, page } = useGradeStore((state) => state);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <DefectsPageStyles key={page}>
          <motion.div
            animate={{
              opacity: 1,
              x: 0,
            }}
            initial={{
              opacity: 0,
              x: 50,
            }}
            exit={{
              opacity: 0,
              x: -50,
            }}
            transition={{ duration: 0.2, type: 'tween' }}
          >
            <h2>{comicDefects[page].name}</h2>
            <Defects defects={comicDefects[page].defects} />
          </motion.div>
          <DefectNavigation history={history} />
        </DefectsPageStyles>
      </AnimatePresence>
      <LinearProgress
        variant="determinate"
        className="progressbar"
        value={Math.ceil(page * 2.84)}
      />
    </>
  );
};

DefectsPage.propTypes = {
  history: PropTypes.object,
};

export default DefectsPage;
