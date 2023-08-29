import React from 'react'
import axios from 'axios';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./services/posts.service.js";


export default function Home() {

  let [Product, setProduct] = useState([]);

  useEffect(()=>{
    getPosts().
    then((Product)=>{
      setProduct(Product);
    }).
    catch(err=>{

    });
  });


  return (
    <>
      <div className="container mt-5">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h1>Manage Posts</h1>
              <div className="d-flex">
              <Link to="add-post" className="btn btn-success float-end me-2">Manage Users</Link>
              <Link to="add-post" className="btn btn-success float-end">+ Add Post</Link>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cover</th>
              <th scope="col">Post title</th>
              <th scope="col">Post Author</th>
              <th scope="col">Published At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { Product.map((Product)=>{
              return <tr key={Product._id}>
              <th scope="row">{Product._id}</th>
              <td><img src={Product.cover} height="100" /></td>
              <td>{Product.title}</td>
              <td>{Product.body}</td>
              <td>{Product.createdAt}</td>
              <td>{post.updatedAt}</td>
              <td>
                <button  className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            }) }
            
          </tbody>
        </table>
      </div>
    </>
  );
}

