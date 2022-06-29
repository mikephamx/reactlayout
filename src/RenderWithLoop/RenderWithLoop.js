import React, { Component } from 'react'

export default class RenderWithLoop extends Component {
  productList = [
    { id: 1, name: "black-car", price: 1000, img: './CarBasic/products/black-car.jpg' },
    { id: 2, name: "red-car", price: 1000, img: './CarBasic/products/red-car.jpg' },
    { id: 3, name: "silver-car", price: 1000, img: './CarBasic/products/silver-car.jpg' },
    { id: 4, name: "steel-car", price: 1000, img: './CarBasic/products/steel-car.jpg' },
  ]
  //Cach 1: Render array object using Loop
  renderTable = () => {
    let trComponentArray = [];
    for (let index = 0; index < this.productList.length; index++) {
      let product = this.productList[index];
      //jsx object 
      let trJSX = (
        //each row must have a unique key to avoid error
        <tr key={index}>
          <td> {product.id}</td>
          <td> {product.name}</td>
          <td> {product.price}</td>
          <td>
            <img style={{ width: "100px" }} src={product.img} alt="" />
          </td>
          <td></td>
        </tr>
      )
      console.log("trJsx", trJSX);
      trComponentArray.push(trJSX);
    }
    return trComponentArray;
  }

  //cach 2: render array object using map() fucntion 
  renderTableMap = () => {
    // let trComponentArrayMap = this.productList.map((product, index) => {
    //   return <tr key={index}>
    //     <td> {product.id}</td>
    //     <td> {product.name}</td>
    //     <td> {product.price}</td>
    //     <td> <img src={product.img} style={{ width: '200px' }} alt=""/> {" "}</td>
    //   </tr>
    // });
    // return trComponentArrayMap;

    return this.productList.map((product, index) => {
      return <tr key={index}>
        <td> {product.id}</td>
        <td> {product.name}</td>
        <td> {product.price}</td>
        <td> <img src={product.img} style={{ width: '200px' }} alt={product.name}/> {" "}</td>
      </tr>
    });
  }


  render() {
    return (
      <div>
        {/* <img src={this.productList[0].img} alt=""/> */}
        <div className='container'>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>img</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {this.renderTable()} */}
              {this.renderTableMap()}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}
