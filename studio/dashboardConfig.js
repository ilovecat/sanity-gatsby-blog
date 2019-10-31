export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dbaa9c39412e4c603ab4973',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hqawox6a',
                  apiId: 'fbaed58b-6c04-4d74-a85a-f9dd95b55037'
                },
                {
                  buildHookId: '5dbaa9c376504090c97ce27d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zzxz2rms',
                  apiId: '95aefc96-d0de-4f49-9b3b-1fcfb64a0cf8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ilovecat/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zzxz2rms.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
