import styled from 'styled-components'
import SvgIcon from './SvgIcon';
import Button from './Button';

type props = {
    className?: string
}

function HotelOverview({className}: props) {
    return (
        <div className={className}>
            <div className="overview">
                <h1 className="overview__heading">
                    Hyatt Hotel
                </h1>
                <div className="overview__starts">
                    <SvgIcon iconName="icon-star" fill="var(--color-primary)" />
                    <SvgIcon iconName="icon-star" fill="var(--color-primary)" />
                    <SvgIcon iconName="icon-star" fill="var(--color-primary)" />
                    <SvgIcon iconName="icon-star" fill="var(--color-primary)" />
                    <SvgIcon iconName="icon-star" fill="var(--color-primary)" />
                </div>
                <div className="overview__location">
                <SvgIcon iconName="icon-location-pin" fill="var(--color-primary)"/>
                <Button>Bogotá, Colombia</Button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">429 votes</div>
                </div>
            </div>
        </div>
    );
}

const StyledHotelOverview = styled(HotelOverview)`
    .overview{
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--color-grey-light-2);
        &__heading{
            font-size:2.25rem;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 1.5rem 3rem;
        }
        &__starts{
            margin-right: auto;
            display: flex;
        }
        &__icon_star,
        &__icon_location{

        }
        &__icon_location{
            margin-right: .5rem;
        }
        &__location{
            font-size: 1.2rem;
            display: flex;
            align-items: center;
        }
        &__rating{
            background-color: var(--color-primary);
            margin-left: 3rem;
            color: #fff;
            padding: 0 2.25rem;
            align-self: stretch;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        &__rating-average{
            font-size: 2.25rem;
            font-weight: 300;
        }
        &__rating-count{
            font-size: .8rem;
            text-transform: uppercase;
        }
    }
`;

export default StyledHotelOverview;