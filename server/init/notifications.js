let notifications;

notifications = [{
    name: 'Отправлять мне SMS, когда приходят ответы поставщиков по моим заявкам',
    type: 'OrderFollowed',
}, {
    name: 'Отправлять мне e-mail при смене статусов',
    type: 'OrderStatusChanged',
}, {
    name: 'Отправлять мне e-mail при закрытии заявки',
    type: 'OrderClosed',
}, {
    name: 'Отправлять мне SMS, когда приходят заявки клиентов',
    type: 'OrderFollowedShop',
}];

module.exports = notifications;
