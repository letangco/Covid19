import React, { Component } from "react";
import "./Results.css";
import ResultAge from "./ResultsComponent/ResultAge";
import ResultSex from "./ResultsComponent/ResultSex";
import ResultCardiovascular from './ResultsComponent/ResultCardiovascular';
import ResultDiabetes from './ResultsComponent/ResultDiabetes';
import ResultRespiratory from './ResultsComponent/ResultRespiratory';
import Hypertension from './ResultsComponent/ResultHypertension';
import ResultCancer from './ResultsComponent/ResultCancer';
import ResultStroke from './ResultsComponent/ResultStroke';
import ResultHeart from './ResultsComponent/ResultHeart';
import ResultFinal from './ResultsComponent/ResultFinal';
import Collapsible from 'react-collapsible';
import ResultCountry from './ResultsComponent/ResultCountry';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import SizeContext from "antd/lib/config-provider/SizeContext";
interface iState {
  data: any;
}
interface iProps {
  dataResult: any;
}
class Results extends Component<iProps, iState> {
  // Được thực hiện trước khi Render
  componentWillMount() {
    this.setState({ data: this.props.dataResult });
  }
  // Sau khi Render thì cập nhật lại State từ props nhận được
  componentWillReceiveProps() {
    this.setState({ data: this.props.dataResult });
  }
  render() {
    var SourceCountry:any = [
      {
        "Country": "Afghanistan",
        "CountryCode": "AF",
        "TotalConfirmed": 34366,
        "TotalDeaths": 994
      },
      {
        "Country": "Albania",
        "CountryCode": "AL",
        "TotalConfirmed": 3371,
        "TotalDeaths": 89
      },
      {
        "Country": "Algeria",
        "CountryCode": "DZ",
        "TotalConfirmed": 18712,
        "TotalDeaths": 1004
      },
      {
        "Country": "Andorra",
        "CountryCode": "AD",
        "TotalConfirmed": 855,
        "TotalDeaths": 52
      },
      {
        "Country": "Angola",
        "CountryCode": "AO",
        "TotalConfirmed": 462,
        "TotalDeaths": 23
      },
      {
        "Country": "Antigua and Barbuda",
        "CountryCode": "AG",
        "TotalConfirmed": 74,
        "TotalDeaths": 3
      },
      {
        "Country": "Argentina",
        "CountryCode": "AR",
        "TotalConfirmed": 97509,
        "TotalDeaths": 1810
      },
      {
        "Country": "Armenia",
        "CountryCode": "AM",
        "TotalConfirmed": 31392,
        "TotalDeaths": 559
      },
      {
        "Country": "Australia",
        "CountryCode": "AU",
        "TotalConfirmed": 9797,
        "TotalDeaths": 108
      },
      {
        "Country": "Austria",
        "CountryCode": "AT",
        "TotalConfirmed": 18783,
        "TotalDeaths": 706
      },
      {
        "Country": "Azerbaijan",
        "CountryCode": "AZ",
        "TotalConfirmed": 23521,
        "TotalDeaths": 298
      },
      {
        "Country": "Bahamas",
        "CountryCode": "BS",
        "TotalConfirmed": 111,
        "TotalDeaths": 11
      },
      {
        "Country": "Bahrain",
        "CountryCode": "BH",
        "TotalConfirmed": 32470,
        "TotalDeaths": 104
      },
      {
        "Country": "Bangladesh",
        "CountryCode": "BD",
        "TotalConfirmed": 181129,
        "TotalDeaths": 2305
      },
      {
        "Country": "Barbados",
        "CountryCode": "BB",
        "TotalConfirmed": 103,
        "TotalDeaths": 7
      },
      {
        "Country": "Belarus",
        "CountryCode": "BY",
        "TotalConfirmed": 64767,
        "TotalDeaths": 459
      },
      {
        "Country": "Belgium",
        "CountryCode": "BE",
        "TotalConfirmed": 62469,
        "TotalDeaths": 9782
      },
      {
        "Country": "Belize",
        "CountryCode": "BZ",
        "TotalConfirmed": 37,
        "TotalDeaths": 2
      },
      {
        "Country": "Benin",
        "CountryCode": "BJ",
        "TotalConfirmed": 1378,
        "TotalDeaths": 26
      },
      {
        "Country": "Bhutan",
        "CountryCode": "BT",
        "TotalConfirmed": 82,
        "TotalDeaths": 0
      },
      {
        "Country": "Bolivia",
        "CountryCode": "BO",
        "TotalConfirmed": 47200,
        "TotalDeaths": 1754
      },
      {
        "Country": "Bosnia and Herzegovina",
        "CountryCode": "BA",
        "TotalConfirmed": 6719,
        "TotalDeaths": 219
      },
      {
        "Country": "Botswana",
        "CountryCode": "BW",
        "TotalConfirmed": 314,
        "TotalDeaths": 1
      },
      {
        "Country": "Brazil",
        "CountryCode": "BR",
        "TotalConfirmed": 1839850,
        "TotalDeaths": 71469
      },
      {
        "Country": "Brunei Darussalam",
        "CountryCode": "BN",
        "TotalConfirmed": 141,
        "TotalDeaths": 3
      },
      {
        "Country": "Bulgaria",
        "CountryCode": "BG",
        "TotalConfirmed": 7175,
        "TotalDeaths": 267
      },
      {
        "Country": "Burkina Faso",
        "CountryCode": "BF",
        "TotalConfirmed": 1033,
        "TotalDeaths": 53
      },
      {
        "Country": "Burundi",
        "CountryCode": "BI",
        "TotalConfirmed": 191,
        "TotalDeaths": 1
      },
      {
        "Country": "Cambodia",
        "CountryCode": "KH",
        "TotalConfirmed": 156,
        "TotalDeaths": 0
      },
      {
        "Country": "Cameroon",
        "CountryCode": "CM",
        "TotalConfirmed": 15173,
        "TotalDeaths": 359
      },
      {
        "Country": "Canada",
        "CountryCode": "CA",
        "TotalConfirmed": 109150,
        "TotalDeaths": 8817
      },
      {
        "Country": "Cape Verde",
        "CountryCode": "CV",
        "TotalConfirmed": 1623,
        "TotalDeaths": 19
      },
      {
        "Country": "Central African Republic",
        "CountryCode": "CF",
        "TotalConfirmed": 4288,
        "TotalDeaths": 53
      },
      {
        "Country": "Chad",
        "CountryCode": "TD",
        "TotalConfirmed": 874,
        "TotalDeaths": 74
      },
      {
        "Country": "Chile",
        "CountryCode": "CL",
        "TotalConfirmed": 312029,
        "TotalDeaths": 6881
      },
      {
        "Country": "China",
        "CountryCode": "CN",
        "TotalConfirmed": 85071,
        "TotalDeaths": 4641
      },
      {
        "Country": "Colombia",
        "CountryCode": "CO",
        "TotalConfirmed": 140776,
        "TotalDeaths": 5202
      },
      {
        "Country": "Comoros",
        "CountryCode": "KM",
        "TotalConfirmed": 317,
        "TotalDeaths": 7
      },
      {
        "Country": "Congo (Brazzaville)",
        "CountryCode": "CG",
        "TotalConfirmed": 2028,
        "TotalDeaths": 47
      },
      {
        "Country": "Congo (Kinshasa)",
        "CountryCode": "CD",
        "TotalConfirmed": 7971,
        "TotalDeaths": 189
      },
      {
        "Country": "Costa Rica",
        "CountryCode": "CR",
        "TotalConfirmed": 7231,
        "TotalDeaths": 28
      },
      {
        "Country": "Croatia",
        "CountryCode": "HR",
        "TotalConfirmed": 3672,
        "TotalDeaths": 118
      },
      {
        "Country": "Cuba",
        "CountryCode": "CU",
        "TotalConfirmed": 2420,
        "TotalDeaths": 87
      },
      {
        "Country": "Cyprus",
        "CountryCode": "CY",
        "TotalConfirmed": 1014,
        "TotalDeaths": 19
      },
      {
        "Country": "Czech Republic",
        "CountryCode": "CZ",
        "TotalConfirmed": 13115,
        "TotalDeaths": 352
      },
      {
        "Country": "Côte d'Ivoire",
        "CountryCode": "CI",
        "TotalConfirmed": 12443,
        "TotalDeaths": 82
      },
      {
        "Country": "Denmark",
        "CountryCode": "DK",
        "TotalConfirmed": 13147,
        "TotalDeaths": 609
      },
      {
        "Country": "Djibouti",
        "CountryCode": "DJ",
        "TotalConfirmed": 4968,
        "TotalDeaths": 56
      },
      {
        "Country": "Dominica",
        "CountryCode": "DM",
        "TotalConfirmed": 18,
        "TotalDeaths": 0
      },
      {
        "Country": "Dominican Republic",
        "CountryCode": "DO",
        "TotalConfirmed": 43114,
        "TotalDeaths": 880
      },
      {
        "Country": "Ecuador",
        "CountryCode": "EC",
        "TotalConfirmed": 67209,
        "TotalDeaths": 5031
      },
      {
        "Country": "Egypt",
        "CountryCode": "EG",
        "TotalConfirmed": 81158,
        "TotalDeaths": 3769
      },
      {
        "Country": "El Salvador",
        "CountryCode": "SV",
        "TotalConfirmed": 9391,
        "TotalDeaths": 254
      },
      {
        "Country": "Equatorial Guinea",
        "CountryCode": "GQ",
        "TotalConfirmed": 3071,
        "TotalDeaths": 51
      },
      {
        "Country": "Eritrea",
        "CountryCode": "ER",
        "TotalConfirmed": 232,
        "TotalDeaths": 0
      },
      {
        "Country": "Estonia",
        "CountryCode": "EE",
        "TotalConfirmed": 2014,
        "TotalDeaths": 69
      },
      {
        "Country": "Ethiopia",
        "CountryCode": "ET",
        "TotalConfirmed": 7402,
        "TotalDeaths": 124
      },
      {
        "Country": "Fiji",
        "CountryCode": "FJ",
        "TotalConfirmed": 26,
        "TotalDeaths": 0
      },
      {
        "Country": "Finland",
        "CountryCode": "FI",
        "TotalConfirmed": 7291,
        "TotalDeaths": 329
      },
      {
        "Country": "France",
        "CountryCode": "FR",
        "TotalConfirmed": 208015,
        "TotalDeaths": 30007
      },
      {
        "Country": "Gabon",
        "CountryCode": "GA",
        "TotalConfirmed": 5942,
        "TotalDeaths": 46
      },
      {
        "Country": "Gambia",
        "CountryCode": "GM",
        "TotalConfirmed": 64,
        "TotalDeaths": 3
      },
      {
        "Country": "Georgia",
        "CountryCode": "GE",
        "TotalConfirmed": 981,
        "TotalDeaths": 15
      },
      {
        "Country": "Germany",
        "CountryCode": "DE",
        "TotalConfirmed": 199709,
        "TotalDeaths": 9070
      },
      {
        "Country": "Ghana",
        "CountryCode": "GH",
        "TotalConfirmed": 24248,
        "TotalDeaths": 135
      },
      {
        "Country": "Greece",
        "CountryCode": "GR",
        "TotalConfirmed": 3772,
        "TotalDeaths": 193
      },
      {
        "Country": "Grenada",
        "CountryCode": "GD",
        "TotalConfirmed": 23,
        "TotalDeaths": 0
      },
      {
        "Country": "Guatemala",
        "CountryCode": "GT",
        "TotalConfirmed": 28598,
        "TotalDeaths": 1172
      },
      {
        "Country": "Guinea",
        "CountryCode": "GN",
        "TotalConfirmed": 6044,
        "TotalDeaths": 37
      },
      {
        "Country": "Guinea-Bissau",
        "CountryCode": "GW",
        "TotalConfirmed": 1842,
        "TotalDeaths": 26
      },
      {
        "Country": "Guyana",
        "CountryCode": "GY",
        "TotalConfirmed": 291,
        "TotalDeaths": 17
      },
      {
        "Country": "Haiti",
        "CountryCode": "HT",
        "TotalConfirmed": 6690,
        "TotalDeaths": 139
      },
      {
        "Country": "Holy See (Vatican City State)",
        "CountryCode": "VA",
        "TotalConfirmed": 12,
        "TotalDeaths": 0
      },
      {
        "Country": "Honduras",
        "CountryCode": "HN",
        "TotalConfirmed": 27583,
        "TotalDeaths": 771
      },
      {
        "Country": "Hungary",
        "CountryCode": "HU",
        "TotalConfirmed": 4229,
        "TotalDeaths": 595
      },
      {
        "Country": "Iceland",
        "CountryCode": "IS",
        "TotalConfirmed": 1888,
        "TotalDeaths": 10
      },
      {
        "Country": "India",
        "CountryCode": "IN",
        "TotalConfirmed": 849522,
        "TotalDeaths": 22673
      },
      {
        "Country": "Indonesia",
        "CountryCode": "ID",
        "TotalConfirmed": 74018,
        "TotalDeaths": 3535
      },
      {
        "Country": "Iran, Islamic Republic of",
        "CountryCode": "IR",
        "TotalConfirmed": 255117,
        "TotalDeaths": 12635
      },
      {
        "Country": "Iraq",
        "CountryCode": "IQ",
        "TotalConfirmed": 75194,
        "TotalDeaths": 3055
      },
      {
        "Country": "Ireland",
        "CountryCode": "IE",
        "TotalConfirmed": 25611,
        "TotalDeaths": 1746
      },
      {
        "Country": "Israel",
        "CountryCode": "IL",
        "TotalConfirmed": 37464,
        "TotalDeaths": 354
      },
      {
        "Country": "Italy",
        "CountryCode": "IT",
        "TotalConfirmed": 242827,
        "TotalDeaths": 34945
      },
      {
        "Country": "Jamaica",
        "CountryCode": "JM",
        "TotalConfirmed": 758,
        "TotalDeaths": 10
      },
      {
        "Country": "Japan",
        "CountryCode": "JP",
        "TotalConfirmed": 21430,
        "TotalDeaths": 982
      },
      {
        "Country": "Jordan",
        "CountryCode": "JO",
        "TotalConfirmed": 1176,
        "TotalDeaths": 10
      },
      {
        "Country": "Kazakhstan",
        "CountryCode": "KZ",
        "TotalConfirmed": 58253,
        "TotalDeaths": 264
      },
      {
        "Country": "Kenya",
        "CountryCode": "KE",
        "TotalConfirmed": 9726,
        "TotalDeaths": 184
      },
      {
        "Country": "Korea (South)",
        "CountryCode": "KR",
        "TotalConfirmed": 13417,
        "TotalDeaths": 289
      },
      {
        "Country": "Kuwait",
        "CountryCode": "KW",
        "TotalConfirmed": 54058,
        "TotalDeaths": 386
      },
      {
        "Country": "Kyrgyzstan",
        "CountryCode": "KG",
        "TotalConfirmed": 10410,
        "TotalDeaths": 129
      },
      {
        "Country": "Lao PDR",
        "CountryCode": "LA",
        "TotalConfirmed": 19,
        "TotalDeaths": 0
      },
      {
        "Country": "Latvia",
        "CountryCode": "LV",
        "TotalConfirmed": 1173,
        "TotalDeaths": 30
      },
      {
        "Country": "Lebanon",
        "CountryCode": "LB",
        "TotalConfirmed": 2168,
        "TotalDeaths": 36
      },
      {
        "Country": "Lesotho",
        "CountryCode": "LS",
        "TotalConfirmed": 184,
        "TotalDeaths": 1
      },
      {
        "Country": "Liberia",
        "CountryCode": "LR",
        "TotalConfirmed": 998,
        "TotalDeaths": 47
      },
      {
        "Country": "Libya",
        "CountryCode": "LY",
        "TotalConfirmed": 1389,
        "TotalDeaths": 38
      },
      {
        "Country": "Liechtenstein",
        "CountryCode": "LI",
        "TotalConfirmed": 84,
        "TotalDeaths": 1
      },
      {
        "Country": "Lithuania",
        "CountryCode": "LT",
        "TotalConfirmed": 1865,
        "TotalDeaths": 79
      },
      {
        "Country": "Luxembourg",
        "CountryCode": "LU",
        "TotalConfirmed": 4842,
        "TotalDeaths": 110
      },
      {
        "Country": "Macedonia, Republic of",
        "CountryCode": "MK",
        "TotalConfirmed": 7975,
        "TotalDeaths": 376
      },
      {
        "Country": "Madagascar",
        "CountryCode": "MG",
        "TotalConfirmed": 4578,
        "TotalDeaths": 34
      },
      {
        "Country": "Malawi",
        "CountryCode": "MW",
        "TotalConfirmed": 2261,
        "TotalDeaths": 33
      },
      {
        "Country": "Malaysia",
        "CountryCode": "MY",
        "TotalConfirmed": 8704,
        "TotalDeaths": 122
      },
      {
        "Country": "Maldives",
        "CountryCode": "MV",
        "TotalConfirmed": 2664,
        "TotalDeaths": 13
      },
      {
        "Country": "Mali",
        "CountryCode": "ML",
        "TotalConfirmed": 2406,
        "TotalDeaths": 121
      },
      {
        "Country": "Malta",
        "CountryCode": "MT",
        "TotalConfirmed": 674,
        "TotalDeaths": 9
      },
      {
        "Country": "Mauritania",
        "CountryCode": "MR",
        "TotalConfirmed": 5275,
        "TotalDeaths": 147
      },
      {
        "Country": "Mauritius",
        "CountryCode": "MU",
        "TotalConfirmed": 342,
        "TotalDeaths": 10
      },
      {
        "Country": "Mexico",
        "CountryCode": "MX",
        "TotalConfirmed": 295268,
        "TotalDeaths": 34730
      },
      {
        "Country": "Moldova",
        "CountryCode": "MD",
        "TotalConfirmed": 19208,
        "TotalDeaths": 640
      },
      {
        "Country": "Monaco",
        "CountryCode": "MC",
        "TotalConfirmed": 109,
        "TotalDeaths": 4
      },
      {
        "Country": "Mongolia",
        "CountryCode": "MN",
        "TotalConfirmed": 230,
        "TotalDeaths": 0
      },
      {
        "Country": "Montenegro",
        "CountryCode": "ME",
        "TotalConfirmed": 1164,
        "TotalDeaths": 23
      },
      {
        "Country": "Morocco",
        "CountryCode": "MA",
        "TotalConfirmed": 15542,
        "TotalDeaths": 245
      },
      {
        "Country": "Mozambique",
        "CountryCode": "MZ",
        "TotalConfirmed": 1135,
        "TotalDeaths": 9
      },
      {
        "Country": "Myanmar",
        "CountryCode": "MM",
        "TotalConfirmed": 330,
        "TotalDeaths": 6
      },
      {
        "Country": "Namibia",
        "CountryCode": "NA",
        "TotalConfirmed": 668,
        "TotalDeaths": 1
      },
      {
        "Country": "Nepal",
        "CountryCode": "NP",
        "TotalConfirmed": 16719,
        "TotalDeaths": 38
      },
      {
        "Country": "Netherlands",
        "CountryCode": "NL",
        "TotalConfirmed": 51136,
        "TotalDeaths": 6156
      },
      {
        "Country": "New Zealand",
        "CountryCode": "NZ",
        "TotalConfirmed": 1544,
        "TotalDeaths": 22
      },
      {
        "Country": "Nicaragua",
        "CountryCode": "NI",
        "TotalConfirmed": 2846,
        "TotalDeaths": 91
      },
      {
        "Country": "Niger",
        "CountryCode": "NE",
        "TotalConfirmed": 1099,
        "TotalDeaths": 68
      },
      {
        "Country": "Nigeria",
        "CountryCode": "NG",
        "TotalConfirmed": 31987,
        "TotalDeaths": 724
      },
      {
        "Country": "Norway",
        "CountryCode": "NO",
        "TotalConfirmed": 8977,
        "TotalDeaths": 252
      },
      {
        "Country": "Oman",
        "CountryCode": "OM",
        "TotalConfirmed": 54697,
        "TotalDeaths": 248
      },
      {
        "Country": "Pakistan",
        "CountryCode": "PK",
        "TotalConfirmed": 248872,
        "TotalDeaths": 5197
      },
      {
        "Country": "Palestinian Territory",
        "CountryCode": "PS",
        "TotalConfirmed": 5931,
        "TotalDeaths": 33
      },
      {
        "Country": "Panama",
        "CountryCode": "PA",
        "TotalConfirmed": 44332,
        "TotalDeaths": 893
      },
      {
        "Country": "Papua New Guinea",
        "CountryCode": "PG",
        "TotalConfirmed": 11,
        "TotalDeaths": 0
      },
      {
        "Country": "Paraguay",
        "CountryCode": "PY",
        "TotalConfirmed": 2820,
        "TotalDeaths": 21
      },
      {
        "Country": "Peru",
        "CountryCode": "PE",
        "TotalConfirmed": 322710,
        "TotalDeaths": 11682
      },
      {
        "Country": "Philippines",
        "CountryCode": "PH",
        "TotalConfirmed": 54222,
        "TotalDeaths": 1372
      },
      {
        "Country": "Poland",
        "CountryCode": "PL",
        "TotalConfirmed": 37521,
        "TotalDeaths": 1568
      },
      {
        "Country": "Portugal",
        "CountryCode": "PT",
        "TotalConfirmed": 46221,
        "TotalDeaths": 1654
      },
      {
        "Country": "Qatar",
        "CountryCode": "QA",
        "TotalConfirmed": 103128,
        "TotalDeaths": 146
      },
      {
        "Country": "Republic of Kosovo",
        "CountryCode": "XK",
        "TotalConfirmed": 4715,
        "TotalDeaths": 101
      },
      {
        "Country": "Romania",
        "CountryCode": "RO",
        "TotalConfirmed": 32079,
        "TotalDeaths": 1871
      },
      {
        "Country": "Russian Federation",
        "CountryCode": "RU",
        "TotalConfirmed": 719449,
        "TotalDeaths": 11188
      },
      {
        "Country": "Rwanda",
        "CountryCode": "RW",
        "TotalConfirmed": 1299,
        "TotalDeaths": 4
      },
      {
        "Country": "Saint Kitts and Nevis",
        "CountryCode": "KN",
        "TotalConfirmed": 17,
        "TotalDeaths": 0
      },
      {
        "Country": "Saint Lucia",
        "CountryCode": "LC",
        "TotalConfirmed": 22,
        "TotalDeaths": 0
      },
      {
        "Country": "Saint Vincent and Grenadines",
        "CountryCode": "VC",
        "TotalConfirmed": 29,
        "TotalDeaths": 0
      },
      {
        "Country": "San Marino",
        "CountryCode": "SM",
        "TotalConfirmed": 699,
        "TotalDeaths": 42
      },
      {
        "Country": "Sao Tome and Principe",
        "CountryCode": "ST",
        "TotalConfirmed": 727,
        "TotalDeaths": 14
      },
      {
        "Country": "Saudi Arabia",
        "CountryCode": "SA",
        "TotalConfirmed": 229480,
        "TotalDeaths": 2181
      },
      {
        "Country": "Senegal",
        "CountryCode": "SN",
        "TotalConfirmed": 8014,
        "TotalDeaths": 145
      },
      {
        "Country": "Serbia",
        "CountryCode": "RS",
        "TotalConfirmed": 18073,
        "TotalDeaths": 382
      },
      {
        "Country": "Seychelles",
        "CountryCode": "SC",
        "TotalConfirmed": 100,
        "TotalDeaths": 0
      },
      {
        "Country": "Sierra Leone",
        "CountryCode": "SL",
        "TotalConfirmed": 1618,
        "TotalDeaths": 63
      },
      {
        "Country": "Singapore",
        "CountryCode": "SG",
        "TotalConfirmed": 45783,
        "TotalDeaths": 26
      },
      {
        "Country": "Slovakia",
        "CountryCode": "SK",
        "TotalConfirmed": 1893,
        "TotalDeaths": 28
      },
      {
        "Country": "Slovenia",
        "CountryCode": "SI",
        "TotalConfirmed": 1827,
        "TotalDeaths": 111
      },
      {
        "Country": "Somalia",
        "CountryCode": "SO",
        "TotalConfirmed": 3051,
        "TotalDeaths": 92
      },
      {
        "Country": "South Africa",
        "CountryCode": "ZA",
        "TotalConfirmed": 264184,
        "TotalDeaths": 3971
      },
      {
        "Country": "South Sudan",
        "CountryCode": "SS",
        "TotalConfirmed": 2021,
        "TotalDeaths": 38
      },
      {
        "Country": "Spain",
        "CountryCode": "ES",
        "TotalConfirmed": 253908,
        "TotalDeaths": 28403
      },
      {
        "Country": "Sri Lanka",
        "CountryCode": "LK",
        "TotalConfirmed": 2511,
        "TotalDeaths": 11
      },
      {
        "Country": "Sudan",
        "CountryCode": "SD",
        "TotalConfirmed": 10250,
        "TotalDeaths": 650
      },
      {
        "Country": "Suriname",
        "CountryCode": "SR",
        "TotalConfirmed": 741,
        "TotalDeaths": 18
      },
      {
        "Country": "Swaziland",
        "CountryCode": "SZ",
        "TotalConfirmed": 1311,
        "TotalDeaths": 18
      },
      {
        "Country": "Sweden",
        "CountryCode": "SE",
        "TotalConfirmed": 74898,
        "TotalDeaths": 5526
      },
      {
        "Country": "Switzerland",
        "CountryCode": "CH",
        "TotalConfirmed": 32817,
        "TotalDeaths": 1968
      },
      {
        "Country": "Syrian Arab Republic (Syria)",
        "CountryCode": "SY",
        "TotalConfirmed": 394,
        "TotalDeaths": 16
      },
      {
        "Country": "Taiwan, Republic of China",
        "CountryCode": "TW",
        "TotalConfirmed": 451,
        "TotalDeaths": 7
      },
      {
        "Country": "Tajikistan",
        "CountryCode": "TJ",
        "TotalConfirmed": 6506,
        "TotalDeaths": 55
      },
      {
        "Country": "Tanzania, United Republic of",
        "CountryCode": "TZ",
        "TotalConfirmed": 509,
        "TotalDeaths": 21
      },
      {
        "Country": "Thailand",
        "CountryCode": "TH",
        "TotalConfirmed": 3216,
        "TotalDeaths": 58
      },
      {
        "Country": "Timor-Leste",
        "CountryCode": "TL",
        "TotalConfirmed": 24,
        "TotalDeaths": 0
      },
      {
        "Country": "Togo",
        "CountryCode": "TG",
        "TotalConfirmed": 710,
        "TotalDeaths": 15
      },
      {
        "Country": "Trinidad and Tobago",
        "CountryCode": "TT",
        "TotalConfirmed": 133,
        "TotalDeaths": 8
      },
      {
        "Country": "Tunisia",
        "CountryCode": "TN",
        "TotalConfirmed": 1245,
        "TotalDeaths": 50
      },
      {
        "Country": "Turkey",
        "CountryCode": "TR",
        "TotalConfirmed": 211981,
        "TotalDeaths": 5344
      },
      {
        "Country": "Uganda",
        "CountryCode": "UG",
        "TotalConfirmed": 1013,
        "TotalDeaths": 0
      },
      {
        "Country": "Ukraine",
        "CountryCode": "UA",
        "TotalConfirmed": 53941,
        "TotalDeaths": 1389
      },
      {
        "Country": "United Arab Emirates",
        "CountryCode": "AE",
        "TotalConfirmed": 54453,
        "TotalDeaths": 331
      },
      {
        "Country": "United Kingdom",
        "CountryCode": "GB",
        "TotalConfirmed": 290504,
        "TotalDeaths": 44883
      },
      {
        "Country": "United States of America",
        "CountryCode": "US",
        "TotalConfirmed": 3245925,
        "TotalDeaths": 134777
      },
      {
        "Country": "Uruguay",
        "CountryCode": "UY",
        "TotalConfirmed": 986,
        "TotalDeaths": 30
      },
      {
        "Country": "Uzbekistan",
        "CountryCode": "UZ",
        "TotalConfirmed": 12513,
        "TotalDeaths": 57
      },
      {
        "Country": "Venezuela (Bolivarian Republic)",
        "CountryCode": "VE",
        "TotalConfirmed": 9178,
        "TotalDeaths": 85
      },
      {
        "Country": "Viet Nam",
        "CountryCode": "VN",
        "TotalConfirmed": 370,
        "TotalDeaths": 0
      },
      {
        "Country": "Western Sahara",
        "CountryCode": "EH",
        "TotalConfirmed": 10,
        "TotalDeaths": 1
      },
      {
        "Country": "Yemen",
        "CountryCode": "YE",
        "TotalConfirmed": 1389,
        "TotalDeaths": 365
      },
      {
        "Country": "Zambia",
        "CountryCode": "ZM",
        "TotalConfirmed": 1895,
        "TotalDeaths": 42
      },
      {
        "Country": "Zimbabwe",
        "CountryCode": "ZW",
        "TotalConfirmed": 982,
        "TotalDeaths": 18
      }
     ];
     console.log(SourceCountry)
    // console.log(this.state.data)
    // var data: any[] = this.props.dataResult;
    // var data: any[] = this.state.data;
    // var groupAge: string = data[0];
    // var valueAge: any = [0.06, 3.9, 22.4, 24.9, 48.7, 0.04];
    // var sex: string = data[1];
    // var Cardiovascular: string = data[2];
    // var Diabetes: string = data[3];
    // var Respiratory: string = data[4];
    // var Hypertension: string = data[5];
    // var Cancer: string = data[6];
    // var Stroke: string = data[7];
    // var Heart: string = data[8];
    return (
      <div className="container">
        <div className="row page-result-survey">
          <p className="title-result">
            <FontAwesomeIcon icon={faChartLine} /> Result Covid-19 Calculator
          </p>
          <ResultFinal sendDataResult={this.state.data} />
          <Collapsible trigger="Read more..." triggerStyle={{color:"white"}}easing = "ease-in"  triggerClassName="txt-read-more" transitionTime={800}>
            <ResultCountry sendCountry={this.state.data[9]} sendSourceCountry={SourceCountry}/>
            <ResultAge sendAge={this.state.data[0]} />
            <ResultSex sendSex={this.state.data[1]} />
            <ResultCardiovascular sendCardiovascular={this.state.data[2]} />
            <ResultDiabetes sendDiabetes={this.state.data[3]} />
            <ResultRespiratory sendRespiratory={this.state.data[4]} />
            <Hypertension sendHypertension={this.state.data[5]} />
            <ResultCancer sendCancer={this.state.data[6]} />
            <ResultStroke sendStroke={this.state.data[7]} />
            <ResultHeart sendHeart={this.state.data[8]} />
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default Results;
