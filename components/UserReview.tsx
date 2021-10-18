import styled from 'styled-components'

export interface Review {
    id: string,
    name: string,
    reviewText: string,
    date: string,
    rating: number
}

type UserReviewProps = {
    className?: string,
    review: Review
}

function Review({className, review}: UserReviewProps){
    return (
        <div className={className}>
            <figure className="review">
                <blockquote className="review__text">
                    {review.reviewText}
                </blockquote>
                <figcaption className="review__user">
                    <img src="img/user-1.jpg" alt="user 1" className="review__photo" />
                    <div className="review__user-box">
                        <p className="review__user-name">{review.name}</p>
                        <p className="review__user-date">{review.date}</p>
                    </div>
                    <div className="review__rating">{review.rating}</div>
                </figcaption>
            </figure>
        </div>
    )
}

const StyledReview = styled(Review)`
      .review {
        background-color: #fff;
        box-shadow: var(--shadow-light);
        padding: 3rem;
        margin-bottom: 3.5rem;
        
        &__text{
            margin-bottom: 2rem;
        }
        &__user{
            display: flex;
            align-items: center;
        }
        &__photo{
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
        }
        &__user-box{

        }
        &__user-name{
            font-size: 1.1rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: .4rem;
        }
        &__user-date{
            font-size: 1rem;
            color: var(--color-grey-dark-3);
        }
        &__rating{
            margin-left: auto;
            color: var(--color-primary);
            font-size: 2.2rem;
            font-weight: 300;
        }
    }
`;

type UserReviewsProps = {
    className?: string,
    userReviews: Review[]
}

function UserReviews({className, userReviews}: UserReviewsProps) {
    return (
        <div className={className}>
            <div className="user-reviews">
                {
                    userReviews.map((review) => 
                        (
                            <StyledReview  key={review.id} review={review}/> 
                        )
                    )
                }
            </div>
        </div>
    );
}

const StyledUserReviews = styled(UserReviews)`
.user-reviews {
    flex: 1;
    font-size: 1.4rem;
    }
`;

export default StyledUserReviews;