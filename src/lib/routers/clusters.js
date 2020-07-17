module.exports = {
    url: '/api/clusters',

    setup: ({ router, logger, context, reportUserError }) => {
        router.get('/', function (req, res) {
            return context.clusterEngine.fetchList();
        })

        router.get('/active', function (req, res) {
            return context.clusterEngine.getActiveCluster();
        })

        router.post('/active', function (req, res) {
            return context.clusterEngine.setActiveCluster(req.body.name);
        })
    },
}
