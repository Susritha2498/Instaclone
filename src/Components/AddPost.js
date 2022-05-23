import React from 'react'
import NavBar from './NavBar'

const AddPost = () => {
  const handleSubmit = async(e)=>{

    e.preventDefault()
    try{
      let postImage = e.target.elements.postImage.value
      let name = e.target.elements.name.value
      let location = e.target.elements.location.value
      let description = e.target.elements.description.value
      let stringdate = String(new Date())
      let arr = stringdate.split(' ')
      let createdAt = arr.slice(1,4).join(" ")
      let timeAt = arr.slice(4,5).join("")
      if(timeAt.split(':')[1]>=12){
        timeAt+=' PM'
      }
      else{
        timeAt+=' AM'
      }
      let img=postImage.split(".")
      let likes = Math.floor(Math.random() * 200) + 1
      const Imagetype = img[img.length-1]
      const types = ["jpg","jpeg","png",".gif","webp"]
      if(types.includes(Imagetype.toLowerCase())){
        const formData = new FormData()
        formData.append("name",name)
        formData.append("location",location)
        formData.append("description",description)
        formData.append("likes",likes)
        let file = e.target.elements.postImage.files[0]
        formData.append("postImage",file)
        formData.append("createdAt",createdAt)
        formData.append("timeAt",timeAt)
        console.log(process.env.REACT_APP_TOKEN)

        const response = await fetch(process.env.REACT_APP_TOKEN+"/add/post",{
          method:"POST",
          headers:{},
          body:formData,
        }).then(res=>console.log(res))
        .catch(e=>console.log(e.message))

        // const res = await response.json()
        e.target.reset()
        // console.log(res)
      }
      else{
        alert('The image format is not allowed. Make sure to send only jpg,jpeg,png,webp and .gif formats')
      }
      }catch(e){
        alert(e.message)
    }
  }

  return (
    <div className='form-page'>
        <NavBar/>
        <form action="https://instaclone198.herokuapp.com/add/post" method="post" className='form-container' onSubmit={handleSubmit}>
            <div id='choose-image' className='form-elements'>
              <input type="file" id="postImage" placeholder='No file is chosen' required/>
              {/* <div className='fakefile'>
                <input type="text" placeholder='no file choosen' />
                <button>Browse</button>
              </div>
              <input type="file" className="real-input" />
              */}
            </div> 
            <div id='user-details' className='form-elements'>
                <input type="text" placeholder='Author' id='name' required/>
                <input type="text" placeholder='Location' id='location' required/>
            </div>
            <input type="text" placeholder='Description' className='form-elements' id='description' required/>
            <button type="submit" className='form-elements' id='lastbutton'>Post</button >
        </form>
    </div>
  )
}

export default AddPost
