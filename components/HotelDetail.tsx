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
                        <li className="list__item">Brakfast included</li>
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

    .user-review {
        flex: 1;
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