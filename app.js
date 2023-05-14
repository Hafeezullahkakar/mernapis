const express = require('express')
var mongoose = require('mongoose');
var app = express();
//hafeez
const InterfaceRouter = require('./routes/hafeezroutes/interface')
const GraphicsRouter = require('./routes/hafeezroutes/graphics')
const ArtworkRouter = require('./routes/hafeezroutes/artwork')
const ConferencePaperRouter = require('./routes/hafeezroutes/conferencepaper')
const JournalAritcalRouter = require('./routes/hafeezroutes/journalarticle')
const ThesesRouter = require('./routes/hafeezroutes/theses')
const UserRouter = require('./routes/hafeezroutes/user')
//nofal
const CertificatRouter = require('./routes/nofalroutes/certifications')
const DegreeRouter = require('./routes/nofalroutes/degree')

//waqas
const FYPRouter = require('./routes/waqasroutes/fyp')
const MSThesesRouter = require('./routes/waqasroutes/mstheses')

//ehtisham
const FreelanceRouter = require('./routes/ehtshamroutes/freelance')
const IndustryRouter = require('./routes/ehtshamroutes/industry')
const ManagementRouter = require('./routes/ehtshamroutes/management')
const TeachingRouter = require('./routes/ehtshamroutes/teaching')


//qasim 
const AdminRouter = require('./routes/qasimroutes/AdminRoute')
const BlogRouter = require('./routes/qasimroutes/BlogRoute')


var cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

const connection = mongoose.connect('mongodb+srv://syedSense:syedSense@muzilcluster.zjnu5ds.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
connection.then((db) => {
    console.log("Connected correctly to mongodb");
}, (err) => { console.log(err); });

//Hafeez
app.use('/interface', InterfaceRouter);
app.use('/graphic', GraphicsRouter);
app.use('/artwork', ArtworkRouter);
app.use('thesis', ThesesRouter)
app.use('/journal', JournalAritcalRouter)
app.use('/conference', ConferencePaperRouter)
app.use('/user', UserRouter)

//nofal 
app.use('/certificates', CertificatRouter)
app.use('/degree', DegreeRouter)
//waqas 
app.use('/fyp', FYPRouter)
app.use('/mstheses', MSThesesRouter)

//Ehtisham 
app.use('/freelance', FreelanceRouter)
app.use('/industry', IndustryRouter)
app.use('/management', ManagementRouter)
app.use('/teaching', TeachingRouter)

//qasim
app.use('/admin', AdminRouter)
app.use('/blog', BlogRouter)


app.listen(3000, () => console.log("Connected to server on port: 3000"))
