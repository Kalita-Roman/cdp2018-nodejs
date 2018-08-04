import Review from 'models/Review';

export const fetchReviewsById = productId => {
    return Review.findAll({
        where: { productId },
        raw : true 
    });
};