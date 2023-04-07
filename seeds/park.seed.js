//ditch the seeding and directly fetch from the api

const parks = [
    {
        name: 'Fire Island',
        location: 'Patchogue, Long Island',
        description: 'Immerse yourself in an enchanting collage of coastal life and history. Rhythmic waves, high dunes, ancient maritime forests, historic landmarks and glimpses of wildlife, Fire Island has been a special place for diverse plants, animals and people for centuries. Far from the pressure of nearby big-city life, dynamic barrier island beaches offer solitude, camaraderie, and spiritual renewal.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIoz-5LM1QDoLJkghB4VVm-LVMkU404LaTw&usqp=CAU'
    }
]

//seed the db

const mongoose = require('mongoose');
const Park = require('../models/Park.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://mazuraustin1:gDytBJKVd6Vrf2c8@cluster32.wvkdomp.mongodb.net/national-parks';


mongoose
  .connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Park.create(parks);
  })
  .then(parksFromDB => {
    console.log(`Created ${parksFromDB.length} parks`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating movies from the DB: ${err}`);
  });
