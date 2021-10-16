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
    border-bottom: var(--color-grey-light-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;

    .logo {
        height: 3.25rem;
        margin-left: 3rem;
    }

    .search {
        flex: 0 0 40%;
        display: flex;
        align-items: center;
        justify-content: center;

        &__input{
            font-family: inherit;
            font-size: inherit;
            color: inherit;
            background-color: var(--color-grey-light-2);
            border: none;
            padding: .7rem 2rem;
            border-radius: 100px;
            width: 90%;
            transition: all .2s;
            margin-right: -4.25rem;
            &:focus{
                outline: none;
                width: 100%;
                background-color: var(--color-grey-light-3);
            }

        }

        &__button{
            border: none;
            background-color: var(--color-grey-light-2);
            &:focus{
                outline: none;
            }
            &:active{
                transform: translateY(2px);
            }
        }

        &__input:focus + &__button {
            background-color: var(--color-grey-light-3);
        }

        &__icon{
            width: 2rem;
            height: 2rem;
            fill: var(--color-grey-dark-3);
        }
    }

    .user-nav {
        background-color: green;
        &__icon-box{

        }
        &__icon{
            height: 2.25rem;
            width: 2.25rem;
        }
        &__notification{

        }
        &__user-photo{
            height: 3.75rem;
            border-radius: 50%;
        }
        &__user-name{

        }
    }
`

export default StyledHeader;