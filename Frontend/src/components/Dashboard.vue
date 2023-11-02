<template>
  <div id="dashboardContent">
    <div id="dashboardMenuBar">
      <div id="dashboardMenuBarLeftSide">
        <img id="appLogo" src="@/Images/Logo_white.png" />
      </div>
      <div id="dashboardMenuBarRightSide">
        <div id="dashboardMenuBarRightButtons">
          <div id="buttonMenuContainer">
            <v-dialog width="500">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="text-cyan-lighten-2"
                  variant="tonal"
                  v-bind="props"
                  text="Add Saving"
                >
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card
                  title="New"
                  color="grey-darken-3"
                  class="text-green-accent-2"
                >
                  <v-card-text class="text-white">
                    <div id="settingsDetailsBankRow">
                      <div id="settingsDetailsBankLeft">
                        <v-text-field
                          :counter="10"
                          v-model="newBank.name"
                          label="Name"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                      <div id="settingsDetailsBankRight">
                        <v-text-field
                          :counter="10"
                          v-model="newBank.goal"
                          label="Ammount"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                    </div>
                    <v-textarea
                      class="mt-6"
                      label="Description"
                      v-model="newBank.description"
                    ></v-textarea>
                    <v-btn
                      type="submit"
                      block
                      class="text-light-green-accent-3"
                      variant="tonal"
                      @click.prevent="addNewBan()"
                      >Submit</v-btn
                    >
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      class="text-light-blue-darken-3"
                      variant="tonal"
                      text="Close"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
          <div id="buttonMenuContainer">
            <v-dialog width="500">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="text-cyan-lighten-2"
                  variant="tonal"
                  v-bind="props"
                  text="Settings"
                >
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card
                  title="Settings"
                  color="grey-darken-3"
                  class="text-green-accent-2"
                >
                  <v-card-text class="text-white">
                    <div id="settingsDetailsBankRow">
                      <div id="settingsDetailsBankLeft">
                        <v-text-field
                          :counter="10"
                          label="Name"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                      <div id="settingsDetailsBankRight">
                        <v-text-field
                          :counter="10"
                          label="Surname"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                    </div>
                    <div id="settingsDetailsSettingsRow">
                      <div id="settingsDetailsBankLeft">
                        <v-text-field
                          :counter="10"
                          label="Mail"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                      <div id="settingsDetailsBankRight">
                        <v-text-field
                          :type="show1 ? 'text' : 'password'"
                          label="Password"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                    </div>
                    <v-btn
                      type="submit"
                      block
                      class="text-light-green-accent-3"
                      variant="tonal"
                      >Submit</v-btn
                    >
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      class="text-light-blue-darken-3"
                      variant="tonal"
                      text="Close"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
          <div id="buttonMenuContainer">
            <v-btn
              @click.prevent="logout()"
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
              <div id="statisticFirstContentLeftBoxTitle">
                <h1>All Piccy Banks</h1>
              </div>
              <div id="statisticFirstContentLeftBoxContent">
                <div id="leftBoxContentNumber"><h1>8</h1></div>
                <div id="leftBoxContentImage">
                  <img id="piggybankIcon" src="@/Images/piggy-bank.png" />
                </div>
              </div>
            </div>
            <div id="statisticFirstContentLeftBox">
              <div id="statisticFirstContentLeftBoxTitle">
                <h1>Closed Banks</h1>
              </div>
              <div id="statisticFirstContentLeftBoxContent">
                <div id="leftBoxContentNumber"><h1>8</h1></div>
                <div id="leftBoxContentImageBroken">
                  <img id="piggybankIconBroken" src="@/Images/broken.png" />
                </div>
              </div>
            </div>
          </div>

          <div id="statsticFirstContentRight">
            <div id="statisticFirstContentRightTitle">
              <h1>Saved Money</h1>
            </div>
            <div id="chartBox">
              <div id="chart">
                <apexchart
                  type="bar"
                  height="250"
                  width="300"
                  margin-left="-20px"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
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
            <apexchart
              type="area"
              height="330"
              width="450"
              margin-left="-20px"
              :options="chartOptionsYear"
              :series="seriesYear"
            ></apexchart>
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
    <div id="dashboardContentDetails">
      <div id="dashboardContentDetailsSavingList">
        <div id="dashboardContentDetailsSavingListTitleBox">
          <div id="dashboardContentDetailsSavingListTitle">
            <h1>{{ currentDisplayOptionDetailsSaving }} savings</h1>
          </div>
          <div id="dashboardContentDetailsSavingListOptions">
            <v-menu transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="text-cyan-lighten-3"
                  color="primary"
                  v-bind="props"
                >
                  {{ currentDisplayOptionDetailsSaving }}
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title
                    @click.prevent="changeCurrentDisplaySaving(item.title)"
                    >{{ item.title }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div id="dashboardContentDeatilsSavingListBox">
          <div id="listscroll">
            <div
              id="dashboardContentDetailsSavingListRow"
              v-for="(item, index) in banks"
              :key="index"
              @click.prevent="showBankDetails(item.name)"
            >
              <div id="dashboardContentDetailsSavingListRowImage">
                <img id="savingIcon" src="../Images/regular/paper-plane.svg" />
              </div>
              <div id="dashboardContentDetailsSavingListRowText">
                <h1>{{ item.name }}</h1>
              </div>
              <div id="dashboardContentDetailsSavingListRowMoney">
                <div id="rowMoneyIcon">
                  <img
                    id="rowMoneyIconImage"
                    src="../Images/dollar-symbol.png"
                  />
                </div>
                <div id="rowMoneyAmmout">
                  <h1>{{ item.goal }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dashboardContentDetailsSavingDetails">
        <div id="dashboardContentDetailsSavingDetailsFirstRow">
          <div id="SavingDetailsFirstRowTitle">
            <h1>{{ bank.name }}</h1>
          </div>
          <div id="savingDetailsFirstRowOptions">
            <div id="buttonDetailContainer">
              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="text-light-blue-darken-3"
                    variant="tonal"
                    v-bind="props"
                    text="Deposit"
                  >
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card
                    title="Deposit"
                    color="grey-darken-3"
                    class="text-green-accent-2"
                  >
                    <v-card-text class="text-white">
                      <v-text-field
                        v-model="toDepoistMoney"
                        :counter="10"
                        label="Ammount"
                        required
                        hide-details
                      ></v-text-field>
                      <v-btn
                        type="submit"
                        block
                        class="text-light-green-accent-3 mt-5"
                        variant="tonal"
                        @click.prevent="depositMoney()"
                        >Submit</v-btn
                      >
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        class="text-light-blue-darken-3"
                        variant="tonal"
                        text="Close"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
            <div id="buttonDetailContainer">
              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="text-light-blue-darken-3"
                    variant="tonal"
                    v-bind="props"
                    text="Withdraw"
                  >
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card
                    color="grey-darken-3"
                    class="text-green-accent-2"
                    title="Withdraw"
                  >
                    <v-card-text class="text-white">
                      <v-text-field
                        v-model="toDepoistMoney"
                        :counter="10"
                        label="Ammount"
                        required
                        hide-details
                      ></v-text-field>
                      <v-btn
                        type="submit"
                        block
                        class="text-light-green-accent-3 mt-5"
                        variant="tonal"
                        @click.prevent="withdrawMoney()"
                        >Submit</v-btn
                      >
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        class="text-light-blue-darken-3"
                        variant="tonal"
                        text="Close"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
            <div id="buttonDetailContainer">
              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="text-light-blue-darken-3"
                    variant="tonal"
                    v-bind="props"
                    text="Settings"
                  >
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card
                    title="Settings"
                    color="grey-darken-3"
                    class="text-green-accent-2"
                  >
                    <v-card-text class="text-white">
                      <div id="settingsDetailsBankRow">
                        <div id="settingsDetailsBankLeft">
                          <v-text-field
                            :counter="10"
                            label="Name"
                            required
                            hide-details
                          ></v-text-field>
                        </div>
                        <div id="settingsDetailsBankRight">
                          <v-text-field
                            :counter="10"
                            label="Ammount"
                            required
                            hide-details
                          ></v-text-field>
                        </div>
                      </div>
                      <v-textarea class="mt-6" label="Description"></v-textarea>
                      <v-btn
                        type="submit"
                        block
                        class="text-light-green-accent-3"
                        variant="tonal"
                        >Submit</v-btn
                      >
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        class="text-light-blue-darken-3"
                        variant="tonal"
                        text="Close"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </div>
        </div>
        <div id="dashboardContentDetailsSavingDetailsSecondRow">
          <div id="detailSecondRowProgressBar">
            <div id="detailSecondRowProgressBarText">
              <div id="detalsSecondRowProgressBarTextStart">
                <div id="progressBarTextStartIcon">
                  <img id="startIcon" src="../Images/dollar-symbol.png" />
                </div>
                <div id="progressBarTextStartAmmount">{{ depositedMoney }}</div>
              </div>
              <div id="detalsSendRowProgressBarTextStop">
                <div id="progressBarTextStartIcon">
                  <img id="startIcon" src="../Images/route.png" />
                </div>
                <div id="progressBarTextStopAmmount">{{ bank.goal }}</div>
              </div>
            </div>
            <v-progress-linear
              v-model="ProgressBarDetails"
              color="blue"
              height="25"
            ></v-progress-linear>
          </div>
        </div>
        <div id="dashboardContentDetailsSavingDetailsThirdRow">
          <div id="savingDetailsThirdRowLeft">
            <div id="thirdRowLeftScrollBoxList">
              <div
                v-for="(item, index) in operations"
                :key="index"
                :class="{
                  thirdRowLeftScrollListRowDeposit:
                    operations[index].type === 'deposit',
                  thirdRowLeftScrollListRowWithdraw:
                    operations[index].type === 'withdraw',
                }"
              >
                <div id="rowDepositImage">
                  <img
                    :class="
                      operations[index].type === 'deposit'
                        ? 'depositIcon'
                        : 'WithdrawIcon'
                    "
                    :src="
                      operations[index].type === 'deposit'
                        ? 'src/Images/deposit.png'
                        : 'src/Images/money-withdrawal.png'
                    "
                  />
                </div>
                <div id="rowDepositAmmount">
                  <h1>{{ operations[index].ammount }}</h1>
                </div>
              </div>
            </div>
          </div>
          <div id="savingDetailsThirdRowRight">
            <div id="rowRightTitle">
              <div id="rowRightTitleIcon">
                <img id="titleIcon" src="../Images/file.png" />
              </div>
              <div id="rowRightTitleText">Description</div>
            </div>
            <div id="rowRightDescription">
              <div id="rowRightDescriptionbar"></div>
              <div id="rowRightDescriptionText">
                {{ bank.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="futter">
      <a href="http://www.akcjabiznes.pl">AkcjaBiznes 2023 ©</a>
    </div>
  </div>
</template>
<script lang="ts">
import "@/CSS/Dashboard.css";
import {
  assertExportSpecifier,
  file,
  identifier,
  whileStatement,
} from "@babel/types";
import { useToast } from "vue-toastification";
import { IncomingMessage } from "http";
import { ref } from "vue";
import axios from "axios";

const toast = useToast();
export default {
  name: "Vue Chart",
  async created() {
    await this.verifyToken();
    await this.getUserData();
    await this.getBankData();
  },
  data() {
    return {
      toastService: toast,
      user: {
        name: "",
        surname: "",
        mail: "",
        login: "",
        password: "",
        id: "",
      },

      banks: [{}],
      newBank: {
        name: "",
        goal: "",
        description: "",
        status: "current",
        userID: "",
      },
      bank: {
        id: 0,
        name: "",
        goal: "",
        description: "",
        status: "",
        userID: "",
      },

      operations: [{}],
      depositedMoney: 0,
      toDepoistMoney: 0,

      ProgressBarDetails: 0,

      test: 10,
      items: [{ title: "All" }, { title: "Current" }, { title: "Closed" }],
      currentDisplayOptionDetailsSaving: "All",

      settingOpton: "none",

      show1: false,
      show2: true,
      password: "Password",

      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
          colors: "#F44336",
        },
        dataLabels: {
          color: "#F44336",
        },
        xaxis: {
          color: "#C16E36",
          categories: [
            "Exaple1",
            "Exaple2",
            "Exaple3",
            "Exaple4",
            "Exaple5",
            "Exaple6",
            "Exaple7",
            "Exaple8",
          ],
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      },

      chartOptionsYear: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
          colors: "#F44336",
        },
        dataLabels: {
          color: "#F44336",
        },
        xaxis: {
          color: "#F44336",
          categories: [
            "STY",
            "LUT",
            "MAR",
            "KWI",
            "MAJ",
            "CZE",
            "LIP",
            "SIE",
            "WRZ",
            "PAŹ",
            "LIS",
            "GRU",
          ],
          labels: {
            style: {
              colors: "#DED1B7",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#DED1B7",
            },
          },
        },
      },

      series: [
        {
          name: "Money",
          color: "#C16E36",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],

      seriesYear: [
        {
          name: "Money",
          color: "#41b883",
          data: [200, 140, 345, 50, 449, 1160, 370, 81, 900, 1800, 1982, 200],
        },
      ],
    };
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
    },
    changeCurrentDisplaySaving(option: string) {
      this.currentDisplayOptionDetailsSaving = option;
    },
    changeSettingOption(option: string) {
      this.settingOpton = option;
    },
    closeSettingOption() {
      this.settingOpton = "none";
    },
    async verifyToken() {
      const token = localStorage.getItem("token");

      if (!token) {
        this.$router.push("/"); // Przekierowanie jeśli brak tokena
      } else {
        // Weryfikacja tokena
        await axios
          .post("http://localhost:3100/api/user/veryfiToken", { token })
          .then((response) => {
            this.user.login = response.data.login;
          })
          .catch((error) => {
            console.error("Błąd weryfikacji tokena:", error);
            this.$router.push("/"); // Przekierowanie w przypadku nieprawidłowego tokenu
          });
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push("/");
      this.myUseToast("logout sucesfully", "success");
    },
    async getUserData() {
      let getter = await axios.get(
        `http://localhost:3100/api/user/getdata/${this.user.login}`
      );
      this.user.id = getter.data.id;
      this.user.name = getter.data.name;
      this.user.surname = getter.data.surname;
      this.user.mail = getter.data.mail;
    },
    async getBankData() {
      let getter = await axios.get(
        `http://localhost:3100/api/banks/${this.user.id}`
      );
      getter.data.forEach((elem, index) => {
        this.banks[index] = elem;
      });
    },
    async getBankDetails(bankID: Number) {
      let getter = await axios.get(
        `http://localhost:3100/api/banks/getOne/${bankID}`
      );

      this.bank.id = getter.data.id;
      this.bank.name = getter.data.name;
      this.bank.goal = getter.data.goal;
      this.bank.description = getter.data.description;
      this.bank.status = getter.data.status;
      this.bank.userID = getter.data.userID;
    },
    async addNewBan() {
      this.newBank.userID = this.user.id;

      let adder = await axios.post(
        `http://localhost:3100/api/banks/create`,
        this.newBank
      );
      if (adder.status == 200) {
        this.myUseToast("New Bank Created", "success");
        this.getBankData();
        this.newBank.name = "";
        this.newBank.goal = "";
        this.newBank.description = "";
      } else {
        this.myUseToast("Sorry we can't do that", "error");
      }
    },
    async getOperations(bankID: Number) {
      let getter = await axios.get(
        `http://localhost:3100/api/operations/${bankID}/${this.user.id}`
      );

      getter.data.forEach((elem, index) => {
        this.operations[index] = elem;
      });
    },
    async showBankDetails(getName: string) {
      this.depositedMoney = 0;
      this.operations = [{}];
      let showIndex = this.banks.findIndex((elem) => elem.name == getName);
      this.bank.name = this.banks[showIndex].name;
      this.bank.description = this.banks[showIndex].description;
      this.bank.goal = this.banks[showIndex].goal;
      this.bank.id = this.banks[showIndex].id;
      this.bank.userID = this.banks[showIndex].userID;
      this.bank.status = this.banks[showIndex].status;
      await this.getOperations();
      await this.getDeposited();
      this.ProgressBarDetails = (this.depositedMoney * 100) / this.bank.goal;
    },

    async getOperations() {
      let getter = await axios.get(
        `http://localhost:3100/api/operations/${this.user.id}/${this.bank.id}`
      );
      getter.data.forEach((elem, index) => {
        this.operations[index] = elem;
      });
    },

    async getDeposited() {
      this.depositedMoney = 0;
      if (this.operations[0].ammount >= 0) {
        let withdraw = 0;
        this.operations.forEach((elem, index) => {
          if (elem.type == "deposit") {
            this.depositedMoney = this.depositedMoney + Number(elem.ammount);
          } else {
            withdraw = withdraw + Number(elem.ammount);
          }
        });
        this.depositedMoney = this.depositedMoney - withdraw;
      } else {
        this.depositedMoney = 0;
      }
    },

    async depositMoney() {
      let deposit = {
        type: "deposit",
        ammount: Number(this.toDepoistMoney),
        date: new Date().toISOString(),
        userID: this.user.id,
        bankID: this.bank.id,
      };
      const creater = await axios.post(
        `http://localhost:3100/api/operations/create`,
        deposit
      );
      if (creater.status == 200) {
        this.myUseToast("Deposit successfully", "success");
      }
      console.log(creater.status);
      await this.getOperations();
      await this.getDeposited();
    },

    async withdrawMoney() {
      if (this.toDepoistMoney > this.depositedMoney) {
        this.myUseToast("Too little money", "error");
      } else {
        let deposit = {
          type: "withdraw",
          ammount: Number(this.toDepoistMoney),
          date: new Date().toISOString(),
          userID: this.user.id,
          bankID: this.bank.id,
        };
        const creater = await axios.post(
          `http://localhost:3100/api/operations/create`,
          deposit
        );
        if (creater.status == 200) {
          this.myUseToast("Withdraw successfully", "success");
        }
        await this.getOperations();
        await this.getDeposited();
      }
    },

    myUseToast(message: string, type: string) {
      if (type == "success") {
        this.toastService.success(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      if (type == "error") {
        this.toastService.error(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      if (type == "warning") {
        this.toastService.warning(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
  },
};
</script>
