# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.js >> TC_04 AutoSuggestion dropdown
- Location: tests\Dropdown.spec.js:48:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div[role=\'row\']').nth(7)
    - locator resolved to <div role="row" aria-rowindex="8" id="sac-suggestion-row-8" aria-owns="sac-suggestion-row-8-cell-1">…</div>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - navigation "Shortcuts menu" [ref=f1e3]:
    - heading "Skip to" [level=2] [ref=f1e4]
    - list "Skip to" [ref=f1e5]:
      - listitem [ref=f1e6]:
        - link "main content" [ref=f1e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
    - separator [ref=f1e8]
    - heading "Keyboard shortcuts" [level=2] [ref=f1e9]
    - list "Keyboard shortcuts" [ref=f1e10]:
      - listitem [ref=f1e11]:
        - link "Search, alt, forward slash" [ref=f1e12] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=f1e13]:
            - generic [ref=f1e14]: Search
            - generic [ref=f1e15]:
              - generic [ref=f1e16]: alt
              - generic [ref=f1e17]: +
              - generic [ref=f1e18]: /
      - listitem [ref=f1e19]:
        - link "Cart, shift, alt, c" [ref=f1e20] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=f1e21]:
            - generic [ref=f1e22]: Cart
            - generic [ref=f1e23]:
              - generic [ref=f1e24]: shift
              - generic [ref=f1e25]: +
              - generic [ref=f1e26]: alt
              - generic [ref=f1e27]: +
              - generic [ref=f1e28]: C
      - listitem [ref=f1e29]:
        - link "Home, shift, alt, h" [ref=f1e30] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=f1e31]:
            - generic [ref=f1e32]: Home
            - generic [ref=f1e33]:
              - generic [ref=f1e34]: shift
              - generic [ref=f1e35]: +
              - generic [ref=f1e36]: alt
              - generic [ref=f1e37]: +
              - generic [ref=f1e38]: H
      - listitem [ref=f1e39]:
        - link "Your orders, shift, alt, o" [ref=f1e40] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=f1e41]:
            - generic [ref=f1e42]: Orders
            - generic [ref=f1e43]:
              - generic [ref=f1e44]: shift
              - generic [ref=f1e45]: +
              - generic [ref=f1e46]: alt
              - generic [ref=f1e47]: +
              - generic [ref=f1e48]: O
      - listitem [ref=f1e49]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=f1e50] [cursor=pointer]:
          - generic [ref=f1e51]:
            - generic [ref=f1e52]: Show/Hide shortcuts
            - generic [ref=f1e53]:
              - generic [ref=f1e54]: shift
              - generic [ref=f1e55]: +
              - generic [ref=f1e56]: alt
              - generic [ref=f1e57]: +
              - generic [ref=f1e58]: Z
    - generic [ref=f1e59]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=f1e65]:
    - navigation "Primary" [ref=f1e66]:
      - generic [ref=f1e67]:
        - generic [ref=f1e68]:
          - link "Amazon.in" [ref=f1e70] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Pune 411014 Update location" [ref=f1e73] [cursor=pointer]:
            - generic [ref=f1e75]:
              - generic [ref=f1e76]: Delivering to Pune 411014
              - generic [ref=f1e77]: Update location
        - search [ref=f1e80]:
          - generic [ref=f1e83]:
            - generic [ref=f1e84]: All
            - combobox "Select the department you want to search in" [ref=f1e87] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Fresh Meat"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [active] [ref=f1e90]: Helmet
          - generic "Go" [ref=f1e93] [cursor=pointer]:
            - button "Go" [ref=f1e94]
        - generic [ref=f1e96]:
          - generic [ref=f1e97]:
            - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=f1e98] [cursor=pointer]:
              - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
              - generic [ref=f1e101]:
                - img "India" [ref=f1e102]
                - generic [ref=f1e103]: EN
            - button "Expand to Change Language or Country" [ref=f1e104] [cursor=pointer]
          - generic [ref=f1e105]:
            - link "Hello, sign in Account & Lists" [ref=f1e106] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=f1e107]: Hello, sign in
              - generic [ref=f1e109]: Account & Lists
            - button "Expand Account and Lists" [ref=f1e110] [cursor=pointer]
          - link "Returns & Orders" [ref=f1e111] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=f1e112]: Returns
            - generic [ref=f1e113]: "& Orders"
          - link "0 items in cart" [ref=f1e114] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=f1e115]: "0"
            - generic [ref=f1e118]: Cart
      - dialog [ref=f1e120]:
        - grid [ref=f1e121]:
          - rowgroup [ref=f1e122]:
            - generic [ref=f1e123]:
              - row [ref=f1e124]:
                - gridcell [ref=f1e125] [cursor=pointer]:
                  - button "helmet for bike" [ref=f1e126]
              - row [ref=f1e129]:
                - gridcell [ref=f1e130] [cursor=pointer]:
                  - button "helmet for man" [ref=f1e131]
              - row [ref=f1e134]:
                - gridcell [ref=f1e135] [cursor=pointer]:
                  - button "helmet cleaner spray inner foam" [ref=f1e136]
              - row [ref=f1e139]:
                - gridcell [ref=f1e140] [cursor=pointer]:
                  - button "helmet for women scooty" [ref=f1e141]
              - row [ref=f1e144]:
                - gridcell [ref=f1e145] [cursor=pointer]:
                  - button "helmet lock" [ref=f1e146]
              - row [ref=f1e149]:
                - gridcell [ref=f1e150] [cursor=pointer]:
                  - button "helmet bluetooth device" [ref=f1e151]
              - row [ref=f1e154]:
                - gridcell [ref=f1e155] [cursor=pointer]:
                  - button "helmet cap" [ref=f1e156]
              - row [ref=f1e159]:
                - gridcell [ref=f1e160] [cursor=pointer]:
                  - button "helmets for men bike" [ref=f1e161]
              - row [ref=f1e164]:
                - gridcell [ref=f1e165] [cursor=pointer]:
                  - button "helmet stand" [ref=f1e166]
              - row [ref=f1e169]:
                - gridcell [ref=f1e170] [cursor=pointer]:
                  - button "helmet lock for mens bike" [ref=f1e171]
        - status [ref=f1e174]: Prefix helmet, 10 individual suggestions
      - generic [ref=f1e175]:
        - button "Open All Categories Menu" [ref=f1e177] [cursor=pointer]:
          - generic [ref=f1e179]: All
        - list [ref=f1e183]:
          - listitem [ref=f1e184]:
            - generic [ref=f1e185]:
              - link "Fresh" [ref=f1e186] [cursor=pointer]:
                - /url: /fresh?ref_=nav_cs_grocery
              - button "Fresh Details" [ref=f1e187] [cursor=pointer]
          - listitem [ref=f1e188]:
            - link "Amazon Pay" [ref=f1e190] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=f1e191]:
            - link "Mobiles" [ref=f1e193] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=f1e194]:
            - link "Today's Deals" [ref=f1e196] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=f1e197]:
            - link "Coupons" [ref=f1e199] [cursor=pointer]:
              - /url: /coupons?ref_=nav_cs_coupons
          - listitem [ref=f1e200]:
            - link "Flights" [ref=f1e202] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
          - listitem [ref=f1e203]:
            - link "Electronics" [ref=f1e205] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=f1e206]:
            - link "Computers" [ref=f1e208] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=f1e209]:
            - link "New Releases" [ref=f1e211] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=f1e212]:
            - link "Bestsellers" [ref=f1e214] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=f1e215]:
            - link "Fashion" [ref=f1e217] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=f1e218]:
            - link "Home & Kitchen" [ref=f1e220] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=f1e221]:
            - link "Video Games" [ref=f1e223] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=f1e224]:
            - link "Baby" [ref=f1e226] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=f1e227]:
            - link "Grocery & Gourmet Foods" [ref=f1e229] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=f1e230]:
            - link "Books" [ref=f1e232] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=f1e233]:
            - link "Kindle eBooks" [ref=f1e235] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=f1e236]:
            - link "Sports, Fitness & Outdoors" [ref=f1e238] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=f1e239]:
            - link "Toys & Games" [ref=f1e241] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=f1e242]:
            - link "Car & Motorbike" [ref=f1e244] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=f1e245]:
            - link "Pet Supplies" [ref=f1e247] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=f1e248]:
            - link "Custom Products" [ref=f1e250] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=f1e251]:
            - link "Customer Service" [ref=f1e253] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=f1e254]:
            - link "Beauty & Personal Care" [ref=f1e256] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=f1e257]:
            - link "Gift Cards" [ref=f1e259] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=f1e260]:
            - link "Home Improvement" [ref=f1e262] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=f1e263]:
            - generic [ref=f1e264]:
              - link "Prime" [ref=f1e265] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=f1e266] [cursor=pointer]
          - listitem [ref=f1e267]:
            - link "AmazonBasics" [ref=f1e269] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=f1e270]:
            - link "Audible" [ref=f1e272] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=f1e273]:
            - link "Health, Household & Personal Care" [ref=f1e275] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
        - link "Jan26_Event" [ref=f1e279] [cursor=pointer]:
          - /url: /events/greatindianfestival/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=913c2c21-782e-4de5-909f-10ab3b6494e9&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=ZPWC9CMHF96XTPFGAKB4
          - img "Jan26_Event" [ref=f1e280]
  - main [ref=f1e283]:
    - generic [ref=f1e286]:
      - list [ref=f1e288]:
        - listitem [ref=f1e289]:
          - link [ref=f1e294] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=222836655031&pd_rd_w=9ofd9&content-id=amzn1.sym.04aa3a5a-e125-4339-affa-11056af210b8&pf_rd_p=04aa3a5a-e125-4339-affa-11056af210b8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=eTudP&pd_rd_r=e3e6e7e3-75ec-437d-8e8d-afc6c2e555eb&ref_=pd_hp_d_r_atf_unk
            - generic:
              - generic:
                - generic:
                  - heading "Flash sale" [level=3]
                  - generic: Under ₹99
                - generic:
                  - generic:
                    - img "Logo"
            - img "LowASP" [ref=f1e296]
        - listitem [ref=f1e297]:
          - link [ref=f1e302] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=220674670031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F5925789031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=P0AG5&content-id=amzn1.sym.a2ecdf8a-07cf-46c0-998a-b14983e3d291&pf_rd_p=a2ecdf8a-07cf-46c0-998a-b14983e3d291&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=eTudP&pd_rd_r=e3e6e7e3-75ec-437d-8e8d-afc6c2e555eb&ref_=pd_hp_d_r_atf_unk
            - generic:
              - generic:
                - generic:
                  - heading "Best deals under ₹499" [level=3]
                  - generic: Kitchen Finds
                - generic:
                  - generic:
                    - img "RTB"
            - img "LowASP" [ref=f1e304]
        - listitem [ref=f1e305]:
          - generic [ref=f1e309]:
            - link "Under ₹599 Perfumes Souled store Bewakoof Men *T&C apply" [ref=f1e310] [cursor=pointer]:
              - /url: https://www.amazon.in/s/?_encoding=UTF8&i=beauty&rh=n%3A1374298031%2Cp_85%3A10440599031%2Cp_36%3A-59900&s=exact-aware-popularity-rank&dc=&qid=1776327139&rnid=1741387031&ref=sr_st_exact-aware-popularity-rank&ds=v1%3A4Jdalj%2BI4jGloZYCBF5S%2BRFly9n9P9p1Vvuig3kqtHM&pd_rd_w=X1tHM&content-id=amzn1.sym.6a32e827-3cd5-4ca5-959b-eb8ef22ba01d&pf_rd_p=6a32e827-3cd5-4ca5-959b-eb8ef22ba01d&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=eTudP&pd_rd_r=e3e6e7e3-75ec-437d-8e8d-afc6c2e555eb&ref_=pd_hp_d_r_atf_unk
              - generic:
                - generic:
                  - generic:
                    - heading "Under ₹599 Perfumes" [level=3]
                  - generic:
                    - generic:
                      - img "Souled store Bewakoof"
              - img "Men" [ref=f1e312]
              - generic [ref=f1e313]: "*T&C apply"
            - generic: "*T&C apply"
        - listitem [ref=f1e314]:
          - generic [ref=f1e318]:
            - link "Under ₹399 Jeans Kurta Men jeans *T&C apply" [ref=f1e319] [cursor=pointer]:
              - /url: https://www.amazon.in/s/?_encoding=UTF8&i=apparel&rh=n%3A1968076031%2Cp_28%3ADenims%257CJeans%257Cdenim%257Cdenims%257Cjeans%2Cp_36%3A-40000&s=exact-aware-popularity-rank&hidden-keywords=-B0CR1V62RM-women-kids-accessories-innerwear-girl&qid=1791496503&rnid=4595083031&xpid=SOA60-YDEhyD-&ref=sr_nr_p_36_0_0&pd_rd_w=6RqxJ&content-id=amzn1.sym.2afeca7b-e156-461e-9b0a-88e07ccca1b9&pf_rd_p=2afeca7b-e156-461e-9b0a-88e07ccca1b9&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=9XCgV&pd_rd_r=f114d4ce-9383-4059-bd17-67aff568e05c&ref_=pd_hp_d_r_stg_unk
              - generic:
                - generic:
                  - generic:
                    - heading "Under ₹399 Jeans" [level=3]
                  - generic:
                    - generic:
                      - img "Kurta"
              - img "Men jeans" [ref=f1e321]
              - generic [ref=f1e322]: "*T&C apply"
            - generic: "*T&C apply"
        - listitem [ref=f1e323]:
          - generic [ref=f1e327]:
            - link "Under ₹699 Car & bike cleaning essentials Powermax | leader Vehicles *T&C apply" [ref=f1e328] [cursor=pointer]:
              - /url: https://www.amazon.in/s/?_encoding=UTF8&i=automotive&bbn=204658223031&rh=n%3A204658223031%2Cp_36%3A-70000&dc=&page=2&qid=1791379134&rnid=5814682031&xpid=dzLgegBMDGDAq&ref=sr_nr_p_36_0_0&pd_rd_w=Cptx6&content-id=amzn1.sym.f6712d9e-cf7e-490b-8da0-13da148474ac&pf_rd_p=f6712d9e-cf7e-490b-8da0-13da148474ac&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=eTudP&pd_rd_r=e3e6e7e3-75ec-437d-8e8d-afc6c2e555eb&ref_=pd_hp_d_r_atf_unk
              - generic:
                - generic:
                  - generic:
                    - heading "Under ₹699" [level=3]
                    - generic: Car & bike cleaning essentials
                  - generic:
                    - generic:
                      - img "Powermax | leader"
              - img "Vehicles" [ref=f1e330]
              - generic [ref=f1e331]: "*T&C apply"
            - generic: "*T&C apply"
        - listitem [ref=f1e332]:
          - generic [ref=f1e340]:
            - link "From ₹14,499 Segment's fastest processor REDMI SSG" [ref=f1e341] [cursor=pointer]:
              - /url: /dp/B0GS5Y7QBF/?_encoding=UTF8&_encoding=UTF8&ref_=pd_hp_d_r_atf_unk&pd_rd_w=bZ9rq&content-id=amzn1.sym.b783d9be-8bc0-4bf7-a2ed-ff99c9a88b5f&pf_rd_p=b783d9be-8bc0-4bf7-a2ed-ff99c9a88b5f&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=eTudP&pd_rd_r=e3e6e7e3-75ec-437d-8e8d-afc6c2e555eb
              - generic [ref=f1e343]:
                - generic [ref=f1e344]:
                  - heading "From ₹14,499" [level=3] [ref=f1e345]
                  - generic [ref=f1e348]: Segment's fastest processor
                - img "REDMI" [ref=f1e351]
              - img "SSG" [ref=f1e352]
            - region "Video Player" [ref=f1e354]:
              - application [ref=f1e355]
              - generic [ref=f1e356] [cursor=pointer]
              - button "Play" [ref=f1e358] [cursor=pointer]:
                - generic [ref=f1e359]: 
              - text: 
        - listitem [ref=f1e361]:
          - link [ref=f1e366] [cursor=pointer]:
            - /url: /s/?_encoding=UTF8&i=hpc&rh=n%3A1374539031%2Cp_36%3A10000-30000&pd_rd_w=DSW1w&content-id=amzn1.sym.d10a2bf1-53c1-426f-aa0b-fecccf43cd04&pf_rd_p=d10a2bf1-53c1-426f-aa0b-fecccf43cd04&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=eTudP&pd_rd_r=e3e6e7e3-75ec-437d-8e8d-afc6c2e555eb&ref_=pd_hp_d_r_atf_unk
            - generic:
              - generic:
                - generic:
                  - heading "Under ₹299" [level=3]
                  - generic: Deals on dishwash
                - generic:
                  - generic:
                    - img "Top brands"
            - img "diwhwashing" [ref=f1e368]
        - listitem [ref=f1e369]:
          - link [ref=f1e374] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=220683129031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25221571272031%252F1953602031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=NWH7i&content-id=amzn1.sym.438e71ce-911f-499b-b006-3b02e47acb2d&pf_rd_p=438e71ce-911f-499b-b006-3b02e47acb2d&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=eTudP&pd_rd_r=e3e6e7e3-75ec-437d-8e8d-afc6c2e555eb&ref_=pd_hp_d_r_atf_unk
            - generic:
              - generic:
                - generic:
                  - heading "Women's fashion under ₹499" [level=3]
                - generic:
                  - generic:
                    - img "RTB"
            - img "LowASP" [ref=f1e376]
        - listitem "Loading more" [ref=f1e377]
      - link "Carousel next slide" [ref=f1e383] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f1e384]:
      - generic [ref=f1e387]:
        - link "Trending deals - See more" [ref=f1e389] [cursor=pointer]:
          - /url: /events/greatindianfestival/?_encoding=UTF8&_encoding=UTF8&ref_=jupwdedqmac&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae
          - heading "Trending deals" [level=3] [ref=f1e391]:
            - generic [ref=f1e392]:
              - generic [ref=f1e393]: Trending deals
              - generic [ref=f1e394]: Trending deals
        - list [ref=f1e398]:
          - listitem [ref=f1e399]:
            - generic [ref=f1e400]:
              - link [ref=f1e402] [cursor=pointer]:
                - /url: /Aristocrat-Altitude-8-Wheel-Medium-Trolley/dp/B0H1MZV6F3/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - 'link "Aristocrat Altitude 8-Wheel Medium Size Hard Case Trolley Bag, Surf Spray | Durable Polypropylene Case, Spacious,... Deal Price: ₹1,349.00, M.R.P.: ₹4,690.00 71% off Great Indian Festival" [ref=f1e407] [cursor=pointer]':
                - /url: /Aristocrat-Altitude-8-Wheel-Medium-Trolley/dp/B0H1MZV6F3/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
                - generic [ref=f1e410]:
                  - generic [ref=f1e411]: Aristocrat Altitude 8-Wheel Medium Size Hard Case Trolley Bag, Surf Spray | Durable Polypropylene Case, Spacious,...
                  - generic [ref=f1e412]: Aristocrat Altitude…
                - generic [ref=f1e414]:
                  - generic [ref=f1e415]: "Deal Price: ₹1,349.00, M.R.P.: ₹4,690.00"
                  - generic [ref=f1e416]:
                    - generic [ref=f1e418]:
                      - generic [ref=f1e419]: ₹1,349.00
                      - generic [ref=f1e420]:
                        - text: ₹
                        - generic [ref=f1e421]:
                          - text: 1,349
                          - generic [ref=f1e422]: .
                        - text: "00"
                    - generic [ref=f1e423]:
                      - text: "M.R.P:"
                      - generic [ref=f1e424]:
                        - generic [ref=f1e425]: ₹4,690.00
                        - text: ₹4,690.00
                - generic [ref=f1e426]: 71% off Great Indian Festival
          - listitem [ref=f1e428]:
            - generic [ref=f1e429]:
              - link [ref=f1e431] [cursor=pointer]:
                - /url: /Himalaya-Herbals-Removal-Orange-Peel-off/dp/B01L74QH5O/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - 'link "Himalaya Herbals Tan Removal Orange Peel-off Mask, 100g Deal Price: ₹89.00, M.R.P.: ₹135.00 34% off Great Indian Festival" [ref=f1e436] [cursor=pointer]':
                - /url: /Himalaya-Herbals-Removal-Orange-Peel-off/dp/B01L74QH5O/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
                - generic [ref=f1e439]:
                  - generic [ref=f1e440]: Himalaya Herbals Tan Removal Orange Peel-off Mask, 100g
                  - generic [ref=f1e441]: Himalaya Herbals…
                - generic [ref=f1e443]:
                  - generic [ref=f1e444]: "Deal Price: ₹89.00, M.R.P.: ₹135.00"
                  - generic [ref=f1e445]:
                    - generic [ref=f1e447]:
                      - generic [ref=f1e448]: ₹89.00
                      - generic [ref=f1e449]:
                        - text: ₹
                        - generic [ref=f1e450]:
                          - text: "89"
                          - generic [ref=f1e451]: .
                        - text: "00"
                    - generic [ref=f1e452]:
                      - text: "M.R.P:"
                      - generic [ref=f1e453]:
                        - generic [ref=f1e454]: ₹135.00
                        - text: ₹135.00
                - generic [ref=f1e455]: 34% off Great Indian Festival
          - listitem [ref=f1e457]:
            - generic [ref=f1e458]:
              - link [ref=f1e460] [cursor=pointer]:
                - /url: /Listerine-Cool-Mint-Mouthwash-250ml/dp/B0761196MM/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - 'link "Listerine Cool Mint Mouthwash Liquid, Removes 99.9% Germs, 250ml Combo Pack of 3 (Buy 2 Get 1 Free) Deal Price: ₹339.00, M.R.P.: ₹555.00 39% off Great Indian Festival" [ref=f1e465] [cursor=pointer]':
                - /url: /Listerine-Cool-Mint-Mouthwash-250ml/dp/B0761196MM/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
                - generic [ref=f1e468]:
                  - generic [ref=f1e469]: Listerine Cool Mint Mouthwash Liquid, Removes 99.9% Germs, 250ml Combo Pack of 3 (Buy 2 Get 1 Free)
                  - generic [ref=f1e470]: Listerine Cool Min…
                - generic [ref=f1e472]:
                  - generic [ref=f1e473]: "Deal Price: ₹339.00, M.R.P.: ₹555.00"
                  - generic [ref=f1e474]:
                    - generic [ref=f1e476]:
                      - generic [ref=f1e477]: ₹339.00
                      - generic [ref=f1e478]:
                        - text: ₹
                        - generic [ref=f1e479]:
                          - text: "339"
                          - generic [ref=f1e480]: .
                        - text: "00"
                    - generic [ref=f1e481]:
                      - text: "M.R.P:"
                      - generic [ref=f1e482]:
                        - generic [ref=f1e483]: ₹555.00
                        - text: ₹555.00
                - generic [ref=f1e484]: 39% off Great Indian Festival
          - listitem [ref=f1e486]:
            - generic [ref=f1e487]:
              - link [ref=f1e489] [cursor=pointer]:
                - /url: /Wakefit-Mattress-Protector-Machine-Washable/dp/B0H1LZYT9D/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - 'link "Wakefit Water Proof Terry Cotton Feel Mattress Protector | Alloy Grey | Machine Washable | Super Soft | Fits Mattress... Deal Price: ₹496.00, M.R.P.: ₹852.00 42% off Great Indian Festival" [ref=f1e494] [cursor=pointer]':
                - /url: /Wakefit-Mattress-Protector-Machine-Washable/dp/B0H1LZYT9D/?_encoding=UTF8&pd_rd_w=hABJf&content-id=amzn1.sym.e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_p=e6bf8db1-27a0-497a-87b2-9c6dca6947e8&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
                - generic [ref=f1e497]:
                  - generic [ref=f1e498]: Wakefit Water Proof Terry Cotton Feel Mattress Protector | Alloy Grey | Machine Washable | Super Soft | Fits Mattress...
                  - generic [ref=f1e499]: Wakefit Water Pro…
                - generic [ref=f1e501]:
                  - generic [ref=f1e502]: "Deal Price: ₹496.00, M.R.P.: ₹852.00"
                  - generic [ref=f1e503]:
                    - generic [ref=f1e505]:
                      - generic [ref=f1e506]: ₹496.00
                      - generic [ref=f1e507]:
                        - text: ₹
                        - generic [ref=f1e508]:
                          - text: "496"
                          - generic [ref=f1e509]: .
                        - text: "00"
                    - generic [ref=f1e510]:
                      - text: "M.R.P:"
                      - generic [ref=f1e511]:
                        - generic [ref=f1e512]: ₹852.00
                        - text: ₹852.00
                - generic [ref=f1e513]: 42% off Great Indian Festival
      - generic [ref=f1e517]:
        - link "Under ₹499 | Home & kitchen finds - See all" [ref=f1e519] [cursor=pointer]:
          - /url: /events/greatindianfestival/16/?_encoding=UTF8&pd_rd_w=kr8Ie&content-id=amzn1.sym.fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_p=fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
          - heading "Under ₹499 | Home & kitchen finds" [level=3] [ref=f1e521]:
            - generic [ref=f1e522]:
              - generic [ref=f1e523]: Under ₹499 | Home & kitchen finds
              - generic [ref=f1e524]: Under ₹499 | Home & kitchen finds
        - list [ref=f1e528]:
          - listitem [ref=f1e529]:
            - link "Bedsheets & pillows" [ref=f1e530] [cursor=pointer]:
              - /url: /b/ref=man_sbc_LowASP-Halos_2/?_encoding=UTF8&_encoding=UTF8&_encoding=UTF8&node=220674668031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F1380442031%252F1380447031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=kr8Ie&content-id=amzn1.sym.fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_p=fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Makeup under ₹299" [ref=f1e531]
              - generic [ref=f1e534]:
                - generic [ref=f1e535]: Bedsheets & pillows
                - generic [ref=f1e536]: Bedsheets & pillows
          - listitem [ref=f1e537]:
            - link "Kitchen storage" [ref=f1e538] [cursor=pointer]:
              - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=220674670031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F5925789031%252F1379989031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=kr8Ie&content-id=amzn1.sym.fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_p=fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Makeup under ₹299" [ref=f1e539]
              - generic [ref=f1e542]:
                - generic [ref=f1e543]: Kitchen storage
                - generic [ref=f1e544]: Kitchen storage
          - listitem [ref=f1e545]:
            - link "Home decor" [ref=f1e546] [cursor=pointer]:
              - /url: /b/ref=man_sbc_LowASP-Halos_1/?_encoding=UTF8&_encoding=UTF8&_encoding=UTF8&node=220674668031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F1380374031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=kr8Ie&content-id=amzn1.sym.fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_p=fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Makeup under ₹299" [ref=f1e547]
              - generic [ref=f1e550]:
                - generic [ref=f1e551]: Home decor
                - generic [ref=f1e552]: Home decor
          - listitem [ref=f1e553]:
            - link "Kitchen tools" [ref=f1e554] [cursor=pointer]:
              - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=220674670031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F5925789031%252F1380181031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=kr8Ie&content-id=amzn1.sym.fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_p=fa90900d-731a-4bf4-b247-fd3160c1f1fe&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Makeup under ₹299" [ref=f1e555]
              - generic [ref=f1e558]:
                - generic [ref=f1e559]: Kitchen tools
                - generic [ref=f1e560]: Kitchen tools
      - generic [ref=f1e563]:
        - link "Pet Food | Under ₹199 - See all" [ref=f1e565] [cursor=pointer]:
          - /url: /fmc/everyday-essentials-category/?_encoding=UTF8&node=1374515031&pd_rd_w=HY3oR&content-id=amzn1.sym.a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_p=a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
          - heading "Pet Food | Under ₹199" [level=3] [ref=f1e567]:
            - generic [ref=f1e568]:
              - generic [ref=f1e569]: Pet Food | Under ₹199
              - generic [ref=f1e570]: Pet Food | Under ₹199
        - list [ref=f1e574]:
          - listitem [ref=f1e575]:
            - link "Dog food | Starting ₹199" [ref=f1e576] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=pets&rh=n%3A4771395031%2Cp_36%3A-20000&pd_rd_w=HY3oR&content-id=amzn1.sym.a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_p=a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Dog supplies" [ref=f1e577]
              - generic [ref=f1e580]:
                - generic [ref=f1e581]: Dog food | Starting ₹199
                - generic [ref=f1e582]: Dog food | Starting…
          - listitem [ref=f1e583]:
            - link "Cat food | Starting ₹99" [ref=f1e584] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=pets&rh=n%3A4771382031%2Cp_36%3A-17500&pd_rd_w=HY3oR&content-id=amzn1.sym.a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_p=a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Cat supplies" [ref=f1e585]
              - generic [ref=f1e588]:
                - generic [ref=f1e589]: Cat food | Starting ₹99
                - generic [ref=f1e590]: Cat food | Starting…
          - listitem [ref=f1e591]:
            - link "Fish food | Starting ₹99" [ref=f1e592] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=pets&rh=n%3A4771360031%2Cp_36%3A-20000&pd_rd_w=HY3oR&content-id=amzn1.sym.a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_p=a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Birds & small animals" [ref=f1e593]
              - generic [ref=f1e596]:
                - generic [ref=f1e597]: Fish food | Starting ₹99
                - generic [ref=f1e598]: Fish food | Starting…
          - listitem [ref=f1e599]:
            - link "Bird food | Starting ₹149" [ref=f1e600] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=pets&rh=n%3A4771370031%2Cp_36%3A-20000&pd_rd_w=HY3oR&content-id=amzn1.sym.a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_p=a24585c0-0412-41ce-8015-aceb1891df07&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Aquarium supplies" [ref=f1e601]
              - generic [ref=f1e604]:
                - generic [ref=f1e605]: Bird food | Starting ₹149
                - generic [ref=f1e606]: Bird food | Starting…
      - generic [ref=f1e609]:
        - link "Under ₹649 | Footwear & handbags - See all deals" [ref=f1e611] [cursor=pointer]:
          - /url: https://www.amazon.in/b/?_encoding=UTF8&node=1571283031&pd_rd_w=AoKAb&content-id=amzn1.sym.00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_p=00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
          - heading "Under ₹649 | Footwear & handbags" [level=3] [ref=f1e613]:
            - generic [ref=f1e614]:
              - generic [ref=f1e615]: Under ₹649 | Footwear & handbags
              - generic [ref=f1e616]: Under ₹649 | Footwear & handbags
        - list [ref=f1e620]:
          - listitem [ref=f1e621]:
            - link "Men's casual shoes" [ref=f1e622] [cursor=pointer]:
              - /url: https://www.amazon.in/s/?_encoding=UTF8&i=shoes&rh=n%3A1571283031%2Cn%3A1983396031%2Cn%3A1983518031%2Cn%3A9780814031%2Cp_85%3A10440599031%2Cp_n_feature_nineteen_browse-bin%3A11301363031%2Cp_36%3A-65000&s=exact-aware-popularity-rank&dc=&hidden-keywords=-sponsored-kid-child-boy-girl-women-sock-slipper-sandal-formal&qid=1791261702&rnid=4516629031&ref=sr_nr_p_36_0_0&pd_rd_w=AoKAb&content-id=amzn1.sym.00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_p=00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Puma" [ref=f1e623]
              - generic [ref=f1e626]:
                - generic [ref=f1e627]: Men's casual shoes
                - generic [ref=f1e628]: Men's casual shoes
          - listitem [ref=f1e629]:
            - link "Men's sports shoes" [ref=f1e630] [cursor=pointer]:
              - /url: https://www.amazon.in/s/?_encoding=UTF8&i=shoes&rh=n%3A1571283031%2Cn%3A1983396031%2Cn%3A1983518031%2Cn%3A1983519031%2Cp_85%3A10440599031%2Cp_36%3A-64900&s=exact-aware-popularity-rank&dc=&hidden-keywords=-sponsored-kid-child-boy-girl-women-sock-slipper-spike-sandal-jersey-formal-B0H9FM9Y6L&ds=v1%3AdVIzvlH6HSJLDNEzFvm4Z2CwMGl29uXhhVEvnM4m2vo&_encoding=UTF8&qid=1786002863&rnid=1983518031&ref=pd_hp_mw_btf_unk&pd_rd_w=AoKAb&content-id=amzn1.sym.00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_p=00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Sports shoes" [ref=f1e631]
              - generic [ref=f1e634]:
                - generic [ref=f1e635]: Men's sports shoes
                - generic [ref=f1e636]: Men's sports shoes
          - listitem [ref=f1e637]:
            - link "Trendy women's footwear" [ref=f1e638] [cursor=pointer]:
              - /url: https://www.amazon.in/s/?_encoding=UTF8&i=shoes&rh=n%3A1983578031%2Cp_36%3A-64900%2Cp_n_feature_nineteen_browse-bin%3A11301363031&s=exact-aware-popularity-rank&dc=&hidden-keywords=-sponsored-generic-aqua-slipper-walking-running&ds=v1%3A9Kup%2Bs%2FZDiBvwT1Yf0BhbQe2FymIZm8veImG1wRAaag&_encoding=UTF8&qid=1791203589&rnid=11301362031&ref=pd_hp_mw_btf_unk&pd_rd_w=AoKAb&content-id=amzn1.sym.00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_p=00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Mochi" [ref=f1e639]
              - generic [ref=f1e642]:
                - generic [ref=f1e643]: Trendy women's footwear
                - generic [ref=f1e644]: Trendy women's fo…
          - listitem [ref=f1e645]:
            - link "Handbags & clutches" [ref=f1e646] [cursor=pointer]:
              - /url: https://www.amazon.in/s/?_encoding=UTF8&i=shoes&rh=n%3A1571283031%2Cn%3A1983338031%2Cp_36%3A-64900%2Cp_85%3A10440599031%2Cp_n_feature_nineteen_browse-bin%3A11301363031&s=exact-aware-popularity-rank&dc=&hidden-keywords=-sponsored-wallet-crossbody-backpack-drum&ds=v1%3A%2FP8MGHC8USvsjwUeRzMM56lbsn62WhrycUoIKPtlakY&_encoding=UTF8&qid=1791303792&xpid=p6pgRG-p4ZOAg&ref=sr_st_exact-aware-popularity-rank&pd_rd_w=AoKAb&content-id=amzn1.sym.00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_p=00e3ac48-433c-442b-af6b-9f7804476584&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "clogs" [ref=f1e647]
              - generic [ref=f1e650]:
                - generic [ref=f1e651]: Handbags & clutches
                - generic [ref=f1e652]: Handbags & clutches
      - generic [ref=f1e655]:
        - link "Great deals on laptops - Discover all offers" [ref=f1e657] [cursor=pointer]:
          - /url: "%22/s/?_encoding=UTF8&hidden-keywords=B0GN2Y3T6M%7CB0GV15KBMK%7CB0GW8KXZMF%7CB0GW8JNM6J%7CB0H2DHYFQZ%7CB0H2DP9SRC%7CB0H2J8DDKH%7CB0H2JC2Y3B%7CB0GP5GXVQP%7CB0H2JC16KQ%7CB0H2JCL2G6%7CB0F5W5FLPP%7CB0FC2LKFSC%7CB0DTYHD5D1%7CB0DTYKLHYC%7CB0DT74FF9P%7CB0DSHVJPC9%7CB0FMRS6LZV%7CB0FMRTWFMN%7CB0GGRVRTQ1%7CB0GX9NMSDS%7CB0DSFQZTVW%7CB0FDQ2R315%7CB0F4R6GXWJ%7CB0FN97FRVS%7CB0FN9WN6XD%7CB0FKBMW1BP%7CB0FKBM4SWJ%7CB0FMRSJK1L%7CB0FNKFV89X%7CB0FNKCY6CJ%7CB0GYRGV13D%7CB0GYRK1RZC%7CB0GYRM4FP4%7CB0GYRJZZ29%7CB0F5B2X1SD%7CB0G2BHDDB8%7CB0G2BLXG3B%7CB09BB49K3S%7CB09BB75X71%7CB09BB766ZL%7CB0GVNS6JDR%7CB0GX9LWHCS%7CB0GX9JGP2Q%7CB0GX9K5JJFB0FDKPZHB7%7CB0FDKS93JV%7CB0F9X5DSBS%7CB0F5B2X1SD%7CB0G2BHDDB8%7CB0G2BLXG3B%7CB09BB49K3S%7CB09BB75X71%7CB09BB766ZL%7CB0GVNS6JDR%7CB0GX9LWHCS%7CB0GX9JGP2Q%7CB0GX9K5JJFB0FDKPZHB7%7CB0FDKS93JV%7CB0F9X5DSBS%7CB0GWQ7MQ1Q%7CB0GGRLL9NH%7CB0GTVMDK72%7CB0GTW3GBTV%7CB0FMRSDQL2%7CB0FMRVXBRJ%7CB0GTVQNMHS%7CB0GTW36LDC%7CB0GTVRDRFH%7CB0GTVZ47CS%7CB0GTVSSBWK%7CB0GTVKNL5W%7CB0GTVQNFZP%7CB0GTVWLZLZ%7CB0GTVH2R2Q%7CB0GWDYQS5M%7CB0GGRQF7RG%7CB0GXJYZ4X8%7CB0GX9FLHBLB0FDKPZHB7%7CB0FDKS93JV%7CB0F9X5DSBS%7CB0H8P64MJQ%7CB0GGRLL9NH%7CB0GTVMDK72%7CB0GTW3GBTV%7CB0FMRSDQL2%7CB0FMRVXBRJ%7CB0GTVQNMHS%7CB0GTW36LDC%7CB0GTVRDRFH%7CB0GTVZ47CS%7CB0GTVSSBWK%7CB0GTVKNL5W%7CB0GTVQNFZP%7CB0GTVWLZLZ%7CB0GTVH2R2Q%7CB0GWDYQS5M%7CB0GGRQF7RG%7CB0GXJYZ4X8%7CB0GX9FLHBL&pd_rd_w=Vmco1&content-id=amzn1.sym.a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_p=a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk"
          - heading "Great deals on laptops" [level=3] [ref=f1e659]:
            - generic [ref=f1e660]:
              - generic [ref=f1e661]: Great deals on laptops
              - generic [ref=f1e662]: Great deals on laptops
        - list [ref=f1e666]:
          - listitem [ref=f1e667]:
            - link "Laptops for Students| Up to 40% off" [ref=f1e668] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&hidden-keywords=B0GN2Y3T6M%7CB0GV15KBMK%7CB0GW8KXZMF%7CB0GW8JNM6J%7CB0H2DHYFQZ%7CB0H2DP9SRC%7CB0H2J8DDKH%7CB0H2JC2Y3B%7CB0GP5GXVQP%7CB0H2JC16KQ%7CB0H2JCL2G6%7CB0F5W5FLPP%7CB0FC2LKFSC%7CB0DTYHD5D1%7CB0DTYKLHYC%7CB0DT74FF9P%7CB0DSHVJPC9%7CB0FMRS6LZV%7CB0FMRTWFMN%7CB0GGRVRTQ1%7CB0GX9NMSDS%7CB0DSFQZTVW%7CB0FDQ2R315%7CB0F4R6GXWJ%7CB0FN97FRVS%7CB0FN9WN6XD%7CB0FKBMW1BP%7CB0FKBM4SWJ%7CB0FMRSJK1L%7CB0FNKFV89X%7CB0FNKCY6CJ%7CB0GYRGV13D%7CB0GYRK1RZC%7CB0GYRM4FP4%7CB0GYRJZZ29%7CB0F5B2X1SD%7CB0G2BHDDB8%7CB0G2BLXG3B%7CB09BB49K3S%7CB09BB75X71%7CB09BB766ZL%7CB0GVNS6JDR%7CB0GX9LWHCS%7CB0GX9JGP2Q%7CB0GX9K5JJF&pd_rd_w=Vmco1&content-id=amzn1.sym.a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_p=a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Laptops for Students" [ref=f1e669]
              - generic [ref=f1e672]:
                - generic [ref=f1e673]: Laptops for Students| Up to 40% off
                - generic [ref=f1e674]: Laptops for Studen…
          - listitem [ref=f1e675]:
            - link "Everyday AI Laptops|Up to 40% off" [ref=f1e676] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&hidden-keywords=B0FDKPZHB7%7CB0FDKS93JV%7CB0F9X5DSBS%7CB0F5B2X1SD%7CB0G2BHDDB8%7CB0G2BLXG3B%7CB09BB49K3S%7CB09BB75X71%7CB09BB766ZL%7CB0GVNS6JDR%7CB0GX9LWHCS%7CB0GX9JGP2Q%7CB0GX9K5JJF&pd_rd_w=Vmco1&content-id=amzn1.sym.a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_p=a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Everyday AI Laptops" [ref=f1e677]
              - generic [ref=f1e680]:
                - generic [ref=f1e681]: Everyday AI Laptops|Up to 40% off
                - generic [ref=f1e682]: Everyday AI Lapto…
          - listitem [ref=f1e683]:
            - link "Gaming & Content Creation| Up to 40% off" [ref=f1e684] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&hidden-keywords=B0FDKPZHB7%7CB0FDKS93JV%7CB0F9X5DSBS%7CB0GWQ7MQ1Q%7CB0GGRLL9NH%7CB0GTVMDK72%7CB0GTW3GBTV%7CB0FMRSDQL2%7CB0FMRVXBRJ%7CB0GTVQNMHS%7CB0GTW36LDC%7CB0GTVRDRFH%7CB0GTVZ47CS%7CB0GTVSSBWK%7CB0GTVKNL5W%7CB0GTVQNFZP%7CB0GTVWLZLZ%7CB0GTVH2R2Q%7CB0GWDYQS5M%7CB0GGRQF7RG%7CB0GXJYZ4X8%7CB0GX9FLHBL&pd_rd_w=Vmco1&content-id=amzn1.sym.a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_p=a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Gaming & Content Creation" [ref=f1e685]
              - generic [ref=f1e688]:
                - generic [ref=f1e689]: Gaming & Content Creation| Up to 40% off
                - generic [ref=f1e690]: Gaming & Content…
          - listitem [ref=f1e691]:
            - link "Next Gen AI Laptops| Up to 40% off" [ref=f1e692] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&hidden-keywords=B0FDKPZHB7%7CB0FDKS93JV%7CB0F9X5DSBS%7CB0H8P64MJQ%7CB0GGRLL9NH%7CB0GTVMDK72%7CB0GTW3GBTV%7CB0FMRSDQL2%7CB0FMRVXBRJ%7CB0GTVQNMHS%7CB0GTW36LDC%7CB0GTVRDRFH%7CB0GTVZ47CS%7CB0GTVSSBWK%7CB0GTVKNL5W%7CB0GTVQNFZP%7CB0GTVWLZLZ%7CB0GTVH2R2Q%7CB0GWDYQS5M%7CB0GGRQF7RG%7CB0GXJYZ4X8%7CB0GX9FLHBL&pd_rd_w=Vmco1&content-id=amzn1.sym.a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_p=a96d0463-de8e-42e5-947e-d178100e8807&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Next Gen AI Laptops" [ref=f1e693]
              - generic [ref=f1e696]:
                - generic [ref=f1e697]: Next Gen AI Laptops| Up to 40% off
                - generic [ref=f1e698]: Next Gen AI Lapto…
      - generic [ref=f1e701]:
        - link "Starting ₹99 | Deals on gardening essentials - See all offers" [ref=f1e703] [cursor=pointer]:
          - /url: /s/?_encoding=UTF8&i=lawngarden&srs=216440134031&bbn=216440134031&rh=n%3A216440134031%2Cp_n_deal_type%3A26921224031&s=popularity-rank&pd_rd_w=umE4W&content-id=amzn1.sym.8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_p=8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
          - heading "Starting ₹99 | Deals on gardening essentials" [level=3] [ref=f1e705]:
            - generic [ref=f1e706]:
              - generic [ref=f1e707]: Starting ₹99 | Deals on gardening essentials
              - generic [ref=f1e708]: Starting ₹99 | Deals on gardening essentials
        - list [ref=f1e712]:
          - listitem [ref=f1e713]:
            - link "Starting ₹99 | Live plants & seeds" [ref=f1e714] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=lawngarden&srs=218389493031&rh=n%3A218389493031&s=popularity-rank&pd_rd_w=umE4W&content-id=amzn1.sym.8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_p=8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Cycles" [ref=f1e715]
              - generic [ref=f1e718]:
                - generic [ref=f1e719]: Starting ₹99 | Live plants & seeds
                - generic [ref=f1e720]: Starting ₹99 | Live…
          - listitem [ref=f1e721]:
            - link "Starting ₹189 | Pots & planters" [ref=f1e722] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=lawngarden&srs=216440136031&rh=n%3A216440136031&s=popularity-rank&pd_rd_w=umE4W&content-id=amzn1.sym.8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_p=8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Badminton" [ref=f1e723]
              - generic [ref=f1e726]:
                - generic [ref=f1e727]: Starting ₹189 | Pots & planters
                - generic [ref=f1e728]: Starting ₹189 | Pot…
          - listitem [ref=f1e729]:
            - link "Starting ₹134 | Soil & Fertilisers" [ref=f1e730] [cursor=pointer]:
              - /url: //s/?_encoding=UTF8&i=lawngarden&srs=212240768031&rh=n%3A212240768031&s=popularity-rank&pd_rd_w=umE4W&content-id=amzn1.sym.8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_p=8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Fit acc" [ref=f1e731]
              - generic [ref=f1e734]:
                - generic [ref=f1e735]: Starting ₹134 | Soil & Fertilisers
                - generic [ref=f1e736]: Starting ₹134 | Soil…
          - listitem [ref=f1e737]:
            - link "Starting ₹149 | Gardening tools" [ref=f1e738] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=lawngarden&srs=218390545031&rh=n%3A218390545031&s=popularity-rank&pd_rd_w=umE4W&content-id=amzn1.sym.8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_p=8c4df9fe-63f5-4b59-9ada-cc3c8449d460&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Weights" [ref=f1e739]
              - generic [ref=f1e742]:
                - generic [ref=f1e743]: Starting ₹149 | Gardening tools
                - generic [ref=f1e744]: Starting ₹149 | Gar…
      - generic [ref=f1e747]:
        - link "Fitness & sports essentials - See all offers" [ref=f1e749] [cursor=pointer]:
          - /url: /b/?_encoding=UTF8&node=1984443031&pd_rd_w=C77Nd&content-id=amzn1.sym.00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_p=00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
          - heading "Fitness & sports essentials" [level=3] [ref=f1e751]:
            - generic [ref=f1e752]:
              - generic [ref=f1e753]: Fitness & sports essentials
              - generic [ref=f1e754]: Fitness & sports essentials
        - list [ref=f1e758]:
          - listitem [ref=f1e759]:
            - link "Starting ₹179 | Fitness accessories" [ref=f1e760] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=sporting&bbn=222938390031&rh=n%3A222938390031%2Cp_36%3A17900-85000&s=exact-aware-popularity-rank&dc=&qid=1791264396&rnid=1318502031&xpid=5FMqu1GHZLnJa&ref=sr_st_exact-aware-popularity-rank&ds=v1%3A1Jcn05s68FQbpojZADxnqohlpdjktdN%2Fyxi3GlV4%2Fxc&pd_rd_w=C77Nd&content-id=amzn1.sym.00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_p=00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Cycles" [ref=f1e761]
              - generic [ref=f1e764]:
                - generic [ref=f1e765]: Starting ₹179 | Fitness accessories
                - generic [ref=f1e766]: Starting ₹179 | Fitn…
          - listitem [ref=f1e767]:
            - link "Starting ₹189 | Racquets & more" [ref=f1e768] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=sporting&bbn=222938381031&rh=n%3A222938381031%2Cp_36%3A18900-85000&s=exact-aware-popularity-rank&dc=&qid=1791264493&rnid=1318502031&xpid=NmAj0yDAGOoUA&ref=sr_st_exact-aware-popularity-rank&ds=v1%3AgmOGiiS6EzoTs1staLnPbo8mfUS28FiBCQYkjS%2BU%2FLU&pd_rd_w=C77Nd&content-id=amzn1.sym.00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_p=00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Badminton" [ref=f1e769]
              - generic [ref=f1e772]:
                - generic [ref=f1e773]: Starting ₹189 | Racquets & more
                - generic [ref=f1e774]: Starting ₹189 | Rac…
          - listitem [ref=f1e775]:
            - link "Starting ₹189 | Dumbbells & more" [ref=f1e776] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=sporting&bbn=222938384031&rh=n%3A222938384031%2Cp_36%3A18900-85000&s=exact-aware-popularity-rank&dc=&qid=1791264715&rnid=1318502031&ref=sr_st_exact-aware-popularity-rank&ds=v1%3AT0yDP4MPlsSFC4%2BuVy%2F2fEsbkZlzXNktGKqm8D9K5Mk&pd_rd_w=C77Nd&content-id=amzn1.sym.00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_p=00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Fit acc" [ref=f1e777]
              - generic [ref=f1e780]:
                - generic [ref=f1e781]: Starting ₹189 | Dumbbells & more
                - generic [ref=f1e782]: Starting ₹189 | Du…
          - listitem [ref=f1e783]:
            - link "Starting ₹129 | Footballs & more" [ref=f1e784] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=sporting&srs=222938386031&bbn=222938386031&rh=n%3A222938386031%2Cp_36%3A12900-85000&s=popularity-rank&dc=&fs=true&qid=1791264600&rnid=1318502031&ref=sr_nr_p_36_0_0&pd_rd_w=C77Nd&content-id=amzn1.sym.00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_p=00c8e577-7017-49ed-adee-70d6bd420545&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Weights" [ref=f1e785]
              - generic [ref=f1e788]:
                - generic [ref=f1e789]: Starting ₹129 | Footballs & more
                - generic [ref=f1e790]: Starting ₹129 | Foo…
      - generic [ref=f1e793]:
        - link "Starting ₹199 | Toys & games under budget - See all deals" [ref=f1e795] [cursor=pointer]:
          - /url: /b/?_encoding=UTF8&ie=UTF8&node=1350380031&pd_rd_w=ItLRY&content-id=amzn1.sym.21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_p=21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
          - heading "Starting ₹199 | Toys & games under budget" [level=3] [ref=f1e797]:
            - generic [ref=f1e798]:
              - generic [ref=f1e799]: Starting ₹199 | Toys & games under budget
              - generic [ref=f1e800]: Starting ₹199 | Toys & games under budget
        - list [ref=f1e804]:
          - listitem [ref=f1e805]:
            - link "Under ₹199 | Cards & more" [ref=f1e806] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=toys&rh=n%3A1350380031%2Cp_36%3A9900-19999%2Cp_n_format_browse-bin%3A30678569031%2Cp_6%3AA2GTG1HPYW8M2P&s=exact-aware-popularity-rank&dc=&ds=v1%3ADFw4Nl940TQvULjFskZ2eJb21ZInyo5nEOxMmYjbaLo&qid=1790076434&rnid=1318474031&ref=sr_nr_p_6_1&pd_rd_w=ItLRY&content-id=amzn1.sym.21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_p=21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Dolls & playsets" [ref=f1e807]
              - generic [ref=f1e810]:
                - generic [ref=f1e811]: Under ₹199 | Cards & more
                - generic [ref=f1e812]: Under ₹199 | Card…
          - listitem [ref=f1e813]:
            - link "Under ₹299 | Trending toys" [ref=f1e814] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=toys&rh=n%3A1350380031%2Cp_36%3A19900-29999%2Cp_n_format_browse-bin%3A30678569031%2Cp_6%3AA2GTG1HPYW8M2P&s=exact-aware-popularity-rank&dc=&ds=v1%3ADFw4Nl940TQvULjFskZ2eJb21ZInyo5nEOxMmYjbaLo&qid=1790076434&rnid=1318474031&ref=sr_nr_p_6_1&pd_rd_w=ItLRY&content-id=amzn1.sym.21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_p=21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Toddler toys" [ref=f1e815]
              - generic [ref=f1e818]:
                - generic [ref=f1e819]: Under ₹299 | Trending toys
                - generic [ref=f1e820]: Under ₹299 | Trend…
          - listitem [ref=f1e821]:
            - link "Under ₹399 | Soft toys" [ref=f1e822] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=toys&rh=n%3A1350380031%2Cp_36%3A29900-39999%2Cp_n_format_browse-bin%3A30678569031%2Cp_6%3AA2GTG1HPYW8M2P&s=popularity-rank&dc=&ds=v1%3AnkxVEXyw4n5VMo4NH7OyYkd7kBEqaOLEk1BO4YLb4xo&qid=1791551941&rnid=1318474031&xpid=wRsEhlEnl2HnJ&ref=sr_st_popularity-rank&pd_rd_w=ItLRY&content-id=amzn1.sym.21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_p=21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Plushies" [ref=f1e823]
              - generic [ref=f1e826]:
                - generic [ref=f1e827]: Under ₹399 | Soft toys
                - generic [ref=f1e828]: Under ₹399 | Soft t…
          - listitem [ref=f1e829]:
            - link "Under ₹499 | Games & puzzles" [ref=f1e830] [cursor=pointer]:
              - /url: /s/?_encoding=UTF8&i=toys&rh=n%3A1350380031%2Cp_36%3A39900-49999%2Cp_n_format_browse-bin%3A30678569031%2Cp_6%3AA2GTG1HPYW8M2P&s=popularity-rank&dc=&ds=v1%3A9EeOjMK1YW808C%2BuyGqaj5zjZH927oMlm4LziWZ3ZTU&ds=v1%3Abn6rqqYiLYxPb4s7oAESo613uFcT2TfBzMSLCeq%2FUkA&qid=1791552023&rnid=1318474031&ref=sr_st_popularity-ranke-popularity-rank&pd_rd_w=ItLRY&content-id=amzn1.sym.21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_p=21341436-f8dd-4e72-98bb-c5b326151561&pf_rd_r=ZPWC9CMHF96XTPFGAKB4&pd_rd_wg=QGKd2&pd_rd_r=04c8ea18-fee8-493d-a478-b37976aac5ae&ref_=pd_hp_d_r_btf_unk
              - img "Games & puzzles" [ref=f1e831]
              - generic [ref=f1e834]:
                - generic [ref=f1e835]: Under ₹499 | Games & puzzles
                - generic [ref=f1e836]: Under ₹499 | Gam…
  - complementary "Your recently viewed items and featured recommendations" [ref=f1e837]:
    - generic [ref=f1e845]:
      - heading "See personalized recommendations" [level=2] [ref=f1e846]
      - link "Sign in" [ref=f1e849] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0
      - generic [ref=f1e850]:
        - text: New customer?
        - link "Start here." [ref=f1e851] [cursor=pointer]:
          - /url: https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex
  - generic [ref=f1e852]:
    - button "Back to top" [ref=f1e853] [cursor=pointer]
    - generic [ref=f1e855]:
      - generic [ref=f1e856]:
        - heading "Get to Know Us" [level=6] [ref=f1e857]
        - list [ref=f1e858]:
          - listitem [ref=f1e859]:
            - link "About Amazon" [ref=f1e860] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f1e861]:
            - link "Careers" [ref=f1e862] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=f1e863]:
            - link "Press Releases" [ref=f1e864] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=f1e865]:
            - link "Amazon Science" [ref=f1e866] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=f1e868]:
        - heading "Connect with Us" [level=6] [ref=f1e869]
        - list [ref=f1e870]:
          - listitem [ref=f1e871]:
            - link "Facebook" [ref=f1e872] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=f1e873]:
            - link "Twitter" [ref=f1e874] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=f1e875]:
            - link "Instagram" [ref=f1e876] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=f1e878]:
        - heading "Make Money with Us" [level=6] [ref=f1e879]
        - list [ref=f1e880]:
          - listitem [ref=f1e881]:
            - link "Sell on Amazon" [ref=f1e882] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=f1e883]:
            - link "Sell under Amazon Accelerator" [ref=f1e884] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=f1e885]:
            - link "Protect and Build Your Brand" [ref=f1e886] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=f1e887]:
            - link "Amazon Global Selling" [ref=f1e888] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=f1e889]:
            - link "Supply to Amazon" [ref=f1e890] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=f1e891]:
            - link "Become an Affiliate" [ref=f1e892] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=f1e893]:
            - link "Fulfilment by Amazon" [ref=f1e894] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=f1e895]:
            - link "Advertise Your Products" [ref=f1e896] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=f1e897]:
            - link "Amazon Pay on Merchants" [ref=f1e898] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant
      - generic [ref=f1e900]:
        - heading "Let Us Help You" [level=6] [ref=f1e901]
        - list [ref=f1e902]:
          - listitem [ref=f1e903]:
            - link "Your Account" [ref=f1e904] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=f1e905]:
            - link "Returns Centre" [ref=f1e906] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=f1e907]:
            - link "Recalls and Product Safety Alerts" [ref=f1e908] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=f1e909]:
            - link "100% Purchase Protection" [ref=f1e910] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=f1e911]:
            - link "Amazon App Download" [ref=f1e912] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=f1e913]:
            - link "Help" [ref=f1e914] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=f1e916]:
      - link "Amazon India Home" [ref=f1e919] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=f1e922]:
        - generic [ref=f1e923]:
          - link "Choose a language for shopping. Current selection is English." [ref=f1e924] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=f1e926]: English
          - button "Expand to Change Language or Country" [ref=f1e927] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=f1e928] [cursor=pointer]:
          - generic [ref=f1e930]: India
    - generic "More on Amazon" [ref=f1e931]:
      - generic "More on Amazon" [ref=f1e932]:
        - list [ref=f1e933]:
          - listitem [ref=f1e934]:
            - link [ref=f1e935] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=f1e936]
              - generic [ref=f1e937]: Books, art& collectibles
          - listitem [ref=f1e938]
          - listitem [ref=f1e939]:
            - link [ref=f1e940] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=f1e941]
              - generic [ref=f1e942]: Scalable CloudComputing Services
          - listitem [ref=f1e943]
          - listitem [ref=f1e944]:
            - link [ref=f1e945] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=f1e946]
              - generic [ref=f1e947]: DownloadAudio Books
          - listitem [ref=f1e948]
          - listitem [ref=f1e949]:
            - link [ref=f1e950] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=f1e951]
              - generic [ref=f1e952]: Movies, TV& Celebrities
        - list [ref=f1e953]:
          - listitem [ref=f1e954]:
            - link [ref=f1e955] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=f1e956]
              - generic [ref=f1e957]: DesignerFashion Brands
          - listitem [ref=f1e958]
          - listitem [ref=f1e959]:
            - link [ref=f1e960] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=f1e961]
              - generic [ref=f1e962]: Everything ForYour Business
          - listitem [ref=f1e963]
          - listitem [ref=f1e964]:
            - link "Amazon Music Stream millions of songs" [ref=f1e965] [cursor=pointer]:
              - /url: /music/player?ref=footer_apm
              - heading "Amazon Music" [level=5] [ref=f1e966]
              - generic [ref=f1e967]: Stream millions of songs
          - listitem [ref=f1e968]
          - listitem [ref=f1e969]
    - generic [ref=f1e970]:
      - list [ref=f1e971]:
        - listitem [ref=f1e972]:
          - link "Conditions of Use & Sale" [ref=f1e973] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=f1e974]:
          - link "Privacy Notice" [ref=f1e975] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=f1e976]:
          - link "Interest-Based Ads" [ref=f1e977] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=f1e978]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=f1e980]:
    - iframe [ref=f2e2]:
      
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | test("TC01 Select dropdown click on single element", async ({ page }) => {
  5  | 
  6  |     await page.goto('https://rahulshettyacademy.com/AutomationPractice');
  7  |     const actualOption = await page.locator('#dropdown-class-example').selectOption('Option1');
  8  |     await page.waitForTimeout(3000);
  9  |     await expect(actualOption.toString()).toBe('option1');
  10 | 
  11 | })
  12 | 
  13 | test("TC02 Select dropdown getAllElement List", async ({ page }) => {
  14 | 
  15 |     await page.goto('https://rahulshettyacademy.com/AutomationPractice');
  16 | 
  17 |     const dropdownField = await page.locator('#dropdown-class-example');
  18 |     const options = await dropdownField.allInnerTexts();
  19 |     console.log(options);
  20 | 
  21 |     for (const option of options) {
  22 | 
  23 |         if (option.trim() === 'Option3') {
  24 |             await dropdownField.selectOption({ label: option.trim() });
  25 |             break;
  26 |         }
  27 |     }
  28 | 
  29 |     await page.waitForTimeout(3000);
  30 | 
  31 | })
  32 | 
  33 | 
  34 | test("TC_03 Static Dropdown", async ({ page }) => {
  35 | 
  36 |     await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-4');
  37 |     const dropdown = await page.locator('#standard-select');
  38 |     await dropdown.selectOption("green");
  39 |     await page.waitForTimeout(3000);
  40 | 
  41 |     // expect(await dropdown).toContainText('green');  //Failed
  42 |     // expect(await dropdown).toContainText('green');  //Failed
  43 | 
  44 |     expect(await dropdown).toHaveValue('green');
  45 | 
  46 | })
  47 | 
  48 | test("TC_04 AutoSuggestion dropdown", async ({ page }) => {
  49 | 
  50 |     await page.goto('https://www.amazon.in');
  51 | 
  52 |     const continueShoppingPage = await page.locator("//button[text()='Continue shopping']");
  53 | 
  54 |     // Handle "Continue shopping" page if it appears
  55 |     const continueShopping = page.getByRole('button', { name: 'Continue shopping'});
  56 | 
  57 |     if (await continueShopping.count() > 0) {
  58 |         continueShopping.click();
  59 |     }
  60 | 
  61 |     const searchBox = await page.getByPlaceholder('Search Amazon.in');
  62 |     await searchBox.fill("Helmet");
  63 | 
  64 |     const expetedProduct = "helmets for men bike";
  65 | 
  66 |     await page.waitForTimeout(3000);
  67 |     const dropdownLocator = await page.locator("div[role='row']");
  68 |     const count = await dropdownLocator.count();
  69 |     console.log("Total matching result is :", count);
  70 |     const dropdownValues = await page.locator("div[role='row']").allTextContents();
  71 |     // for (const value of dropdownValues) {
  72 |     //     console.log(value);
  73 | 
  74 |     //     if (value.includes(expetedProduct)) {
  75 | 
  76 |     //         break;
  77 |     //     }
  78 |     // }
  79 | 
  80 |     for (let i = 0; i < count; i++) {
  81 |         if (dropdownValues.at(i).trim().toLowerCase()== expetedProduct.toLowerCase()){
  82 |             console.log("I clicked on expeted dropdown value");
> 83 |             await dropdownLocator.nth(i).click();
     |                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  84 |             break;
  85 |         }
  86 |         else {
  87 |             console.log(await dropdownLocator.nth(i).textContent());
  88 |         }
  89 |     }
  90 | 
  91 |     await page.waitForTimeout(3000);
  92 | 
  93 |     expect(await searchBox.inputValue()).toBe(expetedProduct);
  94 | })
```