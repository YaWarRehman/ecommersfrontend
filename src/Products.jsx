import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "./services/products.service.js";


export default function Products() {

  let [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts().
    then((products)=>{
      setProducts(products);
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
              <h1>Manage Products</h1>
              <div className="d-flex">
              <Link to="add-product" className="btn btn-success float-end me-2">Manage Users</Link>
              <Link to="add-product" className="btn btn-success float-end">+ Add Product</Link>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cover</th>
              <th scope="col">Product title</th>
              <th scope="col">Published At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { products.map((product)=>{
              return <tr key={product._id}>
              <th scope="row">{product._id}</th>
              <td><img src={product.cover} height="100" /></td>
              <td>{product.title}</td>
              <td>{product.body}</td>
              <td>{product.createdAt}</td>
              <td>{product.updatedAt}</td>
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
