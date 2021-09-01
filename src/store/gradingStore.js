import create from 'zustand';
import produce from 'immer';
import { defects } from '../api/Seeds';
import { gradeNames } from '../api/grades';

export const immer = (config) => (set, get) =>
  config((fn) => set(produce(fn)), get);

const store = (set) => ({
  comicDefects: [...defects],
  grades: [...gradeNames],
  categories: defects.map((defect) => ({
    name: defect.name,
    id: defect._id,
  })),
  process: 'Home',
  page: 0,
  result: {},
  resultDefects: [],
  checkItem: (defect) =>
    set((state) => {
      const itemIndex = state.comicDefects[state.page].defects.findIndex(
        (item) => item.value === defect.value
      );

      const prevDefects = [...state.comicDefects];

      const prevDefect = state.comicDefects[state.page].defects.map(
        (categoryDefect) => ({
          ...categoryDefect,
          checked: false,
        })
      );

      prevDefect[itemIndex] = {
        ...prevDefect[itemIndex],
        checked: !prevDefect[itemIndex].checked,
      };

      prevDefects[state.page] = {
        ...prevDefects[state.page],
        defects: prevDefect,
      };

      return { comicDefects: prevDefects };
    }),
  setProcess: (chosenProcess) =>
    set((state) => {
      state.process = chosenProcess;
    }),
  increasePage: () =>
    set((state) => {
      if (state.page === defects.length - 1) return;
      return { page: state.page + 1 };
    }),
  setPage: (pageNumber) =>
    set((state) => {
      state.page = pageNumber;
    }),
  decreasePage: () =>
    set((state) => {
      if (state.page === 0) return;

      return { page: state.page - 1 };
    }),
  skipToLast: () =>
    set((state) => {
      state.page = 35;
    }),
  restartProcess: () =>
    set((state) => {
      // reset all checked items so that we start fresh
      const prevDefects = state.comicDefects.map((category) => ({
        ...category,
        defects: category.defects.map((defect) => ({
          ...defect,
          checked: false,
        })),
      }));

      // reset page to 0 cause we need to start from the beginning
      return {
        page: 0,
        comicDefects: prevDefects,
      };
    }),
  calculateGrade: () =>
    set((state) => {
      // get all selected values
      const gradePercentage = [];

      state.comicDefects.forEach((defect) => {
        // check if there is anything selected
        const hasDefects = defect.defects.filter(
          (item) => item.checked && item
        );

        // if there are no defects we push the top value to our gradePercentage array
        if (hasDefects.length === 0) {
          return gradePercentage.push(parseInt(defect.defects[0].value));
        }

        // find the index of the item that has been checked
        const itemIndex = defect.defects.findIndex(
          (item) => item.checked === true
        );

        // add the item to the gradePercentage array
        return gradePercentage.push(defect.defects[itemIndex].value);
      });

      // calculate the grade
      const calculatedGrade =
        gradePercentage.reduce((acc, val) => {
          if (val < acc) {
            // eslint-disable-next-line no-param-reassign
            acc = val;
          }
          return acc;
        }) / 10;

      // find grade name index
      const index = state.grades.findIndex((e) => e.score === calculatedGrade);

      // list defects
      const defRes = [];
      state.comicDefects.forEach((category) => {
        category.defects.forEach((defect) => {
          if (defect.checked) {
            const toDefectObject = {
              category: category.name,
              defect: defect.name,
            };
            defRes.push(toDefectObject);
          }
        });
      });

      const toObject = {
        grade: state.grades[index],
      };

      return { result: toObject, resultDefects: defRes };
    }),
});

const [useGradeStore] = create(immer(store));

export default useGradeStore;
