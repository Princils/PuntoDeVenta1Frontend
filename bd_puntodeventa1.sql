CREATE DATABASE PuntoVentaCarlos;


CREATE TABLE PVusuario(
	idusuario SERIAL NOT NULL PRIMARY KEY,		--1
	usuario VARCHAR(100) NOT NULL,				--Admin
	password VARCHAR(200) NOT NULL,				--md5(123456)
	activo BOOLEAN NOT NULL DEFAULT TRUE,
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL
);

CREATE TABLE PVunidadmedida(
	idunidadmedida SERIAL NOT NULL PRIMARY KEY,	--1
	unidadmedida VARCHAR(100) NOT NULL,			--Unidadad
	nombrecorto VARCHAR(10) NOT NULL,			--U
	activo BOOLEAN NOT NULL DEFAULT TRUE,
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL
);

CREATE TABLE PVproducto(
	idproducto SERIAL NOT NULL PRIMARY KEY, 	--1
	producto VARCHAR(100) NOT NULL,				--led
	rutaimagen VARCHAR(200) NOT NULL,			--img/led.jpeg
	idunidadmedida INT NOT NULL,				--1
	precio DECIMAL(8,2) NOT NULL,				--50
	costopromedio DECIMAL(8,2) NOT NULL,		--55
	activo BOOLEAN NOT NULL DEFAULT TRUE,	
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL,
	FOREIGN KEY (idunidadmedida) REFERENCES PVunidadmedida(idunidadmedida)
);

CREATE TABLE PVcostoshistoricos(
	idcostoshistoricos SERIAL NOT NULL PRIMARY KEY,	--1
	idproducto INT NOT NULL,						--1(led)
	preciounitario DECIMAL(8,2) NOT NULL,			--$200
	preciototal DECIMAL(8,2) NOT NULL,				--$1000
	cantidadcomprada DECIMAL(8,2) NOT NULL,			--5
	activo BOOLEAN NOT NULL DEFAULT TRUE,
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL,
	FOREIGN KEY (idproducto) REFERENCES PVproducto(idproducto)
);

CREATE TABLE PVcliente(
	idcliente SERIAL NOT NULL PRIMARY KEY,		--1
	cliente VARCHAR(100) NOT NULL,				--(Publico general)
	numero VARCHAR(15) NOT NULL,				--3113000140
	activo BOOLEAN NOT NULL DEFAULT TRUE,
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL
);

CREATE TABLE PVserie(
	idserie SERIAL NOT NULL PRIMARY KEY,		--1
	serie VARCHAR(100) NOT NULL,				--(VENTAS SUCURSAL)
	nombrecorto VARCHAR(15) NOT NULL,			--VENTSUC1
	accion INT NOT NULL,						--1(VENTA), 2(BAJA)
	activo BOOLEAN NOT NULL DEFAULT TRUE,
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL
);

CREATE TABLE PVdocumento(
	iddocumento SERIAL NOT NULL PRIMARY KEY,	--1
	folio INT NOT NULL,							--#1 DE VENTSUCU1
	idserie INT NULL,							--1(VENTAS SUCURSAL)
	serie VARCHAR(15) NOT NULL,					--VENTSUC1
	idcliente INT NULL,							--1(Publico general)
	cliente VARCHAR(100) NOT NULL,				--Publico general
	accion INT NOT NULL,						--1(VENTA)
	neto DECIMAL(8,2) NOT NULL,					--$200
	descuento DECIMAL(8,2) NOT NULL,			--$80
	total DECIMAL(8,2) NOT NULL,				--$120
	cancelado BOOLEAN NOT NULL DEFAULT TRUE,
	activo BOOLEAN NOT NULL DEFAULT TRUE,
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL,
	FOREIGN KEY (idserie) REFERENCES PVserie(idserie)
	FOREIGN KEY (idcliente) REFERENCES PVcliente(idcliente)
);


CREATE TABLE PVmovimiento(
	idmovimiento SERIAL NOT NULL PRIMARY KEY,	--1
	iddocumento INT NOT NULL,					--doc #1
	idproducto INT NOT NULL,					--producto #1 (led)
	cantidad DECIMAL(8,2) NOT NULL,				--5
	preciounitario DECIMAL(8,2) NOT NULL,		--$40
	neto DECIMAL(8,2) NOT NULL,					--$200
	descuento DECIMAL(8,2) NOT NULL,			--$80
	total DECIMAL(8,2) NOT NULL,				--$120
	cancelado BOOLEAN NOT NULL DEFAULT TRUE,
	activo BOOLEAN NOT NULL DEFAULT TRUE,
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL
	FOREIGN KEY (idproducto) REFERENCES PVproducto(idproducto)
);

CREATE TABLE PVhistorial(
	idhistorial SERIAL NOT NULL PRIMARY KEY,	
	accion VARCHAR(100) NOT NULL,				-- ELIMINACION, DESACTIVACION, INSERCION.					
	datos TEXT NOT NULL,						-- SE ELIMINO EL DOCUMENTO X
	fechacreacion DATE NOT NULL,
	fechaactualizacion DATE NOT NULL

);