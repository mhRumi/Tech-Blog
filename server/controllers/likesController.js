const catchAsync = require('../utils/catchAsync');
const Like = require('../models/LikeModel');
const AppError = require('../utils/appError');
const User = require('../models/UserModel');


exports.doLike = catchAsync(async(req, res, next) => {
    req.body.reg_no = req.user.reg_no;
    req.body.hidden = false;
    const likeExist = await Like.findOne({where: {blog_id: req.body.blog_id, reg_no: req.body.reg_no}});
    if(likeExist === null){
        const like = await Like.create(req.body);
        const count = await Like.count({where: {blog_id: req.body.blog_id}});
        res.status(201).json({count});
    }else{
        
        const like = await Like.destroy({where: {blog_id: req.body.blog_id, reg_no: req.body.reg_no}});
        const count = await Like.count({where: {blog_id: req.body.blog_id}});
        res.status(201).json({count});
    }
});

exports.isLiked = catchAsync(async(req, res, next) => {
    const liked = await Like.findOne({where: {blog_id: req.params.id, reg_no: req.user.reg_no}});
    if(liked === null){
        res.status(404).json({isLiked: false});
    }else{
        res.status(200).json({isLiked: true});
    }
});