import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Typography />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
