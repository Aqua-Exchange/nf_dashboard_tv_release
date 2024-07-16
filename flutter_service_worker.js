'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8ecb170d492e096afe3b5473f8b9732a",
"version.json": "385d46b73977ff8bbbce4ca862d61aa8",
"index.html": "dd6983c9fdad6628bcccc8c451e3c48c",
"/": "dd6983c9fdad6628bcccc8c451e3c48c",
"main.dart.js": "afce9d3cf05778127925a7144f5038c7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"next_farm_icon.png": "67fee09b98cb215acbbb75d27e509dbd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"aqualogo.png": "c94830f838e209a8c2651103980f2182",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4b144424485906a2a670352a9e35661",
"assets/images/subscription.png": "4a9c5e13bfee20e52a3cd12d80217ba2",
"assets/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/images/document.png": "3445ea5902f5189dc2a074d1f2fb0f36",
"assets/images/Aqua_Exchange_Logo_50pxl.png": "5acf151b14e81ffe248ca3655fe2b963",
"assets/images/Powermon.svg": "b36ce91303be8c028ca744e0bf07d5e5",
"assets/images/arrowLeftGry.png": "c15851232cc7e70dc5e4ad1b66089d70",
"assets/images/starter_marker.png": "f40f7744af2aa8b31aa5d02a74bfefdd",
"assets/images/paper.png": "a6782ba5b1b0b7c3323fd642f95d08f5",
"assets/images/save-money.png": "de058c07ffba6b492b32aae27878b908",
"assets/images/mapIcon.png": "96ef917cd2d0e86c905a1f1d6d8f5b28",
"assets/images/expandIco.png": "e21d113fa0e36abe68995c26be4498de",
"assets/images/aeroplane.png": "96b3212d7b4e9655226fbea7ed093e0e",
"assets/images/Powermon_White.png": "d7d27c56a266731f266706e4b6601d3a",
"assets/images/aqualogo.jpeg": "df5eab49597e09236c13ecf59412ebb2",
"assets/images/package-delivered.png": "04a2cb68f93d90f435e53e8b0d3c28b7",
"assets/images/mob_live_mapicon.png": "64554946bd444dfa8090203e6e385f4d",
"assets/images/Farm.png": "81c281284e7611496f3eb9e3e42f1c9b",
"assets/images/bargraph.png": "31c5eecf072ae70d42a67740d82d6202",
"assets/images/harvested_marker.png": "3292a17b4bdab77477c642207bb615ba",
"assets/images/icon_checktray.png": "c25f99760a657db16490758b465a80f3",
"assets/images/prayaan_logo.png": "910ef03d57bf175798ecec907460d8fd",
"assets/images/approved.png": "95dbad8321726964c71a3c986953ac4c",
"assets/images/play_store_512.png": "d1dc7479d37bd5259660ffba163fb2f1",
"assets/images/sbi.png": "48f64806a4da42070c4d4cca025e9bc9",
"assets/images/pf_report.png": "3cd3fcd4a8c707d92cc7e58ff40cc22d",
"assets/images/liveAmp.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/images/apfcEnableIcon.png": "556787d8a85ce68f670f26b1d9399c26",
"assets/images/caspian_logo.jpg": "22b03957fcfc59d7486739b5318a29c9",
"assets/images/dropmarker.png": "b2d6071bbbeb5c3575e9a293393a7a14",
"assets/images/icon_healthcare.png": "7e6b4c2013c91e4d65127cfeab5c365f",
"assets/images/Farm.svg": "0a515a1cadcc43153bbfcd8df8370b4e",
"assets/images/Areator.png": "176f83dd131492b2c15f0876faae1bf2",
"assets/images/icon_phone.png": "90acdfcdd82542382054151d365b349c",
"assets/images/icon_seed.png": "2e770a87b100b60a99ba67bde51fe14e",
"assets/images/shrimp.png": "a730b2f0f61eaa9a4b043861fd7f67b3",
"assets/images/live_mapicon.png": "4c5acc55c36d081b9715a4d7087ab459",
"assets/images/switch.zip": "c5ed7300b84fa74291552b29f9b38251",
"assets/images/AxisBank.jpg": "fde10cd1586c27fb47c2e3ded8a48856",
"assets/images/mob_shrimp_icon.png": "711f843e3395eb201dd97443158c898c",
"assets/images/Acers%2520Being%2520Monitored.svg": "6d042525f671207f319e506bf512f5e8",
"assets/images/app_icon-trns.png": "4b4dc94222fbdb5cfdbee3aaff282f54",
"assets/images/starter_icon.svg": "cdfae9663bdd60b09df2812b3dc3cb1f",
"assets/images/Aqua_Exchange_Logo_70pxl.png": "d94e99da02a908fb11b54c47ba67a2bc",
"assets/images/aquabot_marker.png": "27f0d3d7441a90692a6b14522c1c3536",
"assets/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/images/checkout.png": "eeabfea859de0bf1813e6dd3d1153b3d",
"assets/images/icon_other.png": "ea9a1212de4bafea62c762dad283437f",
"assets/images/offline_mapicon.png": "684b101e8a6c4c68351dc9d2416716e1",
"assets/images/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/images/Areators%2520Live.svg": "444dd10fb88981b4b2beecbdc4525aa4",
"assets/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/images/shrimp_icon.png": "056e24ae88a2f7fbdf05877b5128cd66",
"assets/images/Acers_Being_Monitored.png": "bd30656c94c154262d7c434bc1917880",
"assets/images/AMP%2520live.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/images/icon_rupee.png": "1a9c0c0928a76f9bb624536f48d2c5f1",
"assets/images/aquabot_green.png": "38aca68772a14f7fa49a494c5e8c671c",
"assets/images/reportsLogo.jpeg": "b99f61583880151c541119df02a4d351",
"assets/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/images/Acers%2520Stocked.png": "ff32763cbd9ee7a923ea274aac9e2aa8",
"assets/images/harvested_mapicon.png": "c51a38e24d6b98c7b69e10b0ea9c1613",
"assets/images/ic_launcher.png": "67fee09b98cb215acbbb75d27e509dbd",
"assets/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/images/Harvest_Icon.svg": "78fdf3d6ec2f337767bd59970aaa702e",
"assets/images/AxisBank1.png": "f43cb3f977e70aa67001792ef2df1b93",
"assets/images/icon_home.png": "e6a37a2fbb7efd35bfb693a563c9ad64",
"assets/images/pickupmarker.png": "7cc8318a18ea7a7d2741078003c93a71",
"assets/images/rupee_approval.png": "7fd5421374295194c786cececcab148e",
"assets/images/appIcon.png": "d27084f438a7e34635eb8113531024f7",
"assets/images/Nextaqua.png": "2b701005cfe5bee4d8fa788d8df81e16",
"assets/images/arrowRightGrey.png": "edfe3bb509fe6cd91756a0fbb34d240d",
"assets/images/rejected.png": "cb4d6142bf76cee40f51f8c4d8d32e58",
"assets/images/odooIcon.png": "5058c2be99c5be7dc29ef7cbf652c8c9",
"assets/images/live_marker.png": "c80b71143773eeb173fd96f24f67f26f",
"assets/images/openOrder.png": "8c3fe4029b5b4320e49892d90578d3b8",
"assets/images/apfcOffline.png": "010baa0e0ffc787a8e01f06db8a1ccf3",
"assets/images/nextfarmicon.png": "083ded793019569642b1e33a0d292a02",
"assets/images/farmer.png": "96a510ca8cdc92db51201c2d1ae91563",
"assets/images/mob_shrimp.png": "60f5a0a5efbc706b91f0fab9b725b872",
"assets/images/offline_marker.png": "1a6419fa8f49346b7e890ba5ea822575",
"assets/images/purchase_approval.png": "f8c13a6bb11b23070794832fbb169bc9",
"assets/images/Acers%2520Stocked.svg": "60b830ea295aa787000b29b0d168c202",
"assets/images/device_manage.png": "18175929f7adbba13a96aca8a719ec8e",
"assets/images/feeding_icon.png": "550e592ed52518286275408726fd0131",
"assets/images/box.png": "1110ccc86fbf7df8b6312c0cfc774962",
"assets/images/Aquabot_White.png": "bec89f590765a09ba2e5a190c311852b",
"assets/images/icon_email.png": "67b76e50f40f13e4d9b65435eed3803d",
"assets/images/AquaBot.svg": "c107b286387236bb662c932a3c1265ee",
"assets/images/farm_marker.png": "80d1f0fa10c11952828e3202fffdef3e",
"assets/images/Amp%2520Live.svg": "7575840b7b399db50e9b746284e19739",
"assets/images/inTransit.png": "2656efdfd7475904c57c0937a8fa993a",
"assets/images/grey_home.png": "f4cee913d3a7d912cd7caa41a3c4782a",
"assets/AssetManifest.json": "3daae396344340251281640d18bf01a0",
"assets/NOTICES": "31caed9d226c30876a4413de8c4e6a65",
"assets/FontManifest.json": "89d1756a93143a5db8c29d107a5cc4b1",
"assets/AssetManifest.bin.json": "846f7c8c1b23258d47c68823af7a45ff",
"assets/packages/device_management/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/packages/device_management/images/starter_icon.svg": "cdfae9663bdd60b09df2812b3dc3cb1f",
"assets/packages/device_management/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/packages/device_management/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/packages/device_management/images/Areators%2520Live.svg": "444dd10fb88981b4b2beecbdc4525aa4",
"assets/packages/device_management/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/packages/device_management/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/packages/device_management/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/device_management/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/device_management/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/pf_reports/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/pf_reports/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/pf_reports/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/pf_reports/assets/images/resetImage.png": "7d3b4e80011980fae1cefa20799ce79d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/nextfarm_summary_dashboard/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/nextfarm_summary_dashboard/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/nextfarm_summary_dashboard/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/nextfarm_summary_dashboard/assets/images/johndoe.jpg": "b916297b20dd82e8bf3fbc3fa98d8596",
"assets/packages/nextfarm_summary_dashboard/assets/images/document.png": "3445ea5902f5189dc2a074d1f2fb0f36",
"assets/packages/nextfarm_summary_dashboard/assets/images/paper.png": "a6782ba5b1b0b7c3323fd642f95d08f5",
"assets/packages/nextfarm_summary_dashboard/assets/images/package-delivered.png": "04a2cb68f93d90f435e53e8b0d3c28b7",
"assets/packages/nextfarm_summary_dashboard/assets/images/prayaan_logo.png": "910ef03d57bf175798ecec907460d8fd",
"assets/packages/nextfarm_summary_dashboard/assets/images/approved.png": "95dbad8321726964c71a3c986953ac4c",
"assets/packages/nextfarm_summary_dashboard/assets/images/sbi.png": "48f64806a4da42070c4d4cca025e9bc9",
"assets/packages/nextfarm_summary_dashboard/assets/images/caspian_logo.jpg": "22b03957fcfc59d7486739b5318a29c9",
"assets/packages/nextfarm_summary_dashboard/assets/images/icon_healthcare.png": "7e6b4c2013c91e4d65127cfeab5c365f",
"assets/packages/nextfarm_summary_dashboard/assets/images/icon_phone.png": "90acdfcdd82542382054151d365b349c",
"assets/packages/nextfarm_summary_dashboard/assets/images/icon_seed.png": "2e770a87b100b60a99ba67bde51fe14e",
"assets/packages/nextfarm_summary_dashboard/assets/images/AxisBank.jpg": "fde10cd1586c27fb47c2e3ded8a48856",
"assets/packages/nextfarm_summary_dashboard/assets/images/docx.jpg": "9a40a9c7c6be3e499dbfebcb9f99c039",
"assets/packages/nextfarm_summary_dashboard/assets/images/checkout.png": "eeabfea859de0bf1813e6dd3d1153b3d",
"assets/packages/nextfarm_summary_dashboard/assets/images/icon_other.png": "ea9a1212de4bafea62c762dad283437f",
"assets/packages/nextfarm_summary_dashboard/assets/images/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/packages/nextfarm_summary_dashboard/assets/images/icon_rupee.png": "1a9c0c0928a76f9bb624536f48d2c5f1",
"assets/packages/nextfarm_summary_dashboard/assets/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/nextfarm_summary_dashboard/assets/images/ic_launcher.png": "67fee09b98cb215acbbb75d27e509dbd",
"assets/packages/nextfarm_summary_dashboard/assets/images/AxisBank1.png": "f43cb3f977e70aa67001792ef2df1b93",
"assets/packages/nextfarm_summary_dashboard/assets/images/icon_home.png": "e6a37a2fbb7efd35bfb693a563c9ad64",
"assets/packages/nextfarm_summary_dashboard/assets/images/rupee_approval.png": "7fd5421374295194c786cececcab148e",
"assets/packages/nextfarm_summary_dashboard/assets/images/rejected.png": "cb4d6142bf76cee40f51f8c4d8d32e58",
"assets/packages/nextfarm_summary_dashboard/assets/images/odooIcon.png": "5058c2be99c5be7dc29ef7cbf652c8c9",
"assets/packages/nextfarm_summary_dashboard/assets/images/openOrder.png": "8c3fe4029b5b4320e49892d90578d3b8",
"assets/packages/nextfarm_summary_dashboard/assets/images/pdf.jpg": "51c00dc9ba1e92660008d2fe9be06d50",
"assets/packages/nextfarm_summary_dashboard/assets/images/purchase_approval.png": "f8c13a6bb11b23070794832fbb169bc9",
"assets/packages/nextfarm_summary_dashboard/assets/images/feeding_icon.png": "550e592ed52518286275408726fd0131",
"assets/packages/nextfarm_summary_dashboard/assets/images/box.png": "1110ccc86fbf7df8b6312c0cfc774962",
"assets/packages/nextfarm_summary_dashboard/assets/images/icon_email.png": "67b76e50f40f13e4d9b65435eed3803d",
"assets/packages/nextfarm_summary_dashboard/assets/images/xlsx.jpg": "c406e2fd72d737d04730bbdd0ce9d7a1",
"assets/packages/nextfarm_summary_dashboard/assets/images/inTransit.png": "2656efdfd7475904c57c0937a8fa993a",
"assets/packages/nextfarm_summary_dashboard/assets/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/metrics_dashboardtv/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/packages/metrics_dashboardtv/images/save-money.png": "de058c07ffba6b492b32aae27878b908",
"assets/packages/metrics_dashboardtv/images/Farm.png": "81c281284e7611496f3eb9e3e42f1c9b",
"assets/packages/metrics_dashboardtv/images/liveAmp.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/metrics_dashboardtv/images/starter_icon.svg": "cdfae9663bdd60b09df2812b3dc3cb1f",
"assets/packages/metrics_dashboardtv/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/packages/metrics_dashboardtv/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/packages/metrics_dashboardtv/images/Areators%2520Live.svg": "444dd10fb88981b4b2beecbdc4525aa4",
"assets/packages/metrics_dashboardtv/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/packages/metrics_dashboardtv/images/Acers_Being_Monitored.png": "bd30656c94c154262d7c434bc1917880",
"assets/packages/metrics_dashboardtv/images/AMP%2520live.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/metrics_dashboardtv/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/metrics_dashboardtv/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/packages/metrics_dashboardtv/images/farmer.png": "96a510ca8cdc92db51201c2d1ae91563",
"assets/packages/metrics_dashboardtv/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/metrics_dashboardtv/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/metrics_dashboardtv/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/dashboard_project/images/subscription.png": "4a9c5e13bfee20e52a3cd12d80217ba2",
"assets/packages/dashboard_project/images/weight_scale.png": "e3dd540a5e903a1f26cae34c0cc07223",
"assets/packages/dashboard_project/images/Aqua_Exchange_Logo_50pxl.png": "5acf151b14e81ffe248ca3655fe2b963",
"assets/packages/dashboard_project/images/Powermon.svg": "b36ce91303be8c028ca744e0bf07d5e5",
"assets/packages/dashboard_project/images/arrowLeftGry.png": "c15851232cc7e70dc5e4ad1b66089d70",
"assets/packages/dashboard_project/images/starter_marker.png": "f40f7744af2aa8b31aa5d02a74bfefdd",
"assets/packages/dashboard_project/images/save-money.png": "de058c07ffba6b492b32aae27878b908",
"assets/packages/dashboard_project/images/mapIcon.png": "96ef917cd2d0e86c905a1f1d6d8f5b28",
"assets/packages/dashboard_project/images/expandIco.png": "e21d113fa0e36abe68995c26be4498de",
"assets/packages/dashboard_project/images/aeroplane.png": "96b3212d7b4e9655226fbea7ed093e0e",
"assets/packages/dashboard_project/images/aqualogo.jpeg": "df5eab49597e09236c13ecf59412ebb2",
"assets/packages/dashboard_project/images/Farm.png": "81c281284e7611496f3eb9e3e42f1c9b",
"assets/packages/dashboard_project/images/harvested_marker.png": "3292a17b4bdab77477c642207bb615ba",
"assets/packages/dashboard_project/images/icon_checktray.png": "c25f99760a657db16490758b465a80f3",
"assets/packages/dashboard_project/images/prayaan_logo.png": "910ef03d57bf175798ecec907460d8fd",
"assets/packages/dashboard_project/images/play_store_512.png": "d1dc7479d37bd5259660ffba163fb2f1",
"assets/packages/dashboard_project/images/pf_report.png": "3cd3fcd4a8c707d92cc7e58ff40cc22d",
"assets/packages/dashboard_project/images/liveAmp.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/dashboard_project/images/apfcEnableIcon.png": "556787d8a85ce68f670f26b1d9399c26",
"assets/packages/dashboard_project/images/dropmarker.png": "b2d6071bbbeb5c3575e9a293393a7a14",
"assets/packages/dashboard_project/images/Farm.svg": "0a515a1cadcc43153bbfcd8df8370b4e",
"assets/packages/dashboard_project/images/Areator.png": "176f83dd131492b2c15f0876faae1bf2",
"assets/packages/dashboard_project/images/shrimp.png": "a730b2f0f61eaa9a4b043861fd7f67b3",
"assets/packages/dashboard_project/images/live_mapicon.png": "4c5acc55c36d081b9715a4d7087ab459",
"assets/packages/dashboard_project/images/mob_shrimp_icon.png": "711f843e3395eb201dd97443158c898c",
"assets/packages/dashboard_project/images/Acers%2520Being%2520Monitored.svg": "6d042525f671207f319e506bf512f5e8",
"assets/packages/dashboard_project/images/app_icon-trns.png": "4b4dc94222fbdb5cfdbee3aaff282f54",
"assets/packages/dashboard_project/images/starter_icon.svg": "cdfae9663bdd60b09df2812b3dc3cb1f",
"assets/packages/dashboard_project/images/aquabot_marker.png": "27f0d3d7441a90692a6b14522c1c3536",
"assets/packages/dashboard_project/images/Powermon.png": "8e7f0b069c7e7685a98920f754267aaf",
"assets/packages/dashboard_project/images/offline_mapicon.png": "684b101e8a6c4c68351dc9d2416716e1",
"assets/packages/dashboard_project/images/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/packages/dashboard_project/images/starterPNG_icon.png": "949c437f48efc36de2d91c7fb5f2a7d4",
"assets/packages/dashboard_project/images/Areators%2520Live.svg": "444dd10fb88981b4b2beecbdc4525aa4",
"assets/packages/dashboard_project/images/Aquabot.png": "1f1d7669fa05a3e5e21641f1706f9f1f",
"assets/packages/dashboard_project/images/shrimp_icon.png": "056e24ae88a2f7fbdf05877b5128cd66",
"assets/packages/dashboard_project/images/Acers_Being_Monitored.png": "bd30656c94c154262d7c434bc1917880",
"assets/packages/dashboard_project/images/AMP%2520Live.png": "4951dffc8b6e5dc9057ca1380dbb15ba",
"assets/packages/dashboard_project/images/aquabot_green.png": "38aca68772a14f7fa49a494c5e8c671c",
"assets/packages/dashboard_project/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/dashboard_project/images/Acers%2520Stocked.png": "ff32763cbd9ee7a923ea274aac9e2aa8",
"assets/packages/dashboard_project/images/harvested_mapicon.png": "c51a38e24d6b98c7b69e10b0ea9c1613",
"assets/packages/dashboard_project/images/switch.png": "a22fbe85d2890a976a0d307ba05ef6d1",
"assets/packages/dashboard_project/images/Harvest_Icon.svg": "78fdf3d6ec2f337767bd59970aaa702e",
"assets/packages/dashboard_project/images/pickupmarker.png": "7cc8318a18ea7a7d2741078003c93a71",
"assets/packages/dashboard_project/images/arrowRightGrey.png": "edfe3bb509fe6cd91756a0fbb34d240d",
"assets/packages/dashboard_project/images/live_marker.png": "c80b71143773eeb173fd96f24f67f26f",
"assets/packages/dashboard_project/images/apfcOffline.png": "010baa0e0ffc787a8e01f06db8a1ccf3",
"assets/packages/dashboard_project/images/nextfarmicon.png": "083ded793019569642b1e33a0d292a02",
"assets/packages/dashboard_project/images/farmer.png": "96a510ca8cdc92db51201c2d1ae91563",
"assets/packages/dashboard_project/images/mob_shrimp.png": "60f5a0a5efbc706b91f0fab9b725b872",
"assets/packages/dashboard_project/images/offline_marker.png": "1a6419fa8f49346b7e890ba5ea822575",
"assets/packages/dashboard_project/images/Acers%2520Stocked.svg": "60b830ea295aa787000b29b0d168c202",
"assets/packages/dashboard_project/images/device_manage.png": "18175929f7adbba13a96aca8a719ec8e",
"assets/packages/dashboard_project/images/feeding_icon.png": "550e592ed52518286275408726fd0131",
"assets/packages/dashboard_project/images/AquaBot.svg": "c107b286387236bb662c932a3c1265ee",
"assets/packages/dashboard_project/images/farm_marker.png": "80d1f0fa10c11952828e3202fffdef3e",
"assets/packages/dashboard_project/images/Amp%2520Live.svg": "7575840b7b399db50e9b746284e19739",
"assets/packages/dashboard_project/images/grey_home.png": "f4cee913d3a7d912cd7caa41a3c4782a",
"assets/packages/dashboard_project/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/dashboard_project/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/dashboard_project/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/packages/dashboard_project/assets/images/document.png": "3445ea5902f5189dc2a074d1f2fb0f36",
"assets/packages/dashboard_project/assets/images/paper.png": "a6782ba5b1b0b7c3323fd642f95d08f5",
"assets/packages/dashboard_project/assets/images/package-delivered.png": "04a2cb68f93d90f435e53e8b0d3c28b7",
"assets/packages/dashboard_project/assets/images/prayaan_logo.png": "910ef03d57bf175798ecec907460d8fd",
"assets/packages/dashboard_project/assets/images/approved.png": "95dbad8321726964c71a3c986953ac4c",
"assets/packages/dashboard_project/assets/images/sbi.png": "48f64806a4da42070c4d4cca025e9bc9",
"assets/packages/dashboard_project/assets/images/caspian_logo.jpg": "22b03957fcfc59d7486739b5318a29c9",
"assets/packages/dashboard_project/assets/images/icon_healthcare.png": "7e6b4c2013c91e4d65127cfeab5c365f",
"assets/packages/dashboard_project/assets/images/icon_phone.png": "90acdfcdd82542382054151d365b349c",
"assets/packages/dashboard_project/assets/images/icon_seed.png": "2e770a87b100b60a99ba67bde51fe14e",
"assets/packages/dashboard_project/assets/images/AxisBank.jpg": "fde10cd1586c27fb47c2e3ded8a48856",
"assets/packages/dashboard_project/assets/images/checkout.png": "eeabfea859de0bf1813e6dd3d1153b3d",
"assets/packages/dashboard_project/assets/images/icon_other.png": "ea9a1212de4bafea62c762dad283437f",
"assets/packages/dashboard_project/assets/images/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/packages/dashboard_project/assets/images/icon_rupee.png": "1a9c0c0928a76f9bb624536f48d2c5f1",
"assets/packages/dashboard_project/assets/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/dashboard_project/assets/images/ic_launcher.png": "67fee09b98cb215acbbb75d27e509dbd",
"assets/packages/dashboard_project/assets/images/AxisBank1.png": "f43cb3f977e70aa67001792ef2df1b93",
"assets/packages/dashboard_project/assets/images/icon_home.png": "e6a37a2fbb7efd35bfb693a563c9ad64",
"assets/packages/dashboard_project/assets/images/rupee_approval.png": "7fd5421374295194c786cececcab148e",
"assets/packages/dashboard_project/assets/images/rejected.png": "cb4d6142bf76cee40f51f8c4d8d32e58",
"assets/packages/dashboard_project/assets/images/odooIcon.png": "5058c2be99c5be7dc29ef7cbf652c8c9",
"assets/packages/dashboard_project/assets/images/openOrder.png": "8c3fe4029b5b4320e49892d90578d3b8",
"assets/packages/dashboard_project/assets/images/purchase_approval.png": "f8c13a6bb11b23070794832fbb169bc9",
"assets/packages/dashboard_project/assets/images/feeding_icon.png": "550e592ed52518286275408726fd0131",
"assets/packages/dashboard_project/assets/images/box.png": "1110ccc86fbf7df8b6312c0cfc774962",
"assets/packages/dashboard_project/assets/images/icon_email.png": "67b76e50f40f13e4d9b65435eed3803d",
"assets/packages/dashboard_project/assets/images/inTransit.png": "2656efdfd7475904c57c0937a8fa993a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/device_dashboard/images/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/packages/device_dashboard/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/packages/device_dashboard/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/packages/device_dashboard/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fc19de3c6d36f8ab4b1fc4313bd4b595",
"assets/fonts/MaterialIcons-Regular.otf": "47134f2eec6d51436a6271b3602d19d1",
"assets/assets/warning.png": "44ca0b20f14abb9892bdfadd09c5ba2f",
"assets/assets/icon_pdf.png": "8ff1f4267a0048985a2a0c66c00a7964",
"assets/assets/powermon_yellow_base_outlined.png": "c7b0179e6f5215b398c749b78f605568",
"assets/assets/starter_red.png": "2da775ed2cb7a12eeaf38eef8f88e4c1",
"assets/assets/starter_black_small.png": "0c7953417bd0134ec495f31b71bf154b",
"assets/assets/Motor.svg": "6e7da880508a2173787cfba6e0297d2e",
"assets/assets/farm_data.json": "61522fb22a57f9e247919cd9a1a369de",
"assets/assets/bolt.png": "3fed467a113a7ce615bdb4e420ada199",
"assets/assets/starter_subtle_orange_small.png": "8d42b9a5ccf331526b1a2fd31ab99c5c",
"assets/assets/starter_green.png": "c5d4776e38ffb57194f4b3c81c42055c",
"assets/assets/starter_grey_small.png": "a45c5de2a2f06c3a8070afd6f0ff8a60",
"assets/assets/powermon_green_small.png": "fd8a53a66936c030a56e8ec2f47d2a5d",
"assets/assets/powermon_yellow_outlined.png": "ccc650af27044cef43379ff4dab7c659",
"assets/assets/powermon_orange.png": "31dcf37ebf8d806e54e758f7e64972b4",
"assets/assets/aquabot_fill_small.png": "cfa36a7d09a564f731b3c1b503f3ecf0",
"assets/assets/powermon_blue.png": "bf4c7ecb72b89e33c3ab67b81bcbcfdc",
"assets/assets/10_25_acre.png": "6ff6a01d13e57fca2cb91a2c776727ab",
"assets/assets/auto_feeder_green_small.png": "a25a4600338fd0db54e7e0cfa02c4c0b",
"assets/assets/aerator_on_small.png": "5534431d884ce880f05cba722807a08a",
"assets/assets/icon_phone.png": "90acdfcdd82542382054151d365b349c",
"assets/assets/auto_feeder_yellow_small.png": "e0a2fd15fb7fd9e2a98c1d8dee7cb82a",
"assets/assets/powermon_crimson.png": "5277f1818e7f10e5aa1e926252123083",
"assets/assets/mob_shrimp_icon.png": "711f843e3395eb201dd97443158c898c",
"assets/assets/powermon_black_small.png": "f9423d817884976d78371a1b0c96d901",
"assets/assets/bolt.svg": "aaf37d4d8dab5516b9748cba30266967",
"assets/assets/icon_placeholder.png": "dbfc0251e935d9aa5f9a6febd438bc06",
"assets/assets/Motor.png": "6d7a669c7f2ac8187694d4cc313ecbda",
"assets/assets/powermon_subtle_orange.png": "401d7faabf6c65fbd20f9bbf1c901636",
"assets/assets/powermon_green.png": "673e228f2fa72b0b36c1bc4a77c02bca",
"assets/assets/powermon_wine.png": "e06c095b0679d0ec503b98abf116212d",
"assets/assets/aquabot_marker.png": "bec89f590765a09ba2e5a190c311852b",
"assets/assets/icon_excel.png": "1cda459ce43caac3211f666cf5c2948e",
"assets/assets/starter_green_small.png": "0e3f51053dd4dd660a4f9d4d2c3eddc2",
"assets/assets/warning.svg": "dad5f807d3d19256638f7f3551f3ee7a",
"assets/assets/auto_feeder_orange.png": "3b64e2967983517ffeba279c38c288df",
"assets/assets/powermon_red_small.png": "96e8048fa9ce3926e9da3d50fd0d977c",
"assets/assets/10_acer.png": "5197b2605576dafa0f3984eda6423adc",
"assets/assets/powermon_orange_small.png": "0daa99083172ba04d9228ee55c6fa467",
"assets/assets/starter_orange_small.png": "12764ae69f3fba62ae2b3da401c1e8d4",
"assets/assets/powermon_grey_small.png": "ac5dc1850ad0534d9561d91018e43769",
"assets/assets/powermon_subtle_orange_small.png": "7da95b7e375af42b953fc6ba5963a96d",
"assets/assets/starter_orange.png": "570fd3c1d4d360a60c78091ed8d960e9",
"assets/assets/starter_red_small.png": "d4a44eaebb987c4735700d7713ede816",
"assets/assets/farm_map_dummy.png": "148215a1de50a38eaecabbe706875843",
"assets/assets/starter_subtle_orange.png": "c4167742738ef88a16460428a148232a",
"assets/assets/50_100_acer.png": "7e238ef8803567cbce04e4197ef62880",
"assets/assets/backgroud.jpg": "ba8a10919b57f3d620d75e1f392e7ed7",
"assets/assets/starter_fill.png": "381dc980b1d3c1bd4117739d6b327aee",
"assets/assets/sankey.html": "08bd47a585a7a618d823f702d2002304",
"assets/assets/auto_feeder_grey.png": "84e728aac0851e7d3ac0a3f439763516",
"assets/assets/yellow_home.png": "7ac8512fd89057ab405d841b8d59ab94",
"assets/assets/aerator_dots_dark_grey_small.png": "20e8ff2cc5e51b9911d4c45082974cfa",
"assets/assets/farmMarker.png": "3ac24c5e1b282268469502a7c02d37f0",
"assets/assets/powermon_black.png": "d7c7a7ea4b87afd16551c35e385dc33e",
"assets/assets/aqualogo.png": "c94830f838e209a8c2651103980f2182",
"assets/assets/powermon_red.png": "679adb962d96abf4f90d47abc578d944",
"assets/assets/powermon_grey.png": "b9a185e5bd92f02bd99fb3f7f8c2f16c",
"assets/assets/32.png": "345686a5caaa0f49a13ea56a61d71463",
"assets/assets/aerator_on.png": "ead1daff0b442747a0ad9cfa489b1c71",
"assets/assets/icon_home.png": "e6a37a2fbb7efd35bfb693a563c9ad64",
"assets/assets/starter_grey.png": "81abe0349778fa6d91f38cd0fa4d2db2",
"assets/assets/go_to.png": "5c8edd682047a21476a52fa167d5cee6",
"assets/assets/auto_feeder_yellow.png": "157cdd3a5db2f894c101184cc6b8f218",
"assets/assets/auto_feeder_grey_small.png": "005457e9cb4335136463a3fc1111bd3a",
"assets/assets/call.png": "90d6c4d92af0ad1e4eb9b3c488a60cb0",
"assets/assets/starter_yellow.png": "34d3592d3c0e7e50a18b8b1d0c027ef7",
"assets/assets/25_50_acer.png": "50c2ed4760dcfac5fd7b77477dd87887",
"assets/assets/Aqua%2520Exchange%2520Logo%2520.png": "02520b9e8bbbcbc6b0b5f2f8de16d471",
"assets/assets/starter_yellow_small.png": "7b891dd9ed8328ab8532736056068ee9",
"assets/assets/powermon_yellow_small.png": "471f0fae90b035dbaefa32429a0cbaea",
"assets/assets/farmer.jpg": "e037cc2e0764ee83c9304a0c3c4f91ab",
"assets/assets/auto_feeder_red_small.png": "1eea0ed996e727b495e45c9ea8d3dbe8",
"assets/assets/call.svg": "aeffa6bad94a77cad8002a265c61ffec",
"assets/assets/auto_feeder_red.png": "27670dee2547b8ef7e3bf37018d51a30",
"assets/assets/mob_shrimp.png": "60f5a0a5efbc706b91f0fab9b725b872",
"assets/assets/aerator_dots_black.png": "3a3a810677b7c8798d16a0f011ebf6d1",
"assets/assets/starter_black.png": "b3abb7f495aff4b5b894e92d46600527",
"assets/assets/aerator_grey_dots.png": "f17df93aa71cc3f849c5724c3b4d7277",
"assets/assets/india_tile.png": "c8936cc82df8f3071317a0bbca63c137",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/BrandonText-Bold.ttf": "b8ad4ac31696de39e55785b8334aaf64",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/BrandonText-Medium.otf": "d5e252ed23dde9520a0cb00bfbf01a6e",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/BrandonText-Regular.otf": "cc4e72bde1aa38ceeb75e0c140ffa99c",
"assets/assets/aquabot_fill.png": "26cb2e8d8a200090a65b5fa4931397e8",
"assets/assets/aerator_dots_dark_green.png": "037a8881d5d4c43d9f731a082ad4241a",
"assets/assets/auto_feeder_orange_small.png": "8abe8e45d1a01afa30efdc99399a8a66",
"assets/assets/auto_feeder_green.png": "3998a4c96cef27e743094acfd108c404",
"assets/assets/aerator_dots_dark_grey.png": "67d8d5666974cd81c0ac32df6518f5d1",
"assets/assets/icon_email.png": "67b76e50f40f13e4d9b65435eed3803d",
"assets/assets/netting_report.json": "3ee861ab0c75ff3b94f4d480b6669599",
"assets/assets/icon_doc.png": "4119a73a67e1277cde6d8b541658d75f",
"assets/assets/powermon_yellow.png": "d4ba216a8baebe3a8bea7970fde6cce8",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
