import { useParams } from "react-router";


function CoinDetailsPage(){
    const {coinId} = useParams();
    return (
        <>
            <h1>Coin Details page {coinId}</h1>
        </>
    )
}

export default CoinDetailsPage;
