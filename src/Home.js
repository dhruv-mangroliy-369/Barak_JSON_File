import './index.css';
import BlogList from './BlogList';
import useFetch from './useFetch.js';
// import { onAuthStateChanged } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

const Home = () => {
    const { data: complains, ispending, err } = useFetch('http://localhost:8001/complains');

    
    return (
        <>
            <div className="home">

                {err && <div>{err}</div>}
                {ispending && <div><h2><b>"Loading..."</b></h2></div>}
                {!ispending && <>
                    <div className="card" >
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {complains && < BlogList complains={complains.filter((complains) => (complains.programme === 'B.Tech'))} heading={"B.Tech Complains"} />}
                            </li>
                        </ul>
                    </div>

                    <div className="card" >
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {complains && < BlogList complains={complains.filter((complains) => (complains.programme === 'M.Tech'))} heading={"M.Tech Complains"} />}
                            </li>
                        </ul>
                    </div>

                    <div className="card" >
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {complains && < BlogList complains={complains.filter((complains) => (complains.programme === 'Phd'))} heading={"Phd Complains"} />}
                            </li>
                        </ul>
                    </div>
                </>}



            </div>
        </>
    );
}

export default Home;