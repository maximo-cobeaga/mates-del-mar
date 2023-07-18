import React from "react";
import { Banner } from "../components/Banner";
import { Posteos } from "../components/Posteos";
import {NavBar} from '../components/Navbar'
import {Footer} from '../components/Footer'
import {Whatsapp} from './Whatsapp'

export function BlogMatero() {
  return (
    <>
      <NavBar />
      <Banner />
      <Posteos />
      <Whatsapp />
      <Footer />
    </>
  );
}
