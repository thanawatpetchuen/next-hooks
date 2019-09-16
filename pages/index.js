import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import TodoList from '../components/todoList'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <TodoList />
  </div>
    
)

export default Home
