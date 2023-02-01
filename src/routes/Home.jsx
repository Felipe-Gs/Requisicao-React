import React, { useState, useEffect } from "react";
// import axios from 'axios'
import blogFecht from "../axios/config";
import apigoogle from "../axiosGoogle/config";
// context
import { useAuth } from "../../src/hooks/useAuth";

import { Link, useParams } from "react-router-dom";
import "./Home.css";
import Animations from "../components/Animations";

const Home = () => {
  const { posts, getPosts } = useAuth();
  const { nomeUsuario } = useParams();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>Home</h2>
        <p>Bem vindo: {nomeUsuario}</p>
      </div>
      <h1>Ultimos posts: </h1>
      {posts.length === 0 ? (
        <Animations load={true} />
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.id}</p>
            <Link to={`/emails/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
