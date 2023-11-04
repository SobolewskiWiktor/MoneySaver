<template>
  <div id="loading" v-if="isLoading == true">
    <v-progress-circular
      v-if="isLoading"
      :size="150"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <div id="dashboardContent" v-else>
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
                  text="Dodaj Cel"
                >
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card
                  title="Nowy"
                  color="grey-darken-3"
                  class="text-green-accent-2"
                >
                  <v-card-text class="text-white">
                    <div id="settingsDetailsBankRow">
                      <div id="settingsDetailsBankLeft">
                        <v-text-field
                          :counter="10"
                          v-model="newBank.name"
                          label="Nazwa"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                      <div id="settingsDetailsBankRight">
                        <v-text-field
                          :counter="10"
                          v-model="newBank.goal"
                          label="Kwota"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                    </div>
                    <v-textarea
                      class="mt-6"
                      label="Opis"
                      v-model="newBank.description"
                    ></v-textarea>
                    <v-btn
                      type="submit"
                      block
                      class="text-light-green-accent-3"
                      variant="tonal"
                      @click.prevent="addNewBan()"
                      >Zatwierdź</v-btn
                    >
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      class="text-light-blue-darken-3"
                      variant="tonal"
                      text="Zakmnij"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
          <!-- 
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
                          v-model="user.name"
                          :counter="10"
                          label="Name"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                      <div id="settingsDetailsBankRight">
                        <v-text-field
                          v-model="user.surname"
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
                          v-model="user.mail"
                          :counter="10"
                          label="Mail"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                      <div id="settingsDetailsBankRight">
                        <v-text-field
                          v-model="user.passowrd"
                          :type="show1 ? 'text' : 'password'"
                          label="Old Password"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                    </div>
                    <div id="settingsDetailsSettingsRowEnd">
                      <div id="settingsDetailsBankLeft">
                        <v-text-field
                          v-model="user.newPassowrd"
                          :counter="10"
                          :type="show1 ? 'text' : 'password'"
                          label="New Passowrd"
                          required
                          hide-details
                        ></v-text-field>
                      </div>
                      <div id="settingsDetailsBankRight">
                        <v-text-field
                          v-model="user.newPassowrdConfirm"
                          :type="show1 ? 'text' : 'password'"
                          label="Confirm Password"
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
                      @click.prevent="updateUser()"
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
        -->
          <div id="buttonMenuContainer">
            <v-btn
              @click.prevent="logout()"
              class="text-cyan-lighten-2"
              variant="tonal"
            >
              Wyloguj
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <div id="dashboardContentStatistics">
      <div id="dashboardContentStatisticsFirstSection">
        <div id="StatisticFirstTitle">
          <h1>Ogólne</h1>
        </div>
        <div id="StatisticFirstContent">
          <div id="StatisticFirstContentLeft">
            <div id="statisticFirstContentLeftBox">
              <div id="statisticFirstContentLeftBoxTitle">
                <h1>Wszystkie cele</h1>
              </div>
              <div id="statisticFirstContentLeftBoxContent">
                <div id="leftBoxContentNumber">
                  <h1>{{ allBanksCount }}</h1>
                </div>
                <div id="leftBoxContentImage">
                  <img id="piggybankIcon" src="@/Images/piggy-bank.png" />
                </div>
              </div>
            </div>
            <div id="statisticFirstContentLeftBox">
              <div id="statisticFirstContentLeftBoxTitle">
                <h1>Zamknięte Cele</h1>
              </div>
              <div id="statisticFirstContentLeftBoxContent">
                <div id="leftBoxContentNumber">
                  <h1>{{ allClosedBanksCount }}</h1>
                </div>
                <div id="leftBoxContentImageBroken">
                  <img id="piggybankIconBroken" src="@/Images/broken.png" />
                </div>
              </div>
            </div>
          </div>

          <div id="statsticFirstContentRight">
            <div id="statisticFirstContentRightTitle">
              <h1>Zaoszczędzone</h1>
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
          <h1>Podsumowanie</h1>
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
          <h1>Wszystkie Cele</h1>
        </div>
        <div id="statisticThirdAllBox">
          <div
            id="statisticThirdAllRow"
            v-for="(item, i) in allBanksMean"
            :key="i"
          >
            <div id="statisticThirdRowNumber">
              <h1>{{ i }}</h1>
            </div>
            <div id="statisticThirdRowProgressBar">
              <v-progress-linear
                v-model="allBanksMean[i].mean"
                color="cyan-lighten-2"
                height="10"
              ></v-progress-linear>
            </div>
            <div id="statisticThirdRowBankName">
              <h1>{{ allBanksMean[i].name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dashboardContentDetails">
      <div id="dashboardContentDetailsSavingList">
        <div id="dashboardContentDetailsSavingListTitleBox">
          <div id="dashboardContentDetailsSavingListTitle">
            <h1>Moje Cele</h1>
          </div>
          <div id="dashboardContentDetailsSavingListOptions">
            <!-- <v-menu transition="scale-transition">
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
          --></div>
        </div>
        <div id="dashboardContentDeatilsSavingListBox">
          <div id="listscroll">
            <div
              v-for="(item, index) in banks"
              :key="index"
              @click.prevent="showBankDetails(item.name)"
            >
              <div
                v-if="item.status === 'current'"
                id="dashboardContentDetailsSavingListRow"
              >
                <!-- Zawartość dla statusu 'current' -->
                <div id="dashboardContentDetailsSavingListRowImage">
                  <img
                    id="savingIcon"
                    src="../Images/regular/paper-plane.svg"
                  />
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

              <div
                v-else-if="item.status === 'closed'"
                id="dashboardContentDetailsSavingListRowClosed"
              >
                <!-- Zawartość dla statusu 'closed' -->
                <div id="dashboardContentDetailsSavingListRowImage">
                  <img
                    id="savingIcon"
                    src="../Images/regular/paper-plane.svg"
                  />
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
                    text="Zdeponuj"
                  >
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card
                    title="Zdeponuj"
                    color="grey-darken-3"
                    class="text-green-accent-2"
                  >
                    <v-card-text class="text-white">
                      <v-text-field
                        v-model="toDepoistMoney"
                        :counter="10"
                        label="Kwota"
                        required
                        hide-details
                      ></v-text-field>
                      <v-btn
                        type="submit"
                        block
                        class="text-light-green-accent-3 mt-5"
                        variant="tonal"
                        @click.prevent="depositMoney()"
                        >Zatwierdź</v-btn
                      >
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        class="text-light-blue-darken-3"
                        variant="tonal"
                        text="Zamknij"
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
                    text="Wypłać"
                  >
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card
                    color="grey-darken-3"
                    class="text-green-accent-2"
                    title="Wypłać"
                  >
                    <v-card-text class="text-white">
                      <v-text-field
                        v-model="toDepoistMoney"
                        :counter="10"
                        label="Kwota"
                        required
                        hide-details
                      ></v-text-field>
                      <v-btn
                        type="submit"
                        block
                        class="text-light-green-accent-3 mt-5"
                        variant="tonal"
                        @click.prevent="withdrawMoney()"
                        >Zatwierdź</v-btn
                      >
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        class="text-light-blue-darken-3"
                        variant="tonal"
                        text="Zamknij"
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
                    text="Edytuj"
                  >
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card
                    title="Edycja"
                    color="grey-darken-3"
                    class="text-green-accent-2"
                  >
                    <v-card-text class="text-white">
                      <div id="settingsDetailsBankRow">
                        <div id="settingsDetailsBankLeft">
                          <v-text-field
                            v-model="bank.name"
                            :counter="10"
                            label="Nazwa"
                            required
                            hide-details
                          ></v-text-field>
                        </div>
                        <div id="settingsDetailsBankRight">
                          <v-text-field
                            v-model="bank.goal"
                            :counter="10"
                            label="Cel"
                            required
                            hide-details
                          ></v-text-field>
                        </div>
                      </div>
                      <v-textarea
                        class="mt-6"
                        label="Opis"
                        v-model="bank.description"
                      ></v-textarea>
                      <v-btn
                        type="submit"
                        block
                        class="text-light-green-accent-3"
                        variant="tonal"
                        @click.prevent="updateBank(bank.id)"
                        >Zatwierdź</v-btn
                      >
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        class="text-light-blue-darken-3"
                        variant="tonal"
                        text="Zamknij"
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
              <div id="rowRightTitleText">Opis</div>
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
import { runInThisContext } from "vm";
import { table } from "console";

const toast = useToast();
export default {
  name: "Vue Chart",
  async created() {
    await this.verifyToken();
    await this.getUserData();
    await this.getBankData();
    await this.CalculateBanks();
    await this.calculateAllSavingChart();
    await this.calculateYearSanvingChart();
    await this.calculateBankMean();
    await this.detailsAfterLogin();
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  data() {
    return {
      toastService: toast,
      isLoading: true,

      user: {
        name: "",
        surname: "",
        mail: "",
        login: "",
        password: "",
        id: "",
        newPassowrd: "",
        newPassowrdConfirm: "",
      },

      banks: [{}],
      newBank: {
        name: "",
        goal: "",
        description: "",
        userID: "",
        status: "current",
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

      allBanksCount: 1,
      allClosedBanksCount: 0,
      allBanksMean: [{}],
      test: 10,
      items: [{ title: "All" }, { title: "Current" }, { title: "Closed" }],
      currentDisplayOptionDetailsSaving: "All",

      settingOpton: "none",

      show1: false,
      show2: true,
      password: "Password",

      updateBankName: "",
      updateBankAmmount: "",
      updateDescription: "",

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
          name: "Kwota",
          color: "#C16E36",
          data: [0],
        },
      ],

      seriesYear: [
        {
          name: "Kwota",
          color: "#41b883",
          data: [0],
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
      this.myUseToast("Wylogowano", "success");
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
        this.myUseToast("Cel utworzony", "success");
        this.getBankData();
        this.newBank.name = "";
        this.newBank.goal = "";
        this.newBank.description = "";
        this.CalculateBanks();
      } else {
        this.myUseToast("Błąd tworzenia celu", "error");
      }
      await this.calculateBankMean();
      await this.calculateAllSavingChart();
      await this.calculateYearSanvingChart();
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
        this.myUseToast("Zdeponowano", "success");
      }
      await this.getOperations();
      await this.getDeposited();
      await this.calculateAllSavingChart();
      await this.calculateYearSanvingChart();
      await this.calculateBankMean();
      await this.showBankDetails(this.bank.name);
      await this.automaticCloseAndOpen();
    },

    async withdrawMoney() {
      if (this.toDepoistMoney > this.depositedMoney) {
        this.myUseToast("Zbyt mało pieniędzy", "error");
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
          this.myUseToast("Wypłacono", "success");
        }
        await this.getOperations();
        await this.getDeposited();
        await this.calculateAllSavingChart();
        await this.calculateYearSanvingChart();
        await this.calculateBankMean();
        await this.showBankDetails(this.bank.name);
        await this.automaticCloseAndOpen();
      }
    },

    async CalculateBanks() {
      this.allBanksCount = 1;
      this.allClosedBanksCount = 0;
      this.banks.forEach((elem, index) => {
        if (elem.status == "current") {
          this.allBanksCount = this.allBanksCount + 1;
        } else {
          this.allClosedBanksCount = this.allClosedBanksCount + 1;
        }
      });
    },

    async calculateAllSavingChart() {
      this.banks.forEach(async (elem, index) => {
        let banksOperations = [{}];
        let bankOperationCount = 0;
        let getter = await axios.get(
          `http://localhost:3100/api/operations/${this.user.id}/${elem.id}`
        );
        if (getter.data.length > 0) {
          getter.data.forEach((elemSec, indexSec) => {
            banksOperations[indexSec] = elemSec;
          });
          banksOperations.forEach((elemSec, indexSec) => {
            bankOperationCount = bankOperationCount + Number(elemSec.ammount);
          });
          this.series[0].data[index] = Number(bankOperationCount);
        } else {
          this.series[0].data[index] = 0;
        }
      });
    },

    async calculateYearSanvingChart() {
      let bankOperationCountMonth = new Array(12).fill(0); // Inicjalizacja tablicy dla 12 miesięcy

      try {
        for (const elem of this.banks) {
          let banksOperations = [{}];
          const getter = await axios.get(
            `http://localhost:3100/api/operations/${this.user.id}/${elem.id}`
          );

          if (getter.data.length > 0) {
            getter.data.forEach((elemSec, indexSec) => {
              banksOperations[indexSec] = elemSec;
            });
            banksOperations.forEach((elemSec, indexSec) => {
              const date = new Date(elemSec.date);
              const month = date.getMonth();
              const amount = Number(elemSec.ammount); // Poprawiony błąd w nazwie zmiennej
              if (elemSec.type === "deposit") {
                bankOperationCountMonth[month] += amount;
              } else if (elemSec.type === "withdraw") {
                bankOperationCountMonth[month] -= amount;
              }
            });
          }
        }
        this.seriesYear[0].data = bankOperationCountMonth;
      } catch (error) {
        console.error("ERROR ", error);
      }
    },

    async calculateBankMean() {
      for (const [index, elem] of this.banks.entries()) {
        let operations = [{}];
        let mean = 0;
        let deposit = 0;
        let withdraw = 0;
        let deposited = 0;
        let goal = elem.goal;
        const getter = await axios.get(
          `http://localhost:3100/api/operations/${this.user.id}/${elem.id}`
        );

        getter.data.forEach((elemSec, indexSec) => {
          if (elemSec.type === "deposit") {
            deposit = deposit + Number(elemSec.ammount);
          } else {
            withdraw = withdraw + Number(elemSec.ammount);
          }
        });

        deposited = deposit - withdraw;
        mean = (deposited * 100) / goal;
        let bankMean = {
          name: elem.name,
          goal: elem.goal,
          mean: mean,
        };

        this.allBanksMean[index] = bankMean;
      }
    },

    async detailsAfterLogin() {
      this.depositedMoney = 0;
      this.operations = [{}];
      this.bank.name = this.banks[0].name;
      this.bank.description = this.banks[0].description;
      this.bank.goal = this.banks[0].goal;
      this.bank.id = this.banks[0].id;
      this.bank.userID = this.banks[0].userID;
      this.bank.status = this.banks[0].status;
      await this.getOperations();
      await this.getDeposited();
      this.ProgressBarDetails = (this.depositedMoney * 100) / this.bank.goal;
    },

    async updateBank() {
      const updater = await axios.post(
        `http://localhost:3100/api/banks/update/${this.bank.id}`,
        this.bank
      );
      if (updater.status == 200) {
        this.myUseToast("Upaktualniono", "success");
        this.getBankData(updater.data.name);
        this.showBankDetails(updater.data.name);
      }
    },

    async updateUser() {
      if (this.user.newPassowrd != this.user.newPassowrdConfirm) {
        this.myUseToast("Podane hasła nie pasują", "error");
      } else {
        let checker = await axios.get(
          `http://localhost:3100/api/user/checkPassword/${this.user.login}/${this.user.passowrd}`
        );
        if (checker.data == "password not Match") {
          this.myUseToast("Złe hasło", "error");
        } else {
          let updateUser = {
            login: this.user.login,
            password: this.user.newPassowrd,
            name: this.user.name,
            surname: this.user.surname,
            mail: this.user.mail,
            id: this.user.id,
          };

          let updater = await axios.post(
            `http://localhost:3100/api/user/update/:${updateUser.login}`,
            updateUser
          );
          console.log(updater);
        }
      }
    },

    async automaticCloseAndOpen() {
      if (Number(this.bank.goal) <= this.depositedMoney) {
        this.bank.status = "closed";
      } else {
        this.bank.status = "current";
      }
      const updater = await axios.post(
        `http://localhost:3100/api/banks/update/${this.bank.id}`,
        this.bank
      );
      this.getBankData(updater.data.name);
      if (updater.status == 200 && updater.data.status == "closed") {
        this.myUseToast("Zamknięto cel automatycznie ", "success");
        await this.getBankData();
        await this.CalculateBanks();
      } else if (updater.status == 200 && updater.data.status == "current") {
        this.myUseToast("Otwarto cel automatycznie ", "success");
        await this.getBankData();
        await this.CalculateBanks();
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
