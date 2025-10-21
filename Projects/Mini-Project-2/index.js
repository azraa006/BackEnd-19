const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const express = require('express');
const app = express();

app.use(express.json());

//Sample API
app.get('/students', async (req, res) => { 
    try{
    //1.Data from DB
    //2.DB Logic
    //3.Data to frontend
    res.send("Backend working fine");
    }catch (err){
        console.error(err);
        get.status(500).json({message: "Internal server error"});
    }
})

//API to get all restaurants
app.get("/restaurants", async (req, res) => {
    try{
    //1.Data from DB
    //2.DB Logic
    const restaurantsData = await prisma.Restaurants.findMany();
    //3.Data to frontend
    res.status(200).json({message: "All restaurants data fetched successfully", data: restaurantsData})
    }catch (err){
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

//Api to get a restaurant by id
app.get('/restaurants/:rest_id', async (req, res) => { 
    try{
    //1.Data from DB
    const data=req.params
    //2.DB Logic
    const restaurantData = await prisma.Restaurants.findUnique({
        where: {
            rest_id: data.rest_id
        }
    });
    //3.Data to frontend
    res.status(200).json({message: "A restaurant data fetched successfully", data: restaurantData})
    }catch (err){
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

//API to add a restaurant
app.post('/restaurants', async (req, res) => { 
    try{
    //1.Data from DB
    const data=req.body
    //2.DB Logic
    const new_restaurantData = await prisma.Restaurants.create({
       data: {
        rest_title: data.rest_title,
        rest_address: data.rest_address,
        rest_time : data.rest_time,
        rest_img_url: data.rest_img_url,
        rest_is_one_free: data.rest_is_one_free
       }
    });
    //3.Data to frontend
    res.status(200).json({message: "Added a restaurant data successfully", data: new_restaurantData})
    }catch (err){
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

//API to update a restaurant
app.put('/restaurants', async (req, res) => { 
    try{
    //1.Data from DB
    const data=req.body
    //2.DB Logic
    const new_updated_Data = await prisma.Restaurants.update({
       where :{
        rest_id: data.rest_id
       },
        data: {
        rest_title: data.rest_title,
        rest_address: data.rest_address,
        rest_time : data.rest_time,
        rest_img_url: data.rest_img_url,
        rest_is_one_free: data.rest_is_one_free
       }
    });
    //3.Data to frontend
    res.status(200).json({message: "Updated a restaurant data successfully", data: new_updated_Data})
    }catch (err){
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

//API to delete a restaurant
app.delete('/restaurants', async (req, res) => { 
    try{
    //1.Data from DB
    const data=req.body
    //2.DB Logic
    await prisma.Restaurants.delete({
       where :{
        rest_id: data.rest_id
       }
    });
    //3.Data to frontend
    res.status(200).json({message: "Deleted a restaurant data successfully"})
    }catch (err){
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

    
app.listen(3000)