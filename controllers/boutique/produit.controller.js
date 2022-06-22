const req = require('express/lib/request');
const produitModel = require('../../models/boutique/produit.model')

// ***************** function add produit *****************
module.exports.add = (req) => {  
    return new Promise((resolve, reject) => {
        
        let body = req.body ;
        if(body){
            produitDB = new produitModel(body);
            produitDB.save((err,data)=>{
                if(!err){
                    resolve({
                        response: true,
                        token: null,
                        message: 'Product added successfully',
                        user: data
                    });
                }else{
                    resolve({
                        response: false,
                        token: null,
                        message: 'You have missed data',
                        user: err
                    });
                }
            })
        }else{
            reject();
        }
    });
} 

// ***************** function update produit *****************
module.exports.update = (req) => {
    return new Promise((resolve, reject) => {
        let body = req.body;
        if(body){
            produitModel.findOneAndUpdate({_id:req.params.id}, body)
            .then((res) =>{
                resolve({
                    response: true,
                    message: 'User modify successfully',
                    data: res
                });
            }).catch(err =>{
                reject(err)
            });
        }else{
            reject();
        }
    });
} 

// ***************** function delete produit *****************
module.exports.delete = (req) => {
    return new Promise((resolve,reject) => {

        produitModel.findOneAndDelete({_id:req.params.id}, function (err, data) {
            if (err){
                reject({
                    response: false,
                    message: 'error',
                    data: err
                });
            }
            else{
                resolve({
                    response: data != null ,
                    message: data != null ? 'Deleted produit' : 'Produit doesnt exist',
                    data: data
                });
            }
        });
    })
} 

// ***************** Function get   by id  *****************
module.exports.get = (id) => {
    return new Promise((resolve,reject) => {
        produitModel.findOne({_id:id}).then((produit)=>{
            condition = false;
            if(produit)
                condition = true;
            resolve({
                response: condition,
                message: condition ? 'Get data successfully' : 'No data',
                data: produit
            });
        }).catch((err)=>{
            reject({
                response: false,
                message: 'No ID provided',
                data: err
            })
        })
    })
} 

// ***************** function list  *****************
module.exports.getList = () => {  
    return new Promise(async (resolve, reject) => {
        let produits = await produitModel.find({});
        let condition = produits.length > 0;
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: produits
        })
    });
} 





