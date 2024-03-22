import { exit } from 'process';
import dbConnect from '../dbConnect.mjs';
import { dbExists, seedDefaultReview, seedDefaultUser, seedDefaultAffiliate } from './seedhelpers.mjs';
import bcrypt from 'bcryptjs';
import { reviews, affiliates } from './seedfile.mjs';



/* 

    SEED

*/

// Database Connection
await dbConnect();
let exists = await dbExists();

if(exists === undefined)
{
    console.log('----------------------')
    console.log('Opretter Database')

    const user = await seedDefaultUser({
        "name" : "admin",
        "email" : "admin@mediacollege.dk",
        "hashedPassword" : await bcrypt.hash("admin", 10)
    })
    
    console.log('User seeded : ', user.name)

    // Reviews
    let reviewList = [];

    for (let i = 0; i < reviews.length; i++) {
        reviewList = await seedDefaultReview(reviews[i]);
    }

    console.log('Reviews seeded : ', reviews.length)
 
    // Reviews
    let affiliateList = [];

    for (let i = 0; i < affiliates.length; i++) {
        affiliateList = await seedDefaultAffiliate(affiliates[i]);
    }

    console.log('Affiliates seeded : ', affiliates.length)

} else {



    console.log('----------------------')
    console.log('Database er allerede oprettet')
    console.log('Slet/drop databasen hvis du ønsker at køre seed scriptet igen.')
    console.log('----------------------')

}

exit();