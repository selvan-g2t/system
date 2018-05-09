"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ChartConfig = /** @class */ (function () {
    function ChartConfig() {
    }
    return ChartConfig;
}());
exports.ChartConfig = ChartConfig;
var DonutConfig = /** @class */ (function (_super) {
    __extends(DonutConfig, _super);
    function DonutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DonutConfig;
}(ChartConfig));
exports.DonutConfig = DonutConfig;
var DonutBasicExampleComponent = /** @class */ (function () {
    function DonutBasicExampleComponent() {
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
    DonutBasicExampleComponent.prototype.ngOnInit = function () {
        this.smallConfig = Object.assign([], this.largeConfig);
        this.smallConfig.chartId = 'exampleDonut2';
        this.smallConfig.legend = {
            show: true,
            position: 'right'
        };
        this.smallConfig.centerLabel = 'Pets';
        this.smallConfig.chartHeight = 120;
    };
    DonutBasicExampleComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'testing',
            template: "\n    <div class=\"row\">\n    <div class=\"col-sm-6 text-center\">\n      <pfng-chart-donut [chartData]=\"chartData\" [config]=\"largeConfig\"></pfng-chart-donut>\n    </div>\n    <div class=\"col-sm-6 text-center\">\n      <pfng-chart-donut [chartData]=\"chartData\" [config]=\"smallConfig\"></pfng-chart-donut>\n    </div>\n  </div>\n    "
        })
    ], DonutBasicExampleComponent);
    return DonutBasicExampleComponent;
}());
exports.DonutBasicExampleComponent = DonutBasicExampleComponent;
var TestingModule = /** @class */ (function () {
    function TestingModule() {
    }
    TestingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [DonutBasicExampleComponent],
            bootstrap: [DonutBasicExampleComponent],
            entryComponents: [DonutBasicExampleComponent]
        })
    ], TestingModule);
    return TestingModule;
}());
exports.TestingModule = TestingModule;
