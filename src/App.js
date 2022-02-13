import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import Card from './Card/Card';
function App() {

  const [ data, setData] = useState([]);
  const [ limit, setLimit] = useState(3);
  const [ page, setPage] = useState(1);
  const [ pageNum, setPageNum] = useState([])
  const [ sort, setSort] = useState('name')
  useEffect(()=>{
    fetch(`https://library1216.herokuapp.com/?limit=${limit}&page=${page}&sort=${sort}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      setData(data.data);
      setPageNum(data.pageNum);
    });

  }, [limit, page, sort])
  return (
    <div className="App">
      <header className="App-header">
       <h1>Book Store</h1>
       <div>
         <select className='book_num' name="" id="" onChange={e=>{
           setLimit(e.target.value);
           setPage(1)
         }}>
            <option value="3" disabled selected>Number of books</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
         </select>
         <select className='book_sort' onChange={e=>{
           setSort(e.target.value);
           console.log(e.target.value)
         }}>
           <option value ='name' disabled selected>Sort</option>
           <option value ='name'>By name</option>
           <option value ='price'>By price</option>
           <option value ='author'>By author's name</option>
         </select>
          <div className="btn_group">
            {pageNum.map((e, i)=>(
              <button className='btn' key={i} onClick={()=>{
                setPage(e);
                console.log(e);

              }}>{e}</button>
            ))}
          </div>
       </div>
       <ul className='book__list'>
         {data&&data.map((e, i)=>{
           return  <li className='book__item' key={i}>
             <Card
              title={e.book_title}
              desc = {e.book_desc}
              price = {e.book_price}
              author = {e.book_author}
             />
             </li>
         })}

       </ul>
      </header>
    </div>
  );
}

export default App;
