import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div>
    404! - <Link to='/'>Log again</Link>
  </div>
);

export default NotFound;