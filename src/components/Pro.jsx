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

  const categoryList = categories.map((category) => category.name);

  const [categoryName, setCategoryName] = useState(categoryList[0]);
  const [categoryValue, setCategoryValue] = useState('');

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

  const handleInputChange = (event, value) => {
    if (value) {
      setCategoryName(value);
      setCategoryValue(value);
    } else {
      setCategoryName(categoryList[0]);
      setCategoryValue('');
    }
  };

  return (
    <ProStyles>
      <Autocomplete
        id="combo-box-demo"
        value={categoryValue}
        onChange={handleInputChange}
        style={{ width: 300 }}
        options={categoryList}
        defaultValue={categoryList[0]}
        getOptionSelected={(option) => option === categoryName}
        renderInput={(params) => (
          <TextField {...params} label="Defects" variant="outlined" />
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
