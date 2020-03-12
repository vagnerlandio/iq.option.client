module.exports = {
    apps: [{
        name: 'MarketMaker',
        script: './dist/bin/MarketMaker.js',
        max_memory_restart: '100M'
    }]
}