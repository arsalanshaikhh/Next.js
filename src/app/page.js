import Image from 'next/image'
import styles from './page.module.css'
import { ChakraProvider } from "@chakra-ui/react";


export default function Home() {
  return (
    <ChakraProvider>
    <h1>Hi EveryOne</h1>
    </ChakraProvider>
  )
}
