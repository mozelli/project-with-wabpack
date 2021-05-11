# Configuração básica de um projeto em Node JS com Webpack

## Arquivo de entrada
O arquivo de inicialização do projeto é `./src/index.js`.
Caso queira mudar, altere também o arquivo `webpack.config.js`.

```
module.exports {
    entry: './src/index.js',
    ///
}
```

## Build
Para fazer o build do projeto, basta executar o seguinte comando no terminal:

`npm run build`

## Build e Watch
Para fazer o build do projeto e continuar observando os resultados das alterações no código, basta executar o seguinte comando no terminal:

`npm run watch`

## Build, Watch e Server
Para fazer o build do projeto, continuar observando os resultados das alterações no código e subir o serviço para um servidor local, basta executar o seguinte código:

`npm run serve`

O serviço estará rodando em `localhost:9000`, mas se quiser alterar, modifique o arquivo `webpack.config.js`:

```
module.exports {
    ///
    devServer: { 
        ///
        port: 9000,
    }
}
```