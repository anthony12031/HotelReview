import styled from 'styled-components'

type SideBarProps = {
    className?: string
}

type SvgProps = {
    className?: string,
    iconName?: string,
    fill?: string
}

function SvgIcon({className, iconName}: SvgProps) {
    return (
        <svg className={className}>
            <use xlinkHref={`img/sprite.svg#${iconName}`}></use>
        </svg>
    )
}

const StyledSvgIcon = styled(SvgIcon)`
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;
    fill: currentColor;
`;

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
    return (
        <nav className={className}>
            <ul className="side-nav">
                <ListItem active>
                    <NavLink href="#">
                        <StyledSvgIcon iconName="icon-home"/>
                        <span>Home</span>
                    </NavLink>
                </ListItem>  
                <ListItem>
                    <NavLink href="#">
                        <StyledSvgIcon iconName="icon-aircraft-take-off"/>
                        <span>Flight</span>
                    </NavLink>
                </ListItem>  
                <ListItem>
                    <NavLink href="#">
                        <StyledSvgIcon iconName="icon-key"/>
                        <span>Car Rental</span>
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