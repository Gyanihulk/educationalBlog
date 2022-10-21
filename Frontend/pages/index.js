import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import { NavBar } from '../components/Navbar/NavBar';
import { client } from "../lib/client";

export default function Home({navbarItems}) {
  
  return (
    <>
    <NavBar data={navbarItems}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="navbar"]`;
  const navbarItems = await client.fetch(query);

  return {
    props: { navbarItems },
  };
};