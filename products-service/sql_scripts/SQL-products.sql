create table product_model (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
title text NOT NULL,
description text,
price int,
image_id text
);

create table stock_model (
product_id uuid,
count int,
FOREIGN KEY ("product_id") REFERENCES "product_model" ("id")
);

create extension if not exists "uuid-ossp";

insert into product_model (id, title, price, description, imageId) values 
('7567ec4b-b10c-48c5-9345-fc73c48a80a4','Large family book-album', '149','Large family book-album (leather) burgundy', 'image1'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a0', 'My goals and achievements book-album', '129', 'My goals and achievements book-album (blue) leather', 'image2'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a2', 'Our familys recipes album book', '149', 'Our familys recipes album book (brown) leather', 'image3'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a1', 'Advice and love book-album', '120', 'Advice and love book-album (white)', 'image4'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a3', 'Our Child Book Album', '149', 'Our Child Book Album (Pink)', 'image5'),
('7567ec4b-b10c-48c5-9345-fc73348a80a1', 'Sabaneev. Hunters book', '160', 'Sabaneev. Hunters book', 'image6'),
('7567ec4b-b10c-48c5-9445-fc73c48a80a2', 'Sabaneev. Hunters book (in a gift case)', '170', 'Sabaneev. Hunters book (with bronze onlays, in a gift case)', 'image7'),
('7567ec4b-b10c-45c5-9345-fc73c48a80a1', 'Gift case', '15', 'Gift case', 'image8')


insert into stock_model (product_id, count) values 
('7567ec4b-b10c-48c5-9345-fc73c48a80a4','4'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a0','6'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a2','7'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a1','12'),
('7567ec4b-b10c-48c5-9345-fc73c48a80a3','7'),
('7567ec4b-b10c-48c5-9345-fc73348a80a1','8'),
('7567ec4b-b10c-48c5-9445-fc73c48a80a2','2'),
('7567ec4b-b10c-45c5-9345-fc73c48a80a1','3')