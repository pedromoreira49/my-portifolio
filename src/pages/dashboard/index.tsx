import { UserInfo } from "../../components/UserInfo";
import { Config } from "../../components/Config";
import './styles.css';

export function Dashboard(){
    return(
        <div className="main-container">
            <UserInfo />
            <div className="info-projects">
                <div className="container-projects">
                    <div className="header-repo">
                        <div className="title-repo">
                            <h2>Repositories:</h2>
                        </div>
                        <div className="config-repo">
                            
                        </div>
                    </div>
                    <div>
                        <Config layoutRepos='card'/>
                    </div>
                </div>
            </div>
        </div>
    )
}