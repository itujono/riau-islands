import React from 'react'
import { Link } from "gatsby";
import { List, Icon } from 'antd';

const Share = ({ pathname, url, title }) => {

    const twitter = `https://twitter.com/intent/tweet?url=${url + pathname}&text=${title} by @rivayudha`;
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${url + pathname}`;

    return (
        <List grid={{ gutter: 16, column: 4 }}>
            <List.Item>
                <Link to={`/${twitter}`}>
                    <Icon type="twitter" />
                </Link>
            </List.Item>
            <List.Item>
                <Link to={`/${fb}`}>
                    <Icon type="facebook" />
                </Link>
            </List.Item>
        </List>
    )
}

export default Share
