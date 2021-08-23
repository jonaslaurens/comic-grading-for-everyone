import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@material-ui/core';
import useGradeStore from '../store/gradingStore';

const SelectProcessStyles = styled.main`
  width: 100%;
  height: 100%auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;

  @media (min-width: 500px) {
    padding: 0 50px;
  }

  @media (min-width: 800px) {
    height: calc(100vh - 56px);
    flex-direction: row;
    align-items: center;
  }

  .banger {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 80%;
  }

  .actions {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 15px 0;

    @media (min-width: 800px) {
      align-self: flex-end;
    }

    button:last-of-type {
      margin-left: 15px;
      background-color: transparent;
      color: var(--white);

      &:hover {
        background-color: var(--accentHover);
        color: var(--black);
      }
    }
  }
`;

const SelectProcess = ({ history }) => {
  const { setProcess } = useGradeStore((state) => state);

  const handleSelectProcess = (chosenProcess) => {
    if (chosenProcess === 'new') {
      setProcess('new');
      return history.push('/new');
    }

    setProcess('pro');
    return history.push('/pro');
  };

  return (
    <SelectProcessStyles>
      <div className="banger">
        <h1>Welcome Collector!</h1>
        <p>
          Ever wondered what <strong>condition</strong> your comic is in?
        </p>
        <p>
          What <strong>grade</strong> it would get if it would've been graded by
          CGC or CBCS?
        </p>
        <p>
          <strong>Now is Your chance!</strong>
        </p>
        <p>
          You can get an estimated grade by running through our process. Simply
          follow each step and select the condition fit to your comic
        </p>
        <div className="actions">
          <Button
            variant="contained"
            color="primary"
            className="cga-button"
            endIcon={<IoIosArrowForward />}
            onClick={() => handleSelectProcess('new')}
          >
            Grade Your Book
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="cga-button cga-button_outline"
            endIcon={<IoIosArrowForward />}
            onClick={() => handleSelectProcess('pro')}
          >
            Done this before?
          </Button>
        </div>
      </div>
    </SelectProcessStyles>
  );
};

SelectProcess.propTypes = {
  history: PropTypes.object,
};

export default SelectProcess;
