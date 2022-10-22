import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import { client } from "../lib/client";
import { Banner } from '../components/Banner';
import { Blog } from '../components/Blog';

export default function Home({navbarItems,banner,blogs}) {
  console.log(blogs)
  return (
    <>
    <NavBar data={navbarItems}/>
    <Banner data={banner}/>
    <Blog data={blogs}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="navbar"]`;
  const navbarItems = await client.fetch(query);

  const queryBanner = `*[_type=="banner"]`;
  const banner = await client.fetch(queryBanner);

  const queryBlogs = `*[_type=="blog"]`;
  const blogs = await client.fetch(queryBlogs);


  return {
    props: { navbarItems,banner,blogs },
  };
};