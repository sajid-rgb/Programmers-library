import axios from 'axios';
import React, { useState } from 'react';

const AddBooks = () => {
    const [imageURL,setImageURL] = useState(null);
        const [formData,setFormData] = useState({
            name:'',
            author:'',
            price:'',
            imageURL:''
        })
        
    const add=()=>{
        fetch('https://apricot-cupcake-42554.herokuapp.com/addBooks',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
        })
      }
      const handleImageUpload = (event)=>{
          const imageData = new FormData()
    imageData.set('key','6d76573589b4c4c6e469c0754b0a8289')
    imageData.set('image',event.target.files[0])

     axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    
      .then(function (response) {
        const newFormData = {...formData}
        newFormData.imageURL=response.data.data.display_url
        setFormData(newFormData)
        
      })
      .catch(function (error) {
        console.log(error);
      });
}
    const handleOnBlur =(event) =>{
        if(event.target.name==='name'){
            const newFormData = {...formData}
            newFormData.name=event.target.value
            setFormData(newFormData)
        }
        if(event.target.name==='author'){
            const newFormData = {...formData}
            newFormData.author=event.target.value
            setFormData(newFormData)
        }
        if(event.target.name==='price'){
            const newFormData = {...formData}
            newFormData.price=event.target.value
            setFormData(newFormData)
        }

    }
    return (
        <div>
            <h4 className='text-center text-muted'>Manage Products</h4>
            <form action="" className='container row mx-auto'>
            <div className='col-md-6 d-flex flex-column'>
            <input type="text" name='name' className='mt-4' placeholder='Book Name' onBlur={handleOnBlur}/>
            <input type="text" name='author' className='mt-4' placeholder='Author Name' onBlur={handleOnBlur}/>
            </div>
            <div className='col-md-6 d-flex flex-column'>
            <input type="text"name='price' className='mt-4'  placeholder='Price' onBlur={handleOnBlur}/>
            <input type="file" className='mt-4 text-white' onChange={handleImageUpload}/>
            </div>
            </form>
            <div className="d-flex justify-content-center align-items-center">
             <button onClick={add} className="mt-3 btn btn-info">Add Books</button>
             </div>
        </div>
    );
};

export default AddBooks;