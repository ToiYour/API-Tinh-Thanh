﻿# API-Tinh-Thanh
## API miễn phí lấy thông tin các (Tỉnh/Thành/Quận/Huyện/Phường/Xã).
 > Dữ liệu được lấy tại [Đơn vị hành chính](https://danhmuchanhchinh.gso.gov.vn/)

[DEMO HTML Javascript](https://codesandbox.io/p/sandbox/api-tinh-thanh-dp68yq?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvnli2f90006356ilxae926p%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvnli2f90002356i7bs49fti%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvnli2f90003356i2jbqclkf%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvnli2f90005356idltvf2bo%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvnli2f90002356i7bs49fti%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvnli2f80001356izzyjmaij%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clvnli2f90002356i7bs49fti%2522%252C%2522activeTabId%2522%253A%2522clvnli2f80001356izzyjmaij%2522%257D%252C%2522clvnli2f90005356idltvf2bo%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvnli2f90004356igaymiujm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clvnli2f90005356idltvf2bo%2522%252C%2522activeTabId%2522%253A%2522clvnli2f90004356igaymiujm%2522%257D%252C%2522clvnli2f90003356i2jbqclkf%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clvnli2f90003356i2jbqclkf%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) 

#### Bộ chọn select tỉnh thành, quận huyện, phường xã

![image](https://github.com/ToiYour/API-Tinh-Thanh/assets/126665921/e021afc2-ed14-4571-a8e8-6bf91a5ef31f)

[API 1](https://api-tinh-thanh-git-main-toiyours-projects.vercel.app/) 

[API 2](https://toinh-api-tinh-thanh.onrender.com/)


1.Cho phép người dùng lấy danh sách các tỉnh thành ở Việt Nam ( Có thể sử dụng 1 trong 2 api )
- https://toinh-api-tinh-thanh.onrender.com/province
- https://api-tinh-thanh-git-main-toiyours-projects.vercel.app

2.Cho phép người dùng lấy danh sách các quận ở Việt Nam theo sau là {idProvince} 
- https://toinh-api-tinh-thanh.onrender.com/district?idProvince={idProvince}
- https://api-tinh-thanh-git-main-toiyours-projects.vercel.app/district?idProvince={idProvince}

3.Cho phép người dùng lấy danh sách các phường ở Việt Nam theo sau là {idDistrict}
- https://toinh-api-tinh-thanh.onrender.com/commune?idDistrict={idDistrict}
- https://api-tinh-thanh-git-main-toiyours-projects.vercel.app/commune?idDistrict={idDistrict}
