import Image from 'next/image'
import styles from '../app/page.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CatTile  from '@/coponents/categoryTile'
import { Typography,Divider, Grid, Card, CardActionArea, CardContent, CardMedia ,Button, Box, Container} from '@mui/material'




export default function Home() {

  const [title , setTitle] = useState("")
  const [subTitle , setSubTitle] = useState("")
  const [catogries,setCategories] = useState([])

  const callAPIs = () => {
    axios.get('http://localhost:8080/getTitle').then(
      function (response){
      setTitle(response.data.title)

    })

    axios.get('http://localhost:8080/getSubTitle').then(function (response){
      setSubTitle(response.data.subTitle)

    })
  
    axios.get('http://localhost:8080/getCategories').then(function (response){
      //console.log(response.data.catModelArrayList)
      setCategories(response.data.catModelArrayList)
      
    })

  }

  // learning

  const [count,setCount]= useState(0)

  const [countV,setCountV]= useState(100)

  const myFun=function nameF(){

  }
 

    // End learning


useEffect(()=>{
  callAPIs()
  setCount(count+1)
},[])

useEffect(()=>{
  setCountV(countV+100)
},[count])

  return (

    <main>
      <div>
        <Typography variant='h3' align='center'>{title}</Typography>

        <Divider sx={{margin:5}}> <Typography variant='subtitle1'>{subTitle}</Typography></Divider>  
        <Box flexGrow={1}>
  
        <Grid 
  container direction="row"
  justifyContent="space-evenly"
  alignItems="center" spacing={5}>

            {catogries.map((value) => [
            <Grid item >
              <CatTile value={value}/>
    </Grid>])}

        </Grid>
</Box>
      </div>
    </main>
  )
}
