import Review from 'models/Review';

export const fetchReviews = () => {
    return Review.find();
};

export const fetchReviewById = (_id) => {
    return Review.findOne({ _id });
};

export const addReview = async review => {
    try {
        const newReview = new Review(review);
        return await newReview.save();
    } catch (error) {
        return error;
    }
};

export const updateReviewById = async (_id, review) => {
    const { n } = await Review.update({ _id }, review);
    return n;
};

export const removeReviewById = async (_id) => {
    const { n } = await Review.deleteOne({ _id });
    return n;
};