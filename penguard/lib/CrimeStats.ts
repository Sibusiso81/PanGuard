export type CrimeCategory = {
  [key: string]: number;
};

export type CrimeStat = {
  station: string;
  province: string;
  district: string;
  contact_crimes: CrimeCategory;
  property_crimes: CrimeCategory;
  other_crimes: CrimeCategory;
  police_detected: CrimeCategory;
  safety_index: number;
};

export const crimeStats: CrimeStat[]= [
  {
    station: "Hillbrow",

    province: "Gauteng",

    district: "Johannesburg",

    contact_crimes: {
      murder: 32,

      attempted_murder: 45,

      sexual_offences: 134,

      assault_gbh: 402,

      common_assault: 620,

      common_robbery: 151,

      robbery_aggravated: 289,

      carjacking: 73,
    },

    property_crimes: {
      burglary_residential: 89,

      burglary_business: 77,

      theft_vehicle: 54,

      theft_out_of_vehicle: 101,

      stock_theft: 12,
    },

    other_crimes: {
      commercial_crime: 270,

      shoplifting: 180,
    },

    police_detected: {
      illegal_firearms: 19,

      drug_related: 303,

      dui: 84,
    },

    safety_index: 2,
  },
    {
    station: "Auckland Park",

    province: "Gauteng",

    district: "Johannesburg",

    contact_crimes: {
      murder: 32,

      attempted_murder: 45,

      sexual_offences: 134,

      assault_gbh: 402,

      common_assault: 620,

      common_robbery: 151,

      robbery_aggravated: 289,

      carjacking: 73,
    },

    property_crimes: {
      burglary_residential: 89,

      burglary_business: 77,

      theft_vehicle: 54,

      theft_out_of_vehicle: 101,

      stock_theft: 12,
    },

    other_crimes: {
      commercial_crime: 270,

      shoplifting: 180,
    },

    police_detected: {
      illegal_firearms: 19,

      drug_related: 303,

      dui: 84,
    },

    safety_index: 2,
  },
];
