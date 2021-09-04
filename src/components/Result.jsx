import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VscDebugRestart } from 'react-icons/vsc';
import useGradeStore from '../store/gradingStore';

const ResultStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const ResulstLabel = styled.div`
  width: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  text-align: left;

  @media (min-width: 900px) {
    width: 40%;
  }

  h4 {
    text-align: center;
  }
`;

const Results = styled.ul`
  margin-top: 30px;
  padding: 0 15px;
  align-self: flex-start;

  @media (min-width: 900px) {
    margin-top: 0;
  }

  li {
    list-style: none;
    text-align: left;
  }
`;

const Result = ({ history }) => {
  const { result, resultDefects, restartProcess } = useGradeStore(
    (state) => state
  );

  if (Object.keys(result).length === 0) {
    return <p>No Result</p>;
  }

  const { name, shortname, score } = result.grade;

  const handleResultReset = () => {
    restartProcess();
    history.push('/');
  };

  return (
    <ResultStyles>
      <ResulstLabel>
        <h2>Your Estimate Grade</h2>
        <p>Grade score: {score}</p>
        <p>Grade name: {name}</p>
        <p>Short name: {shortname}</p>
        <Button
          variant="contained"
          endIcon={<VscDebugRestart />}
          color="secondary"
          onClick={handleResultReset}
        >
          Restart
        </Button>
      </ResulstLabel>
      <Results>
        <h2>Defects</h2>
        {resultDefects.length > 0 ? (
          resultDefects.map((res) => (
            <li key={res.category}>
              <span>
                {res.category}: {res.defect}
              </span>
            </li>
          ))
        ) : (
          <p>None</p>
        )}
      </Results>
    </ResultStyles>
  );
};

Result.propTypes = {
  history: PropTypes.object,
};

export default Result;
