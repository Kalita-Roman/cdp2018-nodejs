import { 
    fetchReviews, 
    fetchReviewById,
    updateReviewById,
    addReview,
    removeReviewById
} from 'controllers/reviews';

export const getReviews = async (req, res) => {
    const reviews = await fetchReviews();
    res.status(200).json(reviews);
};

export const getReviewById = async (req, res) => {
    const id = req.params.id || req.swagger.params.id.value;
    const reviews = await fetchReviewById(id);
    res.status(200).json(reviews);
};

export const postReviews = async (req, res) => {
    const user = await addReview(req.body);
    res.status(200).json(user);
};

export const putReviewById = async (req, res) => {
    const { body } = req;
    const id = req.params.id || req.swagger.params.id.value;
    const user = await updateReviewById(id, body);
    res.status(200).json(user);
};

export const deleteReviewById = async (req, res) => {
    const id = req.params.id || req.swagger.params.id.value;
    const deletedItemsCount = await removeReviewById(id);
    return res.status(200).json({ deletedItemsCount });
};