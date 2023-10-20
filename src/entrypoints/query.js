export const query = `query CategoryTree3LevelsDeep {
    site {
      categoryTree {
        ...CategoryFields
        children {
          ...CategoryFields
          children {
            ...CategoryFields
          }
        }
      }
    }
  }
  
  fragment CategoryFields on CategoryTreeItem {
    name
    path
    entityId
  }`;    