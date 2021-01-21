# Desafio-Tecnico
desafio técnico Zukk

## Tutorial de configuração

### Instalação de dependências
neste projeto haverá duas pastas, uma chamada zukk que conterá o front-end e a pasta back-end, digite no seu terminal dentro de cada pasta o seguinte comando

 // dentro da pasta zukk
$ npm install

 // dentro da pasta back-end
$ npm install

### Variáveis de ambiente
dentro da pasta back-end você deverá criar um arquivo .env contendo no mínimo duas variáveis. que contém o usuário e a senha do seu banco de dados.

Ex:
// arquivo .env dentro da pasta back-end

MYSQL_USER=root
MYSQL_PASSWORD=root

// fim do arquivo


### Banco de dados
O banco de dados utilizado foi o MySQL para montar o banco de dados certifique-se que o MySQL está instalado e devidamente e rodando. Para isso digite no seu terminal

// terminal
$ sudo service mysql status
// caso não apareça "active (running)" ou exiba qualquer erro, consulte a documentação do MySQL para reinstalar o programa.

// terminal dentro da pasta raiz.
$ sudo mysql -u (seu usuário mysql aqui) -p
$ (sua senha do mysql)

// cli do MySQL
$$ source zukk.sql

ou baixe o MySQL Workbench e copie o que está dentro do arquivo zukk.sql e rode no MySQL Workbench

### Iniciando servidores locais - back-end

para iniciar o back-end digite em seu terminal na pasta back-end o seguinte comando.

// terminal na pasta back-end.
$ npm start

caso queira a qualquer alteração do back-end reiniciar o servidor local digite.

// terminal na pasta back-end.
$ npm run start:watch

### Iniciando servidores locais - front-end

para iniciar o front-end digite em seu terminal na pasta zukk o seguinte comando.

// terminal na pasta zukk.
$ npm start