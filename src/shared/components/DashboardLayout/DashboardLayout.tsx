import { Container } from 'react-bootstrap';
import { Header } from '../Header/Header';

type Props = {
    children: React.ReactNode;
};

export const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Container>{children}</Container>
        </>
    );
};
