import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';

import { graphcms, QUERY_SLUG_CATEGORIES } from '../GraphQL/Queries';

const Header = () => {
  const [kategoris , setKategoris] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    graphcms
      .request(QUERY_SLUG_CATEGORIES)
      .then(res => {
        // Assuming the response contains the categories array
        setKategoris(res.kategoris && console.log(res));
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <header> 
        <Link to="/" className="logo">Graphcms </Link>
        <NavLinks/>
    </header>
  )
}

export default Header



