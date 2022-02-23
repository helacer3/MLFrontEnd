"use strict"

const baseUrlAPI = "http://localhost:3000";
var assert       = require('assert');
var request      = require('supertest');
var chai         = require('chai');
var chaiHttp     = require('chai-http');
var request      = request(baseUrlAPI);
chai.use(chaiHttp);

describe('apiTest', function() {

    // valida código Respuesta - Request By Term
    describe('GET', function(){
        it('Valida Respuesta Servicio Productos Por Filtro', function(done){
            let reqItem = { params: { "q" : "silla" , "limit": 4 } } 
            request.get('/items')
                .query(reqItem)
                .expect(200)
                .expect("Content-Type", /json/)
                .end((err, res) => {
                    done();
                });
        });
    });
    
    // valida código Respuesta - Request Detail Product
    describe('GET', function(){
        it('Valida Respuesta Servicio Detalle Producto', function(done){
            request.get('/item/MLA916313965')
                .expect(200)
                .expect("Content-Type", /json/)
                .end((err, res) => {
                    done();
                });
         });
    });
	
	// valida código Respuesta - Request Description Product
    describe('GET', function(){
        it('Valida Respuesta Servicio Descripción Producto', function(done){
            request.get('/item/MLA916313965/description')
                .expect(200)
                .expect("Content-Type", /json/)
                .end((err, res) => {
                    done();
                });
         });
    });

    // valida código Respuesta: Request By Term - Without Results
    describe('GET', function(){
        it('Valida Coódigo Respuesta - No se encontraron PRoductos', function(done){
            let reqItem = { params: { "q" : "productoInexistente" , "limit": 4 } } 
            request.get('/items')
                .query(reqItem)
                .expect(200)
                .expect("Content-Type", /json/)
                .end((err, res) => {
                    done();
                });
        });
    });
    
    // valida código Respuesta: Request Detail Product - Without Results
    describe('GET', function(){
        it('Valida Código Respuesta - Código Incorrecto Producto', function(done){
            request.get('/item/CodigoInexistente')
                .expect(404)
                .expect("Content-Type", /json/)
                .end((err, res) => {
                    done();
                });
         });
    });

    // valida estructura respuesta Get Product List By Term
    describe('GET', function(){
        it('Valido formato respuesta Productos Por Filtro', function(done){
            let reqItem = { params: { "q" : "silla" , "limit": 4 } } 
            chai.request(baseUrlAPI)
                .get('/items')
                .query(reqItem)
                .end( function(err,res) {
                    chai.expect(res).to.have.property('status');
                    chai.expect(res).to.have.property('body');
                    chai.expect(res).to.have.property('error');
                    done();
                });
        });
    });

    // valida estructura respuesta Get Product Detail
    describe('GET', function(){
        it('Valido formato respuesta Detalle Producto', function(done){
            chai.request(baseUrlAPI)
                .get('/item/MLA916313965')
                .end( function(err,res) {
                    chai.expect(res).to.have.property('status');
                    chai.expect(res).to.have.property('body');
                    chai.expect(res).to.have.property('error');
                    done();
                });
        });
    });
});
