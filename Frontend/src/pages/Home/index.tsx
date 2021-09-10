import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="junbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das vendas</p>
                    <hr />
                    <p>Esta aplicaçao consiste em exivir um dashboard a partir de todos os compodentes fornecidos pelo backend construido em S  pring Boot</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">Access dashboard</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;