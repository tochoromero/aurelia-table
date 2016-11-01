module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: 'au-table.js', loader: './au-table!js' },
            { test: 'au-table-pagination.js', loader: './au-table-pagination!js' },
            { test: 'au-table-select.js', loader: './au-table-select!js' },
            { test: 'au-table-sort.js', loader: './au-table-sort!js' }
        ]
    }
};