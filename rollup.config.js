import babel from 'rollup-plugin-babel';


export default {
    input: 'src/event-bus.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    }, 
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};