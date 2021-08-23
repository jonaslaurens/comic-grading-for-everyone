import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { HiCheck } from 'react-icons/hi';
import useGradeStore from '../store/gradingStore';

const ButtonGroupStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 1150px) {
    margin-top: 15px;
  }

  #grade {
    background-color: var(--green);
    outline: var(--green);
    border-color: var(--green);
  }

  button {
    margin: 0 15px;
  }
`;

const DefectNavigation = ({ history }) => {
  const {
    comicDefects,
    page,
    increasePage,
    decreasePage,
    calculateGrade,
    restartProcess,
    skipToLast,
  } = useGradeStore((state) => state);

  const handleOnGradeClick = () => {
    calculateGrade();
    history.push('/result');
  };

  return (
    <ButtonGroupStyles>
      {page >= 1 && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<IoIosArrowBack />}
          className="cga-button"
          onClick={decreasePage}
        >
          Prev
        </Button>
      )}
      {page === comicDefects.length - 1 ? (
        <Button
          id="grade"
          variant="contained"
          color="primary"
          endIcon={<HiCheck />}
          className="cga-button"
          onClick={handleOnGradeClick}
        >
          Grade
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          endIcon={<IoIosArrowForward />}
          className="cga-button"
          onClick={increasePage}
        >
          Next
        </Button>
      )}
      {/* <Button variant="contained" color="secondary" onClick={restartProcess}>
        Restart
      </Button>
      <Button variant="contained" color="secondary" onClick={skipToLast}>
        SKIP
      </Button> */}
    </ButtonGroupStyles>
  );
};

DefectNavigation.propTypes = {
  history: PropTypes.object,
};

export default DefectNavigation;
