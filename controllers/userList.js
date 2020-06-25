const UserDetails =require('./../models/userDetails'),
      mongoose    =require('mongoose');

function findUsers(req,res) {
  UserDetails.find()
  .then(found_users=>{
    res.status(200).send(found_users);
  })
  .catch(err=>{
    res.status(500).send(err);
  })
}
module.exports= findUsers;
