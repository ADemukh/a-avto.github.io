const Message = require('../models/message');
const Dialog = require('../models/orderShopDialog');

function addMessage(dialogId, author, content) {
    const message = new Message({
        author,
        content,
    });
    return message.save()
        .then(() => Dialog.findByIdAndUpdate(dialogId, {
            $push: { messages: message },
            $set: { lastMessage: message },
        }));
}

function setMessagesSeen(messagesIds) {
    return Message.update({
        _id: { $in: messagesIds },
    }, {
        $set: { seen: true },
    }, {
        multi: true,
    });
}

module.exports = {
    addMessage,
    setMessagesSeen,
};
