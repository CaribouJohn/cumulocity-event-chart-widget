/*
* Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */
import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
    selector: "cumulocity-event-chart-widget-config-component",
    templateUrl: "./cumulocity-event-chart-widget.config.component.html",
    styleUrls: ["./cumulocity-event-chart-widget.config.component.css"],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CumulocityEventChartWidgetConfig implements OnInit {
    @Input() config: any = {};
    isOpenCP = false;
    borderCP = false;

    constructor() {}

    ngOnInit() {}

    openColorPicker() {
        if (!this.isOpenCP) {
            this.isOpenCP = true;
        }
    }
    openBorderColorPicker() {
        if (!this.borderCP) {
            this.borderCP = true;
        }
    }
    closeColorPicker() {
        if (this.isOpenCP) {
            this.isOpenCP = false;
        }
    }
    closeBorderColorPicker() {
        if (this.borderCP) {
            this.borderCP = false;
        }
    }
    setSelectedColor(value) {
        if (this.config.color) {
            this.config.color = this.config.color + ";" + value;
        } else {
            this.config.color = value;
        }
    }
    setSelectedBorderColor(value) {
        if (this.config.borderColor) {
            this.config.borderColor = this.config.borderColor + ";" + value;
        } else {
            this.config.borderColor = value;
        }
    }

    onConfigChanged($event: Event): void {
        console.log("CONFIG-CHANGED");
        console.log(this.config);
    }
}