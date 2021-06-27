

<p align="center">
	<img width="100" height="100" src="./public/coronavirus.png" />
</p>
<h1 style="text-align:center;">CoWIN Vaccine Slots</h1>
<h3  style="text-align:center;"><a href="https://covid-vaccine-slots.netlify.app/">https://covid-vaccine-slots.netlify.app/</a></h3>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7f98116d-7b3a-406d-b41e-0e250c9eba69/deploy-status)](https://app.netlify.com/sites/dazzling-albattani-289751/deploys)

I created the website where you can check the Covid Vaccine Slots without login which is one of the most furstating part. Behind the scene I created the server where I access the official <a href="https://apisetu.gov.in/public/marketplace/api/cowin"> CoWIN APIs </a> and update my DB from their I am transferring it on Frontend website. 

<p align="center">
  <img src=https://socialify.git.ci/HrithikMittal/covid-vaccine-booking/image?font=Bitter&forks=1&issues=1&language=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark>
</p>

**If you like my work, you can support me by buying me a coffee by clicking the link below**


<a href="https://www.buymeacoffee.com/adhikans" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"  /></a>

## Featues

1. State based search from the AutoComplete
2. Districts based search from the AutoComplete
3. Search on the basis of PinCode
4. Distribution based on Age[18+/45+]
5. Distribution based on type of Dose [Dose 1/Dose 2]

## Future Work To Be Done

1. Add next weeks scroll for next day into the table.
2. Display vaccine category available.
3. Display amount of paid Vaccine based on category.
4. Show Complete Address of the Vaccination Center.

## APIs Schema

````json
{
   "center_id":706779,
   "name":"DELHI HEART LUNG INS. SITE 2",
   "address":"3 MM II PANCHKUIAN ROAD NEW DELHI 110005",
   "state_name":"Delhi",
   "district_name":"Central Delhi",
   "block_name":"Not Applicable",
   "pincode":110055,
   "lat":28,
   "long":77,
   "from":"09:00:00",
   "to":"17:00:00",
   "fee_type":"Paid",
   "sessions":[
      {
         "session_id":"2dc48e6c-d3b3-45e3-8dfa-69415c3871e5",
         "date":"06-07-2021",
         "available_capacity":0,
         "min_age_limit":18,
         "vaccine":"COVAXIN",
         "slots":[
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-05:00PM"
         ],
         "available_capacity_dose1":0,
         "available_capacity_dose2":0
      },
      {
         "session_id":"e99604fd-50b7-4520-835b-b2a52cec4406",
         "date":"07-07-2021",
         "available_capacity":0,
         "min_age_limit":18,
         "vaccine":"COVAXIN",
         "slots":[
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-05:00PM"
         ],
         "available_capacity_dose1":0,
         "available_capacity_dose2":0
      },
      {
         "session_id":"8ea2f2e8-ed13-46c9-959b-3c8ef96716bd",
         "date":"08-07-2021",
         "available_capacity":0,
         "min_age_limit":18,
         "vaccine":"COVAXIN",
         "slots":[
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-05:00PM"
         ],
         "available_capacity_dose1":0,
         "available_capacity_dose2":0
      },
      {
         "session_id":"87c2588e-e23a-49c7-a3eb-64ff725c58f9",
         "date":"09-07-2021",
         "available_capacity":0,
         "min_age_limit":18,
         "vaccine":"COVAXIN",
         "slots":[
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-05:00PM"
         ],
         "available_capacity_dose1":0,
         "available_capacity_dose2":0
      },
      {
         "session_id":"2b320c42-af06-4227-a281-d94b39b5f8a3",
         "date":"10-07-2021",
         "available_capacity":0,
         "min_age_limit":18,
         "vaccine":"COVAXIN",
         "slots":[
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-05:00PM"
         ],
         "available_capacity_dose1":0,
         "available_capacity_dose2":0
      },
      {
         "session_id":"6f47c2d0-5c12-441b-9eb8-a47ecdc4e97e",
         "date":"12-07-2021",
         "available_capacity":0,
         "min_age_limit":18,
         "vaccine":"COVAXIN",
         "slots":[
            "09:00AM-11:00AM",
            "11:00AM-01:00PM",
            "01:00PM-03:00PM",
            "03:00PM-05:00PM"
         ],
         "available_capacity_dose1":0,
         "available_capacity_dose2":0
      }
   ],
   "vaccine_fees":[
      {
         "vaccine":"COVAXIN",
         "fee":"1260"
      }
   ]
}
````


