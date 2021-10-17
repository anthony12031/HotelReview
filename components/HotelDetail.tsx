import styled from 'styled-components'

type props = {
    className?: string
}

function HotelDetail({className}: props) {
    return (
        <div className={className}>
            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className="paragraph">
                        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">Pets allowed</li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__count">
                            Lucy and 3 other friends recommend this hotel
                        </p>
                        <p className="recommend__friends">
                            <img src="img/user-3.jpg " alt="Friend 3" className="recommend__photo" />
                            <img src="img/user-4.jpg " alt="Friend 4" className="recommend__photo" />
                            <img src="img/user-5.jpg " alt="Friend 5" className="recommend__photo" />
                            <img src="img/user-6.jpg " alt="Friend 6" className="recommend__photo" />
                        </p>
                    </div>
                </div>
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
                </div>
            </div>
        </div>
    )
}

const StyledHotelDetail = styled(HotelDetail)`
    .detail {
        display: flex;
        padding: 4.5rem; 
        background-color: var(--color-grey-light-1);
        border-bottom: var(--line);
    }

    .description {
        flex: 0 0 60%;
        margin-right: 4.5rem;
        background-color: #fff;
        box-shadow: var(--shado-light);
        padding: 3rem;
        font-size: 1.4rem;

        .paragraph:not(:last-child) {
            margin-bottom: 2rem;;
        }
    }

    .recommend {
        font-size: 1.3rem;
        color: var(--color-grey-dark-3);
        display: flex;
        align-items: center;
        &__photo{
            height: 4rem;
            width: 4rem;
            border-radius: 50%;
            border: 3px solid #fff;
            &:not(:last-child){
                margin-right: -1.5rem;
            }
        }
        &__count{
            margin-right: auto;
        }
        &__friends{

        }
    }

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

    .list {
        list-style: none;
        margin: 3rem 0;
        padding: 3rem 0;
        border-top: var(--line);
        border-bottom: var(--line);
        display: flex;
        flex-wrap: wrap;

        &__item{
            flex: 0 0 50%;
            margin-bottom: .7rem;
        }
        &__item:before{
            content: "";
            display: inline-block;
            height: 1rem;
            width: 1rem;
            margin-right: .7rem;
            /* background-image: url(../img/chevron-thin-right.svg);
            background-size: cover; */
            background-color: var(--color-primary);
            mask-image: url(../img/chevron-thin-right.svg);
            mask-size: cover;
        }

    }

`;

export default StyledHotelDetail;