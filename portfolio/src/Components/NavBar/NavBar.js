import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import { useDispatch } from "react-redux";
import { setPage } from '../../Redux/pageInfo';

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div >
      <LinkButton text="About Me" onClick={() => dispatch(setPage({page: 'About Me'}))}/>
      <LinkButton text="Projects" onClick={() => dispatch(setPage({page: 'Projects'}))}/>
      <LinkButton text="Education" onClick={() => dispatch(setPage({page: 'Education'}))}/>
      <LinkButton text="Contact Me" onClick={() => dispatch(setPage({page: 'Contact Me'}))}/>
    </div>
  );
}

export default NavBar;
