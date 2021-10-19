import styled from 'styled-components'
import SearchFrom from './SearchForm';
import SvgIcon from './SvgIcon';
import Switch from "react-switch";
import { useTheme } from 'next-themes'
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { route } from 'next/dist/server/router';

type props = {
    className?: string
}

function Header({className}: props) {

    const [themeChecked, setThemeChecked] = useState(false);  
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    let router = useRouter();

    useEffect(()=> {
        setMounted(true);
    }, [])

    function handleThemeChange() {
       setThemeChecked(!themeChecked);
       setTheme(theme==='ligth' ? 'blue' : 'ligth');
    }

    function handleLocaleChange(locale: ChangeEvent<HTMLSelectElement>) {
        router.push('/', '/', {locale: locale.target.value});
    }

    if(!mounted) {
        return null;
    }

    return (
        <header className={className}>
            <img className="logo" src="img/logo.png" alt="hyatt logo" />
            <SearchFrom />
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <span className="user-nav__theme">Switch theme!</span>
                <Switch onChange={handleThemeChange} checked={themeChecked} uncheckedIcon={false} checkedIcon={false}/>
                </div>    
                <div className="user-nav__icon-box">
                    <select  className="user-nav__language" id="language" value={router.locale} onChange={(event) => {handleLocaleChange(event)}}>
                    {
                        router.locales?.map((locale) => (
                        <option key={locale} value={locale}>
                             {locale}
                        </option>
                        ))
                    }
                    </select>
                </div>
                <div className="user-nav__icon-box">
                    <SvgIcon iconName="icon-bookmark" width="2.25rem" heigth="2.25rem"/>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__user">
                    <img src="img/anthony-profile.jpeg" alt="User photo" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">Anthony</span>
                </div>
            </nav>
        </header>
    )
}

const StyledHeader = styled(Header)`
    height: 7rem;
    background-color: #fff;
    border-bottom: var(--line);
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

        &__language{
            border: none;
            outline: none;
            color: var(--color-grey-dark-2);
            font-size: 1.2rem;
        }

        &__icon{
            height: 2.25rem;
            width: 2.25rem;
            fill: var(--color-grey-dark-2);
        }

        &__theme{
            margin-right: 2rem;
            font-size: 1.2rem;
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