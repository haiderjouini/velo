const req = require('express/lib/request');
const formationModel = require('../../models/formations/formation.model')

// ***************** function add produit *****************
module.exports.add = (req) => {  
    return new Promise((resolve, reject) => {
        
        let body = req.body ;
        if(body){
            formationDB = new formationModel(body);
            formationDB.save((err,data)=>{
                if(!err){
                    resolve({
                        response: true,
                        token: null,
                        message: 'Formation added successfully',
                        data: data
                    });
                }else{
                    resolve({
                        response: false,
                        token: null,
                        message: 'You have missed data',
                        data: err
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
            formationModel.findOneAndUpdate({_id:req.params.id}, body)
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

        formationModel.findOneAndDelete({_id:req.params.id}, function (err, data) {
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
        formationModel.findOne({_id:id}).then((produit)=>{
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
        let produits = await formationModel.find({});
        let condition = produits.length > 0;
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: produits
        })
    });
} 





