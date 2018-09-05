"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var employee_service_service_1 = require("./employee-service.service");
describe('EmployeeServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [employee_service_service_1.EmployeeServiceService]
        });
    });
    it('should be created', testing_1.inject([employee_service_service_1.EmployeeServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=employee-service.service.spec.js.map