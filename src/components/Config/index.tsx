import { useState, useEffect } from 'react';
import { GoGear } from 'react-icons/go';

import { ListRepos } from "../../components/ListRepos";
import { CardRepos } from "../../components/CardRepos";

type ConfigProps = {
    layoutRepos: string
}

export function Config(props: ConfigProps){

    const [configs, setConfigs] = useState<string[]>([
        'list',
        'card'
    ]);

    return(
        <div>
            <h2><GoGear /></h2>
            {
                props.layoutRepos == configs[0] ? <ListRepos /> : <CardRepos />
            }
        </div>
    )
}
