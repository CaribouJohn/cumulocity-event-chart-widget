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
import { CoreModule, HOOK_COMPONENTS } from "@c8y/ngx-components";
import { CumulocityEventChartWidgetConfig } from "./cumulocity-event-chart-widget.config.component";
import { CumulocityEventChartWidget } from "./cumulocity-event-chart-widget.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";
import { DpDatePickerModule } from "ng2-date-picker";
import { ColorPickerModule } from "ngx-color-picker";

@NgModule({
    imports: [
        CoreModule,
        HttpClientModule,
        ChartsModule,
        DpDatePickerModule,
        ColorPickerModule,
    ],
    declarations: [
        CumulocityEventChartWidget,
        CumulocityEventChartWidgetConfig,
    ],
    entryComponents: [
        CumulocityEventChartWidget,
        CumulocityEventChartWidgetConfig,
    ],
    providers: [
        {
            provide: HOOK_COMPONENTS,
            multi: true,
            useValue: {
                id: "global.presales.cumulocity.measurement.chart.widget",
                label: "Cumulocity Event Chart",
                description: "Widget to display event data in a chart",
                component: CumulocityEventChartWidget,
                configComponent: CumulocityEventChartWidgetConfig,
                previewImage: require("~styles/previewImage.png"),
            },
        },
    ],
})
export class CumulocityEventChartWidgetModule {}
