import Header from './Header';
import styled from 'styled-components'

type props = {
    children: React.ReactNode
}

const Container = styled.div`
    max-width: 120rem;
    margin: 2rem 2rem;
    background-color: var(--color-grey-light-1);
    box-shadow: var(--shadow-dark);
    min-height: 50rem;
`;

const Content = styled.div`
    display: flex;
`;

const SideBar = styled.nav`
    background-color: var(--color-grey-dark-1);
    flex: 0 0 18%;
`;

const Main = styled.main`
    background-color: #fff;
    flex: 1;
`;



function Layout({children}: props) {
    return (
        <Container>
            <Header></Header>
            <Content>
                <SideBar>Side bar</SideBar>
                <Main>main content</Main>
            </Content>
        </Container>
    )
}

export default Layout;