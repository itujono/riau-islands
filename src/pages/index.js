import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Card, Row, Col } from 'antd'
import "../style/index.less";
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ data: { allContentfulArticle: article } }) => (
	<Layout>
		<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>

		<Row gutter={16}>
			{ article.edges.map(({ node }) => (
				<Col span={6} key={node.id}>
					<Link to={`post/${node.slug}`}>
						<Card
							hoverable
							key={node.id}
							cover={ <Image fluid={node.image ? node.image.fluid : "http://source.unsplash.com/random/"} /> }
						>
							<Card.Meta title={node.title} description={node.createdAt} />
						</Card>
					</Link>
				</Col>
			))}
		</Row>

		<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
			<Image />
		</div>
		<Button type="primary">
			<Link to="/page-2/">Go to page 2</Link>
		</Button>
	</Layout>
)

export const IndexQuery = graphql`
  query Index {
    allContentfulArticle {
      edges {
        node {
		  id
		  slug
          content {
            id
            content
          }
          title
		  author
          image {
			fluid(maxWidth: 300) {
				...GatsbyContentfulFluid
			}
            id
            file {
              url
              fileName
              contentType
            }
          }
          createdAt(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`

export default IndexPage
