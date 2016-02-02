"use strict";

describe("gtservice api test", function(){
    var gtservice;

    beforeEach(function(){
        module("gt.app.service");
    });

    beforeEach(inject(function(_gtservice_){
        gtservice = _gtservice_;
    }));

    it('should have Gtservice service be defined', function () {
        expect(gtservice).toBeDefined();
    });

    it("should return name", function () {
        var name = gtservice.getName();
        expect(name).toEqual("Name from service");
    });
});
