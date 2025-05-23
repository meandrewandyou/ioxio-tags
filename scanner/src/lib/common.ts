import { toast } from "@zerodevx/svelte-toast"

const locale = new Intl.NumberFormat().resolvedOptions().locale
const NumberFormatter = new Intl.NumberFormat(locale, {
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 3,
})
const DateFormatter = new Intl.DateTimeFormat(locale)

export function consoleLog(message: string, type: string = "info") {
  toast.push(message, { classes: [type === "info" ? "info" : "warn"] })
  if (type === "info") {
    console.log(message)
  } else {
    console.error(message)
  }
}

export function formatNumber(input: number, unit = ""): string {
  if (input === 0 || input === null || input === undefined) {
    return "-"
  }

  let result = NumberFormatter.format(input)
  if (unit && unit === "%") {
    result += unit
  } else if (unit) {
    result += ` ${unit}`
  }
  return result
}

export function localizeDate(date?: string): string {
  if (!date) {
    return "-"
  }
  return DateFormatter.format(new Date(date))
}

export function localizeDateTime(dateString: string) {
  const date = new Date(dateString)
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }

  const dateFormatter = new Intl.DateTimeFormat(locale, options)
  return dateFormatter.format(date).replace(",", "")
}

export function capitaliseFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function getYearLabel(years: number) {
  if (years === 1) {
    return "year"
  }
  return "years"
}

interface CountryList {
  [key: string]: string
}

