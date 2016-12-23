(function CarsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('newBid', StatisticsService);

    function StatisticsService() {
        var bid;

        bid = {};
        return {
            car: bid.car,
            model: bid.model,
            year: bid.year,
            details: bid.details,
            enginesType: bid.enginesType,
            amount: bid.amount,
            typeBoxShift: bid.typeBoxShift,
            number: bid.number,
            city: bid.city,
            someSpare: bid.someSpare,
            photo: bid.photo,
            email: bid.email,
            phone: bid.phone,
            date: bid.date,
            bid: bid
        };
    }
})();