import {useState, useEffect} from 'react';
import { ImGit } from 'react-icons/im';
import { api } from '../../services/api';

import './styles.css';

export function ListRepos(){
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        api.get('users/pedromoreira49/repos').then(response => {
            setRepos(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <div className="repo-list">
            <ul>
                {
                    repos.slice(0,8).map(repo => (
                        <div className="repo-info">
                            <li>
                                <h2><ImGit />{repo.name}</h2>
                                <p>{repo.language}</p>
                                <p>{repo.created_at}</p>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
