const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const ProjectTemplate = path.resolve("src/templates/project.js");
    resolve(
      graphql(`
        {
          allContentfulProject {
            edges {
              node {
                id
                slug
                projectTitle
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProject.edges.forEach(project => {
          createPage({
            path: `work/${project.node.slug}`,
            component: ProjectTemplate,
            context: {
              slug: project.node.slug
            }
          });
        });
        return;
      })
    );
  });
};
