<template>
    <div>
        <div id="landing-container" class="container-onepage-height">
            <div></div>
            <div id="landing" class="container container-onepage">
                <div class="container">
                    <div class="Button">
                        <b-button
                            :pressed.sync="CalendarToggle"
                            variant="secondary"
                            >Ansicht umschalten</b-button
                        >
                    </div>
                    <h1>Kalendar (TBD)</h1>
                    <div v-if="!CalendarToggle" class="simpleCalendar">
                        <iframe
                            src=""
                            style="border: 0"
                            width="1080"
                            :height="calendarHeight"
                            frameborder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                    <div v-else class="complexCalendar">
                        <DxScheduler
                            :data-source="dataSource"
                            :current-date="currentDate"
                            :show-current-time-indicator="true"
                            :height="calendarHeight"
                            :views="views"
                            :editing="false"
                            :show-all-day-panel="true"
                            :start-day-hour="12"
                            :first-day-of-week="1"
                            :on-content-ready="onContentReady"
                            @appointment-form-opening="onAppointmentFormOpening"
                            appointmentRenderer="rendererAppointment"
                            cellDuration="30"
                            recurrenceRuleExpr="recurrence"
                            start-date-expr="start.dateTime"
                            end-date-expr="end.dateTime"
                            all-day-expr="allDay"
                            text-expr="summary"
                            current-view="month"
                        >
                            <template #appointmentTemplate="{ data }">
                                <div>
                                    <div class="appointmentTitle">
                                        {{ data.appointmentData.summary }}
                                    </div>
                                    <div
                                        v-if="data.appointmentData.allDay"
                                        class="appointmentTime"
                                    >
                                        Ganztägig
                                    </div>
                                    <div v-else class="appointmentTime">
                                        {{
                                            data.appointmentData.start.dateTime
                                                | momentFirst
                                        }}
                                        -
                                        {{
                                            data.appointmentData.end.dateTime
                                                | moment
                                        }}
                                    </div>
                                    <br />
                                    <div class="appointmentDescription">
                                        {{ data.appointmentData.description }}
                                    </div>
                                </div>
                            </template>

                            <template #appointmentTooltipTemplate="{ data }">
                                <div>
                                    <div class="appointmentTitle">
                                        {{ data.appointmentData.summary }}
                                    </div>
                                    <div
                                        v-if="data.appointmentData.allDay"
                                        class="appointmentTime"
                                    >
                                        Ganztägig
                                    </div>
                                    <div v-else class="appointmentTime">
                                        {{
                                            data.appointmentData.start.dateTime
                                                | momentFirst
                                        }}
                                        -
                                        {{
                                            data.appointmentData.end.dateTime
                                                | moment
                                        }}
                                    </div>
                                    <div class="appointmentDescription">
                                        {{ data.appointmentData.description }}
                                    </div>
                                </div>
                            </template>
                        </DxScheduler>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'whatwg-fetch';
import DxScheduler from 'devextreme-vue/scheduler';
import CustomStore from 'devextreme/data/custom_store';
import moment from 'moment';
import 'devextreme/dist/css/dx.dark.css';

moment.locale('de');

