## Istruzioni

Dipendenze di base:\

node >= 9.4\
npm >= 5.6\
php >= 7.0\
composer > 1.2


## Editare file .env (project_dir)
E' necessario configurare alcune info di base relative al db:

DB_CONNECTION=mysql\
DB_HOST=127.0.0.1\
DB_PORT=3306\
DB_DATABASE=zanichelli\
DB_USERNAME=root\
DB_PASSWORD=password

## Creazione DB vuoto
mysql -uroot -ppassword < CREATE DATABASE zanichelli;

## Aggiornamento dipendenze Php
cd <project_home>\
composer install

## Aggiornamento dipendenze Javascript
cd <project_home>\
npm install

## Deploy DB e Seeding tabelle
cd <project_home>\
php artisan migration\
php artisan db:seed


## Init Built-in Server Web
php artisan serve

## Test App API Consumer (ReactJs) 
Puntare con il browser ad http://localhost:8000/

## OpenApi3.0 Json File (auto-generated) 
Puntare ad http://localhost:8000/openApi3.json
## OpenApi3.0 Yaml File (auto-generated) 
Puntare ad http://localhost:8000/openApi3.yaml

## API Documentation (auto-generated)
cd <project_home>\
php artisan apidoc:generate\
Puntare ad http://localhost:8000/docs\
(ignorare gli esempi di richieste e risposte poiche' il generatore al momento non supporta l'invio di parametri in formato json)