import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    color: var(--color-primary);
    font-size: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;
    &:hover{
        color: var(--color-grey-dark-1);
    }
    &:focus{
        outline: none;
    }  
`;

export default StyledButton;