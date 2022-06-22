const req = require('express/lib/request');
const publicationModel = require('../../models/forum/publication.model')

// ***************** function add produit *****************
module.exports.add = (req) => {  
    return new Promise((resolve, reject) => {
        
        let body = req.body ;
        if(body){
            publicationDB = new publicationModel(body);
            publicationDB.save((err,data)=>{
                if(!err){
                    resolve({
                        response: true,
                        message: 'Publication added successfully',
                        data: data
                    });
                }else{
                    resolve({
                        response: false,
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
            publicationModel.findOneAndUpdate({_id:req.params.id}, body)
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

        publicationModel.findOneAndDelete({_id:req.params.id}, function (err, data) {
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
        publicationModel.findOne({_id:id}).then((produit)=>{
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
        let produits = await publicationModel.find({});
        let condition = produits.length > 0;
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: produits
        })
    });
} 





