sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"z/trvl/ui/00/test/integration/pages/TravelList",
	"z/trvl/ui/00/test/integration/pages/TravelObjectPage",
	"z/trvl/ui/00/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('z/trvl/ui/00') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

