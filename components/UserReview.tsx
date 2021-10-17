import styled from 'styled-components'

type props = {
    className?: string
}

function UserReviews({className}: props) {
    return (
        <div className={className}>
            <div className="user-reviews">
                <figure className="review">
                    <blockquote className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className="review__user">
                        <img src="img/user-1.jpg" alt="user 1" className="review__photo" />
                        <div className="review__user-box">
                            <p className="review__user-name">Nick Smith</p>
                            <p className="review__user-date">Feb 23rd, 2021</p>
                        </div>
                        <div className="review__rating">9.8</div>
                    </figcaption>
                </figure>
                <figure className="review">
                    <blockquote className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className="review__user">
                        <img src="img/user-1.jpg" alt="user 1" className="review__photo" />
                        <div className="review__user-box">
                            <p className="review__user-name">Nick Smith</p>
                            <p className="review__user-date">Feb 23rd, 2021</p>
                        </div>
                        <div className="review__rating">9.8</div>
                    </figcaption>
                </figure>
                </div>
        </div>
    );
}

const StyledUserReviews = styled(UserReviews)`
.user-reviews {
    flex: 1;
    font-size: 1.4rem;
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
    }
`;

export default StyledUserReviews;