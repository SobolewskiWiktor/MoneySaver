<template>
    <div id="dashboardContent">
        <div id="dashboardMenu">
            <div id="dashboardLogo">
                <img id="logo" src="@/Images/Logo_White.png">
            </div>
            <div id="dashboardMenuOptions">
                <div id="dashboardMenuOption">
                    <v-btn
                    class="text-white h-50"
                    variant="outlined"
                    >
                        Home
                    </v-btn>
                </div>
                <div id="dashboardMenuOption">
                    <v-btn
                    class="text-white h-50"
                    variant="outlined"
                    >
                        Add Saving
                    </v-btn>
                </div>
                <div id="dashboardMenuOption">
                    <v-btn
                    class="text-white h-50"
                    variant="outlined"
                    >
                        Settings
                    </v-btn>
                </div>
                <div id="dashboardMenuOption">
                    <v-btn
                    class="text-white h-50"
                    variant="outlined"
                    >
                        Logout
                    </v-btn>
                </div>
            </div>
        </div>

        <div id="dashboardContentTwo">
            <div id="contentTitle">
                <h1>Hi Test user</h1>
            </div>
            <div id="contentSaveSearcher">
                <div id="SaveSearcher">
                    <v-text-field
                        class="w-50 text-white"
                        label="Search"
                    ></v-text-field>
                </div>
            </div>
            <div id="dashboardContentSavings">
               <div id="dashboardSavingsList">
                    <v-card
                        class="mx-auto text-white mt-5"
                        width="950"
                        variant="outlined"
                        >
                        <v-card-item>
                            <div>
                            <div class="text-h6 mb-1">
                               Sample saving
                            </div>
                            <div class="text-caption">Description about saving</div>
                            </div>
                        </v-card-item>
                        <v-card-actions>
                            <v-btn
                             variant="tonal"
                            >
                            Details
                            </v-btn>
                        </v-card-actions>
                    </v-card>
               </div>

               <div id="dashboardSavingsDetails">


                    <div id="savingDeatilsTitle">
                        <h1>SampleSaving</h1>
                    </div>


                    <div id="savingDetailsProgress">
                        <h1>Progress:</h1>
                        <v-progress-linear
                            class="w-75 text-white"
                            v-model="test"
                            color="deep-purple-accent-4"
                            height="25"
                        >
                            <template v-slot:default="{ value }">
                                <strong>{{ Math.ceil(value) }}%</strong>
                            </template>
                        </v-progress-linear>
                    </div>
                    
                    <div id="paylemtDetailsContent">
                        <div id="savingDetailsPaymentsList">
                            <v-card
                            class="mx-auto text-green mt-5"
                            width="450"
                            variant="outlined"
                            >
                                <v-card-item>
                                    <div>
                                        <div class="text-h6 mb-1">
                                        Incoming 500zł
                                        </div>
                                    </div>
                                </v-card-item>
                            </v-card>
                            <v-card
                            class="mx-auto text-red mt-5"
                            width="450"
                            variant="outlined"
                            >
                                <v-card-item>
                                    <div>
                                        <div class="text-h6 mb-1">
                                        payoff 200zł
                                        </div>
                                    </div>
                                </v-card-item>
                            </v-card>
                        </div>

                        <div id="savingDetailsText">
                            <div id="savingDetailsTextTitle">Details:</div>
                            <div id="savingDetailsTextRow">
                                <v-card
                                    class="mx-auto text-gray"
                                    width="250"
                                    variant="tonal"
                                    >
                                        <v-card-item>
                                            <div>
                                                <div class="text-h6 mb-1">
                                                To save: 1200zł
                                                </div>
                                            </div>
                                        </v-card-item>
                                </v-card>
                            </div>
                            <div id="savingDetailsTextRow">
                                <v-card
                                    class="mx-auto text-gray"
                                    width="250"
                                    variant="tonal"
                                    >
                                        <v-card-item>
                                            <div>
                                                <div class="text-h6 mb-1">
                                                  Saved: 300zł
                                                </div>
                                            </div>
                                        </v-card-item>
                                </v-card>
                            </div>
                            <div id="savingDetailsTextTitleSecond">Options:</div>
                            <div id="savingDetailsTextRow">
                                <v-btn
                                class="text-green"
                                variant="tonal"
                                >
                                    Deposit
                                </v-btn>
                                <v-btn
                                class="text-red ml-5"
                                variant="tonal"
                                >
                                    Wihdraw
                                </v-btn>
                            </div>
                        </div>
                    </div>

               </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import "@/CSS/Dashboard.css";
import { IncomingMessage } from "http";
import { ref } from 'vue'

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