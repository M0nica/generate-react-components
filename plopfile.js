module.exports = function (plop) {
    plop.setGenerator('stateless component', {
        description: 'application controller logic',
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
            path: 'src/components/{{name}}.jsx',
            templateFile: 'src/plop-templates/stateless.hbs'
        },{
            type: 'add',
            path: 'src/components/{{name}}.test.jsx',
            templateFile: 'src/plop-templates/tests.hbs'
        } ]
    });
};