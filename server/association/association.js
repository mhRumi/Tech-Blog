const User = require('../models/UserModel');
const Blog = require('../models/BlogModel');
const Comment = require('../models/CommentModel');
const WorkExperience = require('../models/WorkExperienceModel');
const Gallary = require('../models/GallaryModel');
const Committee = require('../models/CommitteeModel');
const Role = require('../models/RoleModel');
const Event = require('../models/EventModel');
const Announcement = require('../models/AnnouncementModel');
const Notice = require('../models/NoticeModel');
const Achievement = require('../models/AchievementModel');
const Credential = require('../models/CredentialModel');
const Education = require('../models/EducationModel');
const Batch = require('../models/BatchModel');
const Like = require('../models/LikeModel');


Batch.hasMany(User, { foreignKey: { name: 'batch', allowNull: false } })
User.hasMany(Blog, { foreignKey: { name: 'reg_no', allowNull: false } })
Blog.belongsTo(User, { foreignKey: { name: 'reg_no', allowNull: false } })

User.hasMany(Education, { foreignKey: { name: 'reg_no', allowNull: false } })
Education.belongsTo(User, { foreignKey: { name: 'reg_no', allowNull: false } })

User.hasMany(Comment, { foreignKey: { name: 'reg_no', allowNull: false } })
User.hasOne(Credential, { foreignKey: { name: 'reg_no', allowNull: false } })
Credential.belongsTo(User, { foreignKey: { name: 'reg_no', allowNull: false } })



Blog.hasMany(Comment, { foreignKey: { name: "blog_id", allowNull: false } });
Comment.belongsTo(Blog, { foreignKey: { name: "blog_id", allowNull: false } });
Comment.belongsTo(User, { foreignKey: { name: 'reg_no', allowNull: false } });

Blog.hasMany(Like, {foreignKey: {name:"blog_id", allowNull: false}});
Like.belongsTo(User, {foreignKey:{name: "reg_no", allowNull: false}});


User.hasMany(Role, { foreignKey: { name: "reg_no", allowNull: false } });
//User.hasMany(Achievement, { foreignKey: { name: "reg_no", allowNull: false } });

User.hasMany(WorkExperience, { foreignKey: { name: "reg_no", allowNull: false } });
WorkExperience.belongsTo(User, { foreignKey: { name: 'reg_no', allowNull: false } });

Committee.hasMany(Role, { foreignKey: { name: 'committee_order', allowNull: false } })
Role.belongsTo(User, { foreignKey: { name: 'reg_no', allowNull: false } })
Role.belongsTo(Committee, { foreignKey: { name: 'committee_order', allowNull: false } })

