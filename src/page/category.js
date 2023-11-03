import React from 'react';
import Layout from '../component/layout/layout';
import { NavLink } from 'react-router-dom';
import style from './category.module.css';

function Category() {
  return (
    <>
    <Layout>
      <h1 className={style.hh1}>Категорія</h1>
      <NavLink to="/asd" className={style.button}>Футболки</NavLink>
      <NavLink to="/asdasd" className={style.button}>Кофти</NavLink>
    </Layout>
    </>
  );
}

export default Category;
