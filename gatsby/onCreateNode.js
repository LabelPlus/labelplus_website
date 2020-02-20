const { createFilePath } = require(`gatsby-source-filesystem`)

// "/docs/get-started/syntax-highlighting/" -> "/get-started/"
function getContentGroup(path) {
  var a = path.split('/');
  var tmp = "/";
  for (var i = 2; i < a.length - 2; i++) {
    tmp += a[i] + "/";
  }
  return tmp;
}

// "/docs/get-started/syntax-highlighting/" -> "/en/get-started/syntax-highlighting/"
function getI18nPath (path) {
  var regex =/(.*)\.(\w+)\/?$/;
  if (regex.test(path)) {
    const f = path.match(regex);
    return "/" + f[2] + f[1];
  }
  else {
    return "/en" + path;
  }
}

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `path`,
      value: path,
    })
    createNodeField({
      node,
      name: `i18n_path`,
      value: getI18nPath(path),
    })
    createNodeField({
      node,
      name: `content_group`,
      value: getContentGroup(path),
    })
  } else if (node.internal.type === 'Mdx') {
    const path = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'path',
      value: path,
    })
    createNodeField({
      node,
      name: `i18n_path`,
      value: getI18nPath(path),
    })
    createNodeField({
      node,
      name: `content_group`,
      value: getContentGroup(path),
    })
  }
}
