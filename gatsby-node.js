
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const articlePage = path.resolve('src/templates/article.js')
        resolve(graphql(`
            {
                allContentfulArticle(limit: 20) {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
            }
        `).then(response => {
                if (response.errors) {
                    reject(response.errors)
                }
                response.data.allContentfulArticle.edges.forEach(({ node }) => {
                    createPage({
                        path: 'post/' + node.slug,
                        component: articlePage,
                        context: {
                            slug: node.slug
                        }
                    })
                });
                return
            })
        )
    })
}