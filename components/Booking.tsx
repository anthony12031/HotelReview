import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

type Props = {
    className?: string
}

function Booking({className}: Props){

    let {t} = useTranslation();

    return (
        <div className={className}>
            <div className="cta">
                <h2 className="cta__book-now">
                    {t("common:goodNews")}
                </h2>
                <a className="btn" href="https://www.hyatt.com/es-ES/home" target="_blank">
                    <span className="btn__visible">{t("common:booking")}</span>
                    <span className="btn__invisible">Only 4 rooms left</span>
                </a>
            </div>
        </div>
    )
}

const StyledBook = styled(Booking)`
    .cta {
        padding: 3.5rem 0;
        text-align: center; 
        &__book-now {
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 2.5rem;
            text-transform: uppercase;
        }
    }

    .btn {
        display: inline-block;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 300;
        text-transform: uppercase;
        border-radius: 100px;
        border: none;
        background-image: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
        color: #fff;
        position: relative;
        overflow: hidden;
        &__visible {
            display: inline-block;
            padding: 2rem 7.5rem;
            height: 100%;
            width: 100%;
            transition: all .2s;
        }
        &__invisible {
            display: inline-block;
            position: absolute;
            left: 0;
            padding: 2rem 0;
            top: -100%;
            height: 100%;
            width: 100%;
            transition: all .2s;
        }

        &:hover .btn__visible{ 
            transform: translateY(100%);
        }
        &:hover .btn__invisible{ 
            top: 0;
         }
    }
`;

export default StyledBook;