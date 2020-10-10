create database TVStore;
use TVStore;

create table tvs
(
    id    bigint auto_increment
        primary key,
    brand varchar(45)     not null,
    model varchar(45)     not null,
    price int default 100 not null
);