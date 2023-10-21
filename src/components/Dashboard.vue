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
                    class="text-blue"
                     variant="tonal"
                    >
                        Home
                    </v-btn>
                 </div>
                 <div id="buttonMenuContainer">
                    <v-btn
                    class="text-blue"
                    variant="tonal"
                    >
                        Add Saving
                    </v-btn>
                 </div>
                 <div id="buttonMenuContainer">
                    <v-btn
                    class="text-blue"
                    variant="tonal"
                    >
                        Settings
                    </v-btn>
                 </div>
                 <div id="buttonMenuContainer">
                    <v-btn
                    class="text-blue"
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
                            <h1>Higest Bank</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="dashboardContentStatisticsSecondSection">
                
            </div>
            <div id="dashboardContentStatisticsThirdSection">
                
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import "@/CSS/Dashboard.css";
import { IncomingMessage } from "http";
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'


const variants = ['elevated', 'flat', 'tonal', 'outlined']
const color = ref('indigo')
export default {
    data () {
      return {
        test:10,
      }
    },
}
</script>