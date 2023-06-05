import {Link , useLocation } from "react-router-dom";

const NavLinks = ({kategoris}) => {

  const { pathname } = useLocation();

  // console.log(kategoris)
  // return (
  //   <nav>
  //     <ul className="menu-lists">
  //      <Link to="/">
  //       <li className="list">Semua</li>
  //      </Link>

  //      {
  //       kategoris.map(kategori => (
  //         <Link key={kategori.slug} to={`/posts/${kategori.slug}`}>
  //         <li className="menu-lists">
  //           {kategori.nama}
  //         </li>
  //        </Link>
  //       ))
  //      }
  //      </ul>
  //   </nav>
  // )
}

export default NavLinks
