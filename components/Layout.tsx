import styled from 'styled-components'
import Header from './Header';
import SideBar from './SideBar';

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

const Main = styled.main`
    background-color: #fff;
    flex: 1;
`;



function Layout({children}: props) {
    return (
        <Container>
            <Header />
            <Content>
                <SideBar />
                <Main>main content</Main>
            </Content>
        </Container>
    )
}

export default Layout;