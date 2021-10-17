import styled from 'styled-components'
import SearchFrom from './SearchForm';

type props = {
    className?: string
}

function Header({className}: props) {
    return (
        <header className={className}>
            <img className="logo" src="img/logo.png" alt="hyatt logo" />
            <SearchFrom />
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="img/sprite.svg#icon-bookmark"></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="img/sprite.svg#icon-chat"></use>
                    </svg>
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src="img/user.jpg" alt="User photo" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">Jonas</span>
                </div>
            </nav>
        </header>
    )
}

const StyledHeader = styled(Header)`
    height: 7rem;
    background-color: #fff;
    border-bottom: 1px solid var(--color-grey-light-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;

    .logo {
        height: 3.25rem;
        margin-left: 2rem;
    }

    .user-nav {
        align-self: stretch;
        display: flex;
        align-items: center;

        & > * {
            padding: 0 2rem;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
        }

        & > *:hover {
            background-color: var(--color-grey-light-2);
        }

        &__icon-box{
          position: relative;
        }

        &__icon{
            height: 2.25rem;
            width: 2.25rem;
            fill: var(--color-grey-dark-2);
        }
        
        &__notification{
            font-size: .8rem;
            height: 1.75rem;
            width: 1.75rem;
            border-radius: 50%;
            background-color: var(--color-primary);
            color: #fff;
            position: absolute;
            top: 1.5rem;
            right: 1.1rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__user-photo{
            height: 3.75rem;
            border-radius: 50%;
            margin-right: 1rem;
        }
    }
`

export default StyledHeader;