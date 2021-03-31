import React from 'react'
import BlogCard from './blogCard'
function Blogs() {
    const blogs=[
        {
            id:1,
            name:"Blog1",
            desc:"This Blog is about.....",
            imageUrl:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:2,
            name:"Blog2",
            desc:"This Blog is about.....",
            imageUrl:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:3,
            name:"Blog3",
            desc:"This Blog is about.....",
            imageUrl:"https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ]
    return (
<div className="container-fluid  text-center">
    <h1 className="font-weight-light pt-5">
        My <span className="text-info">Blogs</span> 
    </h1>
    <p style={{fontWeight:"300"}} className="pb-5">I share my views on technologies in these blogs</p>
    <div className="row mt-5 pt-3">
      {
          blogs.map((blog)=>
          <div key={blog.id} class="col-12 col-md-4 mt-5">
             <BlogCard
             name={blog.name}
             desc={blog.desc}
             imageUrl={blog.imageUrl}
             />
          </div>
          )
      }
        
            
    </div>  
    
    <div className="my-5 text-right">
    <h5>
        See all my Blogs
        <i className="fas fa-arrow-right align-middle"></i>
    </h5>
    </div>
</div>

    )
}
export default Blogs;
