/* 


    GET PRODUCTS


*/

import dbConnect from "./db/dbConnect.mjs";
import affilateModel from "./db/models/affilate.model.mjs";
import reviewModel from "./db/models/review.model.mjs";
import subscriberModel from "./db/models/subscriber.model.mjs";
import { deleteFile } from "./fileHandler";


/* 

    Reviews

*/

export const getReviews = async () => {
    
        try {
    
            await dbConnect();
            
            let result = await reviewModel.find({});
    
            return result
    
        } catch (error) {
    
            console.log(error)
    
        }
}
/* 

    Review

*/
export const createReview = async (review) => {
    
    try {

        await dbConnect();
        let result = await reviewModel.create(review);

        return result

    } catch (error) {

        console.log(error)

    }

};

export const updateReview = async (review) => {
    
    try {

        await dbConnect();
        let result = await reviewModel.findByIdAndUpdate(review._id, review);

        return result

    } catch (error) {

        console.log(error)

    }

};

export const deleteReview = async (id) => {

    try {

        await dbConnect();
        let result = await reviewModel.findByIdAndDelete(id);
        return result;
        
    } catch (error) {

        console.log(error)

    } 
};

export const getReview = async (id) => {
    
    try {

        await dbConnect();
        
        let result = await reviewModel.findById({_id: id});

        return result

    } catch (error) {

        console.log(error)

    }
}

/* 

    Affiliates

*/

export const getAffiliates = async () => {
    
    try {
        
        await dbConnect();
        let result = await affilateModel.find({});
        
        return result

    } catch (error) {

        console.log(error)

    }

};  

/* 

    Affiliate

*/

// Get Affiliate by ID.
export const getAffiliate = async (id) => {
    
    try {
        
        await dbConnect();
        let result = await affilateModel.findById({_id: id});
        
        return result

    } catch (error) {

        console.log(error)

    }

};  

// Create new Affiliate.
export const createAffiliate = async (affiliate) => {
        
        try {
    
            await dbConnect();
            let result = await affilateModel.create(affiliate);
    
            return result
    
        } catch (error) {
    
            console.log(error)
    
        }
};

// Create new Affiliate.
export const updateAffiliate = async (affiliate) => {
        
        try {
    
            await dbConnect();
            let result = await affilateModel.findByIdAndUpdate(affiliate._id, affiliate);
      
            return result
    
        } catch (error) {
    
            console.log(error)
    
        }
};

// Delete Affiliate.
export const deleteAffiliate = async (id) => {

    try {

        await dbConnect();
        let result = await affilateModel.findByIdAndDelete(id);

        return result;
        
    } catch (error) {

        console.log(error)

    } 
};


/*

    SUBSCRIBERS

*/

export const getSubscribers = async () => {
    
    try {

        await dbConnect();
        return await subscriberModel.find({});

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberByEmail = async (email) => {
    
    try {

        await dbConnect();
        let result = await subscriberModel.find({'email': email});

        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberById = async (id) => {
    
    console.log('getSubscriberById')

    try {

        await dbConnect();
        let result = await subscriberModel.find({'_id': id});
        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const postSubscriber = async (subscriber) => {
    
    console.log('postSubscriber')

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.create(subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const deleteSubscriber = async (id) => {
    
    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndDelete({_id: id}).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const putSubscriber = async (subscriber) => {
    
    console.log('putSubscriber', subscriber);

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndUpdate({_id: subscriber.id}, subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};