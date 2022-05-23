import React,{useEffect,useState} from 'react';
import '../App.css';
// import instaCard from '../Mock-data/data.json';
import Card from '../Components/Card.js';
import NavBar from '../Components/NavBar.js';

const LandingPage=()=> {
  const [array,setArray] = useState([])
    useEffect(() => {
      async function getData(){
        const response = await fetch(process.env.REACT_APP_TOKEN+"/posts")
        const instaCards = await response.json()
        setArray([...(instaCards.data)])
      }
      getData()
    }, [])
  return (
    <div className="site-container">
      <NavBar/>
      <section className='section1'>
          {array.map((person,index) => {
        const {name,location,description,likes,postImage,createdAt,timeAt}=person
        return(
        <Card name={name} location={location} description={description} postImage={postImage} likes={likes} createdAt={createdAt} timeAt={timeAt} key={`card ${index}`}/>
        )
        })}
      </section>
    </div>
    )}
    

export default LandingPage;
