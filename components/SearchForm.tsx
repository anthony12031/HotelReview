import styled from 'styled-components'

type props = {
    className?: string
}

function SearchForm({className}: props) {
    return (
        <form action="#" className={`${className} search`}>
            <input className="search__input" type="text" placeholder="search hotels" />
            <button className="search__button">
                <svg className="search__icon">
                    <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
                </svg>
            </button>
        </form>
    )
}

const StyledForm = styled(SearchForm)`
        flex: 0 0 40%;
        display: flex;
        align-items: center;
        justify-content: center;

        .search__input{
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

        .search__button{
            border: none;
            background-color: var(--color-grey-light-2);
            &:focus{
                outline: none;
            }
            &:active{
                transform: translateY(2px);
            }
        }

        .search__input:focus + .search__button {
            background-color: var(--color-grey-light-3);
        }

        .search__icon{
            width: 2rem;
            height: 2rem;
            fill: var(--color-grey-dark-3);
        }
`;

export default StyledForm;