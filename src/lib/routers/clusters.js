module.exports = {
    url: '/api/clusters',

    setup: ({ router, logger, context, reportUserError }) => {
        router.get('/contexts', function (req, res) {
            return context.clusterEngine.fetchContext()
        })

        router.post('/activate', function (req, res) {
            return context.clusterEngine.activateCluster(req.body)
        })
    },
}
