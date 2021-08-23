import { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import useGradeStore from './store/gradingStore';

// components
import SelectProcess from './components/SelectProcess';
import DefectsPage from './components/DefectsPage';
import Result from './components/Result';
import Navbar from './components/Navbar';
import Pro from './components/Pro';

const App = ({ history }) => {
  const { process } = useGradeStore((state) => state);

  useEffect(() => {
    if (!process) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={SelectProcess} />
        <Route exact path="/new" component={DefectsPage} />
        <Route exact path="/pro" component={Pro} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default withRouter(App);
