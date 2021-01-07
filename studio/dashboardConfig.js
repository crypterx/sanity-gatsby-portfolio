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
                  buildHookId: '5ff75f5b6e92fc008cbc17f4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2exyduhf',
                  apiId: 'fa76f8e3-c55e-4f58-8037-54298177560d'
                },
                {
                  buildHookId: '5ff75f5b5f920000e526e650',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ng215j88',
                  apiId: 'd1d2cf2f-fefb-4ee3-b2ef-c92a72e9ba54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crypterx/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ng215j88.netlify.app',
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
