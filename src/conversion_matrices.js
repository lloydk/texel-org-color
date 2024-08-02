/** This file is auto-generated by tools/print_matrices.py */

// OKLab to LMS matrices

export const OKLab_to_LMS_M = [
  [1.0, 0.3963377773761749, 0.2158037573099136],
  [1.0, -0.1055613458156586, -0.0638541728258133],
  [1.0, -0.0894841775298119, -1.2914855480194092],
];

export const LMS_to_OKLab_M = [
  [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
  [1.9779985324311684, -2.42859224204858, 0.450593709617411],
  [0.0259040424655478, 0.7827717124575296, -0.8086757549230774],
];

export const XYZ_to_LMS_M = [
  [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
  [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
  [0.0481771893596242, 0.2642395317527308, 0.6335478284694309],
];

export const LMS_to_XYZ_M = [
  [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
  [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
  [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816],
];

// linear_sRGB space

// linear_sRGB to XYZ (D65) matrices

export const linear_sRGB_to_XYZ_M = [
  [0.4123907992659595, 0.35758433938387796, 0.1804807884018343],
  [0.21263900587151036, 0.7151686787677559, 0.07219231536073371],
  [0.01933081871559185, 0.11919477979462599, 0.9505321522496606],
];

export const XYZ_to_linear_sRGB_M = [
  [3.2409699419045213, -1.5373831775700935, -0.4986107602930033],
  [-0.9692436362808798, 1.8759675015077206, 0.04155505740717561],
  [0.05563007969699361, -0.20397695888897657, 1.0569715142428786],
];

// linear_sRGB to LMS matrices

export const linear_sRGB_to_LMS_M = [
  [0.4122214694707629, 0.5363325372617349, 0.051445993267502196],
  [0.2119034958178251, 0.6806995506452345, 0.10739695353694051],
  [0.08830245919005637, 0.2817188391361215, 0.6299787016738223],
];

export const LMS_to_linear_sRGB_M = [
  [4.076741636075959, -3.307711539258062, 0.2309699031821041],
  [-1.2684379732850313, 2.6097573492876878, -0.3413193760026569],
  [-0.004196076138675526, -0.703418617935936, 1.7076146940746113],
];

// linear_sRGB coefficients for OKLab gamut approximation

export const OKLab_to_linear_sRGB_coefficients = [
  [
    [-1.8817030993265873, -0.8093650129914302],
    [1.19086277, 1.76576728, 0.59662641, 0.75515197, 0.56771245],
  ],
  [
    [1.8144407988010998, -1.194452667805235],
    [0.73956515, -0.45954404, 0.08285427, 0.12541073, -0.14503204],
  ],
  [
    [0.13110757611180954, 1.813339709266608],
    [1.35733652, -0.00915799, -1.1513021, -0.50559606, 0.00692167],
  ],
];

// linear_DisplayP3 space

// linear_DisplayP3 to XYZ (D65) matrices

export const linear_DisplayP3_to_XYZ_M = [
  [0.48657094864821626, 0.26566769316909294, 0.1982172852343625],
  [0.22897456406974884, 0.6917385218365062, 0.079286914093745],
  [0.0, 0.045113381858902575, 1.0439443689009757],
];

export const XYZ_to_linear_DisplayP3_M = [
  [2.4934969119414245, -0.9313836179191236, -0.40271078445071684],
  [-0.829488969561575, 1.7626640603183468, 0.02362468584194359],
  [0.035845830243784335, -0.07617238926804171, 0.9568845240076873],
];

// linear_DisplayP3 to LMS matrices

export const linear_DisplayP3_to_LMS_M = [
  [0.48137985274995443, 0.4621183710113181, 0.05650177623872757],
  [0.22883194181124475, 0.6532168193835676, 0.11795123880518778],
  [0.08394575232299319, 0.22416527097756642, 0.6918889766994405],
];

export const LMS_to_linear_DisplayP3_M = [
  [3.1277689713618737, -2.2571357625916395, 0.1293667912297651],
  [-1.091009018437798, 2.413331710306923, -0.3223226918691248],
  [-0.02601080193857041, -0.5080413317041669, 1.5340521336427373],
];

// linear_DisplayP3 coefficients for OKLab gamut approximation

export const OKLab_to_linear_DisplayP3_coefficients = [
  [
    [-1.772343927512981, -0.8207587433674072],
    [
      1.1941401817282744, 1.7629811997119493, 0.5958599382477117,
      0.7575999740542505, 0.5681684967813678,
    ],
  ],
  [
    [1.8031987175305495, -1.1932813966558915],
    [
      0.7395668192259771, -0.45954279991477065, 0.08285308768965816,
      0.1254116495192955, -0.14503290744357106,
    ],
  ],
  [
    [0.08970487824467532, 1.9032774657416107],
    [
      1.3650944117698118, -0.013962295571040945, -1.1452305089885595,
      -0.5025987876721942, 0.003174713114731378,
    ],
  ],
];

// linear_Rec2020 space

// linear_Rec2020 to XYZ (D65) matrices

export const linear_Rec2020_to_XYZ_M = [
  [0.6369580483012913, 0.14461690358620838, 0.16888097516417205],
  [0.26270021201126703, 0.677998071518871, 0.059301716469861945],
  [0.0, 0.028072693049087508, 1.0609850577107909],
];

export const XYZ_to_linear_Rec2020_M = [
  [1.7166511879712676, -0.3556707837763924, -0.2533662813736598],
  [-0.666684351832489, 1.616481236634939, 0.01576854581391113],
  [0.017639857445310915, -0.042770613257808655, 0.942103121235474],
];

// linear_Rec2020 to LMS matrices

export const linear_Rec2020_to_LMS_M = [
  [0.6167557848654444, 0.3601984012264634, 0.023045813908092266],
  [0.26513305939263676, 0.6358393720678492, 0.09902756853951414],
  [0.10010262952034828, 0.20390652261661452, 0.6959908478630372],
];

export const LMS_to_linear_Rec2020_M = [
  [2.1399067304346513, -1.246389493760618, 0.10648276332596689],
  [-0.8847358357577675, 2.1632309383612007, -0.27849510260343363],
  [-0.04857374640044396, -0.45450314971409633, 1.5030768961145404],
];

// linear_Rec2020 coefficients for OKLab gamut approximation

export const OKLab_to_linear_Rec2020_coefficients = [
  [
    [-1.3683489920695084, -0.4666477292401165],
    [
      1.2572444967331895, 1.715801757890085, 0.5648732965817461,
      0.7950731608663721, 0.5871636339819248,
    ],
  ],
  [
    [2.0115079619342833, -2.0379095965347],
    [
      0.7408775472462948, -0.4586732968366297, 0.081829765825816,
      0.12598704592707602, -0.14570327455009213,
    ],
  ],
  [
    [0.06454093208719812, 2.2970933629671704],
    [
      1.3692048443658147, -0.016466673486950332, -1.141978697647362,
      -0.5010647675396565, 0.001199059854416378,
    ],
  ],
];

// linear_A98RGB space

// linear_A98RGB to XYZ (D65) matrices

export const linear_A98RGB_to_XYZ_M = [
  [0.5766690429101308, 0.18555823790654627, 0.18822864623499472],
  [0.29734497525053616, 0.627363566255466, 0.07529145849399789],
  [0.027031361386412378, 0.07068885253582714, 0.9913375368376389],
];

export const XYZ_to_linear_A98RGB_M = [
  [2.041587903810746, -0.5650069742788596, -0.3447313507783295],
  [-0.9692436362808798, 1.8759675015077206, 0.04155505740717561],
  [0.013444280632031024, -0.11836239223101824, 1.0151749943912054],
];

// linear_A98RGB to LMS matrices

export const linear_A98RGB_to_LMS_M = [
  [0.5764322596183941, 0.36991322261987963, 0.053654517761726306],
  [0.29631647054222465, 0.5916761332521886, 0.11200739620558692],
  [0.12347825101427762, 0.21949869837199862, 0.6570230506137239],
];

export const LMS_to_linear_A98RGB_M = [
  [2.554036838611556, -1.6219761806828696, 0.06793934207131354],
  [-1.2684379732850315, 2.6097573492876887, -0.3413193760026572],
  [-0.0562347359374939, -0.5670418395669057, 1.6232765755043994],
];

// linear_A98RGB coefficients for OKLab gamut approximation

export const OKLab_to_linear_A98RGB_coefficients = [
  [
    [-1.591695414425798, -0.8395798483264373],
    [
      1.215470987494823, 1.7445423850069868, 0.5911924333317312,
      0.774055974979685, 0.5710471573194968,
    ],
  ],
  [
    [1.8144407988011015, -1.1944526678052378],
    [0.73956515, -0.45954404, 0.08285427, 0.12541073, -0.14503204],
  ],
  [
    [-0.014529428934082126, 2.073564997814519],
    [1.35733652, -0.00915799, -1.1513021, -0.50559606, 0.00692167],
  ],
];

// linear_ProPhotoRGB space

// linear_ProPhotoRGB to XYZ (D50) matrices

export const linear_ProPhotoRGB_to_XYZ_M = [
  [0.7977666449006423, 0.13518129740053308, 0.0313477341283922],
  [0.2880748288194013, 0.711835234241873, 8.993693872564e-5],
  [0.0, 0.0, 0.8251046025104602],
];

export const XYZ_to_linear_ProPhotoRGB_M = [
  [1.3457868816471583, -0.25557208737979464, -0.05110186497554526],
  [-0.5446307051249019, 1.5082477428451468, 0.02052744743642139],
  [0.0, 0.0, 1.2119675456389452],
];

// linear_ProPhotoRGB to LMS matrices

export const linear_ProPhotoRGB_to_LMS_M = [
  [0.7247750802792337, 0.3523542757724655, -0.07712935605169913],
  [0.2967127550253245, 0.6720629323218004, 0.031224312652875095],
  [0.13744833201856482, 0.23349936027726578, 0.6290523077041692],
];

export const LMS_to_linear_ProPhotoRGB_M = [
  [1.7409200224411467, -1.004224451144535, 0.26330442870338805],
  [-0.7641128642092264, 1.9548345194982568, -0.19072165528903018],
  [-0.09675934345097237, -0.5061957965480232, 1.602955139998996],
];

// linear_ProPhotoRGB does not yet support OKLab gamut approximation
