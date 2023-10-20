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
                        class="mx-auto text-white"
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
</script>