export default {
    components: {
        DxScheduler,
    },
    data() {
        var calendarHeight = window.innerHeight - 200;
        return {
            CalendarToggle: true,
            views: ['week', 'month', 'agenda'],
            currentDate: new Date(),
            calendarHeight: calendarHeight,
            dataSource: new CustomStore({ load: (options) => this.getData() }),
        };
    },
    methods: {
        getData() {
            function Get(yourUrl) {
                var Httpreq = new XMLHttpRequest(); // a new request
                Httpreq.open('GET', yourUrl, false);
                Httpreq.send(null);
                return Httpreq.responseText;
            }
            const PUBLIC_KEY = 'AIzaSyAt8o-_ss0vwUoE_mgYIXNuLx6r8IuYaLo';
            const CALENDAR_ID = 'TODO';
            const dataUrl = [
                'https://www.googleapis.com/calendar/v3/calendars/',
                CALENDAR_ID,
                '/events?key=',
                PUBLIC_KEY,
            ].join('');
            var calendarData = JSON.parse(Get(dataUrl));
            var data = calendarData.items;
            for (let item of data) {
                if (item.recurrence !== undefined) {
                    item.recurrence = item.recurrence[0].replace('RRULE:', '');
                }
                if (item.start.date !== undefined) {
                    item.allDay = true; // Detect allDay Events
                    item.start.dateTime = item.start.date;
                    item.end.dateTime = item.end.date;
                }
                if (item.summary === undefined) {
                    item.summary = 'Kein Titel';
                }
            }
            return data;
        },

        oneventRendered: function (args) {
            let categoryColor = args.data.CategoryColor;
            if (!args.element || !categoryColor) {
                return;
            }
            args.element.style.backgroundColor = categoryColor;
        },

        onContentReady: function (e) {
            const currentHour = new Date().getHours() - 1;
            e.component.scrollToTime(currentHour, 30, new Date());
        },

        onAppointmentClick: function (e) {
            e.cancel = true;
        },

        onAppointmentDblClick: function (e) {
            e.cancel = true;
        },

        computed: {
            btnStates() {
                return this.buttons.map((btn) => btn.state);
            },
        },

        onAppointmentFormOpening(e) {
            e.popup.option('showTitle', true);
            e.popup.option(
                'title',
                e.appointmentData.summary
                    ? e.appointmentData.summary
                    : 'Kein Titel'
            );
            let form = e.form;
            form.option('items', [
                {
                    label: {
                        text: 'Titel',
                    },
                    editorType: 'dxTextBox',
                    colSpan: 2,
                    editorOptions: {
                        value: e.appointmentData.summary,
                        readOnly: true,
                    },
                },
                {
                    label: {
                        text: 'Start',
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        value: moment(e.appointmentData.start.dateTime).format(
                            'LLLL'
                        ),
                        readOnly: true,
                    },
                },
                {
                    label: {
                        text: 'Ende',
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        value: moment(e.appointmentData.end.dateTime).format(
                            'LLLL'
                        ),
                        readOnly: true,
                    },
                },
                {
                    label: {
                        text: 'Beschreibung',
                    },
                    editorType: 'dxTextArea',
                    colSpan: 2,
                    editorOptions: {
                        value: e.appointmentData.description
                            ? e.appointmentData.description
                            : 'Keine Beschreibung vorhanden',
                        height: 200,
                        readOnly: true,
                    },
                },
                {
                    label: {
                        text: 'Letztes Update:',
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        value: moment(e.appointmentData.updated).format('LLLL'),
                        readOnly: true,
                    },
                },
            ]);
        },
    },
    filters: {
        moment: function (date) {
            return moment(date).format('LT');
        },
        momentFirst: function (date) {
            return moment(date).format('lll');
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-component-include';
@import '../style/pageStyle.scss';

.container-onepage-height {
    height: calc(100vh - 57px);
}

.container-onepage {
    height: calc(100vh - 57px);
    display: table;
}

.Button {
    position: absolute;
    right: 20px;
    top: 20px;
}

.appointmentTitle {
    font-size: 14px;
    font-weight: bold;
    white-space: normal;
}

.appointmentTime {
    font-size: 12px;
    font-weight: bold;
    white-space: normal;
}

.appointmentDescription {
    font-size: 12px;
    white-space: pre-line;
}

#landing {
    > div {
        background-color: rgba(0, 0, 0, 0.1);
    }

    color: #ffffff;
}

#infoText {
    background-color: rgba(255, 0, 0, 0.75);
    color: #ffffff;
    font-size: 150%;
}

#landing-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
}

#landing-container {
    background-size: cover;
    background-image: url('../assets/images/background01.jpg');
    background-color: rgb(41, 49, 51);
    margin-bottom: 0px;
    position: relative;
    overflow: hidden;
}

::ng-deep .dx-scheduler-date-table-current-date div {
    font-weight: bold;
    color: green;
    background-color: yellow;
}
</style>
