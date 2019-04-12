module.exports = function (plop) {
    plop.setGenerator('Gatsby Blog Post', {
        description: 'Templates for Gatsby templates',
        prompts: [{
            type: 'input',
            name: 'title',
            message: 'Title of post:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Description of post:'
        },
    
        {
            type: 'list',
            name: 'category',
            message: 'Category:',
            choices: ['Tutorial', 'TIL', 'Narrative', 'Reflection'],
            filter: function(val) {
              return val.toLowerCase();
            },
        }
        // { name: 'date',
        // return new  Date();}
        
        ],
        actions: [{
            type: 'add',
            path: 'src/content/{{dashCase title}}.md',
            templateFile: 'src/plop-templates/blog-post.hbs'
        } ]
    });
  
    plop.setGenerator('stateless component', {
        description: 'template for stateless components',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this component:'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase  name}}.jsx',
            templateFile: 'src/plop-templates/stateless.hbs'
        },{
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase name}}.test.jsx',
            templateFile: 'src/plop-templates/tests.hbs'
        },
        {
            type: 'add',
            path: 'src/components/{{properCase name}}/index.jsx',
            templateFile: 'src/plop-templates/index.hbs'
        } ]
    });
};