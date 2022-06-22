const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt'); 

const userModel = require('../../models/users/user.model');
const req = require('express/lib/request');


// ***************** function add user *****************
module.exports.add = (req) => {  
    return new Promise((resolve, reject) => {
        let user = req.body ;
        if(user){
            userModel.findOne({email:user.email}).then(async (data)=>{
                if(data){
                    resolve({
                        response: false,
                        token: null,
                        message: 'User exist',
                        user: data
                    });
                }else{
                    userDB = new userModel({
                        nom: user.nom,
                        prenom: user.prenom,
                        telephone:  user.telephone,
                        email:  user.email,
                        image:  req.file.path,
                        role:  user.role,
                    });
                    if(user.email)
                        await userDB.setPassword(user.password);
                    userDB.save((err,data)=>{
                        if(!err){
                            resolve({
                                response: true,
                                token: null,
                                message: 'User added successfully',
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
                }
            });
        }else{
            reject();
        }
    });
} 

// ***************** function update user *****************
module.exports.update = (req) => {
    return new Promise((resolve, reject) => {
        let obj = req.body;
        if(obj){
            userModel.findOneAndUpdate({_id:req.user.id}, obj)
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

// ***************** function delete user *****************
module.exports.delete = (req) => {
    return new Promise((resolve,reject) => {
        console.log('delete ==> ',req.user)

        userModel.findOneAndDelete({_id:req.user.id}, function (err, data) {
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
                    message: data != null ? 'Deleted User' : 'User doesnt exist',
                    data: data
                });
            }
        });
    })
} 

// ***************** Function get information user by id  *****************
module.exports.getUser = (id) => {
    return new Promise((resolve,reject) => {
        userModel.findOne({_id:id}).then((user)=>{
            console.log('=======>  ',user)
            condition = false;
            if(user)
                condition = true;
            resolve({
                response: condition,
                message: condition ? 'Get data successfully' : 'No data',
                data: user
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

// ***************** function list users *****************
module.exports.getListUsers = () => {  
    return new Promise(async (resolve, reject) => {
        let users = await userModel.find({});
        let condition = users.length > 0;
        resolve({
            response: condition,
            message: condition ? 'Get data successfully' : 'No data',
            data: users
        })
    });
} 

// ***************** function auth user *****************
module.exports.auth = (user) => {
    return new Promise((resolve, reject) => {
        if(user){
            userModel.findOne({email:user.email}).then(async (userData)=>{
                if(userData){
                    valid = await userData.validPassword(user.password);
                    token = valid == true ? await generateAccessToken(userData) : '' ;
                    resolve({
                        response: valid,
                        token: token,
                        message: valid ? 'User connected' : 'Verify your password',
                        data: valid ? userData : {}
                    });
                }else{
                    resolve({
                        response: false,
                        token: '',
                        message: "User dosen't exist",
                        data: {}
                    });
                }
            });
        }else{
            reject();
        }
    });
} 

// ***************** function generate token user *****************
function generateAccessToken(user){
    return(
            jwt.sign({
            id: user.id,
            role:user.role,
        }, process.env.TOKEN_SECRET, { expiresIn: '30d' })
    ) 
}