export const countryListAlpha3: CountryList = {
  AFG: "Afghanistan",
  ALB: "Albania",
  DZA: "Algeria",
  ASM: "American Samoa",
  AND: "Andorra",
  AGO: "Angola",
  AIA: "Anguilla",
  ATA: "Antarctica",
  ATG: "Antigua and Barbuda",
  ARG: "Argentina",
  ARM: "Armenia",
  ABW: "Aruba",
  AUS: "Australia",
  AUT: "Austria",
  AZE: "Azerbaijan",
  BHS: "Bahamas (the)",
  BHR: "Bahrain",
  BGD: "Bangladesh",
  BRB: "Barbados",
  BLR: "Belarus",
  BEL: "Belgium",
  BLZ: "Belize",
  BEN: "Benin",
  BMU: "Bermuda",
  BTN: "Bhutan",
  BOL: "Bolivia (Plurinational State of)",
  BES: "Bonaire, Sint Eustatius and Saba",
  BIH: "Bosnia and Herzegovina",
  BWA: "Botswana",
  BVT: "Bouvet Island",
  BRA: "Brazil",
  IOT: "British Indian Ocean Territory (the)",
  BRN: "Brunei Darussalam",
  BGR: "Bulgaria",
  BFA: "Burkina Faso",
  BDI: "Burundi",
  CPV: "Cabo Verde",
  KHM: "Cambodia",
  CMR: "Cameroon",
  CAN: "Canada",
  CYM: "Cayman Islands (the)",
  CAF: "Central African Republic (the)",
  TCD: "Chad",
  CHL: "Chile",
  CHN: "China",
  CXR: "Christmas Island",
  CCK: "Cocos (Keeling) Islands (the)",
  COL: "Colombia",
  COM: "Comoros (the)",
  COD: "Congo (the Democratic Republic of the)",
  COG: "Congo (the)",
  COK: "Cook Islands (the)",
  CRI: "Costa Rica",
  HRV: "Croatia",
  CUB: "Cuba",
  CUW: "Curaçao",
  CYP: "Cyprus",
  CZE: "Czechia",
  CIV: "Côte d'Ivoire",
  DNK: "Denmark",
  DJI: "Djibouti",
  DMA: "Dominica",
  DOM: "Dominican Republic (the)",
  ECU: "Ecuador",
  EGY: "Egypt",
  SLV: "El Salvador",
  GNQ: "Equatorial Guinea",
  ERI: "Eritrea",
  EST: "Estonia",
  SWZ: "Eswatini",
  ETH: "Ethiopia",
  FLK: "Falkland Islands (the) [Malvinas]",
  FRO: "Faroe Islands (the)",
  FJI: "Fiji",
  FIN: "Finland",
  FRA: "France",
  GUF: "French Guiana",
  PYF: "French Polynesia",
  ATF: "French Southern Territories (the)",
  GAB: "Gabon",
  GMB: "Gambia (the)",
  GEO: "Georgia",
  DEU: "Germany",
  GHA: "Ghana",
  GIB: "Gibraltar",
  GRC: "Greece",
  GRL: "Greenland",
  GRD: "Grenada",
  GLP: "Guadeloupe",
  GUM: "Guam",
  GTM: "Guatemala",
  GGY: "Guernsey",
  GIN: "Guinea",
  GNB: "Guinea-Bissau",
  GUY: "Guyana",
  HTI: "Haiti",
  HMD: "Heard Island and McDonald Islands",
  VAT: "Holy See (the)",
  HND: "Honduras",
  HKG: "Hong Kong",
  HUN: "Hungary",
  ISL: "Iceland",
  IND: "India",
  IDN: "Indonesia",
  IRN: "Iran (Islamic Republic of)",
  IRQ: "Iraq",
  IRL: "Ireland",
  IMN: "Isle of Man",
  ISR: "Israel",
  ITA: "Italy",
  JAM: "Jamaica",
  JPN: "Japan",
  JEY: "Jersey",
  JOR: "Jordan",
  KAZ: "Kazakhstan",
  KEN: "Kenya",
  KIR: "Kiribati",
  PRK: "Korea (the Democratic People's Republic of)",
  KOR: "Korea (the Republic of)",
  KWT: "Kuwait",
  KGZ: "Kyrgyzstan",
  LAO: "Lao People's Democratic Republic (the)",
  LVA: "Latvia",
  LBN: "Lebanon",
  LSO: "Lesotho",
  LBR: "Liberia",
  LBY: "Libya",
  LIE: "Liechtenstein",
  LTU: "Lithuania",
  LUX: "Luxembourg",
  MAC: "Macao",
  MDG: "Madagascar",
  MWI: "Malawi",
  MYS: "Malaysia",
  MDV: "Maldives",
  MLI: "Mali",
  MLT: "Malta",
  MHL: "Marshall Islands (the)",
  MTQ: "Martinique",
  MRT: "Mauritania",
  MUS: "Mauritius",
  MYT: "Mayotte",
  MEX: "Mexico",
  FSM: "Micronesia (Federated States of)",
  MDA: "Moldova (the Republic of)",
  MCO: "Monaco",
  MNG: "Mongolia",
  MNE: "Montenegro",
  MSR: "Montserrat",
  MAR: "Morocco",
  MOZ: "Mozambique",
  MMR: "Myanmar",
  NAM: "Namibia",
  NRU: "Nauru",
  NPL: "Nepal",
  NLD: "Netherlands (the)",
  NCL: "New Caledonia",
  NZL: "New Zealand",
  NIC: "Nicaragua",
  NER: "Niger (the)",
  NGA: "Nigeria",
  NIU: "Niue",
  NFK: "Norfolk Island",
  MNP: "Northern Mariana Islands (the)",
  NOR: "Norway",
  OMN: "Oman",
  PAK: "Pakistan",
  PLW: "Palau",
  PSE: "Palestine, State of",
  PAN: "Panama",
  PNG: "Papua New Guinea",
  PRY: "Paraguay",
  PER: "Peru",
  PHL: "Philippines (the)",
  PCN: "Pitcairn",
  POL: "Poland",
  PRT: "Portugal",
  PRI: "Puerto Rico",
  QAT: "Qatar",
  MKD: "Republic of North Macedonia",
  ROU: "Romania",
  RUS: "Russian Federation (the)",
  RWA: "Rwanda",
  REU: "Réunion",
  BLM: "Saint Barthélemy",
  SHN: "Saint Helena, Ascension and Tristan da Cunha",
  KNA: "Saint Kitts and Nevis",
  LCA: "Saint Lucia",
  MAF: "Saint Martin (French part)",
  SPM: "Saint Pierre and Miquelon",
  VCT: "Saint Vincent and the Grenadines",
  WSM: "Samoa",
  SMR: "San Marino",
  STP: "Sao Tome and Principe",
  SAU: "Saudi Arabia",
  SEN: "Senegal",
  SRB: "Serbia",
  SYC: "Seychelles",
  SLE: "Sierra Leone",
  SGP: "Singapore",
  SXM: "Sint Maarten (Dutch part)",
  SVK: "Slovakia",
  SVN: "Slovenia",
  SLB: "Solomon Islands",
  SOM: "Somalia",
  ZAF: "South Africa",
  SGS: "South Georgia and the South Sandwich Islands",
  SSD: "South Sudan",
  ESP: "Spain",
  LKA: "Sri Lanka",
  SDN: "Sudan (the)",
  SUR: "Suriname",
  SJM: "Svalbard and Jan Mayen",
  SWE: "Sweden",
  CHE: "Switzerland",
  SYR: "Syrian Arab Republic",
  TWN: "Taiwan",
  TJK: "Tajikistan",
  TZA: "Tanzania, United Republic of",
  THA: "Thailand",
  TLS: "Timor-Leste",
  TGO: "Togo",
  TKL: "Tokelau",
  TON: "Tonga",
  TTO: "Trinidad and Tobago",
  TUN: "Tunisia",
  TUR: "Turkey",
  TKM: "Turkmenistan",
  TCA: "Turks and Caicos Islands (the)",
  TUV: "Tuvalu",
  UGA: "Uganda",
  UKR: "Ukraine",
  ARE: "United Arab Emirates (the)",
  GBR: "United Kingdom of Great Britain and Northern Ireland (the)",
  UMI: "United States Minor Outlying Islands (the)",
  USA: "United States of America (the)",
  URY: "Uruguay",
  UZB: "Uzbekistan",
  VUT: "Vanuatu",
  VEN: "Venezuela (Bolivarian Republic of)",
  VNM: "Viet Nam",
  VGB: "Virgin Islands (British)",
  VIR: "Virgin Islands (U.S.)",
  WLF: "Wallis and Futuna",
  ESH: "Western Sahara",
  YEM: "Yemen",
  ZMB: "Zambia",
  ZWE: "Zimbabwe",
  ALA: "Åland Islands",
}
