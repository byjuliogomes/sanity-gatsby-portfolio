export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9b14c761873e480487f335',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v93mpwoq',
                  apiId: 'f872ace2-6021-4043-9cbd-e3dab0ee542b'
                },
                {
                  buildHookId: '5f9b14c7b02c81414ec780cb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wbiw4mb9',
                  apiId: 'f34960c6-6afa-434d-8011-7052fe69f3f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juliogomes92/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wbiw4mb9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
