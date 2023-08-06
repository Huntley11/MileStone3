import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function HomePageCards({title, imageSrc, paragraph}) {
    return (
        <Card sx={{ maxWidth: "33%" }}>
            <CardMedia
                component="img"
                height="140"
                image={imageSrc}
                alt="Card Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {paragraph}
                </Typography>
                <Link >
                    <Button variant="contained">Learn More</Button>
                </Link>
                
            </CardContent>
        </Card>
    )
    
}

export default HomePageCards