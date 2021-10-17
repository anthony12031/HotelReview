import styled from 'styled-components'

type props = {
    className?: string
}

function SideBar({className}: props) {
    return (
        <nav className={className}>
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-home"></use>
                        </svg>
                        <span>Home</span>
                    </a>
                </li>  
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-aircraft-take-off"></use>
                        </svg>
                        <span>Flight</span>
                    </a>
                </li>  
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-key"></use>
                        </svg>
                        <span>Car Rental</span>
                    </a>
                </li>  
            </ul>
        </nav>
    );
}

const StyledSideBar = styled(SideBar)`
    background-color: var(--color-grey-dark-1);
    flex: 0 0 18%;
    display: flex;
    flex-direction: column;

    .side-nav{
        margin-top: 3.5rem;
        &__item{
            font-size: 1.4rem;
            list-style: none;
            position: relative;
            &:not(:last-child) {
                margin-bottom: .5rem;
            }
        }
        &__item::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 3px;
            background-color: var(--color-primary);
            transform: scaleY(0);
            transition: transform .2s, width .4s .2s, background-color .1s;
        }
        &__item:hover::before,
        &__item--active::before{
            transform: scaleY(1);
            width: 100%;
        }

        &__item:active::before {
            background-color: var(--primary-color-light);
        }

        &__link:link,
        &__link:visited{
            color: var(--color-grey-light-1);
            text-decoration: none;
            text-transform: uppercase;
            display: block;
            padding: 1.5rem 3rem;
            position: relative;
            z-index: 10;    
        }
        &__icon{
            width: 1.75rem;
            height: 1.75rem;
            margin-right: 2rem;
            fill: currentColor;
        }
    }
`;

export default StyledSideBar;