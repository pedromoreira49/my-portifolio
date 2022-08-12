import {useEffect, useState} from "react";
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook, AiFillRedditCircle, AiFillInstagram} from 'react-icons/ai';
import { GoGear } from 'react-icons/go';

import { api } from "../../services/api";

import './styles.css';

import { ListRepos } from "../../components/ListRepos";
import { CardRepos } from "../../components/CardRepos";
import { Config } from "../../components/Config";

export function Dashboard(){

    const [info, setInfo] = useState([]);

    useEffect(() => {
        api.get('users/pedromoreira49').then(response => {
            setInfo(response.data);
            console.log(response.data);
        })
    }, []);
    return(
        <div className="main-container">
            <div className="info-profile">
                <div className="profile">
                    <div className="myImg">
                        <img src={info.avatar_url}/>
                    </div>
                    <h2>{info.name}</h2>
                    <p>{info.bio}</p>
                </div>
                <div className="social">
                    <h2>Social webs:</h2>
                    <ul>
                        <li><a target="_blank" href="https://github.com/pedromoreira49"><AiFillGithub size={30}/>My github</a></li>
                        <li><a target="_blank" href="https://github.com/pedromoreira49"><AiFillTwitterCircle size={30}/>My Twitter</a></li>
                        <li><a target="_blank" href="https://github.com/pedromoreira49"><AiFillLinkedin size={30}/>My Linkedin</a></li>
                        <li><a target="_blank" href="https://github.com/pedromoreira49"><AiFillFacebook size={30}/>My Facebook</a></li>
                        <li><a target="_blank" href="https://github.com/pedromoreira49"><AiFillRedditCircle size={30}/>My Reddit</a></li>
                        <li><a target="_blank" href="https://github.com/pedromoreira49"><AiFillInstagram size={30}/>My Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="info-projects">
                <div className="container-projects">
                    <div className="header-repo">
                        <div className="title-repo">
                            <h2>Repositories:</h2>
                        </div>
                        <div className="config-repo">
                            <Config />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}