import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import { useEffect} from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";

const Pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [users1, setUser] = useState([]);
    const [src, setSrc] = useState([]);
    function onDocumentLoadSuccess({numPages}){
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offSet){
      setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
  
    function changePageBack(){
      changePage(-1)
    }
  
    function changePageNext(){
      changePage(+1)
    }
    const onSubmit2 = (e) => {
      axios.get("http://localhost:9109/document/").then((res) => {
        console.log(res.data.users);
        var array=res.data.users[0].License
        console.log(array);
        setSrc(array)
        // for (let index = 0; index < res.data.users.length; index++) {
        //   if(id==res.data.users[index].user._id)
        // {
        //   console.log("id matched");
        //   setSrc(res.data.users[index].profileImg)
        // }
        // }
        // console.log(res.data.users[0].user._id);
  
        // console.log(res.data.users);
      });
    };
    useEffect(()=>{
      onSubmit2()
    },[])
  return (
    <div>
      <center>
        <div>
          <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
      </center>
      
    </div>
  )
}

export default Pdf
