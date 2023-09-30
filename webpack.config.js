const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        // contacts: './src/js/contacts.js',
        // ОТДЕЛЬНЫЕ ДЖС ФАЙЛЫ НАДО ПРОПИСЫВАТЬ СЮДА
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
        },
    ],
    },
};