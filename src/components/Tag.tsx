import React, {FC, useState} from 'react';
import Tags from "./type/Tags";

const items = [
    {id: 1, title: "html"},
    {id: 2, title: "js"},
    {id: 3, title: "react"},
    {id: 4, title: "TypeScript"},
]
const Tag: FC = () => {
    const [tags] = useState<Tags[]>(items);

    return <div>
        <ul className="tags">
            {tags.map((item, i) =>
                <li key={i}>{item.title}</li>
            )}
        </ul>
    </div>
};

export default Tag;
