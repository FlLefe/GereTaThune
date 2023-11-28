const User = require('./User');
const Movement = require('./List');
const Operation = require('./Card');
const Category = require('./Label');

User.hasMany(List, {
    foreignKey: 'user_id',
    as: 'lists',
});
List.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});


List.hasMany(Card,{
    foreignKey: 'list_id',
    as: 'cards'
})
Card.belongsTo(List, {
    foreignKey: 'list_id',
    as: 'list'
});


Card.belongsToMany(Label, {
    through: 'card_has_label',
    as: "labels",
    foreignKey: 'card_id' 
});
Label.belongsToMany(Card, {
    through: 'card_has_label',
    as: "cards",
    foreignKey: 'label_id', 
});

module.exports = { User, List, Card, Label };
