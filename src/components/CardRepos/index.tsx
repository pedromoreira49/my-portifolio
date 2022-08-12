import {useState, useEffect} from 'react';

import { AiFillFolderOpen } from 'react-icons/ai';

import { api } from '../../services/api';

export function CardRepos(){

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        api.get('users/pedromoreira49/repos').then(response => {
            setRepos(response.data);
            console.log(response.data);
        })
    }, []);


    return(
        <div>
            {
                repos.slice(0,6).map(repo => (
                    <div className="card-project">
                        <h2><AiFillFolderOpen />{repo.name}</h2>
                        <p>{repo.description}</p>
                        <div className="language">
                            <p>{repo.language}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}