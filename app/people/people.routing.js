angular.module('app.people')
    .config(routing)

function routing($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            component: 'peopleList'
        })
        .state('person', {
            url: '/person/:id',
            component: 'personDetail'
        })

    $urlRouterProvider.otherwise('/')
}