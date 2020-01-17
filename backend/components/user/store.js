const Model = require('./model');

const addUser = async user => {
    const myUser = await new Model(user);
    return await myUser.save();
}

const getUsers = async filterUser => {
    let filter = {};
    if (filterUser !== null) {
        filter = {mail: filterUser}
    }
    const users = await Model.find(filter);
    return users;
}

const updateUser = async (id, name, imgSrc, mail) => {
    const foundUser = await Model.findOne({
        _id: id
    });
    if (name) {        
       foundUser.name = name;
       console.log(name);
    }
    if (imgSrc) {        
       foundUser.imgSrc = imgSrc;
    }
    if (mail) {        
       foundUser.mail = mail;
    }
    
    console.log(foundUser);
    const updatedUser = await foundUser.save();
    console.log(updatedUser);
    return updatedUser;
}

const removeUser = async id => {
    const borrado = await Model.deleteOne({
        _id: id
    });
    return borrado;
}


module.exports = {
    add: addUser,
    list: getUsers,
    update: updateUser,
    remove: removeUser
}