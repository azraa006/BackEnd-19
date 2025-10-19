const express  = require('express');
const app=express();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient(); 
app.use(express.json());

//API:1 Fetch all students 
app.get('/students',async (req, res) => {

    //1.Data from DB

    //2.DB Logic
    const student_data = await prisma.student.findMany();
    
    //3.Data to frontend
     res.send(student_data);
})

//API:2 Fetch a student 
app.get('/students/:roll_no',async (req, res) => {

    //1.Data from DB
    const data=req.params

    //2.DB Logic
    const student_data = await prisma.student.findUnique({
        where: {
            roll_no:data.roll_no
        }
    });
    
    //3.Data to frontend
     res.send(student_data);
})

//API:3 Add a student 
app.post('/students',async (req, res) => {

    //1.Data from DB
    const data=req.body

    //2.DB Logic
    const new_student_data = await prisma.student.create({
        data: {
            roll_no:data.roll_no,
            name :data.name,
            gender:data.gender,
            dob:data.dob,
            phone_no:data.phone_no,
        }
    });
    
    //3.Data to frontend
     res.send(new_student_data);
})

//API:4 Update a student 
app.put('/students',async (req, res) => {

    //1.Data from DB
    const data=req.body

    //2.DB Logic
    const new_updated_data = await prisma.student.update({
       where:{
        roll_no:data.roll_no
       },
        data: { 
            name :data.name,
            gender:data.gender,
            dob:data.dob,
            phone_no:data.phone_no,
        }
    });
    
    //3.Data to frontend
     res.send(new_updated_data);
})

//API:5 Delete a student 
app.delete('/students',async (req, res) => {

    //1.Data from DB
    const data=req.body

    //2.DB Logic
    const new_updated_data = await prisma.student.delete({
       where:{
        roll_no:data.roll_no
       },
    });
    
    //3.Data to frontend
     res.send("Student Deleted Successfullyc");
})

app.listen(3000);