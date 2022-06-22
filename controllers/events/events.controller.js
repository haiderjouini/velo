const req = require('express/lib/request');


// ***************** function add  *****************
module.exports.add = (req) => {  
    return new Promise((resolve, reject) => {
      resolve({
            response: false,
            message: 'add',
            user: {}
        })
    });
} 

// ***************** function update  *****************
module.exports.update = (req) => {
    return new Promise((resolve, reject) => {
        resolve({
            response: false,
            message: 'update',
            user: {}
        })
    });
} 

// ***************** function delete  *****************
module.exports.delete = (req) => {
    return new Promise((resolve,reject) => {
        resolve({
            response: false,
            message: 'delete',
            user: {}
        })
    })
} 

// ***************** Function get   by id  *****************
module.exports.get = (id) => {
    return new Promise((resolve,reject) => {
        resolve({
            response: false,
            message: 'get',
            user: {}
        })
    })
} 

// ***************** function list  *****************
module.exports.getList = () => {  
    return new Promise(async (resolve, reject) => {
        resolve({
            response: false,
            message: 'getList',
            user: {}
        })
    });
} 





