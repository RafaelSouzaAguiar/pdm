-- Active: 1717888795703@@mysql-1ad56039-rafaelsouzaaguiar-pdm.f.aivencloud.com@13972@20241_fatec_ipi_pdmn

SELECT * from tb_lembrete

insert into tb_lembrete(texto) VALUES ('Fazer Café'),('Ver um filme')

create table tb_lembrete(
  id INT PRIMARY KEY AUTO_INCREMENT,
  texto varchar(1000) not NULL 
);