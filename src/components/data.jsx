import React, { useState } from "react";
import { DatePicker, Form } from "antd";
import "antd/dist/antd.css";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loaddata, searchdata, filterdata } from "../Redux/actions/dataActions";
export default function Data() {
  // const products = useSelector((state) => state.allProducts.products)
  // const [data, setData] = useState([]);
  // const dispatch = useDispatch()
  // const[item,setItem] = useState("")
  // const [loading,setloading] = useState(true);
  // useEffect(() => {
  //     async function fetchdata(){
  //     try {
  //        let apidata = await axios.get("https://60efffc2f587af00179d3c2b.mockapi.io/products");
  //        setData(apidata.data)
  //        dispatch(loaddata(apidata.data));
  //        setloading(false);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }; fetchdata()
  // }, [])

  // const handlesubmit = (e) =>
  // {
  //     e.preventDefault()
  //     const datasearch = data.filter((ele) => {
  //     if (item == '')
  //     return ele
  //     else if (ele.name.toLowerCase().includes(item.toLowerCase()) || ele.model.toLowerCase().includes(item.toLowerCase()) )
  //     {return ele}
  //     })
  //     dispatch(searchdata(datasearch));
  // }

  // const handlefilter = (e) =>
  // {
  //     let filtereddata;
  //     e.preventDefault()

  //     if (e.target.value !== 'all')
  //     {
  //         if (e.target.value === 'low')
  //         {
  //             filtereddata = data.filter((ele)=> ele.price < 10000 )
  //         }
  //         else if (e.target.value === 'mid')
  //         {
  //             filtereddata = data.filter((ele)=> ele.price >= 10000 && ele.price <= 45000)
  //         }
  //         else
  //         {
  //             filtereddata = data.filter((ele)=> ele.price > 45000 )
  //         }
  //         dispatch(filterdata(filtereddata));
  //     }
  //     else
  //     dispatch(filterdata(data));
  // }
  return (
    <>
      <Form>
        <Form.Item>
          <DatePicker />
        </Form.Item>
      </Form>
      {/* <div class="card shadow mb-4 mt-4 " >
    <div style={{display: 'flex'}}>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="search" onChange={(e) =>  {setItem(e.target.value); handlesubmit(e)}} value ={item}></input>
            <button type ='submit'><i className='fa fa-search'></i></button>
        </form>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{width:'150px', marginLeft:'30px'}} onChange={(e)=>handlefilter(e)}>
        <option value = "all" selected>Filter</option>
        <option value="low">Below 10000</option>
        <option value="mid">10000 to 45000</option>
        <option value="high">Above 45000</option>
        </select>
    </div>
    <div class="card-header">
    <h1 class="h3 text-gray-800 text-center">Products</h1>
    </div>
    <div class="card-body">
        <div class="table-responsive">
        {
            loading ? <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" className="img-responsive" alt="Oops" style={{maxHeight:"250px"}}/> :
            <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                         <th>Id</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     products.map((obj) =>{
                    
                         return(
                            <tr>
                                <td class="align-middle">{obj.id}</td>
                                <td class="align-middle">{obj.name}</td>
                                <td class="align-middle">{obj.model}</td>
                                <td class="align-middle">{obj.price}</td>
                                
                             </tr>)
                     } )                                
                   }     
                </tbody>
            </table>
                }
        </div>
    </div>
</div> */}
    </>
  );
}
