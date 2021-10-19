import styled from 'styled-components'
import SvgIcon from './SvgIcon';
import useTranslation from 'next-translate/useTranslation'

type SideBarProps = {
    className?: string
}

const NavLink = styled.a`
      &:link,
      &:visited{
            color: var(--color-grey-light-1);
            text-decoration: none;
            text-transform: uppercase;
            display: block;
            padding: 1.5rem 3rem;
            position: relative;
            z-index: 10;    
        }
        span {
            margin-left: 2rem;
        }
`;

type ListItemsProps = {
    active?: boolean
}


const ListItem = styled.li<ListItemsProps>`
      &{
            font-size: 1.4rem;
            list-style: none;
            position: relative;
            &:not(:last-child) {
                margin-bottom: .5rem;
            }
        }
        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: ${(props) => props.active ? "100%" : "3px"};
            background-color: var(--color-primary);
            transform: ${(props) => props.active ? "scaleY(1)" : "scaleY(0)"};
            transition: transform .2s, width .4s .2s, background-color .1s;
        }

        &:hover::before{
            transform: scaleY(1);
            width: 100%;
        }

        &:active::before {
            background-color: var(--primary-color-light);
        }
`;



function SideBar({className}: SideBarProps) {
    let {t} = useTranslation();
    return (
        <nav className={className}>
            <ul className="side-nav">
                <ListItem active>
                    <NavLink href="#">
                        <SvgIcon iconName="icon-home"/>
                        <span>{t("common:home")}</span>
                    </NavLink>
                </ListItem>  
                <ListItem>
                    <NavLink href="#">
                        <SvgIcon iconName="icon-aircraft-take-off"/>
                        <span>{t("common:flight")}</span>
                    </NavLink>
                </ListItem>  
                <ListItem>
                    <NavLink href="#">
                        <SvgIcon iconName="icon-key"/>
                        <span>{t("common:carRental")}</span>
                    </NavLink>
                </ListItem>  
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
    }
`;

export default StyledSideBar;