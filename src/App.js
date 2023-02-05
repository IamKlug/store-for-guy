import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './Components/ProductCard';
import Header from './Components/Header';

function App() {



  const [storeData, setStoreData] = useState([])
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchProducts = (e) => {
    e.preventDefault()
    const filteredList = storeData.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredProducts(filteredList)
  }

  const handleAddToCart = (cartItem) => {
    setCart(prev => {
      return [
        ...prev.filter(item => item.data.sku !== cartItem.data.sku),
        cartItem
      ]
    })
  }

  const formatProduct = (props) => {
    const Product = {
      name: `${props.name}`,
      price: props.price,
      sku: props.sku,
      path: props.image_path
    }
    return Product
  }



  useEffect(() => {
    const uncleanData = [{ "id": 1, "name": "golang", "price": 10, "sku": "0123456791abc", "image_path": "/client/images/gopher.jpg", "created_on": "2023-01-26T12:03:44.315666-08:00", "updated_at": "2023-01-26T12:03:44.315666-08:00" }, { "id": 2, "name": "psql", "price": 100, "sku": "0123456792abc", "image_path": "/client/images/psql.jpg", "created_on": "2023-01-26T12:03:44.315666-08:00", "updated_at": "2023-01-26T12:03:44.315666-08:00" }, { "id": 3, "name": "docker", "price": 1000, "sku": "0123456793abc", "image_path": "/client/images/Moby-logo.png", "created_on": "2023-01-26T12:03:44.315666-08:00", "updated_at": "2023-01-26T12:03:44.315666-08:00" }]
    const uncleanDataString = JSON.stringify(uncleanData);
    const cleanData = JSON.parse(uncleanDataString)
    const formatedData = cleanData.map(item => formatProduct(item))
    setStoreData(formatedData)
  }, [])


  const displayProducts = () => {
    return storeData.map(product => {
      return (
        <ProductCard product={product} key={product.id} addToCart={handleAddToCart} />
      )
    })
  }




  return (
    <div className="App">
      <Header searchTerm={searchTerm} handleSearch={handleSearch} searchProducts={searchProducts} />
      {displayProducts()}
    </div>
  );
}

export default App;











/*   useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://199.241.139.224:9090/product-data')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setStoreData(data)
    }
    fetchData()
    console.log(storeData)
  }, [])
 */









// For MockData

