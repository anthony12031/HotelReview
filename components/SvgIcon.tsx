import styled from 'styled-components'

type SvgProps = {
    className?: string,
    iconName?: string,
    width?: string,
    heigth?: string,
    fill?: string
}

function SvgIcon({className, iconName}: SvgProps) {
    return (
        <svg className={className}>
            <use xlinkHref={`img/sprite.svg#${iconName}`}></use>
        </svg>
    )
}

const StyledSvgIcon = styled(SvgIcon)<SvgProps>`
    width: ${(props) => props.width ? props.width : '1.75rem'};
    height: ${(props) => props.heigth ? props.heigth : '1.75rem'};
    fill: ${(props) => props.fill ? props.fill : 'currentColor'};
`;

export default StyledSvgIcon;