import './App.css';
import { useEffect,useState} from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
function App() {
  const [data,setData]= useState([]);
  const [filter,setFilter] = useState('');
  const [totalresults,settotalResults] =useState(0);
  const [currentPage,setCurrentPage] = useState(undefined);
  const callApi = (pageNo=1)=>{
    const Token='dIANG08ykAm8QYm7OhxghgOSBQnNsLmqTc71Ti34CDc';
   axios({
      method:'GET',
      url:`https://api.unsplash.com/search/photos?client_id=${Token}&query=${filter}&page=${pageNo}`
    }).then((res)=>{
      if(res.status==200)
      {
        console.log(res);
        setData([...data,...res.data.results]);
        settotalResults(res.data.total);
        setCurrentPage(pageNo);
      }
    }).catch((err)=>{
      console.log(err)
    })
  };
 
  const submitHandler=(e)=>{
    e.preventDefault();
    callApi();
  }
  return(
    <div>
        <form onSubmit={submitHandler}>
        <br/>
        <div className='d-flex flex-row justify-content-center'>
          <div><input type='text' onChange={(e)=>{setFilter(e.target.value)}} className='form-control'/></div>
          <div><input type='submit' className='btn btn-primary' style={{marginLeft:10}}/></div>
          </div>
        </form>
        <br/>
        <InfiniteScroll
                className='d-flex flex-row flex-wrap'
                dataLength={data.length} //This is important field to render the next data
                next={()=>{
                  callApi(currentPage+1)
                }}
                hasMore={totalresults!=data.length}
             >
              {
              data.map((ele,i)=>{
                return(
                  <div style={{margin:10}} key={i} onClick={()=>{window.open(ele.links.download)}}>
                    <div className="card" style={{width:'18rem'}}>
                      <img className="card-img-top" src={ele.urls.small} alt=" "/>
                      <div className="card-body">
                        <p className="card-text">{ele.alt_description}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </InfiniteScroll>
      </div>
  )
}

export default App;