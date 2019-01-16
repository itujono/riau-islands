import React, { Component } from 'react'
import { graphql, Link } from "gatsby";
import { Row, Col, List, Button, Icon } from 'antd';

class Article extends Component {
    render() {
        const { title, image, content, createdAt, author } = this.props.data.contentfulArticle

        return (
            <div className="article-page">
                <Row type="flex" justify="center" align="middle">
                    <Col span={10}>
                        <Row className="navigator">
                            <Col>
                                <Link to="../">
                                    <Button type="dashed">
                                        <Icon type="left" />
                                        Back
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row className="title">
                            <Col>
                                <h2>{title}</h2>
                                <List grid={{ gutter: 16, column: 4 }}>
                                    <List.Item>
                                        { createdAt }
                                    </List.Item>
                                    <List.Item>
                                        { author }
                                    </List.Item>
                                </List>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={image.file.url} alt={image.file.fileName} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                { content.content }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
    
export default Article

export const pageQuery = graphql`
    query ArticleQuery($slug: String!) {
        contentfulArticle(slug: { eq: $slug }) {
            id
            slug
            title
            author
            image {
                id
                file {
                    url
                    fileName
                    contentType
                }
            }
            content {
                id
                content
            }
            createdAt(formatString: "DD MMM YYYY")
        }
    }
`