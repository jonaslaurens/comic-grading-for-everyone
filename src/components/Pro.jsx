import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useEffect, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useGradeStore from '../store/gradingStore';
import Defects from './Defects';

const ProStyles = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 0 30px;
  position: relative;

  #grade {
    margin-top: 25px;
  }
`;

const Pro = ({ history }) => {
  const { categories, calculateGrade, comicDefects, setPage, page } =
    useGradeStore((state) => state);

  const [categoryName, setCategoryName] = useState('');

  const handleOnGradeClick = () => {
    calculateGrade();
    history.push('/result');
  };

  useEffect(() => {
    if (categoryName !== '') {
      setPage(
        categories.findIndex((category) => category.name === categoryName)
      );
    }
  }, [categoryName]);

  return (
    <ProStyles>
      <Autocomplete
        id="combo-box-demo"
        options={categories}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        onInputChange={(event, chosenCategory) => {
          setCategoryName(chosenCategory);
        }}
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} label="Category" variant="outlined" />
        )}
      />
      <Defects defects={comicDefects[page].defects} />
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
    </ProStyles>
  );
};

Pro.propTypes = {
  history: PropTypes.object,
};

export default Pro;
