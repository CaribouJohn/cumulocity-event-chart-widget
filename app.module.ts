import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
import {
  DashboardUpgradeModule,
  UpgradeModule,
  HybridAppModule,
  UPGRADE_ROUTES
} from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { CockpitDashboardModule } from '@c8y/ngx-components/context-dashboard';
import { ReportsModule } from '@c8y/ngx-components/reports';
import { SensorPhoneModule } from '@c8y/ngx-components/sensor-phone';
import {CumulocityEventChartWidget} from "./src/cumulocity-event-chart-widget/cumulocity-event-chart-widget.component";
import {CumulocityEventChartWidgetConfig} from "./src/cumulocity-event-chart-widget/cumulocity-event-chart-widget.config.component";
import { ChartsModule } from "ng2-charts";
import { DpDatePickerModule } from "ng2-date-picker"; 
import { ColorPickerModule } from "ngx-color-picker";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        NgRouterModule.forRoot([...UPGRADE_ROUTES], {
            enableTracing: false,
            useHash: true,
        }),
        CoreModule.forRoot(),
        AssetsNavigatorModule,
        ReportsModule,
        NgUpgradeModule,
        DashboardUpgradeModule,
        CockpitDashboardModule,
        SensorPhoneModule,
        UpgradeModule,
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
            useValue: [
                {
                    id: "global.presales.CumulocityEventChart.widget",
                    label: "Cumulocity Event Chart",
                    description: "Widget to display event data in a chart",
                    component: CumulocityEventChartWidget,
                    configComponent: CumulocityEventChartWidgetConfig,
                    previewImage: require("./styles/previewImage.png"),
                },
            ],
        },
    ],
})
export class AppModule extends HybridAppModule {
    constructor(protected upgrade: NgUpgradeModule) {
        super();
    }
}
