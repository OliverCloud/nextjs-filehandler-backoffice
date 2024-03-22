import affilateModel from '../models/affilate.model.mjs';
import reviewModel from '../models/review.model.mjs';
import subscriberModel from '../models/subscriber.model.mjs';
import userModel from '../models/user.model.mjs';


/*

    Simple user check to see if db has been created.

*/
export const dbExists = async () => {

    try {
        let users = await userModel.find({'name': 'admin'});
        return users[0]
    } catch (error) {
        throw(error)
    }

}

/*

    Create new User

*/
export const seedDefaultUser = async (user) => {

    try {
        let newUser = userModel.create(user);
        return newUser
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Review

*/
export const seedDefaultReview = async (review) => {

    try {
        
        let newReview = reviewModel.create(review);
        return newReview
    } catch (error) {
        throw(error)
    }

}


/*

    Create new Affiliate

*/
export const seedDefaultAffiliate = async (affiliate) => {

    try {
        
        let newAffiliate = affilateModel.create(affiliate);
        return newAffiliate
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Subscriber

*/
export const seedDefaultSubscriber = async (subscriber) => {

    try {
        
        let newSubscriber = subscriberModel.create(subscriber);
        return newSubscriber
    } catch (error) {
        throw(error)
    }

}
