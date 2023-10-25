<template>
    <div id="dashboardContent">
        <div id="dashboardMenuBar">
            <div id="dashboardMenuBarLeftSide">
                <img id="appLogo" src="@/Images/Logo_white.png">
            </div>
            <div id="dashboardMenuBarRightSide">
               <div id="dashboardMenuBarRightButtons">
                 <div id="buttonMenuContainer">
                    <v-btn
                    class="text-cyan-lighten-2"
                     variant="tonal"
                    >
                        Home
                    </v-btn>
                 </div>
                 <div id="buttonMenuContainer">
                    <v-btn
                    class="text-cyan-lighten-2"
                    variant="tonal"
                    >
                        Add Saving
                    </v-btn>
                 </div>
                 <div id="buttonMenuContainer">
                    <v-btn
                    class="text-cyan-lighten-2"
                    variant="tonal"
                    >
                        Settings
                    </v-btn>
                 </div>
                 <div id="buttonMenuContainer">
                    <v-btn
                    class="text-cyan-lighten-2"
                    variant="tonal"
                    >
                        Logout
                    </v-btn>
                 </div>
               </div>
            </div>
        </div>
        
        <div id="dashboardContentStatistics">
            <div id="dashboardContentStatisticsFirstSection">
                <div id="StatisticFirstTitle">
                    <h1>Genneral</h1>
                </div>
                <div id="StatisticFirstContent">
                    <div id="StatisticFirstContentLeft">
                        <div id="statisticFirstContentLeftBox">
                            <div id="statisticFirstContentLeftBoxTitle"><h1>All Piccy Banks</h1></div>
                            <div id="statisticFirstContentLeftBoxContent">
                                <div id="leftBoxContentNumber"><h1>8</h1></div>
                                <div id="leftBoxContentImage"><img id="piggybankIcon" src="@/Images/piggy-bank.png"></div>
                            </div>
                        </div>
                        <div id="statisticFirstContentLeftBox">
                            <div id="statisticFirstContentLeftBoxTitle"><h1>Closed Banks</h1></div>
                            <div id="statisticFirstContentLeftBoxContent">
                                <div id="leftBoxContentNumber"><h1>8</h1></div>
                                <div id="leftBoxContentImageBroken"><img id="piggybankIconBroken" src="@/Images/broken.png"></div>
                            </div>
                        </div>
                    </div>

                    <div id="statsticFirstContentRight">
                        <div id="statisticFirstContentRightTitle">
                            <h1>Saved Money</h1>
                        </div>
                        <div id="chartBox">
                            <div id="chart">
                                <apexchart type="bar" height="250" width="300" margin-left="-20px" :options="chartOptions" :series="series"></apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="dashboardContentStatisticsSecondSection">
                <div id="StatisticFirstTitle">
                    <h1>Total Savings</h1>
                </div>
                <div id="statisticSecondBoxChart">
                    <div id="chart2">
                        <apexchart type="area" height="330" width="450" margin-left="-20px" :options="chartOptionsYear" :series="seriesYear"></apexchart>
                    </div>
                </div>
            </div>
            <div id="dashboardContentStatisticsThirdSection">
                <div id="StatisticFirstTitle">
                    <h1>All savings</h1>
                </div>
                <div id="statisticThirdAllBox">
                    <div id="statisticThirdAllRow">
                          <div id="statisticThirdRowNumber">
                             <h1>1</h1>
                          </div>
                          <div id="statisticThirdRowProgressBar">
                            <v-progress-linear
                                model-value="40"
                                buffer-value="60"
                                height="15px"
                                striped
                                color="indigo-lighten-1"
                                ></v-progress-linear>
                          </div>
                          <div id="statisticThirdRowBankName">
                            <h1>Example 1</h1>
                          </div>
                    </div>

                    <div id="statisticThirdAllRow">
                          <div id="statisticThirdRowNumber">
                             <h1>2</h1>
                          </div>
                          <div id="statisticThirdRowProgressBar">
                            <v-progress-linear
                                model-value="40"
                                buffer-value="60"
                                height="15px"
                                striped
                                color="indigo-lighten-1"
                                ></v-progress-linear>
                          </div>
                          <div id="statisticThirdRowBankName">
                            <h1>Example 2</h1>
                          </div>
                    </div>

                    <div id="statisticThirdAllRow">
                          <div id="statisticThirdRowNumber">
                             <h1>3</h1>
                          </div>
                          <div id="statisticThirdRowProgressBar">
                            <v-progress-linear
                                model-value="40"
                                buffer-value="60"
                                height="15px"
                                striped
                                color="indigo-lighten-1"
                                ></v-progress-linear>
                          </div>
                          <div id="statisticThirdRowBankName">
                            <h1>Example 3</h1>
                          </div>
                    </div>

                    <div id="statisticThirdAllRow">
                          <div id="statisticThirdRowNumber">
                             <h1>4</h1>
                          </div>
                          <div id="statisticThirdRowProgressBar">
                            <v-progress-linear
                                model-value="40"
                                buffer-value="60"
                                height="15px"
                                striped
                                color="indigo-lighten-1"
                                ></v-progress-linear>
                          </div>
                          <div id="statisticThirdRowBankName">
                            <h1>Example 4</h1>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import "@/CSS/Dashboard.css";
import { file, whileStatement } from "@babel/types";
import { IncomingMessage } from "http";
import { ref } from 'vue'

export default {
    name: 'Vue Chart',
    data () {
      return {
        test:10,
         
        chartOptions: {
            chart: {
                id: 'vuechart-example',
                toolbar:{
                    show:false,
                },
            },
            legend:{
                show: false,
                colors:'#F44336',
            },
            dataLabels:{
              color:'#F44336',
            },
            xaxis: {
            color:'#C16E36',
            categories: ['Exaple1', 'Exaple2', 'Exaple3', 'Exaple4', 'Exaple5', 'Exaple6', 'Exaple7', 'Exaple8'],
             labels:{
                show:false,
             }
            },
            yaxis: {
                show: false,
            }
        },

        chartOptionsYear: {
            chart: {
                id: 'vuechart-example',
                toolbar:{
                    show:false,
                },
            },
            legend:{
                show: false,
                colors:'#F44336',
            },
            dataLabels:{
              color:'#F44336',
            },
            xaxis: {
                color:'#F44336',
                categories: ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'],
                labels:{
                    style:{
                        colors:'#DED1B7',
                    }
                }
            },
            yaxis: {
                labels:{
                    style:{
                        colors:'#DED1B7',
                    }
                }
            },
        },


        series: [{
            name: 'Money',
            color:'#C16E36',
            data: [30, 40, 45, 50, 49, 60, 70, 81]
        }],

        seriesYear: [{
            name: 'Money',
            color:'#41b883',
            data: [200, 140, 345, 50, 449, 1160, 370, 81, 900, 1800, 1982, 200]
        }]
      }
    },
    methods: {
        updateChart() {
            const max = 90;
            const min = 20;
            const newData = this.series[0].data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            })
        },
    }
}
</script>