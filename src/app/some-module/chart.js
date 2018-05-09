"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var TestingComponents = /** @class */ (function () {
    function TestingComponents() {
        this.chartData = [
            ['Cats', 2],
            ['Hamsters', 1],
            ['Fish', 3],
            ['Dogs', 2]
        ];
        this.largeConfig = {
            chartId: 'exampleDonut',
            colors: {
                Cats: '#0088ce',
                Hamsters: '#3f9c35',
                Fish: '#ec7a08',
                Dogs: '#cc0000' // red
            },
            data: {
                onclick: function (data, element) {
                    alert('You clicked on donut arc: ' + data.id);
                }
            },
            donut: {
                title: 'Animals'
            },
            legend: {
                show: true
            }
        };
    }
    TestingComponents = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'testing',
            template: "\n    <pfng-chart-donut [chartData]=\"chartData\" [config]=\"largeConfig\"></pfng-chart-donut>\n    "
        })
    ], TestingComponents);
    return TestingComponents;
}());
exports.TestingComponents = TestingComponents;
var TestingModule = /** @class */ (function () {
    function TestingModule() {
    }
    TestingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [TestingComponents],
            bootstrap: [TestingComponents],
            entryComponents: [TestingComponents]
        })
    ], TestingModule);
    return TestingModule;
}());
exports.TestingModule = TestingModule;
