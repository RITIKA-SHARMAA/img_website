import { Typography,Divider, Grid, Card, CardActionArea, CardContent, CardMedia ,Button, Box, Container} from '@mui/material'

export default function CatTile({value}) {


    return(
        <Card sx={{ maxWidth: 345}}> 
        <CardActionArea onClick={()=> window.open("http://localhost:3000/gallary?catId="+value?.id+"&categoryName="+value?.cat_name, "_blank")}>
          <CardMedia
            component="img"
            height="300"
            image={value?.img_link}
            alt= {value?.cat_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
            {value?.id}. {value?.cat_name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}